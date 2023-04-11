import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  return <div>Category</div>;
};

export default Category;
