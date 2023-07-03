import * as z from 'zod';

const maxYear = new Date().getFullYear() + 1

export const addAdSchema = z.object({
  brand: z.string().nonempty('insira a marca'),
  model: z.string().nonempty('insira o modelo'),
  year: z.coerce.number().min(1886, 'insira um ano valido').max(maxYear, 'insira um ano valido'),
  fuel: z.string().min(0,'insira um valor positivo'),
  km: z.coerce.number().min(0,'insira um valor positivo'),
  color: z.string().nonempty('insira a marca'),
  priceFIPE: z.coerce.number().min(0,'insira um valor positivo'),
  price: z.coerce.number().min(0,'insira um valor positivo'),
  description: z.string().nonempty('insira uma descrição'),
  cover:z.string().url('url invalida').nonempty('imagem obrigatoria'),
  image_1:z.string().url('url invalida').optional(),
  image_2:z.string().url('url invalida').optional(),
  image_3:z.string().url('url invalida').optional(),
  image_4:z.string().url('url invalida').optional(),
  image_5:z.string().url('url invalida').optional()
})

export const editeAdSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.coerce.number().min(1800, 'ano invalido').max(maxYear, 'ano invalido').optional(),
  fuel: z.string().min(0,'insira um valor positivo').optional(),
  km: z.coerce.number().optional(),
  collor: z.string().optional(),
  priceFIPE: z.coerce.number().min(0,'insira um valor positivo').optional(),
  price: z.coerce.number().min(0,'insira um valor positivo').optional(),
  description: z.string().optional(),
  cover:z.string().optional(),
  image_6:z.string().url('url invalida').optional(),
  image_2:z.string().url('url invalida').optional(),
  image_3:z.string().url('url invalida').optional(),
  image_4:z.string().url('url invalida').optional(),
  image_5:z.string().url('url invalida').optional()
})


