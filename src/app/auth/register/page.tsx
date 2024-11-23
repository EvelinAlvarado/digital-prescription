import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="text-basePrimary">
      <CardHeader>
        <CardTitle>Criar Conta</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="telefone">Telefone</Label>
                <Input type="text" id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="cpf">CPF</Label>
                <Input type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <CardDescription className="">
          Já tem uma conta?
          <Link
            href="/auth/login"
            // onClick={onToggle}
          >
            <Button variant="link" className="w-min">
              Cadastrar
            </Button>
          </Link>
        </CardDescription>
        <div className="flex items-center space-x-2 w-full pb-2 md:pt-2">
          <hr className="flex-grow border-1 border-my-primary" />
          <span className="text-sm">OU</span>
          <hr className="flex-grow border-1 border-my-primary" />
        </div>
        <Button variant="outline" type="submit" className="w-full">
          <FcGoogle /> Cadastrar com Google
        </Button>
      </CardFooter>
    </div>
    /* telefone, cPF */
  );
};

export default Register;
