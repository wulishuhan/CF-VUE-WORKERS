export async function onRequest({ env }) {
  const task = await env.TEST.get("a");
  env.TEST.put("c", {
    name: "shuhan",
    age: 24,
  });
  return new Response(task);
}
