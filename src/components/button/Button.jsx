import "./button.scss";

const Button = (props) => {
  // const size = props.size
  //   ? {$size: `${props.size}rem` }
  //   : {};

  return (
    <div className={`button__item ${props.className}`}>
      <span>{props.children}</span>
    </div>
  );
};

export default Button;
