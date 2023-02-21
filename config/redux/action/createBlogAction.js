import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMAGE_PREVIEW", payload };
};

export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  axios
    .post(`${process.env.BASE_URL_BLOG}/post`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("post succes: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  axios
    .put(`${process.env.BASE_URL_BLOG}/post/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("update succes: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
