const Button = ({ title, ...rest }) => {
  return (
    <button className="p-3 text-[16px] bg-[#87c73c] w-full box-border rounded-[12px] border-none text-white uppercase cursor-pointer" {...rest}>
      {title}
    </button>
  );
};

export default Button;
