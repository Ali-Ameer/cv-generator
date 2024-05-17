import { useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^07\d{9}$/;

export default function useStep2() {
  const initialValues = {
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
    image: "",
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
    linkedin: Yup.string().required(),
    github: Yup.string(),
    position: Yup.string(),
    skills: Yup.array().of(Yup.string().required()),
    image: Yup.object(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return {
    formik,
  };
}
