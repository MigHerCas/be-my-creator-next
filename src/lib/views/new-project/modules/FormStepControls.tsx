import { Box, Button } from "@chakra-ui/react";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  numberOfSteps: number;
}

const FormStepControl: FC<Props> = ({
  currentStep,
  setCurrentStep,
  numberOfSteps,
}) => {
  return (
    <Box mt="auto">
      <Button
        size="lg"
        mr="10px"
        isDisabled={currentStep === 1}
        onClick={() =>
          setCurrentStep((prev) => {
            if (prev > 1) {
              return prev - 1;
            }
            return prev;
          })
        }
      >
        Prev
      </Button>

      <Button
        size="lg"
        isDisabled={currentStep === numberOfSteps}
        onClick={() =>
          setCurrentStep((prev) => {
            if (prev < numberOfSteps) {
              return prev + 1;
            }
            return prev;
          })
        }
      >
        Next
      </Button>

      <Button
        size="lg"
        ml="10px"
        type="submit"
        isDisabled={currentStep < numberOfSteps}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormStepControl;
