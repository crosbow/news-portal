import data from "@/data/data.json";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(data);
};
