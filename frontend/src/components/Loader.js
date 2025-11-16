import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-10 h-10 border-4 border-white/40 border-t-green-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
