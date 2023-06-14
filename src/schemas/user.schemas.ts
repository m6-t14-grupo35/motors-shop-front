import { z } from 'zod'

export const userLoginSchema = z.object({
  user: z.string().nonempty('Usuário é obrigatório'),
  password: z.string().nonempty('Senha é obrigatória')
});

export const userRegisterSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Deve ser um email válido').nonempty('Email é obrigatório'),
  cpf: z.string().nonempty('CPF é obrigatório'),
  cellphone: z.string().nonempty('Celular é obrigatório'),
  birthdate: z.date(),
  description: z.string().nonempty('Descrição é obrigatória'),
  zipCode: z.string().nonempty('CEP é obrigatório'),
  state: z.string().nonempty('Estado é obrigatório'),
  city: z.string().nonempty('Cidade é obrigatória'),
  street: z.string().nonempty('Rua é obrigatória'),
  number: z.number(),
  complement: z.string().nonempty('Complemento é obrigatório'),
  is_seller: z.boolean().default(false),
  password: z.string().nonempty('Senha é obrigatória')
});

export type tUserLoginData = z.infer<typeof userLoginSchema>;

export type tUserRegisterData = z.infer<typeof userRegisterSchema>;