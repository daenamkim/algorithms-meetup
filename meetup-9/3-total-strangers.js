function getTotalStrangers(people) {
  var totalStrangers = {};

  for (var keyMe in people) {
    var strangers = [];

    for (var keyOther in people) {
      if (keyMe !== keyOther && people[keyOther].indexOf(keyMe) < 0) {
        strangers.push(keyOther);
      }
    }
    totalStrangers[keyMe] = strangers;
  }

  return totalStrangers;
}

const input = {
  alice: ["carol"],
  bob: ["dave"],
  carol: ["alice"],
  dave: ["bob"]
};

console.log(getTotalStrangers(input));
