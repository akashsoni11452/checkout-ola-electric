import Image from "next/image";
import infoIcon from "../assets/infoIcon.svg";
import tagCouponsOffer from "../assets/tag_coupons_offer.svg";

const Continue = () => {
  return (
    <div className="absolute buttom-0 w-full">
      <div className="bg-green-500 text-white text-sm font-semibold w-full flex p-3 gap-1">
        <Image src={tagCouponsOffer} alt="..." />
        Get ₹10,000 off on the Ola S1 X+
      </div>
      <div className="flex p-3">
        <div className="w-[50%]">
          <p className="flex text-lg text-black-400 font-semibold">
            ₹1,28,999
            <Image src={infoIcon} alt="..." />
          </p>
          <a href="#" className="text-xs text-gray-400 underline">
            EMI starting from ₹3,099
          </a>
        </div>
        <button className="text-md font-semibold bg-black border-0 text-white w-[50%]">
          Continue
        </button>
      </div>
    </div>
  );
};
export default Continue
