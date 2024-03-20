import type { MetaFunction } from "@remix-run/node";
import { Layout, Page } from "@shopify/polaris";
import { useState } from "react";
import LeftColumn from "~/components/LeftColumn/LeftColumn";
import Middle from "~/components/Middle/Middle";
import RightColumn from "~/components/RightColumn/RightColumn";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [inputStyles, setInputStyles] = useState<string>("");

  const handleInputChange = (e: string | undefined) => {
    setInputStyles(e ?? "");
  };

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section variant="oneThird">
          <LeftColumn />
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Middle inputStyles={inputStyles} />
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <RightColumn
            inputStyles={inputStyles}
            handleInputChange={handleInputChange}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
