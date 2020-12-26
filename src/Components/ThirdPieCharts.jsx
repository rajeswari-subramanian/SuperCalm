import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import user from '../user.json'
let sad = user[0].periods.moods.filter(item => item === 2).length
let happy = user[0].periods.moods.filter(item => item === 5).length
const chartConfig2 = () => {
    return {
        type: 'bar',
        data: {
            labels: user[0].periods.dates.map(d => d),
            datasets: [{
                fill: false,
                data: user[0].periods.moods.map(d => d),
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return value < 3 ? 'red' : 'green';
                },
                borderWidth: 5
            }]
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                fontColor: '#1D3454',
                text: 'Sad and Happy Moods from selected dates'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: ["Sad", "Happy"],
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2.5
                    }
                }],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Periods",
                        },
                    },
                ],
            },
        }
    };
}
const chartConfig1 = () => {
    return {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [sad, happy],
                backgroundColor: ["red", "green"],
                label: 'Dataset 1'
            }],
            labels: [
                `Sad ${sad * 10}%`,
                `Happy ${happy * 10}%`,
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: '#1D3454',
                    fontSize: 18
                }
            },
            title: {
                display: true,
                fontSize: 20,
                fontColor: '#1D3454',
                text: 'Number of days Sad and Happy'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
}
const ThirdPieCharts = (props) => {
    const chartContainer1 = useRef(null);
    const chartContainer2 = useRef(null);
    const [chartInstance1, setChartInstance1] = useState(null);
    const [chartInstance2, setChartInstance2] = useState(null);

    useEffect(() => {
        if (chartContainer1 && chartContainer1.current) {
            const newChartInstance1 = new Chartjs(chartContainer1.current, chartConfig1());
            setChartInstance1(newChartInstance1);
        }
        if (chartContainer2 && chartContainer2.current) {
            const newChartInstance2 = new Chartjs(chartContainer2.current, chartConfig2());
            setChartInstance2(newChartInstance2);
        }
    }, [chartContainer1, chartContainer2]);

    return (
        <div style={{ display: "flex", width: "50%" }}>
            <canvas ref={chartContainer2} />
            <canvas ref={chartContainer1} />
        </div>
    );
};

export default ThirdPieCharts