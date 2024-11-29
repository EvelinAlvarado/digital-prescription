"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(8, { message: "O email é obrigatório" })
    .email({ message: "Digite um email válido" }),
  password: z.string().min(3, {
    message: "A senha deve conter no mínimo 3 caracteres",
  }),
});

const Login = () => {
  const { login } = useAuth();
  const router = useRouter(); // like naviagate()

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   setIsLoading(true);
  //   setError(null);
  //   // console.log(email, password);

  //   /* using API */
  //   try {
  //     await login(email, password);
  //     router.push("/dashboard");
  //   } catch (err: any) {
  //     setError("Falha ao fazer login. Verifique suas credenciais.");
  //     console.error("Error ao fazer o login:", err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    setError(null);
    console.log("credenciais:", values);
    try {
      await login(values.email, values.password);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Falha ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", err.message);
    } finally {
      setIsLoading(false);
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              {/* Campo de Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Campo de Senha */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Senha"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Mensagem de erro */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <Button type="submit" className="w-full mt-5" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        <CardDescription>
          Não tem uma conta?
          <Link href="/auth/register">
            <Button variant="link" className="w-min">
              Cadastre-se
            </Button>
          </Link>
        </CardDescription>
      </CardFooter>
    </div>
  );
};

export default Login;
