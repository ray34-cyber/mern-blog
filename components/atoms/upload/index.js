import React from "react";

const Upload = ({ img, ...rest }) => {
  return (
    <div className="my-5">
      {img && <img className="w-[200px] h-[200px] object-cover block mb-4" src={img} alt="preview" />}
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
