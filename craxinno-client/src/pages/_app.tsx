import "@/styles/style.css";
import type { AppProps } from "next/app";
import AppWrapper from "@/components/wrapper/AppWrapper";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout;
    const defaultLayout = getLayout || ((page) => page);

    return <AppWrapper>{defaultLayout(<Component {...pageProps} />)}</AppWrapper>;
}
