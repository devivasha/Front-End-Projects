import React from "react";

export default function RotateImgContainer({ src, className, degrees, selected, changeSelected }) {
  let selectedBorder = {}
  let boxSizes = {
    display: 'flex',
    height: '258px',
    width: '258px',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  }
  let image = {
    display: 'table',
    maxWidth: '250px',
    maxHeight: '250px',
  };
  if (selected) {
    selectedBorder = {
      border: '4px solid #D23A5B',
      borderRadius: '4px',
    }
  }
  return (
    <div style={boxSizes}>
      <div style={{
        ...image,
        ...selectedBorder,
        ...{
          transform: "rotate(" + degrees + "deg)",
        }
      }}
        onClick={() => changeSelected()}
      >
        <img
          alt="Awesome img"
          src={src}
          className={className}
        ></img>
      </div>
    </div>
  );
}
