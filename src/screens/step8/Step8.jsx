import { Button, Flex, Image, Input, Space, Typography } from "antd";
import Navigation from "../../components/navigation/Navigation";
import { Content } from "antd/es/layout/layout";
import { Template1 } from "./Template1";
import { useRef } from "react";
import { CheckCircleFilled } from "@ant-design/icons";

export const Step8 = () => {
  const printRef = useRef();

  const handleDownloadPdf = () => {
    const element = printRef.current;
    const opt = {
      margin: 0.5,
      filename: "CV.pdf",
      image: { type: "png", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <Content>
      <Flex flex={1} justify="center" align="flex-start">
        <Typography level={3} className="text-primary">
          Congrats your cv is ready
        </Typography>
      </Flex>

      <Flex
        flex={1}
        justify="center"
        align="flex-start"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <CheckCircleFilled className="checkedIcon" style={{fontSize: 90, color: "#198754" }} />
      </Flex>

      <Space
        direction="vertical"
        size="middle"
        align="center"
        style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Button onClick={handleDownloadPdf} type="primary">Download CV</Button>
        <div style={{ display: "none" }}>
          <Template1 ref={printRef} />
        </div>
      </Space>

      <Navigation handleNext={() => formik.handleSubmit()} isLastStep={true} />
    </Content>
  );
};
