import { useRouter } from "next/router";
import { ReactNode } from "react";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer"

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen"> {/* Use flexbox to ensure Footer sticks to bottom */}
      <Head>
        <title>Urban Eagle Books</title>
        <link rel="icon" href="/favicon.ico.png" />
      </Head>
      <Header />
      <div className="bg-white flex-grow">{children}</div> {/* Use flex-grow to fill remaining space */}
      <Footer />
    </div>
  );
}
