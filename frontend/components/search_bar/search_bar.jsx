import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { parseInput } from "./search_bar_helper";

const mSP = (state, ownProps) => {
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
            search: '' 
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.history.push(`/search?search=${this.state.search}`);
    
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
                    <input className="restaurant-search-input"
                        value={search}
                        onChange={this.updateField("search")}
                        placeholder="Search for a restaurant!">

                    </input>

                    <button className="restaurant-search-submit">
                            Find a Table
                    </button>

                </form>
            </div>
        );
    }
}

export default withRouter(connect(mSP)(SearchBar));
