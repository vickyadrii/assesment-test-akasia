import { StyledButton } from "./StyledButton";

interface ButtonProps {
  disabled?: boolean;
  onClick?(): void;
  children?: JSX.Element | string
}

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton>
      <button disabled={disabled} onClick={onClick} className="btn-wishlist">
        {children}
      </button>
    </StyledButton>
  );
};

export default Button;
