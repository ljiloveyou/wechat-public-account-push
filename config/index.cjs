const USER_CONFIG = {
  USE_PASSAGE: 'wechat-test',
  

  MAX_PUSH_ONE_MINUTE: 5,
  SLEEP_TIME: 65000,

  SWITCH: {
    /** 每日天气 */
    weather: true,
    /** 节假日 */
    holidaytts: true,
    /** 每日N句 */
    CIBA: true,
    // 每日一言
    oneTalk: true,
    
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  IS_SHOW_COLOR: false,

  USERS: [
    {
      name: '宝宝',

      id: 'okUcl5zwtDGXylTlgk0JrTpMH_AU',

      useTemplateId: 'V4iatvNlBUcB02FO9Zzse5tV3Tq_EjR3Bwn4XDWNfGo',

      province: '甘肃省',

      city: '兰州市',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '02-11',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',

      openUrl: 'www.baidu.com',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号,没有*是阳历
        {
          type: '生日', name: '宝宝', year: '2000', date: '02-11',
        }
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-25' }
      ],
      },
  ],

  CALLBACK_TEMPLATE_ID: 'uZbwYMFxbbBn8EWU8ZkIcSOGheLtlnsenZdBpPo6nss',

  CALLBACK_USERS: [
    {

      name: '自己',

      id: 'okUcl55AQhkNaxoxbBM4EDVHzR0o',
    }
  ],
  }
module.exports = USER_CONFIG
