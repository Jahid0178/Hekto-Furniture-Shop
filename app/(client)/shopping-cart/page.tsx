import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { cartItems } from "@/data/data";
import Image from "next/image";
import React from "react";

const ShoppingCartPage = () => {
  return (
    <>
      <PageHeading title="Shopping Cart" />
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(900px,_1fr)_400px] gap-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 border text-left text-primary font-bold">
                    Product
                  </th>
                  <th className="p-2 border text-left text-primary font-bold">
                    Price
                  </th>
                  <th className="p-2 border text-left text-primary font-bold">
                    Quantity
                  </th>
                  <th className="p-2 border text-left text-primary font-bold">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(
                  ({ id, product_name, imgSrc, price, quantity, total }) => (
                    <tr key={id}>
                      <td className="p-2 border text-primary flex items-center gap-2">
                        <span>
                          <Image
                            src={imgSrc}
                            alt={product_name}
                            width={60}
                            height={60}
                          />
                        </span>
                        <span>{product_name}</span>
                      </td>
                      <td className="p-2 border text-primary">$ {price}</td>
                      <td className="p-2 border text-primary">
                        {quantity} Pcs
                      </td>
                      <td className="p-2 border text-primary">$ {total}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <div>2</div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ShoppingCartPage;
