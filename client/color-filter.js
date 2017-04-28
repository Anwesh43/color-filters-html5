class ColorFilter {
    constructor(imId) {
        const imageElements = document.querySelectorAll(imId)
        this.imageElements = imageElements
        console.log(imageElements.length)
    }
    filterSingleImage(image,imageElement,color) {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height
      const context = canvas.getContext('2d')
      context.clearRect(0,0,canvas.width,canvas.height)
      context.save()
      context.drawImage(image,0,0)
      context.restore()
      context.fillStyle = color
      context.globalAlpha = 0.5
      context.fillRect(0,0,canvas.width,canvas.height)
      const dataUrl = canvas.toDataURL()
      imageElement.src = dataUrl
      console.log(dataUrl)
    }
    filter(color) {
        this.imageElements.forEach((imageElement)=>{
            const image = new Image()
            image.src = imageElement.src
            image.onload = ()=>{
                this.filterSingleImage(image,imageElement,color)
            }
        })
    }
}
