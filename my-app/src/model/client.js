import Paho from 'paho-mqtt'
class Connect {

    constructor() {
        this.client = null;
        this.topic = 'kistan/kvitto/report';
    }
    startConnect(host, port) {
        let clientID = "clientID-" + parseInt(Math.random() * 100);

        console.log("Connecting to: " + host + " on Port: " + port + " Client id: " + this.clientID)
        // Initialize new Paho client connection
        this.client = new Paho.Client(host, Number(port), clientID);

        // Set callback handlers
        this.client.onConnectionLost = this.onConnectionLost;
        this.client.onMessageArrived = onMessageArrived;

        // Connect the client, if successful, call onConnect function
        this.client.connect({
            onSuccess: this.onConnect
        });
    }

    // Called when the client connects
    onConnect = () => {
        console.log("Subsribe to: " + this.topic);
        console.log(this.client.isConnected())

        // Subscribe to the requested topic
        this.client.subscribe(this.topic);
    }

    // Called when the client loses its connection
    onConnectionLost = (responseObject) => {
        console.log("connection loss")
        if (responseObject.errorCode !== 0) {
            console.log("error " + this.responseObject)
        }
    }

    // Called when a message arrives
    onMessageArrived(message) {
        console.log("onMessageArrived: " + message.payloadString);
        console.log("Topic: " + message.destinationName + " | " + message.payloadString)
    }

    // Called when the disconnection button is pressed
    startDisconnect() {
        this.client.disconnect();
        console.log("disconnect")
    }

    // Parses the JSON file into an object to be used
    parseJSON(message) {
        return JSON.parse(message);
    }
}

function onMessageArrived(message) {
    console.log("onMessageArrived: " + message.payloadString);
    console.log("Topic: " + message.destinationName + " | " + message.payloadString)
}

const client = new Connect();

export default client;