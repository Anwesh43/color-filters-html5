import React,{Component} from 'react'
import ColorFilterComponent from './ColorFilterComponent'
import ReactDOM from 'react-dom'
class TestComponent extends Component {
    render() {
        return (<div>
                  <ColorFilterComponent src="back1.jpeg" color="#4CAF50"/>
                  <ColorFilterComponent src="back1.jpeg" color="#FF9800"/>
                  <ColorFilterComponent src="back1.jpeg" color="#f44336"/>
                  <ColorFilterComponent src="back1.jpeg" color="#00BCD4"/>
                  <ColorFilterComponent src="back1.jpeg" color="#E040FB"/>
                </div>)
    }
}
ReactDOM.render(<TestComponent/>,document.getElementById('test'))
