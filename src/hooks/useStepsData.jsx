import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function useStepsData() {
  const [currentStep, setCurrentStep] = useState(0);

  const initialValues = {
    step1: {
      firstName: "",
      lastName: "",
    },
    step2: {
      email: "",
      phone: "",
    },
    step3: {
      address: "",
      city: "",
      zipCode: "",
    },
  };

  const validationSchema = {
    step1: Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
    }),
    step2: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
    }),
    step3: Yup.object().shape({
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.string().required("Zip code is required"),
    }),
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return {
    currentStep,
    setCurrentStep,
    formik,
    initialValues,
    validationSchema,
  };
}
