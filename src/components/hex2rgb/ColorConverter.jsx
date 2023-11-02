import "./ColorConverter.css";
import { useState } from "react";
import { hexToRGB } from "./ColorConverterFunc";

export default function ColorConverter() {
  const [color, setColor] = useState({
    hex: "#000",
    rgb: "rgb(0,0,0)",
  });

  const { hex, rgb } = color;

  const handleChange = (e) => {
    const { value } = e.target;
    setColor((prevForm) => ({
      ...prevForm,
      hex: value,
    }));

    let hexrgb = hexToRGB(value);
    if (hexrgb === null) {
      setColor((prevForm) => ({
        ...prevForm,
        rgb: "Input correct HEX",
      }));
    } else {
      setColor((prevForm) => ({
        ...prevForm,
        rgb: hexrgb,
      }));
    }
  };

  return (
    <div
      className="colorconvter-cont"
      style={{ backgroundColor: rgb }}
      onClick={(e) => e.target.children[0]?.focus()}
    >
      <input
        id="color-input"
        name="hex"
        className="color-input"
        value={hex}
        onChange={handleChange}
      />
      <div id="color-output" name="rgb" className="color-output">
        {rgb}
      </div>
    </div>
  );
}
