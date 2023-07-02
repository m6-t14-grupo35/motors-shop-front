import { z } from "zod"

export const adSchema = z.object({
  brand: z.string().nonempty().max(30),
  model: z.string().nonempty().max(50),
  year: z.number().nonnegative(),
  fuel: z.enum(["Gasolina", "Etanol", "Diesel", "GLP", "Hybrid", "Electric"]),
  km: z.number().nonnegative(),
  color: z.string().nonempty().max(30),
  price: z.number().nonnegative(),
  priceFIPE: z.number().nonnegative(),
  description: z.string().nonempty(),
  is_sold: z.boolean().optional()
})

export type adData = z.infer<typeof adSchema>