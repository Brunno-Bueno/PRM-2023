import { Route, Routes } from 'react-router-dom'
import TopicPage from "./pages/Topic"
import SignInPage from "./pages/Topic/SignIn";
import SignUpPage from "./pages/Topic/SignUp";
import { useAuth } from './hook/useAuth';

function App() {
  const { user } = useAuth();
  
  return (
    <div id="App">
      { user ? (
        <Routes>
          <Route path="/" element={ <TopicPage />}/>
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={ <SignInPage />} />
          <Route path="/signup" element={ <SignUpPage />} />
        </Routes>
      )}
    </div>
  )
}

export default App