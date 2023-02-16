import { Input, Upload, Button, TextArea, Gap, Link } from "@/components";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { postToAPI, setForm, setImgPreview, updateToAPI } from "@/config/redux/action";
import axios from "axios";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id;
    axios
      .get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        dispatch(setForm("title", data.title));
        dispatch(setForm("body", data.body));
        dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = () => {
    const id = router.query.id;
    updateToAPI(form, id);
    console.log("Berhasil update");
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div className="pt-10">
      <Link title="kembali" onClick={() => router.push("/")} />
      <p className="text-[20px] font-bold m-0 mb-[30px]">Update Blog Post</p>
      <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm("title", e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm("body", e.target.value))} />
      <Gap height={20} />
      <div className="w-[200px] ml-auto mr-0">
        <Button title="Update" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;

CreateBlog.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
