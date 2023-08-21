import { writable } from 'svelte/store';

const user = {
	id: '',
	name: '',
	email: ''
};

const { subscribe, set } = writable(user);

const reset = () => {
	set(user);
};

export default {
	subscribe,
	set,
	reset
};
