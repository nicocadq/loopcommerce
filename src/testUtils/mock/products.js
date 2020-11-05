import baseMock from "./base";

export const productsData = [
  {
    id: 12,
    name: "Wallet",
    description: "It's a wallet",
    price: "1500.0",
    stock: 501,
  },
  {
    id: 24,
    name: "Shirt",
    description: "It's a shirt",
    price: "1501.0",
    stock: 489,
  },
  {
    id: 11,
    name: "MacBook",
    description: "It's a Mac",
    price: "1500.0",
    stock: 495,
  },
];

export const productsHeaders = {
  "total-pages": 3,
  "total-count": 43,
  "page-items": 20,
  "current-page": 1,
};

const productsResponse = {
  data: {
    products: productsData,
  },
  headers: productsHeaders,
};

export const mockProductsSuccess = () =>
  baseMock
    .get("/products/")
    .query({ page: "1" })
    .reply(200, productsResponse.data, productsResponse.headers);

export const mockProductsFailure = () =>
  baseMock
    .get("/products/")
    .query({ page: "1" })
    .reply(400, { error: "Error message" });
