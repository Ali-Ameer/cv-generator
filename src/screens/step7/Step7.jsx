import { Flex, Image, Input, Space, Typography } from "antd";
import Navigation from "../../components/navigation/Navigation";
import { Content } from "antd/es/layout/layout";
import useStep7 from "./useStep7";
import { CheckCircleFilled } from "@ant-design/icons";

export const Step7 = () => {
  const { formik } = useStep7();

  return (
    <Content>
      <Flex flex={1} justify="center" align="flex-start">
        <Typography level={3} className="text-primary">
          Choose CV color
        </Typography>
      </Flex>

      <Space
        direction="vertical"
        size="middle"
        align="center"
        style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Flex flex={1} justify="center" align="flex-start" gap={16}>
          <div
            className={`imgContainer ${
              formik.values.templateType === 1 ? "selected" : ""
            }`}
          >
            <Image
              src="/src/assets/images/template1.jpg"
              alt=""
              preview={false}
              className="thumbnail"
              onClick={() => formik.setFieldValue("templateType", 1)}
            />

            {formik.values.templateType === 1 && (
              <div className="templateChecked">
                <CheckCircleFilled className="checkedIcon" />
              </div>
            )}
          </div>

          <div
            className={`imgContainer ${
              formik.values.templateType === 2 ? "selected" : ""
            }`}
          >
            <Image
              src="/src/assets/images/template2.jpg"
              alt=""
              preview={false}
              className="thumbnail"
              onClick={() => formik.setFieldValue("templateType", 2)}
            />

            {formik.values.templateType === 2 && (
              <div className="templateChecked">
                <CheckCircleFilled className="checkedIcon" />
              </div>
            )}
          </div>
        </Flex>
      </Space>

      <Navigation handleNext={() => formik.handleSubmit()} />
    </Content>
  );
};
