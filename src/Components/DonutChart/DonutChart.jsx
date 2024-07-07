import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function DonutChart({ transactions }) {
  const categories = {};

  transactions.forEach((transaction) => {
    const category = transaction.category;
    const amount = parseFloat(transaction.amount);

    if (categories[category]) {
      categories[category] += amount;
    } else {
      categories[category] = amount;
    }
  });

  const labels = Object.keys(categories);
  const data = Object.values(categories);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          '#FF6384',
          '#01CA57',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className="DonutChart">
      <Doughnut
        options={{
          plugins: {
            title: {
              display: true,
              text: 'By Category',
            },
          },
        }}
        data={chartData}
      />
    </div>
  );
}
