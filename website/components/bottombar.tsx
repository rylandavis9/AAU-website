
import React, { ReactNode } from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

  const Bottombar = ({children, ...props}: Props) => {
    return (
      <div className="flex self-stretch flex-1 w-full min-h-10 bg-zinc-950">
        <div className="grow shrink m-2 text-med font-semibold text-lime-500">Filler Things</div>
      </div>       
    );
  };
  
  export default Bottombar;
