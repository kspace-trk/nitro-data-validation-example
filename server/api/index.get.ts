export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return {
    message: `Hello ${query.name} !`,
  };
});
