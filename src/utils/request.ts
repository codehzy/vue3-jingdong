import axios from "axios";
const Post = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL:
          "https://www.fastmock.site/mock/db328b8fc6158bfc7ac1b07b12f87fcf/api",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      );
  });
};
export default Post;
