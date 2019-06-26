import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import { parseInput } from "./search_bar_helper";
import { searchRestaurants } from '../../actions/restaurant_actions';

const mSP = (state, ownProps) => {
    return ({
        // errors: state.errors.restaurant,
        loggedIn: Boolean(state.session.id),
        currentUser: state.entities.users[state.session.id]
    });
};

const mDP = (dispatch) => {
    return {
        searchRestaurants: (search) => dispatch(searchRestaurants(search))
    };
};


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '' 
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componenetDidUpdate() {
    //     debugger
    //     if (prevProps.location !== this.props.location) {
    //         debugger
    //         const searchString = this.props.location.search.slice(9)
    //         const searchWords = searchString.split("%20")
    //         debugger
    //         const keywords = { keyword: searchWords.join(" ") }
    //         debugger
    //         this.props.searchRestaurants(keywords) || this.props.fetchRestaurants();
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        if (this.state === "") {
            this.props.history.push('/restaurants')
        } else {
            this.props.history.push(`/search?search=${this.state.search}`);
            this.props.searchRestaurants(this.state)
        }
    }

    updateField(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        const { search } = this.state;

        const cssClassName = (cssClass) => {
            return (
                this.props.location.pathname === "/" ?
                    cssClass : cssClass + "-index-view"
            );
        };
        
        // debugger
        return (
            <div className={cssClassName("restaurant-search-container")}>
        
                <form className={cssClassName("restaurant-search-bar")} onSubmit={this.handleSubmit}>
                    <input className="search"
                        value={search}
                        onChange={this.updateField("search")}
                        placeholder="Search for a restaurant">

                    </input>

                    <button className="search-button">
                            Let's go
                    </button>

                </form>
            </div>
        );
    }
}

export default withRouter(connect(mSP, mDP)(SearchBar));
