import {context} from "./getElement";
import {scale, marginTop} from "./inputImgPreview";

export const canvasLine = (Rectangle) => {
    context.beginPath()
    context.strokeStyle = '#f00'
    context.lineWidth = 2 / scale
    const {top, left, width, height} = Rectangle
    context.strokeRect(left / scale, (top - marginTop) / scale, width / scale, height / scale)
    // console.log(Rectangle)
    // console.log(scale);
}

export default canvasLine
