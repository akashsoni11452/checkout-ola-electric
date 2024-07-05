"use client";

import { NextPage } from "next";
import Carousel from "../components/carousel";
import { useState } from "react";
import Image from "next/image";
import downArrowBlack from "../assets/DownArrowBlack.png";
import backArrowIcon from "../assets/back_arrow_icon.svg";
import {
  categories,
  colorImages,
  getColorName,
  imageData,
} from "@/components/imageData";
import Modal from "@/components/modal";
import Description from "@/components/description";
import ExploreAccessories from "@/components/exploreAccessories";
import TermsAndConditions from "@/components/termsAndConditions";
import Continue from "@/components/continue";

const Home: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ola S1 Pro");
  const [selectedColor, setSelectedColor] = useState("amethyst");
  const [pincode, setPincode] = useState("");
  const [showModal, setShowModal] = useState(false);

  const colors = Object.keys(imageData[selectedCategory]);
  const colorImagesData = colorImages[selectedCategory];

  return (
    <>
      <div className="overflow-hidden">
        <section className="checkout-page">
          <div className="flex md:flex-row flex-col">
            <Carousel images={imageData[selectedCategory][selectedColor]} />
            <div className="lg:w-[440px] md:w-[50%] w-full  relative">
              <div
                className=" max-h-[87.5vh] overflow-auto"
                style={{ maxHeight: "calc(100vh - 120px)" }}
              >
                <div className=" p-2 px-6">
                  <div className="flex justify-end w-full flex-col items-end">
                    <p className="text-xs text-gray-700">DELIVERING TO</p>
                    <p
                      className="text-sm text-black-700 font-bold flex items-center justify-center gap-1 cursor-pointer"
                      onClick={() => {
                        setShowModal(true);
                        setPincode("");
                      }}
                    >
                      <span>{pincode && !showModal ? pincode : "Pincode"}</span>{" "}
                      <Image src={downArrowBlack} className="mt-1" alt="..." />
                    </p>
                  </div>
                  <div className="">
                    <Image src={backArrowIcon} alt="..." />
                  </div>
                  <div className="flex items-center gap-2 uppercase font-semibold mt-6">
                    <div className="text-sm  text-gray-400">color</div>
                    <div className="text-sm  text-gray-400">•</div>
                    <div className="text-sm text-black-400">
                      {getColorName(selectedColor)}
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {colors.map((color, i) => (
                      <div
                       key={color}
                        className={`p-0.5 rounded-full pt-0.5 relative mr-6 cursor-pointer ${
                          selectedColor === color
                            ? "border-2 border-[#92c83e]"
                            : ""
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        <Image
                          src={colorImagesData[i]}
                          className="h-full"
                          alt="..."
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="m-0 text-xs font-semibold">
                      CHOOSE MODEL AND VARIANT
                    </p>

                    <div className="mb-2 mt-6">
                      <ul
                        className="flex justify-between -mb-px text-sm font-medium text-center"
                        id="default-styled-tab"
                        data-tabs-toggle="#default-styled-tab-content"
                        data-tabs-active-classes="bg-white text-green-500 hover:text-green-500 dark:text-green-500 dark:hover:text-green-500 border-green-500 dark:border-green-500"
                        data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                        role="tablist"
                      >
                        {Object.keys(imageData).map((category, i) => (
                          <li className="w-[33%]" role="presentation" key={category}>
                            <button
                              className="bg-gray-100 inline-block p-4 border rounded-md hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-300 w-full"
                              type="button"
                              role="tab"
                              onClick={() => {
                                setSelectedCategory(category);
                                setSelectedColor(
                                  Object.keys(imageData[category])[0]
                                );
                              }}
                            >
                              <Image src={categories[i]} alt="..." />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Description />

                    <ExploreAccessories />
                  </div>
                </div>
                <TermsAndConditions />
              </div>
              <Continue />
            </div>
          </div>
        </section>
      </div>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        pincode={pincode}
        setPincode={setPincode}
      />
    </>
  );
};

export default Home;
