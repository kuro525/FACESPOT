// @ts-ignore
import Chart from 'chart.js'

export const graph = (data, personCount) => {
  let angerSum = 0;
  let contemptSum = 0;
  let disgustSum = 0;
  let fearSum = 0;
  let happinessSum = 0;
  let neutralSum = 0;
  let sadnessSum = 0;
  let surpriseSum = 0;

  interface emotion {
    anger: number
    contempt: number
    disgust: number
    fear: number
    happiness: number
    neutral: number
    sadness: number
    surprise: number
  }

  data.forEach(data => {
    const emotion: emotion = data.faceAttributes.emotion
    const {anger, contempt, disgust, fear, happiness, neutral, sadness, surprise} = emotion

    angerSum += anger
    contemptSum += contempt
    disgustSum += disgust
    fearSum += fear
    happinessSum += happiness
    neutralSum += neutral
    sadnessSum += sadness
    surpriseSum += surprise
  })

  const emotions = {angerSum, contemptSum, disgustSum, fearSum, happinessSum, neutralSum, sadnessSum, surpriseSum}
  console.log(emotions);
  // const maxEmotion = emotions.indexOf(Math.max(...emotions))
  // console.log(maxEmotion);

  const emotion = (emotionData) => (emotionData * 100 / personCount).toFixed(1)

  let config = {
    type: 'pie',
    data: {
      labels: [
        '喜び',
        '驚き',
        '怒り',
        '恐れ',
        '悲しみ',
        'ムカつき',
        '軽蔑',
        '無表情'
      ],
      datasets: [{
        data: [
          emotion(happinessSum),
          emotion(surpriseSum),
          emotion(angerSum),
          emotion(fearSum),
          emotion(sadnessSum),
          emotion(disgustSum),
          emotion(contemptSum),
          emotion(neutralSum)

        ],
        backgroundColor: [
          '#FF9800',
          '#2196f3',
          '#F44336',
          '#009688',
          '#3F51B5',
          '#E91E63',
          '#673AB7',
          '#BDBDBD'
        ]
      }],
    },
    options: {
      legend: {
        display: false,
      },
      cutoutPercentage: 50
    },
    responsive: false
  };

// チャートの生成
  // @ts-ignore
  let ctx = document.querySelector('.chart').getContext('2d');
  new Chart(ctx, config);
  document.querySelector('.graph').classList.remove('none')
}

export default graph