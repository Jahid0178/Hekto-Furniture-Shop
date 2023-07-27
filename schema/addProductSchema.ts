import mongoose, { Schema } from "mongoose";

interface AddProductProps {
  images: [];
  productName: string;
  price: string;
  category: string;
  quantity: string;
  brand: string;
  description: string;
  tags: string[];
}

const addProductSchema = new Schema<AddProductProps>(
  {
    images: [Schema.Types.Mixed],
    productName: String,
    price: String,
    category: String,
    quantity: String,
    brand: String,
    description: String,
    tags: [String],
  },
  {
    timestamps: true,
  }
);

export default addProductSchema;
