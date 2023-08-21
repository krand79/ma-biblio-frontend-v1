import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const default_tokens: {
	access: string;
	refresh: string;
} = {
	access: '',
	refresh: ''
};

const initial_access = browser
	? window.localStorage.getItem('access') ?? default_tokens.access
	: default_tokens.access;
const initial_refresh = browser
	? window.localStorage.getItem('refresh') ?? default_tokens.refresh
	: default_tokens.refresh;

const tokens = writable({
	access: initial_access,
	refresh: initial_refresh
});

const reset = () => {
	tokens.set(default_tokens);
};
const { subscribe, set } = tokens;

tokens.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('access', value.access);
		window.localStorage.setItem('refresh', value.refresh);
	}
});

export default {
	subscribe,
	set,
	reset
};
