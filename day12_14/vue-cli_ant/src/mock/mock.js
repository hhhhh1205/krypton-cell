import Mock from 'mockjs'
const Random = require('mockjs').Random

const vedioTags = ["少儿", "动漫", "娱乐", "搞笑", "美食", "颜值", "萌宠", "生活", "星座", "汽车", "手工", "热点"];

var { list: vedioInfoList } = Mock.mock({
    "list|20-50": [{
        vedioTitle: '@ctitle(10,30)',
        'img|1': [
            'https://img0.baidu.com/it/u=3565836488,1310667661&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388',
            'https://img2.baidu.com/it/u=2502582811,4087987637&fm=11&fmt=auto&gp=0.jpg',
            'https://img0.baidu.com/it/u=2831811467,1523242613&fm=11&fmt=auto&gp=0.jpg',
            'https://img2.baidu.com/it/u=845860256,1855493383&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=289',
            'https://img2.baidu.com/it/u=613227608,759876939&fm=26&fmt=auto&gp=0.jpg',
            'https://img2.baidu.com/it/u=2357906562,400846568&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=289',
            'https://img0.baidu.com/it/u=3526113904,2061590383&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=274',
            'https://img2.baidu.com/it/u=2408543368,3099464943&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=268',
            'https://img0.baidu.com/it/u=3279621116,681642328&fm=11&fmt=auto&gp=0.jpg',
            'https://img0.baidu.com/it/u=3833212836,2725225684&fm=26&fmt=auto&gp=0.jpg',
        ],
        'vedioType|1': ['原创', '搬运'],
        'vedioSort': [
            {
                value: 'movie',
                label: '电影',
                children: [
                    {
                        value: 'warfare',
                        label: '战争',
                    },
                    {
                        value: 'suspense',
                        label: '悬疑',
                    },
                    {
                        value: 'fantasy',
                        label: '奇幻',
                    },
                    {
                        value: 'history',
                        label: '历史',
                    },
                    {
                        value: 'action',
                        label: '动作',
                    },
                ],
            },
            {
                value: 'longVideo',
                label: '长视频',
                children: [
                    {
                        value: 'cutePet',
                        label: '萌宠',
                    },
                    {
                        value: 'game',
                        label: '游戏',
                    },
                    {
                        value: 'travel',
                        label: '旅行',
                    },
                    {
                        value: 'healthy',
                        label: '健康',
                    },
                    {
                        value: 'motion',
                        label: '运动',
                    },
                ],
            },
            {
                value: 'shortVideo',
                label: '短视频',
                children: [
                    {
                        value: 'funny',
                        label: '搞笑',
                    },
                    {
                        value: 'daily',
                        label: '日常',
                    },
                    {
                        value: 'parenting',
                        label: '亲子',
                    },
                    {
                        value: 'music',
                        label: '音乐',
                    },
                    {
                        value: 'fashion',
                        label: '时尚',
                    },
                ],
            },
        ],
        'vedioTags': () => {
            let size = Math.ceil(Math.random() * 5)
            let num = Math.floor(Math.random() * 12)
            return vedioTags.slice(num, num + size)
        },
        'vedioAllTags': [
            "少儿", "动漫", "娱乐", "搞笑", "美食", "颜值", "萌宠", "生活", "星座", "汽车", "手工", "热点"
        ],
        vedioTopic: '@cword(5,10)',
        "shenhe|1": ["审核中", ""],
    }]
})

// 分页获取视频信息
Mock.mock('/api/vedioInfo', 'post', (options) => {
    const body = JSON.parse(options.body)
    // console.log(body);

    // 获取传递的参数
    const pageIndex = body.pageIndex;
    const pageSize = body.pageSize;

    // 截取位置的起始位置
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;

    // 计算总页数
    const totalPage = Math.ceil(vedioInfoList.length / pageSize);

    const pageList = pageIndex > totalPage ? [] : vedioInfoList.slice(start, end);

    return {
        status: 200,
        msg: '获取数据成功',
        vedioInfoList: pageList,
        total: vedioInfoList.length
    }
})

// 获取视频信息
Mock.mock('/api/vedioInfoAll', 'post', (options) => {

    return {
        status: 200,
        msg: '获取数据成功',
        vedioInfoList,
        total: vedioInfoList.length
    }
})

// 删除数据
Mock.mock('/api/delete/vedioInfo', 'post', (options) => {
    const body = JSON.parse(options.body);
    // console.log(body);

    // 找到要删除数据的索引
    const index = vedioInfoList.findIndex(item => item.vedioTitle === body.vedioTitle)
    // console.log(index);
    vedioInfoList.splice(index, 1);

    return {
        status: 200,
        msg: '删除成功',
        vedioInfoList,
        total: vedioInfoList.length
    }
})

// 添加数据
Mock.mock('/api/add/vedioInfo', 'post', (options) => {
    const body = JSON.parse(options.body);
    console.log(body);
    vedioInfoList.unshift(Mock.mock({
        ...body
    }));
    return {
        status: 200,
        msg: '添加成功',
        vedioInfoList,
        total: vedioInfoList.length
    }
})