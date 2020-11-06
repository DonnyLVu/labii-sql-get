import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';
import RangerRender from './RangerRender.js';
import CreatePage from './CreatePage.js';
import Home from './Home.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route
              path="/home"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/createpage"
              exact
              render={(routerProps) => <CreatePage {...routerProps} />}
            />
            <Route
              path="/rangerrender"
              exact
              render={(routerProps) => <RangerRender {...routerProps} />}
            />
          </Switch>
        </Router>
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