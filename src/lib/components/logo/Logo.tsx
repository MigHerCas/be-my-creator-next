import { Link, useColorModeValue } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";
import NextLink from "next/link";
import type { FC, MouseEventHandler } from "react";

interface Props {
  height?: string;
  onClickCallback?: MouseEventHandler<HTMLAnchorElement>;
}

const Logo: FC<Props> = ({ height = "90", onClickCallback = () => {} }) => {
  const fillColor = useColorModeValue(themeColors.darkGrey, "white");
  return (
    <Link href="/" as={NextLink} onClick={onClickCallback}>
      <svg
        fill="none"
        height={height}
        viewBox="0 0 226 39"
        width="226"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m19.4635 0c10.75 0 19.4584 8.70833 19.4584 19.4583v19.4636h-19.4584c-10.74996 0-19.4635-8.7136-19.4635-19.4636 0-10.74997 8.71354-19.4583 19.4635-19.4583z"
          fill={themeColors.primary}
        />
        <path
          d="m20.512 30v-16.8h7.896c1.136 0 2.128.192 2.976.576s1.512.928 1.992 1.632c.48.688.72 1.488.72 2.4 0 .736-.192 1.416-.576 2.04-.368.608-.872 1.104-1.512 1.488.816.384 1.464.904 1.944 1.56s.72 1.4.72 2.232c0 .96-.248 1.808-.744 2.544-.48.736-1.168 1.312-2.064 1.728-.88.4-1.904.6-3.072.6zm3.48-9.936h4.2c.752 0 1.344-.176 1.776-.528.448-.368.672-.856.672-1.464s-.224-1.088-.672-1.44c-.432-.368-1.024-.552-1.776-.552h-4.2zm0 7.056h4.536c.8 0 1.44-.192 1.92-.576.48-.4.72-.928.72-1.584 0-.672-.24-1.2-.72-1.584-.48-.4-1.12-.6-1.92-.6h-4.536zm14.1138 2.88v-16.8h12.912v3.024h-9.432v3.84h6.216v2.928h-6.216v3.984h9.528v3.024zm22.2968 0v-16.8h4.464l4.608 9.072 4.608-9.072h4.464v16.8h-3.288v-12.36l-5.832 11.16-5.808-11.208v12.408zm27.3721 0v-6.432l-6.864-10.368h4.008l4.704 7.296 4.728-7.296h3.792l-6.888 10.392v6.408z"
          fill={fillColor}
        />
        <path
          d="m114.62 30.24c-1.248 0-2.416-.216-3.504-.648-1.088-.448-2.04-1.064-2.856-1.848-.8-.784-1.432-1.696-1.896-2.736-.448-1.056-.672-2.192-.672-3.408 0-1.232.224-2.368.672-3.408.464-1.056 1.104-1.976 1.92-2.76s1.76-1.392 2.832-1.824c1.088-.448 2.256-.672 3.504-.672.928 0 1.824.128 2.688.384s1.664.616 2.4 1.08c.752.464 1.392 1.024 1.92 1.68l-2.352 2.328c-.608-.752-1.312-1.32-2.112-1.704-.784-.384-1.632-.576-2.544-.576-.752 0-1.456.144-2.112.432-.656.272-1.224.656-1.704 1.152-.48.48-.856 1.056-1.128 1.728-.272.656-.408 1.376-.408 2.16 0 .768.136 1.488.408 2.16.272.656.656 1.232 1.152 1.728.496.48 1.072.856 1.728 1.128.672.272 1.4.408 2.184.408.88 0 1.704-.184 2.472-.552s1.448-.896 2.04-1.584l2.28 2.256c-.528.64-1.16 1.192-1.896 1.656s-1.536.824-2.4 1.08c-.848.24-1.72.36-2.616.36zm9.947-.24v-16.8h8.208c1.136 0 2.136.224 3 .672.88.432 1.56 1.04 2.04 1.824.496.784.744 1.688.744 2.712 0 1.072-.296 2.016-.888 2.832s-1.384 1.424-2.376 1.824l3.72 6.936h-3.888l-3.288-6.432h-3.792v6.432zm3.48-9.288h4.416c.784 0 1.408-.208 1.872-.624.48-.416.72-.96.72-1.632s-.24-1.216-.72-1.632c-.464-.416-1.088-.624-1.872-.624h-4.416zm13.809 9.288v-16.8h12.912v3.024h-9.432v3.84h6.216v2.928h-6.216v3.984h9.528v3.024zm15.118 0 6.912-16.8h4.008l6.84 16.8h-3.768l-1.704-4.416h-6.936l-1.728 4.416zm6.432-7.2h4.8l-2.4-6.192zm15.268 7.2v-13.728h-5.664v-3.072h14.784v3.072h-5.64v13.728zm19.273.264c-1.248 0-2.408-.216-3.48-.648-1.072-.448-2.016-1.064-2.832-1.848-.8-.8-1.432-1.72-1.896-2.76-.448-1.056-.672-2.192-.672-3.408s.224-2.344.672-3.384c.464-1.056 1.096-1.976 1.896-2.76.816-.8 1.76-1.416 2.832-1.848 1.072-.448 2.232-.672 3.48-.672s2.408.224 3.48.672c1.088.432 2.032 1.048 2.832 1.848.816.784 1.448 1.704 1.896 2.76.448 1.04.672 2.168.672 3.384s-.224 2.352-.672 3.408c-.448 1.04-1.08 1.96-1.896 2.76-.8.784-1.744 1.4-2.832 1.848-1.072.432-2.232.648-3.48.648zm0-3.192c.768 0 1.472-.136 2.112-.408.64-.288 1.2-.672 1.68-1.152.48-.496.856-1.08 1.128-1.752s.408-1.392.408-2.16c0-.784-.136-1.504-.408-2.16-.272-.672-.648-1.248-1.128-1.728-.48-.496-1.04-.88-1.68-1.152-.64-.288-1.344-.432-2.112-.432-.752 0-1.448.144-2.088.432-.64.272-1.2.656-1.68 1.152-.48.48-.856 1.056-1.128 1.728-.272.656-.408 1.368-.408 2.136 0 .784.136 1.512.408 2.184s.648 1.256 1.128 1.752c.48.48 1.04.864 1.68 1.152.64.272 1.336.408 2.088.408zm12.292 2.928v-16.8h8.208c1.136 0 2.136.224 3 .672.88.432 1.56 1.04 2.04 1.824.496.784.744 1.688.744 2.712 0 1.072-.296 2.016-.888 2.832s-1.384 1.424-2.376 1.824l3.72 6.936h-3.888l-3.288-6.432h-3.792v6.432zm3.48-9.288h4.416c.784 0 1.408-.208 1.872-.624.48-.416.72-.96.72-1.632s-.24-1.216-.72-1.632c-.464-.416-1.088-.624-1.872-.624h-4.416z"
          fill={themeColors.primary}
        />
      </svg>
    </Link>
  );
};

export default Logo;
