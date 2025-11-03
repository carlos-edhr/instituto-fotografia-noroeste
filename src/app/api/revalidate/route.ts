import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");

  // Verificar el secret
  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: "Path is required" }, { status: 400 });
  }

  try {
    // Revalidar el path
    revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      path,
      now: Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
