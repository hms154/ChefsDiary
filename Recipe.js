import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Slider
} from "react-native";
import { Card } from "react-native-elements";
import IngredientsList from "./IngredientsList"
import InstructionsList from "./InstructionsList"
import recipes from "./Recipes"

import styles from "./styles";

export default class Recipe extends React.Component {
  static defaultProps = {
    servings: 8
  };

  constructor(props) {
    super(props);

    this.state = {
      servings: props.servings,
    };
  }

  render() {
    recipeName = this.props.navigation.state.params.name
    var recipeDetails = recipes.Recipes[recipeName]
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card
            containerStyle={styles.card}
            title={recipeDetails.name}
            image={{uri: recipeDetails.image}}
          />
          <Card containerStyle={styles.card}>
            <Text>Servings: {this.state.servings}</Text>
            <Slider
              minimumValue={2}
              maximumValue={20}
              step={2}
              value={this.props.servings}
              onValueChange={value => this.setState({ servings: value })}
            />
          </Card>
          <IngredientsList servings={this.state.servings} recipes={recipeDetails}/>
          <InstructionsList recipes={recipeDetails} />
        </ScrollView>
      </View>
    );
  }
}