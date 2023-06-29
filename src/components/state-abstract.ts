import {TListener} from "../types/types.ts";

class StateAbstract<T> {
    protected listeners: TListener<T>[] = [];

    addListener(listenerFn: TListener<T>) {
        this.listeners.push(listenerFn);
    }
}

export default StateAbstract;
