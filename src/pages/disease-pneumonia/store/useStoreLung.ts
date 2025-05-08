import { create } from 'zustand';
interface State {
    isActiveAnimation: boolean;
    setStateAnimation: (value : boolean) => void;
}

const useStoreLung =create <State>((set) => ({
    isActiveAnimation: false,
    setStateAnimation: ( value : boolean ) => set(() => ({isActiveAnimation: value})),
}))

export default useStoreLung;