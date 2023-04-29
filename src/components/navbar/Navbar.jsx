import logo from "../../assets/images/kickto-logo-text-alt.svg";
import logoWhite from "../../assets/images/kickto-logo-text-white.svg";
import logoPurpleWhite from "../../assets/images/kickto-logo-text-alt-stroke.svg";

function navbar() {
  return (
    <div
      data-aos="fade-bottom"
      data-aos-duration="1000"
      data-aos-delay="1500"
      data-aos-easing="ease-in-out"
      className="navbar  z-[200] fixed  text-black/80 bg-primary backdrop-blur bg-opacity-5   lg:px-24 w-full max-w-full"
    >
      <div className="navbar-start">
        <img src={logo} className="h-16 w-36"></img>
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <ul className="p-2">
                {/* <li>
                  <a className="text-white bg-transparent border-none btn gradient-border hover:scale-95 hover:text-white btn-block ">
                    Coming Soon{" "}
                  </a>
                </li> */}
                {/* <li>
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeA05_4Tv09vuD4ZKhpr7EhLorvUqHibRSXV7sgBLzhE8HNLQ/viewform?usp=sf_link" className="text-white bg-transparent border-none btn gradient-border hover:scale-95 hover:text-white btn-block ">
                    Public Sale{" "}
                  </a>
                </li> */}
                <li>
                  <a
                    target="_blank"
                    href="https://nftmarketplace.kickto.app"
                    className="text-white bg-transparent border-none btn gradient-border hover:scale-95 hover:text-white btn-block "
                  >
                    Marketplace{" "}
                  </a>
                </li>
                <li>
                  <a>
                    <a
                      className="hidden text-white bg-transparent border-none btn gradient-border hover:scale-95 hover:text-white btn-block "
                      target="_blank"
                      href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C&inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
                    >
                      DEX
                    </a>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden navbar-end lg:flex ">
        <ul className="px-1 menu menu-horizontal">
          <li>
            {/* <a className="bg-transparent text-primary">Coming Soon </a> */}
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
              href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C&inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
              target="_blank"
            >
              DEX
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:hidden ">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="text-white btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="p-2 mt-3 bg-white shadow menu menu-compact dropdown-content rounded-box w-52"
          >
            {/* <li>
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeA05_4Tv09vuD4ZKhpr7EhLorvUqHibRSXV7sgBLzhE8HNLQ/viewform?usp=sf_link" >Public Sale</a>
            </li> */}
            <li>
              <a target="_blank" href="https://nftmarketplace.kickto.app">
                Marketplace
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://swap.kickto.app/#/swap?chain=polygon&outputCurrency=ETH&inputCurrency=0x13A5FB6ec4a10C3a25615F2631057277b2bC712C"
              >
                DEX
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar;
