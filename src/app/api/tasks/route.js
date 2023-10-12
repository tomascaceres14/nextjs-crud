import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  //   await prisma.task.create({
  //     data: { title: "My first task", description: "Generic description." },
  //   });
  const tasks = await prisma.task.findMany();
  return NextResponse.json({ tasks: tasks });
}

export async function POST(req) {
  const { title, description } = await req.json();
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
}
