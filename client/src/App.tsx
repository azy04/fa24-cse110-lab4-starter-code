import "bootstrap/dist/css/bootstrap.min.css";
import { MyBudgetTracker } from "./views/MyBudgetTracker";
import { AppContext, AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <MyBudgetTracker/>
    </AppProvider>
  );
};

export default App;
