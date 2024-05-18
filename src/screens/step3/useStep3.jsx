import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";

export default function useStep2() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const initialValues = {
    projects: [...formData.step3],
  };

  const validationSchema = Yup.object().shape({
    projects: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Title is required"),
        link: Yup.string().required("Link is required"),
        description: Yup.string().required("Description is required"),
      })
    ),
  });

  const onSubmit = (values) => {
    setFormData((prev) => ({ ...prev, step3: [...values.projects] }));
    setCurrentStep(currentStep + 1);
  };

  console.log(formData.step3);
  console.log(currentStep);

  return {
    initialValues,
    validationSchema,
    onSubmit,
  };
}
