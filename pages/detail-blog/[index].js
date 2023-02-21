import { Gap, Link } from "@/components";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailBlog = () => {
  const [data, setData] = useState({});

  const router = useRouter();
  useEffect(() => {
    const id = router.query.index;
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL_BLOG}/post/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (data.author) {
    return (
      <div className="">
        <img className="w-full h-[300px] object-cover" src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.image}`} alt="thumb" />
        <p className="text-[30px] font-bold text-[#2d2d2d] m-0 mt-5">{data.title}</p>
        <p className="text-[16px] text-[grey] m-0">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="text-[18px] leading-[36px]">{data.body}</p>
        <Gap height={20} />
        <Link title="kembali ke Home" onClick={() => router.push("/")} />
      </div>
    );
  }
  return <p>Loading data ...</p>;
};

export default DetailBlog;

DetailBlog.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
