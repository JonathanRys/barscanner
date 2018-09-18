export default (diets = {
  omnivore: [],
  pescatarian: ["red_meat", "pork"],
  vegetarian: ["red_meat", "pork", "fish", "poultry", "shellfish", "insects"],
  "ovo-lacto-vegetarian": [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet"
  ],
  "ovo-vegetarian": [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "dairy"
  ],
  "lacto-vegetarian": [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "eggs"
  ],
  vegan: [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "eggs",
    "dairy",
    "non_vegan"
  ],
  kashrut: ["pork"],
  halal: ["pork"],
  jain: [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "eggs"
  ]
});
