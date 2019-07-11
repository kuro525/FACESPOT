const faceInformation = (data) => {
    const personCount: number = data.length

    let ageSum: number = 0
    let manSum: number = 0
    let womanSum: number = 0

    data.forEach(person => {
        const {age, gender} = person.faceAttributes

        ageSum += age

        if (gender === 'female') {
            womanSum++
        } else if (gender === 'male') {
            manSum++
        }
    })

    const outputPeople = document.querySelector('.outputPeople')
    const outputGender = document.querySelector('.outputGender')
    const outputAge = document.querySelector('.outputAge')

    // 人数表示
    outputPeople.textContent = `人数 ${personCount}人`

    // 性別表示
    if (womanSum === 0) {
        outputGender.textContent = `性別 男性`
    } else if (manSum === 0) {
        outputGender.textContent = `性別 女性`
    } else {
        outputGender.textContent = `性別 女性${womanSum}人 男性${manSum}人 `
    }

    // 年齢表示
    if (personCount === 1) {
        outputAge.textContent = `年齢 約 ${ageSum}歳`
    } else {
        outputAge.textContent = `平均年齢 ${(ageSum / personCount).toFixed(1)}歳`
    }

    console.log(ageSum)
    console.log(womanSum)
    console.log(manSum);
}

export default faceInformation
