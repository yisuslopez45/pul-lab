import { database } from '../../../../firebase.config';
import { ref, push, set, get } from 'firebase/database';
import { type User } from 'firebase/auth';

type Answers = {
    [preguntaId: string]: boolean;
}

interface Params {
    user: User;
    qualification: number;
    answers: Answers;
}

export const saveQuiz = async (params: Params): Promise<boolean> => {
    const refDb = push(ref(database, `users/${params.user.uid}/intentos`));

    try {
        await set(refDb, {
            created_at: Date.now(),
            qualification: params.qualification,
            answers: params.answers,
            name_user : params.user.displayName,
            photo_user :  params.user.photoURL,
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }    
}

// OBTIENE TODOS LOS QUIZ
export type Quiz = {
  created_at: number;
  qualification: number;
  answers: Answers;
  name_user?: string;
  photo_user?: string;
};

type UserAttempt = {
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