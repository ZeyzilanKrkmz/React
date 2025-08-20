//import React from 'react'

import { EllipsisVertical } from "lucide-react";

const Header = () => {
  return <div className="flex justify-between items-center p-8">
    <span className="text-2xl">Data Report</span>
    <EllipsisVertical/>
  </div>;
}

export default Header;