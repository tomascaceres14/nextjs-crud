import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3 mb-3">
        <Link href="/" className="text-slate-300 hover:text-slate-200">
          <h3 className="font-bold text-3xl">NextJs CRUD</h3>
        </Link>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              Nueva tarea
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
