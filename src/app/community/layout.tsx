"use client";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
