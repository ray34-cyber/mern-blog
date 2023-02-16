const Input = ({ label, ...rest }) => {
  return (
    <div>
      <p className="text-[16px] text-[#2d2d2d] m-0 mb-[6px]">{label}</p>
      <input placeholder="form input" className="border-[1px] border-solid border-[grey] p-3 rounded-[8px] outline-none w-full box-border" {...rest} />
    </div>
  );
};

export default Input;
