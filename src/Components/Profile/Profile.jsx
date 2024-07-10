import { useState } from 'react';
import './Profile.scss';

export default function Profile({ user, setUser }) {
  function handleTextChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(user);
  }

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Settings</legend>
          <hr />
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            // autoComplete="off"
            onChange={handleTextChange}
            value={user.name}
          />
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            // autoComplete="off"
            onChange={handleTextChange}
            value={user.name}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            // autoComplete="off"
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
        </fieldset>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
