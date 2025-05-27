import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the About page since the history information is already there
    navigate('/about', { replace: true });
  }, [navigate]);

  // This component won't render anything as it immediately redirects
  return null;
};

export default History;
