import { useEffect, useState } from "react";
import { getAllUsersWithAttempts } from "../services/service_db";

interface Atttemps {
    name: string;
    photo: string;
    qualificationAverage: number;
}

export const useAttemptsAll = () => {
    const [data, setData] = useState<Atttemps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const attempts = await getAllUsersWithAttempts();

                const attemptsFormat = attempts.map((item) => {

                    const name = item.attempts[0].data.name_user ?? "No tiene";
                    const photo = item.attempts[0].data.photo_user ?? "Sin foto";
                    const qualificationAverage = item.attempts.reduce((acc, curr) => acc + curr.data.qualification, 0) / item.attempts.length;

                    return {
                        name,
                        photo,
                        qualificationAverage,
                    };
                });
                setData(attemptsFormat);
            } catch (error) {
                console.error("Error fetching attempts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, []);

    return { data, loading };
};
