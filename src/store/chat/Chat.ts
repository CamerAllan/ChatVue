const state = {
  chat: { participants: {}, messages: {} }
};

const getters = {
  participants(state: any) {
    return state.chat.participants;
  },
  messages(state: any) {
    return state.chat.messages;
  }
};

const actions = {
  setChat(context: any, chat: any) {
    context.commit("SET_CHAT", chat);
  }
};

const mutations = {
  SET_CHAT(state: any, chat: any) {
    state.chat = chat;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
