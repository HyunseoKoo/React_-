// 1. reducer 비즈니스 로직 분리

export const addMenuReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MENU':
      return [
        ...state,
        { id: state.length + 1, name: action.payload.name, price: action.payload.price },
      ];
    case 'DELETE_MENU':
      // const selectedItem = state[action.menuIndex];
      return state.filter((item) => item.id !== action.payload.id);
  }
};
