import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}',
    setupNodeEvents(on, config) {
      // Implementa cualquier evento necesario aquí
    },
  },
  component: {
    specPattern: 'cypress/component/**/*.spec.{js,ts}',
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      // Implementa cualquier evento necesario aquí
    },
  },
});
