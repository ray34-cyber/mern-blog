import React from "react";

const Link = ({ title, onClick }) => {
  return (
    <p className="text-center text-[16px] text-[#ababab] underline cursor-pointer" onClick={onClick}>
      {title}
    </p>
  );
};

export default Link;
