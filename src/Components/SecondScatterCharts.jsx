import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

const chartConfig = (props) => {
    return {
        type: "scatter",
        data: {
            labels: [1, 2, 3, 4, 5, 6],
            datasets: [{
                pointStyle: 'rect',
                pointRadius: 9,
                borderColor: "white",
                data: props.month[0].value.map(d => d),
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    return index === 0 || index === 1 ? 'red' : 'green';
                },

            }, {
                pointStyle: 'rect',
                pointRadius: 9,
                borderColor: "white",
                data: props.month[1].value.map(d => d),
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    return index === 0 || index === 1 ? 'red' : 'green';
                },
            },
            {
                pointStyle: 'rect',
                pointRadius: 9,
                borderColor: "white",
                data: props.month[2].value.map(d => d),
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    return index === 1 ? 'red' : 'green';
                },
            },
            {
                pointStyle: 'rect',
                pointRadius: 9,
                borderColor: "white",
                data: props.month[3].value.map(d => d),
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    return index === 0 || index === 1 ? 'red' : 'green';
                },

            }, {
                pointStyle: 'rect',
                pointRadius: 9,
                borderColor: "white",
                data: props.month[4].value.map(d => d),
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    return index === 0 || index === 1 ? 'red' : 'green';
                },
            },
            {
                pointStyle: 'rect',
                pointRadius: 9,
                borderColor: "white",
                data: props.month[5].value.map(d => d),
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    return index === 0 || index === 1 ? 'red' : 'green';
                },
            }]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    fontColor: '#1D3454',
                    fontSize: 18
                }
            },
            scales: {
                xAxes: [
                    {
                        type: 'linear',
                        position: 'bottom',
                        scaleLabel: {
                            display: true,
                            fontSize: 20,
                            fontColor: '#1D3454',
                            labelString: "Number of Users (6)",
                        },
                        ticks: {
                            stepSize: 1
                        }
                    }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        fontSize: 20,
                        fontColor: '#1D3454',
                        labelString: "24 hrs"
                    },
                    ticks: {
                        stepSize: 1
                    }
                }],
            },
            title: {
                display: true,
                fontSize: 20,
                fontColor: '#1D3454',
                text: `Happiness and Unhappiness Distribution of All Users`
            },
        }

    }
}


const SecondScatterCharts = (props) => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    console.log("month", props)
    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig(props));
            setChartInstance(newChartInstance);
        }
    }, [chartContainer, props]);
    return (
        <div style={{ position: "relative", height: "30vh", width: "60vw" }}>
            <canvas ref={chartContainer} />
        </div >
    );
};

export default SecondScatterCharts