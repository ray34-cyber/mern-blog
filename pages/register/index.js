import { Button, Gap, Input, Link } from "@/components";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  return (
    <div className="flex h-[100vh]">
      <div className="hidden flex-[1] bg-gray-500 lg:block">
        <img src="register-bg.jpg" className="w-full h-full object-cover" alt="imageBg" />
      </div>
      <div className="w-[460px] bg-white p-[30px] flex flex-col justify-center box-border">
        <p className="text-[20px] font-bold text-[#2d2d2d]">Register</p>
        <Gap height={30} />
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => router.push("/login")} />
        <Gap height={100} />
        <Link title="Kembali ke login" onClick={() => router.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
