import React from 'react';

class RestShowNav extends React.Component {
    
    constructor(props) {
        super(props)

    }

    // componentDidUpdate() {
    //     debugger
    //     this.props.fetchRestaurant(this.props.match.params.id)
    // }

    componentDidMount() {
        // debugger
        this.props.fetchRestaurant(this.props.match.params.id)
    }

    render() {
        // debugger
        if (Object.values(this.props.restaurant).length === 0) { return null }
        return (
            <div className="rest-show-img-container">
                <div className='img-duo-container'>
                    <div className="duo-img"> 
                         <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                    </div>

                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                    </div>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                </div>

                <div className='img-duo-container'>
                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                    </div>

                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                    </div>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                </div>

                <div className='img-duo-container'>
                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                    </div>

                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                    </div>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[Math.floor((Math.random() * this.props.restaurant.photoUrl.length))]}/>
                </div>

            </div>
        )
    }
}


export default RestShowNav