export const config = {
  runtime: "edge",
};

export default function handler(request: Request) {
  const cookies = request.headers.get("cookie") || "";

  if (cookies.includes("devtool_blocked=true")) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/blank.html",
      },
    });
  }

  return new Response(null, { status: 204 });
}
