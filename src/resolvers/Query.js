const Query = {
  users(parent, args, ctx, info) {
    return [
      { name: "Peder Garberg", email: "pgarberg@gmail.com" },
      { name: "Beckett Samuel Garberg", email: "quantum_pupper@gmail.com" }
    ];
  }
};

module.exports = Query;
