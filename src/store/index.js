import { createStore } from 'vuex';
import EventService from '@/services/EventService';

export default createStore({
	state: {
		user: 'Yap Yee Qiang',
		events: [],
		event: {},
	},
	mutations: {
		ADD_EVENT(state, event) {
			state.events.push(event);
		},
		SET_EVENTS(state, events) {
			state.events = events;
		},
		SET_EVENT(state, event) {
			state.event = event;
		},
	},
	actions: {
		createEvent({ commit }, event) {
			EventService.postEvent(event)
				.then(() => {
					commit('ADD_EVENT', event);
				})
				.catch((err) => console.log('Error is: ', err));
		},
		fetchEvents({ commit }) {
			EventService.getEvents()
				.then((res) => {
					commit('SET_EVENTS', res.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		fetchEvent({ commit, state }, id) {
			const existingEvent = state.events.find((event) => event.id === id);

			if (existingEvent) {
				commit('SET_EVENT', existingEvent);
			} else {
				EventService.getEvent(id)
					.then((res) => {
						commit('SET_EVENT', res.data);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
	},
	modules: {},
});
