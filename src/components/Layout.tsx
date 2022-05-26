import './Layout.scss';
import {ReactNode} from "react";

type Props = {
  children: ReactNode;
}

export const Layout = ({children}: Props) => {

  return <div className='layout'>
    {children}
  </div>
}