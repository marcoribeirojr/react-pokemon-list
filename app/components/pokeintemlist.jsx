import React from 'react'
import Requests from '../modules/requests'
import Pokeinfo from './pokeinfo.jsx'

export default class Pokeitemlist extends React.Component{
  constructor(props){
    super(props)
    this.searchData = this.searchData.bind(this)
    this.loadInfo = this.loadInfo.bind(this)
    this.changeValues = this.changeValues.bind(this)
    this.state = {
      viewed : false,
      name : '',
      height : 0,
      weight : 0,
      img : ''
    }
  }

  componentDidMount() {

  }

  searchData(url){
    this.changeValues(this.loadInfo(url))
  }

  changeValues(updatedValues){
    if(updatedValues === undefined){
      return
    }
    this.setState({
      viewed : true,
      name : updatedValues.name,
      height : updatedValues.height,
      weight : updatedValues.weight,
      img : updatedValues.sprites.front_default,
    })
  }

  loadInfo(url){
    const ret = Requests(url)
    const data = JSON.parse(ret)
    return data
  }

  render(){
    const infoPoke = this.state
    const pokeComponent = <Pokeinfo  name={infoPoke.name} height={infoPoke.height} weight={infoPoke.weight} img={infoPoke.img} />
    const details = <span className="new badge blue" data-badge-caption="Ver detalhes" onClick={() => {this.searchData(this.props.url)}}></span>
    return(
        <div className="collapsible-header">
          {!infoPoke.viewed ? details : null}
          <h5>{this.props.name}</h5>
          {infoPoke.viewed ? pokeComponent : null}
        </div>
    )
  }
}
