import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center py-5 px-10 bg-[#68b35c]">
      <p className="text-[20px] font-bold text-white m-0">MERN-Blog</p>
      <p className="text-[18px] text-white underline cursor-pointer m-0" onClick={() => router.push("/login")}>
        Logout
      </p>
    </div>
  );
};

export default Header;
