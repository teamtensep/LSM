const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Anxiety', 'Depression', 'Addiction', 'PTSD', 'schizophrenia'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)'],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)'],


        
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });



  new Chart(earning, {
    type: 'bar',
    data: {
      labels: ['12-20', '20-30', '30-50', '50-60', '>60'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)' ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)'],


        
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });