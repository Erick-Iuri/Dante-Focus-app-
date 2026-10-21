import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        {/* Item 01 */}
        <Link href={"/"}>
          <div className="cursor-pointer">
            <Image
              src="/Logo com nome.png"
              alt="Logo Dante Roxo"
              width={500}
              height={300}
              className="w-29"
            />
          </div>
        </Link>
        {/* Item 02 */}
        <div className="flex items-center justify-center gap-8">
          <Link href={"/dashboard"}>
            <button
              className="relative cursor-pointer group p-0.5 
          rounded-full bg-linear-to-r from-[#8A2AE3] to-[#3AD5B7] 
          transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,42,227,0.4)] 
          active:scale-95"
            >
              <span className="block px-10 py-2 rounded-full bg-background text-white font-medium transition-all duration-300 group-hover:bg-transparent">
                Dashboard
              </span>
            </button>
          </Link>

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
              className="w-6 cursor-pointer
            inline-block transition-transform duration-200 ease-in-out hover:scale-110 hover:-translate-y-0.5 active:scale-95"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
