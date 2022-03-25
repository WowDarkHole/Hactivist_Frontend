import React from 'react';
import Image from 'next/image';

const ServiceCard = (props) => {
  return (
    <div className="rounded-3xl grid justify-items-center bg-white hover:shadow-2xl hover:cursor-pointer">
      <Image className="rounded-t-3xl" src={props.img} alt="img" />
      <div className="px-3 py-8"><span className="font-bold text-2xl text-[#003949]">{props.cardName}</span></div>
    </div>
  )
}

export default ServiceCard;