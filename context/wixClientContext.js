"use client";
import { products, collections } from "@wix/stores";
import { useContext, createContext } from "react";
import Cookies from "js-cookie";
import { createClient, OAuthStrategy } from "@wix/sdk";

const refreshToken = await JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: {
        value: "",
        expiresAt: 0,
      },
    },
  }),
});

const WixClientContext = createContext(wixClient);

export const useWixClient = () => {
  return useContext(WixClientContext);
};

export const wixClientContextProvider = ({ Children }) => {
  return <WixClientContext.Provider value={useWixClient}>{Children}</WixClientContext.Provider>;
};
