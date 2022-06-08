//Connection Manager automagically reconnects to controller that have lost connection. Scanner auto initiated.

const { ControllerManager } = require("st-ethernet-ip");

const cm = new ControllerManager();

//addController(ipAddress, slot = 0, rpi = 100, connected = true, retrySP = 3000, opts = {})
const cont = cm.addController("100.100.100.101");

cont.connect();

//addTag(tagname, program = null, arrayDims = 0, arraySize = 0x01)
cont.addTag("IF_OMO1_TO_TX_REAL[0]");

cont.on("TagInit", tag => {
  console.log(tag.name, " init to ", tag.value);
});

cont.on("TagChanged", (tag, prevValue) => {
  console.log(tag.name, " changed from ", prevValue, " => ", tag.value);
});

cont.on("error", e => {
  console.log(e);
});
