const Mutation = {
  createUser(parents, args, ctx, info) {
    return {
      name: args.name,
      email: args.email
    };
  }
};

module.exports = Mutation;
