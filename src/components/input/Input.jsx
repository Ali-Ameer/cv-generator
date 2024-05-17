import { Form, Input as FormInput } from "antd";

export default function Input({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) {
  return (
    <Form.Item
      label={label}
      help={touched && error ? error : ""}
      validateStatus={touched && error ? "error" : undefined}
      style={{width: "100%",}}
    >
      <FormInput
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Form.Item>
  );
}
