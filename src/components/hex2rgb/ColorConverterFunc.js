export function hexToRGB(hex) {
  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) {
    return `rgb(${normal.slice(1).map((i) => parseInt(i, 16))})`;
  }

  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand) {
    return `rgb(${shorthand.slice(1).map((i) => 0x11 * parseInt(i, 16))})`;
  }
  return null;
}
