import { Link } from "@chakra-ui/react";
import type { StyleProps } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import { ArrowRight, ArrowUpRight } from "react-feather";

// Styles (needed for hover icon effect)
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  customStyles?: StyleProps;
  showArrow?: boolean;
}

const CTA: FC<Props> = ({
  children,
  href,
  isExternal,
  customStyles,
  showArrow = true,
}) => {
  const baseStyles: StyleProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    padding: "1rem 1.5rem",
    borderRadius: "4px",
    width: "fit-content",
    gap: "8px",
    color: "#fff",
    // TODO: align with theme colors
    backgroundColor: "#00C4A2",
    ...customStyles,
  };

  const arrowIcon = isExternal ? (
    <ArrowUpRight className={styles.iconExternal} />
  ) : (
    <ArrowRight className={styles.icon} />
  );

  return (
    <Link
      as={NextLink}
      href={href}
      className={styles.link}
      {...baseStyles}
      _hover={{ textDecoration: "none" }}
    >
      {children}
      {showArrow ? arrowIcon : null}
    </Link>
  );
};

export default CTA;
