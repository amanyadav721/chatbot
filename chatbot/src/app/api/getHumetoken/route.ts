/* eslint-disable */

import { fetchAccessToken } from "hume";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const accessToken = await fetchAccessToken({
      apiKey: String(process.env.HUME_API_KEY),
      secretKey: String(process.env.HUME_SECRET_KEY),
    });

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Failed to get access token' },
        { status: 500 }
      );
    }

    return NextResponse.json({ accessToken });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get access token' },
      { status: 500 }
    );
  }
}