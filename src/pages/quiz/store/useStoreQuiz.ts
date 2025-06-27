import { create } from "zustand";

interface Item {
  question: string;
  correct: string;
  selected: string;
}

interface State {
  indexQuestion: number | null;
  questions: Item[];
  setStateResponse: (value: string, index: number) => void;
  setIndexQuestion: (index: number) => void;
  getQuestion: (index: number) => Item;
  resetStore: () => void;
}

const initialQuestions = [
  {
    question: "Seleccione la traquea",
    correct: "Trachea",
    selected: "",
  },
  {
    question: "Seleccione el pulmon",
    correct: "Lung",
    selected: "",
  },
  {
    question: "Seleccione el diafragma",
    correct: "Diaphragm",
    selected: "",
  },
];

const useStoreQuiz = create<State>((set, get) => ({
  indexQuestion: null,
  questions: [...initialQuestions],

  getQuestion: (index: number) => {
    const items = [...get().questions];
    return items[index];
  },

  setStateResponse: (value: string, index: number) => {
    const updated = [...get().questions];
    updated[index] = { ...updated[index], selected: value };
    set({ questions: updated });
  },

  setIndexQuestion(index: number) {
    set({ indexQuestion: index });
  },

  resetStore() {
    set({
      indexQuestion: null,
      questions: [...initialQuestions],
    });
  },
}));

export default useStoreQuiz;
