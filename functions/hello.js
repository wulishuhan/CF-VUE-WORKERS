export async function onRequest({ env }) {
    const task = await env.TEST.get("a");
    return new Response(task);
  }