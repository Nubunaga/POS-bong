/**
 * This view will be the main display for the client to use.
 * This will display all the courses that has been ordered in so that a
 * server can easly be informed regarding the dish to be serverd next.
 * The individual dishes will be formated as followed
 * [ <dish> , <spec> , <amount> ] and will be divided into sektions of
 * the display so that they are easly identifiable by just looking at the
 * screen.
 * @author Netanel Avraham Eklind
 * @version 2020-03-13 -> implementing the display code basics.
 */
import React from 'react';
import { Component } from "react";


class Display extends Component {
    constructor(porp) {
        super(porp)
        this.state = {
            food: []
        }
    }

    componentDidMount() {
        console.log(this.props.model);
        this.props.model.addObserver(this);
    }


    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }
    render() {
        return (
            <h1> this is the display screen! Not yet implemented!</h1>
        );
    }


    update(payload) {
        this.setState({
            ...this.state,
            food: payload
        })
    }
}

export default Display;

