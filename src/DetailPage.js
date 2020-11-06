import React, { Component } from 'react'
import { 
    fetchColors, 
    updateRanger, 
    fetchRanger,
} from './fetches.js';

const userLocal = {
    userId: 1,
}
export default class DetailPage extends Component {
    
    state = {
        name: '',
        orderAppeared: 1,
        favorite: false,
        colors: [],
        colorId: 1,
    }
    componentDidMount = async () => {
        const colors = await fetchColors();
        const rangers = await fetchRanger(this.props.match.params.id);

        const matchingColor = colors.find((color) => {
            return color.ranger_color === rangers.ranger_color;
        });
        this.setState({ 
            colors, 
            colorId: matchingColor.id,
            name: rangers.name,
            favorite: rangers.favorite,
            orderAppeared: rangers.order_appeared,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateRanger (
            this.props.match.params.id,{
            color_id: this.state.colorId,
            newName: this.state.name,
            newRangerColor: this.state.ranger_color,
            newFavorite: this.state.favorite,
            newOrderAppeared: this.state.order_appeared,
            owner_id: userLocal.userId
            }
        );
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ newRangerColor: e.target.value })
    }

    render() {
        return (
            <div>
                ADD UPDATED RANGER
                <form onSubmit={this.handleSubmit}>
                    <label>
                        NAME
                        <input value={this.state.name } onChange={e => this.setState({ newName: e.target.value })} type="text" />
                    </label>
                    <label>
                        ORDERED OF WHEN IT APPEARED?
                        <input value={this.state.order_appeared} onChange={e => this.setState({ newOrderAppeared: e.target.value })} type="number"/>
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
                                this.state.colors.map(color => 
                                <option selected={
                                    this.state.colorId === color.id}
                                    key={color.id} 
                                    value={color.id}>
                                    {color.ranger_color}
                                </option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};
