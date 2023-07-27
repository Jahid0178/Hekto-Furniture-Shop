import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/config/mongodb.config";
import AddProduct from "../../../../../models/addProductModel";

export async function POST(request) {
  try {
    if (request.method !== "POST") {
      return NextResponse.error("Method not allowed", 405);
    }

    // Ensure that the incoming request has a JSON payload
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.error("Invalid Content-Type. Expected JSON.", 400);
    }

    const {
      images,
      productName,
      price,
      category,
      quantity,
      brand,
      description,
      tags,
    } = await request.json();

    // Input validation (you can add more validations as needed)
    if (
      !images ||
      !productName ||
      !price ||
      !category ||
      !quantity ||
      !brand ||
      !description ||
      !tags
    ) {
      return NextResponse.error("Required fields missing.", 400);
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new product entry
    await AddProduct.create({
      images,
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
    });
  } catch (error) {
    console.error("Error while processing the request:", error);
    // Handle any errors and respond with an appropriate error message
    return NextResponse.error("Internal Server Error", 500);
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const products = await AddProduct.find();
    if (!products.length) {
      return NextResponse.error("Product Not Found!");
    }
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.error("Internal Error Product Not Found", 500);
  }
}
