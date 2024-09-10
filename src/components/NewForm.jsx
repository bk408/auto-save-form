import { useEffect, useState } from "react";

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

const NewForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
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
          <div className="form-box">
            <input
              type="text"
              placeholder="Enter user name"
              onChange={handleUserNameChange}
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
