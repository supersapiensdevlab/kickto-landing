import React from "react";
import logo from "../../assets/images/kickto-logo-text-alt.svg";

function NavbarAlt() {
  return (
    <div
      data-aos="fade-bottom"
      data-aos-duration="1000"
      data-aos-delay="1500"
      data-aos-easing="ease-in-out"
      className="navbar  z-[200] fixed  text-black/80 bg-primary backdrop-blur bg-opacity-5   lg:px-24 w-full max-w-full"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content justify-start items-start  mt-6 p-2 shadow bg-white rounded-box "
          >
            <li>
              <a className="btn  bg-transparent text-primary   border-none hover:scale-95 hover:text-white hover:bg-primary text-left  btn-block ">
                Marketplace{" "}
              </a>
            </li>

            <li>
              <a
                className="btn   bg-transparent text-primary   border-none hover:scale-95 hover:text-white hover:bg-primary text-left  btn-block w-full"
                target="_blank"
                href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=ETH&inputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C"
              >
                DEX
              </a>
            </li>
          </ul>
        </div>
        <img src={logo} className="h-16 w-36"></img>

        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>

      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {/* <a className="  bg-transparent text-primary    ">Coming Soon </a> */}
          </li>
          {/* <li className="flex align-middle items-center mx-3">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeA05_4Tv09vuD4ZKhpr7EhLorvUqHibRSXV7sgBLzhE8HNLQ/viewform?usp=sf_link" className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block ">
              Public Sale
            </a>
          </li>{" "} */}
          <li className="flex align-middle items-center mx-3">
            <a className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block ">
              Marketplace
            </a>
          </li>{" "}
          <li className="flex align-middle items-center mx-3">
            <a
              className="btn  bg-transparent text-white gradient-border  border-none hover:scale-95 hover:text-white  btn-block "
              href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=ETH&inputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C"
              target="_blank"
            >
              DEX
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarAlt;
