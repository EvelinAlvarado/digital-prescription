import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const AuthLayout = () => {
  return (
    <div className="bg-my-base">
      formulario: login(email, password)/register(nome,CPF, telefone, senha,
      select(medico, farmaceutico, paciente) email)
      <Link href="/auth/login">
        <Button className="text-lg w-52">Login</Button>
      </Link>
      <Link href="/auth/register">
        <Button className="text-lg w-52">register</Button>
      </Link>
    </div>
  );
};

export default AuthLayout;
