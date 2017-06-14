import React from 'react';
import RecipesList from './RecipesList';
import Recipe from './Recipe';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';

class RecipesScreen extends React.Component {
  onShowRecipe = (recipeName) => {
    this.props.navigation.navigate('RecipeDetail', {name: recipeName})
  }

  render() {
    return <RecipesList onShowRecipe={this.onShowRecipe}/>
  }
}

const RecipesNavigator = StackNavigator({
  RecipesList: { 
    screen: RecipesScreen, 
    navigationOptions: {
      title: 'Recipes',
    },
  },
  RecipeDetail: {
    screen: Recipe,
    navigationOptions: {
      title: 'Recipe',
    },
  },
});



export default class App extends React.Component {

  render() {
    return (
        <RecipesNavigator/>
    );
  }
}


