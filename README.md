# Assignment 03 - BEJAMAS Photography Shop (React)

This is a React.js implementation of the BEJAMAS Photography Shop from Assignment 02.

## Features

- **Product Gallery**: Browse through a collection of premium photography
- **Shopping Cart**: Add products to cart with persistent storage (localStorage)
- **Filters**: Filter products by category and price range
- **Sorting**: Sort products by price, name, or date
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Featured Product**: Hero section with "Photo of the day"
- **Product Recommendations**: "People also buy" section

## Technologies Used

- React.js
- CSS3
- LocalStorage for cart persistence
- React Hooks (useState, useEffect, useMemo, useCallback)

## Live Demo

**View Live Site**: [https://finney06.github.io/assignment-03](https://finney06.github.io/assignment-03)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Finney06/assignment-03.git
cd assignment-03
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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
