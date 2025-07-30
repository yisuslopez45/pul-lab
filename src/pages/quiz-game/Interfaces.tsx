// --- DEFINICIONES DE TIPOS (TYPESCRIPT) ---


// Estado general del juego, puntuación y pregunta actual.
export interface GameState {
    score: number;
    currentQuestionIndex: number;
    status: 'not-started' | 'playing' | 'feedback' | 'gameOver';
    feedback: string;
}

// Estado de un proyectil.
export interface ProjectileState {
    id: number;
    position: [number, number, number];
}

// Estado de un bloque de respuesta.
export interface AnswerState {
    id: string;
    option: string;
    isCorrect: boolean;
    position: [number, number, number];
}

// Props para  componente de bloque de respuesta.
export interface AnswerObjectProps {
    position: [number, number, number];
    option: string;
    isCorrect: boolean;
    onHit: (isCorrect: boolean) => void;
    onMiss: () => void; 
}

// Props para el componente proyectil.
export interface ProjectileProps {
    position: [number, number, number];
    onRemove: () => void; 
}

// Props para  jugador.
export interface CannonProps {
    onHitByAnswer: () => void;
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}
