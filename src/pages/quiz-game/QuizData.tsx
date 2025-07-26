
import { QuizQuestion } from './Interfaces.tsx'; 

// Preguntas del quiz.
export const quizData: QuizQuestion[] = [
    {
        question: "¿Qué enfermedad es causada por la bacteria Mycobacterium tuberculosis?",
        options: ["Asma", "Tuberculosis", "Cáncer", "Neumonía"],
        correctAnswer: "Tuberculosis",
    },
    {
        question: "¿Cuál es un tratamiento común para un ataque de asma agudo?",
        options: ["Antibióticos", "Descanso", "Inhalador", "Quimioterapia"],
        correctAnswer: "Inhalador",
    },
    {
        question: "La inflamación de los sacos de aire en uno o ambos pulmones se conoce como:",
        options: ["Neumonía", "Tuberculosis", "Asma", "Cáncer"],
        correctAnswer: "Neumonía",
    },
    {
        question: "¿Cuál es el principal factor de riesgo para el cáncer de pulmón?",
        options: ["Genética", "Dieta", "Fumar", "Virus"],
        correctAnswer: "Fumar",
    },
];