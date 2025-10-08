const Button = ({ onclick, children, ...props }) => (
  <button onClick={onclick} {...props}>
    {children}
  </button>
);
export default Button;