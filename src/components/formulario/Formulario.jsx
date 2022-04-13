import { Link } from "react-router-dom";

const Formulario = () => {
  return (
    <div className="inputs">
      <div className="inputs-container">
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>

        <div>
          <input type="text" name="name" placeholder="Address" />
        </div>

        <div>
          <input type="text" name="name" placeholder="Last Name" />
        </div>

        <div>
          <input type="text" name="name" placeholder="Notes" />
        </div>

        <Link to="/" className="on-cancel text-center">
          Back
        </Link>
        <Link to="/confirm" className="on-confirm text-center">
          Confirm
        </Link>
      </div>
    </div>
  );
};

export default Formulario;
