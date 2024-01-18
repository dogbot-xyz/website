// PieChart.tsx
import { onMount } from 'solid-js';
import { Chart, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'solid-chartjs';

interface PieChartData {
  labels: string[];
  values: number[];
}

const PieChart = (props: { data: PieChartData }) => {
  onMount(() => {
    Chart.register(Title, Tooltip, Legend, ArcElement);
  });

  const chartData = {
    labels: props.data.labels,
    datasets: [
      {
        data: props.data.values,
        backgroundColor: props.data.labels.map(
          () => '#' + Math.floor(Math.random() * 16777215).toString(16)
        ),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Pie data={chartData} options={chartOptions} width={400} height={400} />
    </div>
  );
};

export default PieChart;
