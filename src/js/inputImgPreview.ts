document
    .querySelector('.file')
    .addEventListener('change', (event: any) => {
        const file = event.target.files[0];
        const blobUrl = window.URL.createObjectURL(file)
        const img = document.querySelector('.img-view')
        img.setAttribute('src', blobUrl)
    })

