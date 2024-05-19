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
      image: {},
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

    step4: [
      {
        college: "",
        year: "",
        qualification: "",
        description: "",
      },
    ],

    step5: {
      languages: [],
      achievements: [],
      certificates: [],
    },

    step6: {
      color: "#1677ff",
    },

    step7: {
      templateType: 1,
    },
  },
});
