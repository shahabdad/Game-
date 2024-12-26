import React from 'react'

const Box = ({value,onClick,winner}) => {
  return (
    <button
    className={'box ${winner ? "disabled" : " "}'}
    onClick={onclick}
    disabled = {!winner || value  !== ""}
>
    {value}
</button>
  );
}

export default Box