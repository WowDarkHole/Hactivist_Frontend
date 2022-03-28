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
import Slider from '../components/Carousel';
import Slider1 from '../components/Carousel2';
import ServiceCard from "../components/ServiceCard";
import HoverImage from "../components/HoverImage";
import Article from "../components/Article";

//Resources
import Values from '../src/image/our_values.svg';
import Service1 from '../src/image/service1.jpeg';
import Service2 from '../src/image/service2.jpeg';
import Service3 from '../src/image/service3.jpeg';
import Service4 from '../src/image/service4.jpeg';
import Service5 from '../src/image/service5.jpeg';
import Service6 from '../src/image/service6.jpeg';
import Service7 from '../src/image/service7.png';
import Lastwork1 from '../src/image/lastwork1.jpg';
import Lastwork2 from '../src/image/lastwork2.jpg';
import Lastwork3 from '../src/image/lastwork3.jpg';
import Lastwork4 from '../src/image/lastwork4.jpg';
import Lastwork5 from '../src/image/lastwork5.jpg';
import Lastwork6 from '../src/image/lastwork6.jpg';
import Gray_Decorator from '../src/image/honecombhero2.svg';
import CircleGrid from '../src/image/2.webp';
import Logo from '../src/image/logo.png';
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
  return (
    <div className="mx-auto relative">
      <Head>
        <title>METASCALE</title>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" /> */}
      </Head>
      <nav className="border-gray-200 rounded dark:bg-gray-800 bg-transparent sticky" role="navigation">
        {/* <div className="bg-[#003949] h-16"></div> */}
        <div className="flex flex-wrap justify-between lg:justify-around items-center mx-auto my-5">
          <a href="#" className="flex">
            <div className="text-5xl font-bold text-[#003949]">
              <Image src={Logo} className="w-auto" width={100} height={100} />
              {/* <span>METASCALE</span> */}
            </div>
          </a>
          <div className={`${toggle ? '' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 sm:text-xl md:text-xl lg:text-3xl">
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent md:text-[#003949] hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">ABOUT</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent md:text-[#003949] hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">SERVICES</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent md:text-[#003949] hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">VALUES</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent md:text-[#003949] hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">PORTFOLIO</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-white bg-[#2aad92] rounded md:bg-transparent md:text-[#003949] hover:text-[#2aad92] active:text-[#2aad92] focus:text-[#2aad92] md:p-0 dark:text-white pixel-font" aria-current="page">BLOG</a>
              </li>
            </ul>
          </div>

          <div className="flex md:order-2 z-50">
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Wallet</button> */}
            <button className="bg-[#003949] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-3xl">
              CONTACT
            </button>
            <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false" onClick={() => changeToggle()}>
              <span className="sr-only pixel-font">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </nav >
      <div className="w-full z-10 fixed top-0">
        <div className="wrapper w-full">
          <VideoScroll
            playbackRate={200}
            style={{ position: "sticky", top: "0" }}
          >
            <video
              tabIndex={0}
              preload="preload"
              style={{ width: "100%", objectFit: "contain" }}
              playsInline
            >
              <source
                type="video/mp4"
                // src={"/bg_video.mp4"}
                src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm"
              />
            </video>
          </VideoScroll>
        </div>
      </div>
      <div className="section1 text-[#003949] flex justify-center items-center bg-transparent relative overflow-hidden">

        <div className="grid w-full z-20">
          <div className="col-span-2 text-center md:text-left md:col-span-1 justify-center items-center px-4 md:px-4 lg:px-0 xl:px-16 2xl:px-24">
            <div className="mb-20 grid content-center items-center">
              <span className="text-[#003949] text-6xl font-bold">Finally a creative digital agency offering</span>
              <div className="flex mt-10">
                <span className="text-[#003949] text-6xl font-bold">growth Services for </span>
                <span className="text-6xl text-[#2aad92] pl-6 font-bold ">
                  <Typewriter
                    options={{
                      strings: ['Fintech', 'NFTs', 'B2B', 'Metaverse project'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>

            </div>
            <div className="my-20">
              <span className="text-1/2xl text-xl md:text-2xl pixel-font">Boostyour business to the next level and take advantage of Web 3.0 opportunities.</span>
              <div className="mt-2"><span className="text-1/2xl text-xl md:text-2xl pixel-font">Creativity, communication, efficiency, and evolution are our pride.</span></div>
            </div>
            <div className="my-20">
              <button className="bg-[#2aad92] hover:bg-[#003949] text-white font-bold py-6 px-8 rounded md:text-4xl rounded-2xl">
                GET A PROPOSAL
              </button>
            </div>
          </div>
        </div>
        <div className="absolute mt-10 -right-64 z-10">
          <Image src={Gray_Decorator} />
        </div>

      </div >
      <div className="grid xl:grid-cols-7 grid-cols-10 gap-8 bg-transparent py-20 relative items-center z-30">
        <div className="p-6 col-span-10 text-center">
          <span className="text-6xl font-bold text-[#003949]">Your Growth, our Focus.</span>
        </div>
        <div></div>
        <div className="xl:col-span-5 col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8 z-20">
          <ServiceCard img={Service1} cardName="Influencer Marketing" link="/service/1" />
          <ServiceCard img={Service2} cardName="Influencer Marketing" link="/service/2" />
          <ServiceCard img={Service3} cardName="Influencer Marketing" link="/service/3" />
          <ServiceCard img={Service4} cardName="Influencer Marketing" link="/service/4" />
          <ServiceCard img={Service5} cardName="Influencer Marketing" link="/service/5" />
          <ServiceCard img={Service6} cardName="Influencer Marketing" link="/service/6" />
          <ServiceCard img={Service7} cardName="Influencer Marketing" link="/service/7" />
        </div>
        <div></div>

        <div className="absolute -left-64 top-5 z-10">
          <Image src={Gray_Decorator} />
        </div>
      </div>
      <div className="grid justify-items-center bg-transparent relative z-40 overflow-hidden">
        <div className="p-6">
          <span className="text-6xl font-bold text-[#003949]">OUR VALUES</span>
        </div>
        <div className="grid grid-cols-3 p-12 justify-center z-20">
          <div className="justify-items-center grid p-6 col-span-3 mb-6">
            <span className="text-4xl font-bold text-[#003949] p-2">The leading agency in Web 3</span>
            <div className="my-3"><span className="text-2xl text-[#003949] p-1">We wantto be established as the reference for WEB3 companies</span></div>
          </div>
          <div className="justify-center p-6 col-span-1 text-center content-between grid">
            <div>
              <span className="text-4xl font-bold text-[#003949]">Evolution</span>
              <div className="my-4"><span className="text-2xl text-[#003949] p-1">We don'tjust provide a service, we also advise you on how to improve your global marketing strategy</span></div>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#003949]">Communication</span>
              <div className="my-4"><span className="text-2xl text-[#003949] p-1">Communication is essential with our customers, a follow-up will be sent to you regularly.</span></div>
            </div>
          </div>
          <div className="col-span-1 justify-center flex">
            <Image src={Values} />
          </div>
          <div className="justify-center p-6 col-span-1 text-center content-between grid">
            <div>
              <span className="text-4xl font-bold text-[#003949]">Brings Value</span>
              <div className="my-4"><span className="text-2xl text-[#003949] p-1">Yoursatisfaction is our top priority. Your growth is ourfocus.</span></div>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#003949]">The leading agency in Web 3</span>
              <div className="my-4"><span className="text-2xl text-[#003949] p-1">Whatever your objectives, ourteams will work with you until they are achieved</span></div>
            </div>
          </div>
          <div className="justify-items-center grid p-6 col-span-3 mb-6">
            <span className="text-4xl font-bold text-[#003949] p-2">Efficiency</span>
            <div className="my-3"><span className="text-2xl text-[#003949] p-1">From the moment we engage we are 100% committed to delivering results as quickly as possible.</span></div>
          </div>
        </div>
        <div className="absolute -left-64 top-5 z-10">
          <Image src={Gray_Decorator} />
        </div>
      </div>
      <div className="grid justify-items-center bg-white mx-64 z-50">
        <div className="p-6">
          <span className="text-6xl font-bold text-[#003949]">Some of our last works</span>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-2 grid">
            <HoverImage img={Lastwork1} headText="Intellectsoft" bodyText="A software development company working with Fortune 500 companies." link="#" setModal={() => setModal()} />
            <div className="grid grid-cols-2">
              <HoverImage img={Lastwork2} headText="Intellectsoft" bodyText="A software development company working with Fortune 500 companies." link="#" setModal={() => setModal()} />
              <HoverImage img={Lastwork3} headText="Intellectsoft" bodyText="A software development company working with Fortune 500 companies." link="#" setModal={() => setModal()} />
            </div>
          </div>
          <div className="grid col-span-2 grid-cols-2">
            <HoverImage img={Lastwork4} headText="Intellectsoft" bodyText="A software development company working with Fortune 500 companies." link="#" setModal={() => setModal()} />
            <div className="grid">
              <HoverImage img={Lastwork5} headText="Intellectsoft" bodyText="A software development company working with Fortune 500 companies." link="#" setModal={() => setModal()} />
              <HoverImage img={Lastwork6} headText="Intellectsoft" bodyText="A software development company working with Fortune 500 companies." link="#" setModal={() => setModal()} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 items-center relative bg-[url('../src/image/pixel_bg.svg')] text-[#003949] z-[60] overflow-hidden">
        <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end p-10">
          <div className="w-2/3 relative">
            <div>
              {/* <Image src={Characters} className="w-full" /> */}
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 content-around md:px-16 grid z-20">
          <div>
            <span className="text-2xl xs:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">OUR EXPERIENCES</span>
          </div>
          <div className="my-16 text-[#2aad92]">
            <div><span className="text-6xl font-bold">Fintech. NFTs.</span></div>
            <div className="my-6"><span className="text-6xl font-bold">Metaverse. Ecommerce.</span></div>
            <div><span className="text-6xl font-bold">Blockchain. Healthcare.</span></div>
          </div>
          <div>
            <span className="text-3xl font-bold">Working acrossindustries with companies of all categories, we help businessesto reach their goal - whatevertheir challenge.</span>
          </div>
        </div>
        <div>
        </div>
        <div className="absolute -right-32 mt-10 z-10">
          <Image src={Gray_Decorator} />
        </div>
      </div>
      <div className="justify-center pt-10 bg-grey grid">
        <div className="p-6 text-center">
          <span className="text-6xl font-bold text-[#003949]">Our clients are featured on</span>
        </div>
        <Slider />
        <Slider1 />
      </div>
      <div className="justify-center flex flex-col pt-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white grid grid-cols-5 py-16">
        <div className="col-start-3">
          <form>
            <div className="text-center">
              <span className="text-white font-bold text-3xl">Contact us.</span>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="floating_email" className="absolute text-sm text-grey-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="floating_first_name" className="absolute text-sm text-grey-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <fieldset>
              <legend className="sr-only">Checkbox variants</legend>

              <div className="flex items-center mb-4">
                <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked />
                <label htmlFor="checkbox-1" className="ml-3 text-sm font-medium text-white-900 dark:text-gray-300">I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
              </div>

              <div className="flex items-center mb-4 ">
                <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 accent-transparent rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-2" className="ml-3 text-sm font-medium text-white-900 dark:text-gray-300">I want to get promotional offers</label>
              </div>

              <div className="flex items-center mb-4">
                <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-3" className="ml-3 text-sm font-medium text-white-900 dark:text-gray-300">I am 18 years or older</label>
              </div>

              <div className="flex mb-4">
                <div className="flex items-center h-5">
                  <input id="shipping-2" aria-describedby="shipping-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="shipping-2" className="font-medium text-white-900 dark:text-gray-300">Free shipping via Flowbite</label>
                </div>
              </div>
            </fieldset>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-white-900 dark:text-gray-400">Montly Budget</label>
              <select id="countries" className="bg-gray-50 opacity border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>$1000</option>
                <option>$4000</option>
                <option>$3000</option>
                <option>$2000</option>
              </select>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="floating_phone" className="absolute text-sm text-white-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="floating_company" className="absolute text-sm text-white-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
            </div>
            <button type="submit" className="text-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 rounded-3xl text-sm font-bold w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-10">Send</button>
          </form>

        </div>
        <div className="col-start-5 opacity-30">
          <Image src={CircleGrid} />
        </div>
      </div>
      <div className="justify-center flex flex-col py-10 bg-grey grid">
        <div className="p-6 text-center mb-8">
          <span className="text-6xl font-bold text-[#003949]">Recent articles</span>
        </div>
        <div className="grid grid-cols-3">
          <Article img={Lastwork2} title="TITRE" />
          <Article img={Lastwork2} title="TITRE" />
          <Article img={Lastwork2} title="TITRE" />
        </div>
        <div className="grid justify-center">
          <button className="bg-[#003949] hover:bg-[#005949] text-white font-bold py-6 px-8 rounded-full text-5xl">
            SEE ALL
          </button>
        </div>
      </div>
      <Modal open={modalState} onClose={() => closeModal()} center >
        <h2>Simple centered modal</h2>
        <Article img={Lastwork2} title="TITRE" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div >
  )
}
