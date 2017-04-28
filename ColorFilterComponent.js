import React,{Component} from 'react'
export default class ColorFilterComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
      const image = new Image()
      image.src = this.props.src
      const imageElement = this.refs.img1
      image.onload = ()=>{
          this.colorify(image,imageElement,this.props.color)
      }
    }
    colorify(image,imageElement,color) {
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
    render() {
        return (<span>
                  <img ref="img1"/>
                </span>)
    }
}
