import Mock from 'mockjs'

var { list: proData } = Mock.mock({
    "city_id": "CH",
    "name": "中国",
    "en": "China",
    "list": [
        {
            "city_id": "CH01",
            "name": "北京",
            "en": "",
            "list": [
                {
                    "city_id": "CH010100",
                    "name": "北京",
                    "en": "Beijing"
                },
                {
                    "city_id": "CH010200",
                    "name": "海淀",
                    "en": "haidian"
                },
                {
                    "city_id": "CH010300",
                    "name": "朝阳",
                    "en": "chaoyang"
                },
                {
                    "city_id": "CH010400",
                    "name": "顺义",
                    "en": "Shunyi"
                },
                {
                    "city_id": "CH010500",
                    "name": "怀柔",
                    "en": "Huairou"
                },
                {
                    "city_id": "CH010600",
                    "name": "通州",
                    "en": "tongzhou"
                },
                {
                    "city_id": "CH010700",
                    "name": "昌平",
                    "en": "Changping"
                },
                {
                    "city_id": "CH010800",
                    "name": "延庆",
                    "en": "yanqing"
                },
                {
                    "city_id": "CH010900",
                    "name": "丰台",
                    "en": "fengtai"
                },
                {
                    "city_id": "CH011000",
                    "name": "石景山",
                    "en": "shijingshan"
                },
                {
                    "city_id": "CH011100",
                    "name": "大兴",
                    "en": "Daxing"
                },
                {
                    "city_id": "CH011200",
                    "name": "房山",
                    "en": "fangshan"
                },
                {
                    "city_id": "CH011300",
                    "name": "密云",
                    "en": "Miyun"
                },
                {
                    "city_id": "CH011400",
                    "name": "门头沟",
                    "en": "mentougou"
                },
                {
                    "city_id": "CH011500",
                    "name": "平谷",
                    "en": "pinggu"
                }
            ]
        },
        {
            "city_id": "CH02",
            "name": "上海",
            "en": "",
            "list": [
                {
                    "city_id": "CH020100",
                    "name": "上海",
                    "en": "Shanghai"
                },
                {
                    "city_id": "CH020200",
                    "name": "闵行",
                    "en": "minhang"
                },
                {
                    "city_id": "CH020300",
                    "name": "宝山",
                    "en": "baoshan"
                },
                {
                    "city_id": "CH020500",
                    "name": "嘉定",
                    "en": "jiading"
                },
                {
                    "city_id": "CH020600",
                    "name": "浦东南汇",
                    "en": "pudongnanhui"
                },
                {
                    "city_id": "CH020700",
                    "name": "金山",
                    "en": "jinshan"
                },
                {
                    "city_id": "CH020800",
                    "name": "青浦",
                    "en": "qingpu"
                },
                {
                    "city_id": "CH020900",
                    "name": "松江",
                    "en": "songjiang"
                },
                {
                    "city_id": "CH021000",
                    "name": "奉贤",
                    "en": "fengxian"
                },
                {
                    "city_id": "CH021100",
                    "name": "崇明",
                    "en": "chongming"
                },
                {
                    "city_id": "CH021200",
                    "name": "徐家汇",
                    "en": "xujiahui"
                },
                {
                    "city_id": "CH021300",
                    "name": "浦东",
                    "en": "pudong"
                }
            ]
        },
        {
            "city_id": "CH03",
            "name": "天津",
            "en": "",
            "list": [
                {
                    "city_id": "CH030100",
                    "name": "天津",
                    "en": "Tianjin"
                },
                {
                    "city_id": "CH030200",
                    "name": "武清",
                    "en": "wuqing"
                },
                {
                    "city_id": "CH030300",
                    "name": "宝坻",
                    "en": "baodi"
                },
                {
                    "city_id": "CH030400",
                    "name": "东丽",
                    "en": "dongli"
                },
                {
                    "city_id": "CH030500",
                    "name": "西青",
                    "en": "xiqing"
                },
                {
                    "city_id": "CH030600",
                    "name": "北辰",
                    "en": "beichen"
                },
                {
                    "city_id": "CH030700",
                    "name": "宁河",
                    "en": "ninghe"
                },
                {
                    "city_id": "CH030800",
                    "name": "汉沽",
                    "en": "Hangu"
                },
                {
                    "city_id": "CH030900",
                    "name": "静海",
                    "en": "Jinghai"
                },
                {
                    "city_id": "CH031000",
                    "name": "津南",
                    "en": "jinnan"
                },
                {
                    "city_id": "CH031100",
                    "name": "塘沽",
                    "en": "Tanggu"
                },
                {
                    "city_id": "CH031200",
                    "name": "大港",
                    "en": "dagang"
                },
                {
                    "city_id": "CH031400",
                    "name": "蓟县",
                    "en": "jixian"
                }
            ]
        },
        {
            "city_id": "CH04",
            "name": "重庆",
            "en": "",
            "list": [
                {
                    "city_id": "CH040100",
                    "name": "重庆",
                    "en": "Chongqing"
                },
                {
                    "city_id": "CH040200",
                    "name": "永川",
                    "en": "yongchuan"
                },
                {
                    "city_id": "CH040300",
                    "name": "合川",
                    "en": "Hechuan"
                },
                {
                    "city_id": "CH040400",
                    "name": "南川",
                    "en": "nanchuan"
                },
                {
                    "city_id": "CH040500",
                    "name": "江津",
                    "en": "Jiangjin"
                },
                {
                    "city_id": "CH040600",
                    "name": "万盛",
                    "en": "wansheng"
                },
                {
                    "city_id": "CH040700",
                    "name": "渝北",
                    "en": "yubei"
                },
                {
                    "city_id": "CH040800",
                    "name": "北碚",
                    "en": "beibei"
                },
                {
                    "city_id": "CH040900",
                    "name": "巴南",
                    "en": "banan"
                },
                {
                    "city_id": "CH041000",
                    "name": "长寿",
                    "en": "changshou"
                },
                {
                    "city_id": "CH041100",
                    "name": "黔江",
                    "en": "qianjiang"
                },
                {
                    "city_id": "CH041300",
                    "name": "万州",
                    "en": "wanzhou"
                },
                {
                    "city_id": "CH041400",
                    "name": "涪陵",
                    "en": "fuling"
                },
                {
                    "city_id": "CH041500",
                    "name": "开县",
                    "en": "kaixian"
                },
                {
                    "city_id": "CH041600",
                    "name": "城口",
                    "en": "chengkou"
                },
                {
                    "city_id": "CH041700",
                    "name": "云阳",
                    "en": "yunyang"
                },
                {
                    "city_id": "CH041800",
                    "name": "巫溪",
                    "en": "wuxi"
                },
                {
                    "city_id": "CH041900",
                    "name": "奉节",
                    "en": "fengjie"
                },
                {
                    "city_id": "CH042000",
                    "name": "巫山",
                    "en": "wushan"
                },
                {
                    "city_id": "CH042100",
                    "name": "潼南",
                    "en": "tongnan"
                },
                {
                    "city_id": "CH042200",
                    "name": "垫江",
                    "en": "dianjiang"
                },
                {
                    "city_id": "CH042300",
                    "name": "梁平",
                    "en": "liangping"
                },
                {
                    "city_id": "CH042400",
                    "name": "忠县",
                    "en": "zhongxian"
                },
                {
                    "city_id": "CH042500",
                    "name": "石柱",
                    "en": "shizhu"
                },
                {
                    "city_id": "CH042600",
                    "name": "大足",
                    "en": "dazu"
                },
                {
                    "city_id": "CH042700",
                    "name": "荣昌",
                    "en": "rongchang"
                },
                {
                    "city_id": "CH042800",
                    "name": "铜梁",
                    "en": "tongliang"
                },
                {
                    "city_id": "CH042900",
                    "name": "璧山",
                    "en": "bishan"
                },
                {
                    "city_id": "CH043000",
                    "name": "丰都",
                    "en": "fengdu"
                },
                {
                    "city_id": "CH043100",
                    "name": "武隆",
                    "en": "wulong"
                },
                {
                    "city_id": "CH043200",
                    "name": "彭水",
                    "en": "pengshui"
                },
                {
                    "city_id": "CH043300",
                    "name": "綦江",
                    "en": "qijiang"
                },
                {
                    "city_id": "CH043400",
                    "name": "酉阳",
                    "en": "youyang"
                },
                {
                    "city_id": "CH043600",
                    "name": "秀山",
                    "en": "xiushan"
                }
            ]
        },
        {
            "city_id": "CH05",
            "name": "黑龙江",
            "en": "",
            "list": [
                {
                    "city_id": "CH0501",
                    "name": "哈尔滨",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050101",
                            "name": "哈尔滨",
                            "en": "Harbin"
                        },
                        {
                            "city_id": "CH050102",
                            "name": "双城",
                            "en": "shuangcheng"
                        },
                        {
                            "city_id": "CH050103",
                            "name": "呼兰",
                            "en": "Hulan"
                        },
                        {
                            "city_id": "CH050104",
                            "name": "阿城",
                            "en": "Acheng"
                        },
                        {
                            "city_id": "CH050105",
                            "name": "宾县",
                            "en": "binxian"
                        },
                        {
                            "city_id": "CH050106",
                            "name": "依兰",
                            "en": "yilan"
                        },
                        {
                            "city_id": "CH050107",
                            "name": "巴彦",
                            "en": "bayan"
                        },
                        {
                            "city_id": "CH050108",
                            "name": "通河",
                            "en": "Tonghe"
                        },
                        {
                            "city_id": "CH050109",
                            "name": "方正",
                            "en": "fangzheng"
                        },
                        {
                            "city_id": "CH050110",
                            "name": "延寿",
                            "en": "yanshou"
                        },
                        {
                            "city_id": "CH050111",
                            "name": "尚志",
                            "en": "shangzhi"
                        },
                        {
                            "city_id": "CH050112",
                            "name": "五常",
                            "en": "Wuchang"
                        },
                        {
                            "city_id": "CH050113",
                            "name": "木兰",
                            "en": "mulan"
                        }
                    ]
                },
                {
                    "city_id": "CH0502",
                    "name": "齐齐哈尔",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050201",
                            "name": "齐齐哈尔",
                            "en": "Qiqihar"
                        },
                        {
                            "city_id": "CH050202",
                            "name": "讷河",
                            "en": "Nehe"
                        },
                        {
                            "city_id": "CH050203",
                            "name": "龙江",
                            "en": "longjiang"
                        },
                        {
                            "city_id": "CH050204",
                            "name": "甘南",
                            "en": "gannan"
                        },
                        {
                            "city_id": "CH050205",
                            "name": "富裕",
                            "en": "Fuyu"
                        },
                        {
                            "city_id": "CH050206",
                            "name": "依安",
                            "en": "yian"
                        },
                        {
                            "city_id": "CH050207",
                            "name": "拜泉",
                            "en": "Baiquan"
                        },
                        {
                            "city_id": "CH050208",
                            "name": "克山",
                            "en": "Keshan"
                        },
                        {
                            "city_id": "CH050209",
                            "name": "克东",
                            "en": "kedong"
                        },
                        {
                            "city_id": "CH050210",
                            "name": "泰来",
                            "en": "Tailai"
                        }
                    ]
                },
                {
                    "city_id": "CH0503",
                    "name": "牡丹江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050301",
                            "name": "牡丹江",
                            "en": "Mudanjiang"
                        },
                        {
                            "city_id": "CH050302",
                            "name": "海林",
                            "en": "Hailin"
                        },
                        {
                            "city_id": "CH050303",
                            "name": "穆棱",
                            "en": "muling"
                        },
                        {
                            "city_id": "CH050304",
                            "name": "林口",
                            "en": "linkou"
                        },
                        {
                            "city_id": "CH050305",
                            "name": "绥芬河",
                            "en": "Suifenhe"
                        },
                        {
                            "city_id": "CH050306",
                            "name": "宁安",
                            "en": "ningan"
                        },
                        {
                            "city_id": "CH050307",
                            "name": "东宁",
                            "en": "dongning"
                        }
                    ]
                },
                {
                    "city_id": "CH0504",
                    "name": "佳木斯",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050401",
                            "name": "佳木斯",
                            "en": "Jiamusi"
                        },
                        {
                            "city_id": "CH050402",
                            "name": "汤原",
                            "en": "tangyuan"
                        },
                        {
                            "city_id": "CH050403",
                            "name": "抚远",
                            "en": "Fuyuan"
                        },
                        {
                            "city_id": "CH050404",
                            "name": "桦川",
                            "en": "huachuan"
                        },
                        {
                            "city_id": "CH050405",
                            "name": "桦南",
                            "en": "huanan"
                        },
                        {
                            "city_id": "CH050406",
                            "name": "同江",
                            "en": "tongjiang"
                        },
                        {
                            "city_id": "CH050407",
                            "name": "富锦",
                            "en": "Fujin"
                        }
                    ]
                },
                {
                    "city_id": "CH0505",
                    "name": "绥化",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050501",
                            "name": "绥化",
                            "en": "Suihua"
                        },
                        {
                            "city_id": "CH050502",
                            "name": "肇东",
                            "en": "zhaodong"
                        },
                        {
                            "city_id": "CH050503",
                            "name": "安达",
                            "en": "Anda"
                        },
                        {
                            "city_id": "CH050504",
                            "name": "海伦",
                            "en": "Hailun"
                        },
                        {
                            "city_id": "CH050505",
                            "name": "明水",
                            "en": "mingshui"
                        },
                        {
                            "city_id": "CH050506",
                            "name": "望奎",
                            "en": "Wangkui"
                        },
                        {
                            "city_id": "CH050507",
                            "name": "兰西",
                            "en": "lanxi"
                        },
                        {
                            "city_id": "CH050508",
                            "name": "青冈",
                            "en": "Qinggang"
                        },
                        {
                            "city_id": "CH050509",
                            "name": "庆安",
                            "en": "qingan"
                        },
                        {
                            "city_id": "CH050510",
                            "name": "绥棱",
                            "en": "suiling"
                        }
                    ]
                },
                {
                    "city_id": "CH0506",
                    "name": "黑河",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050601",
                            "name": "黑河",
                            "en": "Heihe"
                        },
                        {
                            "city_id": "CH050602",
                            "name": "嫩江",
                            "en": "Nenjiang"
                        },
                        {
                            "city_id": "CH050603",
                            "name": "孙吴",
                            "en": "Sunwu"
                        },
                        {
                            "city_id": "CH050604",
                            "name": "逊克",
                            "en": "xunke"
                        },
                        {
                            "city_id": "CH050605",
                            "name": "五大连池",
                            "en": "wudalianchi"
                        },
                        {
                            "city_id": "CH050606",
                            "name": "北安",
                            "en": "beian"
                        }
                    ]
                },
                {
                    "city_id": "CH0507",
                    "name": "大兴安岭",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050701",
                            "name": "大兴安岭",
                            "en": "daxinganling"
                        },
                        {
                            "city_id": "CH050702",
                            "name": "塔河",
                            "en": "Tahe"
                        },
                        {
                            "city_id": "CH050703",
                            "name": "漠河",
                            "en": "mohe"
                        },
                        {
                            "city_id": "CH050704",
                            "name": "呼玛",
                            "en": "Huma"
                        },
                        {
                            "city_id": "CH050705",
                            "name": "呼中",
                            "en": "huzhong"
                        },
                        {
                            "city_id": "CH050706",
                            "name": "新林",
                            "en": "xinlin"
                        },
                        {
                            "city_id": "CH050708",
                            "name": "加格达奇",
                            "en": "jiagedaqi"
                        }
                    ]
                },
                {
                    "city_id": "CH0508",
                    "name": "伊春",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050801",
                            "name": "伊春",
                            "en": "yichun"
                        },
                        {
                            "city_id": "CH050802",
                            "name": "乌伊岭",
                            "en": "wuyiling"
                        },
                        {
                            "city_id": "CH050803",
                            "name": "五营",
                            "en": "wuying"
                        },
                        {
                            "city_id": "CH050804",
                            "name": "铁力",
                            "en": "Tieli"
                        },
                        {
                            "city_id": "CH050805",
                            "name": "嘉荫",
                            "en": "jiayin"
                        }
                    ]
                },
                {
                    "city_id": "CH0509",
                    "name": "大庆",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH050901",
                            "name": "大庆",
                            "en": "Daqing"
                        },
                        {
                            "city_id": "CH050902",
                            "name": "林甸",
                            "en": "lindian"
                        },
                        {
                            "city_id": "CH050903",
                            "name": "肇州",
                            "en": "Zhaozhou"
                        },
                        {
                            "city_id": "CH050904",
                            "name": "肇源",
                            "en": "Zhaoyuan"
                        },
                        {
                            "city_id": "CH050905",
                            "name": "杜尔伯特",
                            "en": "duerbote"
                        }
                    ]
                },
                {
                    "city_id": "CH0510",
                    "name": "七台河",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH051002",
                            "name": "七台河",
                            "en": "qitaihe"
                        },
                        {
                            "city_id": "CH051003",
                            "name": "勃利",
                            "en": "Boli"
                        }
                    ]
                },
                {
                    "city_id": "CH0511",
                    "name": "鸡西",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH051101",
                            "name": "鸡西",
                            "en": "Jixi"
                        },
                        {
                            "city_id": "CH051102",
                            "name": "虎林",
                            "en": "Hulin"
                        },
                        {
                            "city_id": "CH051103",
                            "name": "密山",
                            "en": "Mishan"
                        },
                        {
                            "city_id": "CH051104",
                            "name": "鸡东",
                            "en": "jidong"
                        }
                    ]
                },
                {
                    "city_id": "CH0512",
                    "name": "鹤岗",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH051201",
                            "name": "鹤岗",
                            "en": "hegang"
                        },
                        {
                            "city_id": "CH051202",
                            "name": "绥滨",
                            "en": "suibin"
                        },
                        {
                            "city_id": "CH051203",
                            "name": "萝北",
                            "en": "luobei"
                        }
                    ]
                },
                {
                    "city_id": "CH0513",
                    "name": "双鸭山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH051301",
                            "name": "双鸭山",
                            "en": "shuangyashan"
                        },
                        {
                            "city_id": "CH051302",
                            "name": "集贤",
                            "en": "jixian"
                        },
                        {
                            "city_id": "CH051303",
                            "name": "宝清",
                            "en": "baoqing"
                        },
                        {
                            "city_id": "CH051304",
                            "name": "饶河",
                            "en": "raohe"
                        },
                        {
                            "city_id": "CH051305",
                            "name": "友谊",
                            "en": "youyi"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH06",
            "name": "吉林",
            "en": "",
            "list": [
                {
                    "city_id": "CH0601",
                    "name": "长春",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060101",
                            "name": "长春",
                            "en": "Changchun"
                        },
                        {
                            "city_id": "CH060102",
                            "name": "农安",
                            "en": "nongan"
                        },
                        {
                            "city_id": "CH060103",
                            "name": "德惠",
                            "en": "Dehui"
                        },
                        {
                            "city_id": "CH060104",
                            "name": "九台",
                            "en": "Jiutai"
                        },
                        {
                            "city_id": "CH060105",
                            "name": "榆树",
                            "en": "yushu"
                        },
                        {
                            "city_id": "CH060106",
                            "name": "双阳",
                            "en": "shuangyang"
                        }
                    ]
                },
                {
                    "city_id": "CH0602",
                    "name": "吉林",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060201",
                            "name": "吉林",
                            "en": "Jilin"
                        },
                        {
                            "city_id": "CH060202",
                            "name": "舒兰",
                            "en": "shulan"
                        },
                        {
                            "city_id": "CH060203",
                            "name": "永吉",
                            "en": "yongji"
                        },
                        {
                            "city_id": "CH060204",
                            "name": "蛟河",
                            "en": "jiaohe"
                        },
                        {
                            "city_id": "CH060205",
                            "name": "磐石",
                            "en": "Panshi"
                        },
                        {
                            "city_id": "CH060206",
                            "name": "桦甸",
                            "en": "Huadian"
                        }
                    ]
                },
                {
                    "city_id": "CH0603",
                    "name": "延边",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060301",
                            "name": "延吉",
                            "en": "Yanji"
                        },
                        {
                            "city_id": "CH060302",
                            "name": "敦化",
                            "en": "dunhua"
                        },
                        {
                            "city_id": "CH060303",
                            "name": "安图",
                            "en": "antu"
                        },
                        {
                            "city_id": "CH060304",
                            "name": "汪清",
                            "en": "wangqing"
                        },
                        {
                            "city_id": "CH060305",
                            "name": "和龙",
                            "en": "helong"
                        },
                        {
                            "city_id": "CH060307",
                            "name": "龙井",
                            "en": "longjing"
                        },
                        {
                            "city_id": "CH060308",
                            "name": "珲春",
                            "en": "Hunchun"
                        },
                        {
                            "city_id": "CH060309",
                            "name": "图们",
                            "en": "tumen"
                        }
                    ]
                },
                {
                    "city_id": "CH0604",
                    "name": "四平",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060401",
                            "name": "四平",
                            "en": "Siping"
                        },
                        {
                            "city_id": "CH060402",
                            "name": "双辽",
                            "en": "shuangliao"
                        },
                        {
                            "city_id": "CH060403",
                            "name": "梨树",
                            "en": "lishu"
                        },
                        {
                            "city_id": "CH060404",
                            "name": "公主岭",
                            "en": "Gongzhuling"
                        },
                        {
                            "city_id": "CH060405",
                            "name": "伊通",
                            "en": "yitong"
                        }
                    ]
                },
                {
                    "city_id": "CH0605",
                    "name": "通化",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060501",
                            "name": "通化",
                            "en": "tonghua"
                        },
                        {
                            "city_id": "CH060502",
                            "name": "梅河口",
                            "en": "Meihekou"
                        },
                        {
                            "city_id": "CH060503",
                            "name": "柳河",
                            "en": "liuhe"
                        },
                        {
                            "city_id": "CH060504",
                            "name": "辉南",
                            "en": "huinan"
                        },
                        {
                            "city_id": "CH060505",
                            "name": "集安",
                            "en": "jian"
                        },
                        {
                            "city_id": "CH060506",
                            "name": "通化县",
                            "en": "tonghuaxian"
                        }
                    ]
                },
                {
                    "city_id": "CH0606",
                    "name": "白城",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060601",
                            "name": "白城",
                            "en": "baicheng"
                        },
                        {
                            "city_id": "CH060602",
                            "name": "洮南",
                            "en": "Taonan"
                        },
                        {
                            "city_id": "CH060603",
                            "name": "大安",
                            "en": "daan"
                        },
                        {
                            "city_id": "CH060604",
                            "name": "镇赉",
                            "en": "Zhenlai"
                        },
                        {
                            "city_id": "CH060605",
                            "name": "通榆",
                            "en": "tongyu"
                        }
                    ]
                },
                {
                    "city_id": "CH0607",
                    "name": "辽源",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060701",
                            "name": "辽源",
                            "en": "liaoyuan"
                        },
                        {
                            "city_id": "CH060702",
                            "name": "东丰",
                            "en": "Dongfeng"
                        },
                        {
                            "city_id": "CH060703",
                            "name": "东辽",
                            "en": "dongliao"
                        }
                    ]
                },
                {
                    "city_id": "CH0608",
                    "name": "松原",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060801",
                            "name": "松原",
                            "en": "songyuan"
                        },
                        {
                            "city_id": "CH060802",
                            "name": "乾安",
                            "en": "qianan"
                        },
                        {
                            "city_id": "CH060803",
                            "name": "前郭",
                            "en": "qianguo"
                        },
                        {
                            "city_id": "CH060804",
                            "name": "长岭",
                            "en": "Changling"
                        },
                        {
                            "city_id": "CH060805",
                            "name": "扶余",
                            "en": "fuyu"
                        }
                    ]
                },
                {
                    "city_id": "CH0609",
                    "name": "白山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH060901",
                            "name": "白山",
                            "en": "baishan"
                        },
                        {
                            "city_id": "CH060902",
                            "name": "靖宇",
                            "en": "jingyu"
                        },
                        {
                            "city_id": "CH060903",
                            "name": "临江",
                            "en": "Linjiang"
                        },
                        {
                            "city_id": "CH060904",
                            "name": "东岗",
                            "en": "donggang"
                        },
                        {
                            "city_id": "CH060905",
                            "name": "长白",
                            "en": "Changbai"
                        },
                        {
                            "city_id": "CH060906",
                            "name": "抚松",
                            "en": "fusong"
                        },
                        {
                            "city_id": "CH060907",
                            "name": "江源",
                            "en": "jiangyuan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH07",
            "name": "辽宁",
            "en": "",
            "list": [
                {
                    "city_id": "CH0701",
                    "name": "沈阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070101",
                            "name": "沈阳",
                            "en": "shenyang"
                        },
                        {
                            "city_id": "CH070103",
                            "name": "辽中",
                            "en": "Liaozhong"
                        },
                        {
                            "city_id": "CH070104",
                            "name": "康平",
                            "en": "kangping"
                        },
                        {
                            "city_id": "CH070105",
                            "name": "法库",
                            "en": "faku"
                        },
                        {
                            "city_id": "CH070106",
                            "name": "新民",
                            "en": "xinmin"
                        }
                    ]
                },
                {
                    "city_id": "CH0702",
                    "name": "大连",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070201",
                            "name": "大连",
                            "en": "Dalian"
                        },
                        {
                            "city_id": "CH070202",
                            "name": "瓦房店",
                            "en": "wafangdian"
                        },
                        {
                            "city_id": "CH070203",
                            "name": "金州",
                            "en": "Jinzhou"
                        },
                        {
                            "city_id": "CH070204",
                            "name": "普兰店",
                            "en": "pulandian"
                        },
                        {
                            "city_id": "CH070205",
                            "name": "旅顺",
                            "en": "Lushun"
                        },
                        {
                            "city_id": "CH070206",
                            "name": "长海",
                            "en": "changhai"
                        },
                        {
                            "city_id": "CH070207",
                            "name": "庄河",
                            "en": "zhuanghe"
                        }
                    ]
                },
                {
                    "city_id": "CH0703",
                    "name": "鞍山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070301",
                            "name": "鞍山",
                            "en": "Anshan"
                        },
                        {
                            "city_id": "CH070302",
                            "name": "台安",
                            "en": "taian"
                        },
                        {
                            "city_id": "CH070303",
                            "name": "岫岩",
                            "en": "xiuyan"
                        },
                        {
                            "city_id": "CH070304",
                            "name": "海城",
                            "en": "Haicheng"
                        }
                    ]
                },
                {
                    "city_id": "CH0704",
                    "name": "抚顺",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070401",
                            "name": "抚顺",
                            "en": "Fushun"
                        },
                        {
                            "city_id": "CH070402",
                            "name": "新宾",
                            "en": "xinbin"
                        },
                        {
                            "city_id": "CH070403",
                            "name": "清原",
                            "en": "Qingyuan"
                        },
                        {
                            "city_id": "CH070404",
                            "name": "章党",
                            "en": "zhangdang"
                        }
                    ]
                },
                {
                    "city_id": "CH0705",
                    "name": "本溪",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070501",
                            "name": "本溪",
                            "en": "Benxi"
                        },
                        {
                            "city_id": "CH070502",
                            "name": "本溪县",
                            "en": "benxixian"
                        },
                        {
                            "city_id": "CH070504",
                            "name": "桓仁",
                            "en": "Huanren"
                        }
                    ]
                },
                {
                    "city_id": "CH0706",
                    "name": "丹东",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070601",
                            "name": "丹东",
                            "en": "Dandong"
                        },
                        {
                            "city_id": "CH070602",
                            "name": "凤城",
                            "en": "fengcheng"
                        },
                        {
                            "city_id": "CH070603",
                            "name": "宽甸",
                            "en": "Kuandian"
                        },
                        {
                            "city_id": "CH070604",
                            "name": "东港",
                            "en": "donggang"
                        }
                    ]
                },
                {
                    "city_id": "CH0707",
                    "name": "锦州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070701",
                            "name": "锦州",
                            "en": "Jinzhou"
                        },
                        {
                            "city_id": "CH070702",
                            "name": "凌海",
                            "en": "linghai"
                        },
                        {
                            "city_id": "CH070704",
                            "name": "义县",
                            "en": "yixian"
                        },
                        {
                            "city_id": "CH070705",
                            "name": "黑山",
                            "en": "heishan"
                        },
                        {
                            "city_id": "CH070706",
                            "name": "北镇",
                            "en": "beizhen"
                        }
                    ]
                },
                {
                    "city_id": "CH0708",
                    "name": "营口",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070801",
                            "name": "营口",
                            "en": "Yingkou"
                        },
                        {
                            "city_id": "CH070802",
                            "name": "大石桥",
                            "en": "dashiqiao"
                        },
                        {
                            "city_id": "CH070803",
                            "name": "盖州",
                            "en": "gaizhou"
                        }
                    ]
                },
                {
                    "city_id": "CH0709",
                    "name": "阜新",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH070901",
                            "name": "阜新",
                            "en": "Fuxin"
                        },
                        {
                            "city_id": "CH070902",
                            "name": "彰武",
                            "en": "zhangwu"
                        }
                    ]
                },
                {
                    "city_id": "CH0710",
                    "name": "辽阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH071001",
                            "name": "辽阳",
                            "en": "Liaoyang"
                        },
                        {
                            "city_id": "CH071002",
                            "name": "辽阳县",
                            "en": "liaoyangxian"
                        },
                        {
                            "city_id": "CH071003",
                            "name": "灯塔",
                            "en": "dengta"
                        },
                        {
                            "city_id": "CH071004",
                            "name": "弓长岭",
                            "en": "gongchangling"
                        }
                    ]
                },
                {
                    "city_id": "CH0711",
                    "name": "铁岭",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH071101",
                            "name": "铁岭",
                            "en": "Tieling"
                        },
                        {
                            "city_id": "CH071102",
                            "name": "开原",
                            "en": "kaiyuan"
                        },
                        {
                            "city_id": "CH071103",
                            "name": "昌图",
                            "en": "Changtu"
                        },
                        {
                            "city_id": "CH071104",
                            "name": "西丰",
                            "en": "xifeng"
                        },
                        {
                            "city_id": "CH071105",
                            "name": "调兵山",
                            "en": "diaobingshan"
                        }
                    ]
                },
                {
                    "city_id": "CH0712",
                    "name": "朝阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH071201",
                            "name": "朝阳",
                            "en": "chaoyang"
                        },
                        {
                            "city_id": "CH071203",
                            "name": "凌源",
                            "en": "lingyuan"
                        },
                        {
                            "city_id": "CH071204",
                            "name": "喀左",
                            "en": "kazuo"
                        },
                        {
                            "city_id": "CH071205",
                            "name": "北票",
                            "en": "Beipiao"
                        },
                        {
                            "city_id": "CH071207",
                            "name": "建平县",
                            "en": "jianpingxian"
                        }
                    ]
                },
                {
                    "city_id": "CH0713",
                    "name": "盘锦",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH071301",
                            "name": "盘锦",
                            "en": "panjin"
                        },
                        {
                            "city_id": "CH071302",
                            "name": "大洼",
                            "en": "dawa"
                        },
                        {
                            "city_id": "CH071303",
                            "name": "盘山",
                            "en": "panshan"
                        }
                    ]
                },
                {
                    "city_id": "CH0714",
                    "name": "葫芦岛",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH071401",
                            "name": "葫芦岛",
                            "en": "huludao"
                        },
                        {
                            "city_id": "CH071402",
                            "name": "建昌",
                            "en": "jianchang"
                        },
                        {
                            "city_id": "CH071403",
                            "name": "绥中",
                            "en": "suizhong"
                        },
                        {
                            "city_id": "CH071404",
                            "name": "兴城",
                            "en": "xingcheng"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH08",
            "name": "内蒙古",
            "en": "",
            "list": [
                {
                    "city_id": "CH0801",
                    "name": "呼和浩特",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080101",
                            "name": "呼和浩特",
                            "en": "Hohhot"
                        },
                        {
                            "city_id": "CH080102",
                            "name": "土左旗",
                            "en": "tuzuoqi"
                        },
                        {
                            "city_id": "CH080103",
                            "name": "托县",
                            "en": "togtoh"
                        },
                        {
                            "city_id": "CH080104",
                            "name": "和林",
                            "en": "horinger"
                        },
                        {
                            "city_id": "CH080105",
                            "name": "清水河",
                            "en": "qingshuihe"
                        },
                        {
                            "city_id": "CH080106",
                            "name": "呼市郊区",
                            "en": "hushijiaoqu"
                        },
                        {
                            "city_id": "CH080107",
                            "name": "武川",
                            "en": "wuchuan"
                        }
                    ]
                },
                {
                    "city_id": "CH0802",
                    "name": "包头",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080201",
                            "name": "包头",
                            "en": "Baotou"
                        },
                        {
                            "city_id": "CH080202",
                            "name": "白云鄂博",
                            "en": "bayan obo"
                        },
                        {
                            "city_id": "CH080203",
                            "name": "满都拉",
                            "en": "mandal"
                        },
                        {
                            "city_id": "CH080204",
                            "name": "土右旗",
                            "en": "tuyouqi"
                        },
                        {
                            "city_id": "CH080205",
                            "name": "固阳",
                            "en": "guyang"
                        },
                        {
                            "city_id": "CH080206",
                            "name": "达茂旗",
                            "en": "damaoqi"
                        },
                        {
                            "city_id": "CH080207",
                            "name": "希拉穆仁",
                            "en": "xilamuren"
                        }
                    ]
                },
                {
                    "city_id": "CH0803",
                    "name": "乌海",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080301",
                            "name": "乌海",
                            "en": "wuhai"
                        }
                    ]
                },
                {
                    "city_id": "CH0804",
                    "name": "乌兰察布",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080401",
                            "name": "集宁",
                            "en": "jining"
                        },
                        {
                            "city_id": "CH080402",
                            "name": "卓资",
                            "en": "zhuozi"
                        },
                        {
                            "city_id": "CH080403",
                            "name": "化德",
                            "en": "huade"
                        },
                        {
                            "city_id": "CH080404",
                            "name": "商都",
                            "en": "shangdu"
                        },
                        {
                            "city_id": "CH080406",
                            "name": "兴和",
                            "en": "xinghe"
                        },
                        {
                            "city_id": "CH080407",
                            "name": "凉城",
                            "en": "liangcheng"
                        },
                        {
                            "city_id": "CH080408",
                            "name": "察右前旗",
                            "en": "chayouqianqi"
                        },
                        {
                            "city_id": "CH080409",
                            "name": "察右中旗",
                            "en": "chayouzhongqi"
                        },
                        {
                            "city_id": "CH080410",
                            "name": "察右后旗",
                            "en": "chayouhouqi"
                        },
                        {
                            "city_id": "CH080411",
                            "name": "四子王旗",
                            "en": "siziwangqi"
                        },
                        {
                            "city_id": "CH080412",
                            "name": "丰镇",
                            "en": "fengzhen"
                        }
                    ]
                },
                {
                    "city_id": "CH0805",
                    "name": "通辽",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080501",
                            "name": "通辽",
                            "en": "tongliao"
                        },
                        {
                            "city_id": "CH080502",
                            "name": "舍伯吐",
                            "en": "shebotu"
                        },
                        {
                            "city_id": "CH080503",
                            "name": "科左中旗",
                            "en": "kezuozhongqi"
                        },
                        {
                            "city_id": "CH080504",
                            "name": "科左后旗",
                            "en": "kezuohouqi"
                        },
                        {
                            "city_id": "CH080505",
                            "name": "青龙山",
                            "en": "qinglongshan"
                        },
                        {
                            "city_id": "CH080506",
                            "name": "开鲁",
                            "en": "kailu"
                        },
                        {
                            "city_id": "CH080507",
                            "name": "库伦",
                            "en": "hure"
                        },
                        {
                            "city_id": "CH080508",
                            "name": "奈曼",
                            "en": "naiman"
                        },
                        {
                            "city_id": "CH080509",
                            "name": "扎鲁特",
                            "en": "jarud"
                        },
                        {
                            "city_id": "CH080510",
                            "name": "高力板",
                            "en": "gaoliban"
                        },
                        {
                            "city_id": "CH080511",
                            "name": "巴雅尔吐胡硕",
                            "en": "bayaertuhushuo"
                        }
                    ]
                },
                {
                    "city_id": "CH0806",
                    "name": "赤峰",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080601",
                            "name": "赤峰",
                            "en": "chifeng"
                        },
                        {
                            "city_id": "CH080603",
                            "name": "阿鲁旗",
                            "en": "aluqi"
                        },
                        {
                            "city_id": "CH080604",
                            "name": "浩尔吐",
                            "en": "haoertu"
                        },
                        {
                            "city_id": "CH080605",
                            "name": "巴林左旗",
                            "en": "balinzuoqi"
                        },
                        {
                            "city_id": "CH080606",
                            "name": "巴林右旗",
                            "en": "balinyouqi"
                        },
                        {
                            "city_id": "CH080607",
                            "name": "林西",
                            "en": "linxi"
                        },
                        {
                            "city_id": "CH080608",
                            "name": "克什克腾",
                            "en": "keshiketeng"
                        },
                        {
                            "city_id": "CH080609",
                            "name": "翁牛特",
                            "en": "wengniute"
                        },
                        {
                            "city_id": "CH080610",
                            "name": "岗子",
                            "en": "gangzi"
                        },
                        {
                            "city_id": "CH080611",
                            "name": "喀喇沁",
                            "en": "kalaqin"
                        },
                        {
                            "city_id": "CH080612",
                            "name": "八里罕",
                            "en": "balihan"
                        },
                        {
                            "city_id": "CH080613",
                            "name": "宁城",
                            "en": "ningcheng"
                        },
                        {
                            "city_id": "CH080614",
                            "name": "敖汉",
                            "en": "aohan"
                        },
                        {
                            "city_id": "CH080615",
                            "name": "宝国吐",
                            "en": "bugt"
                        }
                    ]
                },
                {
                    "city_id": "CH0807",
                    "name": "鄂尔多斯",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080701",
                            "name": "鄂尔多斯",
                            "en": "ordos"
                        },
                        {
                            "city_id": "CH080703",
                            "name": "达拉特",
                            "en": "dalate"
                        },
                        {
                            "city_id": "CH080704",
                            "name": "准格尔",
                            "en": "zhungeer"
                        },
                        {
                            "city_id": "CH080705",
                            "name": "鄂前旗",
                            "en": "eqianqi"
                        },
                        {
                            "city_id": "CH080706",
                            "name": "河南",
                            "en": "henan"
                        },
                        {
                            "city_id": "CH080707",
                            "name": "伊克乌素",
                            "en": "yikewusu"
                        },
                        {
                            "city_id": "CH080708",
                            "name": "鄂托克",
                            "en": "otog qi"
                        },
                        {
                            "city_id": "CH080709",
                            "name": "杭锦旗",
                            "en": "hanggin qi"
                        },
                        {
                            "city_id": "CH080710",
                            "name": "乌审旗",
                            "en": "uxin qi"
                        },
                        {
                            "city_id": "CH080711",
                            "name": "伊金霍洛",
                            "en": "yijinhuoluo"
                        },
                        {
                            "city_id": "CH080712",
                            "name": "乌审召",
                            "en": "wushenzhao"
                        },
                        {
                            "city_id": "CH080713",
                            "name": "东胜",
                            "en": "dongsheng"
                        }
                    ]
                },
                {
                    "city_id": "CH0808",
                    "name": "巴彦淖尔",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080801",
                            "name": "临河",
                            "en": "linhe"
                        },
                        {
                            "city_id": "CH080802",
                            "name": "五原",
                            "en": "wuyuan"
                        },
                        {
                            "city_id": "CH080803",
                            "name": "磴口",
                            "en": "dengkou"
                        },
                        {
                            "city_id": "CH080804",
                            "name": "乌前旗",
                            "en": "wuqianqi"
                        },
                        {
                            "city_id": "CH080805",
                            "name": "大佘太",
                            "en": "dashetai"
                        },
                        {
                            "city_id": "CH080806",
                            "name": "乌中旗",
                            "en": "wuzhongqi"
                        },
                        {
                            "city_id": "CH080807",
                            "name": "乌后旗",
                            "en": "wuhouqi"
                        },
                        {
                            "city_id": "CH080808",
                            "name": "海力素",
                            "en": "hails"
                        },
                        {
                            "city_id": "CH080809",
                            "name": "那仁宝力格",
                            "en": "narenbaolige"
                        },
                        {
                            "city_id": "CH080810",
                            "name": "杭锦后旗",
                            "en": "hangjinhouqi"
                        }
                    ]
                },
                {
                    "city_id": "CH0809",
                    "name": "锡林郭勒",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH080901",
                            "name": "锡林浩特",
                            "en": "xilin hot"
                        },
                        {
                            "city_id": "CH080903",
                            "name": "二连浩特",
                            "en": "erenhot"
                        },
                        {
                            "city_id": "CH080904",
                            "name": "阿巴嘎",
                            "en": "abaga"
                        },
                        {
                            "city_id": "CH080906",
                            "name": "苏左旗",
                            "en": "suzuoqi"
                        },
                        {
                            "city_id": "CH080907",
                            "name": "苏右旗",
                            "en": "suyouqi"
                        },
                        {
                            "city_id": "CH080908",
                            "name": "朱日和",
                            "en": "zhurihe"
                        },
                        {
                            "city_id": "CH080909",
                            "name": "东乌旗",
                            "en": "dongwuqi"
                        },
                        {
                            "city_id": "CH080910",
                            "name": "西乌旗",
                            "en": "xiwuqi"
                        },
                        {
                            "city_id": "CH080911",
                            "name": "太仆寺",
                            "en": "taipusi"
                        },
                        {
                            "city_id": "CH080912",
                            "name": "镶黄旗",
                            "en": "xianghuangqi"
                        },
                        {
                            "city_id": "CH080913",
                            "name": "正镶白旗",
                            "en": "zhengxiangbaiqi"
                        },
                        {
                            "city_id": "CH080914",
                            "name": "正蓝旗",
                            "en": "zhenglanqi"
                        },
                        {
                            "city_id": "CH080915",
                            "name": "多伦",
                            "en": "duolun"
                        },
                        {
                            "city_id": "CH080916",
                            "name": "博克图",
                            "en": "boketu"
                        },
                        {
                            "city_id": "CH080917",
                            "name": "乌拉盖",
                            "en": "ulgai"
                        }
                    ]
                },
                {
                    "city_id": "CH0810",
                    "name": "呼伦贝尔",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH081001",
                            "name": "海拉尔",
                            "en": "hailar"
                        },
                        {
                            "city_id": "CH081002",
                            "name": "小二沟",
                            "en": "xiaoergou"
                        },
                        {
                            "city_id": "CH081003",
                            "name": "阿荣旗",
                            "en": "arongqi"
                        },
                        {
                            "city_id": "CH081004",
                            "name": "莫力达瓦",
                            "en": "molidawa"
                        },
                        {
                            "city_id": "CH081005",
                            "name": "鄂伦春旗",
                            "en": "elunchunqi"
                        },
                        {
                            "city_id": "CH081006",
                            "name": "鄂温克旗",
                            "en": "ewenkeqi"
                        },
                        {
                            "city_id": "CH081007",
                            "name": "陈旗",
                            "en": "chenqi"
                        },
                        {
                            "city_id": "CH081008",
                            "name": "新左旗",
                            "en": "xinzuoqi"
                        },
                        {
                            "city_id": "CH081009",
                            "name": "新右旗",
                            "en": "xinyouqi"
                        },
                        {
                            "city_id": "CH081010",
                            "name": "满洲里",
                            "en": "manzhouli"
                        },
                        {
                            "city_id": "CH081011",
                            "name": "牙克石",
                            "en": "yakeshi"
                        },
                        {
                            "city_id": "CH081012",
                            "name": "扎兰屯",
                            "en": "zalantun"
                        },
                        {
                            "city_id": "CH081014",
                            "name": "额尔古纳",
                            "en": "eerguna"
                        },
                        {
                            "city_id": "CH081015",
                            "name": "根河",
                            "en": "genhe"
                        },
                        {
                            "city_id": "CH081016",
                            "name": "图里河",
                            "en": "tulihe"
                        }
                    ]
                },
                {
                    "city_id": "CH0811",
                    "name": "兴安盟",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH081101",
                            "name": "乌兰浩特",
                            "en": "ulan hot"
                        },
                        {
                            "city_id": "CH081102",
                            "name": "阿尔山",
                            "en": "arxan"
                        },
                        {
                            "city_id": "CH081103",
                            "name": "科右中旗",
                            "en": "keyouzhongqi"
                        },
                        {
                            "city_id": "CH081104",
                            "name": "胡尔勒",
                            "en": "huerle"
                        },
                        {
                            "city_id": "CH081105",
                            "name": "扎赉特",
                            "en": "zhalaite"
                        },
                        {
                            "city_id": "CH081106",
                            "name": "索伦",
                            "en": "solon"
                        },
                        {
                            "city_id": "CH081107",
                            "name": "突泉",
                            "en": "tuquan"
                        },
                        {
                            "city_id": "CH081108",
                            "name": "霍林郭勒",
                            "en": "huolin gol"
                        },
                        {
                            "city_id": "CH081109",
                            "name": "科右前旗",
                            "en": "keyouqianqi"
                        }
                    ]
                },
                {
                    "city_id": "CH0812",
                    "name": "阿拉善盟",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH081201",
                            "name": "阿左旗",
                            "en": "azuoqi"
                        },
                        {
                            "city_id": "CH081202",
                            "name": "阿右旗",
                            "en": "ayouqi"
                        },
                        {
                            "city_id": "CH081203",
                            "name": "额济纳",
                            "en": "ejina"
                        },
                        {
                            "city_id": "CH081204",
                            "name": "拐子湖",
                            "en": "guaizihu"
                        },
                        {
                            "city_id": "CH081205",
                            "name": "吉兰太",
                            "en": "jartai"
                        },
                        {
                            "city_id": "CH081206",
                            "name": "锡林高勒",
                            "en": "xilingaole"
                        },
                        {
                            "city_id": "CH081207",
                            "name": "头道湖",
                            "en": "toudaohu"
                        },
                        {
                            "city_id": "CH081208",
                            "name": "中泉子",
                            "en": "zhongquanzi"
                        },
                        {
                            "city_id": "CH081209",
                            "name": "诺尔公",
                            "en": "nuoergong"
                        },
                        {
                            "city_id": "CH081210",
                            "name": "雅布赖",
                            "en": "yabrai"
                        },
                        {
                            "city_id": "CH081211",
                            "name": "乌斯泰",
                            "en": "wusitai"
                        },
                        {
                            "city_id": "CH081212",
                            "name": "孪井滩",
                            "en": "luanjingtan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH09",
            "name": "河北",
            "en": "",
            "list": [
                {
                    "city_id": "CH0901",
                    "name": "石家庄",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090101",
                            "name": "石家庄",
                            "en": "Shijiazhuang"
                        },
                        {
                            "city_id": "CH090102",
                            "name": "井陉",
                            "en": "jingxing"
                        },
                        {
                            "city_id": "CH090103",
                            "name": "正定",
                            "en": "Zhengding"
                        },
                        {
                            "city_id": "CH090104",
                            "name": "栾城",
                            "en": "Luancheng"
                        },
                        {
                            "city_id": "CH090105",
                            "name": "行唐",
                            "en": "xingtang"
                        },
                        {
                            "city_id": "CH090106",
                            "name": "灵寿",
                            "en": "lingshou"
                        },
                        {
                            "city_id": "CH090107",
                            "name": "高邑",
                            "en": "gaoyi"
                        },
                        {
                            "city_id": "CH090108",
                            "name": "深泽",
                            "en": "shenze"
                        },
                        {
                            "city_id": "CH090109",
                            "name": "赞皇",
                            "en": "zanhuang"
                        },
                        {
                            "city_id": "CH090110",
                            "name": "无极",
                            "en": "wuji"
                        },
                        {
                            "city_id": "CH090111",
                            "name": "平山",
                            "en": "pingshan"
                        },
                        {
                            "city_id": "CH090112",
                            "name": "元氏",
                            "en": "yuanshi"
                        },
                        {
                            "city_id": "CH090113",
                            "name": "赵县",
                            "en": "zhaoxian"
                        },
                        {
                            "city_id": "CH090114",
                            "name": "辛集",
                            "en": "xinji"
                        },
                        {
                            "city_id": "CH090115",
                            "name": "藁城",
                            "en": "gaocheng"
                        },
                        {
                            "city_id": "CH090116",
                            "name": "晋州",
                            "en": "jinzhou"
                        },
                        {
                            "city_id": "CH090117",
                            "name": "新乐",
                            "en": "xinle"
                        },
                        {
                            "city_id": "CH090118",
                            "name": "鹿泉",
                            "en": "luquan"
                        }
                    ]
                },
                {
                    "city_id": "CH0902",
                    "name": "保定",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090201",
                            "name": "保定",
                            "en": "Baoding"
                        },
                        {
                            "city_id": "CH090202",
                            "name": "满城",
                            "en": "mancheng"
                        },
                        {
                            "city_id": "CH090203",
                            "name": "阜平",
                            "en": "fuping"
                        },
                        {
                            "city_id": "CH090204",
                            "name": "徐水",
                            "en": "xushui"
                        },
                        {
                            "city_id": "CH090205",
                            "name": "唐县",
                            "en": "tangxian"
                        },
                        {
                            "city_id": "CH090206",
                            "name": "高阳",
                            "en": "gaoyang"
                        },
                        {
                            "city_id": "CH090207",
                            "name": "容城",
                            "en": "rongcheng"
                        },
                        {
                            "city_id": "CH090209",
                            "name": "涞源",
                            "en": "laiyuan"
                        },
                        {
                            "city_id": "CH090210",
                            "name": "望都",
                            "en": "wangdu"
                        },
                        {
                            "city_id": "CH090211",
                            "name": "安新",
                            "en": "anxin"
                        },
                        {
                            "city_id": "CH090212",
                            "name": "易县",
                            "en": "yixian"
                        },
                        {
                            "city_id": "CH090214",
                            "name": "曲阳",
                            "en": "quyang"
                        },
                        {
                            "city_id": "CH090215",
                            "name": "蠡县",
                            "en": "lixian"
                        },
                        {
                            "city_id": "CH090216",
                            "name": "顺平",
                            "en": "shunping"
                        },
                        {
                            "city_id": "CH090217",
                            "name": "雄县",
                            "en": "xiongxian"
                        },
                        {
                            "city_id": "CH090218",
                            "name": "涿州",
                            "en": "Zhuozhou"
                        },
                        {
                            "city_id": "CH090219",
                            "name": "定州",
                            "en": "dingzhou"
                        },
                        {
                            "city_id": "CH090220",
                            "name": "安国",
                            "en": "anguo"
                        },
                        {
                            "city_id": "CH090221",
                            "name": "高碑店",
                            "en": "gaobeidian"
                        },
                        {
                            "city_id": "CH090222",
                            "name": "涞水",
                            "en": "laishui"
                        },
                        {
                            "city_id": "CH090223",
                            "name": "定兴",
                            "en": "dingxing"
                        },
                        {
                            "city_id": "CH090224",
                            "name": "清苑",
                            "en": "qingyuan"
                        },
                        {
                            "city_id": "CH090225",
                            "name": "博野",
                            "en": "boye"
                        }
                    ]
                },
                {
                    "city_id": "CH0903",
                    "name": "张家口",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090301",
                            "name": "张家口",
                            "en": "Zhangjiakou"
                        },
                        {
                            "city_id": "CH090302",
                            "name": "宣化",
                            "en": "Xuanhua"
                        },
                        {
                            "city_id": "CH090303",
                            "name": "张北",
                            "en": "zhangbei"
                        },
                        {
                            "city_id": "CH090304",
                            "name": "康保",
                            "en": "kangbao"
                        },
                        {
                            "city_id": "CH090305",
                            "name": "沽源",
                            "en": "guyuan"
                        },
                        {
                            "city_id": "CH090306",
                            "name": "尚义",
                            "en": "shangyi"
                        },
                        {
                            "city_id": "CH090307",
                            "name": "蔚县",
                            "en": "yuxian"
                        },
                        {
                            "city_id": "CH090308",
                            "name": "阳原",
                            "en": "yangyuan"
                        },
                        {
                            "city_id": "CH090309",
                            "name": "怀安",
                            "en": "huaian"
                        },
                        {
                            "city_id": "CH090310",
                            "name": "万全",
                            "en": "wanquan"
                        },
                        {
                            "city_id": "CH090311",
                            "name": "怀来",
                            "en": "huailai"
                        },
                        {
                            "city_id": "CH090312",
                            "name": "涿鹿",
                            "en": "zhuolu"
                        },
                        {
                            "city_id": "CH090313",
                            "name": "赤城",
                            "en": "chicheng"
                        },
                        {
                            "city_id": "CH090314",
                            "name": "崇礼",
                            "en": "chongli"
                        }
                    ]
                },
                {
                    "city_id": "CH0904",
                    "name": "承德",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090402",
                            "name": "承德",
                            "en": "Chengde"
                        },
                        {
                            "city_id": "CH090403",
                            "name": "承德县",
                            "en": "chengdexian"
                        },
                        {
                            "city_id": "CH090404",
                            "name": "兴隆",
                            "en": "xinglong"
                        },
                        {
                            "city_id": "CH090405",
                            "name": "平泉",
                            "en": "pingquan"
                        },
                        {
                            "city_id": "CH090406",
                            "name": "滦平",
                            "en": "luanping"
                        },
                        {
                            "city_id": "CH090407",
                            "name": "隆化",
                            "en": "longhua"
                        },
                        {
                            "city_id": "CH090408",
                            "name": "丰宁",
                            "en": "fengning"
                        },
                        {
                            "city_id": "CH090409",
                            "name": "宽城",
                            "en": "kuancheng"
                        },
                        {
                            "city_id": "CH090410",
                            "name": "围场",
                            "en": "Weichang"
                        }
                    ]
                },
                {
                    "city_id": "CH0905",
                    "name": "唐山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090501",
                            "name": "唐山",
                            "en": "Tangshan"
                        },
                        {
                            "city_id": "CH090502",
                            "name": "丰南",
                            "en": "fengnan"
                        },
                        {
                            "city_id": "CH090503",
                            "name": "丰润",
                            "en": "Fengrun"
                        },
                        {
                            "city_id": "CH090504",
                            "name": "滦县",
                            "en": "luanxian"
                        },
                        {
                            "city_id": "CH090505",
                            "name": "滦南",
                            "en": "luannan"
                        },
                        {
                            "city_id": "CH090506",
                            "name": "乐亭",
                            "en": "laoting"
                        },
                        {
                            "city_id": "CH090507",
                            "name": "迁西",
                            "en": "qianxi"
                        },
                        {
                            "city_id": "CH090508",
                            "name": "玉田",
                            "en": "yutian"
                        },
                        {
                            "city_id": "CH090509",
                            "name": "唐海",
                            "en": "tanghai"
                        },
                        {
                            "city_id": "CH090510",
                            "name": "遵化",
                            "en": "zunhua"
                        },
                        {
                            "city_id": "CH090511",
                            "name": "迁安",
                            "en": "qianan"
                        },
                        {
                            "city_id": "CH090512",
                            "name": "曹妃甸",
                            "en": "caofeidian"
                        }
                    ]
                },
                {
                    "city_id": "CH0906",
                    "name": "廊坊",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090601",
                            "name": "廊坊",
                            "en": "Langfang"
                        },
                        {
                            "city_id": "CH090602",
                            "name": "固安",
                            "en": "guan"
                        },
                        {
                            "city_id": "CH090603",
                            "name": "永清",
                            "en": "yongqing"
                        },
                        {
                            "city_id": "CH090604",
                            "name": "香河",
                            "en": "xianghe"
                        },
                        {
                            "city_id": "CH090605",
                            "name": "大城",
                            "en": "dacheng"
                        },
                        {
                            "city_id": "CH090606",
                            "name": "文安",
                            "en": "wenan"
                        },
                        {
                            "city_id": "CH090607",
                            "name": "大厂",
                            "en": "dachang"
                        },
                        {
                            "city_id": "CH090608",
                            "name": "霸州",
                            "en": "bazhou"
                        },
                        {
                            "city_id": "CH090609",
                            "name": "三河",
                            "en": "sanhe"
                        }
                    ]
                },
                {
                    "city_id": "CH0907",
                    "name": "沧州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090701",
                            "name": "沧州",
                            "en": "cangzhou"
                        },
                        {
                            "city_id": "CH090702",
                            "name": "青县",
                            "en": "qingxian"
                        },
                        {
                            "city_id": "CH090703",
                            "name": "东光",
                            "en": "dongguang"
                        },
                        {
                            "city_id": "CH090704",
                            "name": "海兴",
                            "en": "haixing"
                        },
                        {
                            "city_id": "CH090705",
                            "name": "盐山",
                            "en": "yanshan"
                        },
                        {
                            "city_id": "CH090706",
                            "name": "肃宁",
                            "en": "suning"
                        },
                        {
                            "city_id": "CH090707",
                            "name": "南皮",
                            "en": "nanpi"
                        },
                        {
                            "city_id": "CH090708",
                            "name": "吴桥",
                            "en": "wuqiao"
                        },
                        {
                            "city_id": "CH090709",
                            "name": "献县",
                            "en": "xianxian"
                        },
                        {
                            "city_id": "CH090710",
                            "name": "孟村",
                            "en": "mengcun"
                        },
                        {
                            "city_id": "CH090711",
                            "name": "泊头",
                            "en": "botou"
                        },
                        {
                            "city_id": "CH090712",
                            "name": "任丘",
                            "en": "Renqiu"
                        },
                        {
                            "city_id": "CH090713",
                            "name": "黄骅",
                            "en": "huanghua"
                        },
                        {
                            "city_id": "CH090714",
                            "name": "河间",
                            "en": "hejian"
                        },
                        {
                            "city_id": "CH090716",
                            "name": "沧县",
                            "en": "cangxian"
                        }
                    ]
                },
                {
                    "city_id": "CH0908",
                    "name": "衡水",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090801",
                            "name": "衡水",
                            "en": "hengshui"
                        },
                        {
                            "city_id": "CH090802",
                            "name": "枣强",
                            "en": "zaoqiang"
                        },
                        {
                            "city_id": "CH090803",
                            "name": "武邑",
                            "en": "wuyi"
                        },
                        {
                            "city_id": "CH090804",
                            "name": "武强",
                            "en": "wuqiang"
                        },
                        {
                            "city_id": "CH090805",
                            "name": "饶阳",
                            "en": "raoyang"
                        },
                        {
                            "city_id": "CH090806",
                            "name": "安平",
                            "en": "anping"
                        },
                        {
                            "city_id": "CH090807",
                            "name": "故城",
                            "en": "gucheng"
                        },
                        {
                            "city_id": "CH090808",
                            "name": "景县",
                            "en": "jingxian"
                        },
                        {
                            "city_id": "CH090809",
                            "name": "阜城",
                            "en": "fucheng"
                        },
                        {
                            "city_id": "CH090810",
                            "name": "冀州",
                            "en": "jizhou"
                        },
                        {
                            "city_id": "CH090811",
                            "name": "深州",
                            "en": "shenzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH0909",
                    "name": "邢台",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH090901",
                            "name": "邢台",
                            "en": "Xingtai"
                        },
                        {
                            "city_id": "CH090902",
                            "name": "临城",
                            "en": "lincheng"
                        },
                        {
                            "city_id": "CH090904",
                            "name": "内丘",
                            "en": "neiqiu"
                        },
                        {
                            "city_id": "CH090905",
                            "name": "柏乡",
                            "en": "baixiang"
                        },
                        {
                            "city_id": "CH090906",
                            "name": "隆尧",
                            "en": "longyao"
                        },
                        {
                            "city_id": "CH090907",
                            "name": "南和",
                            "en": "nanhe"
                        },
                        {
                            "city_id": "CH090908",
                            "name": "宁晋",
                            "en": "ningjin"
                        },
                        {
                            "city_id": "CH090909",
                            "name": "巨鹿",
                            "en": "julu"
                        },
                        {
                            "city_id": "CH090910",
                            "name": "新河",
                            "en": "xinhe"
                        },
                        {
                            "city_id": "CH090911",
                            "name": "广宗",
                            "en": "guangzong"
                        },
                        {
                            "city_id": "CH090912",
                            "name": "平乡",
                            "en": "pingxiang"
                        },
                        {
                            "city_id": "CH090913",
                            "name": "威县",
                            "en": "weixian"
                        },
                        {
                            "city_id": "CH090914",
                            "name": "清河",
                            "en": "qinghe"
                        },
                        {
                            "city_id": "CH090915",
                            "name": "临西",
                            "en": "linxi"
                        },
                        {
                            "city_id": "CH090916",
                            "name": "南宫",
                            "en": "nangong"
                        },
                        {
                            "city_id": "CH090917",
                            "name": "沙河",
                            "en": "shahe"
                        },
                        {
                            "city_id": "CH090918",
                            "name": "任县",
                            "en": "renxian"
                        }
                    ]
                },
                {
                    "city_id": "CH0910",
                    "name": "邯郸",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH091001",
                            "name": "邯郸",
                            "en": "handan"
                        },
                        {
                            "city_id": "CH091002",
                            "name": "峰峰",
                            "en": "fengfeng"
                        },
                        {
                            "city_id": "CH091003",
                            "name": "临漳",
                            "en": "linzhang"
                        },
                        {
                            "city_id": "CH091004",
                            "name": "成安",
                            "en": "chengan"
                        },
                        {
                            "city_id": "CH091005",
                            "name": "大名",
                            "en": "daming"
                        },
                        {
                            "city_id": "CH091006",
                            "name": "涉县",
                            "en": "shexian"
                        },
                        {
                            "city_id": "CH091007",
                            "name": "磁县",
                            "en": "cixian"
                        },
                        {
                            "city_id": "CH091008",
                            "name": "肥乡",
                            "en": "feixiang"
                        },
                        {
                            "city_id": "CH091009",
                            "name": "永年",
                            "en": "yongnian"
                        },
                        {
                            "city_id": "CH091010",
                            "name": "邱县",
                            "en": "qiuxian"
                        },
                        {
                            "city_id": "CH091011",
                            "name": "鸡泽",
                            "en": "jize"
                        },
                        {
                            "city_id": "CH091012",
                            "name": "广平",
                            "en": "guangping"
                        },
                        {
                            "city_id": "CH091013",
                            "name": "馆陶",
                            "en": "guantao"
                        },
                        {
                            "city_id": "CH091014",
                            "name": "魏县",
                            "en": "weixian"
                        },
                        {
                            "city_id": "CH091015",
                            "name": "曲周",
                            "en": "quzhou"
                        },
                        {
                            "city_id": "CH091016",
                            "name": "武安",
                            "en": "wuan"
                        }
                    ]
                },
                {
                    "city_id": "CH0911",
                    "name": "秦皇岛",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH091101",
                            "name": "秦皇岛",
                            "en": "Qinhuangdao"
                        },
                        {
                            "city_id": "CH091102",
                            "name": "青龙",
                            "en": "qinglong"
                        },
                        {
                            "city_id": "CH091103",
                            "name": "昌黎",
                            "en": "Changli"
                        },
                        {
                            "city_id": "CH091104",
                            "name": "抚宁",
                            "en": "funing"
                        },
                        {
                            "city_id": "CH091105",
                            "name": "卢龙",
                            "en": "lulong"
                        },
                        {
                            "city_id": "CH091106",
                            "name": "北戴河",
                            "en": "beidaihe"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH10",
            "name": "山西",
            "en": "",
            "list": [
                {
                    "city_id": "CH1001",
                    "name": "太原",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100101",
                            "name": "太原",
                            "en": "Taiyuan"
                        },
                        {
                            "city_id": "CH100102",
                            "name": "清徐",
                            "en": "qingxu"
                        },
                        {
                            "city_id": "CH100103",
                            "name": "阳曲",
                            "en": "yangqu"
                        },
                        {
                            "city_id": "CH100104",
                            "name": "娄烦",
                            "en": "loufan"
                        },
                        {
                            "city_id": "CH100105",
                            "name": "古交",
                            "en": "gujiao"
                        },
                        {
                            "city_id": "CH100106",
                            "name": "尖草坪区",
                            "en": "jiancaopingqu"
                        },
                        {
                            "city_id": "CH100107",
                            "name": "小店区",
                            "en": "xiaodianqu"
                        }
                    ]
                },
                {
                    "city_id": "CH1002",
                    "name": "大同",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100201",
                            "name": "大同",
                            "en": "datong"
                        },
                        {
                            "city_id": "CH100202",
                            "name": "阳高",
                            "en": "yanggao"
                        },
                        {
                            "city_id": "CH100203",
                            "name": "大同县",
                            "en": "datongxian"
                        },
                        {
                            "city_id": "CH100204",
                            "name": "天镇",
                            "en": "tianzhen"
                        },
                        {
                            "city_id": "CH100205",
                            "name": "广灵",
                            "en": "guangling"
                        },
                        {
                            "city_id": "CH100206",
                            "name": "灵丘",
                            "en": "lingqiu"
                        },
                        {
                            "city_id": "CH100207",
                            "name": "浑源",
                            "en": "hunyuan"
                        },
                        {
                            "city_id": "CH100208",
                            "name": "左云",
                            "en": "zuoyun"
                        }
                    ]
                },
                {
                    "city_id": "CH1003",
                    "name": "阳泉",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100301",
                            "name": "阳泉",
                            "en": "yangquan"
                        },
                        {
                            "city_id": "CH100302",
                            "name": "盂县",
                            "en": "yuxian"
                        },
                        {
                            "city_id": "CH100303",
                            "name": "平定",
                            "en": "pingding"
                        }
                    ]
                },
                {
                    "city_id": "CH1004",
                    "name": "晋中",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100401",
                            "name": "晋中",
                            "en": "jinzhong"
                        },
                        {
                            "city_id": "CH100402",
                            "name": "榆次",
                            "en": "yuci"
                        },
                        {
                            "city_id": "CH100403",
                            "name": "榆社",
                            "en": "yushe"
                        },
                        {
                            "city_id": "CH100404",
                            "name": "左权",
                            "en": "zuoquan"
                        },
                        {
                            "city_id": "CH100405",
                            "name": "和顺",
                            "en": "heshun"
                        },
                        {
                            "city_id": "CH100406",
                            "name": "昔阳",
                            "en": "xiyang"
                        },
                        {
                            "city_id": "CH100407",
                            "name": "寿阳",
                            "en": "shouyang"
                        },
                        {
                            "city_id": "CH100408",
                            "name": "太谷",
                            "en": "taigu"
                        },
                        {
                            "city_id": "CH100409",
                            "name": "祁县",
                            "en": "qixian"
                        },
                        {
                            "city_id": "CH100410",
                            "name": "平遥",
                            "en": "pingyao"
                        },
                        {
                            "city_id": "CH100411",
                            "name": "灵石",
                            "en": "lingshi"
                        },
                        {
                            "city_id": "CH100412",
                            "name": "介休",
                            "en": "jiexiu"
                        }
                    ]
                },
                {
                    "city_id": "CH1005",
                    "name": "长治",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100501",
                            "name": "长治",
                            "en": "changzhi"
                        },
                        {
                            "city_id": "CH100502",
                            "name": "黎城",
                            "en": "licheng"
                        },
                        {
                            "city_id": "CH100503",
                            "name": "屯留",
                            "en": "tunliu"
                        },
                        {
                            "city_id": "CH100504",
                            "name": "潞城",
                            "en": "lucheng"
                        },
                        {
                            "city_id": "CH100505",
                            "name": "襄垣",
                            "en": "xiangyuan"
                        },
                        {
                            "city_id": "CH100506",
                            "name": "平顺",
                            "en": "pingshun"
                        },
                        {
                            "city_id": "CH100507",
                            "name": "武乡",
                            "en": "wuxiang"
                        },
                        {
                            "city_id": "CH100508",
                            "name": "沁县",
                            "en": "qinxian"
                        },
                        {
                            "city_id": "CH100509",
                            "name": "长子",
                            "en": "zhangzi"
                        },
                        {
                            "city_id": "CH100510",
                            "name": "沁源",
                            "en": "qinyuan"
                        },
                        {
                            "city_id": "CH100511",
                            "name": "壶关",
                            "en": "huguan"
                        }
                    ]
                },
                {
                    "city_id": "CH1006",
                    "name": "晋城",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100601",
                            "name": "晋城",
                            "en": "jincheng"
                        },
                        {
                            "city_id": "CH100602",
                            "name": "沁水",
                            "en": "qinshui"
                        },
                        {
                            "city_id": "CH100603",
                            "name": "阳城",
                            "en": "yangcheng"
                        },
                        {
                            "city_id": "CH100604",
                            "name": "陵川",
                            "en": "lingchuan"
                        },
                        {
                            "city_id": "CH100605",
                            "name": "高平",
                            "en": "gaoping"
                        },
                        {
                            "city_id": "CH100606",
                            "name": "泽州",
                            "en": "zezhou"
                        }
                    ]
                },
                {
                    "city_id": "CH1007",
                    "name": "临汾",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100701",
                            "name": "临汾",
                            "en": "linfen"
                        },
                        {
                            "city_id": "CH100702",
                            "name": "曲沃",
                            "en": "quwo"
                        },
                        {
                            "city_id": "CH100703",
                            "name": "永和",
                            "en": "yonghe"
                        },
                        {
                            "city_id": "CH100704",
                            "name": "隰县",
                            "en": "xixian"
                        },
                        {
                            "city_id": "CH100705",
                            "name": "大宁",
                            "en": "daning"
                        },
                        {
                            "city_id": "CH100706",
                            "name": "吉县",
                            "en": "jixian"
                        },
                        {
                            "city_id": "CH100707",
                            "name": "襄汾",
                            "en": "xiangfen"
                        },
                        {
                            "city_id": "CH100708",
                            "name": "蒲县",
                            "en": "puxian"
                        },
                        {
                            "city_id": "CH100709",
                            "name": "汾西",
                            "en": "fenxi"
                        },
                        {
                            "city_id": "CH100710",
                            "name": "洪洞",
                            "en": "hongtong"
                        },
                        {
                            "city_id": "CH100711",
                            "name": "霍州",
                            "en": "huozhou"
                        },
                        {
                            "city_id": "CH100712",
                            "name": "乡宁",
                            "en": "xiangning"
                        },
                        {
                            "city_id": "CH100713",
                            "name": "翼城",
                            "en": "yicheng"
                        },
                        {
                            "city_id": "CH100714",
                            "name": "侯马",
                            "en": "houma"
                        },
                        {
                            "city_id": "CH100715",
                            "name": "浮山",
                            "en": "fushan"
                        },
                        {
                            "city_id": "CH100716",
                            "name": "安泽",
                            "en": "anze"
                        },
                        {
                            "city_id": "CH100717",
                            "name": "古县",
                            "en": "guxian"
                        }
                    ]
                },
                {
                    "city_id": "CH1008",
                    "name": "运城",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100801",
                            "name": "运城",
                            "en": "yuncheng"
                        },
                        {
                            "city_id": "CH100802",
                            "name": "临猗",
                            "en": "linyi"
                        },
                        {
                            "city_id": "CH100803",
                            "name": "稷山",
                            "en": "jishan"
                        },
                        {
                            "city_id": "CH100804",
                            "name": "万荣",
                            "en": "wanrong"
                        },
                        {
                            "city_id": "CH100805",
                            "name": "河津",
                            "en": "hejin"
                        },
                        {
                            "city_id": "CH100806",
                            "name": "新绛",
                            "en": "xinjiang"
                        },
                        {
                            "city_id": "CH100807",
                            "name": "绛县",
                            "en": "jiangxian"
                        },
                        {
                            "city_id": "CH100808",
                            "name": "闻喜",
                            "en": "wenxi"
                        },
                        {
                            "city_id": "CH100809",
                            "name": "垣曲",
                            "en": "yuanqu"
                        },
                        {
                            "city_id": "CH100810",
                            "name": "永济",
                            "en": "yongji"
                        },
                        {
                            "city_id": "CH100811",
                            "name": "芮城",
                            "en": "ruicheng"
                        },
                        {
                            "city_id": "CH100812",
                            "name": "夏县",
                            "en": "xiaxian"
                        },
                        {
                            "city_id": "CH100813",
                            "name": "平陆",
                            "en": "pinglu"
                        }
                    ]
                },
                {
                    "city_id": "CH1009",
                    "name": "朔州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH100901",
                            "name": "朔州",
                            "en": "shuozhou"
                        },
                        {
                            "city_id": "CH100902",
                            "name": "平鲁",
                            "en": "pinglu"
                        },
                        {
                            "city_id": "CH100903",
                            "name": "山阴",
                            "en": "shanyin"
                        },
                        {
                            "city_id": "CH100904",
                            "name": "右玉",
                            "en": "shiyu"
                        },
                        {
                            "city_id": "CH100905",
                            "name": "应县",
                            "en": "yingxian"
                        },
                        {
                            "city_id": "CH100906",
                            "name": "怀仁",
                            "en": "huairen"
                        }
                    ]
                },
                {
                    "city_id": "CH1010",
                    "name": "忻州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH101001",
                            "name": "忻州",
                            "en": "xinzhou"
                        },
                        {
                            "city_id": "CH101002",
                            "name": "定襄",
                            "en": "dingxiang"
                        },
                        {
                            "city_id": "CH101003",
                            "name": "五台县",
                            "en": "wutaixian"
                        },
                        {
                            "city_id": "CH101004",
                            "name": "河曲",
                            "en": "hequ"
                        },
                        {
                            "city_id": "CH101005",
                            "name": "偏关",
                            "en": "pianguan"
                        },
                        {
                            "city_id": "CH101006",
                            "name": "神池",
                            "en": "shenchi"
                        },
                        {
                            "city_id": "CH101007",
                            "name": "宁武",
                            "en": "ningwu"
                        },
                        {
                            "city_id": "CH101008",
                            "name": "代县",
                            "en": "daixian"
                        },
                        {
                            "city_id": "CH101009",
                            "name": "繁峙",
                            "en": "fanshi"
                        },
                        {
                            "city_id": "CH101010",
                            "name": "五台山",
                            "en": "wutaishan"
                        },
                        {
                            "city_id": "CH101011",
                            "name": "保德",
                            "en": "baode"
                        },
                        {
                            "city_id": "CH101012",
                            "name": "静乐",
                            "en": "jingle"
                        },
                        {
                            "city_id": "CH101013",
                            "name": "岢岚",
                            "en": "kelan"
                        },
                        {
                            "city_id": "CH101014",
                            "name": "五寨",
                            "en": "wuzhai"
                        },
                        {
                            "city_id": "CH101015",
                            "name": "原平",
                            "en": "yuanping"
                        }
                    ]
                },
                {
                    "city_id": "CH1011",
                    "name": "吕梁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH101100",
                            "name": "吕梁",
                            "en": "lvliang"
                        },
                        {
                            "city_id": "CH101101",
                            "name": "离石",
                            "en": "lishi"
                        },
                        {
                            "city_id": "CH101102",
                            "name": "临县",
                            "en": "linxian"
                        },
                        {
                            "city_id": "CH101103",
                            "name": "兴县",
                            "en": "xingxian"
                        },
                        {
                            "city_id": "CH101104",
                            "name": "岚县",
                            "en": "lanxian"
                        },
                        {
                            "city_id": "CH101105",
                            "name": "柳林",
                            "en": "liulin"
                        },
                        {
                            "city_id": "CH101106",
                            "name": "石楼",
                            "en": "shilou"
                        },
                        {
                            "city_id": "CH101107",
                            "name": "方山",
                            "en": "fangshan"
                        },
                        {
                            "city_id": "CH101108",
                            "name": "交口",
                            "en": "jiaokou"
                        },
                        {
                            "city_id": "CH101109",
                            "name": "中阳",
                            "en": "zhongyang"
                        },
                        {
                            "city_id": "CH101110",
                            "name": "孝义",
                            "en": "xiaoyi"
                        },
                        {
                            "city_id": "CH101111",
                            "name": "汾阳",
                            "en": "fenyang"
                        },
                        {
                            "city_id": "CH101112",
                            "name": "文水",
                            "en": "wenshui"
                        },
                        {
                            "city_id": "CH101113",
                            "name": "交城",
                            "en": "jiaocheng"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH11",
            "name": "陕西",
            "en": "",
            "list": [
                {
                    "city_id": "CH1101",
                    "name": "西安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110101",
                            "name": "西安",
                            "en": "xian"
                        },
                        {
                            "city_id": "CH110102",
                            "name": "长安",
                            "en": "changan"
                        },
                        {
                            "city_id": "CH110103",
                            "name": "临潼",
                            "en": "Lintong"
                        },
                        {
                            "city_id": "CH110104",
                            "name": "蓝田",
                            "en": "lantian"
                        },
                        {
                            "city_id": "CH110105",
                            "name": "周至",
                            "en": "zhouzhi"
                        },
                        {
                            "city_id": "CH110106",
                            "name": "户县",
                            "en": "huxian"
                        },
                        {
                            "city_id": "CH110107",
                            "name": "高陵",
                            "en": "gaoling"
                        }
                    ]
                },
                {
                    "city_id": "CH1102",
                    "name": "咸阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110200",
                            "name": "咸阳",
                            "en": "Xianyang"
                        },
                        {
                            "city_id": "CH110201",
                            "name": "三原",
                            "en": "sanyuan"
                        },
                        {
                            "city_id": "CH110202",
                            "name": "礼泉",
                            "en": "liquan"
                        },
                        {
                            "city_id": "CH110203",
                            "name": "永寿",
                            "en": "yongshou"
                        },
                        {
                            "city_id": "CH110204",
                            "name": "淳化",
                            "en": "chunhua"
                        },
                        {
                            "city_id": "CH110205",
                            "name": "泾阳",
                            "en": "jingyang"
                        },
                        {
                            "city_id": "CH110206",
                            "name": "武功",
                            "en": "wugong"
                        },
                        {
                            "city_id": "CH110207",
                            "name": "乾县",
                            "en": "qianxian"
                        },
                        {
                            "city_id": "CH110208",
                            "name": "彬县",
                            "en": "binxian"
                        },
                        {
                            "city_id": "CH110209",
                            "name": "长武",
                            "en": "changwu"
                        },
                        {
                            "city_id": "CH110210",
                            "name": "旬邑",
                            "en": "xunyi"
                        },
                        {
                            "city_id": "CH110211",
                            "name": "兴平",
                            "en": "xingping"
                        }
                    ]
                },
                {
                    "city_id": "CH1103",
                    "name": "延安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110300",
                            "name": "延安",
                            "en": "yanan"
                        },
                        {
                            "city_id": "CH110301",
                            "name": "延长",
                            "en": "yanchang"
                        },
                        {
                            "city_id": "CH110302",
                            "name": "延川",
                            "en": "yanchuan"
                        },
                        {
                            "city_id": "CH110303",
                            "name": "子长",
                            "en": "zichang"
                        },
                        {
                            "city_id": "CH110304",
                            "name": "宜川",
                            "en": "yichuan"
                        },
                        {
                            "city_id": "CH110305",
                            "name": "富县",
                            "en": "fuxian"
                        },
                        {
                            "city_id": "CH110306",
                            "name": "志丹",
                            "en": "zhidan"
                        },
                        {
                            "city_id": "CH110307",
                            "name": "安塞",
                            "en": "ansai"
                        },
                        {
                            "city_id": "CH110308",
                            "name": "甘泉",
                            "en": "ganquan"
                        },
                        {
                            "city_id": "CH110309",
                            "name": "洛川",
                            "en": "luochuan"
                        },
                        {
                            "city_id": "CH110310",
                            "name": "黄陵",
                            "en": "huangling"
                        },
                        {
                            "city_id": "CH110311",
                            "name": "黄龙",
                            "en": "huanglong"
                        },
                        {
                            "city_id": "CH110312",
                            "name": "吴起",
                            "en": "wuqi"
                        }
                    ]
                },
                {
                    "city_id": "CH1104",
                    "name": "榆林",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110401",
                            "name": "榆林",
                            "en": "yulin"
                        },
                        {
                            "city_id": "CH110402",
                            "name": "府谷",
                            "en": "fugu"
                        },
                        {
                            "city_id": "CH110403",
                            "name": "神木",
                            "en": "shenmu"
                        },
                        {
                            "city_id": "CH110404",
                            "name": "佳县",
                            "en": "jiaxian"
                        },
                        {
                            "city_id": "CH110405",
                            "name": "定边",
                            "en": "dingbian"
                        },
                        {
                            "city_id": "CH110406",
                            "name": "靖边",
                            "en": "jingbian"
                        },
                        {
                            "city_id": "CH110407",
                            "name": "横山",
                            "en": "hengshan"
                        },
                        {
                            "city_id": "CH110408",
                            "name": "米脂",
                            "en": "mizhi"
                        },
                        {
                            "city_id": "CH110409",
                            "name": "子洲",
                            "en": "zizhou"
                        },
                        {
                            "city_id": "CH110410",
                            "name": "绥德",
                            "en": "suide"
                        },
                        {
                            "city_id": "CH110411",
                            "name": "吴堡",
                            "en": "wubao"
                        },
                        {
                            "city_id": "CH110412",
                            "name": "清涧",
                            "en": "qingjian"
                        },
                        {
                            "city_id": "CH110413",
                            "name": "榆阳",
                            "en": "yuyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1105",
                    "name": "渭南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110501",
                            "name": "渭南",
                            "en": "weinan"
                        },
                        {
                            "city_id": "CH110502",
                            "name": "华县",
                            "en": "huaxian"
                        },
                        {
                            "city_id": "CH110503",
                            "name": "潼关",
                            "en": "tongguan"
                        },
                        {
                            "city_id": "CH110504",
                            "name": "大荔",
                            "en": "dali"
                        },
                        {
                            "city_id": "CH110505",
                            "name": "白水",
                            "en": "baishui"
                        },
                        {
                            "city_id": "CH110506",
                            "name": "富平",
                            "en": "fuping"
                        },
                        {
                            "city_id": "CH110507",
                            "name": "蒲城",
                            "en": "pucheng"
                        },
                        {
                            "city_id": "CH110508",
                            "name": "澄城",
                            "en": "chengcheng"
                        },
                        {
                            "city_id": "CH110509",
                            "name": "合阳",
                            "en": "heyang"
                        },
                        {
                            "city_id": "CH110510",
                            "name": "韩城",
                            "en": "Hancheng"
                        },
                        {
                            "city_id": "CH110511",
                            "name": "华阴",
                            "en": "huayin"
                        }
                    ]
                },
                {
                    "city_id": "CH1106",
                    "name": "商洛",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110601",
                            "name": "商洛",
                            "en": "shangluo"
                        },
                        {
                            "city_id": "CH110602",
                            "name": "洛南",
                            "en": "luonan"
                        },
                        {
                            "city_id": "CH110603",
                            "name": "柞水",
                            "en": "zhashui"
                        },
                        {
                            "city_id": "CH110604",
                            "name": "商州",
                            "en": "shangzhou"
                        },
                        {
                            "city_id": "CH110605",
                            "name": "镇安",
                            "en": "zhenan"
                        },
                        {
                            "city_id": "CH110606",
                            "name": "丹凤",
                            "en": "dafeng"
                        },
                        {
                            "city_id": "CH110607",
                            "name": "商南",
                            "en": "shangnan"
                        },
                        {
                            "city_id": "CH110608",
                            "name": "山阳",
                            "en": "shangyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1107",
                    "name": "安康",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110701",
                            "name": "安康",
                            "en": "Ankang"
                        },
                        {
                            "city_id": "CH110702",
                            "name": "紫阳",
                            "en": "ziyang"
                        },
                        {
                            "city_id": "CH110703",
                            "name": "石泉",
                            "en": "shiquan"
                        },
                        {
                            "city_id": "CH110704",
                            "name": "汉阴",
                            "en": "hanyin"
                        },
                        {
                            "city_id": "CH110705",
                            "name": "旬阳",
                            "en": "xunyang"
                        },
                        {
                            "city_id": "CH110706",
                            "name": "岚皋",
                            "en": "langao"
                        },
                        {
                            "city_id": "CH110707",
                            "name": "平利",
                            "en": "pingli"
                        },
                        {
                            "city_id": "CH110708",
                            "name": "白河",
                            "en": "baihe"
                        },
                        {
                            "city_id": "CH110709",
                            "name": "镇坪",
                            "en": "zhenping"
                        },
                        {
                            "city_id": "CH110710",
                            "name": "宁陕",
                            "en": "ningshan"
                        }
                    ]
                },
                {
                    "city_id": "CH1108",
                    "name": "汉中",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110801",
                            "name": "汉中",
                            "en": "hanzhong"
                        },
                        {
                            "city_id": "CH110802",
                            "name": "略阳",
                            "en": "lueyang"
                        },
                        {
                            "city_id": "CH110803",
                            "name": "勉县",
                            "en": "mianxian"
                        },
                        {
                            "city_id": "CH110804",
                            "name": "留坝",
                            "en": "liuba"
                        },
                        {
                            "city_id": "CH110805",
                            "name": "洋县",
                            "en": "yangxian"
                        },
                        {
                            "city_id": "CH110806",
                            "name": "城固",
                            "en": "chenggu"
                        },
                        {
                            "city_id": "CH110807",
                            "name": "西乡",
                            "en": "xixiang"
                        },
                        {
                            "city_id": "CH110808",
                            "name": "佛坪",
                            "en": "foping"
                        },
                        {
                            "city_id": "CH110809",
                            "name": "宁强",
                            "en": "ningqiang"
                        },
                        {
                            "city_id": "CH110810",
                            "name": "南郑",
                            "en": "nanzheng"
                        },
                        {
                            "city_id": "CH110811",
                            "name": "镇巴",
                            "en": "zhenba"
                        }
                    ]
                },
                {
                    "city_id": "CH1109",
                    "name": "宝鸡",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH110901",
                            "name": "宝鸡",
                            "en": "baoji"
                        },
                        {
                            "city_id": "CH110903",
                            "name": "千阳",
                            "en": "qianyang"
                        },
                        {
                            "city_id": "CH110904",
                            "name": "麟游",
                            "en": "linyou"
                        },
                        {
                            "city_id": "CH110905",
                            "name": "岐山",
                            "en": "qishan"
                        },
                        {
                            "city_id": "CH110906",
                            "name": "凤翔",
                            "en": "fengxiang"
                        },
                        {
                            "city_id": "CH110907",
                            "name": "扶风",
                            "en": "fufeng"
                        },
                        {
                            "city_id": "CH110908",
                            "name": "眉县",
                            "en": "meixian"
                        },
                        {
                            "city_id": "CH110909",
                            "name": "太白",
                            "en": "taibai"
                        },
                        {
                            "city_id": "CH110910",
                            "name": "凤县",
                            "en": "fengxian"
                        },
                        {
                            "city_id": "CH110911",
                            "name": "陇县",
                            "en": "longxian"
                        },
                        {
                            "city_id": "CH110912",
                            "name": "陈仓",
                            "en": "chencang"
                        }
                    ]
                },
                {
                    "city_id": "CH1110",
                    "name": "铜川",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH111001",
                            "name": "铜川",
                            "en": "tongchuan"
                        },
                        {
                            "city_id": "CH111002",
                            "name": "耀县",
                            "en": "yaoxian"
                        },
                        {
                            "city_id": "CH111003",
                            "name": "宜君",
                            "en": "yijun"
                        },
                        {
                            "city_id": "CH111004",
                            "name": "耀州",
                            "en": "yaozhou"
                        }
                    ]
                },
                {
                    "city_id": "CH1111",
                    "name": "杨凌",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH111101",
                            "name": "杨凌",
                            "en": "yangling"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH12",
            "name": "山东",
            "en": "",
            "list": [
                {
                    "city_id": "CH1201",
                    "name": "济南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120101",
                            "name": "济南",
                            "en": "jinan"
                        },
                        {
                            "city_id": "CH120102",
                            "name": "长清",
                            "en": "Changqing"
                        },
                        {
                            "city_id": "CH120103",
                            "name": "商河",
                            "en": "shanghe"
                        },
                        {
                            "city_id": "CH120104",
                            "name": "章丘",
                            "en": "zhangqiu"
                        },
                        {
                            "city_id": "CH120105",
                            "name": "平阴",
                            "en": "Pingyin"
                        },
                        {
                            "city_id": "CH120106",
                            "name": "济阳",
                            "en": "jiyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1202",
                    "name": "青岛",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120201",
                            "name": "青岛",
                            "en": "Qingdao"
                        },
                        {
                            "city_id": "CH120202",
                            "name": "崂山",
                            "en": "laoshan"
                        },
                        {
                            "city_id": "CH120204",
                            "name": "即墨",
                            "en": "Jimo"
                        },
                        {
                            "city_id": "CH120205",
                            "name": "胶州",
                            "en": "jiaozhou"
                        },
                        {
                            "city_id": "CH120206",
                            "name": "黄岛",
                            "en": "huangdao"
                        },
                        {
                            "city_id": "CH120207",
                            "name": "莱西",
                            "en": "laixi"
                        },
                        {
                            "city_id": "CH120208",
                            "name": "平度",
                            "en": "pingdu"
                        }
                    ]
                },
                {
                    "city_id": "CH1203",
                    "name": "淄博",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120301",
                            "name": "淄博",
                            "en": "Zibo"
                        },
                        {
                            "city_id": "CH120302",
                            "name": "淄川",
                            "en": "zichuan"
                        },
                        {
                            "city_id": "CH120303",
                            "name": "博山",
                            "en": "Boshan"
                        },
                        {
                            "city_id": "CH120304",
                            "name": "高青",
                            "en": "gaoqing"
                        },
                        {
                            "city_id": "CH120305",
                            "name": "周村",
                            "en": "zhoucun"
                        },
                        {
                            "city_id": "CH120306",
                            "name": "沂源",
                            "en": "yiyuan"
                        },
                        {
                            "city_id": "CH120307",
                            "name": "桓台",
                            "en": "huantai"
                        },
                        {
                            "city_id": "CH120308",
                            "name": "临淄",
                            "en": "linzi"
                        }
                    ]
                },
                {
                    "city_id": "CH1204",
                    "name": "德州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120401",
                            "name": "德州",
                            "en": "Dezhou"
                        },
                        {
                            "city_id": "CH120402",
                            "name": "武城",
                            "en": "wucheng"
                        },
                        {
                            "city_id": "CH120403",
                            "name": "临邑",
                            "en": "linyi"
                        },
                        {
                            "city_id": "CH120404",
                            "name": "陵县",
                            "en": "lingxian"
                        },
                        {
                            "city_id": "CH120405",
                            "name": "齐河",
                            "en": "qihe"
                        },
                        {
                            "city_id": "CH120406",
                            "name": "乐陵",
                            "en": "leling"
                        },
                        {
                            "city_id": "CH120407",
                            "name": "庆云",
                            "en": "qingyun"
                        },
                        {
                            "city_id": "CH120408",
                            "name": "平原",
                            "en": "pingyuan"
                        },
                        {
                            "city_id": "CH120409",
                            "name": "宁津",
                            "en": "ningjin"
                        },
                        {
                            "city_id": "CH120410",
                            "name": "夏津",
                            "en": "xiajin"
                        },
                        {
                            "city_id": "CH120411",
                            "name": "禹城",
                            "en": "yucheng"
                        }
                    ]
                },
                {
                    "city_id": "CH1205",
                    "name": "烟台",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120501",
                            "name": "烟台",
                            "en": "Yantai"
                        },
                        {
                            "city_id": "CH120502",
                            "name": "莱州",
                            "en": "laizhou"
                        },
                        {
                            "city_id": "CH120503",
                            "name": "长岛",
                            "en": "changdao"
                        },
                        {
                            "city_id": "CH120504",
                            "name": "蓬莱",
                            "en": "penglai"
                        },
                        {
                            "city_id": "CH120505",
                            "name": "龙口",
                            "en": "longkou"
                        },
                        {
                            "city_id": "CH120506",
                            "name": "招远",
                            "en": "zhaoyuan"
                        },
                        {
                            "city_id": "CH120507",
                            "name": "栖霞",
                            "en": "qixia"
                        },
                        {
                            "city_id": "CH120508",
                            "name": "福山",
                            "en": "fushan"
                        },
                        {
                            "city_id": "CH120509",
                            "name": "牟平",
                            "en": "mouping"
                        },
                        {
                            "city_id": "CH120510",
                            "name": "莱阳",
                            "en": "Laiyang"
                        },
                        {
                            "city_id": "CH120511",
                            "name": "海阳",
                            "en": "Haiyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1206",
                    "name": "潍坊",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120601",
                            "name": "潍坊",
                            "en": "Weifang"
                        },
                        {
                            "city_id": "CH120602",
                            "name": "青州",
                            "en": "qingzhou"
                        },
                        {
                            "city_id": "CH120603",
                            "name": "寿光",
                            "en": "shouguang"
                        },
                        {
                            "city_id": "CH120604",
                            "name": "临朐",
                            "en": "Linqu"
                        },
                        {
                            "city_id": "CH120605",
                            "name": "昌乐",
                            "en": "changle"
                        },
                        {
                            "city_id": "CH120606",
                            "name": "昌邑",
                            "en": "changyi"
                        },
                        {
                            "city_id": "CH120607",
                            "name": "安丘",
                            "en": "Anqiu"
                        },
                        {
                            "city_id": "CH120608",
                            "name": "高密",
                            "en": "Gaomi"
                        },
                        {
                            "city_id": "CH120609",
                            "name": "诸城",
                            "en": "zhucheng"
                        }
                    ]
                },
                {
                    "city_id": "CH1207",
                    "name": "济宁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120701",
                            "name": "济宁",
                            "en": "jining"
                        },
                        {
                            "city_id": "CH120702",
                            "name": "嘉祥",
                            "en": "jiaxiang"
                        },
                        {
                            "city_id": "CH120703",
                            "name": "微山",
                            "en": "weishan"
                        },
                        {
                            "city_id": "CH120704",
                            "name": "鱼台",
                            "en": "yutai"
                        },
                        {
                            "city_id": "CH120705",
                            "name": "兖州",
                            "en": "Yanzhou"
                        },
                        {
                            "city_id": "CH120706",
                            "name": "金乡",
                            "en": "jinxiang"
                        },
                        {
                            "city_id": "CH120707",
                            "name": "汶上",
                            "en": "Wenshang"
                        },
                        {
                            "city_id": "CH120708",
                            "name": "泗水",
                            "en": "sishui"
                        },
                        {
                            "city_id": "CH120709",
                            "name": "梁山",
                            "en": "liangshan"
                        },
                        {
                            "city_id": "CH120710",
                            "name": "曲阜",
                            "en": "qufu"
                        },
                        {
                            "city_id": "CH120711",
                            "name": "邹城",
                            "en": "Zoucheng"
                        }
                    ]
                },
                {
                    "city_id": "CH1208",
                    "name": "泰安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120801",
                            "name": "泰安",
                            "en": "taian"
                        },
                        {
                            "city_id": "CH120802",
                            "name": "新泰",
                            "en": "Xintai"
                        },
                        {
                            "city_id": "CH120804",
                            "name": "肥城",
                            "en": "Feicheng"
                        },
                        {
                            "city_id": "CH120805",
                            "name": "东平",
                            "en": "dongping"
                        },
                        {
                            "city_id": "CH120806",
                            "name": "宁阳",
                            "en": "Ningyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1209",
                    "name": "临沂",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH120901",
                            "name": "临沂",
                            "en": "linyi"
                        },
                        {
                            "city_id": "CH120902",
                            "name": "莒南",
                            "en": "junan"
                        },
                        {
                            "city_id": "CH120903",
                            "name": "沂南",
                            "en": "yinan"
                        },
                        {
                            "city_id": "CH120904",
                            "name": "兰陵",
                            "en": "lanling"
                        },
                        {
                            "city_id": "CH120905",
                            "name": "临沭",
                            "en": "linshu"
                        },
                        {
                            "city_id": "CH120906",
                            "name": "郯城",
                            "en": "tancheng"
                        },
                        {
                            "city_id": "CH120907",
                            "name": "蒙阴",
                            "en": "Mengyin"
                        },
                        {
                            "city_id": "CH120908",
                            "name": "平邑",
                            "en": "pingyi"
                        },
                        {
                            "city_id": "CH120909",
                            "name": "费县",
                            "en": "feixian"
                        },
                        {
                            "city_id": "CH120910",
                            "name": "沂水",
                            "en": "yishui"
                        }
                    ]
                },
                {
                    "city_id": "CH1210",
                    "name": "菏泽",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121001",
                            "name": "菏泽",
                            "en": "Heze"
                        },
                        {
                            "city_id": "CH121002",
                            "name": "鄄城",
                            "en": "juancheng"
                        },
                        {
                            "city_id": "CH121003",
                            "name": "郓城",
                            "en": "yuncheng"
                        },
                        {
                            "city_id": "CH121004",
                            "name": "东明",
                            "en": "dongming"
                        },
                        {
                            "city_id": "CH121005",
                            "name": "定陶",
                            "en": "Dingtao"
                        },
                        {
                            "city_id": "CH121006",
                            "name": "巨野",
                            "en": "Juye"
                        },
                        {
                            "city_id": "CH121007",
                            "name": "曹县",
                            "en": "caoxian"
                        },
                        {
                            "city_id": "CH121008",
                            "name": "成武",
                            "en": "chengwu"
                        },
                        {
                            "city_id": "CH121009",
                            "name": "单县",
                            "en": "shanxian"
                        }
                    ]
                },
                {
                    "city_id": "CH1211",
                    "name": "滨州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121101",
                            "name": "滨州",
                            "en": "binzhou"
                        },
                        {
                            "city_id": "CH121102",
                            "name": "博兴",
                            "en": "boxing"
                        },
                        {
                            "city_id": "CH121103",
                            "name": "无棣",
                            "en": "wudi"
                        },
                        {
                            "city_id": "CH121104",
                            "name": "阳信",
                            "en": "yangxin"
                        },
                        {
                            "city_id": "CH121105",
                            "name": "惠民",
                            "en": "Huimin"
                        },
                        {
                            "city_id": "CH121106",
                            "name": "沾化",
                            "en": "zhanhua"
                        },
                        {
                            "city_id": "CH121107",
                            "name": "邹平",
                            "en": "zouping"
                        }
                    ]
                },
                {
                    "city_id": "CH1212",
                    "name": "东营",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121201",
                            "name": "东营",
                            "en": "dongying"
                        },
                        {
                            "city_id": "CH121202",
                            "name": "河口",
                            "en": "hekou"
                        },
                        {
                            "city_id": "CH121203",
                            "name": "垦利",
                            "en": "kenli"
                        },
                        {
                            "city_id": "CH121204",
                            "name": "利津",
                            "en": "lijin"
                        },
                        {
                            "city_id": "CH121205",
                            "name": "广饶",
                            "en": "guangrao"
                        }
                    ]
                },
                {
                    "city_id": "CH1213",
                    "name": "威海",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121301",
                            "name": "威海",
                            "en": "Weihai"
                        },
                        {
                            "city_id": "CH121302",
                            "name": "文登",
                            "en": "Wendeng"
                        },
                        {
                            "city_id": "CH121303",
                            "name": "荣成",
                            "en": "rongcheng"
                        },
                        {
                            "city_id": "CH121304",
                            "name": "乳山",
                            "en": "rushan"
                        },
                        {
                            "city_id": "CH121305",
                            "name": "成山头",
                            "en": "chengshantou"
                        },
                        {
                            "city_id": "CH121306",
                            "name": "石岛",
                            "en": "shidao"
                        }
                    ]
                },
                {
                    "city_id": "CH1214",
                    "name": "枣庄",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121401",
                            "name": "枣庄",
                            "en": "zaozhuang"
                        },
                        {
                            "city_id": "CH121402",
                            "name": "薛城",
                            "en": "Xuecheng"
                        },
                        {
                            "city_id": "CH121403",
                            "name": "峄城",
                            "en": "yicheng"
                        },
                        {
                            "city_id": "CH121404",
                            "name": "台儿庄",
                            "en": "taierzhuang"
                        },
                        {
                            "city_id": "CH121405",
                            "name": "滕州",
                            "en": "tengzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH1215",
                    "name": "日照",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121501",
                            "name": "日照",
                            "en": "Rizhao"
                        },
                        {
                            "city_id": "CH121502",
                            "name": "五莲",
                            "en": "wulian"
                        },
                        {
                            "city_id": "CH121503",
                            "name": "莒县",
                            "en": "juxian"
                        }
                    ]
                },
                {
                    "city_id": "CH1216",
                    "name": "莱芜",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121601",
                            "name": "莱芜",
                            "en": "Laiwu"
                        }
                    ]
                },
                {
                    "city_id": "CH1217",
                    "name": "聊城",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH121701",
                            "name": "聊城",
                            "en": "liaocheng"
                        },
                        {
                            "city_id": "CH121702",
                            "name": "冠县",
                            "en": "guanxian"
                        },
                        {
                            "city_id": "CH121703",
                            "name": "阳谷",
                            "en": "yanggu"
                        },
                        {
                            "city_id": "CH121704",
                            "name": "高唐",
                            "en": "gaotang"
                        },
                        {
                            "city_id": "CH121705",
                            "name": "茌平",
                            "en": "chiping"
                        },
                        {
                            "city_id": "CH121706",
                            "name": "东阿",
                            "en": "donge"
                        },
                        {
                            "city_id": "CH121707",
                            "name": "临清",
                            "en": "linqing"
                        },
                        {
                            "city_id": "CH121709",
                            "name": "莘县",
                            "en": "shenxian"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH13",
            "name": "新疆",
            "en": "",
            "list": [
                {
                    "city_id": "CH1301",
                    "name": "乌鲁木齐",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130101",
                            "name": "乌鲁木齐",
                            "en": "Urunchi"
                        },
                        {
                            "city_id": "CH130103",
                            "name": "小渠子",
                            "en": "xiaoquzi"
                        },
                        {
                            "city_id": "CH130105",
                            "name": "达坂城",
                            "en": "dabancheng"
                        },
                        {
                            "city_id": "CH130108",
                            "name": "乌鲁木齐牧试站",
                            "en": "wulumuqimushizh"
                        },
                        {
                            "city_id": "CH130109",
                            "name": "天池",
                            "en": "tianchi"
                        },
                        {
                            "city_id": "CH130110",
                            "name": "白杨沟",
                            "en": "baiyanggou"
                        }
                    ]
                },
                {
                    "city_id": "CH1302",
                    "name": "克拉玛依",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130201",
                            "name": "克拉玛依",
                            "en": "karamay"
                        },
                        {
                            "city_id": "CH130202",
                            "name": "乌尔禾",
                            "en": "wuerhe"
                        },
                        {
                            "city_id": "CH130203",
                            "name": "白碱滩",
                            "en": "baijiantan"
                        }
                    ]
                },
                {
                    "city_id": "CH1303",
                    "name": "石河子",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130301",
                            "name": "石河子",
                            "en": "shihezi"
                        },
                        {
                            "city_id": "CH130302",
                            "name": "炮台",
                            "en": "paotai"
                        },
                        {
                            "city_id": "CH130303",
                            "name": "莫索湾",
                            "en": "mosuowan"
                        }
                    ]
                },
                {
                    "city_id": "CH1304",
                    "name": "昌吉",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130401",
                            "name": "昌吉",
                            "en": "Changji"
                        },
                        {
                            "city_id": "CH130402",
                            "name": "呼图壁",
                            "en": "hutubi"
                        },
                        {
                            "city_id": "CH130403",
                            "name": "米泉",
                            "en": "miquan"
                        },
                        {
                            "city_id": "CH130404",
                            "name": "阜康",
                            "en": "fuchang"
                        },
                        {
                            "city_id": "CH130405",
                            "name": "吉木萨尔",
                            "en": "jimusaer"
                        },
                        {
                            "city_id": "CH130406",
                            "name": "奇台",
                            "en": "Qitai"
                        },
                        {
                            "city_id": "CH130407",
                            "name": "玛纳斯",
                            "en": "manasi"
                        },
                        {
                            "city_id": "CH130408",
                            "name": "木垒",
                            "en": "mori"
                        },
                        {
                            "city_id": "CH130409",
                            "name": "蔡家湖",
                            "en": "caijiahu"
                        },
                        {
                            "city_id": "CH130410",
                            "name": "五家渠",
                            "en": "wujiaqu"
                        }
                    ]
                },
                {
                    "city_id": "CH1305",
                    "name": "吐鲁番",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130501",
                            "name": "吐鲁番",
                            "en": "turpan"
                        },
                        {
                            "city_id": "CH130502",
                            "name": "托克逊",
                            "en": "tuokexun"
                        },
                        {
                            "city_id": "CH130504",
                            "name": "鄯善",
                            "en": "shanshan"
                        }
                    ]
                },
                {
                    "city_id": "CH1306",
                    "name": "巴音郭楞",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130601",
                            "name": "库尔勒",
                            "en": "korla"
                        },
                        {
                            "city_id": "CH130602",
                            "name": "轮台",
                            "en": "luntai"
                        },
                        {
                            "city_id": "CH130603",
                            "name": "尉犁",
                            "en": "yuli"
                        },
                        {
                            "city_id": "CH130604",
                            "name": "若羌",
                            "en": "ruoqiang"
                        },
                        {
                            "city_id": "CH130605",
                            "name": "且末",
                            "en": "qiemo"
                        },
                        {
                            "city_id": "CH130606",
                            "name": "和静",
                            "en": "hejing"
                        },
                        {
                            "city_id": "CH130607",
                            "name": "焉耆",
                            "en": "yanqi"
                        },
                        {
                            "city_id": "CH130608",
                            "name": "和硕",
                            "en": "hoxud"
                        },
                        {
                            "city_id": "CH130610",
                            "name": "巴音布鲁克",
                            "en": "bayanbulak"
                        },
                        {
                            "city_id": "CH130611",
                            "name": "铁干里克",
                            "en": "tikanlik"
                        },
                        {
                            "city_id": "CH130612",
                            "name": "博湖",
                            "en": "bohu"
                        },
                        {
                            "city_id": "CH130613",
                            "name": "塔中",
                            "en": "tazhong"
                        },
                        {
                            "city_id": "CH130614",
                            "name": "巴仑台",
                            "en": "balguntay"
                        }
                    ]
                },
                {
                    "city_id": "CH1307",
                    "name": "阿拉尔",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130701",
                            "name": "阿拉尔",
                            "en": "alar"
                        }
                    ]
                },
                {
                    "city_id": "CH1308",
                    "name": "阿克苏",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130801",
                            "name": "阿克苏",
                            "en": "aksu"
                        },
                        {
                            "city_id": "CH130802",
                            "name": "乌什",
                            "en": "wushi"
                        },
                        {
                            "city_id": "CH130803",
                            "name": "温宿",
                            "en": "wensu"
                        },
                        {
                            "city_id": "CH130804",
                            "name": "拜城",
                            "en": "Baicheng"
                        },
                        {
                            "city_id": "CH130805",
                            "name": "新和",
                            "en": "xinhe"
                        },
                        {
                            "city_id": "CH130806",
                            "name": "沙雅",
                            "en": "shaya"
                        },
                        {
                            "city_id": "CH130807",
                            "name": "库车",
                            "en": "kuqa"
                        },
                        {
                            "city_id": "CH130808",
                            "name": "柯坪",
                            "en": "kalpin"
                        },
                        {
                            "city_id": "CH130809",
                            "name": "阿瓦提",
                            "en": "awat"
                        }
                    ]
                },
                {
                    "city_id": "CH1309",
                    "name": "喀什",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH130901",
                            "name": "喀什",
                            "en": "Kashi"
                        },
                        {
                            "city_id": "CH130902",
                            "name": "英吉沙",
                            "en": "yengisar"
                        },
                        {
                            "city_id": "CH130903",
                            "name": "塔什库尔干",
                            "en": "taxkorgan"
                        },
                        {
                            "city_id": "CH130904",
                            "name": "麦盖提",
                            "en": "markit"
                        },
                        {
                            "city_id": "CH130905",
                            "name": "莎车",
                            "en": "Shache"
                        },
                        {
                            "city_id": "CH130906",
                            "name": "叶城",
                            "en": "yecheng"
                        },
                        {
                            "city_id": "CH130907",
                            "name": "泽普",
                            "en": "zepu"
                        },
                        {
                            "city_id": "CH130908",
                            "name": "巴楚",
                            "en": "Bachu"
                        },
                        {
                            "city_id": "CH130909",
                            "name": "岳普湖",
                            "en": "yuepuhu"
                        },
                        {
                            "city_id": "CH130910",
                            "name": "伽师",
                            "en": "jiashi"
                        },
                        {
                            "city_id": "CH130911",
                            "name": "疏附",
                            "en": "shufu"
                        },
                        {
                            "city_id": "CH130912",
                            "name": "疏勒",
                            "en": "Shule"
                        }
                    ]
                },
                {
                    "city_id": "CH1310",
                    "name": "伊犁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH131001",
                            "name": "伊宁",
                            "en": "Yining"
                        },
                        {
                            "city_id": "CH131002",
                            "name": "察布查尔",
                            "en": "qapqal"
                        },
                        {
                            "city_id": "CH131003",
                            "name": "尼勒克",
                            "en": "nilka"
                        },
                        {
                            "city_id": "CH131004",
                            "name": "伊宁县",
                            "en": "yiningxian"
                        },
                        {
                            "city_id": "CH131005",
                            "name": "巩留",
                            "en": "gongliu"
                        },
                        {
                            "city_id": "CH131006",
                            "name": "新源",
                            "en": "xinyuan"
                        },
                        {
                            "city_id": "CH131007",
                            "name": "昭苏",
                            "en": "zhaosu"
                        },
                        {
                            "city_id": "CH131008",
                            "name": "特克斯",
                            "en": "tekes"
                        },
                        {
                            "city_id": "CH131009",
                            "name": "霍城",
                            "en": "huocheng"
                        },
                        {
                            "city_id": "CH131010",
                            "name": "霍尔果斯",
                            "en": "khorgos"
                        },
                        {
                            "city_id": "CH131011",
                            "name": "奎屯",
                            "en": "kuytun"
                        }
                    ]
                },
                {
                    "city_id": "CH1311",
                    "name": "塔城",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH131101",
                            "name": "塔城",
                            "en": "Tacheng"
                        },
                        {
                            "city_id": "CH131102",
                            "name": "裕民",
                            "en": "yumin"
                        },
                        {
                            "city_id": "CH131103",
                            "name": "额敏",
                            "en": "emin"
                        },
                        {
                            "city_id": "CH131104",
                            "name": "和布克赛尔",
                            "en": "hoboksar"
                        },
                        {
                            "city_id": "CH131105",
                            "name": "托里",
                            "en": "tuoli"
                        },
                        {
                            "city_id": "CH131106",
                            "name": "乌苏",
                            "en": "wusu"
                        },
                        {
                            "city_id": "CH131107",
                            "name": "沙湾",
                            "en": "shawan"
                        }
                    ]
                },
                {
                    "city_id": "CH1312",
                    "name": "哈密",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH131201",
                            "name": "哈密",
                            "en": "Hami"
                        },
                        {
                            "city_id": "CH131203",
                            "name": "巴里坤",
                            "en": "barkol"
                        },
                        {
                            "city_id": "CH131204",
                            "name": "伊吾",
                            "en": "yiwu"
                        }
                    ]
                },
                {
                    "city_id": "CH1313",
                    "name": "和田",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH131301",
                            "name": "和田",
                            "en": "hotan"
                        },
                        {
                            "city_id": "CH131302",
                            "name": "皮山",
                            "en": "pishan"
                        },
                        {
                            "city_id": "CH131303",
                            "name": "策勒",
                            "en": "qira"
                        },
                        {
                            "city_id": "CH131304",
                            "name": "墨玉",
                            "en": "moyu"
                        },
                        {
                            "city_id": "CH131305",
                            "name": "洛浦",
                            "en": "luopu"
                        },
                        {
                            "city_id": "CH131306",
                            "name": "民丰",
                            "en": "minfeng"
                        },
                        {
                            "city_id": "CH131307",
                            "name": "于田",
                            "en": "yutian"
                        }
                    ]
                },
                {
                    "city_id": "CH1314",
                    "name": "阿勒泰",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH131401",
                            "name": "阿勒泰",
                            "en": "altay"
                        },
                        {
                            "city_id": "CH131402",
                            "name": "哈巴河",
                            "en": "Kaba He"
                        },
                        {
                            "city_id": "CH131405",
                            "name": "吉木乃",
                            "en": "jeminay"
                        },
                        {
                            "city_id": "CH131406",
                            "name": "布尔津",
                            "en": "buerjin"
                        },
                        {
                            "city_id": "CH131407",
                            "name": "福海",
                            "en": "fuhai"
                        },
                        {
                            "city_id": "CH131408",
                            "name": "富蕴",
                            "en": "fuyun"
                        },
                        {
                            "city_id": "CH131409",
                            "name": "青河",
                            "en": "qinghe"
                        },
                        {
                            "city_id": "CH131410",
                            "name": "北屯",
                            "en": "beitun"
                        }
                    ]
                },
                {
                    "city_id": "CH1315",
                    "name": "克州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH131501",
                            "name": "阿图什",
                            "en": "artux"
                        },
                        {
                            "city_id": "CH131502",
                            "name": "乌恰",
                            "en": "wuqia"
                        },
                        {
                            "city_id": "CH131503",
                            "name": "阿克陶",
                            "en": "akto"
                        },
                        {
                            "city_id": "CH131504",
                            "name": "阿合奇",
                            "en": "akqi"
                        }
                    ]
                },
                {
                    "city_id": "CH1316",
                    "name": "博尔塔拉",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH131601",
                            "name": "博乐",
                            "en": "bole"
                        },
                        {
                            "city_id": "CH131602",
                            "name": "温泉",
                            "en": "wenquan"
                        },
                        {
                            "city_id": "CH131603",
                            "name": "精河",
                            "en": "jinghe"
                        },
                        {
                            "city_id": "CH131606",
                            "name": "阿拉山口",
                            "en": "alashankou"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH14",
            "name": "西藏",
            "en": "",
            "list": [
                {
                    "city_id": "CH1401",
                    "name": "拉萨",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH140101",
                            "name": "拉萨",
                            "en": "Lhasa"
                        },
                        {
                            "city_id": "CH140102",
                            "name": "当雄",
                            "en": "damxung"
                        },
                        {
                            "city_id": "CH140103",
                            "name": "尼木",
                            "en": "nyemo"
                        },
                        {
                            "city_id": "CH140104",
                            "name": "林周",
                            "en": "linzhou"
                        },
                        {
                            "city_id": "CH140105",
                            "name": "堆龙德庆",
                            "en": "tolun dechen"
                        },
                        {
                            "city_id": "CH140106",
                            "name": "曲水",
                            "en": "quxu"
                        },
                        {
                            "city_id": "CH140107",
                            "name": "达孜",
                            "en": "taktse"
                        },
                        {
                            "city_id": "CH140108",
                            "name": "墨竹工卡",
                            "en": "maizhokunggar"
                        }
                    ]
                },
                {
                    "city_id": "CH1402",
                    "name": "日喀则",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH140201",
                            "name": "日喀则",
                            "en": "xigaze"
                        },
                        {
                            "city_id": "CH140202",
                            "name": "拉孜",
                            "en": "lhaze"
                        },
                        {
                            "city_id": "CH140203",
                            "name": "南木林",
                            "en": "namling"
                        },
                        {
                            "city_id": "CH140204",
                            "name": "聂拉木",
                            "en": "nyalam "
                        },
                        {
                            "city_id": "CH140205",
                            "name": "定日",
                            "en": "tingri"
                        },
                        {
                            "city_id": "CH140206",
                            "name": "江孜",
                            "en": "jiangzi"
                        },
                        {
                            "city_id": "CH140207",
                            "name": "帕里",
                            "en": "pagri"
                        },
                        {
                            "city_id": "CH140208",
                            "name": "仲巴",
                            "en": "zhongba"
                        },
                        {
                            "city_id": "CH140209",
                            "name": "萨嘎",
                            "en": "saga"
                        },
                        {
                            "city_id": "CH140210",
                            "name": "吉隆",
                            "en": "jilong"
                        },
                        {
                            "city_id": "CH140211",
                            "name": "昂仁",
                            "en": "ngamring"
                        },
                        {
                            "city_id": "CH140212",
                            "name": "定结",
                            "en": "dingjie"
                        },
                        {
                            "city_id": "CH140213",
                            "name": "萨迦",
                            "en": "sajia"
                        },
                        {
                            "city_id": "CH140214",
                            "name": "谢通门",
                            "en": "thongmon"
                        },
                        {
                            "city_id": "CH140216",
                            "name": "岗巴",
                            "en": "gangba"
                        },
                        {
                            "city_id": "CH140217",
                            "name": "白朗",
                            "en": "bailang"
                        },
                        {
                            "city_id": "CH140218",
                            "name": "亚东",
                            "en": "yadong"
                        },
                        {
                            "city_id": "CH140219",
                            "name": "康马",
                            "en": "Kangmar"
                        },
                        {
                            "city_id": "CH140220",
                            "name": "仁布",
                            "en": "renbu"
                        }
                    ]
                },
                {
                    "city_id": "CH1403",
                    "name": "山南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH140301",
                            "name": "山南",
                            "en": "lhoka"
                        },
                        {
                            "city_id": "CH140302",
                            "name": "贡嘎",
                            "en": "Gonggar"
                        },
                        {
                            "city_id": "CH140303",
                            "name": "札囊",
                            "en": "zhanang"
                        },
                        {
                            "city_id": "CH140304",
                            "name": "加查",
                            "en": "gyaca"
                        },
                        {
                            "city_id": "CH140305",
                            "name": "浪卡子",
                            "en": "nagarze"
                        },
                        {
                            "city_id": "CH140306",
                            "name": "错那",
                            "en": "cona"
                        },
                        {
                            "city_id": "CH140307",
                            "name": "隆子",
                            "en": "lhunze"
                        },
                        {
                            "city_id": "CH140308",
                            "name": "泽当",
                            "en": "zetang"
                        },
                        {
                            "city_id": "CH140309",
                            "name": "乃东",
                            "en": "naidong"
                        },
                        {
                            "city_id": "CH140310",
                            "name": "桑日",
                            "en": "sangri"
                        },
                        {
                            "city_id": "CH140311",
                            "name": "洛扎",
                            "en": "lhozhag"
                        },
                        {
                            "city_id": "CH140312",
                            "name": "措美",
                            "en": "comai"
                        },
                        {
                            "city_id": "CH140313",
                            "name": "琼结",
                            "en": "qonggyai"
                        },
                        {
                            "city_id": "CH140314",
                            "name": "曲松",
                            "en": "qusum"
                        }
                    ]
                },
                {
                    "city_id": "CH1404",
                    "name": "林芝",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH140401",
                            "name": "林芝",
                            "en": "nyingchi"
                        },
                        {
                            "city_id": "CH140402",
                            "name": "波密",
                            "en": "bomi"
                        },
                        {
                            "city_id": "CH140403",
                            "name": "米林",
                            "en": "mainling"
                        },
                        {
                            "city_id": "CH140404",
                            "name": "察隅",
                            "en": "zayu"
                        },
                        {
                            "city_id": "CH140405",
                            "name": "工布江达",
                            "en": "gongbogvamda"
                        },
                        {
                            "city_id": "CH140406",
                            "name": "朗县",
                            "en": "langxian"
                        },
                        {
                            "city_id": "CH140407",
                            "name": "墨脱",
                            "en": "motuo"
                        }
                    ]
                },
                {
                    "city_id": "CH1405",
                    "name": "昌都",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH140501",
                            "name": "昌都",
                            "en": "qamdo"
                        },
                        {
                            "city_id": "CH140502",
                            "name": "丁青",
                            "en": "dengqen"
                        },
                        {
                            "city_id": "CH140503",
                            "name": "边坝",
                            "en": "banbar"
                        },
                        {
                            "city_id": "CH140504",
                            "name": "洛隆",
                            "en": "lhorong"
                        },
                        {
                            "city_id": "CH140505",
                            "name": "左贡",
                            "en": "zogang"
                        },
                        {
                            "city_id": "CH140506",
                            "name": "芒康",
                            "en": "markam"
                        },
                        {
                            "city_id": "CH140507",
                            "name": "类乌齐",
                            "en": "leiwuqi"
                        },
                        {
                            "city_id": "CH140508",
                            "name": "八宿",
                            "en": "baxoi"
                        },
                        {
                            "city_id": "CH140509",
                            "name": "江达",
                            "en": "jomda"
                        },
                        {
                            "city_id": "CH140510",
                            "name": "察雅",
                            "en": "chagyab"
                        },
                        {
                            "city_id": "CH140511",
                            "name": "贡觉",
                            "en": "konjo"
                        }
                    ]
                },
                {
                    "city_id": "CH1406",
                    "name": "那曲",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH140601",
                            "name": "那曲",
                            "en": "nagqu"
                        },
                        {
                            "city_id": "CH140602",
                            "name": "尼玛",
                            "en": "nyima"
                        },
                        {
                            "city_id": "CH140603",
                            "name": "嘉黎",
                            "en": "jiali"
                        },
                        {
                            "city_id": "CH140604",
                            "name": "班戈",
                            "en": "baingoin"
                        },
                        {
                            "city_id": "CH140605",
                            "name": "安多",
                            "en": "amdo"
                        },
                        {
                            "city_id": "CH140606",
                            "name": "索县",
                            "en": "sog xian"
                        },
                        {
                            "city_id": "CH140607",
                            "name": "聂荣",
                            "en": "nyainrong"
                        },
                        {
                            "city_id": "CH140608",
                            "name": "巴青",
                            "en": "baqing"
                        },
                        {
                            "city_id": "CH140609",
                            "name": "比如",
                            "en": "biru"
                        },
                        {
                            "city_id": "CH140610",
                            "name": "双湖",
                            "en": "shuanghu"
                        }
                    ]
                },
                {
                    "city_id": "CH1407",
                    "name": "阿里",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH140701",
                            "name": "阿里",
                            "en": "ali"
                        },
                        {
                            "city_id": "CH140702",
                            "name": "改则",
                            "en": "gaize"
                        },
                        {
                            "city_id": "CH140703",
                            "name": "申扎",
                            "en": "shenzha"
                        },
                        {
                            "city_id": "CH140704",
                            "name": "狮泉河",
                            "en": "shiquan"
                        },
                        {
                            "city_id": "CH140705",
                            "name": "普兰",
                            "en": "burang"
                        },
                        {
                            "city_id": "CH140706",
                            "name": "札达",
                            "en": "zhada"
                        },
                        {
                            "city_id": "CH140707",
                            "name": "噶尔",
                            "en": "gaer"
                        },
                        {
                            "city_id": "CH140708",
                            "name": "日土",
                            "en": "rutog"
                        },
                        {
                            "city_id": "CH140709",
                            "name": "革吉",
                            "en": "geji"
                        },
                        {
                            "city_id": "CH140710",
                            "name": "措勤",
                            "en": "cuoqin"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH15",
            "name": "青海",
            "en": "",
            "list": [
                {
                    "city_id": "CH1501",
                    "name": "西宁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150101",
                            "name": "西宁",
                            "en": "Xining"
                        },
                        {
                            "city_id": "CH150102",
                            "name": "大通",
                            "en": "datong"
                        },
                        {
                            "city_id": "CH150103",
                            "name": "湟源",
                            "en": "huangyuan"
                        },
                        {
                            "city_id": "CH150104",
                            "name": "湟中",
                            "en": "huangzhong"
                        }
                    ]
                },
                {
                    "city_id": "CH1502",
                    "name": "海东",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150201",
                            "name": "海东",
                            "en": "haidong"
                        },
                        {
                            "city_id": "CH150202",
                            "name": "乐都",
                            "en": "ledu"
                        },
                        {
                            "city_id": "CH150203",
                            "name": "民和",
                            "en": "minhe"
                        },
                        {
                            "city_id": "CH150204",
                            "name": "互助",
                            "en": "huzhu"
                        },
                        {
                            "city_id": "CH150205",
                            "name": "化隆",
                            "en": "hualong"
                        },
                        {
                            "city_id": "CH150206",
                            "name": "循化",
                            "en": "xunhua"
                        },
                        {
                            "city_id": "CH150207",
                            "name": "冷湖",
                            "en": "lenghu"
                        },
                        {
                            "city_id": "CH150208",
                            "name": "平安",
                            "en": "pingan"
                        }
                    ]
                },
                {
                    "city_id": "CH1503",
                    "name": "黄南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150301",
                            "name": "黄南",
                            "en": "huangnan"
                        },
                        {
                            "city_id": "CH150302",
                            "name": "尖扎",
                            "en": "jianzha"
                        },
                        {
                            "city_id": "CH150303",
                            "name": "泽库",
                            "en": "zeku"
                        },
                        {
                            "city_id": "CH150304",
                            "name": "河南",
                            "en": "henan"
                        },
                        {
                            "city_id": "CH150305",
                            "name": "同仁",
                            "en": "tongren"
                        }
                    ]
                },
                {
                    "city_id": "CH1504",
                    "name": "海南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150401",
                            "name": "海南",
                            "en": "hainan"
                        },
                        {
                            "city_id": "CH150404",
                            "name": "贵德",
                            "en": "guide"
                        },
                        {
                            "city_id": "CH150406",
                            "name": "兴海",
                            "en": "xinghai"
                        },
                        {
                            "city_id": "CH150407",
                            "name": "贵南",
                            "en": "guinan"
                        },
                        {
                            "city_id": "CH150408",
                            "name": "同德",
                            "en": "tongde"
                        },
                        {
                            "city_id": "CH150409",
                            "name": "共和",
                            "en": "gonghe"
                        }
                    ]
                },
                {
                    "city_id": "CH1505",
                    "name": "果洛",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150501",
                            "name": "果洛",
                            "en": "guoluo"
                        },
                        {
                            "city_id": "CH150502",
                            "name": "班玛",
                            "en": "banma"
                        },
                        {
                            "city_id": "CH150503",
                            "name": "甘德",
                            "en": "gande"
                        },
                        {
                            "city_id": "CH150504",
                            "name": "达日",
                            "en": "darlag"
                        },
                        {
                            "city_id": "CH150505",
                            "name": "久治",
                            "en": "jiuzhi"
                        },
                        {
                            "city_id": "CH150506",
                            "name": "玛多",
                            "en": "madoi"
                        },
                        {
                            "city_id": "CH150507",
                            "name": "多县",
                            "en": "duoxian"
                        },
                        {
                            "city_id": "CH150508",
                            "name": "玛沁",
                            "en": "maqin"
                        }
                    ]
                },
                {
                    "city_id": "CH1506",
                    "name": "玉树",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150601",
                            "name": "玉树",
                            "en": "yushu"
                        },
                        {
                            "city_id": "CH150602",
                            "name": "称多",
                            "en": "chenduo"
                        },
                        {
                            "city_id": "CH150603",
                            "name": "治多",
                            "en": "zhiduo"
                        },
                        {
                            "city_id": "CH150604",
                            "name": "杂多",
                            "en": "zadoi"
                        },
                        {
                            "city_id": "CH150605",
                            "name": "囊谦",
                            "en": "nangqian"
                        },
                        {
                            "city_id": "CH150606",
                            "name": "曲麻莱",
                            "en": "qumarleb"
                        }
                    ]
                },
                {
                    "city_id": "CH1507",
                    "name": "海西",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150701",
                            "name": "海西",
                            "en": "haixi"
                        },
                        {
                            "city_id": "CH150708",
                            "name": "天峻",
                            "en": "tianjun"
                        },
                        {
                            "city_id": "CH150709",
                            "name": "乌兰",
                            "en": "wulan"
                        },
                        {
                            "city_id": "CH150712",
                            "name": "茫崖",
                            "en": "mangnai"
                        },
                        {
                            "city_id": "CH150713",
                            "name": "大柴旦",
                            "en": "da-qaidam"
                        },
                        {
                            "city_id": "CH150716",
                            "name": "德令哈",
                            "en": "Delingha"
                        }
                    ]
                },
                {
                    "city_id": "CH1508",
                    "name": "海北",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150801",
                            "name": "海北",
                            "en": "haibei"
                        },
                        {
                            "city_id": "CH150802",
                            "name": "门源",
                            "en": "menyuan"
                        },
                        {
                            "city_id": "CH150803",
                            "name": "祁连",
                            "en": "qilian"
                        },
                        {
                            "city_id": "CH150804",
                            "name": "海晏",
                            "en": "haiyan"
                        },
                        {
                            "city_id": "CH150806",
                            "name": "刚察",
                            "en": "gangcha"
                        }
                    ]
                },
                {
                    "city_id": "CH1509",
                    "name": "格尔木",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH150901",
                            "name": "格尔木",
                            "en": "golmud"
                        },
                        {
                            "city_id": "CH150902",
                            "name": "都兰",
                            "en": "dulan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH16",
            "name": "甘肃",
            "en": "",
            "list": [
                {
                    "city_id": "CH1601",
                    "name": "兰州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160101",
                            "name": "兰州",
                            "en": "Lanzhou"
                        },
                        {
                            "city_id": "CH160102",
                            "name": "皋兰",
                            "en": "gaolan"
                        },
                        {
                            "city_id": "CH160103",
                            "name": "永登",
                            "en": "yongdeng"
                        },
                        {
                            "city_id": "CH160104",
                            "name": "榆中",
                            "en": "yuzhong"
                        }
                    ]
                },
                {
                    "city_id": "CH1602",
                    "name": "定西",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160201",
                            "name": "定西",
                            "en": "dingxi"
                        },
                        {
                            "city_id": "CH160202",
                            "name": "通渭",
                            "en": "tongwei"
                        },
                        {
                            "city_id": "CH160203",
                            "name": "陇西",
                            "en": "longxi"
                        },
                        {
                            "city_id": "CH160204",
                            "name": "渭源",
                            "en": "weiyuan"
                        },
                        {
                            "city_id": "CH160205",
                            "name": "临洮",
                            "en": "lintao"
                        },
                        {
                            "city_id": "CH160206",
                            "name": "漳县",
                            "en": "zhangxian"
                        },
                        {
                            "city_id": "CH160207",
                            "name": "岷县",
                            "en": "minxian"
                        },
                        {
                            "city_id": "CH160208",
                            "name": "安定",
                            "en": "anding"
                        }
                    ]
                },
                {
                    "city_id": "CH1603",
                    "name": "平凉",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160301",
                            "name": "平凉",
                            "en": "Pingliang"
                        },
                        {
                            "city_id": "CH160302",
                            "name": "泾川",
                            "en": "jinchuan"
                        },
                        {
                            "city_id": "CH160303",
                            "name": "灵台",
                            "en": "lingtai"
                        },
                        {
                            "city_id": "CH160304",
                            "name": "崇信",
                            "en": "chongxin"
                        },
                        {
                            "city_id": "CH160305",
                            "name": "华亭",
                            "en": "huating"
                        },
                        {
                            "city_id": "CH160306",
                            "name": "庄浪",
                            "en": "zhuanglang"
                        },
                        {
                            "city_id": "CH160307",
                            "name": "静宁",
                            "en": "jingning"
                        },
                        {
                            "city_id": "CH160308",
                            "name": "崆峒",
                            "en": "kongtong"
                        }
                    ]
                },
                {
                    "city_id": "CH1604",
                    "name": "庆阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160401",
                            "name": "庆阳",
                            "en": "qingyang"
                        },
                        {
                            "city_id": "CH160403",
                            "name": "环县",
                            "en": "huanxian"
                        },
                        {
                            "city_id": "CH160404",
                            "name": "华池",
                            "en": "huachi"
                        },
                        {
                            "city_id": "CH160405",
                            "name": "合水",
                            "en": "heshui"
                        },
                        {
                            "city_id": "CH160406",
                            "name": "正宁",
                            "en": "zhengning"
                        },
                        {
                            "city_id": "CH160407",
                            "name": "宁县",
                            "en": "ningxian"
                        },
                        {
                            "city_id": "CH160408",
                            "name": "镇原",
                            "en": "zhenyuan"
                        },
                        {
                            "city_id": "CH160409",
                            "name": "庆城",
                            "en": "qingcheng"
                        }
                    ]
                },
                {
                    "city_id": "CH1605",
                    "name": "武威",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160501",
                            "name": "武威",
                            "en": "wuwei"
                        },
                        {
                            "city_id": "CH160502",
                            "name": "民勤",
                            "en": "minqin"
                        },
                        {
                            "city_id": "CH160503",
                            "name": "古浪",
                            "en": "gulang"
                        },
                        {
                            "city_id": "CH160505",
                            "name": "天祝",
                            "en": "tianzhu"
                        }
                    ]
                },
                {
                    "city_id": "CH1606",
                    "name": "金昌",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160601",
                            "name": "金昌",
                            "en": "Jinchang"
                        },
                        {
                            "city_id": "CH160602",
                            "name": "永昌",
                            "en": "yongchang"
                        }
                    ]
                },
                {
                    "city_id": "CH1607",
                    "name": "张掖",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160701",
                            "name": "张掖",
                            "en": "Zhangye"
                        },
                        {
                            "city_id": "CH160702",
                            "name": "肃南",
                            "en": "sunan"
                        },
                        {
                            "city_id": "CH160703",
                            "name": "民乐",
                            "en": "minle"
                        },
                        {
                            "city_id": "CH160704",
                            "name": "临泽",
                            "en": "linze"
                        },
                        {
                            "city_id": "CH160705",
                            "name": "高台",
                            "en": "gaotai"
                        },
                        {
                            "city_id": "CH160706",
                            "name": "山丹",
                            "en": "shandan"
                        }
                    ]
                },
                {
                    "city_id": "CH1608",
                    "name": "酒泉",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160801",
                            "name": "酒泉",
                            "en": "Jiuquan"
                        },
                        {
                            "city_id": "CH160803",
                            "name": "金塔",
                            "en": "jinta"
                        },
                        {
                            "city_id": "CH160804",
                            "name": "阿克塞",
                            "en": "akesai"
                        },
                        {
                            "city_id": "CH160805",
                            "name": "瓜州",
                            "en": "guazhou"
                        },
                        {
                            "city_id": "CH160806",
                            "name": "肃北",
                            "en": "subei"
                        },
                        {
                            "city_id": "CH160807",
                            "name": "玉门",
                            "en": "yumen"
                        },
                        {
                            "city_id": "CH160808",
                            "name": "敦煌",
                            "en": "Dunhuang"
                        }
                    ]
                },
                {
                    "city_id": "CH1609",
                    "name": "天水",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH160901",
                            "name": "天水",
                            "en": "Tianshui"
                        },
                        {
                            "city_id": "CH160903",
                            "name": "清水",
                            "en": "qingshui"
                        },
                        {
                            "city_id": "CH160904",
                            "name": "秦安",
                            "en": "qinan"
                        },
                        {
                            "city_id": "CH160905",
                            "name": "甘谷",
                            "en": "gangu"
                        },
                        {
                            "city_id": "CH160906",
                            "name": "武山",
                            "en": "wushan"
                        },
                        {
                            "city_id": "CH160907",
                            "name": "张家川",
                            "en": "zhangjiachuan"
                        },
                        {
                            "city_id": "CH160908",
                            "name": "麦积",
                            "en": "maiji"
                        }
                    ]
                },
                {
                    "city_id": "CH1610",
                    "name": "陇南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH161001",
                            "name": "武都",
                            "en": "wudu"
                        },
                        {
                            "city_id": "CH161002",
                            "name": "成县",
                            "en": "chengxian"
                        },
                        {
                            "city_id": "CH161003",
                            "name": "文县",
                            "en": "wenxian"
                        },
                        {
                            "city_id": "CH161004",
                            "name": "宕昌",
                            "en": "dangchang"
                        },
                        {
                            "city_id": "CH161005",
                            "name": "康县",
                            "en": "kangxian"
                        },
                        {
                            "city_id": "CH161006",
                            "name": "西和",
                            "en": "xihe"
                        },
                        {
                            "city_id": "CH161007",
                            "name": "礼县",
                            "en": "lixian"
                        },
                        {
                            "city_id": "CH161008",
                            "name": "徽县",
                            "en": "huxian"
                        },
                        {
                            "city_id": "CH161009",
                            "name": "两当",
                            "en": "liangdang"
                        }
                    ]
                },
                {
                    "city_id": "CH1611",
                    "name": "临夏",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH161101",
                            "name": "临夏",
                            "en": "linxia"
                        },
                        {
                            "city_id": "CH161102",
                            "name": "康乐",
                            "en": "kangle"
                        },
                        {
                            "city_id": "CH161103",
                            "name": "永靖",
                            "en": "yongjing"
                        },
                        {
                            "city_id": "CH161104",
                            "name": "广河",
                            "en": "guanghe"
                        },
                        {
                            "city_id": "CH161105",
                            "name": "和政",
                            "en": "hezheng"
                        },
                        {
                            "city_id": "CH161106",
                            "name": "东乡",
                            "en": "dongxiang"
                        },
                        {
                            "city_id": "CH161107",
                            "name": "积石山",
                            "en": "jishishan"
                        }
                    ]
                },
                {
                    "city_id": "CH1612",
                    "name": "甘南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH161201",
                            "name": "合作",
                            "en": "Hezuo"
                        },
                        {
                            "city_id": "CH161202",
                            "name": "临潭",
                            "en": "lintan"
                        },
                        {
                            "city_id": "CH161203",
                            "name": "卓尼",
                            "en": "zhuoni"
                        },
                        {
                            "city_id": "CH161204",
                            "name": "舟曲",
                            "en": "zhouqu"
                        },
                        {
                            "city_id": "CH161205",
                            "name": "迭部",
                            "en": "diebu"
                        },
                        {
                            "city_id": "CH161206",
                            "name": "玛曲",
                            "en": "maqu"
                        },
                        {
                            "city_id": "CH161207",
                            "name": "碌曲",
                            "en": "luqu"
                        },
                        {
                            "city_id": "CH161208",
                            "name": "夏河",
                            "en": "xiahe"
                        }
                    ]
                },
                {
                    "city_id": "CH1613",
                    "name": "白银",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH161301",
                            "name": "白银",
                            "en": "Baiyin"
                        },
                        {
                            "city_id": "CH161302",
                            "name": "靖远",
                            "en": "jingyuan"
                        },
                        {
                            "city_id": "CH161303",
                            "name": "会宁",
                            "en": "huining"
                        },
                        {
                            "city_id": "CH161304",
                            "name": "平川",
                            "en": "pingchuan"
                        },
                        {
                            "city_id": "CH161305",
                            "name": "景泰",
                            "en": "jingtai"
                        }
                    ]
                },
                {
                    "city_id": "CH1614",
                    "name": "嘉峪关",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH161401",
                            "name": "嘉峪关",
                            "en": "Jiayuguan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH17",
            "name": "宁夏",
            "en": "",
            "list": [
                {
                    "city_id": "CH1701",
                    "name": "银川",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH170101",
                            "name": "银川",
                            "en": "Yinchuan"
                        },
                        {
                            "city_id": "CH170102",
                            "name": "永宁",
                            "en": "yongning"
                        },
                        {
                            "city_id": "CH170103",
                            "name": "灵武",
                            "en": "lingwu"
                        },
                        {
                            "city_id": "CH170104",
                            "name": "贺兰",
                            "en": "helan"
                        }
                    ]
                },
                {
                    "city_id": "CH1702",
                    "name": "石嘴山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH170201",
                            "name": "石嘴山",
                            "en": "shizuishan"
                        },
                        {
                            "city_id": "CH170202",
                            "name": "惠农",
                            "en": "huinong"
                        },
                        {
                            "city_id": "CH170203",
                            "name": "平罗",
                            "en": "pingluo"
                        },
                        {
                            "city_id": "CH170204",
                            "name": "陶乐",
                            "en": "taole"
                        }
                    ]
                },
                {
                    "city_id": "CH1703",
                    "name": "吴忠",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH170301",
                            "name": "吴忠",
                            "en": "wuzhong"
                        },
                        {
                            "city_id": "CH170302",
                            "name": "同心",
                            "en": "tongxin"
                        },
                        {
                            "city_id": "CH170303",
                            "name": "盐池",
                            "en": "yanchi"
                        },
                        {
                            "city_id": "CH170306",
                            "name": "青铜峡",
                            "en": "qingtongxia"
                        }
                    ]
                },
                {
                    "city_id": "CH1704",
                    "name": "固原",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH170401",
                            "name": "固原",
                            "en": "guyuan"
                        },
                        {
                            "city_id": "CH170402",
                            "name": "西吉",
                            "en": "xiji"
                        },
                        {
                            "city_id": "CH170403",
                            "name": "隆德",
                            "en": "longde"
                        },
                        {
                            "city_id": "CH170404",
                            "name": "泾源",
                            "en": "jingyuan"
                        },
                        {
                            "city_id": "CH170406",
                            "name": "彭阳",
                            "en": "pengyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1705",
                    "name": "中卫",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH170501",
                            "name": "中卫",
                            "en": "zhongwei"
                        },
                        {
                            "city_id": "CH170502",
                            "name": "中宁",
                            "en": "zhongning"
                        },
                        {
                            "city_id": "CH170504",
                            "name": "海原",
                            "en": "haiyuan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH18",
            "name": "河南",
            "en": "",
            "list": [
                {
                    "city_id": "CH1801",
                    "name": "郑州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180101",
                            "name": "郑州",
                            "en": "Zhengzhou"
                        },
                        {
                            "city_id": "CH180102",
                            "name": "巩义",
                            "en": "gongyi"
                        },
                        {
                            "city_id": "CH180103",
                            "name": "荥阳",
                            "en": "xingyang"
                        },
                        {
                            "city_id": "CH180104",
                            "name": "登封",
                            "en": "Dengfeng"
                        },
                        {
                            "city_id": "CH180105",
                            "name": "新密",
                            "en": "xinmi"
                        },
                        {
                            "city_id": "CH180106",
                            "name": "新郑",
                            "en": "xinzheng"
                        },
                        {
                            "city_id": "CH180107",
                            "name": "中牟",
                            "en": "zhongmou"
                        },
                        {
                            "city_id": "CH180108",
                            "name": "上街",
                            "en": "shangjie"
                        }
                    ]
                },
                {
                    "city_id": "CH1802",
                    "name": "安阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180201",
                            "name": "安阳",
                            "en": "Anyang"
                        },
                        {
                            "city_id": "CH180202",
                            "name": "汤阴",
                            "en": "tangyin"
                        },
                        {
                            "city_id": "CH180203",
                            "name": "滑县",
                            "en": "huaxian"
                        },
                        {
                            "city_id": "CH180204",
                            "name": "内黄",
                            "en": "neihuang"
                        },
                        {
                            "city_id": "CH180205",
                            "name": "林州",
                            "en": "linzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH1803",
                    "name": "新乡",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180301",
                            "name": "新乡",
                            "en": "Xinxiang"
                        },
                        {
                            "city_id": "CH180302",
                            "name": "获嘉",
                            "en": "huojia"
                        },
                        {
                            "city_id": "CH180303",
                            "name": "原阳",
                            "en": "yuanyang"
                        },
                        {
                            "city_id": "CH180304",
                            "name": "辉县",
                            "en": "huixian"
                        },
                        {
                            "city_id": "CH180305",
                            "name": "卫辉",
                            "en": "weihui"
                        },
                        {
                            "city_id": "CH180306",
                            "name": "延津",
                            "en": "yanjin"
                        },
                        {
                            "city_id": "CH180307",
                            "name": "封丘",
                            "en": "fengqiu"
                        },
                        {
                            "city_id": "CH180308",
                            "name": "长垣",
                            "en": "changyuan"
                        }
                    ]
                },
                {
                    "city_id": "CH1804",
                    "name": "许昌",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180401",
                            "name": "许昌",
                            "en": "Xuchang"
                        },
                        {
                            "city_id": "CH180402",
                            "name": "鄢陵",
                            "en": "yanling"
                        },
                        {
                            "city_id": "CH180403",
                            "name": "襄城",
                            "en": "Xiangcheng"
                        },
                        {
                            "city_id": "CH180404",
                            "name": "长葛",
                            "en": "changge"
                        },
                        {
                            "city_id": "CH180405",
                            "name": "禹州",
                            "en": "yuzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH1805",
                    "name": "平顶山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180501",
                            "name": "平顶山",
                            "en": "pingdingshan"
                        },
                        {
                            "city_id": "CH180502",
                            "name": "郏县",
                            "en": "jiaxian"
                        },
                        {
                            "city_id": "CH180503",
                            "name": "宝丰",
                            "en": "baofeng"
                        },
                        {
                            "city_id": "CH180504",
                            "name": "汝州",
                            "en": "ruzhou"
                        },
                        {
                            "city_id": "CH180505",
                            "name": "叶县",
                            "en": "yexian"
                        },
                        {
                            "city_id": "CH180506",
                            "name": "舞钢",
                            "en": "wugang"
                        },
                        {
                            "city_id": "CH180507",
                            "name": "鲁山",
                            "en": "lushan"
                        },
                        {
                            "city_id": "CH180508",
                            "name": "石龙",
                            "en": "shilong"
                        }
                    ]
                },
                {
                    "city_id": "CH1806",
                    "name": "信阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180601",
                            "name": "信阳",
                            "en": "xinyang"
                        },
                        {
                            "city_id": "CH180602",
                            "name": "息县",
                            "en": "xixian"
                        },
                        {
                            "city_id": "CH180603",
                            "name": "罗山",
                            "en": "luoshan"
                        },
                        {
                            "city_id": "CH180604",
                            "name": "光山",
                            "en": "guangshan"
                        },
                        {
                            "city_id": "CH180605",
                            "name": "新县",
                            "en": "Xinxiang"
                        },
                        {
                            "city_id": "CH180606",
                            "name": "淮滨",
                            "en": "huaibin"
                        },
                        {
                            "city_id": "CH180607",
                            "name": "潢川",
                            "en": "huangchuan"
                        },
                        {
                            "city_id": "CH180608",
                            "name": "固始",
                            "en": "gushi"
                        },
                        {
                            "city_id": "CH180609",
                            "name": "商城",
                            "en": "shangcheng"
                        }
                    ]
                },
                {
                    "city_id": "CH1807",
                    "name": "南阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180701",
                            "name": "南阳",
                            "en": "nanyang"
                        },
                        {
                            "city_id": "CH180702",
                            "name": "南召",
                            "en": "nanzhao"
                        },
                        {
                            "city_id": "CH180703",
                            "name": "方城",
                            "en": "fangcheng"
                        },
                        {
                            "city_id": "CH180704",
                            "name": "社旗",
                            "en": "sheqi"
                        },
                        {
                            "city_id": "CH180705",
                            "name": "西峡",
                            "en": "xixia"
                        },
                        {
                            "city_id": "CH180706",
                            "name": "内乡",
                            "en": "neixiang"
                        },
                        {
                            "city_id": "CH180707",
                            "name": "镇平",
                            "en": "zhenping"
                        },
                        {
                            "city_id": "CH180708",
                            "name": "淅川",
                            "en": "xichuan"
                        },
                        {
                            "city_id": "CH180709",
                            "name": "新野",
                            "en": "xinye"
                        },
                        {
                            "city_id": "CH180710",
                            "name": "唐河",
                            "en": "tanghe"
                        },
                        {
                            "city_id": "CH180711",
                            "name": "邓州",
                            "en": "Dengzhou"
                        },
                        {
                            "city_id": "CH180712",
                            "name": "桐柏",
                            "en": "tongbai"
                        }
                    ]
                },
                {
                    "city_id": "CH1808",
                    "name": "开封",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180801",
                            "name": "开封",
                            "en": "Kaifeng"
                        },
                        {
                            "city_id": "CH180802",
                            "name": "杞县",
                            "en": "qixian"
                        },
                        {
                            "city_id": "CH180803",
                            "name": "尉氏",
                            "en": "weishi"
                        },
                        {
                            "city_id": "CH180804",
                            "name": "通许",
                            "en": "tongxu"
                        },
                        {
                            "city_id": "CH180805",
                            "name": "兰考",
                            "en": "lankao"
                        }
                    ]
                },
                {
                    "city_id": "CH1809",
                    "name": "洛阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH180901",
                            "name": "洛阳",
                            "en": "luoyang"
                        },
                        {
                            "city_id": "CH180902",
                            "name": "新安",
                            "en": "xinan"
                        },
                        {
                            "city_id": "CH180903",
                            "name": "孟津",
                            "en": "mengjin"
                        },
                        {
                            "city_id": "CH180904",
                            "name": "宜阳",
                            "en": "yiyang"
                        },
                        {
                            "city_id": "CH180905",
                            "name": "洛宁",
                            "en": "luoning"
                        },
                        {
                            "city_id": "CH180906",
                            "name": "伊川",
                            "en": "yichuan"
                        },
                        {
                            "city_id": "CH180907",
                            "name": "嵩县",
                            "en": "songxian"
                        },
                        {
                            "city_id": "CH180908",
                            "name": "偃师",
                            "en": "yanshi"
                        },
                        {
                            "city_id": "CH180909",
                            "name": "栾川",
                            "en": "luanchuan"
                        },
                        {
                            "city_id": "CH180910",
                            "name": "汝阳",
                            "en": "ruyang"
                        },
                        {
                            "city_id": "CH180911",
                            "name": "吉利",
                            "en": "jili"
                        }
                    ]
                },
                {
                    "city_id": "CH1810",
                    "name": "商丘",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181001",
                            "name": "商丘",
                            "en": "shangqiu"
                        },
                        {
                            "city_id": "CH181003",
                            "name": "睢县",
                            "en": "suixian"
                        },
                        {
                            "city_id": "CH181004",
                            "name": "民权",
                            "en": "minquan"
                        },
                        {
                            "city_id": "CH181005",
                            "name": "虞城",
                            "en": "yucheng"
                        },
                        {
                            "city_id": "CH181006",
                            "name": "柘城",
                            "en": "zhecheng"
                        },
                        {
                            "city_id": "CH181007",
                            "name": "宁陵",
                            "en": "ningling"
                        },
                        {
                            "city_id": "CH181008",
                            "name": "夏邑",
                            "en": "xiayi"
                        },
                        {
                            "city_id": "CH181009",
                            "name": "永城",
                            "en": "yongcheng"
                        }
                    ]
                },
                {
                    "city_id": "CH1811",
                    "name": "焦作",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181101",
                            "name": "焦作",
                            "en": "Jiaozuo"
                        },
                        {
                            "city_id": "CH181102",
                            "name": "修武",
                            "en": "xiuwu"
                        },
                        {
                            "city_id": "CH181103",
                            "name": "武陟",
                            "en": "wuzhi"
                        },
                        {
                            "city_id": "CH181104",
                            "name": "沁阳",
                            "en": "qinyang"
                        },
                        {
                            "city_id": "CH181106",
                            "name": "博爱",
                            "en": "boai"
                        },
                        {
                            "city_id": "CH181107",
                            "name": "温县",
                            "en": "wenxian"
                        },
                        {
                            "city_id": "CH181108",
                            "name": "孟州",
                            "en": "mengzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH1812",
                    "name": "鹤壁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181201",
                            "name": "鹤壁",
                            "en": "Hebi"
                        },
                        {
                            "city_id": "CH181202",
                            "name": "浚县",
                            "en": "xunxian"
                        },
                        {
                            "city_id": "CH181203",
                            "name": "淇县",
                            "en": "qixian"
                        }
                    ]
                },
                {
                    "city_id": "CH1813",
                    "name": "濮阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181301",
                            "name": "濮阳",
                            "en": "puyang"
                        },
                        {
                            "city_id": "CH181302",
                            "name": "台前",
                            "en": "taiqian"
                        },
                        {
                            "city_id": "CH181303",
                            "name": "南乐",
                            "en": "nanle"
                        },
                        {
                            "city_id": "CH181304",
                            "name": "清丰",
                            "en": "qingfeng"
                        },
                        {
                            "city_id": "CH181305",
                            "name": "范县",
                            "en": "fanxian"
                        }
                    ]
                },
                {
                    "city_id": "CH1814",
                    "name": "周口",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181401",
                            "name": "周口",
                            "en": "zhoukou"
                        },
                        {
                            "city_id": "CH181402",
                            "name": "扶沟",
                            "en": "fugou"
                        },
                        {
                            "city_id": "CH181403",
                            "name": "太康",
                            "en": "Taikang"
                        },
                        {
                            "city_id": "CH181404",
                            "name": "淮阳",
                            "en": "huaiyang"
                        },
                        {
                            "city_id": "CH181405",
                            "name": "西华",
                            "en": "Xihua"
                        },
                        {
                            "city_id": "CH181406",
                            "name": "商水",
                            "en": "shangshui"
                        },
                        {
                            "city_id": "CH181407",
                            "name": "项城",
                            "en": "Xiangcheng"
                        },
                        {
                            "city_id": "CH181408",
                            "name": "郸城",
                            "en": "Dancheng"
                        },
                        {
                            "city_id": "CH181409",
                            "name": "鹿邑",
                            "en": "luyi"
                        },
                        {
                            "city_id": "CH181410",
                            "name": "沈丘",
                            "en": "shenqiu"
                        }
                    ]
                },
                {
                    "city_id": "CH1815",
                    "name": "漯河",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181501",
                            "name": "漯河",
                            "en": "luohe"
                        },
                        {
                            "city_id": "CH181502",
                            "name": "临颍",
                            "en": "linying"
                        },
                        {
                            "city_id": "CH181503",
                            "name": "舞阳",
                            "en": "wuyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1816",
                    "name": "驻马店",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181601",
                            "name": "驻马店",
                            "en": "Zhumadian"
                        },
                        {
                            "city_id": "CH181602",
                            "name": "西平",
                            "en": "xiping"
                        },
                        {
                            "city_id": "CH181603",
                            "name": "遂平",
                            "en": "suiping"
                        },
                        {
                            "city_id": "CH181604",
                            "name": "上蔡",
                            "en": "shangcai"
                        },
                        {
                            "city_id": "CH181605",
                            "name": "汝南",
                            "en": "runan"
                        },
                        {
                            "city_id": "CH181606",
                            "name": "泌阳",
                            "en": "biyang"
                        },
                        {
                            "city_id": "CH181607",
                            "name": "平舆",
                            "en": "pingyu"
                        },
                        {
                            "city_id": "CH181608",
                            "name": "新蔡",
                            "en": "xincai"
                        },
                        {
                            "city_id": "CH181609",
                            "name": "确山",
                            "en": "queshan"
                        },
                        {
                            "city_id": "CH181610",
                            "name": "正阳",
                            "en": "zhengyang"
                        }
                    ]
                },
                {
                    "city_id": "CH1817",
                    "name": "三门峡",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181701",
                            "name": "三门峡",
                            "en": "sanmenxia"
                        },
                        {
                            "city_id": "CH181702",
                            "name": "灵宝",
                            "en": "lingbao"
                        },
                        {
                            "city_id": "CH181703",
                            "name": "渑池",
                            "en": "mianchi"
                        },
                        {
                            "city_id": "CH181704",
                            "name": "卢氏",
                            "en": "lushi"
                        },
                        {
                            "city_id": "CH181705",
                            "name": "义马",
                            "en": "yima"
                        },
                        {
                            "city_id": "CH181706",
                            "name": "陕县",
                            "en": "shanxian"
                        }
                    ]
                },
                {
                    "city_id": "CH1818",
                    "name": "济源",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH181801",
                            "name": "济源",
                            "en": "jiyuan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH19",
            "name": "江苏",
            "en": "",
            "list": [
                {
                    "city_id": "CH1901",
                    "name": "南京",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190101",
                            "name": "南京",
                            "en": "Nanjing"
                        },
                        {
                            "city_id": "CH190102",
                            "name": "溧水",
                            "en": "lishui"
                        },
                        {
                            "city_id": "CH190103",
                            "name": "高淳",
                            "en": "gaochun"
                        },
                        {
                            "city_id": "CH190104",
                            "name": "江宁",
                            "en": "jiangning"
                        },
                        {
                            "city_id": "CH190105",
                            "name": "六合",
                            "en": "luhe"
                        },
                        {
                            "city_id": "CH190106",
                            "name": "江浦",
                            "en": "jiangpu"
                        },
                        {
                            "city_id": "CH190107",
                            "name": "浦口",
                            "en": "Pukou"
                        },
                        {
                            "city_id": "CH190108",
                            "name": "玄武",
                            "en": "xuanwu"
                        }
                    ]
                },
                {
                    "city_id": "CH1902",
                    "name": "无锡",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190201",
                            "name": "无锡",
                            "en": "wuxi"
                        },
                        {
                            "city_id": "CH190202",
                            "name": "江阴",
                            "en": "jiangyin"
                        },
                        {
                            "city_id": "CH190203",
                            "name": "宜兴",
                            "en": "yixing"
                        },
                        {
                            "city_id": "CH190204",
                            "name": "锡山",
                            "en": "xishan"
                        }
                    ]
                },
                {
                    "city_id": "CH1903",
                    "name": "镇江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190301",
                            "name": "镇江",
                            "en": "Zhenjiang"
                        },
                        {
                            "city_id": "CH190302",
                            "name": "丹阳",
                            "en": "danyang"
                        },
                        {
                            "city_id": "CH190303",
                            "name": "扬中",
                            "en": "yangzhong"
                        },
                        {
                            "city_id": "CH190304",
                            "name": "句容",
                            "en": "jurong"
                        },
                        {
                            "city_id": "CH190305",
                            "name": "丹徒",
                            "en": "dantu"
                        }
                    ]
                },
                {
                    "city_id": "CH1904",
                    "name": "苏州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190401",
                            "name": "苏州",
                            "en": "Suzhou"
                        },
                        {
                            "city_id": "CH190402",
                            "name": "常熟",
                            "en": "Changshu"
                        },
                        {
                            "city_id": "CH190403",
                            "name": "张家港",
                            "en": "zhangjiagang"
                        },
                        {
                            "city_id": "CH190404",
                            "name": "昆山",
                            "en": "kunshan"
                        },
                        {
                            "city_id": "CH190405",
                            "name": "吴中",
                            "en": "wuzhong"
                        },
                        {
                            "city_id": "CH190407",
                            "name": "吴江",
                            "en": "wujiang"
                        },
                        {
                            "city_id": "CH190408",
                            "name": "太仓",
                            "en": "taicang"
                        }
                    ]
                },
                {
                    "city_id": "CH1905",
                    "name": "南通",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190501",
                            "name": "南通",
                            "en": "Nantong"
                        },
                        {
                            "city_id": "CH190502",
                            "name": "海安",
                            "en": "haian"
                        },
                        {
                            "city_id": "CH190503",
                            "name": "如皋",
                            "en": "rugao"
                        },
                        {
                            "city_id": "CH190504",
                            "name": "如东",
                            "en": "rudong"
                        },
                        {
                            "city_id": "CH190507",
                            "name": "启东",
                            "en": "qidong"
                        },
                        {
                            "city_id": "CH190508",
                            "name": "海门",
                            "en": "haimen"
                        },
                        {
                            "city_id": "CH190509",
                            "name": "通州",
                            "en": "tongzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH1906",
                    "name": "扬州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190601",
                            "name": "扬州",
                            "en": "yangzhou"
                        },
                        {
                            "city_id": "CH190602",
                            "name": "宝应",
                            "en": "Baoying"
                        },
                        {
                            "city_id": "CH190603",
                            "name": "仪征",
                            "en": "yizheng"
                        },
                        {
                            "city_id": "CH190604",
                            "name": "高邮",
                            "en": "gaoyou"
                        },
                        {
                            "city_id": "CH190605",
                            "name": "江都",
                            "en": "jiangdu"
                        },
                        {
                            "city_id": "CH190606",
                            "name": "邗江",
                            "en": "hanjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH1907",
                    "name": "盐城",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190701",
                            "name": "盐城",
                            "en": "yancheng"
                        },
                        {
                            "city_id": "CH190702",
                            "name": "响水",
                            "en": "xiangshui"
                        },
                        {
                            "city_id": "CH190703",
                            "name": "滨海",
                            "en": "binhai"
                        },
                        {
                            "city_id": "CH190704",
                            "name": "阜宁",
                            "en": "funing"
                        },
                        {
                            "city_id": "CH190705",
                            "name": "射阳",
                            "en": "sheyang"
                        },
                        {
                            "city_id": "CH190706",
                            "name": "建湖",
                            "en": "jianhu"
                        },
                        {
                            "city_id": "CH190707",
                            "name": "东台",
                            "en": "Dongtai"
                        },
                        {
                            "city_id": "CH190708",
                            "name": "大丰",
                            "en": "dafeng"
                        },
                        {
                            "city_id": "CH190709",
                            "name": "盐都",
                            "en": "yandu"
                        }
                    ]
                },
                {
                    "city_id": "CH1908",
                    "name": "徐州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190801",
                            "name": "徐州",
                            "en": "Xuzhou"
                        },
                        {
                            "city_id": "CH190802",
                            "name": "铜山",
                            "en": "tongshan"
                        },
                        {
                            "city_id": "CH190803",
                            "name": "丰县",
                            "en": "Fengxian"
                        },
                        {
                            "city_id": "CH190804",
                            "name": "沛县",
                            "en": "peixian"
                        },
                        {
                            "city_id": "CH190805",
                            "name": "邳州",
                            "en": "pizhou"
                        },
                        {
                            "city_id": "CH190806",
                            "name": "睢宁",
                            "en": "suining"
                        },
                        {
                            "city_id": "CH190807",
                            "name": "新沂",
                            "en": "xinyi"
                        }
                    ]
                },
                {
                    "city_id": "CH1909",
                    "name": "淮安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH190901",
                            "name": "淮安",
                            "en": "huaian"
                        },
                        {
                            "city_id": "CH190902",
                            "name": "金湖",
                            "en": "jinhu"
                        },
                        {
                            "city_id": "CH190903",
                            "name": "盱眙",
                            "en": "xuyi"
                        },
                        {
                            "city_id": "CH190904",
                            "name": "洪泽",
                            "en": "hongze"
                        },
                        {
                            "city_id": "CH190905",
                            "name": "涟水",
                            "en": "lianshui"
                        },
                        {
                            "city_id": "CH190906",
                            "name": "淮阴区",
                            "en": "huaiyinqu"
                        },
                        {
                            "city_id": "CH190908",
                            "name": "淮安区",
                            "en": "huaianqu"
                        }
                    ]
                },
                {
                    "city_id": "CH1910",
                    "name": "连云港",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH191001",
                            "name": "连云港",
                            "en": "lianyungang"
                        },
                        {
                            "city_id": "CH191002",
                            "name": "东海",
                            "en": "donghai"
                        },
                        {
                            "city_id": "CH191003",
                            "name": "赣榆",
                            "en": "ganyu"
                        },
                        {
                            "city_id": "CH191004",
                            "name": "灌云",
                            "en": "guanyun"
                        },
                        {
                            "city_id": "CH191005",
                            "name": "灌南",
                            "en": "guannan"
                        }
                    ]
                },
                {
                    "city_id": "CH1911",
                    "name": "常州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH191101",
                            "name": "常州",
                            "en": "Changzhou"
                        },
                        {
                            "city_id": "CH191102",
                            "name": "溧阳",
                            "en": "liyang"
                        },
                        {
                            "city_id": "CH191103",
                            "name": "金坛",
                            "en": "jintan"
                        },
                        {
                            "city_id": "CH191104",
                            "name": "武进",
                            "en": "wujin"
                        }
                    ]
                },
                {
                    "city_id": "CH1912",
                    "name": "泰州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH191201",
                            "name": "泰州",
                            "en": "taizhou"
                        },
                        {
                            "city_id": "CH191202",
                            "name": "兴化",
                            "en": "xinghua"
                        },
                        {
                            "city_id": "CH191203",
                            "name": "泰兴",
                            "en": "taixing"
                        },
                        {
                            "city_id": "CH191204",
                            "name": "姜堰",
                            "en": "jiangyan"
                        },
                        {
                            "city_id": "CH191205",
                            "name": "靖江",
                            "en": "jingjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH1913",
                    "name": "宿迁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH191301",
                            "name": "宿迁",
                            "en": "suqian"
                        },
                        {
                            "city_id": "CH191302",
                            "name": "沭阳",
                            "en": "shuyang"
                        },
                        {
                            "city_id": "CH191303",
                            "name": "泗阳",
                            "en": "siyang"
                        },
                        {
                            "city_id": "CH191304",
                            "name": "泗洪",
                            "en": "sihong"
                        },
                        {
                            "city_id": "CH191305",
                            "name": "宿豫",
                            "en": "suyu"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH20",
            "name": "湖北",
            "en": "",
            "list": [
                {
                    "city_id": "CH2001",
                    "name": "武汉",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200101",
                            "name": "武汉",
                            "en": "Wuhan"
                        },
                        {
                            "city_id": "CH200102",
                            "name": "蔡甸",
                            "en": "caidian"
                        },
                        {
                            "city_id": "CH200103",
                            "name": "黄陂",
                            "en": "Huangpi"
                        },
                        {
                            "city_id": "CH200104",
                            "name": "新洲",
                            "en": "xinzhou"
                        },
                        {
                            "city_id": "CH200105",
                            "name": "江夏",
                            "en": "jiangxia"
                        },
                        {
                            "city_id": "CH200106",
                            "name": "东西湖",
                            "en": "dongxihu"
                        }
                    ]
                },
                {
                    "city_id": "CH2002",
                    "name": "襄阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200201",
                            "name": "襄阳",
                            "en": "xiangyang"
                        },
                        {
                            "city_id": "CH200202",
                            "name": "襄州",
                            "en": "xiangzhou"
                        },
                        {
                            "city_id": "CH200203",
                            "name": "保康",
                            "en": "baokang"
                        },
                        {
                            "city_id": "CH200204",
                            "name": "南漳",
                            "en": "nanzhang"
                        },
                        {
                            "city_id": "CH200205",
                            "name": "宜城",
                            "en": "yicheng"
                        },
                        {
                            "city_id": "CH200206",
                            "name": "老河口",
                            "en": "laohekou"
                        },
                        {
                            "city_id": "CH200207",
                            "name": "谷城",
                            "en": "gucheng"
                        },
                        {
                            "city_id": "CH200208",
                            "name": "枣阳",
                            "en": "Zaoyang"
                        }
                    ]
                },
                {
                    "city_id": "CH2003",
                    "name": "鄂州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200301",
                            "name": "鄂州",
                            "en": "ezhou"
                        },
                        {
                            "city_id": "CH200302",
                            "name": "梁子湖",
                            "en": "liangzihu"
                        }
                    ]
                },
                {
                    "city_id": "CH2004",
                    "name": "孝感",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200401",
                            "name": "孝感",
                            "en": "Xiaogan"
                        },
                        {
                            "city_id": "CH200402",
                            "name": "安陆",
                            "en": "Anlu"
                        },
                        {
                            "city_id": "CH200403",
                            "name": "云梦",
                            "en": "yunmeng"
                        },
                        {
                            "city_id": "CH200404",
                            "name": "大悟",
                            "en": "dawu"
                        },
                        {
                            "city_id": "CH200405",
                            "name": "应城",
                            "en": "yingcheng"
                        },
                        {
                            "city_id": "CH200406",
                            "name": "汉川",
                            "en": "Hanchuan"
                        },
                        {
                            "city_id": "CH200407",
                            "name": "孝昌",
                            "en": "xiaochang"
                        }
                    ]
                },
                {
                    "city_id": "CH2005",
                    "name": "黄冈",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200501",
                            "name": "黄冈",
                            "en": "huanggang"
                        },
                        {
                            "city_id": "CH200502",
                            "name": "红安",
                            "en": "hongan"
                        },
                        {
                            "city_id": "CH200503",
                            "name": "麻城",
                            "en": "Macheng"
                        },
                        {
                            "city_id": "CH200504",
                            "name": "罗田",
                            "en": "luotian"
                        },
                        {
                            "city_id": "CH200505",
                            "name": "英山",
                            "en": "yingshan"
                        },
                        {
                            "city_id": "CH200506",
                            "name": "浠水",
                            "en": "xishui"
                        },
                        {
                            "city_id": "CH200507",
                            "name": "蕲春",
                            "en": "qichun"
                        },
                        {
                            "city_id": "CH200508",
                            "name": "黄梅",
                            "en": "huangmei"
                        },
                        {
                            "city_id": "CH200509",
                            "name": "武穴",
                            "en": "wuxue"
                        },
                        {
                            "city_id": "CH200510",
                            "name": "团风",
                            "en": "tuanfeng"
                        }
                    ]
                },
                {
                    "city_id": "CH2006",
                    "name": "黄石",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200601",
                            "name": "黄石",
                            "en": "Huangshi"
                        },
                        {
                            "city_id": "CH200602",
                            "name": "大冶",
                            "en": "daye"
                        },
                        {
                            "city_id": "CH200603",
                            "name": "阳新",
                            "en": "yangxin"
                        },
                        {
                            "city_id": "CH200604",
                            "name": "铁山",
                            "en": "tieshan"
                        },
                        {
                            "city_id": "CH200605",
                            "name": "下陆",
                            "en": "xialu"
                        },
                        {
                            "city_id": "CH200606",
                            "name": "西塞山",
                            "en": "xisaishan"
                        }
                    ]
                },
                {
                    "city_id": "CH2007",
                    "name": "咸宁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200701",
                            "name": "咸宁",
                            "en": "xianning"
                        },
                        {
                            "city_id": "CH200702",
                            "name": "赤壁",
                            "en": "chibi"
                        },
                        {
                            "city_id": "CH200703",
                            "name": "嘉鱼",
                            "en": "jiayu"
                        },
                        {
                            "city_id": "CH200704",
                            "name": "崇阳",
                            "en": "chongyang"
                        },
                        {
                            "city_id": "CH200705",
                            "name": "通城",
                            "en": "tongcheng"
                        },
                        {
                            "city_id": "CH200706",
                            "name": "通山",
                            "en": "tongshan"
                        }
                    ]
                },
                {
                    "city_id": "CH2008",
                    "name": "荆州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200801",
                            "name": "荆州",
                            "en": "jingzhou"
                        },
                        {
                            "city_id": "CH200802",
                            "name": "江陵",
                            "en": "jiangling"
                        },
                        {
                            "city_id": "CH200803",
                            "name": "公安",
                            "en": "gongan"
                        },
                        {
                            "city_id": "CH200804",
                            "name": "石首",
                            "en": "shishou"
                        },
                        {
                            "city_id": "CH200805",
                            "name": "监利",
                            "en": "jianli"
                        },
                        {
                            "city_id": "CH200806",
                            "name": "洪湖",
                            "en": "honghu"
                        },
                        {
                            "city_id": "CH200807",
                            "name": "松滋",
                            "en": "songzi"
                        }
                    ]
                },
                {
                    "city_id": "CH2009",
                    "name": "宜昌",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH200901",
                            "name": "宜昌",
                            "en": "Yichang"
                        },
                        {
                            "city_id": "CH200902",
                            "name": "远安",
                            "en": "yuanan"
                        },
                        {
                            "city_id": "CH200903",
                            "name": "秭归",
                            "en": "zigui"
                        },
                        {
                            "city_id": "CH200904",
                            "name": "兴山",
                            "en": "xingshan"
                        },
                        {
                            "city_id": "CH200906",
                            "name": "五峰",
                            "en": "wufeng"
                        },
                        {
                            "city_id": "CH200907",
                            "name": "当阳",
                            "en": "dangyang"
                        },
                        {
                            "city_id": "CH200908",
                            "name": "长阳",
                            "en": "changyang"
                        },
                        {
                            "city_id": "CH200909",
                            "name": "宜都",
                            "en": "yidu"
                        },
                        {
                            "city_id": "CH200910",
                            "name": "枝江",
                            "en": "zhijiang"
                        },
                        {
                            "city_id": "CH200911",
                            "name": "三峡",
                            "en": "sanxia"
                        },
                        {
                            "city_id": "CH200912",
                            "name": "夷陵",
                            "en": "yiling"
                        }
                    ]
                },
                {
                    "city_id": "CH2010",
                    "name": "恩施",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201001",
                            "name": "恩施",
                            "en": "Enshi"
                        },
                        {
                            "city_id": "CH201002",
                            "name": "利川",
                            "en": "lichuan"
                        },
                        {
                            "city_id": "CH201003",
                            "name": "建始",
                            "en": "jianshi"
                        },
                        {
                            "city_id": "CH201004",
                            "name": "咸丰",
                            "en": "xianfeng"
                        },
                        {
                            "city_id": "CH201005",
                            "name": "宣恩",
                            "en": "xuanen"
                        },
                        {
                            "city_id": "CH201006",
                            "name": "鹤峰",
                            "en": "hefeng"
                        },
                        {
                            "city_id": "CH201007",
                            "name": "来凤",
                            "en": "laifeng"
                        },
                        {
                            "city_id": "CH201008",
                            "name": "巴东",
                            "en": "badong"
                        }
                    ]
                },
                {
                    "city_id": "CH2011",
                    "name": "十堰",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201101",
                            "name": "十堰",
                            "en": "shiyan"
                        },
                        {
                            "city_id": "CH201102",
                            "name": "竹溪",
                            "en": "zhuxi"
                        },
                        {
                            "city_id": "CH201103",
                            "name": "郧西",
                            "en": "yunxi"
                        },
                        {
                            "city_id": "CH201104",
                            "name": "郧县",
                            "en": "yunxian"
                        },
                        {
                            "city_id": "CH201105",
                            "name": "竹山",
                            "en": "zhushan"
                        },
                        {
                            "city_id": "CH201106",
                            "name": "房县",
                            "en": "fangxian"
                        },
                        {
                            "city_id": "CH201107",
                            "name": "丹江口",
                            "en": "danjiangkou"
                        },
                        {
                            "city_id": "CH201108",
                            "name": "茅箭",
                            "en": "maojian"
                        },
                        {
                            "city_id": "CH201109",
                            "name": "张湾",
                            "en": "zhangwan"
                        }
                    ]
                },
                {
                    "city_id": "CH2012",
                    "name": "神农架",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201201",
                            "name": "神农架",
                            "en": "shennongjia"
                        }
                    ]
                },
                {
                    "city_id": "CH2013",
                    "name": "随州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201301",
                            "name": "随州",
                            "en": "Suizhou"
                        },
                        {
                            "city_id": "CH201302",
                            "name": "广水",
                            "en": "guangshui"
                        }
                    ]
                },
                {
                    "city_id": "CH2014",
                    "name": "荆门",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201401",
                            "name": "荆门",
                            "en": "Jingmen"
                        },
                        {
                            "city_id": "CH201402",
                            "name": "钟祥",
                            "en": "Zhongxiang"
                        },
                        {
                            "city_id": "CH201403",
                            "name": "京山",
                            "en": "jingshan"
                        },
                        {
                            "city_id": "CH201404",
                            "name": "掇刀",
                            "en": "duodao"
                        },
                        {
                            "city_id": "CH201405",
                            "name": "沙洋",
                            "en": "shayang"
                        },
                        {
                            "city_id": "CH201406",
                            "name": "沙市",
                            "en": "Shashi"
                        }
                    ]
                },
                {
                    "city_id": "CH2015",
                    "name": "天门",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201501",
                            "name": "天门",
                            "en": "tianmen"
                        }
                    ]
                },
                {
                    "city_id": "CH2016",
                    "name": "仙桃",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201601",
                            "name": "仙桃",
                            "en": "Xiantao"
                        }
                    ]
                },
                {
                    "city_id": "CH2017",
                    "name": "潜江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH201701",
                            "name": "潜江",
                            "en": "qianjiang"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH21",
            "name": "浙江",
            "en": "",
            "list": [
                {
                    "city_id": "CH2101",
                    "name": "杭州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210101",
                            "name": "杭州",
                            "en": "Hangzhou"
                        },
                        {
                            "city_id": "CH210102",
                            "name": "萧山",
                            "en": "xiaoshan"
                        },
                        {
                            "city_id": "CH210103",
                            "name": "桐庐",
                            "en": "tonglu"
                        },
                        {
                            "city_id": "CH210104",
                            "name": "淳安",
                            "en": "chunan"
                        },
                        {
                            "city_id": "CH210105",
                            "name": "建德",
                            "en": "jiande"
                        },
                        {
                            "city_id": "CH210106",
                            "name": "余杭",
                            "en": "yuhang"
                        },
                        {
                            "city_id": "CH210107",
                            "name": "临安",
                            "en": "linan"
                        },
                        {
                            "city_id": "CH210108",
                            "name": "富阳",
                            "en": "fuyang"
                        }
                    ]
                },
                {
                    "city_id": "CH2102",
                    "name": "湖州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210201",
                            "name": "湖州",
                            "en": "Huzhou"
                        },
                        {
                            "city_id": "CH210202",
                            "name": "长兴",
                            "en": "changxing"
                        },
                        {
                            "city_id": "CH210203",
                            "name": "安吉",
                            "en": "anji"
                        },
                        {
                            "city_id": "CH210204",
                            "name": "德清",
                            "en": "deqing"
                        }
                    ]
                },
                {
                    "city_id": "CH2103",
                    "name": "嘉兴",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210301",
                            "name": "嘉兴",
                            "en": "Jiaxing"
                        },
                        {
                            "city_id": "CH210302",
                            "name": "嘉善",
                            "en": "jiashan"
                        },
                        {
                            "city_id": "CH210303",
                            "name": "海宁",
                            "en": "Haining"
                        },
                        {
                            "city_id": "CH210304",
                            "name": "桐乡",
                            "en": "tongxiang"
                        },
                        {
                            "city_id": "CH210305",
                            "name": "平湖",
                            "en": "pinghu"
                        },
                        {
                            "city_id": "CH210306",
                            "name": "海盐",
                            "en": "haiyan"
                        }
                    ]
                },
                {
                    "city_id": "CH2104",
                    "name": "宁波",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210401",
                            "name": "宁波",
                            "en": "Ningbo"
                        },
                        {
                            "city_id": "CH210403",
                            "name": "慈溪",
                            "en": "cixi"
                        },
                        {
                            "city_id": "CH210404",
                            "name": "余姚",
                            "en": "Yuyao"
                        },
                        {
                            "city_id": "CH210405",
                            "name": "奉化",
                            "en": "fenghua"
                        },
                        {
                            "city_id": "CH210406",
                            "name": "象山",
                            "en": "xiangshan"
                        },
                        {
                            "city_id": "CH210408",
                            "name": "宁海",
                            "en": "Ninghai"
                        },
                        {
                            "city_id": "CH210410",
                            "name": "北仑",
                            "en": "beilun"
                        },
                        {
                            "city_id": "CH210411",
                            "name": "鄞州",
                            "en": "yinzhou"
                        },
                        {
                            "city_id": "CH210412",
                            "name": "镇海",
                            "en": "zhenhai"
                        }
                    ]
                },
                {
                    "city_id": "CH2105",
                    "name": "绍兴",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210501",
                            "name": "绍兴",
                            "en": "Shaoxing"
                        },
                        {
                            "city_id": "CH210502",
                            "name": "诸暨",
                            "en": "Zhuji"
                        },
                        {
                            "city_id": "CH210503",
                            "name": "上虞",
                            "en": "shangyu"
                        },
                        {
                            "city_id": "CH210504",
                            "name": "新昌",
                            "en": "xinchang"
                        },
                        {
                            "city_id": "CH210505",
                            "name": "嵊州",
                            "en": "shengzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH2106",
                    "name": "台州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210601",
                            "name": "台州",
                            "en": "taizhou"
                        },
                        {
                            "city_id": "CH210603",
                            "name": "玉环",
                            "en": "yuhuan"
                        },
                        {
                            "city_id": "CH210604",
                            "name": "三门",
                            "en": "sanmen"
                        },
                        {
                            "city_id": "CH210605",
                            "name": "天台",
                            "en": "tiantai"
                        },
                        {
                            "city_id": "CH210606",
                            "name": "仙居",
                            "en": "Xianju"
                        },
                        {
                            "city_id": "CH210607",
                            "name": "温岭",
                            "en": "Wenling"
                        },
                        {
                            "city_id": "CH210609",
                            "name": "洪家",
                            "en": "hongjia"
                        },
                        {
                            "city_id": "CH210610",
                            "name": "临海",
                            "en": "linhai"
                        },
                        {
                            "city_id": "CH210611",
                            "name": "椒江",
                            "en": "jiaojiang"
                        },
                        {
                            "city_id": "CH210612",
                            "name": "黄岩",
                            "en": "huangyan"
                        },
                        {
                            "city_id": "CH210613",
                            "name": "路桥",
                            "en": "luqiao"
                        }
                    ]
                },
                {
                    "city_id": "CH2107",
                    "name": "温州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210701",
                            "name": "温州",
                            "en": "Wenzhou"
                        },
                        {
                            "city_id": "CH210702",
                            "name": "泰顺",
                            "en": "taishun"
                        },
                        {
                            "city_id": "CH210703",
                            "name": "文成",
                            "en": "wencheng"
                        },
                        {
                            "city_id": "CH210704",
                            "name": "平阳",
                            "en": "pingyang"
                        },
                        {
                            "city_id": "CH210705",
                            "name": "瑞安",
                            "en": "ruian"
                        },
                        {
                            "city_id": "CH210706",
                            "name": "洞头",
                            "en": "dongtou"
                        },
                        {
                            "city_id": "CH210707",
                            "name": "乐清",
                            "en": "yueqing"
                        },
                        {
                            "city_id": "CH210708",
                            "name": "永嘉",
                            "en": "yongjia"
                        },
                        {
                            "city_id": "CH210709",
                            "name": "苍南",
                            "en": "cangnan"
                        }
                    ]
                },
                {
                    "city_id": "CH2108",
                    "name": "丽水",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210801",
                            "name": "丽水",
                            "en": "Lishui"
                        },
                        {
                            "city_id": "CH210802",
                            "name": "遂昌",
                            "en": "suichang"
                        },
                        {
                            "city_id": "CH210803",
                            "name": "龙泉",
                            "en": "longquan"
                        },
                        {
                            "city_id": "CH210804",
                            "name": "缙云",
                            "en": "jinyun"
                        },
                        {
                            "city_id": "CH210805",
                            "name": "青田",
                            "en": "qingtian"
                        },
                        {
                            "city_id": "CH210806",
                            "name": "云和",
                            "en": "yunhe"
                        },
                        {
                            "city_id": "CH210807",
                            "name": "庆元",
                            "en": "qingyuan"
                        },
                        {
                            "city_id": "CH210808",
                            "name": "松阳",
                            "en": "songyang"
                        },
                        {
                            "city_id": "CH210809",
                            "name": "景宁",
                            "en": "jingning"
                        }
                    ]
                },
                {
                    "city_id": "CH2109",
                    "name": "金华",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH210901",
                            "name": "金华",
                            "en": "jinhua"
                        },
                        {
                            "city_id": "CH210902",
                            "name": "浦江",
                            "en": "pujiang"
                        },
                        {
                            "city_id": "CH210903",
                            "name": "兰溪",
                            "en": "Lanxi"
                        },
                        {
                            "city_id": "CH210904",
                            "name": "义乌",
                            "en": "yiwu"
                        },
                        {
                            "city_id": "CH210905",
                            "name": "东阳",
                            "en": "dongyang"
                        },
                        {
                            "city_id": "CH210906",
                            "name": "武义",
                            "en": "wuyi"
                        },
                        {
                            "city_id": "CH210907",
                            "name": "永康",
                            "en": "yongkang"
                        },
                        {
                            "city_id": "CH210908",
                            "name": "磐安",
                            "en": "panan"
                        }
                    ]
                },
                {
                    "city_id": "CH2110",
                    "name": "衢州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH211001",
                            "name": "衢州",
                            "en": "Quzhou"
                        },
                        {
                            "city_id": "CH211002",
                            "name": "常山",
                            "en": "changshan"
                        },
                        {
                            "city_id": "CH211003",
                            "name": "开化",
                            "en": "kaihua"
                        },
                        {
                            "city_id": "CH211004",
                            "name": "龙游",
                            "en": "longyou"
                        },
                        {
                            "city_id": "CH211005",
                            "name": "江山",
                            "en": "jiangshan"
                        },
                        {
                            "city_id": "CH211006",
                            "name": "衢江",
                            "en": "qujiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2111",
                    "name": "舟山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH211101",
                            "name": "舟山",
                            "en": "zhoushan"
                        },
                        {
                            "city_id": "CH211102",
                            "name": "嵊泗",
                            "en": "shengsi"
                        },
                        {
                            "city_id": "CH211104",
                            "name": "岱山",
                            "en": "daishan"
                        },
                        {
                            "city_id": "CH211105",
                            "name": "普陀",
                            "en": "putuo"
                        },
                        {
                            "city_id": "CH211106",
                            "name": "定海",
                            "en": "dinghai"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH22",
            "name": "安徽",
            "en": "",
            "list": [
                {
                    "city_id": "CH2201",
                    "name": "合肥",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220101",
                            "name": "合肥",
                            "en": "Hefei"
                        },
                        {
                            "city_id": "CH220102",
                            "name": "长丰",
                            "en": "changfeng"
                        },
                        {
                            "city_id": "CH220103",
                            "name": "肥东",
                            "en": "feidong"
                        },
                        {
                            "city_id": "CH220104",
                            "name": "肥西",
                            "en": "feixi"
                        },
                        {
                            "city_id": "CH220105",
                            "name": "巢湖",
                            "en": "chaohu"
                        },
                        {
                            "city_id": "CH220106",
                            "name": "庐江",
                            "en": "lujiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2202",
                    "name": "蚌埠",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220201",
                            "name": "蚌埠",
                            "en": "Bengbu"
                        },
                        {
                            "city_id": "CH220202",
                            "name": "怀远",
                            "en": "huaiyuan"
                        },
                        {
                            "city_id": "CH220203",
                            "name": "固镇",
                            "en": "guzhen"
                        },
                        {
                            "city_id": "CH220204",
                            "name": "五河",
                            "en": "wuhe"
                        }
                    ]
                },
                {
                    "city_id": "CH2203",
                    "name": "芜湖",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220301",
                            "name": "芜湖",
                            "en": "Wuhu"
                        },
                        {
                            "city_id": "CH220302",
                            "name": "繁昌",
                            "en": "fanchang"
                        },
                        {
                            "city_id": "CH220303",
                            "name": "芜湖县",
                            "en": "wuhuxian"
                        },
                        {
                            "city_id": "CH220304",
                            "name": "南陵",
                            "en": "nanling"
                        },
                        {
                            "city_id": "CH220305",
                            "name": "无为",
                            "en": "wuwei"
                        }
                    ]
                },
                {
                    "city_id": "CH2204",
                    "name": "淮南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220401",
                            "name": "淮南",
                            "en": "huainan"
                        },
                        {
                            "city_id": "CH220402",
                            "name": "凤台",
                            "en": "fengtai"
                        },
                        {
                            "city_id": "CH220403",
                            "name": "潘集",
                            "en": "panji"
                        }
                    ]
                },
                {
                    "city_id": "CH2205",
                    "name": "马鞍山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220501",
                            "name": "马鞍山",
                            "en": "maanshan"
                        },
                        {
                            "city_id": "CH220502",
                            "name": "当涂",
                            "en": "dangtu"
                        },
                        {
                            "city_id": "CH220503",
                            "name": "含山",
                            "en": "hanshan"
                        },
                        {
                            "city_id": "CH220504",
                            "name": "和县",
                            "en": "hexian"
                        }
                    ]
                },
                {
                    "city_id": "CH2206",
                    "name": "安庆",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220601",
                            "name": "安庆",
                            "en": "Anqing"
                        },
                        {
                            "city_id": "CH220602",
                            "name": "枞阳",
                            "en": "zongyang"
                        },
                        {
                            "city_id": "CH220603",
                            "name": "太湖",
                            "en": "taihu"
                        },
                        {
                            "city_id": "CH220604",
                            "name": "潜山",
                            "en": "qianshan"
                        },
                        {
                            "city_id": "CH220605",
                            "name": "怀宁",
                            "en": "huaining"
                        },
                        {
                            "city_id": "CH220606",
                            "name": "宿松",
                            "en": "susong"
                        },
                        {
                            "city_id": "CH220607",
                            "name": "望江",
                            "en": "wangjiang"
                        },
                        {
                            "city_id": "CH220608",
                            "name": "岳西",
                            "en": "yuexi"
                        },
                        {
                            "city_id": "CH220609",
                            "name": "桐城",
                            "en": "tongcheng"
                        }
                    ]
                },
                {
                    "city_id": "CH2207",
                    "name": "宿州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220701",
                            "name": "宿州",
                            "en": "suzhou"
                        },
                        {
                            "city_id": "CH220702",
                            "name": "砀山",
                            "en": "dangshan"
                        },
                        {
                            "city_id": "CH220703",
                            "name": "灵璧",
                            "en": "lingbi"
                        },
                        {
                            "city_id": "CH220704",
                            "name": "泗县",
                            "en": "sixian"
                        },
                        {
                            "city_id": "CH220705",
                            "name": "萧县",
                            "en": "xiaoxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2208",
                    "name": "阜阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220801",
                            "name": "阜阳",
                            "en": "Fuyang"
                        },
                        {
                            "city_id": "CH220802",
                            "name": "阜南",
                            "en": "funan"
                        },
                        {
                            "city_id": "CH220803",
                            "name": "颍上",
                            "en": "yingshang"
                        },
                        {
                            "city_id": "CH220804",
                            "name": "临泉",
                            "en": "linquan"
                        },
                        {
                            "city_id": "CH220805",
                            "name": "界首",
                            "en": "jieshou"
                        },
                        {
                            "city_id": "CH220806",
                            "name": "太和",
                            "en": "taihe"
                        }
                    ]
                },
                {
                    "city_id": "CH2209",
                    "name": "亳州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH220901",
                            "name": "亳州",
                            "en": "bozhou"
                        },
                        {
                            "city_id": "CH220902",
                            "name": "涡阳",
                            "en": "guoyang"
                        },
                        {
                            "city_id": "CH220903",
                            "name": "利辛",
                            "en": "lixin"
                        },
                        {
                            "city_id": "CH220904",
                            "name": "蒙城",
                            "en": "mengcheng"
                        }
                    ]
                },
                {
                    "city_id": "CH2210",
                    "name": "黄山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH221001",
                            "name": "黄山",
                            "en": "huangshan"
                        },
                        {
                            "city_id": "CH221002",
                            "name": "黄山区",
                            "en": "huangshanqu"
                        },
                        {
                            "city_id": "CH221003",
                            "name": "屯溪",
                            "en": "tunxi"
                        },
                        {
                            "city_id": "CH221004",
                            "name": "祁门",
                            "en": "qimen"
                        },
                        {
                            "city_id": "CH221005",
                            "name": "黟县",
                            "en": "yixian"
                        },
                        {
                            "city_id": "CH221006",
                            "name": "歙县",
                            "en": "shexian"
                        },
                        {
                            "city_id": "CH221007",
                            "name": "休宁",
                            "en": "xiuning"
                        },
                        {
                            "city_id": "CH221008",
                            "name": "黄山风景区",
                            "en": "huangshanfengji"
                        }
                    ]
                },
                {
                    "city_id": "CH2211",
                    "name": "滁州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH221101",
                            "name": "滁州",
                            "en": "Chuzhou"
                        },
                        {
                            "city_id": "CH221102",
                            "name": "凤阳",
                            "en": "fengyang"
                        },
                        {
                            "city_id": "CH221103",
                            "name": "明光",
                            "en": "mingguang"
                        },
                        {
                            "city_id": "CH221104",
                            "name": "定远",
                            "en": "dingyuan"
                        },
                        {
                            "city_id": "CH221105",
                            "name": "全椒",
                            "en": "quanjiao"
                        },
                        {
                            "city_id": "CH221106",
                            "name": "来安",
                            "en": "laian"
                        },
                        {
                            "city_id": "CH221107",
                            "name": "天长",
                            "en": "tianchang"
                        }
                    ]
                },
                {
                    "city_id": "CH2212",
                    "name": "淮北",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH221201",
                            "name": "淮北",
                            "en": "huaibei"
                        },
                        {
                            "city_id": "CH221202",
                            "name": "濉溪",
                            "en": "suixi"
                        }
                    ]
                },
                {
                    "city_id": "CH2213",
                    "name": "铜陵",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH221301",
                            "name": "铜陵",
                            "en": "tongling"
                        }
                    ]
                },
                {
                    "city_id": "CH2214",
                    "name": "宣城",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH221401",
                            "name": "宣城",
                            "en": "xuancheng"
                        },
                        {
                            "city_id": "CH221402",
                            "name": "泾县",
                            "en": "jingxian"
                        },
                        {
                            "city_id": "CH221403",
                            "name": "旌德",
                            "en": "jingde"
                        },
                        {
                            "city_id": "CH221404",
                            "name": "宁国",
                            "en": "ningguo"
                        },
                        {
                            "city_id": "CH221405",
                            "name": "绩溪",
                            "en": "jixi"
                        },
                        {
                            "city_id": "CH221406",
                            "name": "广德",
                            "en": "guangde"
                        },
                        {
                            "city_id": "CH221407",
                            "name": "郎溪",
                            "en": "langxi"
                        }
                    ]
                },
                {
                    "city_id": "CH2215",
                    "name": "六安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH221501",
                            "name": "六安",
                            "en": "luan"
                        },
                        {
                            "city_id": "CH221502",
                            "name": "霍邱",
                            "en": "huoqiu"
                        },
                        {
                            "city_id": "CH221503",
                            "name": "寿县",
                            "en": "shouxian"
                        },
                        {
                            "city_id": "CH221505",
                            "name": "金寨",
                            "en": "jinzhai"
                        },
                        {
                            "city_id": "CH221506",
                            "name": "霍山",
                            "en": "huoshan"
                        },
                        {
                            "city_id": "CH221507",
                            "name": "舒城",
                            "en": "shucheng"
                        }
                    ]
                },
                {
                    "city_id": "CH2217",
                    "name": "池州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH221701",
                            "name": "池州",
                            "en": "chizhou"
                        },
                        {
                            "city_id": "CH221702",
                            "name": "东至",
                            "en": "dongzhi"
                        },
                        {
                            "city_id": "CH221703",
                            "name": "青阳",
                            "en": "qingyang"
                        },
                        {
                            "city_id": "CH221704",
                            "name": "九华山",
                            "en": "jiuhuashan"
                        },
                        {
                            "city_id": "CH221705",
                            "name": "石台",
                            "en": "shitai"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH23",
            "name": "福建",
            "en": "",
            "list": [
                {
                    "city_id": "CH2301",
                    "name": "福州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230101",
                            "name": "福州",
                            "en": "Fuzhou"
                        },
                        {
                            "city_id": "CH230102",
                            "name": "闽清",
                            "en": "minqing"
                        },
                        {
                            "city_id": "CH230103",
                            "name": "闽侯",
                            "en": "minhou"
                        },
                        {
                            "city_id": "CH230104",
                            "name": "罗源",
                            "en": "luoyuan"
                        },
                        {
                            "city_id": "CH230105",
                            "name": "连江",
                            "en": "lianjiang"
                        },
                        {
                            "city_id": "CH230107",
                            "name": "永泰",
                            "en": "yongtai"
                        },
                        {
                            "city_id": "CH230108",
                            "name": "平潭",
                            "en": "pingtan"
                        },
                        {
                            "city_id": "CH230110",
                            "name": "长乐",
                            "en": "changle"
                        },
                        {
                            "city_id": "CH230111",
                            "name": "福清",
                            "en": "fuqing"
                        }
                    ]
                },
                {
                    "city_id": "CH2302",
                    "name": "厦门",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230201",
                            "name": "厦门",
                            "en": "Xiamen"
                        },
                        {
                            "city_id": "CH230202",
                            "name": "同安",
                            "en": "tongan"
                        }
                    ]
                },
                {
                    "city_id": "CH2303",
                    "name": "宁德",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230301",
                            "name": "宁德",
                            "en": "ningde"
                        },
                        {
                            "city_id": "CH230302",
                            "name": "古田",
                            "en": "gutian"
                        },
                        {
                            "city_id": "CH230303",
                            "name": "霞浦",
                            "en": "xiapu"
                        },
                        {
                            "city_id": "CH230304",
                            "name": "寿宁",
                            "en": "shouning"
                        },
                        {
                            "city_id": "CH230305",
                            "name": "周宁",
                            "en": "zhouning"
                        },
                        {
                            "city_id": "CH230306",
                            "name": "福安",
                            "en": "fuan"
                        },
                        {
                            "city_id": "CH230307",
                            "name": "柘荣",
                            "en": "zherong"
                        },
                        {
                            "city_id": "CH230308",
                            "name": "福鼎",
                            "en": "fuding"
                        },
                        {
                            "city_id": "CH230309",
                            "name": "屏南",
                            "en": "pingnan"
                        }
                    ]
                },
                {
                    "city_id": "CH2304",
                    "name": "莆田",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230401",
                            "name": "莆田",
                            "en": "Putian"
                        },
                        {
                            "city_id": "CH230402",
                            "name": "仙游",
                            "en": "xianyou"
                        },
                        {
                            "city_id": "CH230403",
                            "name": "秀屿港",
                            "en": "xiuyugang"
                        },
                        {
                            "city_id": "CH230404",
                            "name": "涵江",
                            "en": "hanjiang"
                        },
                        {
                            "city_id": "CH230405",
                            "name": "秀屿",
                            "en": "xiuyu"
                        },
                        {
                            "city_id": "CH230406",
                            "name": "荔城",
                            "en": "licheng"
                        },
                        {
                            "city_id": "CH230407",
                            "name": "城厢",
                            "en": "chengxiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2305",
                    "name": "泉州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230501",
                            "name": "泉州",
                            "en": "Quanzhou"
                        },
                        {
                            "city_id": "CH230502",
                            "name": "安溪",
                            "en": "anxi"
                        },
                        {
                            "city_id": "CH230504",
                            "name": "永春",
                            "en": "yongchun"
                        },
                        {
                            "city_id": "CH230505",
                            "name": "德化",
                            "en": "dehua"
                        },
                        {
                            "city_id": "CH230506",
                            "name": "南安",
                            "en": "nanan"
                        },
                        {
                            "city_id": "CH230507",
                            "name": "崇武",
                            "en": "chongwu"
                        },
                        {
                            "city_id": "CH230508",
                            "name": "惠安",
                            "en": "huian"
                        },
                        {
                            "city_id": "CH230509",
                            "name": "晋江",
                            "en": "jinjiang"
                        },
                        {
                            "city_id": "CH230510",
                            "name": "石狮",
                            "en": "shishi"
                        }
                    ]
                },
                {
                    "city_id": "CH2306",
                    "name": "漳州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230601",
                            "name": "漳州",
                            "en": "zhangzhou"
                        },
                        {
                            "city_id": "CH230602",
                            "name": "长泰",
                            "en": "changtai"
                        },
                        {
                            "city_id": "CH230603",
                            "name": "南靖",
                            "en": "nanjing"
                        },
                        {
                            "city_id": "CH230604",
                            "name": "平和",
                            "en": "pinghe"
                        },
                        {
                            "city_id": "CH230605",
                            "name": "龙海",
                            "en": "longhai"
                        },
                        {
                            "city_id": "CH230606",
                            "name": "漳浦",
                            "en": "zhangpu"
                        },
                        {
                            "city_id": "CH230607",
                            "name": "诏安",
                            "en": "zhaoan"
                        },
                        {
                            "city_id": "CH230608",
                            "name": "东山",
                            "en": "dongshan"
                        },
                        {
                            "city_id": "CH230609",
                            "name": "云霄",
                            "en": "yunxiao"
                        },
                        {
                            "city_id": "CH230610",
                            "name": "华安",
                            "en": "huaan"
                        }
                    ]
                },
                {
                    "city_id": "CH2307",
                    "name": "龙岩",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230701",
                            "name": "龙岩",
                            "en": "longyan"
                        },
                        {
                            "city_id": "CH230702",
                            "name": "长汀",
                            "en": "Changting"
                        },
                        {
                            "city_id": "CH230703",
                            "name": "连城",
                            "en": "liancheng"
                        },
                        {
                            "city_id": "CH230704",
                            "name": "武平",
                            "en": "wuping"
                        },
                        {
                            "city_id": "CH230705",
                            "name": "上杭",
                            "en": "shanghang"
                        },
                        {
                            "city_id": "CH230706",
                            "name": "永定",
                            "en": "yongding"
                        },
                        {
                            "city_id": "CH230707",
                            "name": "漳平",
                            "en": "zhangping"
                        }
                    ]
                },
                {
                    "city_id": "CH2308",
                    "name": "三明",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230801",
                            "name": "三明",
                            "en": "Sanming"
                        },
                        {
                            "city_id": "CH230802",
                            "name": "宁化",
                            "en": "ninghua"
                        },
                        {
                            "city_id": "CH230803",
                            "name": "清流",
                            "en": "qingliu"
                        },
                        {
                            "city_id": "CH230804",
                            "name": "泰宁",
                            "en": "taining"
                        },
                        {
                            "city_id": "CH230805",
                            "name": "将乐",
                            "en": "jiangle"
                        },
                        {
                            "city_id": "CH230806",
                            "name": "建宁",
                            "en": "jianning"
                        },
                        {
                            "city_id": "CH230807",
                            "name": "明溪",
                            "en": "mingxi"
                        },
                        {
                            "city_id": "CH230808",
                            "name": "沙县",
                            "en": "shaxian"
                        },
                        {
                            "city_id": "CH230809",
                            "name": "尤溪",
                            "en": "youxi"
                        },
                        {
                            "city_id": "CH230810",
                            "name": "永安",
                            "en": "yongan"
                        },
                        {
                            "city_id": "CH230811",
                            "name": "大田",
                            "en": "datian"
                        }
                    ]
                },
                {
                    "city_id": "CH2309",
                    "name": "南平",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH230901",
                            "name": "南平",
                            "en": "nanping"
                        },
                        {
                            "city_id": "CH230902",
                            "name": "顺昌",
                            "en": "shunchang"
                        },
                        {
                            "city_id": "CH230903",
                            "name": "光泽",
                            "en": "guangze"
                        },
                        {
                            "city_id": "CH230904",
                            "name": "邵武",
                            "en": "Shaowu"
                        },
                        {
                            "city_id": "CH230905",
                            "name": "武夷山",
                            "en": "wuyishan"
                        },
                        {
                            "city_id": "CH230906",
                            "name": "浦城",
                            "en": "Pucheng"
                        },
                        {
                            "city_id": "CH230907",
                            "name": "建阳",
                            "en": "jianyang"
                        },
                        {
                            "city_id": "CH230908",
                            "name": "松溪",
                            "en": "songxi"
                        },
                        {
                            "city_id": "CH230909",
                            "name": "政和",
                            "en": "zhenghe"
                        },
                        {
                            "city_id": "CH230910",
                            "name": "建瓯",
                            "en": "jianou"
                        }
                    ]
                },
                {
                    "city_id": "CH2310",
                    "name": "钓鱼岛",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH231001",
                            "name": "钓鱼岛",
                            "en": "diaoyudao"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH24",
            "name": "江西",
            "en": "",
            "list": [
                {
                    "city_id": "CH2401",
                    "name": "南昌",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240101",
                            "name": "南昌",
                            "en": "Nanchang"
                        },
                        {
                            "city_id": "CH240102",
                            "name": "新建",
                            "en": "xinjian"
                        },
                        {
                            "city_id": "CH240103",
                            "name": "南昌县",
                            "en": "nanchangxian"
                        },
                        {
                            "city_id": "CH240104",
                            "name": "安义",
                            "en": "anyi"
                        },
                        {
                            "city_id": "CH240105",
                            "name": "进贤",
                            "en": "jinxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2402",
                    "name": "九江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240201",
                            "name": "九江",
                            "en": "Jiujiang"
                        },
                        {
                            "city_id": "CH240202",
                            "name": "瑞昌",
                            "en": "ruichang"
                        },
                        {
                            "city_id": "CH240203",
                            "name": "庐山",
                            "en": "lushan"
                        },
                        {
                            "city_id": "CH240204",
                            "name": "武宁",
                            "en": "wuning"
                        },
                        {
                            "city_id": "CH240205",
                            "name": "德安",
                            "en": "xiuan"
                        },
                        {
                            "city_id": "CH240206",
                            "name": "永修",
                            "en": "yongxiu"
                        },
                        {
                            "city_id": "CH240207",
                            "name": "湖口",
                            "en": "hukou"
                        },
                        {
                            "city_id": "CH240208",
                            "name": "彭泽",
                            "en": "pengze"
                        },
                        {
                            "city_id": "CH240209",
                            "name": "星子",
                            "en": "xingzi"
                        },
                        {
                            "city_id": "CH240210",
                            "name": "都昌",
                            "en": "duchang"
                        },
                        {
                            "city_id": "CH240212",
                            "name": "修水",
                            "en": "xiushui"
                        }
                    ]
                },
                {
                    "city_id": "CH2403",
                    "name": "上饶",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240301",
                            "name": "上饶",
                            "en": "shangrao"
                        },
                        {
                            "city_id": "CH240302",
                            "name": "鄱阳",
                            "en": "poyang"
                        },
                        {
                            "city_id": "CH240303",
                            "name": "婺源",
                            "en": "wuyuan"
                        },
                        {
                            "city_id": "CH240305",
                            "name": "余干",
                            "en": "yugan"
                        },
                        {
                            "city_id": "CH240306",
                            "name": "万年",
                            "en": "wannian"
                        },
                        {
                            "city_id": "CH240307",
                            "name": "德兴",
                            "en": "dexing"
                        },
                        {
                            "city_id": "CH240308",
                            "name": "上饶县",
                            "en": "shangraoxian"
                        },
                        {
                            "city_id": "CH240309",
                            "name": "弋阳",
                            "en": "yiyang"
                        },
                        {
                            "city_id": "CH240310",
                            "name": "横峰",
                            "en": "hengfeng"
                        },
                        {
                            "city_id": "CH240311",
                            "name": "铅山",
                            "en": "yanshan"
                        },
                        {
                            "city_id": "CH240312",
                            "name": "玉山",
                            "en": "yushan"
                        },
                        {
                            "city_id": "CH240313",
                            "name": "广丰",
                            "en": "guangfeng"
                        }
                    ]
                },
                {
                    "city_id": "CH2404",
                    "name": "抚州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240401",
                            "name": "抚州",
                            "en": "fuzhou"
                        },
                        {
                            "city_id": "CH240402",
                            "name": "广昌",
                            "en": "guangchang"
                        },
                        {
                            "city_id": "CH240403",
                            "name": "乐安",
                            "en": "lean"
                        },
                        {
                            "city_id": "CH240404",
                            "name": "崇仁",
                            "en": "chongren"
                        },
                        {
                            "city_id": "CH240405",
                            "name": "金溪",
                            "en": "jinxi"
                        },
                        {
                            "city_id": "CH240406",
                            "name": "资溪",
                            "en": "zixi"
                        },
                        {
                            "city_id": "CH240407",
                            "name": "宜黄",
                            "en": "yihuang"
                        },
                        {
                            "city_id": "CH240408",
                            "name": "南城",
                            "en": "nancheng"
                        },
                        {
                            "city_id": "CH240409",
                            "name": "南丰",
                            "en": "nanfeng"
                        },
                        {
                            "city_id": "CH240410",
                            "name": "黎川",
                            "en": "lichuan"
                        },
                        {
                            "city_id": "CH240411",
                            "name": "东乡",
                            "en": "dongxiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2405",
                    "name": "宜春",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240501",
                            "name": "宜春",
                            "en": "Yichun"
                        },
                        {
                            "city_id": "CH240502",
                            "name": "铜鼓",
                            "en": "tonggu"
                        },
                        {
                            "city_id": "CH240503",
                            "name": "宜丰",
                            "en": "yifeng"
                        },
                        {
                            "city_id": "CH240504",
                            "name": "万载",
                            "en": "wanzai"
                        },
                        {
                            "city_id": "CH240505",
                            "name": "上高",
                            "en": "shanggao"
                        },
                        {
                            "city_id": "CH240506",
                            "name": "靖安",
                            "en": "jingan"
                        },
                        {
                            "city_id": "CH240507",
                            "name": "奉新",
                            "en": "fengxin"
                        },
                        {
                            "city_id": "CH240508",
                            "name": "高安",
                            "en": "gaoan"
                        },
                        {
                            "city_id": "CH240509",
                            "name": "樟树",
                            "en": "zhangshu"
                        },
                        {
                            "city_id": "CH240510",
                            "name": "丰城",
                            "en": "Fengcheng"
                        }
                    ]
                },
                {
                    "city_id": "CH2406",
                    "name": "吉安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240601",
                            "name": "吉安",
                            "en": "jian"
                        },
                        {
                            "city_id": "CH240602",
                            "name": "吉安县",
                            "en": "jianxian"
                        },
                        {
                            "city_id": "CH240603",
                            "name": "吉水",
                            "en": "jishui"
                        },
                        {
                            "city_id": "CH240604",
                            "name": "新干",
                            "en": "xiagan"
                        },
                        {
                            "city_id": "CH240605",
                            "name": "峡江",
                            "en": "xiajiang"
                        },
                        {
                            "city_id": "CH240606",
                            "name": "永丰",
                            "en": "yongfeng"
                        },
                        {
                            "city_id": "CH240607",
                            "name": "永新",
                            "en": "yongxin"
                        },
                        {
                            "city_id": "CH240608",
                            "name": "井冈山",
                            "en": "jinggangshan"
                        },
                        {
                            "city_id": "CH240609",
                            "name": "万安",
                            "en": "wanan"
                        },
                        {
                            "city_id": "CH240610",
                            "name": "遂川",
                            "en": "suichuan"
                        },
                        {
                            "city_id": "CH240611",
                            "name": "泰和",
                            "en": "taihe"
                        },
                        {
                            "city_id": "CH240612",
                            "name": "安福",
                            "en": "anfu"
                        },
                        {
                            "city_id": "CH240613",
                            "name": "宁冈",
                            "en": "ninggang"
                        }
                    ]
                },
                {
                    "city_id": "CH2407",
                    "name": "赣州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240701",
                            "name": "赣州",
                            "en": "Ganzhou"
                        },
                        {
                            "city_id": "CH240702",
                            "name": "崇义",
                            "en": "chongyi"
                        },
                        {
                            "city_id": "CH240703",
                            "name": "上犹",
                            "en": "shangyou"
                        },
                        {
                            "city_id": "CH240704",
                            "name": "南康",
                            "en": "nankang"
                        },
                        {
                            "city_id": "CH240705",
                            "name": "大余",
                            "en": "dayu"
                        },
                        {
                            "city_id": "CH240706",
                            "name": "信丰",
                            "en": "xinfeng"
                        },
                        {
                            "city_id": "CH240707",
                            "name": "宁都",
                            "en": "ningdu"
                        },
                        {
                            "city_id": "CH240708",
                            "name": "石城",
                            "en": "shicheng"
                        },
                        {
                            "city_id": "CH240709",
                            "name": "瑞金",
                            "en": "ruijin"
                        },
                        {
                            "city_id": "CH240710",
                            "name": "于都",
                            "en": "yudu"
                        },
                        {
                            "city_id": "CH240711",
                            "name": "会昌",
                            "en": "huichang"
                        },
                        {
                            "city_id": "CH240712",
                            "name": "安远",
                            "en": "anyuan"
                        },
                        {
                            "city_id": "CH240713",
                            "name": "全南",
                            "en": "quannan"
                        },
                        {
                            "city_id": "CH240714",
                            "name": "龙南",
                            "en": "longnan"
                        },
                        {
                            "city_id": "CH240715",
                            "name": "定南",
                            "en": "dingnan"
                        },
                        {
                            "city_id": "CH240716",
                            "name": "寻乌",
                            "en": "xunwu"
                        },
                        {
                            "city_id": "CH240717",
                            "name": "兴国",
                            "en": "xingguo"
                        },
                        {
                            "city_id": "CH240718",
                            "name": "赣县",
                            "en": "ganxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2408",
                    "name": "景德镇",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240801",
                            "name": "景德镇",
                            "en": "Jingdezhen"
                        },
                        {
                            "city_id": "CH240802",
                            "name": "乐平",
                            "en": "leping"
                        },
                        {
                            "city_id": "CH240803",
                            "name": "浮梁",
                            "en": "fuliang"
                        }
                    ]
                },
                {
                    "city_id": "CH2409",
                    "name": "萍乡",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH240901",
                            "name": "萍乡",
                            "en": "pingxiang"
                        },
                        {
                            "city_id": "CH240902",
                            "name": "莲花",
                            "en": "lianhua"
                        },
                        {
                            "city_id": "CH240903",
                            "name": "上栗",
                            "en": "shangli"
                        },
                        {
                            "city_id": "CH240904",
                            "name": "安源",
                            "en": "anyuan"
                        },
                        {
                            "city_id": "CH240905",
                            "name": "芦溪",
                            "en": "luxi"
                        },
                        {
                            "city_id": "CH240906",
                            "name": "湘东",
                            "en": "xiangdong"
                        }
                    ]
                },
                {
                    "city_id": "CH2410",
                    "name": "新余",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH241001",
                            "name": "新余",
                            "en": "Xinyu"
                        },
                        {
                            "city_id": "CH241002",
                            "name": "分宜",
                            "en": "Fenyi"
                        }
                    ]
                },
                {
                    "city_id": "CH2411",
                    "name": "鹰潭",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH241101",
                            "name": "鹰潭",
                            "en": "yingtan"
                        },
                        {
                            "city_id": "CH241102",
                            "name": "余江",
                            "en": "yujiang"
                        },
                        {
                            "city_id": "CH241103",
                            "name": "贵溪",
                            "en": "guixi"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH25",
            "name": "湖南",
            "en": "",
            "list": [
                {
                    "city_id": "CH2501",
                    "name": "长沙",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250101",
                            "name": "长沙",
                            "en": "Changsha"
                        },
                        {
                            "city_id": "CH250102",
                            "name": "宁乡",
                            "en": "ningxiang"
                        },
                        {
                            "city_id": "CH250103",
                            "name": "浏阳",
                            "en": "Liuyang"
                        },
                        {
                            "city_id": "CH250104",
                            "name": "马坡岭",
                            "en": "mapoling"
                        },
                        {
                            "city_id": "CH250105",
                            "name": "望城",
                            "en": "wangcheng"
                        }
                    ]
                },
                {
                    "city_id": "CH2502",
                    "name": "湘潭",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250201",
                            "name": "湘潭",
                            "en": "Xiangtan"
                        },
                        {
                            "city_id": "CH250202",
                            "name": "韶山",
                            "en": "shaoshan"
                        },
                        {
                            "city_id": "CH250203",
                            "name": "湘乡",
                            "en": "Xiangxiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2503",
                    "name": "株洲",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250301",
                            "name": "株洲",
                            "en": "zhuzhou"
                        },
                        {
                            "city_id": "CH250302",
                            "name": "攸县",
                            "en": "youxian"
                        },
                        {
                            "city_id": "CH250303",
                            "name": "醴陵",
                            "en": "liling"
                        },
                        {
                            "city_id": "CH250305",
                            "name": "茶陵",
                            "en": "chaling"
                        },
                        {
                            "city_id": "CH250306",
                            "name": "炎陵",
                            "en": "yanling"
                        }
                    ]
                },
                {
                    "city_id": "CH2504",
                    "name": "衡阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250401",
                            "name": "衡阳",
                            "en": "Hengyang"
                        },
                        {
                            "city_id": "CH250402",
                            "name": "衡山",
                            "en": "hengshan"
                        },
                        {
                            "city_id": "CH250403",
                            "name": "衡东",
                            "en": "hengdong"
                        },
                        {
                            "city_id": "CH250404",
                            "name": "祁东",
                            "en": "qidong"
                        },
                        {
                            "city_id": "CH250405",
                            "name": "衡阳县",
                            "en": "hengyangxian"
                        },
                        {
                            "city_id": "CH250406",
                            "name": "常宁",
                            "en": "changning"
                        },
                        {
                            "city_id": "CH250407",
                            "name": "衡南",
                            "en": "hengnan"
                        },
                        {
                            "city_id": "CH250408",
                            "name": "耒阳",
                            "en": "Leiyang"
                        },
                        {
                            "city_id": "CH250409",
                            "name": "南岳",
                            "en": "nanyue"
                        }
                    ]
                },
                {
                    "city_id": "CH2505",
                    "name": "郴州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250501",
                            "name": "郴州",
                            "en": "Chenzhou"
                        },
                        {
                            "city_id": "CH250502",
                            "name": "桂阳",
                            "en": "guiyang"
                        },
                        {
                            "city_id": "CH250503",
                            "name": "嘉禾",
                            "en": "jiahe"
                        },
                        {
                            "city_id": "CH250504",
                            "name": "宜章",
                            "en": "yizhang"
                        },
                        {
                            "city_id": "CH250505",
                            "name": "临武",
                            "en": "linwu"
                        },
                        {
                            "city_id": "CH250507",
                            "name": "资兴",
                            "en": "zixing"
                        },
                        {
                            "city_id": "CH250508",
                            "name": "汝城",
                            "en": "rucheng"
                        },
                        {
                            "city_id": "CH250509",
                            "name": "安仁",
                            "en": "anren"
                        },
                        {
                            "city_id": "CH250510",
                            "name": "永兴",
                            "en": "yongxing"
                        },
                        {
                            "city_id": "CH250511",
                            "name": "桂东",
                            "en": "guidong"
                        },
                        {
                            "city_id": "CH250512",
                            "name": "苏仙",
                            "en": "suxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2506",
                    "name": "常德",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250601",
                            "name": "常德",
                            "en": "Changde"
                        },
                        {
                            "city_id": "CH250602",
                            "name": "安乡",
                            "en": "anxiang"
                        },
                        {
                            "city_id": "CH250603",
                            "name": "桃源",
                            "en": "taoyuan"
                        },
                        {
                            "city_id": "CH250604",
                            "name": "汉寿",
                            "en": "hanshou"
                        },
                        {
                            "city_id": "CH250605",
                            "name": "澧县",
                            "en": "lixian"
                        },
                        {
                            "city_id": "CH250606",
                            "name": "临澧",
                            "en": "linli"
                        },
                        {
                            "city_id": "CH250607",
                            "name": "石门",
                            "en": "shimen"
                        },
                        {
                            "city_id": "CH250608",
                            "name": "津市",
                            "en": "jinshi"
                        }
                    ]
                },
                {
                    "city_id": "CH2507",
                    "name": "益阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250700",
                            "name": "益阳",
                            "en": "yiyang"
                        },
                        {
                            "city_id": "CH250701",
                            "name": "赫山区",
                            "en": "heshanqu"
                        },
                        {
                            "city_id": "CH250702",
                            "name": "南县",
                            "en": "nanxian"
                        },
                        {
                            "city_id": "CH250703",
                            "name": "桃江",
                            "en": "taojiang"
                        },
                        {
                            "city_id": "CH250704",
                            "name": "安化",
                            "en": "anhua"
                        },
                        {
                            "city_id": "CH250705",
                            "name": "沅江",
                            "en": "yuanjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2508",
                    "name": "娄底",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250801",
                            "name": "娄底",
                            "en": "loudi"
                        },
                        {
                            "city_id": "CH250802",
                            "name": "双峰",
                            "en": "shuangfeng"
                        },
                        {
                            "city_id": "CH250803",
                            "name": "冷水江",
                            "en": "lengshuijiang"
                        },
                        {
                            "city_id": "CH250805",
                            "name": "新化",
                            "en": "xinhua"
                        },
                        {
                            "city_id": "CH250806",
                            "name": "涟源",
                            "en": "lianyuan"
                        }
                    ]
                },
                {
                    "city_id": "CH2509",
                    "name": "邵阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH250901",
                            "name": "邵阳",
                            "en": "Shaoyang"
                        },
                        {
                            "city_id": "CH250902",
                            "name": "隆回",
                            "en": "longhui"
                        },
                        {
                            "city_id": "CH250903",
                            "name": "洞口",
                            "en": "dongkou"
                        },
                        {
                            "city_id": "CH250904",
                            "name": "新邵",
                            "en": "xinshao"
                        },
                        {
                            "city_id": "CH250905",
                            "name": "邵东",
                            "en": "shaodong"
                        },
                        {
                            "city_id": "CH250906",
                            "name": "绥宁",
                            "en": "suining"
                        },
                        {
                            "city_id": "CH250907",
                            "name": "新宁",
                            "en": "xinning"
                        },
                        {
                            "city_id": "CH250908",
                            "name": "武冈",
                            "en": "Wugang"
                        },
                        {
                            "city_id": "CH250909",
                            "name": "城步",
                            "en": "chengbu"
                        },
                        {
                            "city_id": "CH250910",
                            "name": "邵阳县",
                            "en": "shaoyangxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2510",
                    "name": "岳阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH251001",
                            "name": "岳阳",
                            "en": "Yueyang"
                        },
                        {
                            "city_id": "CH251002",
                            "name": "华容",
                            "en": "huarong"
                        },
                        {
                            "city_id": "CH251003",
                            "name": "湘阴",
                            "en": "xiangyin"
                        },
                        {
                            "city_id": "CH251004",
                            "name": "汨罗",
                            "en": "mmiluo"
                        },
                        {
                            "city_id": "CH251005",
                            "name": "平江",
                            "en": "pingjiang"
                        },
                        {
                            "city_id": "CH251006",
                            "name": "临湘",
                            "en": "linxiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2511",
                    "name": "张家界",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH251101",
                            "name": "张家界",
                            "en": "zhangjiajie"
                        },
                        {
                            "city_id": "CH251102",
                            "name": "桑植",
                            "en": "sangzhi"
                        },
                        {
                            "city_id": "CH251103",
                            "name": "慈利",
                            "en": "cili"
                        },
                        {
                            "city_id": "CH251104",
                            "name": "武陵源",
                            "en": "wulingyuan"
                        }
                    ]
                },
                {
                    "city_id": "CH2512",
                    "name": "怀化",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH251201",
                            "name": "怀化",
                            "en": "huaihua"
                        },
                        {
                            "city_id": "CH251203",
                            "name": "沅陵",
                            "en": "Yuanling"
                        },
                        {
                            "city_id": "CH251204",
                            "name": "辰溪",
                            "en": "chenxi"
                        },
                        {
                            "city_id": "CH251205",
                            "name": "靖州",
                            "en": "jingzhou"
                        },
                        {
                            "city_id": "CH251206",
                            "name": "会同",
                            "en": "huitong"
                        },
                        {
                            "city_id": "CH251207",
                            "name": "通道",
                            "en": "tongdao"
                        },
                        {
                            "city_id": "CH251208",
                            "name": "麻阳",
                            "en": "mayang"
                        },
                        {
                            "city_id": "CH251209",
                            "name": "新晃",
                            "en": "xinhuang"
                        },
                        {
                            "city_id": "CH251210",
                            "name": "芷江",
                            "en": "Zhijiang"
                        },
                        {
                            "city_id": "CH251211",
                            "name": "溆浦",
                            "en": "xupu"
                        },
                        {
                            "city_id": "CH251212",
                            "name": "中方",
                            "en": "zhongfang"
                        },
                        {
                            "city_id": "CH251213",
                            "name": "洪江",
                            "en": "hongjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2514",
                    "name": "永州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH251401",
                            "name": "永州",
                            "en": "yongzhou"
                        },
                        {
                            "city_id": "CH251402",
                            "name": "祁阳",
                            "en": "qiyang"
                        },
                        {
                            "city_id": "CH251403",
                            "name": "东安",
                            "en": "dongan"
                        },
                        {
                            "city_id": "CH251404",
                            "name": "双牌",
                            "en": "shuangpai"
                        },
                        {
                            "city_id": "CH251405",
                            "name": "道县",
                            "en": "daoxian"
                        },
                        {
                            "city_id": "CH251406",
                            "name": "宁远",
                            "en": "ningyuan"
                        },
                        {
                            "city_id": "CH251407",
                            "name": "江永",
                            "en": "jiangyong"
                        },
                        {
                            "city_id": "CH251408",
                            "name": "蓝山",
                            "en": "lanshan"
                        },
                        {
                            "city_id": "CH251409",
                            "name": "新田",
                            "en": "xintian"
                        },
                        {
                            "city_id": "CH251410",
                            "name": "江华",
                            "en": "jianghua"
                        },
                        {
                            "city_id": "CH251411",
                            "name": "冷水滩",
                            "en": "lengshuitan"
                        }
                    ]
                },
                {
                    "city_id": "CH2515",
                    "name": "湘西",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH251501",
                            "name": "吉首",
                            "en": "Jishou"
                        },
                        {
                            "city_id": "CH251502",
                            "name": "保靖",
                            "en": "baojing"
                        },
                        {
                            "city_id": "CH251503",
                            "name": "永顺",
                            "en": "yongshun"
                        },
                        {
                            "city_id": "CH251504",
                            "name": "古丈",
                            "en": "guzhang"
                        },
                        {
                            "city_id": "CH251505",
                            "name": "凤凰",
                            "en": "fenghuang"
                        },
                        {
                            "city_id": "CH251506",
                            "name": "泸溪",
                            "en": "luxi"
                        },
                        {
                            "city_id": "CH251507",
                            "name": "龙山",
                            "en": "longshan"
                        },
                        {
                            "city_id": "CH251508",
                            "name": "花垣",
                            "en": "huayuan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH26",
            "name": "贵州",
            "en": "",
            "list": [
                {
                    "city_id": "CH2601",
                    "name": "贵阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260101",
                            "name": "贵阳",
                            "en": "Guiyang"
                        },
                        {
                            "city_id": "CH260102",
                            "name": "白云",
                            "en": "baiyun"
                        },
                        {
                            "city_id": "CH260103",
                            "name": "花溪",
                            "en": "huaxi"
                        },
                        {
                            "city_id": "CH260104",
                            "name": "乌当",
                            "en": "wudang"
                        },
                        {
                            "city_id": "CH260105",
                            "name": "息烽",
                            "en": "xifeng"
                        },
                        {
                            "city_id": "CH260106",
                            "name": "开阳",
                            "en": "kaiyang"
                        },
                        {
                            "city_id": "CH260107",
                            "name": "修文",
                            "en": "xiuwen"
                        },
                        {
                            "city_id": "CH260108",
                            "name": "清镇",
                            "en": "qingzhen"
                        },
                        {
                            "city_id": "CH260109",
                            "name": "小河",
                            "en": "xiaohe"
                        },
                        {
                            "city_id": "CH260110",
                            "name": "云岩",
                            "en": "yanyan"
                        },
                        {
                            "city_id": "CH260111",
                            "name": "南明",
                            "en": "nanming"
                        }
                    ]
                },
                {
                    "city_id": "CH2602",
                    "name": "遵义",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260201",
                            "name": "遵义",
                            "en": "Zunyi"
                        },
                        {
                            "city_id": "CH260202",
                            "name": "遵义县",
                            "en": "zunyixian"
                        },
                        {
                            "city_id": "CH260203",
                            "name": "仁怀",
                            "en": "renhuai"
                        },
                        {
                            "city_id": "CH260204",
                            "name": "绥阳",
                            "en": "suiyang"
                        },
                        {
                            "city_id": "CH260205",
                            "name": "湄潭",
                            "en": "meitan"
                        },
                        {
                            "city_id": "CH260206",
                            "name": "凤冈",
                            "en": "fenggang"
                        },
                        {
                            "city_id": "CH260207",
                            "name": "桐梓",
                            "en": "tongzi"
                        },
                        {
                            "city_id": "CH260208",
                            "name": "赤水",
                            "en": "chishui"
                        },
                        {
                            "city_id": "CH260209",
                            "name": "习水",
                            "en": "xishui"
                        },
                        {
                            "city_id": "CH260210",
                            "name": "道真",
                            "en": "daozhen"
                        },
                        {
                            "city_id": "CH260211",
                            "name": "正安",
                            "en": "zhengan"
                        },
                        {
                            "city_id": "CH260212",
                            "name": "务川",
                            "en": "wuchuan"
                        },
                        {
                            "city_id": "CH260213",
                            "name": "余庆",
                            "en": "yuqing"
                        },
                        {
                            "city_id": "CH260214",
                            "name": "汇川",
                            "en": "huichuan"
                        },
                        {
                            "city_id": "CH260215",
                            "name": "红花岗",
                            "en": "honghuagang"
                        }
                    ]
                },
                {
                    "city_id": "CH2603",
                    "name": "安顺",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260301",
                            "name": "安顺",
                            "en": "Anshun"
                        },
                        {
                            "city_id": "CH260302",
                            "name": "普定",
                            "en": "puding"
                        },
                        {
                            "city_id": "CH260303",
                            "name": "镇宁",
                            "en": "zhenning"
                        },
                        {
                            "city_id": "CH260304",
                            "name": "平坝",
                            "en": "pingba"
                        },
                        {
                            "city_id": "CH260305",
                            "name": "紫云",
                            "en": "ziyun"
                        },
                        {
                            "city_id": "CH260306",
                            "name": "关岭",
                            "en": "guanling"
                        }
                    ]
                },
                {
                    "city_id": "CH2604",
                    "name": "黔南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260401",
                            "name": "都匀",
                            "en": "Duyun"
                        },
                        {
                            "city_id": "CH260402",
                            "name": "贵定",
                            "en": "guiding"
                        },
                        {
                            "city_id": "CH260403",
                            "name": "瓮安",
                            "en": "wengan"
                        },
                        {
                            "city_id": "CH260404",
                            "name": "长顺",
                            "en": "changshun"
                        },
                        {
                            "city_id": "CH260405",
                            "name": "福泉",
                            "en": "fuquan"
                        },
                        {
                            "city_id": "CH260406",
                            "name": "惠水",
                            "en": "huishui"
                        },
                        {
                            "city_id": "CH260407",
                            "name": "龙里",
                            "en": "longli"
                        },
                        {
                            "city_id": "CH260408",
                            "name": "罗甸",
                            "en": "luodian"
                        },
                        {
                            "city_id": "CH260409",
                            "name": "平塘",
                            "en": "pingtang"
                        },
                        {
                            "city_id": "CH260410",
                            "name": "独山",
                            "en": "dushan"
                        },
                        {
                            "city_id": "CH260411",
                            "name": "三都",
                            "en": "sandu"
                        },
                        {
                            "city_id": "CH260412",
                            "name": "荔波",
                            "en": "libo"
                        }
                    ]
                },
                {
                    "city_id": "CH2605",
                    "name": "黔东南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260501",
                            "name": "凯里",
                            "en": "kaili"
                        },
                        {
                            "city_id": "CH260502",
                            "name": "岑巩",
                            "en": "cengong"
                        },
                        {
                            "city_id": "CH260503",
                            "name": "施秉",
                            "en": "shibing"
                        },
                        {
                            "city_id": "CH260504",
                            "name": "镇远",
                            "en": "zhenyuan"
                        },
                        {
                            "city_id": "CH260505",
                            "name": "黄平",
                            "en": "huangping"
                        },
                        {
                            "city_id": "CH260507",
                            "name": "麻江",
                            "en": "majiang"
                        },
                        {
                            "city_id": "CH260508",
                            "name": "丹寨",
                            "en": "danzhai"
                        },
                        {
                            "city_id": "CH260509",
                            "name": "三穗",
                            "en": "sansui"
                        },
                        {
                            "city_id": "CH260510",
                            "name": "台江",
                            "en": "taijiang"
                        },
                        {
                            "city_id": "CH260511",
                            "name": "剑河",
                            "en": "jianhe"
                        },
                        {
                            "city_id": "CH260512",
                            "name": "雷山",
                            "en": "leishan"
                        },
                        {
                            "city_id": "CH260513",
                            "name": "黎平",
                            "en": "liping"
                        },
                        {
                            "city_id": "CH260514",
                            "name": "天柱",
                            "en": "tianzhu"
                        },
                        {
                            "city_id": "CH260515",
                            "name": "锦屏",
                            "en": "jinping"
                        },
                        {
                            "city_id": "CH260516",
                            "name": "榕江",
                            "en": "Rongjiang"
                        },
                        {
                            "city_id": "CH260517",
                            "name": "从江",
                            "en": "congjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2606",
                    "name": "铜仁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260601",
                            "name": "铜仁",
                            "en": "Tongren"
                        },
                        {
                            "city_id": "CH260602",
                            "name": "江口",
                            "en": "jiangkou"
                        },
                        {
                            "city_id": "CH260603",
                            "name": "玉屏",
                            "en": "yuping"
                        },
                        {
                            "city_id": "CH260604",
                            "name": "万山",
                            "en": "wanshan"
                        },
                        {
                            "city_id": "CH260605",
                            "name": "思南",
                            "en": "sinan"
                        },
                        {
                            "city_id": "CH260607",
                            "name": "印江",
                            "en": "yinjiang"
                        },
                        {
                            "city_id": "CH260608",
                            "name": "石阡",
                            "en": "shiqian"
                        },
                        {
                            "city_id": "CH260609",
                            "name": "沿河",
                            "en": "yanhe"
                        },
                        {
                            "city_id": "CH260610",
                            "name": "德江",
                            "en": "dejiang"
                        },
                        {
                            "city_id": "CH260611",
                            "name": "松桃",
                            "en": "songtao"
                        }
                    ]
                },
                {
                    "city_id": "CH2607",
                    "name": "毕节",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260701",
                            "name": "毕节",
                            "en": "Bijie"
                        },
                        {
                            "city_id": "CH260702",
                            "name": "赫章",
                            "en": "hezhang"
                        },
                        {
                            "city_id": "CH260703",
                            "name": "金沙",
                            "en": "jinsha"
                        },
                        {
                            "city_id": "CH260704",
                            "name": "威宁",
                            "en": "Weining"
                        },
                        {
                            "city_id": "CH260705",
                            "name": "大方",
                            "en": "dafang"
                        },
                        {
                            "city_id": "CH260706",
                            "name": "纳雍",
                            "en": "nayong"
                        },
                        {
                            "city_id": "CH260707",
                            "name": "织金",
                            "en": "zhijin"
                        },
                        {
                            "city_id": "CH260708",
                            "name": "黔西",
                            "en": "qianxi"
                        }
                    ]
                },
                {
                    "city_id": "CH2608",
                    "name": "六盘水",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260801",
                            "name": "水城",
                            "en": "shuicheng"
                        },
                        {
                            "city_id": "CH260802",
                            "name": "六枝",
                            "en": "liuzhi"
                        },
                        {
                            "city_id": "CH260804",
                            "name": "盘县",
                            "en": "panxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2609",
                    "name": "黔西南",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH260901",
                            "name": "兴义",
                            "en": "xingyi"
                        },
                        {
                            "city_id": "CH260902",
                            "name": "晴隆",
                            "en": "qinglong"
                        },
                        {
                            "city_id": "CH260903",
                            "name": "兴仁",
                            "en": "xingren"
                        },
                        {
                            "city_id": "CH260904",
                            "name": "贞丰",
                            "en": "zhenfeng"
                        },
                        {
                            "city_id": "CH260905",
                            "name": "望谟",
                            "en": "wangmo"
                        },
                        {
                            "city_id": "CH260907",
                            "name": "安龙",
                            "en": "anlong"
                        },
                        {
                            "city_id": "CH260908",
                            "name": "册亨",
                            "en": "ceheng"
                        },
                        {
                            "city_id": "CH260909",
                            "name": "普安",
                            "en": "puan"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH27",
            "name": "四川",
            "en": "",
            "list": [
                {
                    "city_id": "CH2701",
                    "name": "成都",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270101",
                            "name": "成都",
                            "en": "Chengdu"
                        },
                        {
                            "city_id": "CH270102",
                            "name": "龙泉驿",
                            "en": "longquanyi"
                        },
                        {
                            "city_id": "CH270103",
                            "name": "新都",
                            "en": "xindu"
                        },
                        {
                            "city_id": "CH270104",
                            "name": "温江",
                            "en": "wenjiang"
                        },
                        {
                            "city_id": "CH270105",
                            "name": "金堂",
                            "en": "jintang"
                        },
                        {
                            "city_id": "CH270106",
                            "name": "双流",
                            "en": "shuangliu"
                        },
                        {
                            "city_id": "CH270107",
                            "name": "郫县",
                            "en": "pixian"
                        },
                        {
                            "city_id": "CH270108",
                            "name": "大邑",
                            "en": "dayi"
                        },
                        {
                            "city_id": "CH270109",
                            "name": "蒲江",
                            "en": "pujiang"
                        },
                        {
                            "city_id": "CH270110",
                            "name": "新津",
                            "en": "xinjin"
                        },
                        {
                            "city_id": "CH270111",
                            "name": "都江堰",
                            "en": "dujiangyan"
                        },
                        {
                            "city_id": "CH270112",
                            "name": "彭州",
                            "en": "pengzhou"
                        },
                        {
                            "city_id": "CH270113",
                            "name": "邛崃",
                            "en": "qionglai"
                        },
                        {
                            "city_id": "CH270114",
                            "name": "崇州",
                            "en": "chongzhou"
                        },
                        {
                            "city_id": "CH270115",
                            "name": "青白江",
                            "en": "qingbaijiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2702",
                    "name": "攀枝花",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270201",
                            "name": "攀枝花",
                            "en": "panzhihua"
                        },
                        {
                            "city_id": "CH270202",
                            "name": "仁和",
                            "en": "renhe"
                        },
                        {
                            "city_id": "CH270203",
                            "name": "米易",
                            "en": "miyi"
                        },
                        {
                            "city_id": "CH270204",
                            "name": "盐边",
                            "en": "yanbian"
                        }
                    ]
                },
                {
                    "city_id": "CH2703",
                    "name": "自贡",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270301",
                            "name": "自贡",
                            "en": "Zigong"
                        },
                        {
                            "city_id": "CH270302",
                            "name": "富顺",
                            "en": "fushun"
                        },
                        {
                            "city_id": "CH270303",
                            "name": "荣县",
                            "en": "rongxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2704",
                    "name": "绵阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270401",
                            "name": "绵阳",
                            "en": "mianyang"
                        },
                        {
                            "city_id": "CH270402",
                            "name": "三台",
                            "en": "santai"
                        },
                        {
                            "city_id": "CH270403",
                            "name": "盐亭",
                            "en": "yanting"
                        },
                        {
                            "city_id": "CH270404",
                            "name": "安县",
                            "en": "anxian"
                        },
                        {
                            "city_id": "CH270405",
                            "name": "梓潼",
                            "en": "zitong"
                        },
                        {
                            "city_id": "CH270406",
                            "name": "北川",
                            "en": "beichuan"
                        },
                        {
                            "city_id": "CH270407",
                            "name": "平武",
                            "en": "pingwu"
                        },
                        {
                            "city_id": "CH270408",
                            "name": "江油",
                            "en": "jiangyou"
                        }
                    ]
                },
                {
                    "city_id": "CH2705",
                    "name": "南充",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270501",
                            "name": "南充",
                            "en": "Nanchong"
                        },
                        {
                            "city_id": "CH270502",
                            "name": "南部",
                            "en": "nanbu"
                        },
                        {
                            "city_id": "CH270503",
                            "name": "营山",
                            "en": "yingshan"
                        },
                        {
                            "city_id": "CH270504",
                            "name": "蓬安",
                            "en": "pengan"
                        },
                        {
                            "city_id": "CH270505",
                            "name": "仪陇",
                            "en": "yilong"
                        },
                        {
                            "city_id": "CH270506",
                            "name": "西充",
                            "en": "xichong"
                        },
                        {
                            "city_id": "CH270507",
                            "name": "阆中",
                            "en": "Langzhong"
                        }
                    ]
                },
                {
                    "city_id": "CH2706",
                    "name": "达州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270601",
                            "name": "达州",
                            "en": "dazhou"
                        },
                        {
                            "city_id": "CH270602",
                            "name": "宣汉",
                            "en": "xuanhan"
                        },
                        {
                            "city_id": "CH270603",
                            "name": "开江",
                            "en": "kaijiang"
                        },
                        {
                            "city_id": "CH270604",
                            "name": "大竹",
                            "en": "dazhu"
                        },
                        {
                            "city_id": "CH270605",
                            "name": "渠县",
                            "en": "quxian"
                        },
                        {
                            "city_id": "CH270606",
                            "name": "万源",
                            "en": "wanyuan"
                        },
                        {
                            "city_id": "CH270607",
                            "name": "通川",
                            "en": "tongchuan"
                        },
                        {
                            "city_id": "CH270608",
                            "name": "达县",
                            "en": "daxian"
                        }
                    ]
                },
                {
                    "city_id": "CH2707",
                    "name": "遂宁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270701",
                            "name": "遂宁",
                            "en": "Suining"
                        },
                        {
                            "city_id": "CH270702",
                            "name": "蓬溪",
                            "en": "pengxi"
                        },
                        {
                            "city_id": "CH270703",
                            "name": "射洪",
                            "en": "shehong"
                        }
                    ]
                },
                {
                    "city_id": "CH2708",
                    "name": "广安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270801",
                            "name": "广安",
                            "en": "guangan"
                        },
                        {
                            "city_id": "CH270802",
                            "name": "岳池",
                            "en": "yuechi"
                        },
                        {
                            "city_id": "CH270803",
                            "name": "武胜",
                            "en": "wusheng"
                        },
                        {
                            "city_id": "CH270804",
                            "name": "邻水",
                            "en": "linshui"
                        },
                        {
                            "city_id": "CH270805",
                            "name": "华蓥",
                            "en": "huaying"
                        }
                    ]
                },
                {
                    "city_id": "CH2709",
                    "name": "巴中",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH270901",
                            "name": "巴中",
                            "en": "bazhong"
                        },
                        {
                            "city_id": "CH270902",
                            "name": "通江",
                            "en": "tongjiang"
                        },
                        {
                            "city_id": "CH270903",
                            "name": "南江",
                            "en": "nanjiang"
                        },
                        {
                            "city_id": "CH270904",
                            "name": "平昌",
                            "en": "pingchang"
                        }
                    ]
                },
                {
                    "city_id": "CH2710",
                    "name": "泸州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271001",
                            "name": "泸州",
                            "en": "Luzhou"
                        },
                        {
                            "city_id": "CH271003",
                            "name": "泸县",
                            "en": "luxian"
                        },
                        {
                            "city_id": "CH271004",
                            "name": "合江",
                            "en": "Hejiang"
                        },
                        {
                            "city_id": "CH271005",
                            "name": "叙永",
                            "en": "xuyong"
                        },
                        {
                            "city_id": "CH271006",
                            "name": "古蔺",
                            "en": "gulin"
                        },
                        {
                            "city_id": "CH271007",
                            "name": "纳溪",
                            "en": "naxi"
                        }
                    ]
                },
                {
                    "city_id": "CH2711",
                    "name": "宜宾",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271101",
                            "name": "宜宾",
                            "en": "Yibin"
                        },
                        {
                            "city_id": "CH271103",
                            "name": "宜宾县",
                            "en": "yibinxian"
                        },
                        {
                            "city_id": "CH271104",
                            "name": "南溪",
                            "en": "nanxi"
                        },
                        {
                            "city_id": "CH271105",
                            "name": "江安",
                            "en": "jiangan"
                        },
                        {
                            "city_id": "CH271106",
                            "name": "长宁",
                            "en": "changning"
                        },
                        {
                            "city_id": "CH271107",
                            "name": "高县",
                            "en": "gaoxian"
                        },
                        {
                            "city_id": "CH271108",
                            "name": "珙县",
                            "en": "gongxian"
                        },
                        {
                            "city_id": "CH271109",
                            "name": "筠连",
                            "en": "junlian"
                        },
                        {
                            "city_id": "CH271110",
                            "name": "兴文",
                            "en": "xingwen"
                        },
                        {
                            "city_id": "CH271111",
                            "name": "屏山",
                            "en": "pingshan"
                        }
                    ]
                },
                {
                    "city_id": "CH2712",
                    "name": "内江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271201",
                            "name": "内江",
                            "en": "Neijiang"
                        },
                        {
                            "city_id": "CH271202",
                            "name": "东兴",
                            "en": "dongxing"
                        },
                        {
                            "city_id": "CH271203",
                            "name": "威远",
                            "en": "weiyuan"
                        },
                        {
                            "city_id": "CH271204",
                            "name": "资中",
                            "en": "zizhong"
                        },
                        {
                            "city_id": "CH271205",
                            "name": "隆昌",
                            "en": "longchang"
                        }
                    ]
                },
                {
                    "city_id": "CH2713",
                    "name": "资阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271301",
                            "name": "资阳",
                            "en": "ziyang"
                        },
                        {
                            "city_id": "CH271302",
                            "name": "安岳",
                            "en": "anyue"
                        },
                        {
                            "city_id": "CH271303",
                            "name": "乐至",
                            "en": "lezhi"
                        },
                        {
                            "city_id": "CH271304",
                            "name": "简阳",
                            "en": "jianyang"
                        }
                    ]
                },
                {
                    "city_id": "CH2714",
                    "name": "乐山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271401",
                            "name": "乐山",
                            "en": "leshan"
                        },
                        {
                            "city_id": "CH271402",
                            "name": "犍为",
                            "en": "qianwei"
                        },
                        {
                            "city_id": "CH271403",
                            "name": "井研",
                            "en": "jingyan"
                        },
                        {
                            "city_id": "CH271404",
                            "name": "夹江",
                            "en": "jiajiang"
                        },
                        {
                            "city_id": "CH271405",
                            "name": "沐川",
                            "en": "muchuan"
                        },
                        {
                            "city_id": "CH271406",
                            "name": "峨边",
                            "en": "ebian"
                        },
                        {
                            "city_id": "CH271407",
                            "name": "马边",
                            "en": "mabian"
                        },
                        {
                            "city_id": "CH271408",
                            "name": "峨眉",
                            "en": "emei"
                        },
                        {
                            "city_id": "CH271409",
                            "name": "峨眉山",
                            "en": "emeishan"
                        }
                    ]
                },
                {
                    "city_id": "CH2715",
                    "name": "眉山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271501",
                            "name": "眉山",
                            "en": "Meishan"
                        },
                        {
                            "city_id": "CH271502",
                            "name": "仁寿",
                            "en": "renshou"
                        },
                        {
                            "city_id": "CH271503",
                            "name": "彭山",
                            "en": "pengshan"
                        },
                        {
                            "city_id": "CH271504",
                            "name": "洪雅",
                            "en": "hongya"
                        },
                        {
                            "city_id": "CH271505",
                            "name": "丹棱",
                            "en": "danleng"
                        },
                        {
                            "city_id": "CH271506",
                            "name": "青神",
                            "en": "qingshen"
                        }
                    ]
                },
                {
                    "city_id": "CH2716",
                    "name": "凉山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271601",
                            "name": "凉山",
                            "en": "liangshan"
                        },
                        {
                            "city_id": "CH271603",
                            "name": "木里",
                            "en": "muli"
                        },
                        {
                            "city_id": "CH271604",
                            "name": "盐源",
                            "en": "yanyuan"
                        },
                        {
                            "city_id": "CH271605",
                            "name": "德昌",
                            "en": "dechang"
                        },
                        {
                            "city_id": "CH271606",
                            "name": "会理",
                            "en": "huili"
                        },
                        {
                            "city_id": "CH271607",
                            "name": "会东",
                            "en": "huidong"
                        },
                        {
                            "city_id": "CH271608",
                            "name": "宁南",
                            "en": "ningnan"
                        },
                        {
                            "city_id": "CH271609",
                            "name": "普格",
                            "en": "puge"
                        },
                        {
                            "city_id": "CH271610",
                            "name": "西昌",
                            "en": "xichang"
                        },
                        {
                            "city_id": "CH271611",
                            "name": "金阳",
                            "en": "jinyang"
                        },
                        {
                            "city_id": "CH271612",
                            "name": "昭觉",
                            "en": "zhaojue"
                        },
                        {
                            "city_id": "CH271613",
                            "name": "喜德",
                            "en": "xide"
                        },
                        {
                            "city_id": "CH271614",
                            "name": "冕宁",
                            "en": "mianning"
                        },
                        {
                            "city_id": "CH271615",
                            "name": "越西",
                            "en": "yuexi"
                        },
                        {
                            "city_id": "CH271616",
                            "name": "甘洛",
                            "en": "ganluo"
                        },
                        {
                            "city_id": "CH271617",
                            "name": "雷波",
                            "en": "leibo"
                        },
                        {
                            "city_id": "CH271618",
                            "name": "美姑",
                            "en": "meigu"
                        },
                        {
                            "city_id": "CH271619",
                            "name": "布拖",
                            "en": "butuo"
                        }
                    ]
                },
                {
                    "city_id": "CH2717",
                    "name": "雅安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271701",
                            "name": "雅安",
                            "en": "yaan"
                        },
                        {
                            "city_id": "CH271702",
                            "name": "名山",
                            "en": "mingshan"
                        },
                        {
                            "city_id": "CH271703",
                            "name": "荥经",
                            "en": "yingjing"
                        },
                        {
                            "city_id": "CH271704",
                            "name": "汉源",
                            "en": "hanyuan"
                        },
                        {
                            "city_id": "CH271705",
                            "name": "石棉",
                            "en": "shimian"
                        },
                        {
                            "city_id": "CH271706",
                            "name": "天全",
                            "en": "tianquan"
                        },
                        {
                            "city_id": "CH271707",
                            "name": "芦山",
                            "en": "lushan"
                        },
                        {
                            "city_id": "CH271708",
                            "name": "宝兴",
                            "en": "baoxing"
                        }
                    ]
                },
                {
                    "city_id": "CH2718",
                    "name": "甘孜",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271801",
                            "name": "甘孜",
                            "en": "ganzi"
                        },
                        {
                            "city_id": "CH271802",
                            "name": "康定",
                            "en": "Kangding"
                        },
                        {
                            "city_id": "CH271803",
                            "name": "泸定",
                            "en": "luding"
                        },
                        {
                            "city_id": "CH271804",
                            "name": "丹巴",
                            "en": "danba"
                        },
                        {
                            "city_id": "CH271805",
                            "name": "九龙",
                            "en": "jiulong"
                        },
                        {
                            "city_id": "CH271806",
                            "name": "雅江",
                            "en": "yajiang"
                        },
                        {
                            "city_id": "CH271807",
                            "name": "道孚",
                            "en": "daofu"
                        },
                        {
                            "city_id": "CH271808",
                            "name": "炉霍",
                            "en": "luhuo"
                        },
                        {
                            "city_id": "CH271809",
                            "name": "新龙",
                            "en": "xinlong"
                        },
                        {
                            "city_id": "CH271810",
                            "name": "德格",
                            "en": "dege"
                        },
                        {
                            "city_id": "CH271811",
                            "name": "白玉",
                            "en": "baiyu"
                        },
                        {
                            "city_id": "CH271812",
                            "name": "石渠",
                            "en": "dege"
                        },
                        {
                            "city_id": "CH271813",
                            "name": "色达",
                            "en": "seda"
                        },
                        {
                            "city_id": "CH271814",
                            "name": "理塘",
                            "en": "Litang"
                        },
                        {
                            "city_id": "CH271815",
                            "name": "巴塘",
                            "en": "litang"
                        },
                        {
                            "city_id": "CH271816",
                            "name": "乡城",
                            "en": "xiangcheng"
                        },
                        {
                            "city_id": "CH271817",
                            "name": "稻城",
                            "en": "daocheng"
                        },
                        {
                            "city_id": "CH271818",
                            "name": "得荣",
                            "en": "derong"
                        }
                    ]
                },
                {
                    "city_id": "CH2719",
                    "name": "阿坝",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH271901",
                            "name": "阿坝",
                            "en": "aba"
                        },
                        {
                            "city_id": "CH271902",
                            "name": "汶川",
                            "en": "wenchuan"
                        },
                        {
                            "city_id": "CH271903",
                            "name": "理县",
                            "en": "lixian"
                        },
                        {
                            "city_id": "CH271904",
                            "name": "茂县",
                            "en": "maoxian"
                        },
                        {
                            "city_id": "CH271905",
                            "name": "松潘",
                            "en": "songfan"
                        },
                        {
                            "city_id": "CH271906",
                            "name": "九寨沟",
                            "en": "jiuzhaigou"
                        },
                        {
                            "city_id": "CH271907",
                            "name": "金川",
                            "en": "jinchuan"
                        },
                        {
                            "city_id": "CH271908",
                            "name": "小金",
                            "en": "xiaojin"
                        },
                        {
                            "city_id": "CH271909",
                            "name": "黑水",
                            "en": "heishui"
                        },
                        {
                            "city_id": "CH271910",
                            "name": "马尔康",
                            "en": "maerkang"
                        },
                        {
                            "city_id": "CH271911",
                            "name": "壤塘",
                            "en": "rangtang"
                        },
                        {
                            "city_id": "CH271912",
                            "name": "若尔盖",
                            "en": "ruoergai"
                        },
                        {
                            "city_id": "CH271913",
                            "name": "红原",
                            "en": "hongyuan"
                        }
                    ]
                },
                {
                    "city_id": "CH2720",
                    "name": "德阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH272001",
                            "name": "德阳",
                            "en": "Deyang"
                        },
                        {
                            "city_id": "CH272002",
                            "name": "中江",
                            "en": "zhongjiang"
                        },
                        {
                            "city_id": "CH272003",
                            "name": "广汉",
                            "en": "guanghan"
                        },
                        {
                            "city_id": "CH272004",
                            "name": "什邡",
                            "en": "shifang"
                        },
                        {
                            "city_id": "CH272005",
                            "name": "绵竹",
                            "en": "mianzhu"
                        },
                        {
                            "city_id": "CH272006",
                            "name": "罗江",
                            "en": "luojiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2721",
                    "name": "广元",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH272101",
                            "name": "广元",
                            "en": "Guangyuan"
                        },
                        {
                            "city_id": "CH272102",
                            "name": "旺苍",
                            "en": "wangcang"
                        },
                        {
                            "city_id": "CH272103",
                            "name": "青川",
                            "en": "qingchuan"
                        },
                        {
                            "city_id": "CH272104",
                            "name": "剑阁",
                            "en": "jiange"
                        },
                        {
                            "city_id": "CH272105",
                            "name": "苍溪",
                            "en": "cangxi"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH28",
            "name": "广东",
            "en": "",
            "list": [
                {
                    "city_id": "CH2801",
                    "name": "广州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280101",
                            "name": "广州",
                            "en": "Guangzhou"
                        },
                        {
                            "city_id": "CH280102",
                            "name": "番禺",
                            "en": "panyu"
                        },
                        {
                            "city_id": "CH280103",
                            "name": "从化",
                            "en": "conghua"
                        },
                        {
                            "city_id": "CH280104",
                            "name": "增城",
                            "en": "zengcheng"
                        },
                        {
                            "city_id": "CH280105",
                            "name": "花都",
                            "en": "huadu"
                        }
                    ]
                },
                {
                    "city_id": "CH2802",
                    "name": "韶关",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280201",
                            "name": "韶关",
                            "en": "Shaoguan"
                        },
                        {
                            "city_id": "CH280202",
                            "name": "乳源",
                            "en": "ruyuan"
                        },
                        {
                            "city_id": "CH280203",
                            "name": "始兴",
                            "en": "shixing"
                        },
                        {
                            "city_id": "CH280204",
                            "name": "翁源",
                            "en": "wengyuan"
                        },
                        {
                            "city_id": "CH280205",
                            "name": "乐昌",
                            "en": "lechang"
                        },
                        {
                            "city_id": "CH280206",
                            "name": "仁化",
                            "en": "renhua"
                        },
                        {
                            "city_id": "CH280207",
                            "name": "南雄",
                            "en": "nanxiong"
                        },
                        {
                            "city_id": "CH280208",
                            "name": "新丰",
                            "en": "xinfeng"
                        },
                        {
                            "city_id": "CH280209",
                            "name": "曲江",
                            "en": "qujiang"
                        },
                        {
                            "city_id": "CH280210",
                            "name": "浈江",
                            "en": "zhenjiang"
                        },
                        {
                            "city_id": "CH280211",
                            "name": "武江",
                            "en": "wujiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2803",
                    "name": "惠州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280301",
                            "name": "惠州",
                            "en": "Huizhou"
                        },
                        {
                            "city_id": "CH280302",
                            "name": "博罗",
                            "en": "boluo"
                        },
                        {
                            "city_id": "CH280303",
                            "name": "惠阳",
                            "en": "huiyang"
                        },
                        {
                            "city_id": "CH280304",
                            "name": "惠东",
                            "en": "huidong"
                        },
                        {
                            "city_id": "CH280305",
                            "name": "龙门",
                            "en": "longmen"
                        }
                    ]
                },
                {
                    "city_id": "CH2804",
                    "name": "梅州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280401",
                            "name": "梅州",
                            "en": "Meizhou"
                        },
                        {
                            "city_id": "CH280402",
                            "name": "兴宁",
                            "en": "xingning"
                        },
                        {
                            "city_id": "CH280403",
                            "name": "蕉岭",
                            "en": "jiaoling"
                        },
                        {
                            "city_id": "CH280404",
                            "name": "大埔",
                            "en": "dapu"
                        },
                        {
                            "city_id": "CH280406",
                            "name": "丰顺",
                            "en": "fengshun"
                        },
                        {
                            "city_id": "CH280407",
                            "name": "平远",
                            "en": "pingyuan"
                        },
                        {
                            "city_id": "CH280408",
                            "name": "五华",
                            "en": "wuhua"
                        },
                        {
                            "city_id": "CH280409",
                            "name": "梅县",
                            "en": "meixian"
                        }
                    ]
                },
                {
                    "city_id": "CH2805",
                    "name": "汕头",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280501",
                            "name": "汕头",
                            "en": "Shantou"
                        },
                        {
                            "city_id": "CH280502",
                            "name": "潮阳",
                            "en": "chaoyang"
                        },
                        {
                            "city_id": "CH280503",
                            "name": "澄海",
                            "en": "chenghai"
                        },
                        {
                            "city_id": "CH280504",
                            "name": "南澳",
                            "en": "nanao"
                        }
                    ]
                },
                {
                    "city_id": "CH2806",
                    "name": "深圳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280601",
                            "name": "深圳",
                            "en": "Shenzhen"
                        }
                    ]
                },
                {
                    "city_id": "CH2807",
                    "name": "珠海",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280701",
                            "name": "珠海",
                            "en": "zhuhai"
                        },
                        {
                            "city_id": "CH280702",
                            "name": "斗门",
                            "en": "doumen"
                        },
                        {
                            "city_id": "CH280703",
                            "name": "金湾",
                            "en": "jinwan"
                        }
                    ]
                },
                {
                    "city_id": "CH2808",
                    "name": "佛山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280800",
                            "name": "佛山",
                            "en": "Foshan"
                        },
                        {
                            "city_id": "CH280801",
                            "name": "顺德",
                            "en": "shunde"
                        },
                        {
                            "city_id": "CH280802",
                            "name": "三水",
                            "en": "sanshui"
                        },
                        {
                            "city_id": "CH280803",
                            "name": "南海",
                            "en": "nanhai"
                        },
                        {
                            "city_id": "CH280804",
                            "name": "高明",
                            "en": "gaoming"
                        }
                    ]
                },
                {
                    "city_id": "CH2809",
                    "name": "肇庆",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH280901",
                            "name": "肇庆",
                            "en": "zhaoqing"
                        },
                        {
                            "city_id": "CH280902",
                            "name": "广宁",
                            "en": "guangning"
                        },
                        {
                            "city_id": "CH280903",
                            "name": "四会",
                            "en": "sihui"
                        },
                        {
                            "city_id": "CH280905",
                            "name": "德庆",
                            "en": "deqing"
                        },
                        {
                            "city_id": "CH280906",
                            "name": "怀集",
                            "en": "huaiji"
                        },
                        {
                            "city_id": "CH280907",
                            "name": "封开",
                            "en": "fengkai"
                        },
                        {
                            "city_id": "CH280908",
                            "name": "高要",
                            "en": "gaoyao"
                        }
                    ]
                },
                {
                    "city_id": "CH2810",
                    "name": "湛江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281001",
                            "name": "湛江",
                            "en": "Zhanjiang"
                        },
                        {
                            "city_id": "CH281002",
                            "name": "吴川",
                            "en": "wuchuan"
                        },
                        {
                            "city_id": "CH281003",
                            "name": "雷州",
                            "en": "leizhou"
                        },
                        {
                            "city_id": "CH281004",
                            "name": "徐闻",
                            "en": "xuwen"
                        },
                        {
                            "city_id": "CH281005",
                            "name": "廉江",
                            "en": "lianjiang"
                        },
                        {
                            "city_id": "CH281006",
                            "name": "赤坎",
                            "en": "chikan"
                        },
                        {
                            "city_id": "CH281007",
                            "name": "遂溪",
                            "en": "suixi"
                        },
                        {
                            "city_id": "CH281008",
                            "name": "坡头",
                            "en": "potou"
                        },
                        {
                            "city_id": "CH281009",
                            "name": "霞山",
                            "en": "xiashan"
                        },
                        {
                            "city_id": "CH281010",
                            "name": "麻章",
                            "en": "mazhang"
                        }
                    ]
                },
                {
                    "city_id": "CH2811",
                    "name": "江门",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281101",
                            "name": "江门",
                            "en": "Jiangmen"
                        },
                        {
                            "city_id": "CH281103",
                            "name": "开平",
                            "en": "kaiping"
                        },
                        {
                            "city_id": "CH281104",
                            "name": "新会",
                            "en": "xinhui"
                        },
                        {
                            "city_id": "CH281105",
                            "name": "恩平",
                            "en": "enping"
                        },
                        {
                            "city_id": "CH281106",
                            "name": "台山",
                            "en": "taishan"
                        },
                        {
                            "city_id": "CH281107",
                            "name": "蓬江",
                            "en": "pengjiang"
                        },
                        {
                            "city_id": "CH281108",
                            "name": "鹤山",
                            "en": "heshan"
                        },
                        {
                            "city_id": "CH281109",
                            "name": "江海",
                            "en": "jianghai"
                        }
                    ]
                },
                {
                    "city_id": "CH2812",
                    "name": "河源",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281201",
                            "name": "河源",
                            "en": "Heyuan"
                        },
                        {
                            "city_id": "CH281202",
                            "name": "紫金",
                            "en": "zijin"
                        },
                        {
                            "city_id": "CH281203",
                            "name": "连平",
                            "en": "lianping"
                        },
                        {
                            "city_id": "CH281204",
                            "name": "和平",
                            "en": "heping"
                        },
                        {
                            "city_id": "CH281205",
                            "name": "龙川",
                            "en": "longchuan"
                        },
                        {
                            "city_id": "CH281206",
                            "name": "东源",
                            "en": "dongyuan"
                        }
                    ]
                },
                {
                    "city_id": "CH2813",
                    "name": "清远",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281301",
                            "name": "清远",
                            "en": "qingyuan"
                        },
                        {
                            "city_id": "CH281302",
                            "name": "连南",
                            "en": "liannan"
                        },
                        {
                            "city_id": "CH281303",
                            "name": "连州",
                            "en": "lianzhou"
                        },
                        {
                            "city_id": "CH281304",
                            "name": "连山",
                            "en": "lianshan"
                        },
                        {
                            "city_id": "CH281305",
                            "name": "阳山",
                            "en": "yangshan"
                        },
                        {
                            "city_id": "CH281306",
                            "name": "佛冈",
                            "en": "fogang"
                        },
                        {
                            "city_id": "CH281307",
                            "name": "英德",
                            "en": "yingde"
                        },
                        {
                            "city_id": "CH281308",
                            "name": "清新",
                            "en": "qingxin"
                        }
                    ]
                },
                {
                    "city_id": "CH2814",
                    "name": "云浮",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281401",
                            "name": "云浮",
                            "en": "yunfu"
                        },
                        {
                            "city_id": "CH281402",
                            "name": "罗定",
                            "en": "luoding"
                        },
                        {
                            "city_id": "CH281403",
                            "name": "新兴",
                            "en": "xinxing"
                        },
                        {
                            "city_id": "CH281404",
                            "name": "郁南",
                            "en": "yunan"
                        },
                        {
                            "city_id": "CH281406",
                            "name": "云安",
                            "en": "yunan"
                        }
                    ]
                },
                {
                    "city_id": "CH2815",
                    "name": "潮州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281501",
                            "name": "潮州",
                            "en": "Chaozhou"
                        },
                        {
                            "city_id": "CH281502",
                            "name": "饶平",
                            "en": "raoping"
                        },
                        {
                            "city_id": "CH281503",
                            "name": "潮安",
                            "en": "chaoan"
                        }
                    ]
                },
                {
                    "city_id": "CH2816",
                    "name": "东莞",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281601",
                            "name": "东莞",
                            "en": "Dongguan"
                        }
                    ]
                },
                {
                    "city_id": "CH2817",
                    "name": "中山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281701",
                            "name": "中山",
                            "en": "zhongshan"
                        }
                    ]
                },
                {
                    "city_id": "CH2818",
                    "name": "阳江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281801",
                            "name": "阳江",
                            "en": "Yangjiang"
                        },
                        {
                            "city_id": "CH281802",
                            "name": "阳春",
                            "en": "yangchun"
                        },
                        {
                            "city_id": "CH281803",
                            "name": "阳东",
                            "en": "yangdong"
                        },
                        {
                            "city_id": "CH281804",
                            "name": "阳西",
                            "en": "yangxi"
                        }
                    ]
                },
                {
                    "city_id": "CH2819",
                    "name": "揭阳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH281901",
                            "name": "揭阳",
                            "en": "Jieyang"
                        },
                        {
                            "city_id": "CH281902",
                            "name": "揭西",
                            "en": "jiexi"
                        },
                        {
                            "city_id": "CH281903",
                            "name": "普宁",
                            "en": "puning"
                        },
                        {
                            "city_id": "CH281904",
                            "name": "惠来",
                            "en": "huilai"
                        },
                        {
                            "city_id": "CH281905",
                            "name": "揭东",
                            "en": "jiedong"
                        }
                    ]
                },
                {
                    "city_id": "CH2820",
                    "name": "茂名",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH282001",
                            "name": "茂名",
                            "en": "Maoming"
                        },
                        {
                            "city_id": "CH282002",
                            "name": "高州",
                            "en": "Gaozhou"
                        },
                        {
                            "city_id": "CH282003",
                            "name": "化州",
                            "en": "Huazhou"
                        },
                        {
                            "city_id": "CH282004",
                            "name": "电白",
                            "en": "dianbai"
                        },
                        {
                            "city_id": "CH282005",
                            "name": "信宜",
                            "en": "Xinyi"
                        },
                        {
                            "city_id": "CH282006",
                            "name": "茂港",
                            "en": "maogang"
                        }
                    ]
                },
                {
                    "city_id": "CH2821",
                    "name": "汕尾",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH282101",
                            "name": "汕尾",
                            "en": "Shanwei"
                        },
                        {
                            "city_id": "CH282102",
                            "name": "海丰",
                            "en": "haifeng"
                        },
                        {
                            "city_id": "CH282103",
                            "name": "陆丰",
                            "en": "lufeng"
                        },
                        {
                            "city_id": "CH282104",
                            "name": "陆河",
                            "en": "luhe"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH29",
            "name": "云南",
            "en": "",
            "list": [
                {
                    "city_id": "CH2901",
                    "name": "昆明",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290101",
                            "name": "昆明",
                            "en": "Kunming"
                        },
                        {
                            "city_id": "CH290103",
                            "name": "东川",
                            "en": "dongchuan"
                        },
                        {
                            "city_id": "CH290104",
                            "name": "寻甸",
                            "en": "xundian"
                        },
                        {
                            "city_id": "CH290105",
                            "name": "晋宁",
                            "en": "jinning"
                        },
                        {
                            "city_id": "CH290106",
                            "name": "宜良",
                            "en": "yiliang"
                        },
                        {
                            "city_id": "CH290107",
                            "name": "石林",
                            "en": "shilin"
                        },
                        {
                            "city_id": "CH290108",
                            "name": "呈贡",
                            "en": "chenggong"
                        },
                        {
                            "city_id": "CH290109",
                            "name": "富民",
                            "en": "fumin"
                        },
                        {
                            "city_id": "CH290110",
                            "name": "嵩明",
                            "en": "songming"
                        },
                        {
                            "city_id": "CH290111",
                            "name": "禄劝",
                            "en": "luquan"
                        },
                        {
                            "city_id": "CH290112",
                            "name": "安宁",
                            "en": "anning"
                        },
                        {
                            "city_id": "CH290113",
                            "name": "太华山",
                            "en": "taihuashan"
                        }
                    ]
                },
                {
                    "city_id": "CH2902",
                    "name": "大理",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290201",
                            "name": "大理",
                            "en": "Dali"
                        },
                        {
                            "city_id": "CH290202",
                            "name": "云龙",
                            "en": "yunlong"
                        },
                        {
                            "city_id": "CH290203",
                            "name": "漾濞",
                            "en": "yangbi"
                        },
                        {
                            "city_id": "CH290204",
                            "name": "永平",
                            "en": "yongping"
                        },
                        {
                            "city_id": "CH290205",
                            "name": "宾川",
                            "en": "binchuan"
                        },
                        {
                            "city_id": "CH290206",
                            "name": "弥渡",
                            "en": "midu"
                        },
                        {
                            "city_id": "CH290207",
                            "name": "祥云",
                            "en": "xiangyun"
                        },
                        {
                            "city_id": "CH290208",
                            "name": "巍山",
                            "en": "weishan"
                        },
                        {
                            "city_id": "CH290209",
                            "name": "剑川",
                            "en": "jianchuan"
                        },
                        {
                            "city_id": "CH290210",
                            "name": "洱源",
                            "en": "eryuan"
                        },
                        {
                            "city_id": "CH290211",
                            "name": "鹤庆",
                            "en": "heqing"
                        },
                        {
                            "city_id": "CH290212",
                            "name": "南涧",
                            "en": "nanjian"
                        }
                    ]
                },
                {
                    "city_id": "CH2903",
                    "name": "红河",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290301",
                            "name": "红河",
                            "en": "honghe"
                        },
                        {
                            "city_id": "CH290302",
                            "name": "石屏",
                            "en": "shiping"
                        },
                        {
                            "city_id": "CH290303",
                            "name": "建水",
                            "en": "jianshui"
                        },
                        {
                            "city_id": "CH290304",
                            "name": "弥勒",
                            "en": "mile"
                        },
                        {
                            "city_id": "CH290305",
                            "name": "元阳",
                            "en": "yuanyang"
                        },
                        {
                            "city_id": "CH290306",
                            "name": "绿春",
                            "en": "lvchun"
                        },
                        {
                            "city_id": "CH290307",
                            "name": "开远",
                            "en": "kaiyuan"
                        },
                        {
                            "city_id": "CH290308",
                            "name": "个旧",
                            "en": "gejiu"
                        },
                        {
                            "city_id": "CH290309",
                            "name": "蒙自",
                            "en": "mengzi"
                        },
                        {
                            "city_id": "CH290310",
                            "name": "屏边",
                            "en": "pingbian"
                        },
                        {
                            "city_id": "CH290311",
                            "name": "泸西",
                            "en": "Luxi"
                        },
                        {
                            "city_id": "CH290312",
                            "name": "金平",
                            "en": "jinping"
                        },
                        {
                            "city_id": "CH290313",
                            "name": "河口",
                            "en": "hekou"
                        }
                    ]
                },
                {
                    "city_id": "CH2904",
                    "name": "曲靖",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290401",
                            "name": "曲靖",
                            "en": "Qujing"
                        },
                        {
                            "city_id": "CH290402",
                            "name": "沾益",
                            "en": "zhanyi"
                        },
                        {
                            "city_id": "CH290403",
                            "name": "陆良",
                            "en": "luliang"
                        },
                        {
                            "city_id": "CH290404",
                            "name": "富源",
                            "en": "fuyuan"
                        },
                        {
                            "city_id": "CH290405",
                            "name": "马龙",
                            "en": "malong"
                        },
                        {
                            "city_id": "CH290406",
                            "name": "师宗",
                            "en": "shizong"
                        },
                        {
                            "city_id": "CH290407",
                            "name": "罗平",
                            "en": "luoping"
                        },
                        {
                            "city_id": "CH290408",
                            "name": "会泽",
                            "en": "huize"
                        },
                        {
                            "city_id": "CH290409",
                            "name": "宣威",
                            "en": "xuanwei"
                        }
                    ]
                },
                {
                    "city_id": "CH2905",
                    "name": "保山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290501",
                            "name": "保山",
                            "en": "Baoshan"
                        },
                        {
                            "city_id": "CH290503",
                            "name": "龙陵",
                            "en": "longling"
                        },
                        {
                            "city_id": "CH290504",
                            "name": "施甸",
                            "en": "shidian"
                        },
                        {
                            "city_id": "CH290505",
                            "name": "昌宁",
                            "en": "changning"
                        },
                        {
                            "city_id": "CH290506",
                            "name": "腾冲",
                            "en": "tengchong"
                        }
                    ]
                },
                {
                    "city_id": "CH2906",
                    "name": "文山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290601",
                            "name": "文山",
                            "en": "wenshan"
                        },
                        {
                            "city_id": "CH290602",
                            "name": "西畴",
                            "en": "xichou"
                        },
                        {
                            "city_id": "CH290603",
                            "name": "马关",
                            "en": "maguan"
                        },
                        {
                            "city_id": "CH290604",
                            "name": "麻栗坡",
                            "en": "malipo"
                        },
                        {
                            "city_id": "CH290605",
                            "name": "砚山",
                            "en": "yanshan"
                        },
                        {
                            "city_id": "CH290606",
                            "name": "丘北",
                            "en": "qiubei"
                        },
                        {
                            "city_id": "CH290607",
                            "name": "广南",
                            "en": "guangnan"
                        },
                        {
                            "city_id": "CH290608",
                            "name": "富宁",
                            "en": "funing"
                        }
                    ]
                },
                {
                    "city_id": "CH2907",
                    "name": "玉溪",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290701",
                            "name": "玉溪",
                            "en": "yuxi"
                        },
                        {
                            "city_id": "CH290702",
                            "name": "澄江",
                            "en": "chengjiang"
                        },
                        {
                            "city_id": "CH290703",
                            "name": "江川",
                            "en": "jiangchuan"
                        },
                        {
                            "city_id": "CH290704",
                            "name": "通海",
                            "en": "tonghai"
                        },
                        {
                            "city_id": "CH290705",
                            "name": "华宁",
                            "en": "huaning"
                        },
                        {
                            "city_id": "CH290706",
                            "name": "新平",
                            "en": "xinping"
                        },
                        {
                            "city_id": "CH290707",
                            "name": "易门",
                            "en": "yimen"
                        },
                        {
                            "city_id": "CH290708",
                            "name": "峨山",
                            "en": "eshan"
                        },
                        {
                            "city_id": "CH290709",
                            "name": "元江",
                            "en": "Yuanjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH2908",
                    "name": "楚雄",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290801",
                            "name": "楚雄",
                            "en": "Chuxiong"
                        },
                        {
                            "city_id": "CH290802",
                            "name": "大姚",
                            "en": "dayao"
                        },
                        {
                            "city_id": "CH290803",
                            "name": "元谋",
                            "en": "yuanmou"
                        },
                        {
                            "city_id": "CH290804",
                            "name": "姚安",
                            "en": "yaoan"
                        },
                        {
                            "city_id": "CH290805",
                            "name": "牟定",
                            "en": "mouding"
                        },
                        {
                            "city_id": "CH290806",
                            "name": "南华",
                            "en": "nanhua"
                        },
                        {
                            "city_id": "CH290807",
                            "name": "武定",
                            "en": "wuding"
                        },
                        {
                            "city_id": "CH290808",
                            "name": "禄丰",
                            "en": "lufeng"
                        },
                        {
                            "city_id": "CH290809",
                            "name": "双柏",
                            "en": "shsuangbai"
                        },
                        {
                            "city_id": "CH290810",
                            "name": "永仁",
                            "en": "yongren"
                        }
                    ]
                },
                {
                    "city_id": "CH2909",
                    "name": "普洱",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH290901",
                            "name": "普洱",
                            "en": "pu-erh"
                        },
                        {
                            "city_id": "CH290902",
                            "name": "景谷",
                            "en": "jinggu"
                        },
                        {
                            "city_id": "CH290903",
                            "name": "景东",
                            "en": "jingdong"
                        },
                        {
                            "city_id": "CH290904",
                            "name": "澜沧",
                            "en": "lancang"
                        },
                        {
                            "city_id": "CH290906",
                            "name": "墨江",
                            "en": "mojiang"
                        },
                        {
                            "city_id": "CH290907",
                            "name": "江城",
                            "en": "jiangcheng"
                        },
                        {
                            "city_id": "CH290908",
                            "name": "孟连",
                            "en": "menglian"
                        },
                        {
                            "city_id": "CH290909",
                            "name": "西盟",
                            "en": "ximeng"
                        },
                        {
                            "city_id": "CH290911",
                            "name": "镇沅",
                            "en": "zhenyuan"
                        },
                        {
                            "city_id": "CH290912",
                            "name": "宁洱",
                            "en": "ninger"
                        }
                    ]
                },
                {
                    "city_id": "CH2910",
                    "name": "昭通",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH291001",
                            "name": "昭通",
                            "en": "Zhaotong"
                        },
                        {
                            "city_id": "CH291002",
                            "name": "鲁甸",
                            "en": "ludian"
                        },
                        {
                            "city_id": "CH291003",
                            "name": "彝良",
                            "en": "yiliang"
                        },
                        {
                            "city_id": "CH291004",
                            "name": "镇雄",
                            "en": "zhenxiong"
                        },
                        {
                            "city_id": "CH291005",
                            "name": "威信",
                            "en": "weixin"
                        },
                        {
                            "city_id": "CH291006",
                            "name": "巧家",
                            "en": "qiaojia"
                        },
                        {
                            "city_id": "CH291007",
                            "name": "绥江",
                            "en": "suijiang"
                        },
                        {
                            "city_id": "CH291008",
                            "name": "永善",
                            "en": "yongshan"
                        },
                        {
                            "city_id": "CH291009",
                            "name": "盐津",
                            "en": "yanjin"
                        },
                        {
                            "city_id": "CH291010",
                            "name": "大关",
                            "en": "daguan"
                        },
                        {
                            "city_id": "CH291011",
                            "name": "水富",
                            "en": "shuifu"
                        }
                    ]
                },
                {
                    "city_id": "CH2911",
                    "name": "临沧",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH291101",
                            "name": "临沧",
                            "en": "lincang"
                        },
                        {
                            "city_id": "CH291102",
                            "name": "沧源",
                            "en": "cangyuan"
                        },
                        {
                            "city_id": "CH291103",
                            "name": "耿马",
                            "en": "gengma"
                        },
                        {
                            "city_id": "CH291104",
                            "name": "双江",
                            "en": "shuangjiang"
                        },
                        {
                            "city_id": "CH291105",
                            "name": "凤庆",
                            "en": "fengqing"
                        },
                        {
                            "city_id": "CH291106",
                            "name": "永德",
                            "en": "yongde"
                        },
                        {
                            "city_id": "CH291107",
                            "name": "云县",
                            "en": "yunxian"
                        },
                        {
                            "city_id": "CH291108",
                            "name": "镇康",
                            "en": "zhenkang"
                        }
                    ]
                },
                {
                    "city_id": "CH2912",
                    "name": "怒江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH291201",
                            "name": "怒江",
                            "en": "nujiang"
                        },
                        {
                            "city_id": "CH291203",
                            "name": "福贡",
                            "en": "fugong"
                        },
                        {
                            "city_id": "CH291204",
                            "name": "兰坪",
                            "en": "lanping"
                        },
                        {
                            "city_id": "CH291205",
                            "name": "泸水",
                            "en": "lushui"
                        },
                        {
                            "city_id": "CH291206",
                            "name": "六库",
                            "en": "liuku"
                        },
                        {
                            "city_id": "CH291207",
                            "name": "贡山",
                            "en": "gongshan"
                        }
                    ]
                },
                {
                    "city_id": "CH2913",
                    "name": "迪庆",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH291301",
                            "name": "香格里拉",
                            "en": "Shangri-La"
                        },
                        {
                            "city_id": "CH291302",
                            "name": "德钦",
                            "en": "deqin"
                        },
                        {
                            "city_id": "CH291303",
                            "name": "维西",
                            "en": "weixi"
                        },
                        {
                            "city_id": "CH291304",
                            "name": "中甸",
                            "en": "zhongdian"
                        }
                    ]
                },
                {
                    "city_id": "CH2914",
                    "name": "丽江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH291401",
                            "name": "丽江",
                            "en": "lijiang"
                        },
                        {
                            "city_id": "CH291402",
                            "name": "永胜",
                            "en": "yongsheng"
                        },
                        {
                            "city_id": "CH291403",
                            "name": "华坪",
                            "en": "huaping"
                        },
                        {
                            "city_id": "CH291404",
                            "name": "宁蒗",
                            "en": "ninglang"
                        }
                    ]
                },
                {
                    "city_id": "CH2915",
                    "name": "德宏",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH291501",
                            "name": "德宏",
                            "en": "dehong"
                        },
                        {
                            "city_id": "CH291503",
                            "name": "陇川",
                            "en": "longchuan"
                        },
                        {
                            "city_id": "CH291504",
                            "name": "盈江",
                            "en": "yingjiang"
                        },
                        {
                            "city_id": "CH291506",
                            "name": "瑞丽",
                            "en": "ruili"
                        },
                        {
                            "city_id": "CH291507",
                            "name": "梁河",
                            "en": "lianghe"
                        },
                        {
                            "city_id": "CH291508",
                            "name": "芒市",
                            "en": "mangshi"
                        }
                    ]
                },
                {
                    "city_id": "CH2916",
                    "name": "西双版纳",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH291601",
                            "name": "景洪",
                            "en": "Jinghong"
                        },
                        {
                            "city_id": "CH291603",
                            "name": "勐海",
                            "en": "menghai"
                        },
                        {
                            "city_id": "CH291605",
                            "name": "勐腊",
                            "en": "Mengla"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH30",
            "name": "广西",
            "en": "",
            "list": [
                {
                    "city_id": "CH3001",
                    "name": "南宁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300101",
                            "name": "南宁",
                            "en": "Nanning"
                        },
                        {
                            "city_id": "CH300103",
                            "name": "邕宁",
                            "en": "yongning"
                        },
                        {
                            "city_id": "CH300104",
                            "name": "横县",
                            "en": "hengxian"
                        },
                        {
                            "city_id": "CH300105",
                            "name": "隆安",
                            "en": "longan"
                        },
                        {
                            "city_id": "CH300106",
                            "name": "马山",
                            "en": "mashan"
                        },
                        {
                            "city_id": "CH300107",
                            "name": "上林",
                            "en": "shanglin"
                        },
                        {
                            "city_id": "CH300108",
                            "name": "武鸣",
                            "en": "wuming"
                        },
                        {
                            "city_id": "CH300109",
                            "name": "宾阳",
                            "en": "binyang"
                        }
                    ]
                },
                {
                    "city_id": "CH3002",
                    "name": "崇左",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300201",
                            "name": "崇左",
                            "en": "chongzuo"
                        },
                        {
                            "city_id": "CH300202",
                            "name": "天等",
                            "en": "tiandeng"
                        },
                        {
                            "city_id": "CH300203",
                            "name": "龙州",
                            "en": "Longzhou"
                        },
                        {
                            "city_id": "CH300204",
                            "name": "凭祥",
                            "en": "pingxiang"
                        },
                        {
                            "city_id": "CH300205",
                            "name": "大新",
                            "en": "daxin"
                        },
                        {
                            "city_id": "CH300206",
                            "name": "扶绥",
                            "en": "fusui"
                        },
                        {
                            "city_id": "CH300207",
                            "name": "宁明",
                            "en": "ningming"
                        }
                    ]
                },
                {
                    "city_id": "CH3003",
                    "name": "柳州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300301",
                            "name": "柳州",
                            "en": "Liuzhou"
                        },
                        {
                            "city_id": "CH300302",
                            "name": "柳城",
                            "en": "liucheng"
                        },
                        {
                            "city_id": "CH300304",
                            "name": "鹿寨",
                            "en": "luzhai"
                        },
                        {
                            "city_id": "CH300305",
                            "name": "柳江",
                            "en": "liujiang"
                        },
                        {
                            "city_id": "CH300306",
                            "name": "融安",
                            "en": "rongan"
                        },
                        {
                            "city_id": "CH300307",
                            "name": "融水",
                            "en": "rongshui"
                        },
                        {
                            "city_id": "CH300308",
                            "name": "三江",
                            "en": "sanjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH3004",
                    "name": "来宾",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300401",
                            "name": "来宾",
                            "en": "laibin"
                        },
                        {
                            "city_id": "CH300402",
                            "name": "忻城",
                            "en": "xincheng"
                        },
                        {
                            "city_id": "CH300403",
                            "name": "金秀",
                            "en": "jinxiu"
                        },
                        {
                            "city_id": "CH300404",
                            "name": "象州",
                            "en": "xiangzhou"
                        },
                        {
                            "city_id": "CH300405",
                            "name": "武宣",
                            "en": "wuxuan"
                        },
                        {
                            "city_id": "CH300406",
                            "name": "合山",
                            "en": "heshan"
                        }
                    ]
                },
                {
                    "city_id": "CH3005",
                    "name": "桂林",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300501",
                            "name": "桂林",
                            "en": "Guilin"
                        },
                        {
                            "city_id": "CH300503",
                            "name": "龙胜",
                            "en": "longsheng"
                        },
                        {
                            "city_id": "CH300504",
                            "name": "永福",
                            "en": "yongfu"
                        },
                        {
                            "city_id": "CH300505",
                            "name": "临桂",
                            "en": "lingui"
                        },
                        {
                            "city_id": "CH300506",
                            "name": "兴安",
                            "en": "xingan"
                        },
                        {
                            "city_id": "CH300507",
                            "name": "灵川",
                            "en": "lingchuan"
                        },
                        {
                            "city_id": "CH300508",
                            "name": "全州",
                            "en": "quanzhou"
                        },
                        {
                            "city_id": "CH300509",
                            "name": "灌阳",
                            "en": "guanyang"
                        },
                        {
                            "city_id": "CH300510",
                            "name": "阳朔",
                            "en": "Yangshuo"
                        },
                        {
                            "city_id": "CH300511",
                            "name": "恭城",
                            "en": "gongcheng"
                        },
                        {
                            "city_id": "CH300512",
                            "name": "平乐",
                            "en": "pingle"
                        },
                        {
                            "city_id": "CH300513",
                            "name": "荔浦",
                            "en": "lipu"
                        },
                        {
                            "city_id": "CH300514",
                            "name": "资源",
                            "en": "ziyuan"
                        }
                    ]
                },
                {
                    "city_id": "CH3006",
                    "name": "梧州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300601",
                            "name": "梧州",
                            "en": "Wuzhou"
                        },
                        {
                            "city_id": "CH300602",
                            "name": "藤县",
                            "en": "tengxian"
                        },
                        {
                            "city_id": "CH300604",
                            "name": "苍梧",
                            "en": "cangwu"
                        },
                        {
                            "city_id": "CH300605",
                            "name": "蒙山",
                            "en": "Mengshan"
                        },
                        {
                            "city_id": "CH300606",
                            "name": "岑溪",
                            "en": "cenxi"
                        }
                    ]
                },
                {
                    "city_id": "CH3007",
                    "name": "贺州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300701",
                            "name": "贺州",
                            "en": "hezhou"
                        },
                        {
                            "city_id": "CH300702",
                            "name": "昭平",
                            "en": "zhaoping"
                        },
                        {
                            "city_id": "CH300703",
                            "name": "富川",
                            "en": "fuchuan"
                        },
                        {
                            "city_id": "CH300704",
                            "name": "钟山",
                            "en": "zhongshan"
                        }
                    ]
                },
                {
                    "city_id": "CH3008",
                    "name": "贵港",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300801",
                            "name": "贵港",
                            "en": "guigang"
                        },
                        {
                            "city_id": "CH300802",
                            "name": "桂平",
                            "en": "guiping"
                        },
                        {
                            "city_id": "CH300803",
                            "name": "平南",
                            "en": "pingnan"
                        }
                    ]
                },
                {
                    "city_id": "CH3009",
                    "name": "玉林",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH300901",
                            "name": "玉林",
                            "en": "yulin"
                        },
                        {
                            "city_id": "CH300902",
                            "name": "博白",
                            "en": "bobai"
                        },
                        {
                            "city_id": "CH300903",
                            "name": "北流",
                            "en": "beiliu"
                        },
                        {
                            "city_id": "CH300904",
                            "name": "容县",
                            "en": "rongxian"
                        },
                        {
                            "city_id": "CH300905",
                            "name": "陆川",
                            "en": "luchuan"
                        },
                        {
                            "city_id": "CH300906",
                            "name": "兴业",
                            "en": "xingye"
                        }
                    ]
                },
                {
                    "city_id": "CH3010",
                    "name": "百色",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH301001",
                            "name": "百色",
                            "en": "Baise"
                        },
                        {
                            "city_id": "CH301002",
                            "name": "那坡",
                            "en": "napo"
                        },
                        {
                            "city_id": "CH301003",
                            "name": "田阳",
                            "en": "tianyang"
                        },
                        {
                            "city_id": "CH301004",
                            "name": "德保",
                            "en": "debao"
                        },
                        {
                            "city_id": "CH301005",
                            "name": "靖西",
                            "en": "jingxi"
                        },
                        {
                            "city_id": "CH301006",
                            "name": "田东",
                            "en": "tiandong"
                        },
                        {
                            "city_id": "CH301007",
                            "name": "平果",
                            "en": "pingguo"
                        },
                        {
                            "city_id": "CH301008",
                            "name": "隆林",
                            "en": "longlin"
                        },
                        {
                            "city_id": "CH301009",
                            "name": "西林",
                            "en": "xilin"
                        },
                        {
                            "city_id": "CH301010",
                            "name": "乐业",
                            "en": "leye"
                        },
                        {
                            "city_id": "CH301011",
                            "name": "凌云",
                            "en": "lingyun"
                        },
                        {
                            "city_id": "CH301012",
                            "name": "田林",
                            "en": "tianlin"
                        }
                    ]
                },
                {
                    "city_id": "CH3011",
                    "name": "钦州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH301101",
                            "name": "钦州",
                            "en": "Qinzhou"
                        },
                        {
                            "city_id": "CH301102",
                            "name": "浦北",
                            "en": "pubei"
                        },
                        {
                            "city_id": "CH301103",
                            "name": "灵山",
                            "en": "lingshan"
                        }
                    ]
                },
                {
                    "city_id": "CH3012",
                    "name": "河池",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH301201",
                            "name": "河池",
                            "en": "Hechi"
                        },
                        {
                            "city_id": "CH301202",
                            "name": "天峨",
                            "en": "tiane"
                        },
                        {
                            "city_id": "CH301203",
                            "name": "东兰",
                            "en": "donglan"
                        },
                        {
                            "city_id": "CH301204",
                            "name": "巴马",
                            "en": "bama"
                        },
                        {
                            "city_id": "CH301205",
                            "name": "环江",
                            "en": "huanjiang"
                        },
                        {
                            "city_id": "CH301206",
                            "name": "罗城",
                            "en": "luocheng"
                        },
                        {
                            "city_id": "CH301207",
                            "name": "宜州",
                            "en": "yizhou"
                        },
                        {
                            "city_id": "CH301208",
                            "name": "凤山",
                            "en": "fengshan"
                        },
                        {
                            "city_id": "CH301209",
                            "name": "南丹",
                            "en": "nandan"
                        },
                        {
                            "city_id": "CH301210",
                            "name": "都安",
                            "en": "duan"
                        },
                        {
                            "city_id": "CH301211",
                            "name": "大化",
                            "en": "dahua"
                        }
                    ]
                },
                {
                    "city_id": "CH3013",
                    "name": "北海",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH301301",
                            "name": "北海",
                            "en": "Beihai"
                        },
                        {
                            "city_id": "CH301302",
                            "name": "合浦",
                            "en": "hepu"
                        },
                        {
                            "city_id": "CH301303",
                            "name": "涠洲岛",
                            "en": "weizhoudao"
                        }
                    ]
                },
                {
                    "city_id": "CH3014",
                    "name": "防城港",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH301401",
                            "name": "防城港",
                            "en": "fangchenggang"
                        },
                        {
                            "city_id": "CH301402",
                            "name": "上思",
                            "en": "shangsi"
                        },
                        {
                            "city_id": "CH301403",
                            "name": "东兴",
                            "en": "dongxing"
                        },
                        {
                            "city_id": "CH301405",
                            "name": "防城",
                            "en": "fangcheng"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH31",
            "name": "海南",
            "en": "",
            "list": [
                {
                    "city_id": "CH3101",
                    "name": "海口",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310101",
                            "name": "海口",
                            "en": "haikou"
                        }
                    ]
                },
                {
                    "city_id": "CH3102",
                    "name": "白沙",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310201",
                            "name": "白沙",
                            "en": "baisha"
                        }
                    ]
                },
                {
                    "city_id": "CH3103",
                    "name": "保亭",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310301",
                            "name": "保亭",
                            "en": "baoting"
                        }
                    ]
                },
                {
                    "city_id": "CH3104",
                    "name": "昌江",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310401",
                            "name": "昌江",
                            "en": "changjiang"
                        }
                    ]
                },
                {
                    "city_id": "CH3105",
                    "name": "澄迈",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310501",
                            "name": "澄迈",
                            "en": "chengmai"
                        }
                    ]
                },
                {
                    "city_id": "CH3106",
                    "name": "定安",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310601",
                            "name": "定安",
                            "en": "dingan"
                        }
                    ]
                },
                {
                    "city_id": "CH3107",
                    "name": "东方",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310701",
                            "name": "东方",
                            "en": "dongfang"
                        }
                    ]
                },
                {
                    "city_id": "CH3108",
                    "name": "乐东",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310801",
                            "name": "乐东",
                            "en": "ledong"
                        }
                    ]
                },
                {
                    "city_id": "CH3109",
                    "name": "临高",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH310901",
                            "name": "临高",
                            "en": "lingao"
                        }
                    ]
                },
                {
                    "city_id": "CH3110",
                    "name": "陵水",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311001",
                            "name": "陵水",
                            "en": "lingshui"
                        }
                    ]
                },
                {
                    "city_id": "CH3111",
                    "name": "南沙",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311101",
                            "name": "南沙",
                            "en": "nansha"
                        }
                    ]
                },
                {
                    "city_id": "CH3112",
                    "name": "琼海",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311201",
                            "name": "琼海",
                            "en": "qionghai"
                        }
                    ]
                },
                {
                    "city_id": "CH3113",
                    "name": "琼中",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311301",
                            "name": "琼中",
                            "en": "qiongzhong"
                        }
                    ]
                },
                {
                    "city_id": "CH3114",
                    "name": "三亚",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311401",
                            "name": "三亚",
                            "en": "sanya"
                        }
                    ]
                },
                {
                    "city_id": "CH3115",
                    "name": "屯昌",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311501",
                            "name": "屯昌",
                            "en": "tunchang"
                        }
                    ]
                },
                {
                    "city_id": "CH3116",
                    "name": "万宁",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311601",
                            "name": "万宁",
                            "en": "wanning"
                        }
                    ]
                },
                {
                    "city_id": "CH3117",
                    "name": "文昌",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311701",
                            "name": "文昌",
                            "en": "wenchang"
                        }
                    ]
                },
                {
                    "city_id": "CH3118",
                    "name": "五指山",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311801",
                            "name": "五指山",
                            "en": "wuzhishan"
                        }
                    ]
                },
                {
                    "city_id": "CH3119",
                    "name": "西沙",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH311901",
                            "name": "西沙",
                            "en": "xisha"
                        }
                    ]
                },
                {
                    "city_id": "CH3120",
                    "name": "儋州",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH312001",
                            "name": "儋州",
                            "en": "danzhou"
                        }
                    ]
                },
                {
                    "city_id": "CH3121",
                    "name": "中沙",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH312101",
                            "name": "中沙",
                            "en": "zhongsha"
                        }
                    ]
                }
            ]
        },
        {
            "city_id": "CH32",
            "name": "香港",
            "en": "",
            "list": [
                {
                    "city_id": "CH320101",
                    "name": "香港",
                    "en": "hongkong"
                }
            ]
        },
        {
            "city_id": "CH33",
            "name": "澳门",
            "en": "",
            "list": [
                {
                    "city_id": "CH330101",
                    "name": "澳门",
                    "en": "macao"
                }
            ]
        },
        {
            "city_id": "CH34",
            "name": "台湾",
            "en": "",
            "list": [
                {
                    "city_id": "CH3401",
                    "name": "台北",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH340101",
                            "name": "台北",
                            "en": "taipei"
                        },
                        {
                            "city_id": "CH340102",
                            "name": "桃园",
                            "en": "taoyuan"
                        },
                        {
                            "city_id": "CH340103",
                            "name": "新竹",
                            "en": "hsinchu"
                        },
                        {
                            "city_id": "CH340104",
                            "name": "宜兰",
                            "en": "yilan"
                        }
                    ]
                },
                {
                    "city_id": "CH3402",
                    "name": "高雄",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH340201",
                            "name": "高雄",
                            "en": "kaohsiung"
                        },
                        {
                            "city_id": "CH340202",
                            "name": "嘉义",
                            "en": "chiayi"
                        },
                        {
                            "city_id": "CH340203",
                            "name": "台南",
                            "en": "tainan"
                        },
                        {
                            "city_id": "CH340204",
                            "name": "台东",
                            "en": "Taidong"
                        },
                        {
                            "city_id": "CH340205",
                            "name": "屏东",
                            "en": "pingtung"
                        }
                    ]
                },
                {
                    "city_id": "CH3404",
                    "name": "台中",
                    "en": "",
                    "list": [
                        {
                            "city_id": "CH340401",
                            "name": "台中",
                            "en": "taichung"
                        },
                        {
                            "city_id": "CH340402",
                            "name": "苗栗",
                            "en": "miaoli"
                        },
                        {
                            "city_id": "CH340403",
                            "name": "彰化",
                            "en": "chang-hua"
                        },
                        {
                            "city_id": "CH340404",
                            "name": "南投",
                            "en": "nantou"
                        },
                        {
                            "city_id": "CH340405",
                            "name": "花莲",
                            "en": "Hualien"
                        },
                        {
                            "city_id": "CH340406",
                            "name": "云林",
                            "en": "yunlin"
                        }
                    ]
                }
            ]
        }
    ]
})


// 获取标签页面数据
Mock.mock('/api/proData', 'get', () => {

    return {
        status: 200,
        msg: '获取省市数据成功',
        proData,
        total: proData.length
    }
})

