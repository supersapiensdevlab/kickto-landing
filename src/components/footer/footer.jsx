import shoe from "../../assets/images/shoe1.png";
import logo from "../../assets/images/kickto-logo-text.svg";
import social from "../../assets/images/social.png";

function footer() {
  return (
    <div className=" grid  sm:grid-cols-6 p-6 gap-3 text-white  align-middle items-center bg-orange-300 bg-opacity-10 py-6">
        <div className="col-span-1 hidden md:block"></div>
      <div className="col-span-1">
        <img src={logo}  className="h-20 w-56"/>
      </div>
      <div className="col-span-1 flex-col">
        <p className="font-semibold text-lg"> Contact us</p>
        <p className="opacity-60">+91 123 456 7890</p>
        <p className="opacity-60">hello@kickto.app</p>
      </div>
      <div className="">
        <img src={social} className="h-14 w-52"/>    
      </div>
      <button className="btn bg-orange-500 text-white">Get Started</button>
    </div>
  );
}

export default footer;
