import React from 'react';
import {
  View,
  ScrollView
} from "react-native";
import { Card, List, ListItem } from "react-native-elements";
import styles from "./styles";

export default class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        recipes: [
            "Murgh Mahkani (Butter Chicken)",
            "Pav Bhaji",
            "Palak Paneer",
            "Kadhai Paneer",
            "Goat Curry",
            "Egg Curry",
            "Kheema Mutter",
            "Murgh Saagawala",
            "Seekh kebab",
            "Chicken Korma",
            "Chicken Rezala"
        ]
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
        {this.state.recipes.map((recipe, i) => {
          return (
            <ListItem
              key={uuidV1()}
              title={recipe} 
              onPress={this.props.onShowRecipe}
            />
          );
        })}
      </List>
    );
  }

}