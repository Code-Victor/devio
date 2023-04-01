import React from "react";
import { Nav, Footer } from "../components";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1117] min-h-screen flex flex-col">
      <Nav />
      <div className="bg flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default BaseLayout;
