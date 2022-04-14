export const userReducer = {
  login(state, { payload }) {
    state.file = payload.file;
    state.name = payload.name;
    state.email = payload.email;
    state.phone = payload.phone;
    state.password = payload.password;
    state.isAuth = true;
  },
  logout(state) {
    state.isAuth = false;
    localStorage.clear();
  },
};
