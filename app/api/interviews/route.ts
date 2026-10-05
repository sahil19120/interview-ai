import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Interview from "@/models/Interview";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }
    await connectDB();

    const body = await request.json();
    body.userId = userId;

    const interview = await Interview.create(body);

    return NextResponse.json(
      {
        success: true,
        interview,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to save interview:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save interview",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    await connectDB();

    const interviews = await Interview.find({
      userId: userId,
    }).sort({
      completedAt: -1,
    });

    return NextResponse.json({
      success: true,
      interviews,
    });
  } catch (error) {
    console.error(
      "Failed to fetch interviews:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch interviews",
      },
      { status: 500 }
    );
  }
}