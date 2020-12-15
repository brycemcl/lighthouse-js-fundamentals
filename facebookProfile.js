let facebookProfile = {
  name: "",
  friends: 0,
  messages: [],
  postMessage: function (message) {
    this.messages.push(message);
  },
  deleteMessage: function (index) {
    this.messages.splice(index, 1);
  },
  addFriend: function () {
    this.friends = this.friends + 1;
  },
  removeFriend: function () {
    this.friends = this.friends - 1;
  },
};

console.table(facebookProfile);
facebookProfile.name = "Bryce McLachlan";
console.table(facebookProfile);
facebookProfile.addFriend();
console.table(facebookProfile);
facebookProfile.removeFriend();
console.table(facebookProfile);