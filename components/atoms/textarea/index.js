import React from "react";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="w-full box-border rounded-lg p-4 border-[1px] border-solid border-black min-h-[200px]" {...rest}></textarea>
    </div>
  );
};

export default TextArea;
