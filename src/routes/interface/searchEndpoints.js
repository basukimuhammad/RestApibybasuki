/** @format */

const createSearchEndpoint = (
  paramName,
  description
) => {
  return {
    get: {
      tags: ['Search'],
      parameters: [
        {
          in: 'query',
          name: paramName,
          required: true,
          description: `query for ${description}`,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse',
              },
            },
          },
        },
      },
    },
  }
}

const searchEndpoints = {
  '/search/youtube': createSearchEndpoint(
    'q',
    'downloaded YouTube content'
  ),
  '/search/xnxx': createSearchEndpoint(
    'q',
    'response for Xnxx'
  ),
  '/search/wikipedia': createSearchEndpoint(
    'q',
    'response for Wikipedia'
  ),
  '/search/dvasearch': createSearchEndpoint(
    'q',
    'response for apk'
  ),
  '/search/komikcast': createSearchEndpoint(
    'q',
    'response for komik'
  ),
  '/search/bukalapak': createSearchEndpoint(
    'q',
    'response for bukalapak'
  ),
  '/search/tiktoks': createSearchEndpoint(
    'q',
    'response for tiktoks'
  ),
  // ... tambahkan endpoint search lainnya
}

export default searchEndpoints
