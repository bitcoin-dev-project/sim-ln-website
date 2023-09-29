// import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.app_container}`}>
      <Head>
        <title>SIM-LN: Lightning Simulation</title>
        <meta name="description" content="Lightning Simulation" />
        <meta property="og:title" content="SIM-LN: Lightning Simulation" />
        <meta
          property="og:description"
          content="Instantly simulate real-world Lightning network activity"
        />
        <meta
          property="og:image"
          content="https://simln.dev/SimLNLogoASCII.svg"
        />
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
