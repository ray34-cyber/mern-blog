import { Input, Upload, Button, TextArea, Gap, Link } from "@/components";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { postToAPI, setForm, setImgPreview } from "@/config/redux/action";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = () => {
    postToAPI(form);
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div className="pt-10">
      <Link title="kembali" onClick={() => router.push("/")} />
      <p className="text-[20px] font-bold m-0 mb-[30px]">Create New Blog Post</p>
      <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm("title", e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm("body", e.target.value))} />
      <Gap height={20} />
      <div className="w-[200px] ml-auto mr-0">
        <Button title="Save" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;

CreateBlog.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
