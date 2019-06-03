import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';


class Restaurant extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        // debugger
        // const listRestItems = this.props.restaurants.map(restaurant => {
        //     return <RestaurantIndexItem restaurant={restaurant} />
        // })
        const listRest = this.props.restaurants.map(restaurant => {
            return ( 
                <>
                    <RestaurantIndexItem restaurant={restaurant} />
                </>
            )
        })

        return (
            <div className="rest-container">
                <div className="rest-list">
                    <ul className='rest-ul'>
                        {listRest}
                    </ul>
                </div>

            </div>
        
        )
    }

}

export default Restaurant;