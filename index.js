const state = {
  items: {
    1: {
      id: 1,
      name: 'Чизбургер',
    },
    2: {
      id: 2,
      name: 'Пепперони',
    },
		3: {
      id: 3,
      name: 'Бектур',
    },
		4: {
      id: 4,
      name: 'Эмир',
    },
  },
};

for (const key in state.items) {
	console.log(state.items[key])
}