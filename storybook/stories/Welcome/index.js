import React from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  showApp = (event) => {
    const {showApp} = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <div style={this.styles.wrapper}>
        <p style={this.styles.header}>Welcome to React Native Storybook</p>
        <p style={this.styles.content}>
          This is a UI Component development environment for your React Native
          app. Here you can display and interact with your UI components as
          stories. A story is a single state of one or more UI components. You
          can have as many stories as you want. In other words a story is like a
          visual test case.
        </p>
        <p style={this.styles.content}>
          We have added some stories inside the "storybook/stories" directory
          for examples. Try editing the "storybook/stories/Welcome.js" file to
          edit this message.
        </p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
