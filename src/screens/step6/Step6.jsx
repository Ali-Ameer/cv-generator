import { ColorPicker, Flex, Input, Space, Typography } from "antd";
import useStep6 from "./useStep6";
import Navigation from "../../components/navigation/Navigation";
import { useMemo, useState } from "react";
import { Content } from "antd/es/layout/layout";

const inputStyle = {
  width: "220px",
  textAlign: "center",
  fontWeight: "500",
  color: "#333",
  padding: "10px 24px",
  marginBottom: "0",
};

export const Step6 = () => {
  const { formik } = useStep6();
  const [colorHex, setColorHex] = useState("#1677ff");
  const [formatHex, setFormatHex] = useState("hex");

  const hexString = useMemo(
    () => (typeof colorHex === "string" ? colorHex : colorHex?.toHexString()),
    [colorHex]
  );

  const rgbString = useMemo(
    () =>
      typeof colorHex === "string"
        ? "rgb(22, 119, 255)"
        : colorHex?.toRgbString(),
    [colorHex]
  );

  return (
    <Content>
      <Flex flex={1} justify="center" align="flex-start">
        <Typography level={3} className="text-primary">
          Choose CV color
        </Typography>
      </Flex>

      <Flex
        flex={1}
        justify="center"
        align="flex-start"
        style={{ height: 280 }}
      >
        <ColorPicker
          format={formatHex}
          value={colorHex}
          onChange={setColorHex}
          onFormatChange={setFormatHex}
          open={true}
          styles={{
            popupOverlayInner: {
              boxShadow: "none",
            },
          }}
          placement="bottom"
        >
          <></>
        </ColorPicker>
      </Flex>

      <Flex flex={1} justify="center" align="flex-start">
        <Space direction="vertical" size="middle" align="center">
          <Space direction="vertical" align="center" size="small">
            <Input type="text" value={hexString} readOnly style={inputStyle} />
            <Typography.Text strong type="secondary">
              Hex
            </Typography.Text>
          </Space>

          <Space direction="vertical" align="center" size="small">
            <Input type="text" value={rgbString} readOnly style={inputStyle} />
            <Typography.Text strong type="secondary">
              RGB
            </Typography.Text>
          </Space>
        </Space>
      </Flex>

      <Navigation handleNext={() => formik.handleSubmit(hexString)} />
    </Content>
  );
};
