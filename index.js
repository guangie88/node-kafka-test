const TOPIC = "telco-record";

var kafka = require("kafka-node"),
  Consumer = kafka.Consumer,
  client = new kafka.Client(),
  consumer = new Consumer(client, [{ topic: TOPIC, partition: 1 }], {
    autoCommit: false
  });
