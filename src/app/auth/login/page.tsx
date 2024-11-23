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

const Login = () => {
  return (
    <div className=" text-basePrimary">
      <CardHeader>
        <CardTitle>Bem-vindo(a),</CardTitle>
        <CardDescription className="text-baseDark">
          Faça login para gerenciar sua conta e continuar conectado(a).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        <Button type="submit" className="w-full">
          Entrar
        </Button>
        <CardDescription>
          Não tem uma conta?
          <Link
            href="/auth/register"
            // onClick={onToggle}
          >
            <Button variant="link" className="w-min">
              Cadastre-se
            </Button>
          </Link>
        </CardDescription>
        <div className="flex items-center space-x-2 w-full pb-2 md:pt-2">
          <hr className="flex-grow border-1 border-my-primary" />
          <span className="text-sm">OU</span>
          <hr className="flex-grow border-1 border-my-primary" />
        </div>
        <Button
          // onClick={() =>
          //   signIn("google", {
          //     callbackUrl: "http://localhost:3000/user/dashboard",
          //   })
          // }
          variant="outline"
          type="submit"
          className="w-full"
        >
          <FcGoogle />
          Entrar com Google
        </Button>
      </CardFooter>
    </div>
  );
};

export default Login;
