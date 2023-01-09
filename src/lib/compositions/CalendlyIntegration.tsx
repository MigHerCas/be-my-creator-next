import type { FC } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyIntegration: FC = () => {
  return (
    <InlineWidget
      url="https://calendly.com/bemycreator/30min?background_color=272727&text_color=ffffff&primary_color=00c4a2"
      styles={{
        width: "100%",
        height: "800px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
      prefill={{
        email: "test@test.com",
        firstName: "Jon",
        lastName: "Snow",
        name: "Jon Snow",
        date: new Date(Date.now() + 86400000),
      }}
    />
  );
};

export default CalendlyIntegration;
