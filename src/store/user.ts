import { writable } from 'svelte/store';

const user = {
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
