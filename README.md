This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions to Run Code

1. Create new folder (name doesn't matter) and cd into the newly created folder.
2. Run `git clone https://github.com/jyao9/Own-Up.git` in the terminal.
3. Run `npm install` to install any missing packages.
4. Create an .env file outside of the src folder of the cloned repository.
5. In the newly created .env file, add `REACT_APP_OWN_UP_API_KEY={ADD YOUR AUTH TOKEN HERE}`.
6. Run the app in development mode using `npm start` in the terminal.
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries and Frameworks Used

### HTML/CSS

#### react-number-format

React component to format number in an input or as a text. Allows easy addition of a prefix, suffix and thousand separator.

### API Calls

#### Axios

JavaScript library that is used to perform HTTP requests. It supports all modern browsers and is promised-based.

It performs automatic JSON data transformation and has built-in CSRF protection

### Testing

#### Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to test React Components' output. Able to manipulate, traverse, and in some ways simulate runtime given the output. The API is intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

#### axios-mock-adapter

Axios adapter that allows to easily mock requests.

#### redux-mock-store

A mock store for testing Redux async action creators and middleware. The mock store will create an array of dispatched actions which serve as an action log for tests.
