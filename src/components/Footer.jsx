import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Google from "../assets/google-play-4.svg";
import App from "../assets/available-on-the-app-store.svg";
const Footer = () => {
  return (
    <footer className="bg-[#0b0a0a]">
      <div className=" px-8 py-16 bg-red-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center justify-start gap-6 mb-3">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p> Blog</p>
              <p>FAQ</p>
              <p>Wtach List</p>
            </div>
            <p>
              &copy; MovieX. All Rights Reserved. All videos and on this
              platform are tandmarkets of, and all related images and content
              are the property of , MovieX.Inc. Duplication and copy of this is
              strictly prohibited
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-4">Follow Us</h2>
            <div className="flex items-center space-x-6 ">
              <span className="bg-gray-800 p-2 cursor-pointer hover:text-red-500 rounded-full">
                <Facebook />
              </span>
              <span className="bg-gray-800 p-2 cursor-pointer hover:text-red-500 rounded-full">
                <Twitter />
              </span>
              <span className="bg-gray-800 p-2 cursor-pointer hover:text-red-500 rounded-full">
                <Github />
              </span>
              <span className="bg-gray-800 p-2 cursor-pointer hover:text-red-500 rounded-full">
                <Instagram />
              </span>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-4">Streamit App</h2>
            <div className="flex items-center gap-3">
              <span>
                {" "}
                <img className="w-32" src={Google} alt="" />
              </span>
              <span>
                {" "}
                <img className="w-32" src={App} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
