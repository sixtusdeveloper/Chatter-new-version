import React from 'react';

const BackDropButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon?: React.ReactNode,
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <button 
      className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-40 ${otherClasses}`}
      onClick={handleClick}
    >
      <span 
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium hover:text-white text-purple backdrop-blur-3xl gap-2 whitespace-nowrap ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default BackDropButton;




