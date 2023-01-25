import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl bg-red-900 font-bold underline">
        Welcome to chat app
      </h1>
    </main>
  );
}
