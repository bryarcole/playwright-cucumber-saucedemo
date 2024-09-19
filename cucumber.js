module.exports = {
    default: {
      require: [
        'features/**/*.ts',  // Load step definitions
        'features/support/world.ts',  // Load world
      ],
      format: ['progress'],
      publishQuiet: true,
      paths: ['features/**/*.feature'],
      requireModule: ['ts-node/register'],  // Compile TypeScript at runtime
    }
  };
  