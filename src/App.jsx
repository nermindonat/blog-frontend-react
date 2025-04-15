import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostListPage from "./pages/BlogListPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import Header from "./layouts/Header";

const AppContent = () => {
  const location = useLocation();
  const showHeader = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && <Header />}
      <main className={showHeader ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
