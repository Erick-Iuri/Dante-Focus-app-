import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Animation from "@/components/animation";
import Start from "@/components/start";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto px-4 w-full">
      <Animation />

      <Navbar />

      <Start />

      <footer className="fixed bottom-0 left-0 w-full">
        <div
          className="flex justify-center items-center gap-2 p-4"
        >
          <Link
            href="https://github.com/Erick-Iuri/dante"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Github.svg"
              alt="Github icone"
              width={50}
              height={50}
              className="w-5 cursor-pointer
              inline-block transition-transform duration-200 ease-in-out hover:scale-110 hover:-translate-y-0.5 active:scale-95"
            />
          </Link>
          <p>Code by Erick</p>
        </div>
      </footer>
    </div>
  );
}
