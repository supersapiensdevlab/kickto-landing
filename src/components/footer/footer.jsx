import shoe from "../../assets/images/shoe1.png";
import logo from "../../assets/images/kickto-logo-text-alt.svg";
import social from "../../assets/images/social.png";

function footer() {
  return ( 
    <div class=" bg-primary/10">
        <div class="max-w-2xl mx-auto text-black/80 py-10">
            <div class="text-center">
            <img src={logo} class=" px-36"/>
                <p> Stay fit. All day, every day. </p>
                <div class="flex justify-center my-10">
                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                        <div class="text-left ml-3">
                            <p class='text-xs text-black/80'>Download on </p>
                            <p class="text-sm md:text-base"> Google Play Store </p>
                        </div>
                    </div>
                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" class="w-7 md:w-8"/>
                        <div class="text-left ml-3">
                            <p class='text-xs text-black/80'>Download on </p>
                            <p class="text-sm md:text-base"> Apple Store </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Kickto, 2022</p>
                <div class="order-1 md:order-2">
                    <span class="px-2">About us</span>
                    <span class="px-2 border-l">Contact us</span>
                    <span class="px-2 border-l">Privacy Policy</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default footer;
