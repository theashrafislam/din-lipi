import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../pages/Home";
import VocabularyLessonPage from "../Pages/VocabularyLessonPage";
import { vocabularyLessons  } from "../data/lessons";

export const router = createBrowserRouter([
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
            }
        ]
    }
])