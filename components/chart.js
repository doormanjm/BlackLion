var barChartOptions = {
    series: [
        {
            name: 'To Be Triaged',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'To Be Repaired',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'To Be Delivered',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        '#2e7d32',
        '#2962ff',
        '#d50000',
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: 'Number of Units',
            style: {
                color: "#f5f7ff",
            },
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    fill: {
        opacity: 1
    },
    grid: {
        borderColor: "#f5f7ff",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "bottom",
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + ' Units'
            }
        }
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART

var areaChartOptions = {
    series: [{
        name: "Tickets Entered",
        data: [31, 40, 28, 51, 42, 109, 100],
    }, {
        name: "Tickets Closed",
        data: [11, 32, 45, 32, 34, 52, 41],
    }],
    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ["#d50000", "#00ab57"],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: "vertical",
        },
        type: "gradient",
    },
    grid: {
        borderColor: "#f5f7ff",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "bottom",
    },
    markers: {
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis:
        [
            {
                title: {
                    text: "Tickets Added",
                    style: {
                        color: "#f5f7ff",
                    },
                },
                labels: {
                    style: {
                        colors: ["#f5f7ff"],
                    },
                },
            },
            {
                opposite: true,
                title: {
                    text: "Tickets Closed",
                    style: {
                        color: "#f5f7ff",
                    },
                },
                labels: {
                    style: {
                        colors: ["#f5f7ff"],
                    },
                },
            },
        ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();