import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const task = await prisma.task.update({
    data: data,
    where: { id: Number(params.id) },
  });
  return NextResponse.json(task);
}

export async function DELETE(request, { params }) {
  try {
    const deleted = await prisma.task.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ deleted: deleted });
  } catch (e) {
    return NextResponse.json({ error: e.message });
  }
}
