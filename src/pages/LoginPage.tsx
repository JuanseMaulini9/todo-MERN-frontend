import { Link } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="bg-slate-900 rounded flex flex-col justify-between items-center text-center w-96 h-96">
        <h2 className="font-bold text-3xl mt-4 py-2">Login</h2>
        <LoginForm></LoginForm>
        <p className="mb-4 text-gray-400">
          Not have an account? <span className="text-blue-400 hover:underline cursor-pointer"><Link to='/signup'>Sign Up</Link></span>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
