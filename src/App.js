import './App.css';
import React from 'react';
import fetch from 'superagent';
import AppRender from './AppRender.js';

export default class App extends React.Component {
  
  state = {
      rangerData: '',
  }


  componentDidMount = async () => {
    const response = await fetch.get(`https://dry-castle-57746.herokuapp.com/rangers`);
      this.setState({ rangerData: response.results });
  }


  render() {
    return (
      <div>
              {
          <div className="rangerList"> 
          {
          this.props.rangerData.map(ranger => 
          { return (
          <AppRender 
          uniqueId={ranger.id}
          rangerName={ranger.name} 
          ranger_color={ranger.ranger_color} 
          favorite={ranger.favorite}
          order_appeared={ranger.order_appeared}
          ownerId={ranger.owner_id} />
          )
          })
          }
          </div>
      }

      </div>
    )
  }
}