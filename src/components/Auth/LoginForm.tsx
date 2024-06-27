import { useState } from "react";
import { login } from "../../services/auth";



interface LoginFormInterface {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [loginData, SetLoginData] = useState<LoginFormInterface>({
    username: "",
    password: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(loginData)
  };

  return (
    <form
      className="flex flex-col justify-between items-center w-full gap-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username" className="font-bold">
        Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        className="h-8 rounded p-2 bg-slate-950"
        onChange={handleInput}
      />
      <label htmlFor="password" className="font-bold ">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="*******"
        className="h-8 rounded p-2 bg-slate-950"
        onChange={handleInput}
      />
     
      <button className="font-bold bg-blue-500 w-1/4 rounded py-2 hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
