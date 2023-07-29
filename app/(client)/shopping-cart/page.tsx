import CartTable from "@/components/client/Tables/CartTable/CartTable";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import React from "react";

const ShoppingCartPage = () => {
  return (
    <>
      <PageHeading title="Shopping Cart" />
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(900px,_1fr)_400px] gap-4">
            <CartTable />
            <div>2</div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ShoppingCartPage;
