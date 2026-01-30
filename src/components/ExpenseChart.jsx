import { useEffect, useRef } from 'react';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (!expenses || expenses.length === 0) {
      return;
    }

    const totals = {};
    expenses.forEach((exp) => {
      totals[exp.category] = (totals[exp.category] || 0) + Number(exp.amount);
    });

    chartRef.current = new Chart(canvasRef.current, {
      type: 'pie',
      data: {
        labels: Object.keys(totals),
        datasets: [
          {
            data: Object.values(totals),
            backgroundColor: [
              '#2563eb',
              '#16a34a',
              '#f97316',
              '#dc2626',
              '#7c3aed',
              '#0891b2',
              '#be185d',
            ],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [expenses]);

  if (!expenses || expenses.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <div className="chart-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default ExpenseChart;