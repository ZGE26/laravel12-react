import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartWithCategoryAxisProps {
    dataName: string;
    labels_y: string;
    labels_x: string;
    data: { x: number; y: number }[];
}

export default function BarChartWithCategoryAxis({ dataName, labels_y,labels_x, data }: BarChartWithCategoryAxisProps) {
    const chartData = {
        labels: data.map(point => point.x.toString()),
        datasets: [
            {
                label: dataName,
                data: data.map(point => point.y),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `${labels_y} Over ${labels_x}`
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: labels_x,
                },
            },
            y: {
                title: {
                    display: true,
                    text: labels_y,
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
}