"use client";

import Image from "next/image";
import { useState } from "react";

export default function Animation() {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div
        onAnimationEnd={(e) => {
          if (e.animationName === "fade-out") {
            setVisible(false);
          }
        }}
        className="fixed inset-0 flex items-center justify-center z-10 bg-background"
      >
        <div className="flex justify-center items-center gap-5 animate-fade-out">
          <Image
            src="/LOGO ROXO.png"
            alt="Imagem do Dante"
            width={500}
            height={500}
            className="w-30"
          />
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-semibold italic">Dante</p>
            <p className="text-xl">Foque. Leia. Estude.</p>
          </div>
        </div>
      </div>
    )
  );
}
