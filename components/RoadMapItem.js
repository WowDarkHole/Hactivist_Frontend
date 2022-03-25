import React from 'react';
import Image from 'next/image';
import RightBorder from '../src/image/right_border.svg';
import LeftBorder from '../src/image/left_border.svg';
const RoadMapItem = (props) => {
  return (
    <div className="relative w-[320px]">
      <div className={`${props.side == 'left' ? 'mr-5' : 'ml-5'}`}>
        {props.side == 'left' ? <Image src={LeftBorder} /> : <Image src={RightBorder} />}
      </div>
      <div className={`${props.side == 'left' ? 'ml-5' : 'mr-5'} border border-2 border-black p-8 bg-white z-10 absolute top-0 mt-5 mr-5 h-[350px] `}>
        <div className="text-3xl pixel-font text-[#0B0B0B]">Auto-Staking:</div>
        <span>Auto-staking to earn 10 $MEATs token a day</span>
        <br />
        <span className="pl-5">- The Tyrannical Tigers wild jungle is fuelled by the $MEATS token. It will also be a governance token for our collection to help carry out proposals and voting in our roadmap.</span>

        <div className="mt-2">
          <button className="btn p-1 border border-1">
            <span className="pixel-font">Read More</span>
          </button>
        </div>
      </div>
      {props.side == 'left' ?
        <div className="absolute border border-2 border-black md:w-[60px] lg:w-[80px] xl:w-[80px] 2xl:w-[120px] top-32 md:-right-10 lg:-right-14 xl:-right-10 2xl:-right-24" /> :
        <div className="absolute border border-2 border-black md:w-[60px] lg:w-[80px] xl:w-[120px] 2xl:w-[120px] top-32 md:-left-14 lg:-left-16 xl:-left-24 2xl:-left-28" />
      }

    </div>
  )
}

export default RoadMapItem;