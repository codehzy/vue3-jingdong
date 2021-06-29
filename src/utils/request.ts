// import axios from "axios";
// const Post = (url: string, data = {}) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, data, {
//         baseURL:
//           "https://www.fastmock.site/mock/db328b8fc6158bfc7ac1b07b12f87fcf/api",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(
//         (response) => {
//           resolve(response.data);
//         },
//         (err) => {
//           reject(err);
//         },
//       );
//   });
// };
// export default Post;

import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/db328b8fc6158bfc7ac1b07b12f87fcf/api",
  timeout: 10000,
});

export const Get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
};

export const Post = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
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

export default { Post, Get };
