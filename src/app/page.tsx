import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-container flexCenter flex-col p-4 min-h-screen bg-my-light">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="flex gap-5 mt-5 text-7xl font-extrabold leading-[1.15] text-my-primary sm:text-8xl mx-auto">
          <svg
            width="100"
            height="100"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_58_384)">
              <path
                d="M26.8874 8.81502H23.889C23.889 8.81502 23.8726 10.5354 23.8562 10.8631H26.8874C28.018 10.8631 28.9355 11.7807 28.9355 12.9112V18.0396C28.9355 19.1702 28.018 20.0877 26.8874 20.0877H21.1527C19.9567 20.0877 19.0719 19.9731 18.4165 19.7437C17.4826 19.4324 17.0074 18.8917 16.778 18.1707C16.3192 18.1871 15.8768 18.1871 15.5164 18.1871C15.2378 18.1871 14.9593 18.1871 14.6808 18.1871C15.0085 19.7764 15.926 21.2347 18.4329 21.8409C18.9408 21.9556 19.5143 22.0375 20.1369 22.0867V26.8383C20.1369 27.9688 19.2193 28.8864 18.0888 28.8864H12.9276C11.797 28.8864 10.8795 27.9688 10.8795 26.8383V21.1036C10.8795 16.4831 12.6163 16.4831 15.5 16.4831C18.3182 16.4831 22.185 16.4831 22.185 9.7981V4.06343C22.185 1.80233 20.3335 -0.0491486 18.0724 -0.0491486L12.9276 5.77793e-06C10.6665 5.77793e-06 8.81501 1.85149 8.81501 4.11259V8.81502H4.11258C1.8351 8.81502 0 10.6665 0 12.9276V18.056C0 20.3171 1.8351 22.1686 4.11258 22.1686H7.11099V21.1364C7.11099 20.7759 7.12738 20.4318 7.14376 20.1041H4.11258C2.98203 20.1041 2.06448 19.1866 2.06448 18.056V12.9276C2.06448 11.797 2.98203 10.8795 4.11258 10.8795H9.84725C11.0433 10.8795 11.9281 10.9942 12.5835 11.2236C13.5174 11.5349 13.9926 12.0756 14.222 12.7965C14.6808 12.7801 15.1231 12.7801 15.4836 12.7801C15.7622 12.7801 16.0407 12.7801 16.3192 12.7801C15.9915 11.1908 15.074 9.73256 12.5671 9.12633C12.0592 9.01163 11.4857 8.92971 10.8631 8.88056V4.12897C10.8631 2.99842 11.7807 2.08087 12.9112 2.08087H18.056C19.1866 2.08087 20.1041 2.99842 20.1041 4.12897V9.86364C20.1041 14.4841 18.3673 14.4842 15.4836 14.4842C12.6654 14.4842 8.79862 14.4841 8.79862 21.1691V26.9038C8.79862 29.1649 10.6501 31.0164 12.9112 31.0164H18.056C20.3171 31.0164 22.1686 29.1649 22.1686 26.9038V22.2014H26.871C29.1321 22.2014 30.9836 20.3499 30.9836 18.0888V12.9276C31 10.6665 29.1485 8.81502 26.8874 8.81502Z"
                fill="url(#paint0_linear_58_384)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_58_384"
                x1="30.9837"
                y1="30.9573"
                x2="3.36124e-06"
                y2="0.0255613"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.295" stop-color="#2b90dc" />
              </linearGradient>
              <clipPath id="clip0_58_384">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Receita fácil
        </h1>
        <span className="mt-5 text-5xl font-extrabold leading-[1.15] text-basePrimary sm:text-6xl text_gradient text-center my-2 py-3">
          Sua solução definitiva para gestão de receitas
        </span>
        <p className="text-lg text-my-dark sm:text-xl max-w-2xl mt-4 text-center mx-auto">
          Simplifique o processo de prescrição e foque no que realmente importa:
          conectar-se com seus pacientes. De consultas a farmácias, temos tudo o
          que você precisa!
        </p>
        <div className="mx-auto gap-3 mt-8">
          <Link href="/auth/login">
            <Button className="text-lg w-52">Entrar</Button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
