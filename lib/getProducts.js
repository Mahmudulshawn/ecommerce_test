import { wixClientServer } from "./wixClientServer";

export const getProducts = async () => {
  const wixClient = await wixClientServer();

  const response = await wixClient.products.queryProducts().limit().find();
  return response.items;
};
