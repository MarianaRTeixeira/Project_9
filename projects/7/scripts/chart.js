const traffic = document.getElementById('traffic-chart').getContext('2d');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');


// TRAFFIC CHART
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgb(226, 227, 244)',
        borderColor: 'rgb(145, 149, 207)',
        borderWidth: 1,
        lineTension: 0
    }]
}

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
    responsive: true,
    layout: {
        padding: {
            left: 40,
            right: 5,
            top: 0,
            bottom: 0
        }
    }
}

let trafficChart = new Chart(traffic, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// BAR CHART

const dataBar = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "# of hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 1
    }]
};

const optBar = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
    responsive: true,
    layout: {
        padding: {
            left: 10

        }


    },
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dataBar,
    options: optBar
});

// MOBILE CHART

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "# of Users",
        data: ['2000', '550', '500'],
        borderWidth: 0,
        backgroundColor: [
            '#7477bf',
            '#78cf82',
            '51b6c8'
        ]
    }]
};

const mobileOptions = {
    legend: {

        display: true,
        position: 'right',
        label: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    },
    responsive: true,
    layout: {
        padding: 10,

    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
})