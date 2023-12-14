import './modules.css';
function Person(props) {
  const { firstName, lastName, email, img } = props;
  return (
    <div className="card">
      <div>
        <img className="img2" src={img} />
        <h3>
          {firstName} {lastName}
        </h3>
        <h4>{email}</h4>
      </div>
    </div>
  );
}

export default Person;
