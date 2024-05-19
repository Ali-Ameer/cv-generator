import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";
import { useFormik } from "formik";
import { useState } from "react";

export default function useStep8() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);
  // const formData = {
  //   step1: {
  //     name: "Kylan Payne",
  //     email: "lopevux@mailinator.com",
  //     mobile: "07700000000",
  //     street: "Autem earum quo cons",
  //     city: "Maiores consequat D",
  //     country: "Suscipit aut officia",
  //     linkedin: "Molestias in id vol",
  //     github: "Voluptatem excepteu",
  //     position: "Irure qui voluptas a",
  //     skills: ["Sapiente est minus i", "test", "test 2"],
  //     image: "",
  //   },
  //   step2: [
  //     {
  //       organization: "Dennis and Wolf Traders",
  //       position: "Quia magnam esse un",
  //       duration: ["2024/01", "2025/12"],
  //       description: "Necessitatibus paria",
  //     },
  //     {
  //       organization: "Knox Mullen Associates",
  //       position: "Nulla aut debitis qu",
  //       duration: ["2024/05", "2025/05"],
  //       description: "Modi nulla non cumqu",
  //     },
  //   ],
  //   step3: [
  //     {
  //       title: "Aut et dolores susci",
  //       link: "Tempor hic soluta qu",
  //       description: "Praesentium voluptat",
  //     },
  //     {
  //       title: "Et maxime non volupt",
  //       link: "Aut quae non natus v",
  //       description: "Est qui enim earum m",
  //     },
  //   ],
  //   step4: [
  //     {
  //       college: "Dolore explicabo Su",
  //       year: ["2024/01", "2025/08"],
  //       qualification: "Aut vel ratione quo ",
  //       description: "Aut nihil recusandae",
  //     },
  //   ],
  //   step5: {
  //     languages: ["arabic", "english"],
  //     achievements: ["Sed provident quisq" , "test"],
  //     certificates: ["In natus esse cillum", "test"],
  //   },
  //   step6: {
  //     color: "#1677ff",
  //   },
  //   step7: {
  //     templateType: 1,
  //   },
  // };

  // setCurrentStep(currentStep + 1);

  console.log(formData);

  return { formData };
}
