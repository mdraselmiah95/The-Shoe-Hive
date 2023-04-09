import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className=" bg-yellow-400 text-center  font-extrabold">
        <h2>This is TEST text </h2>
      </main>
    </>
  );
}
