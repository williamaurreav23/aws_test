import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import configureStore from "./store";
import { APIGatewayProxyHandler } from 'aws-lambda';


import './styles.scss';

require("./favicon.ico");
const store = configureStore();

export const handler: APIGatewayProxyHandler = async (event, context) => {
  try {
    // Convert API Gateway event to your app's format
    const result = await app.handleRequest(event);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

ReactDOM.render(
  <Provider store={store}>

         <Router>{routes}</Router>

  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
