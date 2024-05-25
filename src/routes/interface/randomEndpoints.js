/** @format */

const swaggerOptions = {
  '/waifu/sfw': {
    get: {
      tags: ['Random'],
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

function createRandomEndpoint2(country) {
  return {
    get: {
      tags: ['Random'],
      parameters: [
        {
          name: 'genre',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
            enum: [
              'office',
              'pantyhose',
              'dp',
              'cock-torture',
              'encasement',
              'maids',
              'high-heels',
              'college-girls',
              'lingerie',
              'dirty-talk',
              'feminization',
              'sexy-legs',
              'russian',
              'mature',
              'stockings',
              'jerkoff-instructions',
              'cfnm',
              'enema',
              'old-and-young',
              'plus-size',
              'glasses',
              'milf',
              'pov',
              'corset',
              'footfetish',
              'uniform',
              'footjob',
              'squirting',
              'anal',
              'nurses',
              'schoolgirls',
              'vintage-retro',
              'zettai-ryouiki',
              'zettai-pantsu',
              'fisting',
              'spandex',
              'crossdressing',
              'leather',
              'butts',
              'big-tits',
              'transformation',
              'strapon',
              'spitting',
              'deep-throat',
              'bisexual',
              'cheerleaders',
              'sex-toys',
              'granny',
              'close-up',
              'homemade',
              'rubber-latex',
              'trampling',
              'boots',
              'rough-sex',
              'lesbian',
              'reality-porn',
              'cuckold',
              'insertions',
              'public-sex',
              'femdom',
              'handjob',
              'babes',
              'shemale',
              'gyno',
              'amateur',
              'sex-machines',
              'group-sex',
              'hardcore',
              'facesitting',
              'panties',
              'medical',
              'teen',
              'pissing',
              'pussy-licking',
              'ass-worship',
              'lezdom',
              'hairy-pussy',
              'whipping',
              'masturbation',
              'blowjob',
              'asian',
              'redhead',
              'interracial',
              'big-cock',
              'wet-messy',
              'ball-busting',
              'tattoos-piercings',
              'ebony',
              'gloryhole',
              'skinny',
              'cumshots',
              'pregnant',
              'softcore',
              'jeans',
              'latin',
              'smothering',
              'upskirt',
              'bdsm',
              'bondage',
              'bbw',
              'humiliation',
              'titjob',
              'spanking',
              'pornstars',
              'nude-sports',
              'indian',
              'smoking',
              'voyeur',
              'cosplay',
              '3d',
              'ass-to-mouth',
              'massage',
              'anime-art',
            ],
          },
          description: 'genre name',
        },
      ],
      responses: {
        200: {
          $ref: '#/components/schemas/SuccessResponse',
        },
      },
    },
  }
}

function createRandomEndpoint() {
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
            'image/*': {},
          },
        },
      },
    },
  }
}

const randomEndpoints = {
  '/random/{country}': createRandomEndpoint(),
  '/bokep/{genre}': createRandomEndpoint2(),
  ...swaggerOptions,
}

export default randomEndpoints
