const employmentForm = new Chart(document.getElementById('pie-teacher-employmentForm'), {
    type: 'doughnut',
    data: {
      labels: ['Asosiy ish joy', 'O`rindoshlik (ichki-asosiy)', 'O‘rindoshlik (ichki-qo`shimcha)', 'O‘rindoshlik (tashqi)', 'Soatbay'],
      datasets: [
        {
          label: 'Talabalar soni',
          data: [12749, 10250, 1462, 2066, 651],
         
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip:{
          enabled:true
        },
        datalabels:{
            clamp: true,
            align: 'top',
            color: 'black',
            color: 'rgba(0, 0, 0, 1.0)',
            backgroundColor: null,
            font: {
                size: 10,
                weight: 'bold',
            },
          formatter:(value, context)=>{
            const datapoint = context.chart.data.datasets[0].data
            function totalSum(total, datapoint){
              return total+datapoint;
            }
            const totalvalue = datapoint.reduce(totalSum, 0);
            const persentageValue = (value/totalvalue*100).toFixed(1);
  
            return `${persentageValue} %`
          }
        },
        legend: {
          position: 'bottom',
        },
        title: {
            display: true,
            color: "black",
            text: 'O’qituvchilar soni(Mehnat shakli bo\'yicha):'
          }
       
      },
      animation : {
           onComplete : done1
        }
    },
    plugins: [ChartDataLabels]
  
  });
  function done1(){
    const btn = document.getElementById("employmentForm-down");
    btn.href=employmentForm.toBase64Image()
    btn.download = 'O’qituvchilar soni(Mehnat shakli bo\'yicha).png';
  
}
 

const academicDegree = new Chart(document.getElementById('pie-teacher-academicDegree'), {
  type: 'bar',
  data: {
    labels: ['Katta ilmiy xodim', 'Professor', 'Dotsent', 'Unvonsiz',],
    datasets: [
      {
        legend: 'hello',
        data: [7, 85, 148, 790],
        backgroundColor: [
          
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
          'rgb(0, 168, 204)'
        ]
       
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip:{
        enabled:true,
      },
      datalabels:{
          clamp: true,
          align: 'top',
          color: 'black',
          color: 'rgba(0, 0, 0, 1.0)',
          backgroundColor: null,
          font: {
              size: 10,
              weight: 'bold',
          },
        formatter:(value, context)=>{
          const datapoint = context.chart.data.datasets[0].data
          function totalSum(total, datapoint){
            return total+datapoint;
          }
          const totalvalue = datapoint.reduce(totalSum, 0);
          const persentageValue = (value/totalvalue*100).toFixed(1);

          return `${persentageValue} %`
        }
      },
      legend: {
        display: false
      },
      title: {
          display: true,
          color: "black",
          text: 'Ilmiy darajalilar:'
        }
     
    },
    animation : {
         onComplete : done1
      }
  },
  plugins: [ChartDataLabels]

});
function done1(){
  const btn = document.getElementById("academicDegree-down");
  btn.href=academicDegree.toBase64Image()
  btn.download = 'Ilmiy darajalilar.png';

}

const academicRank = new Chart(document.getElementById('pie-teacher-academicRank'), {
  type: 'bar',
  data: {
    labels: ['Fan doktori, DSc', 'Fan nomzodi, PhD', 'Darajasiz', ],
    datasets: [
      {
        label: 'Talabalar soni',
        data: [58, 148, 790],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
        ],
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip:{
        enabled:true
      },
      datalabels:{
          clamp: true,
          align: 'top',
          color: 'black',
          color: 'rgba(0, 0, 0, 1.0)',
          backgroundColor: null,
          font: {
              size: 10,
              weight: 'bold',
          },
        formatter:(value, context)=>{
          const datapoint = context.chart.data.datasets[0].data
          function totalSum(total, datapoint){
            return total+datapoint;
          }
          const totalvalue = datapoint.reduce(totalSum, 0);
          const persentageValue = (value/totalvalue*100).toFixed(1);

          return `${persentageValue} %`
        }
      },
      legend: {
        display: false
      },
      title: {
          display: true,
          color: "black",
          text: 'Ilmiy unvonlilar:'
        }
     
    },
    animation : {
         onComplete : done1
      }
  },
  plugins: [ChartDataLabels]

});
function done1(){
  const btn = document.getElementById("academicRank-down");
  btn.href=academicDegree.toBase64Image()
  btn.download = 'Ilmiy unvonlilar.png';

}


      // DOwnload table to excel
function ExportToExcel(filename, fn, dl) {
  const type = 'xlsx';
  var elt = document.getElementById(filename);
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
    XLSX.writeFile(wb, fn || (`${filename}.` + (type || 'xlsx')));
} 
    

