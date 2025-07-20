export async function handler(event) {
  return {
    statusCode: event,
    body: JSON.stringify({
      hello: "Vamos criar a conta",
    }),
  };
}
