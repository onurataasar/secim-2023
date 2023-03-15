import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Neden from "@/components/Neden";
import Button from "@/components/Button";
import { getRandomIndex } from "@/helper";
import { nedenler } from "../../nedenler";
import React from "react";
import YouTube from "react-youtube";
import TypewriterComponent from "typewriter-effect";
import useIsMobile from "@/useIsMobile";

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const isMobile = useIsMobile();
  console.log(index);
  return (
    <>
      <Head>
        <title>Seçim 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <Image
          width={120}
          height={60}
          src="/secim2023-logo.png"
          className="lg:absolute top-8 max-lg:pb-10"
          alt="logo"
        />
        {nedenler && (
          <div className="flex flex-col max-lg:gap-24 lg:flex-row  justify-between w-full items-center">
            <div className="flex flex-col lg:w-5/12 gap-8">
              <Neden
                info={nedenler[index].info}
                paragraph={nedenler[index].paragraph}
                conclusion={nedenler[index].conclusion}
              />
              <div className="button-group relative flex gap-6">
                <Button
                  text={"Reisle Devam"}
                  onClick={() => setIndex(getRandomIndex())}
                />
                <Button
                  onClick={() => window.open("http://www.chp.org.tr")}
                  text={"Artık Yeter!"}
                  yeter
                />{" "}
                <h2 className="text-5xl  whitespace-nowrap lg:absolute opacity-10 -left-48 transition-all duration-700 lg:-rotate-90 -top-32 font-extralight ">
                  <TypewriterComponent
                    options={{
                      strings: ["KARAR SENİN"],
                      autoStart: true,
                      deleteSpeed: 99999999,
                      delay: 100,
                      cursor: "",
                    }}
                  />
                </h2>{" "}
              </div>
            </div>
            <div className="flex flex-col max-lg:pt-36 max-md:pt-20 items-center justify-center gap-8">
              <img
                src="/old-tv.png"
                alt="tv"
                className="absolute w-[540px] max-lg:px-8 mb-24"
                draggable={false}
              />
              <YouTube
                videoId={nedenler[index].embed}
                className="mr-20 max-lg:mb-5 lg:mr-24 z-10 "
                opts={
                  isMobile
                    ? {
                        height: "160",
                        width: "220",
                      }
                    : {
                        height: "240",
                        width: "340",
                        /* playerVars: { autoplay: 1 }, */
                      }
                }
              ></YouTube>
            </div>
          </div>
        )}{" "}
        <a
          href="https://www.github.com/onurataasar/secim-2023"
          target={"_blank"}
          className="lg:absolute max-lg:pt-8 max-lg:mt-8 bottom-4 lg:-right-40 opacity-50"
        >
          github
        </a>
      </main>
    </>
  );
}
