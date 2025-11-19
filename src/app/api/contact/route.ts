import { NextResponse } from "next/server";
import type { ContactFormPayload } from "@/types/contact";

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  let payload: Partial<ContactFormPayload> = {};

  if (contentType.includes("application/json")) {
    payload = await req.json();
  } else {
    const formData = await req.formData();
    payload = Object.fromEntries(formData.entries()) as Partial<ContactFormPayload>;
  }

  return NextResponse.json({
    success: true,
    message: "İletişim talebiniz alındı. Kısa süre içinde dönüş yapacağız.",
    data: payload,
  });
}
