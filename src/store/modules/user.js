import { login, logout } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';

const state = {
  token: getToken(),
  userInfo: {}
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { phone, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ phone: phone.trim(), password })
        .then(response => {
          const { data } = response;
          commit('SET_TOKEN', data.token);
          commit('SET_USER_INFO', data);
          setToken(data.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          removeToken();

          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
