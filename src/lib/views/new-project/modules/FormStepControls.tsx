import { Box, Button } from "@chakra-ui/react";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  numberOfTotalSteps: number;
}

const FormStepControl: FC<Props> = ({ setCurrentStep, numberOfTotalSteps }) => {
  return (
    <Box mt="auto">
      <Button
        size="lg"
        mr="10px"
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
        onClick={() =>
          setCurrentStep((prev) => {
            if (prev < numberOfTotalSteps) {
              return prev + 1;
            }
            return prev;
          })
        }
      >
        Next
      </Button>
    </Box>
  );
};

export default FormStepControl;
