"use client";
import NewChannelModal from "@/components/NewChannelModal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <main>
      <h1 className="text-3xl px-16 font-bold underline">
        Welcome to chat app
        {open && <NewChannelModal closeModal={setOpen} />}
      </h1>
    </main>
  );
}
