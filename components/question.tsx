"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Question() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10">
      <p>Tarefa</p>

      <div className="max-w-250 mx-auto w-full pt-10">
        {/* Aqui é a pergunta! */}
        <div className="flex flex-col gap-5">
          <p className="text-xl font-medium w-xs">
            Quanto tempo você quer dedicar à sua atividade?
          </p>
          <p className="text-md font-light">
            Selecione uma das opções abaixo para definir seu tempo de foco.
          </p>
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
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#8A2AE3] px-7 py-3 rounded-full 
          cursor-pointer hover:bg-[#3AD5B7] active:bg-[#191970]
          transition-all duration-300"
          >
            Iniciar Foco
          </button>
        </div>
      </div>

      {/* Modal de Confirmar */}
      <div className="p-6">
        {/* A Modal só aparece se isOpen for true */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm 
          flex items-center justify-center p-4"
          >
            <div className="bg-linear-to-tl from-[#051714] to-[#0E041A] border border-[#8A2AE3] p-6 rounded-xl max-w-md w-full text-white">
              <div className="flex justify-between mb-5">
                <Image
                  src="/LOGO ROXO.png"
                  alt="logo roxo da modal"
                  width={80}
                  height={80}
                  className="w-12"
                />
                <Image
                  onClick={() => setIsOpen(false)}
                  src="/Close branco.svg"
                  alt="Close Branco"
                  width={50}
                  height={50}
                  className="w-6 cursor-pointer
                  inline-block transition-transform duration-200 ease-in-out hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                />
              </div>

              <p className="text-white text-lg mb-5">Pronto para focar?</p>

              <div className="flex gap-2 mb-5 text-md">
                <p className="font-light">Modo</p>
                <p className="text-[#3AD5B7] font-bold">[Nome do Modo]</p>
                <p className="text-[#8A2AE3] font-bold">[X] min de foco.</p>
              </div>

              <div className="text-center mb-5 bg-[#1E1F21] rounded-sm p-5">
                <p className="text-sm font-light">
                  Silencie as notificações e prepare seu ambiente. Complete o
                  bloco para garantir +[X] XP.
                </p>
              </div>

              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-[#FF1493] hover:text-[#3AD5B7] 
                cursor-pointer"
                >
                  Fechar
                </button>

                <button
                  className="relative cursor-pointer group p-0.5 
                  rounded-full bg-linear-to-r from-[#3AD5B7] to-[#3AD5B7] 
                  transition-all duration-300
                  active:scale-95"
                >
                  <span
                    className="block px-10 py-2 rounded-full
                  text-white font-medium 
                   transition-all duration-300 group-hover:bg-transparent"
                  >
                    Começar Foco
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
