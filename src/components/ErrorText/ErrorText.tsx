import React from "react";

type TErrorText = {
  children: React.ReactNode;
};

export const ErrorText: React.FC<any> = ({ children }: TErrorText) => {
  return <p className="ErrorText">{children}</p>;
};
