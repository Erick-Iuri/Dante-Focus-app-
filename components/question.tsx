import Image from "next/image";
import Link from "next/link";

export default function Question() {
  return (
    <div className="p-10">
      <p>Tarefa</p>

      <div className="max-w-250 mx-auto w-full pt-10"> 
        {/* Aqui é a pergunta! */}
        <div className="flex flex-col gap-5">
          <p className="text-xl font-medium w-xs">
            Quanto tempo você quer dedicar à sua atividade?
          </p>
          <p className="text-md font-light">Selecione uma das opções abaixo para definir seu tempo de foco.</p>
        </div>

        {/* Aqui são os cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-15">
          {/* Card Rápido */}
          <div
            className="relative rounded-tr-lg rounded-b-lg bg-[#1E1F21] p-6 border border-transparent
          hover:border-[#3AD5B7] cursor-pointer transition-all duration-300"
          >
            {/* Tag Superior */}
            <div
              className="absolute -top-7 left-0 bg-[#3AD5B7] px-3 py-1 text-sm
            font-semibold text-white rounded-tr-lg rounded-tl-lg"
            >
              Rápido
            </div>

            <div className="flex items-center justify-between gap-4 mt-1">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Trabalho: 15 min | Pausa: 3 min
                </h3>
                <p className="mt-3 text-sm text-[#A5A7C4]">
                  Pausa Longa: 10 min (a cada 4 ciclos).
                </p>
              </div>

              {/* Indicador/Radio */}
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A5A7C4]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#A5A7C4]" />
              </div>
            </div>
          </div>

          {/* Card Clássico */}
          <div
            className="relative rounded-tr-lg rounded-b-lg bg-[#1E1F21] p-6 border border-transparent
          hover:border-[#8A2AE3] cursor-pointer transition-all duration-300"
          >
            {/* Tag Superior */}
            <div
              className="absolute -top-7 left-0 bg-[#8A2AE3] px-3 py-1 text-sm 
            font-semibold text-white rounded-tr-lg rounded-tl-lg"
            >
              Clássico
            </div>

            <div className="flex items-center justify-between gap-4 mt-1">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Trabalho: 25 min | Pausa: 5 min
                </h3>
                <p className="mt-3 text-sm text-[#A5A7C4]">
                  Pausa Longa: 15 min (a cada 4 ciclos).
                </p>
              </div>

              {/* Indicador/Radio */}
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A5A7C4]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#A5A7C4]" />
              </div>
            </div>
          </div>

          {/* Card Imersivo */}
          <div
            className="relative rounded-tr-lg rounded-b-lg bg-[#1E1F21] p-6 border border-transparent
          hover:border-[#191970] cursor-pointer transition-all duration-300"
          >
            {/* Tag Superior */}
            <div
              className="absolute -top-7 left-0 bg-[#191970] px-3 py-1 text-sm 
            font-semibold text-white rounded-tr-lg rounded-tl-lg"
            >
              Imersivo
            </div>

            <div className="flex items-center justify-between gap-4 mt-1">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Trabalho: 45 min | Pausa: 10 min
                </h3>
                <p className="mt-3 text-sm text-[#A5A7C4]">
                  Pausa Longa: 20 min (a cada 3).
                </p>
              </div>

              {/* Indicador/Radio */}
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A5A7C4]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#A5A7C4]" />
              </div>
            </div>
          </div>

          {/* Card Super Foco! */}
          <div
            className="relative rounded-tr-lg rounded-b-lg bg-[#1E1F21] p-6 border border-transparent
          hover:border-[#FF1493] cursor-pointer transition-all duration-300"
          >
            {/* Tag Superior */}
            <div
              className="absolute -top-7 left-0 bg-[#FF1493] px-3 py-1 text-sm 
            font-semibold text-white rounded-tr-lg rounded-tl-lg"
            >
              Super Foco!
            </div>

            <div className="flex items-center justify-between gap-4 mt-1">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Trabalho: 60 min | Pausa: 15 min
                </h3>
                <p className="mt-3 text-sm text-[#A5A7C4]">
                  Pausa Longa: 30 min (a cada 3 ciclos).
                </p>
              </div>

              {/* Indicador/Radio */}
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A5A7C4]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#A5A7C4]" />
              </div>
            </div>
          </div>
        </div>

        {/* Botão iniciar foco */}
        <div className="flex justify-end">
          <button className="bg-[#8A2AE3] px-7 py-3 rounded-full 
          cursor-pointer hover:bg-[#3AD5B7] active:bg-[#191970]
          transition-all duration-300">Iniciar Foco</button>
        </div>
      </div>
    </div>
  );
}
