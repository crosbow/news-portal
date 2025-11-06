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

export const PATCH = async (req, { params }) => {
  const propertiesToChange = await req.json();
  const id = params.id.toString();

  const found = data.findIndex((article) => article.article_id === id);

  if (!found < 0) {
    return NextResponse.json(
      new ApiError(404, `Article with id: '${id}' not found`),
      { status: 404 }
    );
  }

  const propertiesEntries = Object.entries(propertiesToChange);

  if (!propertiesEntries.length) {
    return NextResponse.json(new ApiError(400, `Empty body found`), {
      status: 400,
    });
  }

  for (let p = 0; p < propertiesEntries.length; p++) {
    const property = propertiesEntries[p][0];

    if (property.trim() !== "title" && property.trim() !== "description") {
      console.log(property);

      return NextResponse.json(
        new ApiError(
          400,
          `Cannot change property of '${property}'. Only Title and description change accepted`
        ),
        { status: 400 }
      );
    }
  }

  data[found] = {
    ...data[found],
    ...propertiesToChange,
  };

  return NextResponse.json(
    new ApiResponse(200, "Article Updated successfully", data[found]),
    { status: 200 }
  );
};
