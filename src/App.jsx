import { Container } from "./App.styles";
import AppLayout from "./layouts/app/app.layout";
import QuizPage from "./pages/quiz/quiz.page";

function App() {
  return (
    <Container>
      <AppLayout>
        <QuizPage />
      </AppLayout>
    </Container>
  );
}

export default App;
