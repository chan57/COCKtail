import axiosClient from '../axiosClient';

export function searchCkoktails({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedCkoktails', data.drinks)
    })
}

export function searchCkoktailsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setCkoktailsByLetter', data.drinks)
    })
}

export function searchCkoktailsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setCkoktailsByIngredients', data.drinks)
    })
}