import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import App_page2 from "./app_page2";

if (document.querySelector('#root')) {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
};

if (document.querySelector('#page2')) {
    ReactDOM.render(
        <App_page2/>,
        document.getElementById('page2')
    )
};




if (module.hot) {
  module.hot.accept();
}
