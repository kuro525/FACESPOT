const defaultImgPath = 'https://firebasestorage.googleapis.com/v0/b/facespot-b3ab6.appspot.com/o/default_img.svg?alt=media&token=8bf92214-6896-465f-97ce-125b5902691d'
const container = document.querySelector('.canvas-container')
const canvas = document.querySelector('.canvas')
// @ts-ignore
const context = canvas.getContext('2d')

const drawImage = (imgPath) => {
    // @ts-ignore
    let img = new Image();
    img.src = imgPath;

    img.addEventListener('load', () => {
        // @ts-ignore
        canvas.width = container.clientWidth
        // @ts-ignore
        canvas.height = container.clientHeight

        let scale: number
        if (img.height <= img.width) {
            scale = canvas.clientWidth / img.width
        } else {
            scale = canvas.clientHeight / img.height
        }

        const width = scale * img.width
        const marginLeft: number = (canvas.clientWidth - width) / 2

        const height = scale * img.height
        const marginTop: number = (canvas.clientHeight - height) / 2

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
            drawImage(reader.result)
        })
    });


window.addEventListener("load", () => {
    drawImage(defaultImgPath)
})
