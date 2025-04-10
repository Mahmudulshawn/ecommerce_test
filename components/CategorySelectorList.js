'use client'
import React, { useState } from "react";

const CategorySelectorList = ({name}) => {
    const [category, setCategory] = useState();
  return (
    <div className="flex">
      <div className="border px-4 py-2 rounded-3xl">{name}</div>
    </div>
  );
};

export default CategorySelectorList;
