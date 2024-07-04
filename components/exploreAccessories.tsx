import Image from "next/image";
import homeMwebScooterCover from "../assets/Home mweb scooter cover.png";
import homeMwebBuddyStep from "../assets/Home mweb buddy step.png";
import image926 from "../assets/0_2024-05-10_15_06_40.926.png";

const ExploreAccessories = () => {
    return(
        <>
        <h5 className="text-lg font-medium my-6 pl-4">
        Explore accessories
      </h5>
      <div className="flex gap-5 mb-3">
        <Image
          src={homeMwebScooterCover}
          className="w-36 object-cover"
          alt="..."
        />
        <div className="">
          <p className="text-md text-black-400 font-medium mb-2">
            Scooter Cover
          </p>
          <p className="text-md text-black-400 h-10">₹999</p>
          <p className="text-xs text-gray-400">
            Ships by Jul 19
          </p>
          <button className="bg-green-50 text-md border border-gray-300 px-2 h-8 rounded-md w-20 mt-3 text-green-500">
            Add
          </button>
        </div>
      </div>
      <div className="flex gap-5 mb-3">
        <Image
          src={homeMwebBuddyStep}
          className="w-36 object-cover"
          alt="..."
        />
        <div className="">
          <p className="text-md text-black-400 font-medium mb-2">
            Buddy Step
          </p>
          <p className="text-md text-black-400 h-10">₹1999</p>
          <p className="text-xs text-gray-400">
            Ships by Jul 19
          </p>
          <button className="bg-green-50 text-md border border-gray-300 px-2 h-8 rounded-md w-20 mt-3 text-green-500">
            Add
          </button>
        </div>
      </div>
      <div className="flex gap-5 mb-3">
        <Image
          src={image926}
          className="w-36 object-cover"
          alt="..."
        />
        <div className="">
          <p className="text-md text-black-400 font-medium mb-2">
            Fast Charger
          </p>
          <p className="text-md text-black-400 h-10">₹31499</p>
          <p className="text-xs text-gray-400">
            Ships by Oct 2
          </p>
          <button className="bg-green-50 text-md border border-gray-300 px-2 h-8 rounded-md w-20 mt-3 text-green-500">
            Add
          </button>
        </div>
      </div>
      </>
    )
}
export default ExploreAccessories