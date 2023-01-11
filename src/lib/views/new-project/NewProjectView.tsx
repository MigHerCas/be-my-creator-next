import { Box, Button, Flex, Heading, useColorMode } from "@chakra-ui/react";
import CalendlyIntegration from "@compositions/CalendlyIntegration";
import FormSteps from "@compositions/FormSteps";
import Layout from "@layout/index";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import type { ReactElement } from "react";
import { useEffect } from "react";
import { Tool } from "react-feather";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import InputGroup from "./modules/InputGroup";
import RadioGroupStack from "./modules/RadioGroupStack";

type Inputs = {
  email: string;
  brandName: string;
  platforms: ["Instagram", "Tiktok", "Twitter"];
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
        className="glassmorphic--light"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        alignItems="center"
        gap={["30px", "40px", "50px", "60px"]}
        borderRadius={[0, null, "20px 20px 0 0"]}
        mx={["-30px", null, "initial"]}
        p={["30px", null, "50px", "60px"]}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          gap={[4, null, 6, 8]}
          wrap="wrap"
        >
          <Box
            p={[3, null, null, 5]}
            display="inline-block"
            bgColor="#272727"
            borderRadius="full"
          >
            <Tool height="30px" width="30px" stroke="#BCE500" />
          </Box>
          <Heading size="lg" textAlign="center" mb={0}>
            New project!
          </Heading>
        </Flex>

        <FormSteps numberOfSteps={4} currentStep={3} />

        <RadioGroupStack
          key="platform"
          name="platform"
          options={["Instagram", "Tiktok", "Twitter"]}
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
  return <Layout hideBlobsOnMobile>{page}</Layout>;
};

export default NewProjectView;
