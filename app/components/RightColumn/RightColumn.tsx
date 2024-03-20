import { Editor } from "@monaco-editor/react";

const RightColumn = ({
  inputStyles,
  handleInputChange,
}: {
  inputStyles: string;
  handleInputChange: (e: string | undefined) => void;
}) => {
  return (
    <div className="right-column">
      <h3>Estilos CSS aplicados:</h3>
      <Editor
        height="400px" // Adjust height as needed
        value={inputStyles}
        onChange={(newValue) => handleInputChange(newValue)}
        language="css" // Set language mode
        theme="vs-dark" // Choose a theme (optional)
      />
    </div>
  );
};

export default RightColumn;
