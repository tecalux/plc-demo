const { Controller, Tag, TagList, Structure } = require("st-ethernet-ip");

const PLC = new Controller();

PLC.connect("100.100.100.101", 0).then(async () => {
  const string = PLC.newTag("string", null, null, 1, 2);
  await PLC.readTag(string);

  console.log(string.value[0]);

  string.value[0] = "Mario";
  await PLC.writeTag(string);

  await PLC.readTag(string);
  console.log(string);
});
