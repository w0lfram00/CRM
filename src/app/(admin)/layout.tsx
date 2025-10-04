import React from "react";
import Sidebar from "../components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default Layout;
