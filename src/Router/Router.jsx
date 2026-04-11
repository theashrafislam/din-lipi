import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage"
// import Home from "../pages/Home";
import Home from "../pages/Home"
import VocabularyLessonPage from "../pages/VocabularyLessonPage";
import { vocabularyLessons  } from "../data/lessons";
import ExamTest from "../pages/ExamTest";

export const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "vocabulary-lesson/:id",
                element: <VocabularyLessonPage lessonData={vocabularyLessons }/>
            },
            {
                path: 'exam',
                element: <ExamTest />
            }
        ]
    }
]);

// default export Router;