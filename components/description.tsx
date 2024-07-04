import Image from "next/image";
import tick from "../assets/tick.svg";
import infoIcon from "../assets/infoIcon.svg";
import deliveryIcon from "../assets/delivery-icon.svg";
import rightArrow from "../assets/rightArrow.svg";
import compareModelsIcon from "../assets/compare-models-icon.svg";
import frame from "../assets/Frame+427319514.svg";
import rightArrowIcon from "../assets/right-arrow-icon.svg";
import yourOrders from "../assets/your-orders.svg";

const Description = () => {
    return(
        <>
        <div className="px-2 py-1 text-sm text-green-500 flex justify-between items-center bg-gradient-to-t from-green-100 to-white font-semibold">
        <div className="flex items-center gap-1">
          <div>
            <Image className="w-4" src={tick} alt="" />
          </div>
          <p>8 Year Battery Warranty included!</p>
        </div>
        <div>
          <Image className="" src={infoIcon} alt="" />
        </div>
      </div>
      <div className="mt-3 border border-green-500 pt-2 rounded-md overflow-hidden">
        <p className="text-md text-black-400 font-medium border-b border-gray-300 pb-2  px-4">
          S1 Pro 2nd Generation
        </p>
        <div className="flex pt-5 justify-between  px-5">
          <div className="">
            <p className="text-sm text-gray-400 uppercase">
              CERTIFIED RANGE
            </p>
            <p className="text-sm text-black-400 uppercase font-semibold">
              195 km
            </p>
          </div>
          <div className="">
            <p className="text-sm text-gray-400 uppercase">
              TOP SPEED
            </p>
            <p className="text-sm text-black-400 uppercase font-semibold">
              120 <span className="text-xs">km/h</span>
            </p>
          </div>
          <div className="">
            <p className="text-sm text-gray-400 uppercase">
              0-40 km/h
            </p>
            <p className="text-sm text-black-400 uppercase font-semibold">
              <span className="text-xs">sec</span>
            </p>
          </div>
        </div>
        <div className="px-5 py-2 text-sm text-green-500 flex items-center bg-green-50 to-white font-semibold mt-3 gap-2">
          <div className="flex items-center gap-1">
            <p>Estimated delivery by 16th Jul 2024!</p>
          </div>
          <div>
            <Image className="" src={infoIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-8 pb-6 border-b border-gray-150">
        <div className="flex gap-2">
          <Image src={deliveryIcon} alt="..." />
          <div className="">
            <p className="text-sm text-black-400 uppercase">
              DELIVERING TO
            </p>
            <p className="text-md text-black-500 font-semibold">
              Select location
            </p>
          </div>
        </div>
        <Image src={rightArrow} alt="..." />
      </div>
      <div className="flex justify-between w-full mt-8 pb-6 border-b border-gray-150">
        <div className="flex gap-2">
          <Image src={compareModelsIcon} alt="..." />
          <div className="">
            <p className="text-sm text-black-400 uppercase">
              COMPARE MODELS
            </p>
            <p className="text-md text-black-500 font-semibold">
              View full spec sheet
            </p>
          </div>
        </div>
        <Image src={rightArrow} alt="..." />
      </div>
  
 
    <Image src={frame} className="mt-6 mx-2 mb-2" alt="..." />
    <div className="bg-[url('../assets/green-design-background.svg')] p-4 mt-4 flex items-center justify-between mt-3">
      <p className="text-md text-green-700 font-medium w-[70%]">
        Explore finance as low as 6.99%* with 0% processing
        fee!
      </p>
      <Image src={rightArrowIcon} alt="..." />
    </div>
    <div className="flex justify-between w-full mt-8 pb-6 border-b border-gray-150">
      <div className="flex gap-2">
        <Image src={yourOrders} alt="..." />
        <div className="">
          <p className="text-sm text-black-400 uppercase">
            ALREADY BOOKED?
          </p>
          <p className="text-md text-black-500 font-semibold">
            Check order status
          </p>
        </div>
      </div>
      <Image src={rightArrow} alt="..." />
    </div>
    </>
    )
}

export default Description