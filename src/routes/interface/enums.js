/** @format */

const swaggerOptions = {
  '/waifu/sfw': {
    get: {
      tags: ['Random'],
      deprecated: true,
      parameters: [
        {
          name: 'category',
          in: 'query',
          description: 'Kategori gambar (SFW)',
          required: true,
          schema: {
            type: 'string',
            enum: [
              'waifu',
              'neko',
              'shinobu',
              'megumin',
              'bully',
              'cuddle',
              'cry',
              'hug',
              'awoo',
              'kiss',
              'lick',
              'pat',
              'smug',
              'bonk',
              'yeet',
              'blush',
              'smile',
              'wave',
              'highfive',
              'handhold',
              'nom',
              'bite',
              'glomp',
              'slap',
              'kill',
              'kick',
              'happy',
              'wink',
              'poke',
              'dance',
              'cringe',
            ],
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  url: {
                    type: 'string',
                    example:
                      'https://api.waifu.pics/sfw/waifu/14c9957c-27ae-4798-850b-6d6b9485e36f.jpg',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/waifu/nsfw': {
    get: {
      tags: ['Random'],
      deprecated: true,
      parameters: [
        {
          name: 'category',
          in: 'query',
          description: 'Kategori gambar (NSFW)',
          required: true,
          schema: {
            type: 'string',
            enum: ['waifu', 'neko', 'trap', 'blowjob'],
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  url: {
                    type: 'string',
                    example:
                      'https://api.waifu.pics/nsfw/waifu/14c9957c-27ae-4798-850b-6d6b9485e36f.jpg',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default swaggerOptions
