let Teamdata = [
  {
    id: 1,
    name: "Montreal",
    players: ["Saumik", "Dhruv"],
  },
  {
    id: 2,
    name: "Toronto",
    players: ["Rajesh", "Jay"],
  },
  {
    id: 3,
    name: "Calgary",
    players: ["Sainik", "Davis"],
  },
];

var Store = {
  saveProductList: function (state) {
    Teamdata = state;
  },
  getProductList: function () {
    return Teamdata;
  },
};

module.exports = Store;
