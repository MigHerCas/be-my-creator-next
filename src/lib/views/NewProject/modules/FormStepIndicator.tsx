import { Box, Flex, Heading } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";

interface Props {
  /**
   * @property currentStep
   * Starts from 1
   * Can't be > than @property numberOfSteps
   */
  currentStep: number;
  numberOfSteps: number;
}

const FormStepIndicator = ({ currentStep, numberOfSteps }: Props) => {
  const activeColor = themeColors.pistache;
  const defaultColor = themeColors.black;
  const isStepActive = (stepIndex: number) => {
    return currentStep >= stepIndex + 1;
  };

  if (currentStep > numberOfSteps)
    throw new Error(
      "currentStep can't be greater than the total amount of steps"
    );
  return (
    <Flex w="full" justifyContent="flex-start" gap={2} flexWrap="wrap">
      <Heading size="xs" flexBasis="100%" textAlign="center">
        {`Step ${currentStep} of ${numberOfSteps}`}
      </Heading>
      {Array.from({ length: numberOfSteps }, (_, i) => {
        return {
          id: `step-${i}`,
        };
      }).map(({ id }, index) => (
        <Box
          key={id}
          height="5px"
          bgColor={isStepActive(index) ? activeColor : defaultColor}
          flex={1}
        />
      ))}
    </Flex>
  );
};

export default FormStepIndicator;
