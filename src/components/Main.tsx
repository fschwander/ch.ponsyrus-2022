import {ReactNode} from "react";
import "./Main.scss";

type Props = {
  children: ReactNode
}

export const Main = ({children}: Props) => {
  return (
    <div className="main">
      <div className="main__roof" />
      <div className="main__content">
      {children}
      </div>
    </div>
  )
}