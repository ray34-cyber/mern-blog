import { Button, Gap, Input, Link } from "@/components";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex h-[100vh]">
      <div className="hidden flex-[1] bg-gray-500 lg:block">
        <img src="login-bg.jpg" className="w-full h-full object-cover" alt="imageBg" />
      </div>
      <div className="w-[460px] bg-white p-[30px] flex flex-col justify-center box-border">
        <p className="text-[20px] font-bold text-[#2d2d2d]">Login</p>
        <Gap height={30} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => router.push("/")} />
        <Gap height={100} />
        <Link title="Belum punya akun, silahkan daftar" onClick={() => router.push("/register")} />
      </div>
    </div>
  );
};

export default Login;
