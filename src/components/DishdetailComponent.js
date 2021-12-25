import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';

class Dishdetail extends Component {
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {
            const dishComments = comments.map((comment) => {
                return (
                    <ListGroupItem className="border-0 pl-0" key={comment.id}>
                        <div className="mb-2">{comment.comment}</div>
                        <div>-- {comment.author} {comment.date}</div>
                    </ListGroupItem>
                )
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ListGroup>
                        {dishComments}
                    </ListGroup>
                </div>
            )
        }
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.props.dish && this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default Dishdetail