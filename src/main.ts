// @ts-ignore
import axios from 'axios'

// css
import './css/style.scss'
import './css/lineAnimation.scss'
// js
import './js/inputImgPreview'
import './js/lineAnimation'
import canvasLine from "./js/canvasLine";
import faceInformation from './js/faceInformation'

const outputMessage = document.querySelector('.output-message')


document.querySelector('.start-button')
    .addEventListener('click', async () => {
        const canvas = document.querySelector('.canvas');
        const blob = await makeBlob(canvas);
        outputMessage.textContent = '解析中。'

        const url = 'https://asia-northeast1-facespot-b3ab6.cloudfunctions.net/fetchFaceInfo'
        const header = {headers: {'Content-Type': 'application/octet-stream',}}

        await axios.post(url, blob, header)
            .then(response => {
                faceApiSuccess(response.data)
            })
            .catch(e => console.log(e))
    });


const makeBlob = (canvas) => {
    return new Promise(resolve => {
        canvas.toBlob(result => resolve(result));
    });
};


const faceApiSuccess = (data) => {
    console.log(data)
    const personCount: number = data.length

    if (personCount == 0) {
        outputMessage.textContent = '検出できませんでした。'
        return
    }

    faceInformation(data)

    data.forEach(person => {
        console.log(person);
        canvasLine(person.faceRectangle)
    })
}

