import Question from "../Question/Question";
import questionsFromData from "../data/questions";
import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const QuestionsRouter = (props) => {

       let myNumber = 1;

    const [questions, setQuestions] = useState([]);
    const [numberFromURL, setNumber] = useState(null);
    const [questionToBerenderd, setquestionToBerenderd] = useState(null);

    useEffect( () =>{
        setQuestions(questionsFromData);
        setNumber(1);
    }, [])
    useEffect(() =>{
        let questionSearch = questions.map( questionObject => {
            if(questionObject.number == myNumber){
                return <Question onLast={() => props.onLast(questions)} last={questionObject.last} onRate={onRate} previous={questionObject.previous} next={questionObject.next} number={questionObject.number} key={questionObject.number} question={questionObject.question} rating={questionObject.rating}/>;
            }
        });
        setquestionToBerenderd(questionSearch);
    }, [numberFromURL])

    const onRate = (rating,number) =>{
       let oldState = questions;
       let newState = oldState.map( question => {
            if(question.number === number ){
                question.rating = rating;
                return question;
            }
            return question;
       });

      setQuestions(newState);
    }

{

        return (
            <>
                {questionToBerenderd}
            </>
        )
    }
}

export default QuestionsRouter;