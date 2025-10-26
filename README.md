# Assignment 03 - BEJAMAS Photography Shop (React)# Getting Started with Create React App



This is a React.js implementation of the BEJAMAS Photography Shop from Assignment 02.This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Features## Available Scripts



- **Product Gallery**: Browse through a collection of premium photographyIn the project directory, you can run:

- **Shopping Cart**: Add products to cart with persistent storage (localStorage)

- **Filters**: Filter products by category and price range### `npm start`

- **Sorting**: Sort products by price, name, or date

- **Responsive Design**: Works on desktop, tablet, and mobile devicesRuns the app in the development mode.\

- **Featured Product**: Hero section with "Photo of the day"Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- **Product Recommendations**: "People also buy" section

The page will reload when you make changes.\

## Technologies UsedYou may also see any lint errors in the console.



- React.js### `npm test`

- CSS3

- LocalStorage for cart persistenceLaunches the test runner in the interactive watch mode.\

- React Hooks (useState, useEffect, useMemo, useCallback)See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## Getting Started### `npm run build`



### PrerequisitesBuilds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

- Node.js (v14 or higher)

- npm or yarnThe build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

### Installation

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

1. Clone the repository:

```bash### `npm run eject`

git clone https://github.com/Finney06/assignment-03.git

cd assignment-03**Note: this is a one-way operation. Once you `eject`, you can't go back!**

```

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

2. Install dependencies:

```bashInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

npm install

```You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



3. Start the development server:## Learn More

```bash

npm startYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

```

To learn React, check out the [React documentation](https://reactjs.org/).

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Code Splitting

## Available Scripts

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### `npm start`

Runs the app in development mode.### Analyzing the Bundle Size



### `npm test`This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

Launches the test runner in interactive watch mode.

### Making a Progressive Web App

### `npm run build`

Builds the app for production to the `build` folder.This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)



## Project Structure### Advanced Configuration



```This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

src/

├── components/### Deployment

│   ├── Header.js

│   ├── ProductDetail.jsThis section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

│   ├── Gallery.js

│   ├── ProductCard.js### `npm run build` fails to minify

│   ├── Filters.js

│   ├── Pagination.jsThis section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

│   └── CartModal.js
├── assets/
│   ├── icons/
│   └── images/
├── App.js
├── App.css
└── index.js
```

## Features Breakdown

### Shopping Cart
- Add products to cart
- View cart items in a sidebar modal
- Remove individual items
- Clear entire cart
- Cart count badge on header
- Persistent cart using localStorage

### Product Filtering
- Filter by category (People, Premium, Pets, Food, Landmarks, Cities, Nature)
- Filter by price range (< $20, $20-$100, $100-$200, > $200)
- Multiple filters can be applied simultaneously

### Product Sorting
- Sort by price
- Sort by name
- Sort by date

### Pagination
- Navigate through multiple pages of products
- Smooth scroll to top on page change

## Author

Finney06

## License

This project is created as part of an academic assignment.
