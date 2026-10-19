import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <div className="p-10">
      <div className="flex justify-center flex-col items-center gap-30">
        <p className="text-2xl italic font-bold">
          Pronto para <span className="text-[#8A2AE3]">foca</span>r?
        </p>

        <div className="relative flex items-center justify-center w-75 h-75
        rounded-full p-3 bg-linear-to-r from-[#8A2AE3] to-[#3E1278] 
        animate-pulse shadow-[0_0_30px_rgba(138,42,227,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer">

          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">

            <button className="relative cursor-pointer group rounded-full bg-linear-to-r 
            from-[#8A2AE3] to-[#3AD5B7] transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,42,227,0.4)] active:scale-95">
            <span className="block px-10 py-2 rounded-full bg-[#42424F] text-white font-bold transition-all duration-300 group-hover:bg-transparent">
              Começar
            </span>
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}
