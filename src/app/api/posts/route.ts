import { connectToDatabase } from "@/lib/database";
import { Post } from "@/lib/schemas/post.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "asc";

    let query = {};

    if (search) {
      query = { name: { $regex: search, $options: "i" } };
    }

    const sortOrder = sort === "desc" ? -1 : 1;

    const response = await Post.find(query)
      .sort({ createdAt: sortOrder })
      .exec();

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const post = await Post.create(body);
    await post.save();

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
