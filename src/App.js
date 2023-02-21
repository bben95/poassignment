import LandingPage from "./pages/LandingPage";
import { DataContextProvider } from "./context/DataContext";



function App() {
  return (
    <div >
      <DataContextProvider>
      <LandingPage/>
      </DataContextProvider>
    </div>
  );
}

export default App;
