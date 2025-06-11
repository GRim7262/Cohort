import { atom } from 'jotai'

export const networkAtom = atom(12);

export const jobsAtom = atom(0);

export const messagingAtom = atom(0);

export const notificationsAtom = atom(12);

export const totalNotificationAtom = atom((get) =>
    get(networkAtom) + get(jobsAtom) + get(messagingAtom) + get(notificationsAtom))