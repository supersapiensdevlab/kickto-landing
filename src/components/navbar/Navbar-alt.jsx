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
              className="w-5 h-5"
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
            className="items-start justify-start p-2 mt-6 bg-white shadow menu menu-compact dropdown-content rounded-box "
          >
            <li>
              <a
                target="_blank"
                href="https://nftmarketplace.kickto.app"
                className="text-left bg-transparent border-none btn text-primary hover:scale-95 hover:text-white hover:bg-primary btn-block "
              >
                Marketplace{" "}
              </a>
            </li>

            <li>
              <a
                className="w-full text-left bg-transparent border-none btn text-primary hover:scale-95 hover:text-white hover:bg-primary btn-block"
                target="_blank"
                href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=ETH&inputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C"
              >
                DEX
              </a>
            </li>
          </ul>
        </div>
        <img src={logo} className="h-16 w-36"></img>

        {/* <a className="text-xl normal-case btn btn-ghost">daisyUI</a> */}
      </div>

      <div className="hidden navbar-end lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            {/* <a className="bg-transparent  text-primary">Coming Soon </a> */}
          </li>
          {/* <li className="flex items-center mx-3 align-middle">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeA05_4Tv09vuD4ZKhpr7EhLorvUqHibRSXV7sgBLzhE8HNLQ/viewform?usp=sf_link" className="text-white bg-transparent border-none btn gradient-border hover:scale-95 hover:text-white btn-block ">
              Public Sale
            </a>
          </li>{" "} */}
          <li className="flex items-center mx-3 align-middle">
            <a
              target="_blank"
              href="https://nftmarketplace.kickto.app"
              className="text-white bg-transparent border-none btn gradient-border hover:scale-95 hover:text-white btn-block "
            >
              Marketplace
            </a>
          </li>{" "}
          <li className="flex items-center mx-3 align-middle">
            <a
              className="text-white bg-transparent border-none btn gradient-border hover:scale-95 hover:text-white btn-block "
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
