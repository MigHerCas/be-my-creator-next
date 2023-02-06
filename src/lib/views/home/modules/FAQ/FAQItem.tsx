import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import type { FC } from "react";
import { Minus, Plus } from "react-feather";

interface Props {
  title: string;
  content: React.ReactNode;
}

const FAQItem: FC<Props> = ({ title, content }) => {
  return (
    <AccordionItem
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.200"
      borderRadius="20px"
      backgroundColor="white"
      cursor="pointer"
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              _hover={{ bgColor: "inherit" }}
              p="30px"
              as="div"
              gap="20px"
              flexWrap="nowrap"
            >
              <Heading
                size="sm"
                as="h4"
                flex="1"
                textAlign="left"
                fontSize="1.3125rem"
                mb={0}
              >
                {title}
              </Heading>

              <IconButton
                boxSize="40px"
                aria-label="theme toggle"
                bgColor="gray.800"
                borderRadius="full"
                _hover={{ bgColor: "gray.800" }}
                _active={{ bgColor: "gray.800" }}
              >
                {isExpanded ? (
                  <Minus stroke="white" />
                ) : (
                  <Plus stroke="white" />
                )}
              </IconButton>
            </AccordionButton>
          </h2>
          <AccordionPanel px="30px" pb="30px" pt={0} fontSize="1.125rem">
            {content}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default FAQItem;
