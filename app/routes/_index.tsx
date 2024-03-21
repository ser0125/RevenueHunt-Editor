import type { MetaFunction } from "@remix-run/node";
import { Page } from "@shopify/polaris";
import { useState } from "react";
import LeftColumn from "~/components/LeftColumn/LeftColumn";
import Middle from "~/components/Middle/Middle";
import RightColumn from "~/components/RightColumn/RightColumn";
import styles from "../index.module.css";
import useWindowDimensions from "~/hooks/useWindowDimensions";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [showPolaris, setShowPolaris] = useState<boolean>(false);
  const [inputStyles, setInputStyles] = useState<string>("");

  const { width } = useWindowDimensions();

  const smallScreen = width < 1024;

  const handleInputChange = (e: string | undefined) => {
    setInputStyles(e ?? "");
  };

  return (
    <Page fullWidth>
      <div
        className={`${styles.container} ${
          showPolaris ? styles.containerReverse : ""
        }`}
      >
        <LeftColumn
          smallScreen={smallScreen}
          setShowPolaris={setShowPolaris}
          showPolaris={showPolaris}
        />
        <Middle inputStyles={inputStyles} />
        <RightColumn
          smallScreen={smallScreen}
          setShowPolaris={setShowPolaris}
          showPolaris={showPolaris}
          inputStyles={inputStyles}
          handleInputChange={handleInputChange}
        />
      </div>
    </Page>
  );
}
