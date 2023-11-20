export function setSearchedCkoktails(state, drink) {
  state.searchedCkoktail = drink || []
}
export function setCkoktailsByLetter(state, drink) {
  state.ckoktailByLetter = drink || []
}
export function setCkoktailsByIngredients(state, drink) {
  state.ckoktailByIngredient = drink || []
}
export function setIngredient(state, drink) {
  state.ingredient = drink
}