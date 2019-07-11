// @ts-ignore
import axios from 'axios'

// css
import './css/style.scss'
import './css/lineAnimation.scss'
// js
import './js/inputImgPreview'
import './js/lineAnimation'


document.querySelector('.start-button')
    .addEventListener('click', async () => {
        const canvas = document.querySelector('.canvas');
        const blob = await makeBlob(canvas);//
        const url = 'https://asia-northeast1-facespot-b3ab6.cloudfunctions.net/fetchFaceInfo'
        const header = {headers: {'Content-Type': 'application/octet-stream',}}

        await axios.post(url, blob, header)
            .then(response => console.log(response.data))
            .catch(e => console.log(e))
    });


const makeBlob = (canvas) => {
    return new Promise(resolve => {
        canvas.toBlob(result => resolve(result));
    });
};
