import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CustomTextInput extends React.Component {
  textInput = React.createRef();

  focusTextInput = () => {
    // Explicitly focus the text input
    // using the raw DOM API
    // Note: we're accessing "current"
    // to get the DOM node
    this.textInput.current.focus();
  };

  render() {
    // tell React that we want
    // to associate the <input> ref
    // with the `textInput` that
    // we created in the constructor
    return (
      <div style={{margin: '60px'}}>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}


ReactDOM.render(
  <CustomTextInput/>,
  document.getElementById('root')
);

