import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "./App.styles";
import AppLayout from "./layouts/app/app.layout";
import HomePage from "./pages/home/home.page";
import QuizDetailsPage from "./pages/quiz-details/quiz-details.page";
import QuizPage from "./pages/quiz/quiz.page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/quiz-details",
          element: <QuizDetailsPage />,
        },
        {
          path: "/quiz",
          element: <QuizPage />,
        },
      ],
    },
  ]);

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
