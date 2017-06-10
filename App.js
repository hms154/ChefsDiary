import React from 'react';
import Recipe from './Recipe';

export default class App extends React.Component {
  render() {
    return (
      <Recipe servings={8}/>
    );
  }
}

