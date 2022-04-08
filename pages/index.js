import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Modal } from "react-responsive-modal";
import { VideoScroll } from "react-video-scroll";

//Styles
import styles from '../styles/Home.module.css';
import "react-responsive-modal/styles.css";

//Component

//Resources
import Logo from '../src/image/logo.png';
import Robot_BG from '../src/image/robot.svg';
import Left_Dec from '../src/image/left.svg';
import FrameDown from '../src/image/FrameDown.svg';
import Section2_BG from '../src/image/Section2_BG.svg';
// import Pixel_BG from '../src/image/pixel_bg.svg';
export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [modalState, setModalState] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
  }
  const setModal = () => {
    setModalState(true);
  }
  const closeModal = () => {
    setModalState(false);
  }
  const mintNFT = () => {
    const contractAddress = "0x020ad0aaa836ee0e90c131428ccec090b3ac0576"
    const nftContract = new web3.eth.Contract(contract.abi, contractAddress)
  }
  return (
    <div className="mx-auto relative">
      <Head>
        <title>METASCALE</title>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" /> */}
      </Head>
      <nav className="border-gray-200 rounded dark:bg-gray-800 bg-transparent sticky z-20" role="navigation">
        {/* <div className="bg-[#003949] h-16"></div> */}
        <div className="flex flex-wrap justify-between lg:justify-around items-center mx-auto bg-[#151515]">
          <a href="#" className="flex">
            <div className="text-5xl font-bold text-[#003949]">
              <Image src={Logo} className="w-auto" width={100} height={100} />
              {/* <span>METASCALE</span> */}
            </div>
          </a>
          <div>
            <span className="text-white text-5xl font-black">HACKTIVIST</span>
          </div>
          <div className={`${toggle ? '' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 sm:text-xl md:text-xl lg:text-2xl items-center">
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent  hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">HOME</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">ROADMAP</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">TEAM</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">FAQ</a>
              </li>
              <div className="z-50">
                {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Wallet</button> */}
                <button className="bg-[#003949] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl">
                  CONNECT WALLET
                </button>
                <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false" onClick={() => changeToggle()}>
                  <span className="sr-only pixel-font">Open main menu</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                  <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav >
      <div className="section1 bg-black relative">
        <div className="items-end">
          <Image src={Robot_BG}></Image>
        </div>
        <div className="flex-start absolute top-0">
          <Image src={Left_Dec}></Image>
        </div>
        <div className="flex-start absolute bottom-0">
          <Image src={FrameDown}></Image>
        </div>
      </div>
      <div className="section2 bg-black relative">
        <div className="absolute w-1/2 inset-28">
          <video
            tabIndex={50}
            preload="preload"
            style={{ width: "100%", objectFit: "contain" }}
            play={true}
          >
            <source
              type="video/mp4"
              src={"/rotate.mp4"}
            />
          </video>
        </div>
        <div className="">
          <Image src={Section2_BG}></Image>
        </div>
      </div>
      <div className="bg-black">
        <div className="p-3 bg-[#00F5B7] rounded w-36"><span>[ROADMAP 1.0]</span></div>
      </div>
    </div >
  )
}
