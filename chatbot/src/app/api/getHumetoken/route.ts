// src/app/api/getAccessToken/route.ts
import { fetchAccessToken } from "hume";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const accessToken = await fetchAccessToken({
      apiKey: process.env.HUME_API_KEY!,
      secretKey: process.env.HUME_SECRET_KEY!,
    });

    if (!accessToken) {
      return NextResponse.json(
        { error: "Failed to get access token" },
        { status: 500 }
      );
    }

    return NextResponse.json({ accessToken });
  } catch (error) {
    console.error("Error fetching access token:", error);
    return NextResponse.json(
      { error: "Failed to get access token" },
      { status: 500 }
    );
  }
}
