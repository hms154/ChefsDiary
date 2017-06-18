import React from 'react';
import {
  View,
  ScrollView
} from "react-native";
import { Card, List, ListItem } from "react-native-elements";
import styles from "./styles";
import recipes from "./Recipes"

export default class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        recipes: Object.keys(recipes.Recipes)
    }
  }

  render() {
    let pic = require("./Spices.jpg")
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card containerStyle={styles.card} image={pic}>
            {this.AddRecipes()}
          </Card>
        </ScrollView>
      </View>
    );
  }

  AddRecipes() {
    const uuidV1 = require("uuid/v1");
    return (
      <List containerStyle={styles.listItem}>
        {this.state.recipes.map((recipeName, i) => {
          return (
            <ListItem
              key={uuidV1()}
              title={recipeName}
              onPress={() => this.props.onShowRecipe(recipeName)}
            />
          );
        })}
      </List>
    );
  }

}