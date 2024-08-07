import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const state = searchParams.get("state");

  if (!state) {
    return NextResponse.json({ message: "No state provided" }, { status: 400 });
  }

  try {
    // Ganti <ESP32_IP> dengan IP ESP32
    const esp32Url = `http://192.168.1.35/mesin?state=${state}`;
    const response = await fetch(esp32Url);

    if (!response.ok) {
      throw new Error(`Failed to set LED state. Status: ${response.status}`);
    }

    return NextResponse.json({ message: `LED is ${state}` });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error controlling LED" },
      { status: 500 }
    );
  }
}
