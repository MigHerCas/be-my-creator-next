import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { HTMLChakraProps } from "@chakra-ui/react";

export type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

export default MotionBox;
