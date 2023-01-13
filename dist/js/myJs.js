const employmentForm = new Chart(document.getElementById('pie-teacher-employmentForm'), {
    type: 'pie',
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

// bar chart

const academicDegree = new Chart(document.getElementById('pie-teacher-academicDegree'), {
    type: 'bar',
  data: {
    labels: ['Fan doktori, DSc', "Fan nomzodi, PhD", 'Darajasiz'],
    datasets: [{
      label: 'My First Dataset',
      data: [85, 233, 790],
      backgroundColor: [
        'rgba(0, 160, 90, 0.8)',
        
      ],
    
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'top',
            color: 'black',
            color: 'rgba(0, 0, 0, 1.0)',
            backgroundColor: null,
            font: {
                size: 16,
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
        title: {
            display: true,
            color: "black",
            text: 'Ilmiy darajalilar'
          }
    },
    animation : {
        onComplete : done2
     }
    
  },

    plugins: [ChartDataLabels]
  
  });
  function done2(){
    const btn = document.getElementById("academicDegree-down");
    btn.href=academicDegree.toBase64Image()
    btn.download = 'Ilmiy daraja.png';
  
}


// academicRank
const academicRank = new Chart(document.getElementById('pie-teacher-academicRank'), {
    type: 'bar',
  data: {
    labels: ['Professor', "Katta ilmiy xodim", "Dotsent", 'Unvonsiz'],
    datasets: [{
      label: 'My First Dataset',
      data: [58, 7, 148, 895],
      backgroundColor: [
        'rgb(255,153,0)',
        
      ],
    
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'top',
            color: 'black',
            color: 'rgba(0, 0, 0, 1.0)',
            backgroundColor: null,
            font: {
                size: 16,
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
        title: {
            display: true,
            color: "black",
            text: 'Ilmiy unvonlilar'
          }
    },
    animation : {
        onComplete : ()=>{
          const btn = document.getElementById("academicRank-down");
          btn.href=academicRank.toBase64Image()
          btn.download = 'Ilmiy unvonlilar.png';
        }
     }
    
  },

    plugins: [ChartDataLabels],
    datalabels: {
    anchor: 'end',
    align: 'right',
    offset: 50
}
    
  
  });
  function done3(){
    const btn = document.getElementById("academicRank-down");
    btn.href=academicRank.toBase64Image()
    btn.download = 'Ilmiy unvonlilar.png';
  
}


const ctx = document.getElementById('province-bar-chart');

var barch = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    animation : {
      onComplete : ()=>{
        const btn = document.getElementById("pie-stunent-count");
        btn.href=barch.toBase64Image()
        btn.download = 'Ilmiy unvonlilar.png';
      }
   }
  }
});



// Number counter
  const counters = document.querySelectorAll('.top-counter');
      const speed = 300;

      counters.forEach( counter => {
      const animate = () => {
          const value = +counter.getAttribute('counter-value');
          const data = +counter.innerText;
          
          const time = value / speed;
          if(data < value) {
              counter.innerText = Math.ceil(data + time);
              setTimeout(animate, 1);
              }else{
              counter.innerText = value;
              }
          
      }
 
      animate();
      });



      // DOwnload table to excel
      function ExportToExcel(filename, fn, dl) {
        const type = 'xlsx';
         var elt = document.getElementById(filename);
         var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
         return dl ?
             XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
             XLSX.writeFile(wb, fn || (`${filename}.` + (type || 'xlsx')));
     }
    
     $(function() {
       var Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 3000
       });
   
       $('.swalDefaultSuccess').click(function() {
         Toast.fire({
           icon: 'success',
           title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.swalDefaultInfo').click(function() {
         Toast.fire({
           icon: 'info',
           title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.swalDefaultError').click(function() {
         Toast.fire({
           icon: 'error',
           title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.swalDefaultWarning').click(function() {
         Toast.fire({
           icon: 'warning',
           title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.swalDefaultQuestion').click(function() {
         Toast.fire({
           icon: 'question',
           title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
   
       $('.toastrDefaultSuccess').click(function() {
         toastr.success('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')
       });
       $('.toastrDefaultInfo').click(function() {
         toastr.info('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')
       });
       $('.toastrDefaultError').click(function() {
         toastr.error('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')
       });
       $('.toastrDefaultWarning').click(function() {
         toastr.warning('Lorem ipsum dolor sit amet, consetetur sadipscing elitr.')
       });
   
       $('.toastsDefaultDefault').click(function() {
         $(document).Toasts('create', {
           title: 'Toast Title',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultTopLeft').click(function() {
         $(document).Toasts('create', {
           title: 'Toast Title',
           position: 'topLeft',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultBottomRight').click(function() {
         $(document).Toasts('create', {
           title: 'Toast Title',
           position: 'bottomRight',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultBottomLeft').click(function() {
         $(document).Toasts('create', {
           title: 'Toast Title',
           position: 'bottomLeft',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultAutohide').click(function() {
         $(document).Toasts('create', {
           title: 'Toast Title',
           autohide: true,
           delay: 750,
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultNotFixed').click(function() {
         $(document).Toasts('create', {
           title: 'Toast Title',
           fixed: false,
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultFull').click(function() {
         $(document).Toasts('create', {
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
           title: 'Toast Title',
           subtitle: 'Subtitle',
           icon: 'fas fa-envelope fa-lg',
         })
       });
       $('.toastsDefaultFullImage').click(function() {
         $(document).Toasts('create', {
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
           title: 'Toast Title',
           subtitle: 'Subtitle',
           image: '../../dist/img/user3-128x128.jpg',
           imageAlt: 'User Picture',
         })
       });
       $('.toastsDefaultSuccess').click(function() {
         $(document).Toasts('create', {
           class: 'bg-success',
           title: 'Toast Title',
           subtitle: 'Subtitle',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultInfo').click(function() {
         $(document).Toasts('create', {
           class: 'bg-info',
           title: 'Toast Title',
           subtitle: 'Subtitle',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultWarning').click(function() {
         $(document).Toasts('create', {
           class: 'bg-warning',
           title: 'Toast Title',
           subtitle: 'Subtitle',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultDanger').click(function() {
         $(document).Toasts('create', {
           class: 'bg-danger',
           title: 'Toast Title',
           subtitle: 'Subtitle',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
       $('.toastsDefaultMaroon').click(function() {
         $(document).Toasts('create', {
           class: 'bg-maroon',
           title: 'Toast Title',
           subtitle: 'Subtitle',
           body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
         })
       });
     });
