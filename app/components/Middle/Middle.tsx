import { styled } from "styled-components";
import styles from "./Middle.module.css";

const StyledDiv = styled.div<{ inputstyles: string }>`
  ${({ inputstyles }) => `${inputstyles}`}
`;

const Middle = ({ inputStyles }: { inputStyles: string }) => {
  return (
    <div className={styles.middleSection}>
      <StyledDiv inputstyles={inputStyles}>
        <h2 className="title">Lorem ipsum dolor sit amet</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt u</p>
        <button type="button" className="btn btn-primary">
          Est laborum
        </button>
      </StyledDiv>
    </div>
  );
};

export default Middle;
