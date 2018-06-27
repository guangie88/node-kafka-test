const TOPIC = "test";

var kafka = require("kafka-node");

const client = new kafka.Client("localhost:9092");
const consumer = new kafka.Consumer(client, [{ topic: TOPIC, partition: 0 }], {
  autoCommit: true
});

consumer.on("message", msg => {
  console.log(msg);
});
