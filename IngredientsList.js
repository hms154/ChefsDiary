import React from 'react';
import { Card, List, ListItem } from "react-native-elements";
import styles from "./styles";

export default class IngredientsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.recipes
  }

  render() {
    return (
      <Card containerStyle={styles.card} title="Ingredients">
        {this.addIngredients()}
      </Card>
    );
  }

  addIngredients() {
    const uuidV1 = require("uuid/v1");
    return (
      <List containerStyle={styles.listItem}>
        {this.state.ingredients.map((ingredient, i) => {
          return (
            <ListItem
              hideChevron={true}
              key={uuidV1()}
              title={this.getIngredientText(ingredient, this.props.servings)}
            />
          );
        })}
      </List>
    );
  }

  getIngredientText(ingredient, servings) {
    return (
      Number(ingredient.quantityPerServing * servings).toFixed(1) +
      " " +
      ingredient.unit +
      ", " +
      ingredient.name
    );
  }

}