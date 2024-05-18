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
          description: 'Country name',
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

const randomEndpoints = {
  '/random/{country}': createRandomEndpoint(),
}

export default randomEndpoints
