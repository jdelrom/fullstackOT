import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import NavbarContainer from '../navbar/nav_bar_container';
import Footer from '../footer/footer';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        const searchString = this.props.location.search.slice(8);
        // debugger
        const searchWords = searchString.split("%20");
        // debugger
        const keywords = { search: searchWords.join(" ") }

        this.props.searchRestaurants(keywords) || this.props.fetchRestaurants();
    }

    componenetDidUpdate() {
        // debugger
        if (prevProps.location !== this.props.location) {
            // debugger
            const searchString = this.props.location.search.slice(9)
            const searchWords = searchString.split("%20")
            const keywords = { keyword: searchWords.join(" ") }

            this.props.searchRestaurants(keywords) || this.props.fetchRestaurants();
        }
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
        // debugger
        return (
            <div className="rest-container">
                <NavbarContainer />
                <div className="rest-list">
                    <ul className='rest-ul'>
                        {listRest}
                <Footer />
                    </ul>
                </div>
            </div>
        
        )
    }

}

export default Restaurant;