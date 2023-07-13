import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <p>
          View <Link href="/">Back To Home</Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
