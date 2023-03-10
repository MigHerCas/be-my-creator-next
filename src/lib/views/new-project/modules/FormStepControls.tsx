import { Button, Flex } from "@chakra-ui/react";
import type { FormFields } from "@database/Store";
import { themeColors } from "@helpers/ui-values";
import type { Dispatch, FC, SetStateAction } from "react";
import { ArrowLeft, ArrowRight, Upload } from "react-feather";
import type { UseFormTrigger } from "react-hook-form";

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
    <Flex
      justifyContent="center"
      gap={["10px", "20px"]}
      flexWrap="wrap"
      alignItems="stretch"
    >
      {/* Previous button */}
      <Button
        size="lg"
        isDisabled={currentStep.step === 1}
        onClick={() => {
          setCurrentStep((prev) => {
            if (prev > 1) {
              return prev - 1;
            }
            return prev;
          });
        }}
      >
        <ArrowLeft style={{ marginRight: "8px" }} /> Prev
      </Button>

      {/* Submit button */}
      {currentStep.step >= numberOfSteps ? (
        <Button
          size="lg"
          type="submit"
          bgColor={themeColors.primary}
          _hover={{
            backgroundColor: themeColors.primary,
          }}
        >
          Submit
          <Upload style={{ marginLeft: "8px" }} />
        </Button>
      ) : (
        // Next button
        <Button
          size="lg"
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
          <ArrowRight style={{ marginLeft: "8px" }} />
        </Button>
      )}
    </Flex>
  );
};

export default FormStepControl;
