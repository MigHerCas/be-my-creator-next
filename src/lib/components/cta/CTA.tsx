import { Link, useColorMode } from "@chakra-ui/react";
import type { StyleProps } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC, MouseEventHandler, PropsWithChildren } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight, PlusCircle } from "react-feather";

// Styles (needed for hover icon effect)
import styles from "./styles.module.css";

type IconName = "plus" | "arrow" | "arrowExternal" | "arrowLeft";
type Variant = "primary" | "secondary";
interface Props {
  href: string;
  variant: Variant;
  isSmall?: boolean;
  showDot?: boolean;
  icon?: IconName;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  customStyles?: StyleProps;
}

const baseStyles: (isSmall: boolean) => StyleProps = (isSmall) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isSmall ? "1rem" : "1.35rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    padding: isSmall ? "0.875rem 1rem" : "1.25rem 1.75rem",
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
  onClick,
  showDot = false,
  children,
  customStyles,
}) => {
  const { colorMode } = useColorMode();
  const colorConfig = {
    primary:
      colorMode === "light"
        ? {
            color: "white",
            backgroundColor: "#272727",
          }
        : { color: "white", backgroundColor: "#1c1c1c" },
    secondary:
      colorMode === "light"
        ? {
            color: "gray.800",
            backgroundColor: "gray.200",
          }
        : { color: "gray.800", backgroundColor: "gray.200" },
  } as Record<Variant, { color: string; backgroundColor: string }>;

  const groupedStyles: StyleProps = {
    ...baseStyles(isSmall),
    ...colorConfig[variant],
    ...customStyles,
  };

  const iconMapper = {
    arrow: <ArrowRight className={styles.arrow} />,
    arrowExternal: <ArrowUpRight className={styles.arrowExternal} />,
    plus: <PlusCircle className={styles.plus} />,
    arrowLeft: <ArrowLeft className={styles.arrowLeft} />,
  } as Record<IconName, JSX.Element>;

  return (
    <Link
      as={NextLink}
      href={href}
      className={styles.link}
      {...groupedStyles}
      onClick={onClick}
      _hover={{ textDecoration: "none" }}
      prefetch={false}
    >
      {showDot ? <span className={styles.greenDot} /> : null}
      {children}
      {icon ? iconMapper[icon] : null}
    </Link>
  );
};

export default CTA;
