import React, { ReactElement } from "react";
interface Props {
  children: ReactElement;
}

const Container = ({ children }: Props) => {
  return <div className="max-w-screen-2xl mx-auto px-2 py-10">{children}</div>;
};

export default Container;
