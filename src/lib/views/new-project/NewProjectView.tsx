import { Box, Flex, useColorMode, useToast } from "@chakra-ui/react";
import Layout from "@layout/index";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import FormHeader from "./modules/FormHeader";
import FormInputGroup from "./modules/FormInputGroup";
import FormRadioGroup from "./modules/FormRadioGroup";
import FormStepControl from "./modules/FormStepControls";
import FormStepIndicator from "./modules/FormStepIndicator";
import FormStepWrapper from "./modules/FormStepWrapper";

export type FormFields = {
  name: string;
  email: string;
  platforms: "Instagram" | "Tiktok" | "Twitter";
  teamSize: "1-5" | "10-20" | "+20";
};

const NewProjectView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentStep, setCurrentStep] = useState(1);
  const toast = useToast();

  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    trigger,
    clearErrors,
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
      platforms: "Instagram",
      teamSize: "1-5",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    toast({
      title: `Great! We have received your submission`,
      description: `We'll send a confirmation email to ${data.email}`,
      variant: "customSuccess",
      status: "success",
      position: "bottom-right",
      duration: 20000,
    });
    console.log(data);
  };

  const formStepsContent = [
    {
      id: "platforms",
      step: 1,
      component: (
        <FormRadioGroup
          key="platforms"
          name="platforms"
          label="Platforms"
          control={control}
          defaultValue="Instagram"
          options={["Instagram", "Tiktok", "Twitter"]}
        />
      ),
    },
    {
      id: "teamSize",
      step: 2,
      component: (
        <FormRadioGroup
          key="teamSize"
          name="teamSize"
          label="Team size"
          control={control}
          defaultValue="1-5"
          options={["1-5", "10-20", "+20"]}
        />
      ),
    },
    {
      id: "name",
      step: 3,
      component: (
        <FormInputGroup
          label="Let's start with the name of your brand"
          type="text"
          placeholder="Your name brand"
          errorMessage={errors.name?.message}
          registerCallback={register("name", {
            required:
              "Please add a name. If you do not have a brand, feel free to add your own name instead",
          })}
          clearErrorCallback={() => clearErrors("name")}
        />
      ),
    },
    {
      id: "email",
      step: 4,
      component: (
        <FormInputGroup
          label="Which email could we use to contact you?"
          type="email"
          placeholder="name@example.com"
          errorMessage={errors.email?.message}
          helperText="We'll never share your email."
          registerCallback={register("email", {
            required: "We need an email to contact you",
          })}
          clearErrorCallback={() => clearErrors("email")}
        />
      ),
    },
  ] as Array<{ id: keyof FormFields; step: number; component: JSX.Element }>;

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
          currentStep={{
            id: formStepsContent[currentStep - 1].id,
            step: currentStep - 1,
          }}
          setCurrentStep={setCurrentStep}
          numberOfSteps={formStepsContent.length}
          trigger={trigger}
        />
      </Flex>
    </>
  );
};

NewProjectView.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      mainCTA={{
        href: "/new-call",
        text: "Book a call",
      }}
      hideHeaderLinks
      hideBlobsOnMobile
    >
      {page}
    </Layout>
  );
};

export default NewProjectView;
