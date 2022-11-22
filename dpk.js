const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  //By default candidate is assigned "0" if no on event is passed
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    //if event is passed and contain the partitionKey, candidate is assigned the partitionKey contained in the event
    if (event.partitionKey) {
      candidate = event.partitionKey;
      //only need to convert the partitionKey passed through event if it is not string
      if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
      } 
    } 
    else     //if event is passed but no partitionKey is passed in the event object, we generate the key
    {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");    //createHash  return a string by default, Hence we need not convert candidate to string in this case.
      console.log(typeof candidate)
    }

    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
   }   
  }

  return candidate;
};