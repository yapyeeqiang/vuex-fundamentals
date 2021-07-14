import { createStore } from 'vuex';

export default createStore({
	state: {
		user: 'Yap Yee Qiang',
		events: [],
	},
	mutations: {
		add_event(state, event) {
			state.events.push(event);
		},
	},
	actions: {},
	modules: {},
});
