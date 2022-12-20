const ctx = document.getElementById('myChart');

var faculty = ["Magistratura bo'limi", "Tabiiy fanlar fakulteti", "Milliy libos va san'at fakulteti", "Arxitektura va qurilish fakulteti", "Axborot texnologiyalari fakulteti", "Kimyo fakulteti", "Fizika -matematika fakulteti", "O’zbek filologiyasi fakulteti", "Rus va qardosh tillar fakulteti", "Xorijiy filologiya fakulteti", "Sport faoliyati va boshqaruvi fakulteti", "Iqtisodiyot va turizm fakulteti", "Yuridik fakulteti", "Tarix fakulteti", "Ijtimoiy fanlar fakulteti"]
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: faculty,
      datasets: [
        {
          label: 'Erkaklar',
          data: [152, 845, 894, 120, 848, 235, 564, 423, 354, 655, 555, 222, 444, 890],
          borderColor: '#36A2EB',
          backgroundColor: '#9BD0F5',
        },
        {
          label: 'Ayollar',
          data: [152, 845, 894, 120, 848, 235, 564, 423, 354, 655, 555, 222, 444, 890],
          borderColor: '#FF6384',
          backgroundColor: '#FFB1C1',
        },
        
      ]
    },
    options: {
        scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
    }
  });
    

  const ds = document.getElementById('dsChart');

  new Chart(ds, {
    type: 'bar',
    data: {
      labels: ['30 yoshgacha', '31-40 yosh',  '41-50 yosh',  '51-60 yosh', '61-70 yosh',  '70 yoshdan yuqori',],
      datasets: [
        {
          label: 'Fan doktorlari',
          data: [0,3,2,3,14,12],
          borderColor: '#36A2EB',
          backgroundColor: '#FAAB78',
        },
      
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
            display: true,
            text: 'Fan doktorlari 36 nafar'
        }
    }
    }
  });


  
  const phd = document.getElementById('phdChart');

  new Chart(phd, {
    type: 'bar',
    data: {
      labels: ['30 yoshgacha', '31-40 yosh',  '41-50 yosh',  '51-60 yosh', '61-70 yosh',  '70 yoshdan yuqori',],
      datasets: [
        {
          label: 'Fan doktorlari',
          data: [1,45,47,39,33,13],
          borderColor: '#36A2EB',
          backgroundColor: '#68B984',
        },
      
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
            display: true,
            text: 'Fan nomzodlari va falsafa doktorlari 177 nafar'
        }
    }
    }
  });


  const nophd = document.getElementById('nophdChart');

  new Chart(nophd, {
    type: 'bar',
    data: {
      labels: ['30 yoshgacha', '31-40 yosh',  '41-50 yosh',  '51-60 yosh', '61-70 yosh',  '70 yoshdan yuqori',],
      datasets: [
        {
          label: 'Fan doktorlari',
          data: [152,256,130,86,24,1],
          borderColor: '#36A2EB',
          backgroundColor: '#DC3535',
        },
      
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
            display: true,
            text: 'Ilmiy darajasiz professor o\'qituvchilar 649 nafar'
        }
    }
    }
  });
    
