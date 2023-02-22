import { useAuth0 } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppWrapper, SizeContainer } from "./App.styles";
import AppLayout from "./layouts/app/app.layout";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import QuizCompletePage from "./pages/quiz-complete/quiz-complete.page";
import QuizDetailsPage from "./pages/quiz-details/quiz-details.page";
import QuizPage from "./pages/quiz/quiz.page";

function App() {
  const { loginWithRedirect, logout, user } = useAuth0();

  const router = createBrowserRouter(
    user
      ? [
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
              {
                path: "/quiz-complete",
                element: <QuizCompletePage />,
              },
            ],
          },
        ]
      : [
          {
            path: "/",
            element: <LoginPage onClick={() => loginWithRedirect()} />,
          },
        ]
  );

  return (
    <AppWrapper>
      <SizeContainer>
        <RouterProvider router={router} />
      </SizeContainer>
    </AppWrapper>
  );
}

export default App;
