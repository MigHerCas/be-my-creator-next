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

  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  const defaultValues = {
    name: "",
    email: "",
    whitelistedAds: "Yes",
    budget: "$500 - $2000",
    contentType: [],
  } as FormFields;

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

    const { name, email, ...config } = data;
    await insertLead(supabase, {
      name,
      email,
      config,
    });

    router.push(SUCCESS_PATH);
  };

  const formStepsContent = [
    {
      id: "contentType",
      step: 1,
      component: (
        <FormCheckboxGroup
          key="contentType"
          name="contentType"
          setValue={setValue}
          label="What kind of content are you looking for?"
          control={control}
          defaultValue={defaultValues.contentType}
          errorMessage={errors.contentType?.message}
          options={["Explainer", "Testimonial", "Unboxing", "Other"]}
        />
      ),
    },
    {
      id: "whitelistedAds",
      step: 2,
      component: (
        <FormRadioGroup
          key="whitelistedAds"
          name="whitelistedAds"
          label="Are you interested on Whitelisted Ads?"
          description="Creator Licensing (UGC Whitelisting) is the process of a creator allowing a brand to run ads from their account. It appears as if the content is coming directly from the creator, which provides greater social proof and authenticity."
          control={control}
          defaultValue={defaultValues.whitelistedAds}
          errorMessage={errors.whitelistedAds?.message}
          options={["Yes", "No"]}
        />
      ),
    },
    {
      id: "budget",
      step: 3,
      component: (
        <FormRadioGroup
          key="budget"
          name="budget"
          label="What's your budget?"
          control={control}
          defaultValue={defaultValues.budget}
          errorMessage={errors.budget?.message}
          options={["$200 - $500", "$500 - $2000", "I don't know yet"]}
        />
      ),
    },
    {
      id: "name",
      step: 4,
      component: (
        <FormInputGroup
          label="What's the name of your brand"
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

  const currentStepContent = formStepsContent[currentStep - 1];
  return (
    <>
      <NextSeo title="Create your first campaign | BeMyCreator" />

      <Flex
        as="form"
        pos="relative"
        top={[0, null, null, null, "50%"]}
        transform={["none", null, null, null, "translateY(-50%)"]}
        bgColor={themeColors.darkGrey}
        border={["none", null, null, null, `20px solid ${themeColors.black}`]}
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        alignItems="center"
        gap={["30px", "40px", "50px", "60px"]}
        mx={["-30px", null, null, null, "initial"]}
        my={[0, null, null, null, "auto"]}
        p={["30px", null, "50px", "60px"]}
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
            {currentStepContent.component}
          </Flex>
        </Box>
        {/* Form controls (prev and next button) */}
        <FormStepControl
          currentStep={{
            id: currentStepContent.id,
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
