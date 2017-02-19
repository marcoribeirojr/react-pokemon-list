import React from 'react'

export default class Pokeinfo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const name = this.props.name
    const img = this.props.img
    const height = this.props.height
    const weight = this.props.weight
    return(
      <div>
        <ul className="collection">
          <li className="collection-item avatar">
              <img src={img} alt="" className="circle" />
              <p>Altura: {height}</p>
              <p>Peso: {weight}</p>
          </li>
        </ul>
      </div>
    )
  }
}
