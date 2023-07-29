import mongoose, { Schema } from "mongoose";

interface AddProductProps {
  url: string;
  productName: string;
  price: string;
  category: string;
  quantity: string;
  brand: string;
  description: string;
  delete_url: string;
  tags: string[];
}

const addProductSchema = new Schema<AddProductProps>(
  {
    url: String,
    productName: String,
    price: String,
    category: String,
    quantity: String,
    brand: String,
    description: String,
    delete_url: String,
    tags: [String],
  },
  {
    timestamps: true,
  }
);

export default addProductSchema;
