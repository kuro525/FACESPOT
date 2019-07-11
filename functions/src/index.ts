// @ts-ignore
import * as functions from 'firebase-functions'
// @ts-ignore
import axios from "axios"
import {URLSearchParams} from 'url'

export const fetchFaceInfo = functions
    .region('asia-northeast1')
    .https
    .onRequest((request, response) => {
        response.header('Access-Control-Allow-Origin', "*");
        response.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

        const data = request.body
        const apiKey = functions.config().config_firebase.api_key;
        const postUrl = 'https://eastasia.api.cognitive.microsoft.com/face/v1.0/detect?';
        const params = new URLSearchParams();
        params.append('returnFaceId', 'true');
        params.append('returnFaceLandmarks', 'false');
        params.append(
            'returnFaceAttributes',
            'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
        );

        axios.post(postUrl + params, data, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': apiKey
            }
        })
            .then(res => {
                response.send(res.data);
                return res.data
            })
            .catch(e => {
                console.log(e);
                response.send(e);
                return e
            })
    });
