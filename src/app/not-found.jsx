import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center  text-center">
      <div>
        <h1 className="font-bold text-3xl">Lo sentimos, esta pagina no existe</h1>
        <Link href="/" className="text-blue-400 hover:text-blue-300 underline text-xl">
          Click para volver al inicio
        </Link>
      </div>
    </section>
  );
}
