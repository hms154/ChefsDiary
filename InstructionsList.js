import React from "react";
import { Card, List, ListItem } from "react-native-elements";
import styles from "./styles";

export default class InstructionsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.recipes
  }

  render() {
    return (
      <Card containerStyle={styles.card} title="Preparation">
        {this.addInstructions()}
      </Card>
    );
  }

  addInstructions() {
    const uuidV1 = require("uuid/v1");
    return (
      <List containerStyle={styles.listItem}>
        {this.state.steps.map((step, i) => {
          return <ListItem key={uuidV1()} title={step} />;
        })}
      </List>
    );
  }
}