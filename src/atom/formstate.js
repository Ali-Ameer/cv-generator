import { atom } from "recoil";

export const formState = atom({
  key: "formState",
  default: {
    step1: {
      name: "",
      email: "",
      mobile: "",
      street: "",
      city: "",
      country: "",
      linkedin: "",
      github: "",
      position: "",
      skills: [],
      image: "",
    },
    step2: [
      {
        organization: "",
        position: "",
        duration: "",
        description: "",
      },
    ],
    step3: [
      {
        title: "",
        link: "",
        description: "",
      },
    ],
  },
});
