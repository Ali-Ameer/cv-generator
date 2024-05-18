import { Card, Divider, Steps } from "antd";
import { Step1 } from "../step1/Step1";
import { Step2 } from "../step2/Step2";
import { useRecoilState } from "recoil";
import { currentStepState } from "../../atom/navigationState";
import { formState } from "../../atom/formstate";
import { useEffect } from "react";
import { Step3 } from "../step3/Step3";

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
    },
    {
      id: 5,
      name: "skills",
      title: "Skills",
    },
    // {
    //   id: 6,
    //   name: "miscellaneous",
    //   title: "Miscellaneous",
    // },
  ];
  // console.log(currentStep);

  useEffect(() => {
    console.log("formData ", formData);
  }, [formData]);

  return (
    <div>
      <div className="titleSection">
        <h2>Enter Your Information</h2>
      </div>
      <Card align="start" title={stepsList[currentStep]?.title}>
        <Steps size="small" current={currentStep} style={{ marginTop: "12px" }}>
          {stepsList.map((step, index) => (
            <Step
              key={step.id}
              title={step.title}
              active={currentStep === index}
            />
          ))}
        </Steps>

        <div style={{ marginTop: "20px" }}>
          <Divider />

          {/* Render the component for the current step */}
          {stepsList[currentStep].component}
        </div>
      </Card>
    </div>
  );
};
export default HomePage;
