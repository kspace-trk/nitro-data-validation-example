import { z } from 'zod';

export default defineEventHandler(async (event) => {
  const bodySchema = z.object({
    name: z.string(),
    age: z.number({ coerce: true }).positive().int(),
  });

  const { name, age } = await readValidatedBody(event, bodySchema.parse);

  return {
    message: `Hello ${name}! You are ${age} years old.`,
  };
});
