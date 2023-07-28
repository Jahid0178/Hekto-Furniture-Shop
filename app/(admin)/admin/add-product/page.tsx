"use client";

import React, { useState } from "react";
import axios from "axios";
import Container from "@/components/common/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddProductInputProps } from "@/libs/types/types";

type TagsProps = string[];

const AddProductPage = () => {
  const [tags, setTags] = useState<TagsProps>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductInputProps>();
  const onSubmit: SubmitHandler<AddProductInputProps> = async (data) => {
    const modifyData = { ...data, tags };
    const { images, ...rest } = modifyData;
    const formData = new FormData();

    // console.log(images);

    for (let fd in rest) {
      formData.append(fd, (rest as any)[fd]);
    }

    for (let img in images) {
      formData.append("files", (images as any)[img]);
    }

    const response = await axios.post(
      "http://localhost:3000/admin/api/add-product",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.body);
  };

  const handleTags = (e: any) => {
    const tagsValue = e.target.value;
    setTags((prev) => [...prev, tagsValue]);
  };

  return (
    <section>
      <Container>
        <div>
          <h1 className="text-2xl">Add Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="images">
                Images
              </label>
              <br />
              <input
                id="images"
                type="file"
                placeholder="Images"
                multiple={true}
                accept="image/*"
                {...register("images", { required: true })}
              />
            </div>

            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="name">
                Product Name
              </label>
              <br />
              <input
                id="name"
                type="text"
                placeholder="Product Name"
                {...register("productName", { required: true })}
              />
            </div>

            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="price">
                Price
              </label>
              <br />
              <input
                id="price"
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>

            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="category">
                Category
              </label>
              <br />
              <input
                id="category"
                type="text"
                placeholder="Category"
                {...register("category", { required: true })}
              />
            </div>

            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="quantity">
                Quantity
              </label>
              <br />
              <input
                id="quantity"
                type="text"
                placeholder="Quantity"
                {...register("quantity", { required: true })}
              />
            </div>

            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="brand">
                Brand
              </label>
              <br />
              <input
                id="brand"
                type="text"
                placeholder="Brand"
                {...register("brand", { required: true })}
              />
            </div>

            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="desc">
                Description
              </label>
              <br />
              <textarea
                id="desc"
                cols={30}
                rows={10}
                placeholder="Product Description"
                {...register("description", { required: true })}
              />
            </div>

            <div className="mb-2">
              <label className="mb-1 inline-block" htmlFor="tags">
                Tags
              </label>
              <br />
              <select id="tags" onChange={handleTags}>
                <option value="new">New</option>
                <option value="features">Features</option>
                <option value="new arrival">New Arrival</option>
                <option value="discounted">Discounted</option>
                <option value="flash sale">Flash Sale</option>
                <option value="exclusive">Exclusive</option>
                <option value="best sell">Best Sell</option>
                <option value="trending">Trending</option>
                <option value="hot deal">Hot Deal</option>
              </select>
            </div>

            <div className="my-4">
              <ul className="flex gap-4">
                {tags.map((tg, ind) => (
                  <li
                    key={ind}
                    className="border border-gray-500 py-1 px-2 rounded cursor-pointer"
                  >
                    {tg}
                  </li>
                ))}
              </ul>
            </div>

            <input
              type="submit"
              value="Add Product"
              className="btn-secondary"
            />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default AddProductPage;
