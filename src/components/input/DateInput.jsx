import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";

export default function DateInput({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  picker,
}) {
  return (
    <Form.Item
      label={label}
      help={touched && error ? error : ""}
      validateStatus={touched && error ? "error" : undefined}
      style={{ width: "100%" }}
    >
      <RangePicker
        picker={picker}
        name={name}
        value={
          value
            ? value?.map((date) =>
                dayjs(
                  date,
                  picker === "month"
                    ? monthFormat
                    : picker === "year"
                    ? dateFormat
                    : weekFormat
                )
              )
            : undefined
        }
        onChange={onChange}
        onBlur={onBlur}
        format={
          picker === "month"
            ? monthFormat
            : picker === "year"
            ? dateFormat
            : weekFormat
        }
      />
    </Form.Item>
  );
}
