import NavBar from "@layout/modules/NavBar";
import type { FC } from "react";

interface Props {
  hideLinks: boolean;
}

const Header: FC<Props> = ({ hideLinks }) => {
  return <NavBar hideLinks={hideLinks} />;
};

export default Header;
