import Image from "next/image";
import React from "react";

const Github = ({ size }: IconProps) => {
  return (
    <Image src="/githubBlanco.png" alt="github" width={size} height={size}/>
  );
};

export default Github;
