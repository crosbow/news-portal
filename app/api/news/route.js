import data from "@/data/data.json";
import { ApiResponse } from "@/utils/apiResponse";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    new ApiResponse(200, "News fetched successfully", data),
    { status: 200 }
  );
};
