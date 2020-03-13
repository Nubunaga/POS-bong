import Paho from 'paho-mqtt'

var client;

const startConnect = (host, port) => {
    let clientID = "clientID-" + parseInt(Math.random() * 100);
    console.log(clientID)
    console.log("Connecting to: " + host + " on Port: " + port + " Client id: " + clientID)
    // Initialize new Paho client connection
    client = new Paho.Client(host, Number(port), clientID);

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // Connect the client, if successful, call onConnect function
    client.connect({
        onSuccess: onConnect
    });
}

// Called when the client connects
const onConnect = () => {
    let topic = 'kistan/kvitto/report';
    console.log("Subsribe to: " + topic);

    // Subscribe to the requested topic
    client.subscribe(topic);

}

// Called when the client loses its connection
const onConnectionLost = (responseObject) => {
    console.log("connection loss")
    console.log(responseObject)
    if (responseObject.errorCode !== 0) {
        console.log("error " + this.responseObject)
    }
}

// Called when a message arrives
const onMessageArrived = (message) => {
    console.log("onMessageArrived: " + message.payloadString);
    console.log("Topic: " + message.destinationName + " | " + message.payloadString)
}

// Called when the disconnection button is pressed
const startDisconnect = () => {
    client.disconnect();
    console.log("disconnect")
}

// Parses the JSON file into an object to be used
const parseJSON = (message) => {
    return JSON.parse(message);
}
export default startConnect;