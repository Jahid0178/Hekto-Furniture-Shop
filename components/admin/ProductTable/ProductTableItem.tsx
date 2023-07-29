import Image from "next/image";
import React from "react";

const ProductTableItem = () => {
  return (
    <tr>
      <td className="p-2 border text-primary">ID</td>
      <td className="p-2 border text-primary flex items-center gap-2">
        <span>
          <Image src="/" alt="Product Name" width={60} height={60} />
        </span>
        <span>Product Name</span>
      </td>
      <td className="p-2 border text-primary">$ price</td>
      <td className="p-2 border text-primary"> quantity Pcs</td>
      <td className="p-2 border text-primary">Actions</td>
    </tr>
  );
};

export default ProductTableItem;
