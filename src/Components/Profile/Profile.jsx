import { useState } from 'react';
import './Profile.scss';

export default function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    monthlyBudget: 0,
    monthlyIncome: 0,
  });

  function handleTextChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Settings</legend>
          <hr />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            autoComplete="off"
            onChange={handleTextChange}
            value={user.name}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            autoComplete="off"
            onChange={handleTextChange}
            value={user.email}
          />
        </fieldset>
        <fieldset>
          <legend>Budget</legend>
          <hr />
          <label htmlFor="monthlyBudget">Monthly Budget Amount</label>
          <input
            type="number"
            name="monthlyBudget"
            id="monthlyBudget"
            onChange={handleTextChange}
            value={user.monthlyBudget}
          />
          <label htmlFor="monthlyIncome">Monthly Income</label>
          <input
            type="number"
            name="monthlyIncome"
            id="monthlyIncome"
            onChange={handleTextChange}
            value={user.monthlyIncome}
          />
        </fieldset>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
