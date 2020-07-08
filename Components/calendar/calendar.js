Component({
    //初始默认为当前日期
    properties: {
        // defaultValue: {
        //     type: String,
        //     value: ''
        // },
        //星期数组
        weekText: {
            type: Array,
            value: ['日', '一', '二', '三', '四', '五', '六']
        },
        lastMonth: {
            type: String,
            value: '◀'
        },
        nextMonth: {
            type: String,
            value: '▶'
        }
    },

    // 组件的初始数据
    data: {
        //当月格子
        thisMonthDays: [],
        //上月格子
        empytGridsBefore: [],
        //下月格子
        empytGridsAfter: [],
        //显示日期
        title: '',
        //格式化日期
        format: '',

        year: 0,
        month: 0,
        date:0,
        // toggleType:'large',
        scrollLeft:0,
        //常量 用于匹配是否为当天
        YEAR: 0,
        MONTH: 0,
        DATE: 0,
        // 出发回程
        setoff:'',
        back:''
    },
    jumpinx: function(e){
        console.log(e);
    },
    ready: function (e) {
        this.today();
    },

    methods: {

        //初始化
        display: function (year, month, date) {
            let months = '';
            switch(month){
                case month = 1:
                    months = '一'
                    break;
                case month = 2:
                    months = '二'
                    break;      
                case month = 3:
                    months = '三'
                    break;               
                case month = 4:
                    months = '四'
                    break;
                case month = 5:
                    months = '五'
                    break;
                case month = 6:
                    months = '六'
                    break;
                case month = 7:
                    months = '七'
                    break;                    
                case month = 8:
                    months = '八'
                    break;
                case month = 9:
                    months = '九'
                    break;
                case month = 10:
                    months = '十'
                    break;                    
                case month = 11:
                    months = '十一'
                    break;
                case month = 12:
                    months = '十二'
                    break;
            };
            this.setData({
                year,
                month,
                date,
                title: months + '月',
                setoff: month + '月' + date + '日',
                back:   month + '月' + (date+2) + '日',
            })
            this.createDays(year, month);
            this.createEmptyGrids(year, month);
        },
        today: function () {
            let DATE = this.data.defaultValue ? new Date(this.data.defaultValue) : new Date(),
                year = DATE.getFullYear(),
                month = DATE.getMonth() + 1,
                date = DATE.getDate(),
                select = year + '-' + this.zero(month) + '-' + this.zero(date);

            this.setData({
                format: select,
                select: select,
                year: year,
                month: month,
                date: date,
                YEAR: year,
                MONTH: month,
                DATE: date,
            })

            //初始化日历组件UI
            this.display(year, month, date);

            //发送事件监听
            this.triggerEvent('select', select);
        },
        jumpinx: function(e){
            console.log('点击空地');
            wx.navigateBack({
              delta: 1,
            })
        },

        //选择 并格式化数据
        select: function (e) {
        
            let date = e.currentTarget.dataset.date,
                select = this.data.year + '-' + this.zero(this.data.month) + '-' + this.zero(date);
            this.setData({
                // title: this.data.year + '年' + this.zero(this.data.month) + '月' + this.zero(date) + '日',
                select: select,
                year: this.data.year,
                month: this.data.month,
                date:date
            });

            //发送事件监听
            this.triggerEvent('select', select);

        },
        //上个月
        lastMonth: function () {
            let month = this.data.month == 1 ? 12 : this.data.month - 1;
            let year = this.data.month == 1 ? this.data.year - 1 : this.data.year;
            //初始化日历组件UI
            this.display(year, month, 0);
        },
        //下个月
        nextMonth: function () {
            let month = this.data.month == 12 ? 1 : this.data.month + 1;
            let year = this.data.month == 12 ? this.data.year + 1 : this.data.year;
            //初始化日历组件UI
            this.display(year, month, 0);
        },
        //获取当月天数
        getThisMonthDays: function (year, month) {
            return new Date(year, month, 0).getDate();
        },
        // 绘制当月天数占的格子
        createDays: function (year, month) {
            let thisMonthDays = [],
                days = this.getThisMonthDays(year, month);
            for (let i = 1; i <= days; i++) {
                thisMonthDays.push({
                    date: i,
                    dateFormat: this.zero(i),
                    monthFormat: this.zero(month),
                    week: this.data.weekText[new Date(Date.UTC(year, month - 1, i)).getDay()]
                });
            }
            this.setData({
                thisMonthDays
            })
        },
        //获取当月空出的天数
        createEmptyGrids: function (year, month) {
            let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
                empytGridsBefore = [],
                empytGridsAfter = [],
                emptyDays = (week == 0 ? 7 : week);
            //当月天数
            var thisMonthDays = this.getThisMonthDays(year, month);
            //上月天数
            var preMonthDays = month - 1 < 0 
                ? this.getThisMonthDays(year - 1, 12) 
                : this.getThisMonthDays(year, month - 1);

            //空出日期
            for (let i = 1; i <= emptyDays; i++) {
                empytGridsBefore.push(preMonthDays - (emptyDays - i));
            }

            var after = (42 - thisMonthDays - emptyDays) - 7 >= 0 
                        ? (42 - thisMonthDays - emptyDays) - 7 
                        : (42 - thisMonthDays - emptyDays);
            for (let i = 1; i <= after; i++) {
                empytGridsAfter.push(i);
            }
            this.setData({
                empytGridsAfter,
                empytGridsBefore
            })
        },

        //补全0
        zero: function (i) {
            return i >= 10 ? i : '0' + i;
        },
    },
})