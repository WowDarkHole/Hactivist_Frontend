import React from 'react';
import Image from 'next/image';
import RightBorder from '../src/image/right_border.svg';

const TeamCard = (props) => {
  return (
    <div className="col-span-1 relative">
      <div className="absolute -top-5 -right-5 ml-8"><Image src={RightBorder} /></div>
      <Image src={props.image} className="w-full" />
      <span className="text-xl md:text-2xl lg:text-3xl pixel-font">{props.name}</span>
      <span className="text-xl md:text-2xl lg:text-3xl pixel-font">{props.position}</span>

    </div>
  )
}

export default TeamCard;