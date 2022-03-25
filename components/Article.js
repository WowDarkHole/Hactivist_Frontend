import React from 'react';
import Image from 'next/image';

const Article = (props) => {
  return (
    <div className="relative group grid grid-cols-10 justify-items-center">
      <div className="col-start-2 col-span-8 border-4 border-slate-500 border-dashed rounded-3xl hover:cursor-pointer text-[0px]">
        <Image src={props.img} className="object-cover rounded-3xl" />
      </div>
      <div className="col-span-10 mt-10"><span className="text-4xl text-[#003949] p-1 font-bold">{props.title}</span></div>
      <div className="col-span-10 my-6"><button className="btn btn-primary text-4xl text-[#003949] p-1 font-bold">PREVIEW</button></div>
    </div>
  )
}

export default Article;