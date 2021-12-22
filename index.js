import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
import cheerio from 'cheerio'
// import weather from './other02.js'
import tempflex from './flex.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  const flex = JSON.parse(JSON.stringify(tempflex))

  if (event.message.type === 'text' && event.message.text === 'GPX軌跡檔使用教學') {
    try {
      flex.contents.contents.push(
        {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'GPX軌跡檔離線地圖教學',
                weight: 'bold',
                size: 'lg',
                align: 'center',
                color: '#4BA7BC',
                action: {
                  type: 'postback',
                  label: 'action',
                  data: 'hello'
                }
              },
              {
                type: 'separator',
                margin: 'sm'
              },
              {
                type: 'text',
                size: 'xs',
                wrap: true,
                margin: 'md',
                text: '山域事故救援統計與分析，山域事故案件以迷途或失聯者佔大宗，約59%。不管是獨攀或是組團登山，都會有迷途的可能性發生，最好的預防方式就是登山者自身要有使用離線地圖的觀念。'
              },
              {
                type: 'separator',
                margin: 'sm'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                    size: 'lg',
                    offsetTop: 'sm'
                  },
                  {
                    type: 'text',
                    text: '所以登山風險管理非常的重要!',
                    wrap: true,
                    size: 'md',
                    color: '#E20E0E',
                    weight: 'bold',
                    align: 'center'
                  },
                  {
                    type: 'icon',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                    size: 'lg',
                    offsetTop: 'sm'
                  }
                ],
                margin: 'xs'
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: '直接輸入想前往的地方,即可直接查詢gpx軌跡檔。',
                    wrap: true,
                    size: 'sm'
                  }
                ],
                paddingEnd: 'sm'
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: '範例:我想去雪山主峰東峰試著收尋 :',
                    wrap: true,
                    size: 'xs',
                    color: '#A7C1BF'
                  }
                ],
                paddingEnd: 'sm',
                margin: 'md'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '"雪主東","雪山主峰東峰"',
                    wrap: true,
                    size: 'xs',
                    color: '#A7C1BF'
                  },
                  {
                    type: 'text',
                    text: '點我GO!',
                    size: 'xxs',
                    position: 'absolute',
                    action: {
                      type: 'message',
                      label: '雪山主峰東峰',
                      text: '雪山主峰東峰'
                    },
                    color: '#DB4612',
                    offsetTop: 'xs',
                    offsetStart: '210px'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '打得越詳細搜到的資料越準確喔!',
                    align: 'center',
                    size: 'sm',
                    color: '#848484',
                    weight: 'bold',
                    margin: 'sm'
                  }
                ],
                margin: 'sm'
              },
              {
                type: 'separator',
                margin: 'sm'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://img.icons8.com/cotton/64/000000/landscape.png',
                    size: 'xxl',
                    offsetTop: 'sm',
                    margin: 'xxl',
                    offsetStart: '-20px'
                  },
                  {
                    type: 'text',
                    text: '作者碎碎念',
                    wrap: true,
                    size: 'sm',
                    align: 'start',
                    decoration: 'line-through',
                    color: '#858585',
                    offsetStart: '-20px'
                  }
                ],
                margin: 'xs'
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '登山風險管理是所有登山路線皆須注意，不管是一般步道、健行、百岳、郊山皆適用。若山友們想進階長程縱走，需要考慮的層面會更廣，像是水源判斷、糧食補給、天氣變化等，最主要的還是行前做好充足的準備，登山並沒有想象中危險。',
                    align: 'start',
                    size: 'xxs',
                    wrap: true,
                    color: '#848484'
                  }
                ],
                margin: 'sm'
              }
            ]
          },
          styles: {
            footer: {
              separator: true
            }
          }
        }
      )
      event.reply(flex)
      flex.altText = 'GPX軌跡檔離線地圖使用教學'
    } catch (error) {
      console.log(error)
      event.reply('錯誤')
    }
  } else if (event.message.type === 'text' && event.message.text === '使用教學') {
    try {
      flex.contents.contents.push(
        {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '使用教學',
                weight: 'bold',
                size: 'lg',
                align: 'center',
                color: '#4BA7BC'
              },
              {
                type: 'text',
                text: '台灣是一個多山的島嶼，在不到3.6萬平方公里的面積上，分佈超過268座海拔3,000公尺以上高峰，是全世界高山密度最高的島嶼之一。',
                align: 'start',
                size: 'xs',
                wrap: true
              },
              {
                type: 'separator',
                margin: 'sm'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://img.icons8.com/stickers/100/000000/spinach.png',
                    size: 'lg',
                    offsetTop: 'sm'
                  },
                  {
                    type: 'text',
                    text: '直接輸入想前往的地方,即可直接查詢gpx軌跡檔。',
                    wrap: true,
                    size: 'sm',
                    offsetStart: 'md'
                  }
                ],
                margin: 'md'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '範例:我想去雪山主峰東峰試著收尋',
                    wrap: true,
                    size: 'sm',
                    color: '#A7C1BF'
                  }
                ],
                paddingEnd: 'sm',
                paddingStart: '25px'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '"雪主東","雪山主峰東峰"',
                    wrap: true,
                    size: 'sm',
                    color: '#A7C1BF'
                  },
                  {
                    type: 'text',
                    text: '點我GO!',
                    align: 'center',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '200px',
                    action: {
                      type: 'message',
                      label: '雪山主峰東峰',
                      text: '雪山主峰東峰'
                    },
                    color: '#DB4612',
                    offsetTop: 'xs'
                  }
                ],
                paddingEnd: 'sm',
                paddingStart: '25px'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://img.icons8.com/stickers/100/000000/spinach.png',
                    offsetTop: 'sm',
                    size: 'lg'
                  },
                  {
                    type: 'text',
                    text: '點選選單或者直接輸入',
                    wrap: true,
                    size: 'sm',
                    offsetStart: 'md'
                  }
                ],
                margin: 'none'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '"入山入園山屋營地查詢"',
                    wrap: true,
                    size: 'sm',
                    offsetStart: '25px',
                    weight: 'bold',
                    decoration: 'underline'
                  },
                  {
                    type: 'text',
                    text: '點我GO!',
                    align: 'center',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '200px',
                    action: {
                      type: 'message',
                      label: '入山入園山屋營地查詢',
                      text: '入山入園山屋營地查詢'
                    },
                    color: '#DB4612'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '即可連上各大系統，直接登記山屋營地及入山入園証。',
                    wrap: true,
                    size: 'sm'
                  }
                ],
                paddingEnd: 'sm',
                paddingStart: '25px'
              },
              {
                type: 'separator',
                margin: 'sm'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://img.icons8.com/stickers/100/000000/spinach.png',
                    offsetTop: 'sm',
                    size: 'lg'
                  },
                  {
                    type: 'text',
                    text: '有任何問題歡迎與我聯絡',
                    wrap: true,
                    size: 'sm',
                    offsetStart: 'md'
                  }
                ],
                margin: 'sm'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://img.icons8.com/fluency/48/000000/gmail-new.png',
                    position: 'relative',
                    offsetStart: '65px',
                    size: 'lg',
                    offsetTop: 'sm'
                  },
                  {
                    type: 'text',
                    text: '與我聯繫',
                    align: 'center',
                    size: 'lg',
                    weight: 'bold',
                    color: '#4BA7BC',
                    offsetStart: '-5px',
                    offsetTop: 'xs'
                  }
                ],
                borderColor: '#A7C1BF',
                borderWidth: 'medium',
                cornerRadius: 'xl',
                margin: 'sm',
                action: {
                  type: 'message',
                  label: 'mail',
                  text: 'sara830331@gmail.com'
                }
              }
            ]
          },
          styles: {
            footer: {
              separator: true
            }
          }

        })
      event.reply(flex)
      flex.altText = '使用教學'
    } catch (error) {
      console.log(error)
      event.reply('錯誤')
    }
  } else if (event.message.type === 'text' && event.message.text === '入山入園山屋營地查詢') {
    try {
      const { data } = await axios.get('https://17jump.tw/application/')
      const $ = cheerio.load(data)
      for (let i = 0; i < 8; i++) {
        flex.contents.contents.push({
          type: 'bubble',
          size: 'micro',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: `${$('#tablepress-15').find('.column-2').find('a').eq(i).text()}`,
                weight: 'bold',
                size: 'md',
                wrap: true
              },
              {
                type: 'box',
                layout: 'baseline',
                margin: 'xxl',
                contents: [
                  {
                    type: 'text',
                    text: `${$('#tablepress-15').find('.row-hover').find('.column-3').eq(i).text()}`,
                    size: 'sm',
                    color: '#999999',
                    margin: 'none',
                    flex: 0,
                    style: 'normal',
                    decoration: 'none',
                    position: 'relative',
                    maxLines: 10,
                    wrap: true
                  }
                ],
                offsetTop: '-10px',
                paddingBottom: 'none'
              }
            ],
            paddingTop: 'sm',
            paddingBottom: 'none'
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://img.icons8.com/color/48/000000/pikachu-pokemon.png',
                    position: 'relative',
                    size: 'xxl',
                    offsetTop: 'sm',
                    offsetStart: 'md'
                  },
                  {
                    type: 'text',
                    text: '進入網站',
                    weight: 'bold',
                    align: 'center',
                    size: 'lg',
                    position: 'relative',
                    color: '#ffffff',
                    offsetBottom: '10px'
                  }
                ],
                justifyContent: 'center',
                position: 'relative',
                alignItems: 'center',
                borderWidth: 'semi-bold',
                cornerRadius: 'md',
                backgroundColor: '#7ABFD6'
              }
            ],
            flex: 0,
            action: {
              type: 'uri',
              label: 'action',
              uri: `${$('#tablepress-15').find('.column-2').find('a').eq(i).attr('href')}`
            },
            paddingTop: 'sm',
            paddingBottom: 'none',
            offsetTop: '-5px'

          }
        })
      }
      event.reply(flex)
      flex.altText = '入山入園山屋營地查詢'
    } catch (error) {
      console.log(error)
      event.reply('錯誤')
    }
  } else if (event.message.type === 'text') {
    try {
      const avb = encodeURIComponent(`${event.message.text}`)
      const { data } = await axios.get('https://hiking.biji.co/index.php?q=trail&act=gpx_list&page=1&keyword=' + `${avb}`)
      const $ = cheerio.load(data)
      const amount = $('.img-container.image--4-3').length > 9 ? 9 : $('.img-container.image--4-3').length
      for (let i = 0; i < amount; i++) {
        flex.contents.contents.push({
          type: 'bubble',
          size: 'kilo',
          hero: {
            type: 'image',
            url: `${$('.img-container.image--4-3').eq(i).find('img').attr('data-src')}`,
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '320:213'
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: `${$('.list-wrapper__title').eq(i).find('a').text()}`,
                weight: 'bold',
                size: 'md',
                wrap: true
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    size: 'sm',
                    url: 'https://img.icons8.com/color/48/000000/place-marker--v1.png'
                  },
                  {
                    type: 'text',
                    text: `${$('.list-wrapper__info').eq(i).find('.tracks__statistics').find('span').eq(0).text()}`,
                    size: 'xs',
                    color: '#8c8c8c',
                    margin: 'md',
                    flex: 0
                  }
                ]
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    size: 'sm',
                    url: 'https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-time-user-interface-kmg-design-outline-color-kmg-design.png'
                  },
                  {
                    type: 'text',
                    text: `${$('.list-wrapper__info').eq(i).find('.tracks__statistics').find('span').eq(1).text()}`,
                    size: 'xs',
                    color: '#8c8c8c',
                    margin: 'md',
                    flex: 0
                  }
                ]
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    size: 'sm',
                    url: 'https://img.icons8.com/fluency/48/000000/stairs-up.png'
                  },
                  {
                    type: 'text',
                    text: `${$('.list-wrapper__info').eq(i).find('.tracks__statistics').find('span').eq(2).text()}`,
                    size: 'xs',
                    color: '#8c8c8c',
                    margin: 'md',
                    flex: 0
                  }
                ]
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    size: 'sm',
                    url: 'https://img.icons8.com/fluency/48/000000/stairs-down.png'
                  },
                  {
                    type: 'text',
                    text: `${$('.list-wrapper__info').eq(i).find('.tracks__statistics').find('span').eq(3).text()}`,
                    size: 'xs',
                    color: '#8c8c8c',
                    margin: 'md',
                    flex: 0
                  }
                ]
              }
            ],
            paddingBottom: 'none',
            paddingTop: 'sm'
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    url: 'https://img.icons8.com/color/48/000000/map-marker.png',
                    position: 'relative',
                    size: 'xxl',
                    offsetStart: '-75px',
                    offsetTop: 'xs'
                  },
                  {
                    type: 'text',
                    text: 'GPX檔案下載',
                    weight: 'bold',
                    align: 'center',
                    size: 'lg',
                    position: 'absolute',
                    offsetTop: 'sm',
                    color: '#7ABFD6',
                    offsetEnd: '50px'
                  }
                ],
                justifyContent: 'center',
                position: 'relative',
                alignItems: 'center',
                borderWidth: 'semi-bold',
                cornerRadius: 'md',
                borderColor: '#7ABFD6',
                paddingTop: 'none',
                paddingBottom: 'none',
                offsetTop: '-5px'
              }
            ],
            flex: 0,
            action: {
              type: 'uri',
              label: 'action',
              uri: 'http://linecorp.com/'
            }
          }
        })
      }
      if (amount === 0) {
        event.reply('找不到請重新查詢')
      } else {
        flex.altText = 'GPX查詢'
        event.reply(flex)
      }
    } catch (error) {
      console.log(error)
      event.reply('錯誤')
    }
  }
})
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
