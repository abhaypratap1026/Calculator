import React from 'react'

const Key = ({label , keyclass , onbuttonclick}) => {
     const equalClass =
    "col-[span_2] bg-[#4ccdc6] text-[#1a261a] font-semibold hover:bg-[#4CCDC6]";

  return (
    <div className={`bg-[#141414] flex text-white cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#4ccdc742] ${ keyclass && equalClass}`}
     onClick={()=>onbuttonclick(label)}>
        {label}

    </div>
  )
}

export default Key