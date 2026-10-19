import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <div className="flex items-center justify-center p-10 fixed inset-0 pointer-events-none">
      <div className="flex justify-center flex-col items-center gap-20 pointer-events-auto">
        <p className="text-2xl italic font-bold">
          Pronto para <span className="text-[#8A2AE3]">foca</span>r?
        </p>

        <div className="relative group flex items-center justify-center w-85 h-85 rounded-full">
          {/* Borda com gradiente e animação de rotação no hover */}
          <div
            className="absolute inset-0 rounded-full p-4 
          bg-linear-to-r from-[#8A2AE3] to-[#3E1278] transition-transform duration-1000 
          group-hover:rotate-180 shadow-[0_0_20px_rgba(138,42,227,0.3)] 
          group-hover:shadow-[0_0_35px_rgba(138,42,227,0.6)]"
          >
            <div className="w-full h-full rounded-full bg-background" />
          </div>

          {/* Conteúdo centralizado */}
          <div className="relative flex flex-col items-center justify-center gap-7">
            <Image
              src="/LogoFoca.png"
              alt="Logo Foca"
              width={500}
              height={300}
              className="w-15"
            />
            <div className="flex justify-center items-center gap-5
            text-white font-medium italic rounded-full 
            text-lg px-5 py-2 bg-[#42424F] cursor-pointer">
              <span>Começar</span>
              <Image
                src="/Seta-branco.svg"
                alt="Logo Foca"
                width={50}
                height={30}
                className="w-7 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>

        <h1 className="w-60 text-xl font-thin text-center text-[#979797]">
          O Pomodoro Gamificado feito para todos.
        </h1>
      </div>
    </div>
  );
}
