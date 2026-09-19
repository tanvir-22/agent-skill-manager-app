import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  if (email !== "admin" && password !== "real") {
    return NextResponse.json({ error: "Invalid credential" }, { status: 401 });
  }

  const response = NextResponse.json({
    message: "login successful",
    user: { id: "1", name: "admin" },
  });
  return response;
}
