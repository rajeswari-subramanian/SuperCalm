import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import user from '../user.json'

const chartConfig = (props) => {
    return {
        type: 'line',
        data: {
            labels: user[0].moodTrends.week1[0].label.map(d => d),
            datasets: [{
                label: 'MoodTrends for a week',
                fill: false,
                data: props.week.map(d => d),
                // SCRIPTABLE OPTIONS FOR COLOR
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return value === 2 || value === 1 ? 'red' :
                        value === 5 || value === 4 ? 'green' : 'yellow';
                },
                borderWidth: 5
            }]
        },
        options: {

            title: {
                display: true,
                fontSize: 20,
                fontColor: '#1D3454',
                text: 'MoodTrends For November Month - 2020'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: '#1D3454',
                    fontSize: 18
                }
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Mood Distributions"
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Weeks",
                        },
                    },
                ],
            },

        }
    };
}

const FirstLineCharts = (props) => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig(props));
            setChartInstance(newChartInstance);
        }
    }, [chartContainer, props]);

    return (
        <div>
            <canvas ref={chartContainer} />
        </div>
    );
};

export default FirstLineCharts;