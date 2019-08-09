import React from 'react';
import { Link } from 'react-router-dom';
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
        
        this.props.fetchRestaurants();
    }

    componentDidUpdate() {
       
        if (this.props.restaurants === 1) { 
            this.props.fetchRestaurants()
        };
        
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
                <Link className='carousel-link' to={`/restaurants/${restaurant.id}`}>
                    <div className='carousel-return'>
                        <h1><a className='carousel-anchor' href={`#/restaurants/${restaurant.id}`}>{restaurant.name}</a></h1>
                        <div className='carousel-deets'>
                            {/* <p className='fafa'>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </p> */}
                            <p className='carousel-tag'>{restaurant.tag}</p>
                        </div>
                    </div>
                </Link>
            )
        })
            if (restaurants.length === 0) {
                return null
            } else if (this.state.mode === 'more') {
            
            return (
                <section className="more-container">
                    <div className='carousel-rest-container'>
                    <div onClick={this.handleClick} className="fasend-left"></div>
                        <div className='carousel-rest-div1'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[0].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[0]} alt=""/>
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[0]}
                            </div>
                        </div>
                        <div className='carousel-rest-div2'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[1].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[1]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[1]}
                            </div>
                        </div>
                        <div className='carousel-rest-div3'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[2].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[2]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[2]}
                            </div>
                        </div>
                        <div className='carousel-rest-div4'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[3].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[3]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[3]}
                            </div>
                        </div>
                        <div className='carousel-rest-div5'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[4].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[4]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[4]}
                            </div>
                        </div>
                        <div onClick={this.handleClick} className="fasend-right"></div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="less-container">
                    <div className='carousel-rest-container'>
                    <div onClick={this.handleClick} className="fasend-left"></div>
                        <div className='carousel-rest-div1'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[5].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[5]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[5]}
                            </div>
                        </div>
                        <div className='carousel-rest-div2'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[6].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[6]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[6]}
                            </div>
                        </div>
                        <div className='carousel-rest-div3'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[7].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[7]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[7]}
                            </div>
                        </div>
                        <div className='carousel-rest-div4'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[8].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[8]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[8]}
                            </div>
                        </div>
                        <div className='carousel-rest-div5'>
                            <div className='carousel-img'>
                                <a href={`#/restaurants/${this.props.restaurants[9].id} `}>
                                    <img src={this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)].photoUrl[9]} alt="" />
                                </a>
                            </div>
                            <div className='carousel-info'>
                                {restaurants[9]}
                            </div>
                        </div>
                        <div onClick={this.handleClick} className="fasend-right"></div>
                    </div>
                </section>
            )
        }
    }
}

export default withRouter(connect(mSP, mDP)(RestCarousel))