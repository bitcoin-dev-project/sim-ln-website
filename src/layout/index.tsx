// import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";
// import { Fira_Mono, Inter, Press_Start_2P } from "next/font/google";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const press_start = Press_Start_2P({
//   weight: ['400'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: "--font-press-start"
// });
// const fira_mono = Fira_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   style: ["normal"],
//   display: "swap"
// })

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.app_container}`}>
      <Head>
        <title>SIM-LN: Lightning Simulation</title>
        <meta name="description" content="Lightning Simulation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./vercel.svg" />
      </Head>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
