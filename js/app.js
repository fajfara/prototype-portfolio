$(document).ready(function(){
    var languages = {};
    var HTML;
    var xpsCSS;
    var JS;
    var Python;
    var ctx = $("#myChart");
    
    function drawGraph(data){
        HTML = data.languages.HTML.xps;
        xpsCSS = data.languages.CSS.xps;
        JS = data.languages.JavaScript.xps;
        Python = data.languages.Python.xps;

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['HTML', 'CSS', 'Javascript', 'Python'],
                datasets: [{
                    label: 'Total XP by programming language',
                    data: [HTML, xpsCSS, JS, Python],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })

    }

    $.ajax({
        type: 'GET',
        url: 'https://codestats.net/api/users/fajfara',
        datatype: 'json',
        success: drawGraph,
    });
    

    
});