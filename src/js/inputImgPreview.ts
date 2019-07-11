import {container, canvas, context} from "./getElement";

const defaultImgPath = 'https://firebasestorage.googleapis.com/v0/b/facespot-b3ab6.appspot.com/o/default_img.svg?alt=media&token=8bf92214-6896-465f-97ce-125b5902691d'
export let scale: number
export let marginTop: number

const preview = (imgPath) => {
    // @ts-ignore
    let img = new Image();
    img.src = imgPath;

    img.addEventListener('load', () => {
        // @ts-ignore
        canvas.width = container.clientWidth
        // @ts-ignore
        canvas.height = container.clientHeight

        if (img.height <= img.width) {
            scale = canvas.clientWidth / img.width
        } else {
            scale = canvas.clientHeight / img.height
        }

        const width: number = scale * img.width
        const marginLeft: number = (canvas.clientWidth - width) / 2

        const height: number = scale * img.height
        marginTop = (canvas.clientHeight - height) / 2

        context.setTransform(scale, 0, 0, scale, marginLeft, marginTop)

        context.drawImage(img, 0, 0)
    })
}

document.querySelector('.file')
    .addEventListener('change', (event: any) => {
        const img = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(img);

        reader.addEventListener('load', () => {
            preview(reader.result)
        })
    });


window.addEventListener("load", () => {
    preview(defaultImgPath)
})
