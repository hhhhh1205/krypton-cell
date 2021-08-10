import Mock from 'mockjs'

// 举报页面
var { list } = Mock.mock({
    "list|100": [{
        "informantID|1000000-100000000": 10,
        informantName: "@cword(2,6)",
        "teacherID|1000000-100000000": 10,
        teacherName: "@ctitle(2,6)",
        QARoom: "@ctitle(5,10)",
        // seeInformation: "查看",
        "reportType|1": ["侵犯著作权", "色情暴力", "恶意攻击谩骂", "其他"],
        reportDateTime: "@date(yyyy-MM-dd hh:mm:ss)",
        "beReportedTimes|1-10": 1,
        // operation: "忽略"
    }]
})

// 举报页面获取数据
Mock.mock('/api/list', 'post', (options) => {
    const body = JSON.parse(options.body)

    // 获取传递的参数
    const pageIndex = body.pageIndex;
    const pageSize = body.pageSize;

    // 截取位置的起始位置
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;

    // 计算总页数
    const totalPage = Math.ceil(list.length / pageSize);

    const pageList = pageSize > totalPage ? [] : list.slice(start, end);

    return {
        status: 200,
        msg: '获取数据成功',
        list: pageList,
        total: list.length
    }
})



// 标签页面
var { list: label } = Mock.mock({
    "list|100": [{
        "id": "@increment()",
        labelName: "@cword(2,4)",
        "labelState|1": ["已关联", "未关联"],
        topicWord: "@ctitle(5,10)",
        // operation: "忽略"
    }]
})

// 获取标签页面数据
Mock.mock(/\/api\/label/, 'get', (options) => {
    // console.log(options);

    // 获取传递的参数
    const pageIndex = getQuery(options.url, 'pageIndex');
    const pageSize = getQuery(options.url, 'pageSize');

    // 截取位置的起始位置
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;

    // 计算总页数
    const totalPage = Math.ceil(label.length / pageSize);

    const pageList = pageIndex > totalPage ? [] : label.slice(start, end);

    return {
        status: 200,
        msg: '获取label数据成功',
        label: pageList,
        total: label.length
    }
})

// 标签页面添加数据
Mock.mock('/api/add/label', 'post', (options) => {
    const body = JSON.parse(options.body);
    console.log(body);
    label.unshift(Mock.mock({
        "id": "@increment()",
        ...body
    }));
    return {
        status: 200,
        msg: '添加成功',
        label,
        total: label.length
    }
})

// 标签页面删除数据
Mock.mock('/api/delete/label', 'post', (options) => {
    const body = JSON.parse(options.body);
    console.log(body);

    // 找到要删除数据的索引
    const index = label.findIndex(item => item.id === body.id)
    console.log(index);
    label.splice(index, 1);

    return {
        status: 200,
        msg: '删除成功',
        label,
        total: label.length
    }
})

// 修改标签页面数据
Mock.mock('/api/update/label', 'post', (options) => {
    const body = JSON.parse(options.body);
    console.log(body);

    // 找到要修改数据的索引
    const index = label.findIndex(item => item.id === body.id)
    console.log("1111");
    console.log(index);
    label[index].labelName = body.labelName;
    label[index].labelState = body.labelState;
    label[index].topicWord = body.topicWord;
    console.log(label[index]);

    return {
        status: 200,
        msg: '修改成功',
        label,
        total: label.length
    }
})

// 封装函数：根据URL获取query参数
const getQuery = (url, name) => {
    const index = url.indexOf('?');
    if (index !== -1) {
        const queryArr = url.substr(index + 1).split('&');
        for (var i = 0; i < queryArr.length; i++) {
            const itemArr = queryArr[i].split('=');
            if (itemArr[0] === name) {
                return itemArr[1];
            }
        }
    }
    return null;
}
