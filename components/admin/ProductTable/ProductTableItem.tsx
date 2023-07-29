"use client";

import React from "react";
import Button from "@/components/common/Button/Button";
import Image from "next/image";

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
      <td className="p-2 border text-primary">
        <div className="flex gap-4">
          <Button
            type="button"
            className="btn btn-secondary"
            onClick={() => alert("Edit")}
          >
            Edit
          </Button>
          <Button
            type="button"
            className="btn bg-red-600 text-white"
            onClick={() => alert("Delete")}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTableItem;
