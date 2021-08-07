import Mock from 'mockjs'
const Random = require('mockjs').Random


var { list: journalList } = Mock.mock({
    "list|20-50": [{
        // "informantID|1000000-100000000": 10,
        // informantName: "@cword(2,6)",
        // "teacherID|1000000-100000000": 10,
        // teacherName: "@ctitle(2,6)",
        // QARoom: "@ctitle(5,10)",
        // // seeInformation: "查看",
        // "reportType|1": ["侵犯著作权", "色情暴力", "恶意攻击谩骂", "其他"],
        // reportDateTime: "@date(yyyy-MM-dd hh:mm:ss)",
        // "beReportedTimes|1-10": 1,
        // // operation: "忽略"
        'name': '@cname',
        'date': '@date(yyyy-MM-dd hh:mm:ss)',
        'text': '@cparagraph',
        'img': Random.image('200x200', '#F3D5DC', "picture"),
        "thumbsUp|10-500": 10,
        "reply|10-500": 10,
        "sendAgain|10-500": 10,
    }]
})

// 举报页面获取数据
Mock.mock('/api/publishJournal', 'post', (options) => {
    const body = JSON.parse(options.body)

    // 获取传递的参数
    const pageIndex = body.pageIndex;
    const pageSize = body.pageSize;

    // 截取位置的起始位置
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;

    // 计算总页数
    const totalPage = Math.ceil(journalList.length / pageSize);

    const pageList = pageSize > totalPage ? [] : journalList.slice(start, end);

    return {
        status: 200,
        msg: '获取数据成功',
        journalList: pageList,
        total: journalList.length
    }
})

