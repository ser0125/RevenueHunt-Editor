import { Editor } from "@monaco-editor/react";
import styles from "./RightColumn.module.css";

const RightColumn = ({
  smallScreen,
  inputStyles,
  handleInputChange,
  setShowPolaris,
  showPolaris,
}: {
  smallScreen: boolean;
  inputStyles: string;
  handleInputChange: (e: string | undefined) => void;
  setShowPolaris: (show: boolean) => void;
  showPolaris: boolean;
}) => {
  return (
    <>
      {(!smallScreen || !showPolaris) && (
        <div className={styles.rightSection}>
          {smallScreen && (
            <button
              className={styles.backBtn}
              onClick={() => setShowPolaris(true)}
            >
              <img src="back.svg" alt="back icon" />
            </button>
          )}

          <h3>Estilos CSS aplicados:</h3>
          <Editor
            height="400px" // Adjust height as needed
            value={inputStyles}
            onChange={(newValue) => handleInputChange(newValue)}
            language="css" // Set language mode
            theme="vs-dark" // Choose a theme (optional)
          />
        </div>
      )}
    </>
  );
};

export default RightColumn;
