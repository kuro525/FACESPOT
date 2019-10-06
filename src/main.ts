// @ts-ignore
import axios from 'axios'


// css
import './css/style.scss'
import './css/lineAnimation.scss'
// js
import './js/inputImgPreview'
import './js/lineAnimation'
import makeBlob from "./js/makeBlob";
import canvasLine from "./js/canvasLine";
import faceInformation from './js/faceInformation'
import graph from './js/graph'

const outputMessage = document.querySelector('.output-message')


// navigator.mediaDevices
//   .getUserMedia({
//     video: true,
//     audio: false
//   })
//   .then(stream => {
//     this.video.srcObject = stream;
//     this.video.play();
//     console.log(stream);
//   })
//   .catch(err => console.log('エラー! ' + err));


// navigator.mediaDevices.getUserMedia({
//   audio: false,
//   video: {
//     width: 1280,
//     height: 720
//   }
// }).then((stream) => {
//   const video = document.querySelector('video');
//   video.srcObject = stream
//   video.onloadedmetadata = function (e) {
//     video.play();
//   };
// })
//   .catch((err) => {
//     console.log(err.name + ": " + err.message);
//   });


document.querySelector('.start-button')
  .addEventListener('click', async () => {
    const canvas = document.querySelector('.canvas');
    const blob = await makeBlob(canvas);
    outputMessage.textContent = '解析中。'
    document.querySelector('.start').classList.add('none')


    const url = 'https://asia-northeast1-facespot-b3ab6.cloudfunctions.net/fetchFaceInfo'
    const header = {headers: {'Content-Type': 'application/octet-stream',}}

    await axios.post(url, blob, header)
      .then(response => {
        faceApiSuccess(response.data)
      })
      .catch(e => console.log(e))
  });


const faceApiSuccess = (data) => {
  console.log(data)
  const personCount: number = data.length
  outputMessage.textContent = ''

  if (personCount == 0) {
    outputMessage.textContent = '検出できませんでした。'
    return
  }

  document.querySelector('.spot-button').classList.remove('none')
  document.querySelector('.spot').classList.remove('none')


  faceInformation(data)
  graph(data, personCount)


  data.forEach(person => {
    console.log(person);
    canvasLine(person.faceRectangle)
  })
}

