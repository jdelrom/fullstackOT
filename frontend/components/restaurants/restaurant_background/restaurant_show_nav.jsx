import React from 'react';

class RestShowNav extends React.Component {
    
    constructor(props) {
        super(props)

    }

    // componentDidUpdate() {
    //     debugger
    //     this.props.fetchRestaurant(this.props.match.params.id)
    // }

    // componentDidMount() {
    //     // debugger
    //     this.props.fetchRestaurant(this.props.match.params.id)
    // }

    render() {
        // debugger
        if (Object.values(this.props.restaurant).length === 0) { return null }
        return (
            <div className="rest-show-img-container">
                <div className='img-duo-container'>
                    <div className="duo-img"> 
                         <img src={this.props.restaurant.photoUrl[0]}/>
                    </div>

                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[1]}/>
                    </div>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[2]}/>
                </div>

                <div className='img-duo-container'>
                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[3]}/>
                    </div>

                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[4]}/>
                    </div>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[5]}/>
                </div>

                <div className='img-duo-container'>
                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[6]}/>
                    </div>

                    <div className="duo-img">
                        <img src={this.props.restaurant.photoUrl[7]}/>
                    </div>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[8]}/>
                </div>

                <div className='img-duo-brother'>
                    <img src={this.props.restaurant.photoUrl[9]}/>
                </div>

            </div>
        )
    }
}


export default RestShowNav