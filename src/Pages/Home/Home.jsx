import './Home.scss';

export default function Home({ user }) {
  // Set Date and Time
  const now = new Date();
  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const timeOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  const currentDate = now
    .toLocaleDateString('en-US', dateOptions)
    .replace(',', '');
  const currentTime = now.toLocaleTimeString('en-US', timeOptions);

  return (
    <div className="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill=" #0092ca"
      >
        <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />
      </svg>
      <h1>{`Welcome back${user.firstName ? `, ${user.firstName}` : ''}.`}</h1>

      <p>
        {currentDate} <span>{currentTime}</span>
      </p>
    </div>
  );
}
