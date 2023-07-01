import { z } from 'zod'

export const userLoginSchema = z.object({
  email: z.string().email('Deve ser um e-mail válido').nonempty('Usuário é obrigatório'),
  password: z.string().nonempty('Senha é obrigatória')
});

export const userRegisterSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório').max(40, 'Nome deve ter, no máximo, 40 caracteres'),
  email: z.string().nonempty('E-mail é obrigatório').email('Deve ser um e-mail válido').max(128, 'E-mail deve ter, no máximo, 128 caracteres'),
  cpf: z.string().nonempty('CPF é obrigatório').length(11, 'CPF deve ter 11 caracteres'),
  phone_number: z.string().nonempty('Celular é obrigatório').max(30, 'Celular deve ter, no máximo, 30 caracteres'),
  birthdate: z.string().nonempty('Data de nascimento é obrigatória'),
  description: z.string().nonempty('Descrição é obrigatória'),
  zip_code: z.string().nonempty('CEP é obrigatório').length(8, 'CEP deve ter 8 caracteres'),
  state: z.string().nonempty('Estado é obrigatório').max(30, 'Estado deve ter, no máximo, 30 caracteres'),
  city: z.string().nonempty('Cidade é obrigatória').max(30, 'Cidade deve ter, no máximo, 30 caracteres'),
  street: z.string().nonempty('Rua é obrigatória').max(50, 'Rua deve ter, no máximo, 50 caracteres'),
  number: z.coerce.number().min(1, 'Número deve ter, no mínimo, 1 caracter'),
  complement: z.string().nonempty('Complemento é obrigatório').max(30, 'Complemento deve ter, no máximo, 30 caracteres'),
  is_seller: z.boolean().default(false),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve ter, no mínimo, 8 caracteres'),
  confirmation: z.string().min(1, 'Confirmação de senha é obrigatória'),
}).refine(({ password, confirmation }) => password === confirmation, {
  message: 'Senhas estão diferentes',
  path: ['confirmation']
})

export const addressUpdateSchema = z.object({
  zip_code: z.string().max(8, 'CEP deve ter, no máximo, 8 caracteres').optional(),
  state: z.string().max(30, 'Estado deve ter, no máximo, 30 caracteres').optional(),
  city: z.string().max(30, 'Cidade deve ter, no máximo, 30 caracteres').optional(),
  street: z.string().max(50, 'Rua deve ter, no máximo, 50 caracteres').optional(),
  number: z.coerce.number().min(1, 'Número deve ter, no mínimo, 1 caracter').optional(),
  complement: z.string().max(30, 'Complemento deve ter, no máximo, 30 caracteres').optional()
})

export const retrievePasswordSchema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Deve ser um e-mail válido')
})

export const updatePasswordSchema = z.object({
  newPassword: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve ter, no mínimo, 8 caracteres'),
  confirmation: z.string().min(1, 'Confirmação de senha é obrigatória'),
}).refine(({ newPassword, confirmation }) => newPassword === confirmation, {
  message: 'Senhas estão diferentes',
  path: ['confirmation']
})

export type tUserLoginData = z.infer<typeof userLoginSchema>;

export type tUserRegisterData = z.infer<typeof userRegisterSchema>;

export type tUpdateAddressData = z.infer<typeof addressUpdateSchema>;

export type tRetrievePasswordData = z.infer<typeof retrievePasswordSchema>;

export type tUpdatePasswordData = z.infer<typeof updatePasswordSchema>;