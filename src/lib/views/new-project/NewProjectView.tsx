import { Box, Flex, useColorMode } from "@chakra-ui/react";
import type { FormFields } from "@database/Store";
import { insertLead, SUPABASE_KEY, SUPABASE_URL } from "@database/Store";
import { themeColors } from "@helpers/ui-values";
import Layout from "@layout/Layout";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { use100vh } from "react-div-100vh";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import FormCheckboxGroup from "./modules/FormCheckboxGroup";
import FormHeader from "./modules/FormHeader";
import FormInputGroup from "./modules/FormInputGroup";
import FormRadioGroup from "./modules/FormRadioGroup";
import FormStepControl from "./modules/FormStepControls";
import FormStepIndicator from "./modules/FormStepIndicator";

const SUCCESS_PATH = "/success";

const NewProjectView: NextPageWithLayout = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentStep, setCurrentStep] = useState(1);
  const height = use100vh();

  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  const defaultValues = {
    name: "",
    email: "",
    test: [],
    platforms: "Instagram",
    teamSize: "1-5",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as Record<keyof FormFields, any>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    trigger,
    clearErrors,
  } = useForm<FormFields>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    nProgress.start();
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    await insertLead(supabase, {
      name: data.name,
      email: data.email,
      config: {
        test: data.test,
        platforms: data.platforms,
        teamSize: data.teamSize,
      },
    });

    router.push(SUCCESS_PATH);
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
          defaultValue={defaultValues.platforms}
          errorMessage={errors.platforms?.message}
          options={["Instagram", "Tiktok", "Twitter"]}
        />
      ),
    },
    {
      id: "test",
      step: 2,
      component: (
        <FormCheckboxGroup
          key="test"
          name="test"
          label="Test"
          defaultValue={defaultValues.test}
          control={control}
          setValue={setValue}
          errorMessage={errors.test?.message}
          options={["1", "2", "3", "4", "5"]}
        />
      ),
    },
    {
      id: "teamSize",
      step: 3,
      component: (
        <FormRadioGroup
          key="teamSize"
          name="teamSize"
          label="Team size"
          control={control}
          defaultValue={defaultValues.teamSize}
          errorMessage={errors.teamSize?.message}
          options={["1-5", "10-20", "+20"]}
        />
      ),
    },
    {
      id: "name",
      step: 4,
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
      step: 5,
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
  ] as Array<{
    id: keyof FormFields;
    step: number;
    component: JSX.Element;
  }>;

  return (
    <>
      <NextSeo title="New project" />

      <Flex
        as="form"
        pos="relative"
        top="50%"
        transform="translateY(-50%)"
        bgColor={themeColors.darkGrey}
        border={["none", null, null, null, `20px solid ${themeColors.black}`]}
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        alignItems="center"
        gap={["30px", "40px", "50px", "60px"]}
        mx={["-30px", null, null, null, "initial"]}
        my={[0, null, null, null, "auto"]}
        p={["30px", null, "50px", "60px"]}
        minHeight={[height || "100vh", null, null, null, "0"]}
        borderRadius={[0, null, null, null, "45px"]}
      >
        {/* Header (title and description) */}
        <FormHeader />
        {/* Steps indicator (green bar) */}
        <FormStepIndicator
          numberOfSteps={formStepsContent.length}
          currentStep={currentStep}
        />
        {/* Form step content */}
        <Box pos="relative" w="full">
          <Flex minHeight={["none", null, "160px"]}>
            {formStepsContent[currentStep - 1].component}
          </Flex>
        </Box>
        {/* Form controls (prev and next button) */}
        <FormStepControl
          currentStep={{
            id: formStepsContent[currentStep - 1].id,
            step: currentStep,
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
    <Layout showOnlyMain fullHeightMain>
      {page}
    </Layout>
  );
};

export default NewProjectView;
