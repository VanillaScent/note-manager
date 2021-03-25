import React, { Component, Fragment } from 'react';
import Api from '../../api';

function Review(props){
    
    return (<Fragment>
        <div className="card card-body">
            <div className="card-title">{props.title}</div>
            <p>
                {props.content}
            </p>
            <div className="card-footer">
                {new Date(props.date_created).toUTCString()}
            </div>
        </div>
    </Fragment>);
    
}

export class Companies extends Component {

    constructor(props) {
        super(props)
    
        this.getReviews = this.getReviews.bind(this);

        this.state = {
            reviews: [],
        }
    }

    getReviews = () => {
        Api.get('/api/reviews/').then(res => {
            const reviews = res.data;
            this.setState({reviews: reviews});
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
       this.getReviews();
    }
    
    render(){
        return (
            <ul>
                { this.state.reviews.map(review => <Review
                     title={review.title}
                     content={review.content}
                     date_created={review.date_created}
                     date_modified={review.date_modified}
                    />)}
            </ul>
        );
    }
}