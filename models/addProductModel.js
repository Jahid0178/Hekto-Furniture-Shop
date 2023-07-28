import mongoose from "mongoose";
import addProductSchema from "../schema/addProductSchema";

const AddProduct =
  mongoose.models.add_product ||
  mongoose.model("add_product", addProductSchema);

export default AddProduct;
