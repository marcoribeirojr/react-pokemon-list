import React from 'react'
import Requests from '../modules/requests'
import Pokeitemlist from './pokeintemlist.jsx'

export default class Pokelist extends React.Component {
  constructor(props){
    super(props)
    this.changeStateList = this.changeStateList.bind(this)
    this.changePage = this.changePage.bind(this)
    this.capitalizeString = this.capitalizeString.bind(this)
    this.state = {
      count : 0,
      results : [],
      previous : null,
      next : null
    }
  }

  componentDidMount(){
    this.changeStateList(this.loadList('http://pokeapi.co/api/v2/pokemon/'))
  }

  loadList(url){
    const ret = Requests(url)
    const data = JSON.parse(ret)
    if(data === undefined){
      return this.state
    }
    return data
  }

  changePage(newPage){
    this.changeStateList(this.loadList(newPage))
  }

  changeStateList(updatedValues){

    this.setState({
      results : updatedValues.results,
      previous : updatedValues.previous,
      next : updatedValues.next,
    })
  }

  capitalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render(){

    const results = this.state.results

    let list = results.map( element => {
      let name = this.capitalizeString(element.name)
      return (
        <li key={name}>
          <Pokeitemlist name={name} url={element.url}/>
        </li>
      )
    })

    const classButton = "waves-effect waves-light btn"
    let buttonPrevious = classButton
    let buttonNext = classButton
    if(this.state.previous === null){
      buttonPrevious += " disabled"
    }
    if(this.state.next === null){
      buttonNext += " disabled"
    }

    return(
      <div>
        <h4>Lista de Pokemons</h4>
        <ul className="collapsible" data-collapsible="accordion">{list}</ul>
        <div className="center">
          <a className={buttonPrevious} onClick={() => this.changePage(this.state.previous)}>Página Anterior</a>
          <a className={buttonNext} onClick={() => this.changePage(this.state.next)}>Próxima Página</a>
        </div>
      </div>
    )
  }
}
