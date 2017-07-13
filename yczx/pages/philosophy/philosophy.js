const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    pageTitle: "牛商网经营哲学框架",
    articles: [{
      title:[
        "第一章",
        "成就自己"
      ],
      image: null,
      contents: [
        "一.奇迹是我生活里自然不过的一部分",
        "二.我对奇迹的认可，",
        "三.使奇迹对我来说很真实。",
        "四.奇迹是我生活里自然不过的一部分，我对奇迹的 认可，使奇迹对我来说很真实。奇迹是我生活里自然不过的一部 分，我对奇迹的认可，使奇迹对我来说很真实。"
      ],
    }, {
       
        image: '/images/atricle-img01.png',
        title: [
          "第一章",
          "成就自己"
        ],
      contents: [
        "一.奇迹是我生活里自然不过的一部分",
        "二.我对奇迹的认可，",
        "三.使奇迹对我来说很真实。",
        "四.奇迹是我生活里自然不过的一部分，我对奇迹的 认可，使奇迹对我来说很真实。奇迹是我生活里自然不过的一部 分，我对奇迹的认可，使奇迹对我来说很真实。"
      ],
    }
    ]
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})