import Link from "next/link";
import React from "react";
import Head from "next/head";
function Custom404() {
  return (
    <div
      className="h-screen overflow-hidden bg-gradient-to-tr from-base-100 to-base-300"
      data-theme="aqua"
    >
      <Head>
        <title>CleverDevs</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="This is the official website for the Cleverdevs. The Cleverdevs are a group of talented freelance developers."
        />

        <meta property="og:url" content="https://clever-base.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CleverBase" />
        <meta
          property="og:description"
          content="This is the official website for the Cleverdevs. The Cleverdevs are a group of talented freelance developers."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1657322192/Screenshot_2022-07-09_000251_jkdj3h.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="clever-base.vercel.app" />
        <meta
          property="twitter:url"
          content="https://clever-base.vercel.app/"
        />
        <meta name="twitter:title" content="CleverBase" />
        <meta
          name="twitter:description"
          content="This is the official website for the Cleverdevs. The Cleverdevs are a group of talented freelance developers."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1657322192/Screenshot_2022-07-09_000251_jkdj3h.jpg"
        />
      </Head>
      <div className="flex items-center h-full justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl lg:text-6xl my-2">
            🤕<span className="text-error">404</span>- page not Found
          </h3>
          <Link href={"/"}>
            <button className="btn btn-primary">HomePage</button>
          </Link>
        </div>
      </div>
      Custom404
    </div>
  );
}

export default Custom404;
