import data from "@/data/data.json";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { NextResponse } from "next/server";

export const GET = (_req, { params }) => {
  const id = params.id.toString();

  const found = data.find((article) => article.article_id === id);

  if (!found) {
    return NextResponse.json(
      new ApiError(404, `Article with id: '${id}' not found`),
      { status: 404 }
    );
  }

  return NextResponse.json(
    new ApiResponse(200, "Article fetched successfully", found),
    { status: 200 }
  );
};
