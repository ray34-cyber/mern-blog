import { BsDiscord, BsFacebook, BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#67b35c] py-5 px-10">
        <div>
          <img src="/logo-ray.png" alt="Ray" className="w-[144px] h-[144px] object-contain" />
        </div>
        <div className="flex">
          <div className="icon-wrapper">
            <BsFacebook className="icon-medsos" alt="icon" />
          </div>
          <div className="icon-wrapper">
            <BsInstagram className="icon-medsos" alt="icon" />
          </div>
          <div className="icon-wrapper">
            <BsTelegram className="icon-medsos" alt="icon" />
          </div>
          <div className="icon-wrapper">
            <BsGithub className="icon-medsos" alt="icon" />
          </div>
          <div className="icon-wrapper">
            <BsDiscord className="icon-medsos" alt="icon" />
          </div>
        </div>
      </div>
      <div className="bg-[#569e4b] p-[10px] px-0">
        <p className="text-[14px] text-white text-center m-0">Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
