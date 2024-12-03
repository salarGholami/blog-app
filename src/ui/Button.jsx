const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  ouline: "btn--ouline",
  danger: "btn--danger",
};

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
