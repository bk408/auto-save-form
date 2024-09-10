import { useEffect } from "react";
import { useState } from "react";

const debounce = (fn, delay = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debounced = debounce((value) => {
  console.log(value);
}, 1000);

const AutoSaveForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleTextChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (userName) debounced(`userName: ${userName}`);
  }, [userName]);

  useEffect(() => {
    if (password) debounced(`Password: ${password}`);
  }, [password]);

  return (
    <div className="container">
      <div className="box">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter user name"
            onChange={handleTextChange}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AutoSaveForm;
