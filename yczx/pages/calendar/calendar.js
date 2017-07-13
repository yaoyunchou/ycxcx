var app = getApp();
Page({
    data: {
        weekly: ["日", "一", "二", "三", "四", "五", "六"],
        days: [],
        today: ""
    },
    onLoad: function () {
        var that = this
        var Calendar = app.getCalendarDays();
        var crrentDate;
        if (app.date) {
            crrentDate = app.date;
        } else {
            crrentDate = null;
        }
        this.calendar = new Calendar({
            SelectDay: crrentDate,
            onSelectDay: function (o) { o.isSelect = true },
            onToday: function (o, date) { o.isToday = true; },
            onFinish: function (o) {
                app.date = this.SelectDay;
                let today = this.Year + "年" + this.Month + "月";
                let days = that.buildDays(o);
                //更新数据
                that.setData({
                    days: days,
                    today: today
                })

            }
        });
    },
    buildDays: function (data) {
        let outData = [];
        let arr1 = [];
        for (let i = 0; i < data.length; i++) {
            arr1.push(data[i]);
            if (i && (i + 1) % 7 === 0) {
                outData.push(arr1);
                arr1 = [];
            } else if (i + 1 === data.length && arr1.length) {
                for (let i = 7 - arr1.length; i > 0; i--) {
                    arr1.push({});
                }
                outData.push(arr1);
            }
        }
        return outData;
    },
    nextMonth: function (e) {
        this.calendar.NextMonth();
    },
    preMonth: function (e) {
        this.calendar.PreMonth();
    },
    selectDay: function selectDay(e) {
        let date = parseInt(e.currentTarget.dataset.date);
        this.calendar.selectDay(date);
        app.selectDay(date);
        wx.switchTab({
            url: '/pages/index/index',
            success: function () {
                console.log("success!!")
            },
            fail: function () {
                console.log("调用失败了....");
            }
        })
    }

});