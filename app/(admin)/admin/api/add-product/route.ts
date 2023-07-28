import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/config/mongodb.config";
import AddProduct from "../../../../../models/addProductModel";

connectMongoDB();

export async function POST(request: Request) {
  try {
    const {
      files,
      productName,
      price,
      category,
      quantity,
      brand,
      description,
      tags,
    } = await request.json();

    // Create a new product entry
    await AddProduct.create({
      files,
      productName,
      price,
      category,
      quantity,
      brand,
      description,
      tags,
    });

    // Respond with success
    return NextResponse.json({
      message: "Add Product Created",
      status: 201,
      files,
    });
  } catch (error) {
    console.error("Error while processing the request:", error);
    return NextResponse.error;
  }
}

export async function GET() {
  try {
    // await connectMongoDB();
    const products = await AddProduct.find();
    if (!products.length) {
      return NextResponse.error();
    }
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.error();
  }
}
