import React from "react";
import Container from "./Container";
import { TbMinusVertical } from "react-icons/tb";
import { FaGithub, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerList = [
    { _id: 131, title: "Support", link: "#", icon: true },
    { _id: 132, title: "Contact Us", link: "#", icon: true },
    { _id: 133, title: "Disclaimer", link: "#", icon: true },
    { _id: 134, title: "Privacy Policy", link: "#" },
  ];
  return (
    <div className="w-full bg-green-100 mt-10">
      <Container>
        <div className="text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between">
          <p>© Copyrights Creative Studio</p>
          <ul className="flex items-center gap-2">
            {footerList.map((item) => (
              <li
                key={item._id}
                className="flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer"
              >
                {item.title}{" "}
                {item.icon && <TbMinusVertical className="text-xl" />}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-gray-700">
            <FaGithub className="text-xl hover:text-primeColor cursor-pointer duration-300" />
            <FaYoutube className="text-xl hover:text-primeColor cursor-pointer duration-300" />
            <FaLinkedinIn className="text-xl hover:text-primeColor cursor-pointer duration-300" />
            <FaFacebookF className="text-xl hover:text-primeColor cursor-pointer duration-300" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
