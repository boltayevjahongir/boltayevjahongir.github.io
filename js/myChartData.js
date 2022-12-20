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
    
