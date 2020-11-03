import React from 'react';

export default class AppRender extends React.Component {
    render() {
        return (
            <div>
                {/* <p className="uniqueId">UniqueId: {this.props.unique_id}</p> */}
                <p className="name">Name: {this.props.name}</p>
                <p className="rangerColor">Ranger Color: {this.props.ranger_color}</p>
                <p className="favorite">Favorite Ranger?: {this.props.favorite}</p>
                <p className="orderAppeared">Order of Appearance: {this.props.order_appeared}</p>
                {/* <p className="ownerId">Owner Id: {this.props.owner_Id}</p> */}
            </div>
        )
    }
}