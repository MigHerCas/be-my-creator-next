import { Button, Flex, Heading, useColorMode } from "@chakra-ui/react";
import CalendlyIntegration from "@compositions/CalendlyIntegration";
import Layout from "@layout/index";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactElement } from "react";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import InputGroup from "./modules/InputGroup";
import RadioGroupStack from "./modules/RadioGroupStack";

type Inputs = {
  email: string;
  brandName: string;
  platforms: ["instagram", "tiktok", "twitter"];
  teamSize: ["1-5", "10-20", "+20"];
};

const NewProjectView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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

  return (
    <>
      <NextSeo title="New project" />
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        alignItems="center"
        gap="60px"
      >
        <Heading size="lg" textAlign="center">
          New project!
        </Heading>

        <RadioGroupStack
          key="platform"
          name="platform"
          options={["instagram", "tiktok", "twitter"]}
          defaultValue="tiktok"
          label="Platform"
          onChange={console.log}
        />

        <RadioGroupStack
          key="team"
          name="team"
          options={["1-5", "10-20", "+20"]}
          defaultValue="1-5"
          label="Team"
          onChange={console.log}
        />

        <InputGroup
          label="Let's start with the name of your brand"
          type="text"
          placeholder="Your name brand"
          registerCallback={brandNameField}
        />
        {errors.email && <span>This field is required</span>}

        <InputGroup
          label="Which email could we use to contact you?"
          type="email"
          placeholder="name@example.com"
          helperText="We'll never share your email."
          registerCallback={emailField}
        />

        <Button type="submit" size="lg">
          Submit
        </Button>
        <CalendlyIntegration />
      </Flex>
    </>
  );
};

NewProjectView.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default NewProjectView;
