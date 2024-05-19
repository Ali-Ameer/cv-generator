import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";

export default function useStep4() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const initialValues = {
    education: formData.step4,
  };

  const validationSchema = Yup.object().shape({
    education: Yup.array().of(
      Yup.object().shape({
        college: Yup.string().required("College is required"),
        year: Yup.array().of(Yup.string().required()).required("Year is required"),
        qualification: Yup.string().required("qualification is required"),
        description: Yup.string().required("Description is required"),
      })
    ),
  });

  const onSubmit = (values) => {
    setFormData((prev) => ({ ...prev, step4: [...values.education] }));
    setCurrentStep(currentStep + 1);
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
  };
}
