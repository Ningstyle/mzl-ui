export function hexToRgba(hex, opacity) {
  var RGBA = "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt( "0x" + hex.slice(5, 7)) + "," + opacity + ")";
  return {
      red: parseInt("0x" + hex.slice(1, 3)),
      green: parseInt("0x" + hex.slice(3, 5)),
      blue: parseInt("0x" + hex.slice(5, 7)),
      rgba: RGBA
  }
}
