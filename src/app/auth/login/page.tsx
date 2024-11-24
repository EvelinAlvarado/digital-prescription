"use client";

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
import { API } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter(); // like naviagate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(email, password);
    // router.push(`/dashboard/${email}`);

    /* using API */
    try {
      // call API using axios
      const response = await API.post("", { email, password });
      console.log("response:", response.data);
      console.log("token:", response.data.token);
      /* const urlName = response.data.user.name
        .toLowerCase()
        .replace(/\s+/g, "-"); */
      //console.log("urlName:", urlName);
      // go to dashboard
      const token = response.data.token;

      //Save token to localStorage
      localStorage.setItem("token", token);
      /* (/user/me) -> token */
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Error durante o login:", error.message);
    }
  };

  return (
    <div className=" text-basePrimary">
      <CardHeader>
        <CardTitle>Bem-vindo(a),</CardTitle>
        <CardDescription className="text-baseDark">
          Faça login para gerenciar sua conta e continuar conectado(a).
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-1">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-6">
            <Button type="submit" className="w-full">
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
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
