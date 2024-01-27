import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";


type Props = {
        children: React.ReactNode
        setSelectedPage: (value: SelectedPage) =>void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink 
    className="rounded-md bg-white text-black px-10 py-2 hover:bg-Gray hover:text-Blood"
    onClick={()=> setSelectedPage(SelectedPage.Gallary)}
    href={`#${SelectedPage.Gallary}`}>

        {children}
    </AnchorLink>
  )
}

export default ActionButton