import { Button } from "@shopify/polaris";
import styles from "./LeftColumn.module.css";

const LeftColumn = ({
  smallScreen,
  showPolaris,
  setShowPolaris,
}: {
  smallScreen: boolean;
  showPolaris: boolean;
  setShowPolaris: (showPolaris: boolean) => void;
}) => {
  return (
    <>
      {(!smallScreen || showPolaris) && (
        <div className={styles.leftSection}>
          <Button onClick={() => setShowPolaris(false)} variant="primary">
            Botón de Polaris
          </Button>
        </div>
      )}
    </>
  );
};

export default LeftColumn;
