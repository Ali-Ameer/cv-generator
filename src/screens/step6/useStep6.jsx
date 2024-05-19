import * as Yup from "yup";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useRecoilState } from "recoil";
import { useFormik } from "formik";

export default function useStep6() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const initialValues = {
    ...formData.step6.color,
  };

  const validationSchema = Yup.object().shape({
    color: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, step6: {color: values} }));
      setCurrentStep(currentStep + 1);
    },
  });

  return { formik };
}
