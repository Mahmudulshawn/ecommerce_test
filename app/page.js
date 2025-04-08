import { useWixClient } from "@/context/wixClientContext";
import { wixClientServer } from "@/lib/wixClientServer";

export default async function Home() {
  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);

  return <div>THIS IS THE HOME PAGE!</div>;
}
