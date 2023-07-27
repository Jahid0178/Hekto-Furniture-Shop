import mongoose from "mongoose";
import addProductSchema from "../schema/addProductSchema";

const AddProduct = mongoose.model("add_product", addProductSchema);

export default AddProduct;
