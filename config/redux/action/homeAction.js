import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL_BLOG}/posts?page=${page}&perPage=2`)
    .then((result) => {
      const responseAPI = result.data;

      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: responseAPI.current_page,
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
