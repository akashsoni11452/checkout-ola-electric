import amethyst1 from "../assets/S1ProGen02_Amethyst_01.webp";
import amethyst2 from "../assets/S1ProGen02_Amethyst_02.webp";
import jetBlack1 from "../assets/S1ProGen02_JetBlack_02.webp";
import jetBlack2 from "../assets/S1ProGen02_JetBlack_03.webp";
import mattWhite1 from "../assets/S1ProGen02_MattWhite_02.webp";
import mattWhite2 from "../assets/S1ProGen02_MattWhite_03.webp";

import midNightBlue1 from "../assets/S1ProGen02_MidnightBlue_02.webp";
import midNightBlue2 from "../assets/S1ProGen02_MidnightBlue_03.webp";
import stellerBlue1 from "../assets/S1ProGen02_StellarBlue_02.webp";
import stellerBlue2 from "../assets/S1ProGen02_StellarBlue_03.webp";

import redBlackFinal1 from "../assets/BuyingFloor_Red-black_Final2_0000.webp";
import redBlackFinal2 from "../assets/BuyingFloor_Red-black_Final2_0001.webp";
import whiteMblueFinal1 from "../assets/BuyingFloor_White-Mblue_Final_02_0001.png";
import whiteMblueFinal2 from "../assets/BuyingFloor_White-Mblue_Final_02_0002.png";
import { StaticImageData } from "next/image";

import olaS1ProIcon from "../assets/ola-s1-pro-icon.svg";
import olaS1AirIcon from "../assets/ola-s1-air-icon.svg";
import s1XImage from "../assets/s1X_img.svg";

import amitist from "../assets/amitist.png";
import jetBlack from "../assets/jet_black_circle.png";
import mattWhite from "../assets/Rectangle+3643.png";
import midNightBlue from "../assets/midnight_blue_circle.png";
import stellerBlue from "../assets/steller+blue.png";
import redVelocity from "../assets/Red+Velocity.png";
import whiteVelocity from "../assets/whiteVelocity.png";

export type ImageDataType = {
  [key: string]: {
    [key: string]: StaticImageData[];
  };
};

export type ImageDataType1 = {
  [key: string]: StaticImageData[];
};

export const imageData: ImageDataType = {
  "Ola S1 Pro": {
    amethyst: [amethyst1, amethyst2],
    jetBlack: [jetBlack1, jetBlack2],
    mattWhite: [mattWhite1, mattWhite2],
  },
  "Ola S1 Air": {
    midNightBlue: [midNightBlue1, midNightBlue2],
    stellerBlue: [stellerBlue1, stellerBlue2],
  },
  "Ola S1 X": {
    redBlackFinal: [redBlackFinal1, redBlackFinal2],
    whiteMblueFinal: [whiteMblueFinal1, whiteMblueFinal2],
  },
};

export const categories = [olaS1ProIcon, olaS1AirIcon, s1XImage];

export const colorImages: ImageDataType1 = {
  "Ola S1 Pro": [amitist, jetBlack, mattWhite],
  "Ola S1 Air": [midNightBlue, stellerBlue],
  "Ola S1 X": [redVelocity, whiteVelocity],
};

export const getColorName = (color: string) => {
  switch (color) {
    case "amethyst":
      return "amethyst";
    case "jetBlack":
      return "jet black";
    case "mattWhite":
      return "matt white";
    case "midNightBlue":
      return "mid night blue";
    case "stellerBlue":
      return "steller blue";
    case "redBlackFinal":
      return "red black";
    case "whiteMblueFinal":
      return "white blue";
  }
};
