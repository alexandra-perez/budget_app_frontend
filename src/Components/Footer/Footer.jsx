import './Footer.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill=" #0092ca"
        >
          <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />
        </svg>
        <h1>BudgetBuddy</h1>
        <hr />
      </div>
      <ul>
        <li>
          <h1>See the Source Code</h1>

          <p>
            {' '}
            <a
              href="https://github.com/alexandra-perez/budget_app_frontend"
              target="_blank"
            >
              Frontend
            </a>
          </p>

          <p>
            {' '}
            <a
              href="https://github.com/alexandra-perez/budget_app_backend"
              target="_blank"
            >
              Backend
            </a>
          </p>
        </li>
        <li>
          <div className="icons">
            <h1>Contact</h1>
            <p>Alexandra Perez</p>
            <p>Full Stack Developer</p>
            <a href="https://github.com/alexandra-perez" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ap-alexandraperez/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:alexandraperezny@gmail.com">
              <i class="fa-solid fa-at"></i>
            </a>
          </div>
        </li>
        <li>
          <h1>About</h1>
          <p>
            <p>
              BudgetBuddy is a comprehensive full stack React application,
              developed using Express and Vite, designed to manage your budget
              and transactions with ease. It supports full CRUD operations,
              providing a seamless and efficient way to track and control your
              financial activities.
            </p>
          </p>
        </li>
      </ul>
    </footer>
  );
}
