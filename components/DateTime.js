import React from 'react';

const DateTimeComponent = () => {
  const TimeBlock = () => {
    return (
      <div className="border border-[#D9A066] px-6 py-4 md:px-6 md:py-4 flex flex-col items-center bg-white border-2">
        <span className="text-[80px] leading-none">00</span>
        <span className="text-2xl">Days</span>
      </div>
    )
  }
  return (
    <div>
      <TimeBlock />
    </div>
  )
}

export default DateTimeComponent;