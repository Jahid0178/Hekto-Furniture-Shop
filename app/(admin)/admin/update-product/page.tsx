"use client";

import React, { Suspense, useEffect, useState } from "react";
import Container from "@/components/common/Container";
import Heading from "@/components/client/Heading/Heading";
import axios from "axios";
import WideCard from "@/components/client/Cards/WideCard/WideCard";
import ProductTable from "@/components/admin/ProductTable/ProductTable";

const UpdateProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/admin/api/add-product").then((res) => {
      if (res.status === 200) {
        console.log(res);
        setData(res.data?.products);
      } else {
        setData([]);
      }
    });
  }, []);

  console.log(data);

  return (
    <section>
      <Container>
        <Heading title="Update Products" />
        <ProductTable />
      </Container>
    </section>
  );
};

export default UpdateProductPage;
