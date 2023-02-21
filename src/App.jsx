import { Container } from "./App.styles";
import AppLayout from "./layouts/app/app.layout";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <Container>
      <AppLayout>
        <HomePage />
      </AppLayout>
    </Container>
  );
}

export default App;
