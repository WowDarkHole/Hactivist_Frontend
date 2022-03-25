import React from 'react';
import Image from 'next/image';

const HoverImage = (props) => {
  return (
    <div className="relative hover:cursor-pointer group">
      <div className="text-[0px]">
        <Image src={props.img} />
      </div>
      <div className="absolute grid bg-[#5588] top-0 text-white hidden group-hover:grid group-hover:animate-fade-in-down justify-center text-center content-center h-full p-3 w-full" onClick={() => props.setModal()}>
        <div className="my-4"><span className="text-2xl font-bold">{props.headText}</span></div>
        <div><span>{props.bodyText}</span></div>
      </div>
    </div>
  )
}

export default HoverImage;