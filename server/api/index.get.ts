import { z } from 'zod';

export default defineEventHandler(async (event) => {
  const querySchema = z.object({
    name: z.string(),
    age: z.number({ coerce: true }).positive().int(),
  });

  const { name, age } = await getValidatedQuery(event, querySchema.parse);

  return `Hello, ${name}! You are ${age} years old.`;
});
