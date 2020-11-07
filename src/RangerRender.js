import './App.css';
import React from 'react';
import fetch from 'superagent';
// import AppRender from './AppRender.js';
import { Link } from 'react-router-dom';

export default class RangerRender extends React.Component {

  state = {
    rangerData: [],
    ranger_color: '',
    favorite: '',
    name: '',
    order_appeared: '',
  }


  componentDidMount = async () => {
    const response = await fetch.get(`https://dry-castle-57746.herokuapp.com/rangers`);
    console.log(response.body);
    this.setState({ rangerData: response.body });
  }


  render() {
    return (
      <div className='rangerList'>
        {
          this.state.rangerData.map(ranger =>
            <div>
              <Link to={`/detail/${ranger.id}`}>
                <div className="container">
                  <div className="card">Name: {ranger.name}</div>
                  <div className="card">Ranger Color: {ranger.colors}</div>
                  <div className="card">Favorite Ranger?: {ranger.favorite.toString()}</div>
                  <div className="card">Order of Appearance: {ranger.order_appeared}</div>
                </div>
              </Link>
            </div>
          )})
      </div>
    )
  }
}

// export default class App extends React.Component {

//   state = {
//     rangerData: [],
//   }


//   componentDidMount = async () => {
//     const response = await fetch.get(`https://dry-castle-57746.herokuapp.com/rangers`);
//     console.log(response.body);
//       this.setState({ rangerData: response.body });
//   }


//   render() {
//     return (
//       <div className='rangerList'>
//         {
//         this.state.rangerData.map(ranger => 
//         { return (
//         <AppRender 
//         // uniqueId={ranger.unique_id}
//         rangerName={ranger.name}
//         rangerColor={ranger.ranger_color}
//         favorite={ranger.favorite}
//         orderAppeared={ranger.order_appeared}
//         // ownerId={ranger.owner_id} 
//         />
//         )})
//         }
//       </div>
//     )
//   }
// }