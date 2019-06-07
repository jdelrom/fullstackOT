import React from "react";
import { withRouter } from "react-router-dom";
import { parseInput } from "./search_bar_helper";

const mapStateToProps = (state, ownProps) => {
    return {
        // errors: state.errors.restaurant,
        loggedIn: Boolean(state.session.currentUser),
        currentUser: state.entities.users[state.session.id]
    };
};


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: '' 
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { history, loggedIn, currentUser } = this.props;
        const parsedQuery = parseInput(this.state.query);

        if (parsedQuery === "") {
            const parsedCity = loggedIn ? parseInput(currentUser.city) : parseInput("New York City");

            history.push(`/restaurants/search?city=${parsedCity}`);
        } else {
            history.push(`/restaurants/search?query=${parsedQuery}`);
        }
    }

    updateField(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    searchBanner() {
        if (this.props.location.pathname !== "/") {
            return null;
        }

        return (
            <div className="search-banner-container">
                <h2 className="search-banner">Make restaurant reservations the easy way</h2>
            </div>
        );
    }


    render() {
        const { query } = this.state;

        const cssClassName = (cssClass) => {
            return (
                this.props.location.pathname === "/" ?
                    cssClass : cssClass + "-index-view"
            );
        };


        return (
            <div className={cssClassName("restaurant-search-container")}>
                {this.searchBanner()}
                <form className={cssClassName("restaurant-search-bar")} onSubmit={this.handleSubmit}>
                    <input className="restaurant-search-input"
                        value={query}
                        onChange={this.updateField("query")}
                        placeholder="Search By Location, Restaurant, and/or Cuisine"></input>
                    <button
                        className="restaurant-search-submit"
                    >Find a Table</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
