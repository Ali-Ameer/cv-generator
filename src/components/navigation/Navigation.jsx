import { Button, Row } from "antd";
import { useRecoilState } from "recoil";
import { currentStepState } from "../../atom/navigationState";

export default function Navigation({
  handleNext,
  isLastStep,
}) {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);

  return (
    <Row style={{ marginTop: "20px", gap: 16 }} justify="end">
      <Button
        disabled={currentStep === 0}
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        Previous
      </Button>

      <Button
        type="primary"
        disabled={isLastStep ? isLastStep : false}
        onClick={() => handleNext()}
      >
        Next
      </Button>
    </Row>
  );
}
