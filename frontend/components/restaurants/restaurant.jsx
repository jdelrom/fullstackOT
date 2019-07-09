import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import NavbarContainer from '../navbar/nav_bar_container';
import SearchBar from '../search_bar/search_bar';
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
            // debugger
            const keywords = { keyword: searchWords.join(" ") }
            // debugger
            this.props.searchRestaurants(keywords) || this.props.fetchRestaurants();
        }
    }


    render() {
        // debugger
        // const listRestItems = this.props.restaurants.map(restaurant => {
        //     return <RestaurantIndexItem restaurant={restaurant} />
        // })
        let listRest;
        if (this.props.restaurants.length > 0) {
            listRest = this.props.restaurants.map(restaurant => {
                return (
                    <>
                        <RestaurantIndexItem restaurant={restaurant} />
                    </>
                )
            })
        } else {
            listRest = (
                <>
                    <h1>Sorry, no restaurants match your search!</h1>
                </>
            )
        }
        debugger
        return (
            <>
            <NavbarContainer />
            <div className="rest-container">
                <div className="rest-list">
                    <div className='search-bar-in-nav'>
                        <SearchBar />
                    </div>
                    <ul className='rest-ul'>
                        {listRest}
                    </ul>
                    <Footer />
                </div>
            </div>
            </>

        )
    }

}

export default Restaurant;