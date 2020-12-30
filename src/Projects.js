import nutritionplanner from './images/nutritionplanner_small.png';
import jabe from './images/jabe_small.png';
import poilei from './images/poilei_small.png';
import glowingkids from './images/glowingkids_small.png';
import pscore from './images/pscore_small.png';
import pscoreedu from './images/pscoreedu_small.png';
import munscr from './images/munscr_small.png';
import twotickets from './images/twotickets_small.png';
import './App.css';
import React from 'react'
import PropTypes from "prop-types";
import {Button, ButtonGroup, Card, CardGroup, Carousel, Container, Jumbotron} from 'react-bootstrap';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.cardsGroup = props.cardsGroup;
        this.cards = props.cards;
        this.viewDetail = this.viewDetail.bind(this);
    }
    viewDetail(){

    }
    render() {
        let controls = false;
        let indicators = false;
        if(this.cards.length > 1){
            controls = true;
            indicators = true;
        }
        return (
            <React.Fragment>
                <Jumbotron className="project-group">
                    <h2>{this.cardsGroup}</h2>
                </Jumbotron>
                <CardGroup className="flex-row justify-content-around align-items-start visible-md">
                    {this.cards.map((card, i) => (
                        <Card key={i}>
                            <Card.Img variant="top" src={card.img}/>
                            <div className="card-overlay bottom">
                                <Card.Body>
                                    <Card.Title>{card.cardTitle}</Card.Title>
                                    <Card.Text>{card.cardText}</Card.Text>
                                    <ButtonGroup className="justify-content-between">
                                        <Button variant="loading"
                                                    href={card.buttonWebsite} target="_blank">View Page</Button>
                                        {card.buttonCode ?
                                            <Button variant="loading"
                                                    href={card.buttonCode} target="_blank">View Code</Button> : null}
                                            {/*<Button variant="loading"*/}
                                            {/*        onClick={this.viewDetail}>View Details</Button>*/}
                                    </ButtonGroup>
                                </Card.Body>
                            </div>
                        </Card>)
                    )}
                </CardGroup>
                <Carousel className="hidden-md" controls={controls} indicators={indicators}>
                    {this.cards.map((card, i) => (
                    <Carousel.Item as={Card}>
                        <Card.Img variant="top" src={card.img}/>
                        <div className="card-overlay bottom">
                            <Card.Body>
                                <Card.Title>{card.cardTitle}</Card.Title>
                                <Card.Text>{card.cardText}</Card.Text>
                                <ButtonGroup  className="justify-content-between">
                                    <Button variant="loading"
                                                href={card.buttonWebsite} target="_blank">View Page</Button>
                                    {card.buttonCode ?
                                        <Button variant="loading"
                                                href={card.buttonCode} target="_blank">View Code</Button> : null}
                                        {/*<Button variant="loading"*/}
                                        {/*        onClick={this.viewDetail}>View Details</Button>*/}
                                </ButtonGroup>
                            </Card.Body>
                        </div>
                    </Carousel.Item>)
                    )}
                </Carousel>
            </React.Fragment>
        )
    }
}

Project.propTypes = {
    cardsGroup: PropTypes.string,
    cards: PropTypes.array
};

Project.defaultProps = {
    cardsGroup: '',
    cards: []
};


const data = {
    content: {
        body: [
            {
                cardsGroup: 'Bachelor Thesis',
                cards: [{
                    img: nutritionplanner,
                    cardTitle: "Mealplan Generator",
                    cardText: "A Django website that automatically generates user-specific weekly meal plans (build from scratch).",
                    buttonWebsite: '',
                    buttonCode: 'https://github.com/priska96/nutritionplanner'
                }]
            }, {
                cardsGroup: 'Freelance Projects',
                cards: [{
                    img: jabe,
                    cardTitle: "JABE",
                    cardText: "A plain HTML, CSS and jQuery restaurant website (build from scratch).",
                    buttonWebsite: 'https://jaberestaurant.de',
                    buttonCode: 'https://github.com/priska96/jaberestaurant'
                },
                    {
                        img: poilei,
                        cardTitle: "Poilei",
                        cardText: "A Shopify online shop that sells Italian shoes (maintaining).",
                        buttonWebsite: 'https://poilei.com',
                        buttonCode: ''
                    },
                    {
                        img: glowingkids,
                        cardTitle: "GlowingKids",
                        cardText: "A Shopify online shop that sells clothes for children (maintaining).",
                        buttonWebsite: 'https://glowingkids.de',
                        buttonCode: ''
                    }]
            }, {
                cardsGroup: 'Internship at PSCORE',
                cards: [{
                    img: pscore,
                    cardTitle: "PSCORE",
                    cardText: "A WordPress website about human rights in North Korea and North Korean defectors (maintaining).",
                    buttonWebsite: 'http://pscore.org/home',
                    buttonCode: ''
                },
                    {
                        img: pscoreedu,
                        cardTitle: "PSCORE EDU",
                        cardText: "A WordPress website to provide tutoring classes for North Korean defectors (maintaining).",
                        buttonWebsite: 'http://edu.pscore.org/en/',
                        buttonCode: ''
                    },
                    {
                        img: munscr,
                        cardTitle: "MUNSCR",
                        cardText: "A WordPress website about a Model United Nations about successful Korean reunification (build from scratch).",
                        buttonWebsite: 'http://munscr.com',
                        buttonCode: ''
                    }]
            }
            , {
                cardsGroup: 'TwoTicktes.de GmbH',
                cards: [{
                    img: twotickets,
                    cardTitle: "TwoTickets.de",
                    cardText: "A Django website, that sells memberships to its users. Members can win " +
                        "a pair of tickets for various events (maintaining).",
                    buttonWebsite: 'https://twotickets.de',
                    buttonCode: ''
                },]
            }
            ,

        ]
    }
};

function Projects() {

    return (
        <div className="Projects">
            <h1>My Projects</h1>
            {/*<Container className="d-flex justify-content-center align-items-center aboutme-header">*/}
            {/*    */}
            {/*</Container>*/}
            {data.content.body.map(props => <Project
                cardsGroup={props.cardsGroup}
                cards={props.cards}/>
            )
            }
        </div>
    );
}

export default Projects;