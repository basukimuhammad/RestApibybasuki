/** @format */

const endpoints = [
  {
    name: 'toanime',
    param: 'url',
  },
]

const sfwEndpoints = {}

endpoints.forEach(endpoint => {
  sfwEndpoints[`/sfw/${endpoint.name}`] = {
    get: {
      tags: ['Maker'],
      parameters: [
        {
          name: endpoint.param,
          in: 'query',
          required: true,
          description: `Parameter for ${endpoint.name}.`,
          schema: {
            type: 'string',
          },
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
})

export default sfwEndpoints
