"use client";

import CompanyForm from "@/src/app/components/CompanyForm";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
};

export default Page;
