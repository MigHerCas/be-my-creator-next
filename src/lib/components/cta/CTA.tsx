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
  isLight?: boolean;
  customStyles?: StyleProps;
  showArrow?: boolean;
}

const baseStyles: (isSmall: boolean) => StyleProps = (isSmall) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isSmall ? "1rem" : "1.25rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    padding: isSmall ? "0.875rem 1rem" : "1rem 1.5rem",
    borderRadius: "12px",
    width: "fit-content",
    gap: "8px",
  };
};

export const CTA: FC<PropsWithChildren<Props>> = ({
  href,
  isExternal,
  isSmall = false,
  isLight = false,
  customStyles,
  showArrow = true,
  children,
}) => {
  const groupedStyles: StyleProps = {
    ...baseStyles(isSmall),
    color: isLight ? "gray.800" : "white",
    backgroundColor: isLight ? "white" : "#262626",
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
      {...groupedStyles}
      _hover={{ textDecoration: "none" }}
    >
      {children}
      {showArrow ? arrowIcon : null}
    </Link>
  );
};

export const SecondaryCTA: FC<PropsWithChildren<Props>> = ({
  href,
  isExternal,
  isSmall = false,
  customStyles,
  showArrow = true,
  children,
}) => {
  const groupedStyles: StyleProps = {
    ...baseStyles(isSmall),
    color: "gray.800",
    backgroundColor: "gray.200",
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
      {...groupedStyles}
      _hover={{ textDecoration: "none" }}
    >
      {children}
      {showArrow ? arrowIcon : null}
    </Link>
  );
};
