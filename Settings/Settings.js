import React, { Component } from "react";
import diets from "../data/diets";
import {
  StyleSheet,
  Text,
  Picker,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  View
} from "react-native";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = { diet: null, allergens: [] };
  }

  saveHandler = e => {
    return true;
  };

  cancelHandler = e => {
    return false;
  };

  toggleAllergen = e => {
    this.setState({ allergens: [] });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageHeading}>
          <Text style={styles.pageHeadingText}>Settings:</Text>
        </View>
        <ScrollView style={styles.mainScroller}>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Diet</Text>
            <Text>Choose the diet that best describes yours:</Text>
            <Picker
              selectedValue={this.state.diet}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ diet: itemValue })
              }
              mode="dropdown"
            >
              {Object.keys(diets)
                .sort()
                .map(diet => {
                  return (
                    <Picker.Item
                      key="diet"
                      value={diet}
                      label={diet.charAt(0).toUpperCase() + diet.slice(1)}
                    />
                  );
                })}
            </Picker>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Allergies</Text>
            <ScrollView>
              <FlatList
                data={[
                  { key: "celery" },
                  { key: "crustaceans" },
                  { key: "eggs" },
                  { key: "fish" },
                  { key: "lupin" },
                  { key: "milk" },
                  { key: "molluscs" },
                  { key: "mustard" },
                  { key: "peanuts" },
                  { key: "sesame" },
                  { key: "sulfer-dioxide" },
                  { key: "soya" },
                  { key: "tree-nuts" },
                  { key: "wheat" }
                ]}
                renderItem={({ item }) => (
                  <Text
                    style={styles.allergenItem}
                    onPress={this.toggleAllergen}
                  >
                    {item.key}
                  </Text>
                )}
              />
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.controls}>
          <Button title="Cancel" onPress={this.cancelHandler} />
          <Button title="Save" onPress={this.saveHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  pageHeading: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
    paddingBottom: 10
  },
  pageHeadingText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mainScroller: {},
  section: {
    flexDirection: "column",
    marginTop: 10,
    paddingBottom: 10
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: "100%"
  },
  allergenItem: {
    padding: 5,
    margin: 3,
    backgroundColor: "lightgray",
    borderRadius: 5
  },
  controls: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  }
});
