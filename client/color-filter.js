class ColorFilter {
    constructor(imId) {
        const imageElement = document.getElementById(imId)
        this.imageElement = imageElement
        this.image = new Image()
        this.image.src = imageElement.src
        this.imageLoaded = false
        this.image.onload = ()=>{
            this.imageLoaded = true
        }
    }
    filter(color) {
        if(this.imageLoaded) {
            const canvas = document.createElement('canvas')
            canvas.width = this.image.width
            canvas.height = this.image.height
            const context = canvas.getContext('2d')
            context.clearRect(0,0,canvas.width,canvas.height)
            context.save()
            context.drawImage(this.image,0,0)
            context.restore()
            context.fillStyle = color
            context.globalAlpha = 0.5
            context.fillRect(0,0,canvas.width,canvas.height)
            const dataUrl = canvas.toDataURL()
            this.imageElement.src = dataUrl
            console.log(dataUrl)
        }
        else {
            setTimeout(()=>{
                this.filter(color)
            },1000)
        }
    }
}
