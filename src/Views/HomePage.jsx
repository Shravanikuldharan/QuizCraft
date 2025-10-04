import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f5f5f5' }}>
      <img src="/src/assets/quiz-logo.png" alt="QuizCraft Logo" style={{ width: '120px', marginBottom: '24px'}} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#333' }}>Welcome to QuizCraft!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '32px', color: '#555' }}>Test your knowledge and have fun!</p>
      <Link to="/quiz">
        <button style={{ padding: '12px 32px', fontSize: '1.1rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default HomePage;