import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email is obrigatório" }).email({ message: "Endereço de email invalido" }),
    password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
})

export type LoginFormData = z.infer<typeof loginSchema>;