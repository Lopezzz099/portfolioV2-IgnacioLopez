import Image from "next/image";
import React from "react";

const Linkedin = ({ size }: IconProps) => {
  return (
    <Image src="/linkedinBlanco.png" alt="linkedin" width={size} height={size} style={{margin: "27px"}}/>
  );
};

export default Linkedin;
