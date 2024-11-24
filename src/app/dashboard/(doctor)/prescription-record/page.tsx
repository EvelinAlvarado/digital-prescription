import React from "react";

export default function PrescriptionRecord() {
  return (
    <section className="flex flex-col justify-start items-start min-h-full">
      <div>
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Receitas Prescritas
        </h2>
        <p className="text-base text-my-dark mb-4">
          Visualize todas as receitas médicas que você prescreveu. Confira os
          detalhes, status e datas de cada prescrição em um formato organizado.
        </p>
      </div>
    </section>
  );
}
