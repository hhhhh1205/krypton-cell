import Mock from 'mockjs'
const Random = require('mockjs').Random


var { list: journalList } = Mock.mock({
    "list|20-50": [{
        'name': '@cname',
        'date': '@date(yyyy-MM-dd hh:mm:ss)',
        'text': '@cparagraph',
        'img': Random.image('200x200', '#F3D5DC', "picture"),
        "thumbsUp|10-500": 10,
        "reply|10-500": 10,
        "sendAgain|10-500": 10,
    }]
})

// 内容管理页面获取数据
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

    const pageList = pageIndex > totalPage ? [] : journalList.slice(start, end);

    return {
        status: 200,
        msg: '获取数据成功',
        journalList: pageList,
        total: journalList.length
    }
})

// 内容管理页面删除数据
Mock.mock('/api/delete/publishJournal', 'post', (options) => {
    const body = JSON.parse(options.body);
    // console.log(body);

    // 找到要删除数据的索引
    const index = journalList.findIndex(item => item.name === body.name)
    console.log(index);
    journalList.splice(index, 1);

    return {
        status: 200,
        msg: '删除成功',
        journalList,
        total: journalList.length
    }
})

// 内容管理页面添加数据
Mock.mock('/api/add/publishJournal', 'post', (options) => {
    const body = JSON.parse(options.body);
    // console.log(body);
    journalList.unshift(Mock.mock({
        ...body
    }));
    return {
        status: 200,
        msg: '添加成功',
        journalList,
        total: journalList.length
    }
})

