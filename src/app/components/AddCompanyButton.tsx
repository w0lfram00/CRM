"use client";

import React from "react";
import dynamic from "next/dynamic";
import Button from "./Button";
import { useRouter } from "next/router";

const CompanyFormModal = dynamic(() => import("./CompanyFormModal"), {
  ssr: false,
});

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("/companies/new")}>Add company</Button>
    </>
  );
}
