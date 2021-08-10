import Mock from 'mockjs'

Mock.mock("/api/user", 'post', {
    status: 200,
    msg: "OK",
})