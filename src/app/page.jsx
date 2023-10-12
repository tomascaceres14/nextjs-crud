import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";
import React from "react";

async function loadTasks() {
  //   const res = await fetch("http://localhost:3000/api/tasks"); aca pasa por backend
  //   const data = await res.json();
  return await prisma.task.findMany(); // aca se consume directamente la base de datos.
}

export default async function TasksPage() {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}
