import { Card, Col, Divider, Row, Steps } from "antd";
import { Step1 } from "../step1/Step1";
import { Step2 } from "../step2/Step2";
import { useRecoilState } from "recoil";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useEffect } from "react";
import { Step3 } from "../step3/Step3";
import { Step4 } from "../step4/Step4";
import { Step5 } from "../step5/Step5";
import { Step6 } from "../step6/Step6";
import { Step7 } from "../step7/Step7";
import { Step8 } from "../step8/Step8";

const { Step } = Steps;

const HomePage = () => {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [formData, setFormData] = useRecoilState(formState);

  const stepsList = [
    {
      id: 1,
      name: "personalInfo",
      title: "Personal information",
      component: <Step1 />,
    },
    {
      id: 2,
      name: "experienceInfo",
      title: "Experience info",
      component: <Step2 />,
    },
    {
      id: 3,
      name: "projectInfo",
      title: "Project Info",
      component: <Step3 />,
    },
    {
      id: 4,
      name: "educationInfo",
      title: "Education Info",
      component: <Step4 />,
    },
    {
      id: 5,
      name: "Miscellaneous",
      title: "Miscellaneous",
      component: <Step5 />,
    },
    {
      id: 6,
      name: "Color",
      title: "Color",
      component: <Step6 />,
    },
    {
      id: 7,
      name: "Templates",
      title: "Templates",
      component: <Step7 />,
    },

    {
      id: 8,
      name: "Finish",
      title: "Finish",
      component: <Step8 />,
    },
  ];

  useEffect(() => {
    console.log("formData ", formData);
  }, [formData]);

  return (
    <div>
      <div className="titleSection">
        <h2>Enter Your Information</h2>
      </div>
      <Card align="start" title={stepsList[currentStep]?.title}>
        <Col xs={0} lg={24}>

        <Steps size="small" current={currentStep} style={{ marginTop: "12px" }} className="steps">
          {stepsList.map((step, index) => (
            <Step
            key={step.id}
            title={step.title}
            active={currentStep === index}
            />
          ))}
        </Steps>
          <Divider />
          </Col>

        <div style={{ marginTop: "20px" }}>

          {/* Render the component for the current step */}
          {stepsList[currentStep].component}
        </div>
      </Card>
    </div>
  );
};
export default HomePage;
