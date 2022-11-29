import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";
import "./App.css";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";

const App = () => {

        const [questionsAndAnswers, setquestionsAndAnswers] = useState([]);

    const onLast = (newQuestionsAndAnswers) => {
        setquestionsAndAnswers(newQuestionsAndAnswers);
    }

        return (
                <Routes>
                    <Route path="/vragen/:number" element={ <QuestionsRouter onLast={onLast} questionsAndAnswers={questionsAndAnswers} />}></Route>
                    <Route path="/outro" element={<Outro questionsAndAnswers={questionsAndAnswers} />} ></Route>
                    <Route path="/" element={<Intro />}></Route>
               </Routes>

         );
}

export default App;