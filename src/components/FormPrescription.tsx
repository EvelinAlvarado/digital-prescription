"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { usePrescriptions } from "@/hooks/usePrescription";
import { Status } from "@/Types/user";
// import { useAuth } from "@/hooks/useAuth";

const formPrescriptionSchema = z.object({
  name_drug: z.string().min(2, {
    message: "O nome do remédio deve ter ao menos 2 caracteres.",
  }),
  quantity: z
    .string()
    .refine((val) => val !== "", {
      message: "A quantidade não pode ser vazia.",
    }) // Valida que el campo no esté vacío
    .transform((val) => Number(val)) // Convierte la cadena a número
    .refine(
      (val) => !isNaN(val) && val > 0, // Verifica si es un número válido y mayor que 0
      { message: "A quantidade deve ser um número maior que 0." }
    ),
  instructions: z
    .string()
    .min(6, {
      message: "As instruções devem ter ao menos 6 caracteres.",
    })
    .max(160, {
      message: "As instruções não podem ultrapassar 160 caracteres.",
    }),
});

export function FormPrescription() {
  // const {user}=useAuth()
  const { addNewPrescriptionFrontendId } = usePrescriptions();
  const user = {
    role: "doctor", // Dynamic (pharmaceutical, doctor, client)
    name: "Carlos Silva",
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formPrescriptionSchema>>({
    resolver: zodResolver(formPrescriptionSchema),
    defaultValues: {
      name_drug: "",
      quantity: undefined,
      instructions: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formPrescriptionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const createdAt = new Date();
    // Data de expiracao é 1 ano depois automaticamente
    const expiresAt = new Date(createdAt);
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    const extraInformation = {
      code: createdAt.toISOString(),
      status: "PENDIENTE" as Status,
      created_at: createdAt,
      expires_at: expiresAt,
      type: 10 /* o que é type */,
    };
    // :Omit<Prescription, "id">
    const sendPrescription = { ...values, ...extraInformation };
    console.log(sendPrescription);
    addNewPrescriptionFrontendId(sendPrescription);

    form.reset();
    form.setValue("quantity", 0);
  }

  return (
    <Card className="w-[30rem] p-4 mx-auto my-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Default input that not submit with the form */}
          <FormItem>
            <FormLabel>Doctor</FormLabel>
            <FormControl>
              <Input defaultValue={`Dr(a). ${user.name}`} disabled />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            {/* o utente é enviado no formulario? */}
            <FormLabel>Nome do Paciente</FormLabel>
            <FormControl>
              <Input placeholder="Ex.: Laura Carvalho" />
            </FormControl>
            <FormMessage />
          </FormItem>
          {/* --------------------------------------------- */}
          <FormField
            control={form.control}
            name="name_drug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Remédio</FormLabel>
                <FormControl>
                  <Input placeholder="Ex.: Paracetamol" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Digite a quantidade (ex.: 2)"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instruções</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex.: Tomar após o café da manhã."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Gerar Receita
          </Button>
        </form>
      </Form>
    </Card>
  );
}
