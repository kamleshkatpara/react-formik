import React, { useState } from "react";

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const { disabled, title, name, handleClick, ...rest } = props;
  return (
    <button
      className={`btn-${variant} btn-${size}`}
      name={name}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {title}
    </button>
  );
}

export default Button;
