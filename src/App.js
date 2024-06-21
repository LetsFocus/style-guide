import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import MainLogin from "./components/Login/MainLogin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

export default function App() {
  const markdownFiles = require.context('./markdown', false, /\.md$/);
  const markdownFileNames = markdownFiles.keys().map(key => key.substring(2));
  const firstPage = markdownFileNames[0];

  return (
    <div>

      <Routes>
        <Route path="/" element={<MainLogin firstPage={firstPage}/>}/>
        {markdownFileNames.map(file => {
            return (
              <Route
                key={file}
                path={`/:file`}
                element={<ProtectedRoute><MainLayout markdownFileNames={markdownFileNames} /></ProtectedRoute>}
              />
            );
          })}
      </Routes>
    </div>
  );
}
