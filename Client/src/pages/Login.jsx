import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username or Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="note">* Just a demo UI – no authentication yet</p>
      </form>
    </div>
  );
};

export default Login;
