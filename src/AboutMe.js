import react from './images/logo.svg';
import html from './images/html-5.svg';
import css from './images/css3.svg';
import sass from './images/sass-1.svg';
import javascript from './images/javascript-4.svg';
import jquery from './images/jquery.svg';
import bootstrap from './images/bootstrap-4.svg';
import python from './images/python-3.svg';
import django from './images/django-community.svg';
import wordpress from './images/wordpress-icon.svg';
import me from './images/B1F8E852-FC49-4C36-9C10-3E0C75671B29.JPEG';

import me2 from './images/IMG_63873.png';
import './App.css';
import React from 'react'
import {Button, Col, Container, Image, Jumbotron, Row} from 'react-bootstrap';

function AboutMe() {
    return (
        <div className="AboutMe">
            <Container className="d-flex justify-content-center align-items-center aboutme-header">
                <h1>About Me</h1>
            </Container>
            <Jumbotron className="d-flex flex-column justify-content-center align-items-end img-container2">
                <div className="about">
                    <p>
                        I'm a Berlin based full-stack Web Developer, building easy to use and user-centric webpages.
                        I currently work as a Django developer for TwoTickets.de in Berlin, Germany, which is where my
                        passion for design and development has its roots. During my studies in 2017 I joined the IT
                        team and finished various projects. Wandering between logical back-end problems and creativity
                        needing front-end issues brings me joy and keeps me at ease. I love visuals and animations,
                        what perhaps comes from my hobbies being drawing and painting, as well as the hours spent
                        playing video games and creating RPGs.<br/>
                        Taking first steps in freelance works paved me the way to experience Shopify and WordPress, which
                        are fun to use, if you want something neat and quick. But building everything from scratch and
                        choosing your programming environment is even better!<br/>
                        Being at the beginning of my career I can't wait to learn new technologies and concepts and see,
                        where they take me to.
                    </p>
                </div>
            </Jumbotron>
            {/*<Jumbotron className="d-flex flex-column justify-content-center align-items-end me img-container">*/}
            {/*    <div className="about">*/}
            {/*        <h1>About Me</h1>*/}
            {/*        <p>*/}
            {/*            I'm a Berlin based full-stack Web Developer, building user-centric webpages. I currently work as a*/}
            {/*            Django developer for TwoTickets.de in Berlin, Germany, which is where my passion for design and*/}
            {/*            development has its roots. During my studies in 2017 I joined the IT team and finished various*/}
            {/*            projects. Wandering between logical back-end problems and creativity needing front-end issues*/}
            {/*            brings me joy and keeps me at ease. I love visuals and animations, what perhaps comes from my*/}
            {/*            hobbies*/}
            {/*            being drawing and painting, as well as the hours spent playing and creating video games and RPGs.*/}
            {/*            Taking first steps in freelance works paved me the way to experience Shopify and WordPress, which*/}
            {/*            are*/}
            {/*            fun to use, if you want something neat and quick. But building everything from scratch and choosing*/}
            {/*            your programming environment is even better!*/}
            {/*            Being at the beginning of my career I can't wait to learn new technologies and concepts and see,*/}
            {/*            where*/}
            {/*            they take me to.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</Jumbotron>*/}
            <Container>
                <h2>Skills</h2>
                <Row className="p-3">
                    <Image src={html} className="skills"/>
                    <Image src={css} className="skills"/>
                    <Image src={javascript} className="skills"/>
                </Row>
                <Row className="px-3">
                    <Image src={sass} className="skills"/>
                    <Image src={bootstrap} className="skills"/>
                    <Image src={jquery} className="skills"/>
                </Row>
                <Row className="p-3">
                    <Image src={react} className="skills"/>
                    <Image src={django} className="skills"/>
                    <Image src={python} className="skills"/>
                    <Image src={wordpress} className="skills"/>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;