import { Button, Gap } from "@/components/atoms";
import { useRouter } from "next/router";

const BlogItem = (props) => {
  const router = useRouter();
  const { image, title, name, date, body, _id, onDelete } = props;
  return (
    <div className="w-[calc(50%-10px)] rounded-lg mb-5 overflow-hidden shadow-[5px_6px_14px_rgba(0,0,0,0.2)]">
      <img src={image} alt="post" className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="m-0 text-[20px] font-bold text-[#313131]">{title}</p>
          <div className="flex items-center">
            <p className="font-bold text-[#03A9F4] cursor-pointer m-0 mr-[14px]" onClick={() => router.push(`/create-blog/${_id}`)}>
              Edit
            </p>
            |{" "}
            <p className="font-bold text-[#E91E63] cursor-pointer m-0 ml-[14px]" onClick={() => onDelete(_id)}>
              Delete
            </p>
          </div>
        </div>

        <p className="m-0 mt-1 text-[12px] text-[grey]">
          {name} - {date}
        </p>
        <p className="m-0 mt-[18px] text-[16px] text-[#353535]">{body}</p>
        <Gap height={20} />
        <Button title="View Detail" onClick={() => router.push(`/detail-blog/${_id}`)} />
      </div>
    </div>
  );
};

export default BlogItem;
