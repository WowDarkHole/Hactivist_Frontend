import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';
import Coingecko from '../src/image/coingecko.png';
import Bitcoinist from '../src/image/Bitcoinist.png';
import Coinmarketcap from '../src/image/coinmarketcap.png';
import Cryptoinsider from '../src/image/cryptoinsider.png';
import Marketwatch from '../src/image/marketwatch.png';
import Nftplazas from '../src/image/Nftplazas.png';
import Yahoo from '../src/image/yahoo.png';
import Bitcointalk from '../src/image/bitcointalk.png'
const animation = { duration: 30000, easing: (t) => t }

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { origin: "center", perView: 4.5, spacing: 10 },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider bg-grey my-6">
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Coingecko}></Image>
      </div>
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Bitcoinist}></Image>
      </div>
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Coinmarketcap}></Image>
      </div>
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Cryptoinsider}></Image>
      </div>
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Marketwatch}></Image>
      </div>
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Nftplazas}></Image>
      </div>
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Yahoo}></Image>
      </div>
      <div className="keen-slider__slide content-center grid items-center">
        <Image src={Bitcointalk}></Image>
      </div>
    </div>
  )
}

export default Slider;