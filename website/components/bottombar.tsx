
import React, { ReactNode } from 'react';


interface Props {
  children?: ReactNode
  // any props that come into the component
}

  const Bottombar = ({children, ...props}: Props) => {
    return (
      <div className="flex self-stretch flex-1 w-full h-full grow shrink">
        <div className="grow shrink m-2 text-med font-semibold text-lime-500"></div>
      </div>       
    );
  };
  
  export default Bottombar;
