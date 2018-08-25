
import react from 'react'
import data from 'src/api.json'

class Media extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            author = props.author
        }
    }
    handleClick = (event)=>{
        this.setState({
            author: 'Santiago Sanchez'
        })
    }
    componentWillMount({//antes de montar
    })
    componentDidMount({

    })
    componentWillReciveProps({})
    shouldComponentUpdate({})
    componentWillUpdate()
    componenDidUpdate()
    componetWillUnmount()
    componentDidCatch({})
    render(){
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width:260,
                border: '1px solid red'
            }
        }
    return(
        <div className= "Media" onClick = {this.handleClick}>
            <div>
                <img src={this.props.image}
                     alt=""
                     width={269}
                     height = {160}
                     className = "Media-image"
                     />
                     <h3 className="Media-title">{this.props.title}</h3>
                     <p className='Media-author'>{this.state.author}</p>
            </div>
        </div>
    )
    }

}


//Listas de objetos
class Playlist extends Component{
    render(){
        const playlist = this.props.data.categories[0].playlist
        return(
            <div>
                {
                    playlist.map((item)=>{
                        return <Media title= {...item} key={item.id}/>
                    })
                }
               < Media/>
            </div>
        )

    }
}