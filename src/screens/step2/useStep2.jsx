import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";

export default function useStep2() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const initialValues = {
    experience: [...formData.step2],
  };

  const validationSchema = Yup.object().shape({
    experience: Yup.array().of(
      Yup.object().shape({
        organization: Yup.string().required("Organization is required"),
        position: Yup.string().required("Position is required"),
        duration: Yup.array()
          .of(Yup.string().required())
          .required("Duration is required"),
        description: Yup.string().required("Description is required"),
      })
    ),
  });

  const onSubmit = (values) => {
    setFormData((prev) => ({ ...prev, step2: [...values.experience] }));
    setCurrentStep(currentStep + 1);
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
  };
}
