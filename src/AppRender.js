import React from 'react';

export default class AppRender extends React.Component {
    render() {
        return (
            <div>
                <p className="unique-id">{this.props.uniqueId}</p>
                <p className="name">Name: {this.props.name}</p>
                <p className="ranger_color">Ranger Color: {this.props.ranger_color}</p>
                <p className="favorite">FAvorite Ranger?: {this.props.favorite}</p>
                <p className="order_appeared">Order of Appearance: {this.props.order_appeared}</p>
                <p className="owner-id">Owner Id: {this.props.ownerId}</p>
            </div>
        )
    }
}