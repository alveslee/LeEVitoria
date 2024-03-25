import { ReactNode } from "react";

interface Props{
    children: ReactNode
    className?: string
}
  
    function MyP({children, className}: Props){
        return<h1 className={ className} > {children}</h1>;
    }

export default MyP;