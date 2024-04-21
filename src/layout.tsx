import { useRouter } from "next/router";
import { ReactNode } from "react";
import Head from "next/head";
import Header from "./components/Header"

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>UrbanEagle Books</title>
        <link rel="icon" href="/favicon.ico.png" />
      </Head>
      <Header />
      <div className={`h-screen`}>
        {children}
      </div>
    </>
  );
}
