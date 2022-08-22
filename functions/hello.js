export async function onRequest({ env }) {
  const task = await env.TEST.get("a");
  let json = JSON.stringify({
    name: "shuhan",
    age: 24,
  });
  let respose = await env.TEST.put("c", json);
  console.log(respose);
  return new Response(task);
}
