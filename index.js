const TOPIC = "test";

var kafka = require("kafka-node");

// this uses Zookeepers 
const client = new kafka.Client("localhost:2181");
const topics = [{ topic: TOPIC, partition: 0 }]
const options = { autoCommit: true, fetchMaxWaitMs: 500, fetchMaxBytes: 1024*1024, fromOffset: true };

const consumer = new kafka.Consumer(client, topics, options);

console.log(`Waiting for messages for topic '${TOPIC}'...`)

consumer.on("message", msg => {
  console.log(msg);
});

consumer.on("error", err => {
  console.log(`Error: ${msg}`);
});
