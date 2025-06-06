import QuestionCanva from "./canva/QuestionCanva"

const Quiz = () => {
    return (
        <div className="my-2 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
            <div className="text-center">
              
            </div>
            <div className="mt-6  text-center p-4 bg-indigo-950 rounded border-2 border-indigo-800">

                <QuestionCanva />
            </div>
        </div>
    )
}

export default Quiz