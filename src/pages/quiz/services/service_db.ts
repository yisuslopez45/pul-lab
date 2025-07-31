import { database } from '../../../../firebase.config';
import { ref, push, set, get, remove } from 'firebase/database';
import { type User } from 'firebase/auth';
import { GameState } from '../../quiz-game/Interfaces';



interface Params extends GameState {
    user: User,
    totalErrors : number
}

interface Response extends GameState {
    totalErrors : number
}


export const clearPartialQuiz = async (user: User): Promise<void> => {
    const refDb = ref(database, `users/${user.uid}/progreso_parcial`);
    await remove(refDb);
};

export const saveQuiz = async (params: Params): Promise<boolean> => {
    const refDb = push(ref(database, `users/${params.user.uid}/intentos`));

    try {
        await set(refDb, {
            created_at: Date.now(),
            score: params.score,
            lastQuestionIndex: params.currentQuestionIndex,
            status: params.status,
            totalErrors: params.totalErrors,
            name_user : params.user.displayName,
            photo_user :  params.user.photoURL,
        });
        clearPartialQuiz(params.user)
        return true;
    } catch (error) {
        return false;
    }    
}


export const savePartialQuiz = async (params: Params): Promise<boolean> => {
    const refDb = ref(database, `users/${params.user.uid}/progreso_parcial`);

    try {
        await set(refDb, {
            updated_at: Date.now(),
            score: params.score,
            currentQuestionIndex: params.currentQuestionIndex,
            status: params.status,
            feedback : params.feedback,
            totalErrors: params.totalErrors,
            name_user: params.user.displayName,
            photo_user: params.user.photoURL,
        });
        return true;
    } catch (error) {
        return false;
    }
};


export const loadPartialQuiz = async (user: User): Promise<Response | null> => {
    const refDb = ref(database, `users/${user.uid}/progreso_parcial`);

    try {
        const snapshot = await get(refDb);
        if (snapshot.exists()) {
            const data = snapshot.val();
            return {
                score: data.score,
                currentQuestionIndex: data.currentQuestionIndex,
                status: data.status,
                totalErrors: data.totalErrors,
                feedback : data.feedback
            };
        }
        return null;
    } catch (error) {
        return null;
    }
};



// // OBTIENE TODOS LOS QUIZ
export type Quiz = {
  created_at: number;
  score: number;
  totalErrors: number;
  name_user?: string;
  photo_user?: string;
};

export type UserAttempt = {
  userId: string;
  attempts: {
    id: string;
    data: Quiz;
  }[];
};



export const getAllUsersWithAttempts = async (): Promise<UserAttempt[]> => {
  const refDb = ref(database, 'users');
  const snapshot = await get(refDb);

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  return Object.entries(data).map(([userId, userData]) => {
    const attemptsData = (userData as any).intentos ?? {};

    const attempts = Object.entries(attemptsData).map(([attemptId, value]) => ({
      id: attemptId,
      data: value as Quiz,
    }));

    return {
      userId,
      attempts,
    };
  });
};


// // obtengo la informacion por usuario en sesion



export const getAttemptsByCurrentUser = async (user: User): Promise<Quiz[]> => {
  const refDb = ref(database, `users/${user.uid}/intentos`);
  const snapshot = await get(refDb);

  if (!snapshot.exists()) return [];

  const data = snapshot.val();
  const attempts: Quiz[] = Object.entries(data).map(([_, value]) => value as Quiz);
  return attempts.sort((a, b) => b.created_at - a.created_at);
};
