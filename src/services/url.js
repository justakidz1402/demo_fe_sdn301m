const product_api = {
  main: `/products`,
  sub: (id) => `/products/${id}`,
  comments: (id) => `/products/comments/${id}`,
};
const category_api = {
  main: "/categories/",
};

export { product_api, category_api };
