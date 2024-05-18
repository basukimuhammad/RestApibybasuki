/** @format */

function createSfwEndpoint(country) {
  return {
    get: {
      tags: ['Random'],
      parameters: [
        {
          name: 'name',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
            enum: [
              'akira',
              'elaina',
              'miku',
              'shota',
              'anna',
              'ikuyo',
              'neko',
              'takina',
              'asuna',
              'kaela',
              'rias',
              'waifu',
              'sakura',
              'kaguya',
              'ayanokouji',
              'yotsuba',
              'ayuzawa',
              'kaori',
              'sasuke',
              'yumeko',
              'bocchi',
              'kobo',
              'chisato',
              'kotori',
              'shinka',
              'cosplay',
              'loli',
              'shizuka',
            ],
          },
          description: 'char name',
        },
      ],
      responses: {
        200: {
          content: {
            'image/*': {},
          },
        },
      },
    },
  }
}

const sfwEndpoints = {
  '/sfw/{name}': createSfwEndpoint(),
}

export default sfwEndpoints
