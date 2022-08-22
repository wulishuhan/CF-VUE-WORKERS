export async function onRequest({ env }) {
  const task = await env.TEST.get("a");
  env.TEST.put("a", {
    name: "shuhan",
    age: 23,
  });
  return new Response(task);
}
