/**
 * This class handles the inital signup for the website to connect to
 * the borker MQTT. 
 * It takes the <code> this.state </code> and uppdates the <em> host </em>
 * and <em> port </em> by <code> this.setState </code> that derives from
 * {@link Component} interface. 
 * The 2 states are uppdate by an <code> onChange </code> handler that uppdates
 * the value. 
 * Then by clicking the connect button, an <code> onClick </code> event handler
 * sees this event and takes the 2 values and sends them to the client in 
 * {@link ./model/client.js} to connect to the broker.
 * @author Netanel Avraham EKlind
 * @version 2020-03-13 -> implementing the signup code and connection it to the client
 */



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
        window.location.pathname = "/Bong-display"
    }
}

export default Signup;