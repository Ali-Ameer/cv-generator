import { useFormik } from "formik";
import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";
import { notification } from "antd";
import { useEffect, useState } from "react";

const phoneRegExp = /^07\d{9}$/;

export default function useStep1() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const [skillInput, setSkillInput] = useState("");

  const initialValues = {
    ...formData.step1,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    mobile: Yup.string()
      .matches(phoneRegExp, "must be like this 07700000000")
      .min(11)
      .max(11)
      .required(),
    street: Yup.string().required(),
    city: Yup.string().required(),
    country: Yup.string().required(),
    linkedin: Yup.string(),
    github: Yup.string(),
    position: Yup.string().required(),
    skills: Yup.array().of(Yup.string().required()).min(1).required(),
    image: Yup.object(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, step1: values }));
      setCurrentStep(currentStep + 1);
    },
  });

  const handleAddSkill = () => {
    if (skillInput) {
      formik.setFieldValue("skills", [...formik.values.skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (removedSkill) => {
    const newSkills = formik.values.skills.filter(
      (skill) => skill !== removedSkill
    );
    formik.setFieldValue("skills", newSkills);
  };

  // alert
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (msg) => {
    api.error({
      message: `Skills are required`,
      description: msg,
      placement: "topRight",
    });
  };

  useEffect(() => {
    if (formik.isSubmitting) {
      openNotification(formik.errors.skills);
    }
  }, [formik.errors.skills]);

  return {
    formik,
    setCurrentStep,
    skillInput,
    setSkillInput,
    handleAddSkill,
    handleRemoveSkill,
    openNotification,
    contextHolder,
  };
}
