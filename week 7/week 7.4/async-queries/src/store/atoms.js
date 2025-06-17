import { atom } from 'jotai'
import { loadable } from 'jotai/utils'

export const asyncNotificationsAtom = atom(async () => {
    const response = await fetch("https://sum-server-9unv.onrender.com/notifications");
    const result = await response.json();
    return {
        ...result,
        total: result.network + result.jobs + result.notifications + result.messaging,
    }
})

export const loadableNotificationsAtom = loadable(asyncNotificationsAtom);