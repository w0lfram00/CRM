"use client";

import React, { useEffect } from "react";
import Header from "../../../components/Header";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) notFound();
  }, []);

  return (
    <>
      <Header>Companies</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;
