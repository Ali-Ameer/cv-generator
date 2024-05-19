import { useFormik } from "formik";
import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function useStep5() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const [languageInput, setLanguageInput] = useState("");
  const [achievementInput, setAchievementInput] = useState("");
  const [certificateInput, setCertificateInput] = useState("");

  const initialValues = {
    ...formData.step5,
  };
  const validationSchema = Yup.object({
    languages: Yup.array().of(Yup.string().required()).min(1).required(),
    achievements: Yup.array().of(Yup.string().required()).min(1).required(),
    certificates: Yup.array().of(Yup.string().required()).min(1).required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, step5: values }));
      setCurrentStep(currentStep + 1);
    },
  });

  // handle add and remove
  const handleAddLanguage = () => {
    if (languageInput) {
      formik.setFieldValue("languages", [...formik.values.languages, languageInput]);
      setLanguageInput("");
    }
  }

  const handleAddAchievement = () => {
    if (achievementInput) {
      formik.setFieldValue("achievements", [...formik.values.achievements, achievementInput]);
      setAchievementInput("");
    }
  };

  const handleAddCertificate = () => {
    if (certificateInput) {
      formik.setFieldValue("certificates", [...formik.values.certificates, certificateInput]);
      setCertificateInput("");
    }
  }

  const handleRemoveLanguage = (removedLanguage) => {
    const newLanguages = formik.values.languages.filter((language) => language !== removedLanguage);
    formik.setFieldValue("languages", newLanguages);
  }

  const handleRemoveAchievement = (removedAchievement) => {
    const newAchievements = formik.values.achievements.filter((achievement) => achievement !== removedAchievement);
    formik.setFieldValue("achievements", newAchievements);
  }

  const handleRemoveCertificate = (removedCertificate) => {
    const newCertificates = formik.values.certificates.filter((certificate) => certificate !== removedCertificate);
    formik.setFieldValue("certificates", newCertificates);
  }


  return {
    formik,
    languageInput,
    setLanguageInput,

    achievementInput,
    setAchievementInput,

    certificateInput,
    setCertificateInput,

    handleAddLanguage,
    handleRemoveLanguage,

    handleAddAchievement,
    handleRemoveAchievement,

    handleAddCertificate,
    handleRemoveCertificate,
  };
}
