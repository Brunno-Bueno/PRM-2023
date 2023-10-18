import { Route, Routes } from 'react-router-dom'
import TopicPage from "./pages/Topic"
import SignInPage from "./pages/Topic/SignIn";
import SignUpPage from "./pages/Topic/SignUp";

function App() {
  
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<TopicPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default App