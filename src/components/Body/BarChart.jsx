import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Sample data (sine wave)
        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const data = {
            labels: labels,
            datasets: [{
                type: 'bar', 
                label: 'Received', 
                backgroundColor: '#0A66C2', 
                borderColor: '#0A66C2', 
                borderWidth: 1,
                data: [1000, 2000, 3000, 2500, 3500, 2800, 4000, 3200, 3800, 3000, 3500, 2700], 
                barPercentage: 0.9, 
                categoryPercentage: 0.8, 
                order: 2, 
            }, {
                type: 'line',
                label: 'Processed', 
                borderColor: '#002B55', 
                borderWidth: 2,
                fill: false, 
                data: [1200, 2200, 2800, 2600, 3800, 3200, 3800, 3000, 3600, 3500, 3000, 3400], 
                lineTension: 0.4, 
                order: 1, 
            }]
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4000, 
                    ticks: {
                        stepSize: 1000, 
                    }
                }
            }
        };

        const combinedChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });

        return () => combinedChart.destroy();
    }, []);

    return (
        <div className="w-[755px] h-[280px] ">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default BarChart;
