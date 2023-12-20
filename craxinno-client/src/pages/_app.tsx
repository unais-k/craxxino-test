import "@/styles/style.css";
import type { AppProps } from "next/app";
import AppWrapper from "@/components/wrapper/AppWrapper";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./../store/store";
import { PersistGate } from "redux-persist/integration/react";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout;
    const defaultLayout = getLayout || ((page) => page);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppWrapper>{defaultLayout(<Component {...pageProps} />)}</AppWrapper>
            </PersistGate>
        </Provider>
    );
}
