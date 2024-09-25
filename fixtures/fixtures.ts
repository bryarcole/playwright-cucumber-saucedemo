
export const testData = {
    users: {
      validUser: {
        username: 'standard_user',
        password: 'secret_sauce',
      },
      invalidUser: {
        username: 'invalid_user',
        password: 'wrong_password',
      },
      lockedOutUser: {
        username: 'locked_out_user',
        password: 'secret_sauce',
      },
      problemUser: {
        username: 'problem_user',
        password: 'secret_sauce',
      },
    },
    products: {
      product1: {
        name: 'Sauce Labs Backpack',
        id: 'sauce-labs-backpack', // Can be the product ID used in the web app
      },
      product2: {
        name: 'Sauce Labs Bike Light',
        id: 'sauce-labs-bike-light',
      },
    },
    checkoutInfo: {
      firstName: 'John',
      lastName: 'Doe',
      postalCode: '12345',
    },
  };
  