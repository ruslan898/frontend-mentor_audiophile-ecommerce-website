import { useNavigate } from 'react-router-dom';
import Form from '../components/form/Form';

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-layout checkout">
        <div className="container">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="backBtn"
          >
            Go Back
          </button>
        </div>
        <Form />
      </div>
    </>
  );
}
