import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams)


  return NextResponse.json(null, { status: 404 });
}