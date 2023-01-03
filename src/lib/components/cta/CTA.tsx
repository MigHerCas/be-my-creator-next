import { Link } from "@chakra-ui/react";
import type { StyleProps } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC, PropsWithChildren } from "react";
import { ArrowRight, ArrowUpRight, PlusCircle } from "react-feather";

// Styles (needed for hover icon effect)
import styles from "./styles.module.css";

type CTAIcon = "plus" | "arrow" | "arrowExternal";

interface Props {
  href: string;
  variant: "primary" | "secondary";
  isSmall?: boolean;
  customStyles?: StyleProps;
  icon?: CTAIcon;
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

const CTA: FC<PropsWithChildren<Props>> = ({
  href,
  variant,
  icon,
  isSmall = false,
  customStyles,
  children,
}) => {
  const colorConfig =
    variant === "primary"
      ? {
          color: "white",
          backgroundColor: "#262626",
        }
      : {
          color: "gray.800",
          backgroundColor: "gray.200",
        };

  const groupedStyles: StyleProps = {
    ...baseStyles(isSmall),
    ...colorConfig,
    ...customStyles,
  };

  const iconMapper = {
    arrow: <ArrowRight className={styles.arrow} />,
    arrowExternal: <ArrowUpRight className={styles.arrowExternal} />,
    plus: <PlusCircle className={styles.plus} />,
  } as Record<CTAIcon, JSX.Element>;

  return (
    <Link
      as={NextLink}
      href={href}
      className={styles.link}
      {...groupedStyles}
      _hover={{ textDecoration: "none" }}
    >
      {children}
      {icon ? iconMapper[icon] : null}
    </Link>
  );
};

export default CTA;
