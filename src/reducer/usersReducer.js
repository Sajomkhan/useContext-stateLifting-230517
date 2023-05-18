export const initialState = {
  users: [
    { id: 1, username: "Jon Doe" },
    { id: 2, username: "Alexander" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
      };

    default:
      break;
  }
};

// action.type = ADD_USER
// action.type = DELETE_USER
// action.type = UPDATE_USER (not created yet)
