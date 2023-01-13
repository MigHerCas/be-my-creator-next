import { Box, Button } from "@chakra-ui/react";
import type { Dispatch, FC, SetStateAction } from "react";
import type { UseFormTrigger } from "react-hook-form";

import type { FormFields } from "../NewProjectView";

interface Props {
  currentStep: { id: keyof FormFields; step: number };
  setCurrentStep: Dispatch<SetStateAction<number>>;
  numberOfSteps: number;
  trigger: UseFormTrigger<FormFields>;
}

const FormStepControl: FC<Props> = ({
  currentStep,
  setCurrentStep,
  numberOfSteps,
  trigger,
}) => {
  return (
    <Box mt="auto">
      <Button
        size="lg"
        mr="10px"
        isDisabled={currentStep.step === 1}
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
        isDisabled={currentStep.step === numberOfSteps}
        onClick={async () => {
          const isCorrect = await trigger(currentStep.id);
          if (!isCorrect) return;

          setCurrentStep((prev) => {
            if (prev < numberOfSteps) {
              return prev + 1;
            }
            return prev;
          });
        }}
      >
        Next
      </Button>

      <Button
        size="lg"
        ml="10px"
        type="submit"
        isDisabled={currentStep.step < numberOfSteps}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormStepControl;
