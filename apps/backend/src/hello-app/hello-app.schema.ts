import z from 'zod';

export const helloAppSchema = z.object({
  name: z.string().min(2).max(100),
});

export type HelloAppSchema = z.infer<typeof helloAppSchema>;
