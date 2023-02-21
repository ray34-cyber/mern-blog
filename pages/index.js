import { BlogItem, Button, Gap } from "@/components";
import { setDataBlog } from "@/config/redux/action";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const router = useRouter();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Apakah anda yakin ingin menghapus post ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            axios
              .delete(`${process.env.NEXT_PUBLIC_BASE_URL_BLOG}/post/${id}`)
              .then((res) => {
                console.log("Success delete: ", res.data);
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log("err: ", err);
              });
          },
        },
        {
          label: "Tidak",
          onClick: () => console.log("user tidak setuju"),
        },
      ],
    });
  };

  return (
    <div className="pt-[40px]">
      <div className="w-[200px] mr-0 ml-auto">
        <Button title="create blog" onClick={() => router.push("/create-blog")} />
      </div>
      <div>
        <Gap height={20} />
        <div className="flex flex-wrap justify-between">
          {dataBlog.map((blog) => {
            return <BlogItem key={blog._id} image={`https://mern-api-two.vercel.app/${blog.image}`} title={blog.title} body={blog.body} name={blog.author.name} date={blog.createdAt} _id={blog._id} onDelete={confirmDelete} />;
          })}
        </div>
        <div className="w-[400px] flex mx-auto">
          <Button title="Previous" onClick={previous} />
          <Gap width={20} />
          <p className="text-[38px] w-[380px] text-center font-bold m-0">
            {page.currentPage} / {page.totalPage}
          </p>
          <Gap width={20} />
          <Button title="Next" onClick={next} />
        </div>
        <Gap height={20} />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
