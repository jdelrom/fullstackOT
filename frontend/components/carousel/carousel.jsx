import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mSP = (state, ownProps) => ({
    restaurants: Object.values(state.entities.restaurants)
})

const mDP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

class RestCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'more'
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchRestaurants()
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.mode === 'less') {
            this.setState( { mode: 'more' } )
        } else {
            this.setState( { mode: 'less' } ) 
        }
    }

    render() {
        let random = Math.floor(Math.random() * this.props.restaurants.length)
        const restaurants = this.props.restaurants.map(restaurant => {
            return (
                <div className='carousel-return'>
                    <h1><a href={`#/restaurants/${restaurant.id}`}>{restaurant.name}</a></h1>
                    <div className='carousel-deets'>
                        <p className='fafa'>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </p>
                        <p className='carousel-tag'>{restaurant.tag}</p>
                    </div>
                </div>
            )
        })
        if (restaurants.length === 0) {
            return null
        } else if (this.state.mode === 'more') {
            // debugger
            return (
                <section className="more-container">
                    <div className='carousel-rest-container'>
                    <div onClick={this.handleClick} className="fasend-left"></div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt=""/>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div onClick={this.handleClick} className="fasend-right"></div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="more-container">
                    <div className='carousel-rest-container'>
                    <div onClick={this.handleClick} className="fasend-left"></div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div className='carousel-rest-div'>
                            <div className='carousel-img'>
                                <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[Math.floor(Math.random() * this.props.restaurants.length)]} alt="" />
                            </div>
                            <div className='carousel-info'>
                                {restaurants[Math.floor(Math.random() * this.props.restaurants.length)]}
                            </div>
                        </div>
                        <div onClick={this.handleClick} className="fasend-right"></div>
                    </div>
                </section>
            )
        }
    }
}
<i class="material-icons"> arrow_forward_ios </i>
export default withRouter(connect(mSP, mDP)(RestCarousel))