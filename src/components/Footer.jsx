import Logo from "../assets/logo.png";
import callIconSvg from "../assets/callIconSvg.svg";
import emailIconSvg from "../assets/emailIconSvg.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-screen bg-white flex flex-col px-24 items-center"
    >
      <div className="flex flex-row justify-between my-12 w-full">
        <div className="flex flex-col">
          <a href="#">
            <div className="text-2xl font-bold ">Home</div>
          </a>
          <a href="#about">
            <div className="text-2xl font-bold ">About Us</div>
          </a>
          <a href="#services">
            <div className="text-2xl font-bold ">Our Services</div>
          </a>
          <a href="#testimonials">
            <div className="text-2xl font-bold ">Testimonials</div>
          </a>
          <a href="#portfolio">
            <div className="text-2xl font-bold ">Portfolio</div>
          </a>
          <a href="#contact">
            <div className="text-2xl font-bold ">Contact Us</div>
          </a>
        </div>

        <div className="flex flex-col">
          {/* Logo */}
          <div className="pt-2">
            <a href="#">
              <img src={Logo} width="200px" />
            </a>
          </div>
          {/* Phone */}
          <a href="#" className="flex flex-row items-center space-x-6 my-6">
            <img src={callIconSvg} width="25px" />

            <div className="text-1xl">+91-9555854795</div>
          </a>
          {/* Email */}
          <a href="#" className="flex flex-row items-center space-x-6">
            <img src={emailIconSvg} width="25px" />

            <div className="text-1xl">info.webboostdigital@gmail.com</div>
          </a>
        </div>
      </div>
      <div className="text-2xl font-bold mb-12"> &#169; Copyright 2023</div>
    </div>
  );
};

export default Footer;
