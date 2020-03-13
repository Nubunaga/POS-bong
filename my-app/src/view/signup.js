import React, { Component } from 'react';
import Paho from '../model/client.js';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            host: '',
            port: '',
        }
    }
    /**
     * Is triggered when there is a change to the host input, changed on 
     * state.
     * @param {Event information} event 
     */
    host(event) {
        this.setState({
            ...this.state,
            host: event.target.value
        })
    }
    /**
     * Is triggered when there is a change to the port input, changed on 
     * state.
     * @param {Event information} event 
     */
    port(event) {
        this.setState({
            ...this.state,
            port: event.target.value
        })
    }

    /**
     * Render funktion that renders the view for the user. This render handles the 
     * connection to the server.
     */
    render() {
        return (<div>

            <label for="host">Host:</label>
            <input type="text" id="Host" onChange={this.host.bind(this)}></input>
            <label for="Port">Port:</label>
            <input type="text" id="Port" onChange={this.port.bind(this)}></input>
            <button id="signin" onClick={() => this.connect()}>Connect
            </button>
        </div>
        );
    }

    /**
     * This will call the Paho Mqtt server with the host and port nr. 
     */
    connect = () => {
        Paho(this.state.host, this.state.port);
    }
}

export default Signup;