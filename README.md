This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

You need to setup a `.env.local` file to provide your **GIPHY API** key.

You can find a example in `.env.local.example` as well as down bellow

    REACT_APP_GIPHY_TOKEN='some_cool_api_key'
    REACT_APP_GIPHY_ENDPOINT='https://api.giphy.com/'
    REACT_APP_GIPHY_PROXY_ENDPOINT = '/giphy'

## TODO

- [ ] More E2E tests (Pagination)
- [ ] More unit test
- [ ] Fix resize behavior
- [ ] Add gestures for pages
- [ ] Test in iOS devices
- [ ] Support for IE11 (Possible? GIPHY doesn't support it)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:e2e`

Launches the test runner **Cypress** in headless mode.<br />
**App needs to be started in order to cypress to work**

### `yarn test:e2e:dashboard`

Launches **Cypress**.<br />
**App needs to be started in order to cypress to work**

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
