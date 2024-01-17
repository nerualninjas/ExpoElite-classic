import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex  min-h-screen flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
