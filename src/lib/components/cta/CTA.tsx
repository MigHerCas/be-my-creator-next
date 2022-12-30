import { Link } from "@chakra-ui/react";
import type { StyleProps } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC, PropsWithChildren } from "react";
import { ArrowRight, ArrowUpRight } from "react-feather";

// Styles (needed for hover icon effect)
import styles from "./styles.module.css";

interface Props {
  href: string;
  isExternal?: boolean;
  isSmall?: boolean;
  customStyles?: StyleProps;
  showArrow?: boolean;
}

const CTA: FC<PropsWithChildren<Props>> = ({
  href,
  isExternal,
  isSmall = false,
  customStyles,
  showArrow = true,
  children,
}) => {
  const baseStyles: StyleProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isSmall ? "1rem" : "1.25rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    padding: "1rem 1.5rem",
    borderRadius: "12px",
    width: "fit-content",
    gap: "8px",
    color: "#fff",
    boxShadow: "rgb(0 0 0 / 40%) 0px 10px 50px -12px",
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
