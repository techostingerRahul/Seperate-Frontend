import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="h-24 w-24 animate-spin rounded-full border-4 border-pink-600 border-t-pink-400"></div>
    </div>
  );
};

export default Loader;
