import React, { Component } from 'react'
import fetch from 'superagent';
import './App.css';

const userLocal = {
    userId: 1
};

export default class Create extends Component {

    state = {
        name: '',
        orderAppeared: 1,
        newFavorite: false,
        colors: [],
        colorId: 1,
        newRangerColor: 1,
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://dry-castle-57746.herokuapp.com/colors`);

        this.setState({ colors: response.body })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newRangers = {
            name: this.state.newName,
            ranger_color_id: this.state.newRangerColor,
            favorite: this.state.newFavorite,
            order_appeared: this.state.newOrderAppeared,
            owner_id: userLocal.userId
        };
        console.log(newRangers)
        await fetch
            .post('https://dry-castle-57746.herokuapp.com/rangers')
            .send(newRangers);

        this.props.history.push('/rangerrender');
    }

    handleChange = (e) => {
        this.setState({ newRangerColor: e.target.value })
    }

    render() {
        return (
            <div>
                ADD NEW RANGER
                <form onSubmit={this.handleSubmit}>
                    <label>
                        NAME
                        <input onChange={e => this.setState({ newName: e.target.value })} type="text" />
                    </label>
                    <label>
                        ORDERED OF WHEN IT APPEARED?
                        <input onChange={e => this.setState({ newOrderAppeared: e.target.value })} type="number" />
                    </label>
                    <label>
                        FAVORITE??
                        <select onChange={e => this.setState({ newFavorite: e.target.value })} >
                            <option value={false} > False </option>
                            <option value={true} > True </option>
                        </select>
                    </label>
                    <label>
                        RANGER COLOR
                        <select onChange={this.handleChange}>
                            {
                                this.state.colors.map(color => <option key={color.id} value={color.id}>{color.ranger_color}</option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}