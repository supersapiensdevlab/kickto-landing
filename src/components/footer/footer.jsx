import shoe from "../../assets/images/shoe1.png";
import logo from "../../assets/images/kickto-logo-text-alt.svg";
import social from "../../assets/images/social.png";

function footer() {
  return (
    <div class=" bg-primary/10">
      <div class="max-w-2xl mx-auto text-black/80 py-10">
        <div class="text-center">
          <img src={logo} class=" px-36" />
          <p> Stay fit. All day, every day. </p>
          <div class="social-container   mt-5">
            <ul class="social-icons">
              <li>
                <a
                  class=" hidden"
                  href="https://www.facebook.com/KicktoOfficial/"
                  target="blank"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  class=" "
                  href="https://twitter.com/KicktoOfficial_"
                  target="blank"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  class=" "
                  href="https://www.instagram.com/kickto.official"
                  target="blank"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              {/* <li>
                <a class="hidden " href="https://discord.gg/USXYEte" target="blank">
                  <i class="fab fa-discord"></i>
                </a>
              </li> */}
              <li>
                <a
                  class=" "
                  href="https://t.me/+EeMUF7D0mLIwN2Fl"
                  target="blank"
                >
                  <i class="fa fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="flex justify-center my-10 hidden">
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                class="w-7 md:w-8"
              />
              <div class="text-left ml-3">
                <p class="text-xs text-black/80">Download on </p>
                <p class="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                class="w-7 md:w-8"
              />
              <div class="text-left ml-3">
                <p class="text-xs text-black/80">Download on </p>
                <p class="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Kickto, 2023</p>
          <a href="#whatiskickto" className="btn btn-ghost">
            About us
          </a>
          <div class="order-1 md:order-2">
            <span class="px-2 border-l"></span>
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn btn-ghost">
              Contact us
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal bg-white/10 backdrop-blur-md">
              <div className="modal-box bg-white">
                <h1 className="text-primary text-3xl font-semibold   uppercase ">
                  Have a Question
                </h1>
                <p className="text-primary/50  text-lg  mb-2 opacity-80">
                  write to us
                </p>
                <div className="space-y-4 ">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered input-primary w-full  bg-opacity-5"
                  />

                  <input
                    type="text"
                    placeholder="E-mail ID"
                    className="input input-bordered input-primary w-full  bg-opacity-5"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered input-primary w-full  bg-opacity-5"
                  />

                  <textarea
                    className="textarea textarea-primary textarea-bordered w-full bg-opacity-5"
                    placeholder="Type your Message"
                  ></textarea>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn btn-ghost">
                    Cancel
                  </label>
                  <label
                    htmlFor="my-modal"
                    className="bg-primary rounded-lg hover:bg-primary/80 text-white cursor-pointer text-lg px-4 flex align-middle items-center text-center "
                  >
                    Send
                  </label>
                </div>
              </div>
            </div>
            <span class="px-2 border-l hidden">Privacy Policy</span>
          </div>
        </div>
      </div>

      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(153,0,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(100,70,245,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(32,130,233,0.3)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="rgba(32,130,233,0.1)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default footer;
