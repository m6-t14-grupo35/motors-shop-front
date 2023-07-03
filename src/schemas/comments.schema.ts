import * as z from 'zod';

export const addComent = z.object({
  text: z.string().max(255, "tamanho maximo 255 caracteres")
})

export type taddComent = z.infer<typeof addComent>
