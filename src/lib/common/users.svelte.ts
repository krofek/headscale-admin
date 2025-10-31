import { App } from '../States.svelte';
import type { User } from './types';

export function prepareUsers() {
    return App.users.value.map((u: User) => {
		return u.email ? u.email : u.name + "@";
	}).toSorted()
}