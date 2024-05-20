/** @format */

function createRandomEndpoint(country) {
  return {
    get: {
      tags: ['Random'],
      parameters: [
        {
          name: 'country',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
            enum: [
              'china',
              'indonesia',
              'japan',
              'korean',
              'vietnam',
              'random',
              'thailand',
              'malaysia',
              'potatogodzilla',
              'nude',
              'naughty',
              'jkt48',
              'saizneko',
              'belledelphine',
              'xiaopangju',
            ],
          },
          description: 'List name',
        },
      ],
      responses: {
        200: {
          content: {
            'image/jpeg': {},
          },
        },
      },
    },
  }
}

const randomEndpoints = {
  '/random/{country}': createRandomEndpoint(),
}

export default randomEndpoints
