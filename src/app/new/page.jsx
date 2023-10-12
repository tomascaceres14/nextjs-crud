"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    let method = "POST";
    let url = "/api/tasks/";

    if (params.id) {
      method = "PUT";
      url = url + params.id;
    }

    await fetch(url, {
      method: method,
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={submitHandler}>
        <label htmlFor="title">Titulo de la tarea:</label>
        <input
          type="text"
          id="title"
          name="title"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description">Descripcion de la tarea:</label>
        <textarea
          type="text"
          rows="3"
          id="description"
          name="description"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear
          </button>
          {params.id && (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                router.refresh();
                router.push("/");
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
