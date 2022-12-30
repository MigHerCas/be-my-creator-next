import type { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  type: 0 | 1 | 2;
  isInverted?: boolean;
}

const Blob: FC<Props> = ({ type, isInverted = false }) => {
  const variants = [
    <path
      fill="#00C4A2"
      d="M34.6,-56.4C46.4,-53.1,58.5,-47,61.2,-37.1C63.9,-27.2,57.2,-13.6,57.8,0.4C58.4,14.3,66.4,28.6,64.6,40.1C62.8,51.6,51.3,60.2,38.9,62.3C26.5,64.4,13.2,60,0.9,58.5C-11.4,56.9,-22.8,58.1,-32.3,54.3C-41.7,50.4,-49.1,41.5,-56.3,31.7C-63.5,21.8,-70.4,10.9,-69.8,0.3C-69.2,-10.2,-61.2,-20.4,-52.9,-28.4C-44.6,-36.3,-36.1,-42,-27.2,-47C-18.4,-51.9,-9.2,-56,1.1,-58C11.4,-59.9,22.8,-59.6,34.6,-56.4Z"
      transform="translate(100 100)"
    />,
    <path
      fill="#00C4A2"
      d="M30.9,-55.2C40.7,-47.8,49.8,-40.9,59.1,-31.8C68.4,-22.7,77.8,-11.3,82.1,2.4C86.3,16.2,85.3,32.4,76.1,41.8C67,51.2,49.8,53.8,35.7,57.5C21.7,61.3,10.8,66.1,-2,69.5C-14.8,72.9,-29.5,74.8,-36.8,67.2C-44.1,59.5,-43.9,42.4,-45.7,29.6C-47.5,16.8,-51.3,8.4,-53.2,-1.1C-55.1,-10.6,-55.2,-21.3,-50.3,-28.7C-45.4,-36,-35.5,-40.1,-26.2,-47.9C-17,-55.8,-8.5,-67.3,1,-69C10.5,-70.7,21,-62.7,30.9,-55.2Z"
      transform="translate(100 100)"
    />,
    <path
      fill="#00C4A2"
      d="M42.3,-64.9C56.5,-65.2,70.9,-57.2,79.7,-45C88.6,-32.8,92,-16.4,86.4,-3.2C80.8,9.9,66.2,19.9,57.4,32.2C48.6,44.5,45.6,59.1,37,66.1C28.4,73,14.2,72.3,2.9,67.3C-8.4,62.3,-16.9,53.1,-24.7,45.7C-32.5,38.2,-39.8,32.7,-51.5,25.4C-63.2,18.1,-79.4,9,-85.7,-3.6C-92,-16.3,-88.4,-32.6,-79,-44C-69.7,-55.5,-54.6,-62,-40.5,-61.8C-26.4,-61.5,-13.2,-54.6,0.4,-55.3C14.1,-56.1,28.2,-64.6,42.3,-64.9Z"
      transform="translate(100 100)"
    />,
  ];

  return (
    <svg
      className={isInverted ? styles.blobInverted : styles.blob}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variants[type]}
    </svg>
  );
};

export default Blob;