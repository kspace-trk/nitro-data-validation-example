import { z } from 'zod';

export default defineEventHandler(async (event) => {
  const routerParamsSchema = z.object({
    id: z.number({ coerce: true }).positive().int(),
  });

  const { id } = await getValidatedRouterParams(event, routerParamsSchema.parse);

  return `Hello! id is ${id}!`;
});
