import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const NoDataCard = ({ message = 'No Data Found.' }) => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate(0);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-285px)]">
      <div className="card w-96 bg-info shadow-xl text-white">
        <div className="card-body">
          <h2 className="card-title">
            <FaExclamationTriangle /> No Data
          </h2>
          <p>{message}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleReload}>
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoDataCard;
