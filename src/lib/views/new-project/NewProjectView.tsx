import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Layout from "@layout/index";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import FormHeader from "./modules/FormHeader";
import FormInputGroup from "./modules/FormInputGroup";
import FormRadioGroupStack from "./modules/FormRadioGroupStack";
import FormStepControl from "./modules/FormStepControls";
import FormStepIndicator from "./modules/FormStepIndicator";
import FormStepWrapper from "./modules/FormStepWrapper";

type Inputs = {
  email: string;
  brandName: string;
  platforms: ["Instagram", "Tiktok", "Twitter"];
  teamSize: ["1-5", "10-20", "+20"];
};

const NewProjectView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const brandNameField = register("email", { required: true });
  const emailField = register("brandName");

  const formStepsContent = [
    {
      step: 1,
      component: (
        <FormRadioGroupStack
          key="platform"
          name="platform"
          options={["Instagram", "Tiktok", "Twitter"]}
          defaultValue="tiktok"
          label="Platform"
          onChange={console.log}
        />
      ),
    },
    {
      step: 2,
      component: (
        <FormRadioGroupStack
          key="team"
          name="team"
          options={["1-5", "10-20", "+20"]}
          defaultValue="1-5"
          label="Team"
          onChange={console.log}
        />
      ),
    },
    {
      step: 3,
      component: (
        <>
          <FormInputGroup
            label="Let's start with the name of your brand"
            type="text"
            placeholder="Your name brand"
            registerCallback={brandNameField}
          />
          {errors.email && <span>This field is required</span>}
        </>
      ),
    },
    {
      step: 4,
      component: (
        <FormInputGroup
          label="Which email could we use to contact you?"
          type="email"
          placeholder="name@example.com"
          helperText="We'll never share your email."
          registerCallback={emailField}
        />
      ),
    },
  ];

  return (
    <>
      <NextSeo title="New project" />
      <Flex
        as="form"
        className="glassmorphic--light"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        alignItems="center"
        gap={["30px", "40px", "50px", "60px"]}
        borderRadius={[0, null, "20px 20px 0 0"]}
        mx={["-30px", null, "initial"]}
        p={["30px", null, "50px", "60px"]}
        minH="calc(100vh - 180px)"
      >
        {/* Header (title and description) */}
        <FormHeader />

        {/* Steps indicator (green bar) */}
        <FormStepIndicator
          numberOfSteps={formStepsContent.length}
          currentStep={currentStep}
        />

        {/* Form content (each step) */}
        <Box pos="relative" w="full">
          {formStepsContent.map(({ step, component }) => (
            <FormStepWrapper
              key={`form-step-${step}`}
              isActive={currentStep === step}
            >
              {component}
            </FormStepWrapper>
          ))}
        </Box>

        {/* Form controls (prev and next button) */}
        <FormStepControl
          setCurrentStep={setCurrentStep}
          numberOfTotalSteps={formStepsContent.length}
        />
      </Flex>
    </>
  );
};

NewProjectView.getLayout = function getLayout(page: ReactElement) {
  return <Layout hideBlobsOnMobile>{page}</Layout>;
};

export default NewProjectView;
