import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";
import { useFormik } from "formik";
import { useState } from "react";

export default function useStep7() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const initialValues = {
    templateType: formData.step7.templateType,
  };

  const validationSchema = Yup.object().shape({
    templateType: Yup.number(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, step7: {templateType: values.templateType} }));
      setCurrentStep(currentStep + 1);
    },
  });

  return { formik };
}
