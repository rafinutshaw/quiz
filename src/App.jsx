import { Container } from "./App.styles";
import AppLayout from "./layouts/app/app.layout";
import QuizDetailsPage from "./pages/quiz-details/quiz-details.page";

function App() {
  return (
    <Container>
      <AppLayout>
        <QuizDetailsPage />
      </AppLayout>
    </Container>
  );
}

export default App;
