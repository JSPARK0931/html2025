import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Hello from Next.js API!",
    at: new Date().toISOString(),
  });
}
