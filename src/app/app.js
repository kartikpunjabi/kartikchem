import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './root';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
function App() {
    return (
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>, document.getElementById('kartikchemapp'));
