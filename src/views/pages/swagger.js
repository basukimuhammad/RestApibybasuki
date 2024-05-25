/**
 * @swagger
 * /ai/blackbox:
 *   GET:
 *   tags:
 *    - Ai
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: The search query.
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /ai/Pixart-A:
 *   GET:
 *   tags:
 *    - Ai
 *   parameters:
 *    - in: query
 *      name: prompt
 *      required: true
 *      description: The search query.
 *      schema:
 *        type: string
 *    - in: query
 *      name: style
 *      required: true
 *      description: The style for the AI. Choose from: Cinematic, Photographic, Anime, Manga, Digital Art, Pixel art, Fantasy art, Neonpunk, 3D Model
 *      schema:
 *        type: string
 *        enum: Cinematic,Photographic,Anime,Manga,Digital Art,Pixel art,Fantasy art,Neonpunk,3D Model
 *    - in: query
 *      name: samplers
 *      required: true
 *      description: The sampler for the AI. Choose from: DPM-Solver, SA-Solver
 *      schema:
 *        type: string
 *        enum: DPM-Solver,SA-Solver
 *    - in: query
 *      name: width
 *      required: false
 *      description: The width of the image.
 *      schema:
 *        type: integer
 *        enum: 256,512,768,1024,1280,1536,1792,2048
 *        default: 1024
 *    - in: query
 *      name: height
 *      required: false
 *      description: The height of the image.
 *      schema:
 *        type: integer
 *        enum: 256,512,768,1024,1280,1536,1792,2048
 *        default: 1024
 *   responses:
 *    200:
 *      description: Successful response with search results.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 *          example:
 *            {
  "status": "Success",
  "code": 200,
  "author": "iky",
  "data": {}
}
 */
/**
 * @swagger
 * /anime/doujin-latest:
 *   GET:
 *   tags:
 *    - Anime
 *   parameters:
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 *    default:
 *      description: Unexpected error
 *      content:
 *        application/json:
 *          example:
 *            {
  "status": "Error",
  "code": 500,
  "message": "Internal Server Error"
}
 */
/**
 * @swagger
 * /anime/doujin-search:
 *   GET:
 *   tags:
 *    - Anime
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: URL for doujin search
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 *    default:
 *      description: Unexpected error
 *      content:
 *        application/json:
 *          example:
 *            {
  "status": "Error",
  "code": 500,
  "message": "Internal Server Error"
}
 */
/**
 * @swagger
 * /anime/doujin-ch:
 *   GET:
 *   tags:
 *    - Anime
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: URL for doujin search
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 *    default:
 *      description: Unexpected error
 *      content:
 *        application/json:
 *          example:
 *            {
  "status": "Error",
  "code": 500,
  "message": "Internal Server Error"
}
 */
/**
 * @swagger
 * /anime/doujin-img:
 *   GET:
 *   tags:
 *    - Anime
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: URL doujin get image
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 *    default:
 *      description: Unexpected error
 *      content:
 *        application/json:
 *          example:
 *            {
  "status": "Error",
  "code": 500,
  "message": "Internal Server Error"
}
 */
/**
 * @swagger
 * /anime/hentai:
 *   GET:
 *   tags:
 *    - Anime
 *   parameters:
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 *    default:
 *      description: Unexpected error
 *      content:
 *        application/json:
 *          example:
 *            {
  "status": "Error",
  "code": 500,
  "message": "Internal Server Error"
}
 */
/**
 * @swagger
 * /anime/whatanime:
 *   GET:
 *   tags:
 *    - Anime
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: URL of the image or video frame
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 *    default:
 *      description: Unexpected error
 *      content:
 *        application/json:
 *          example:
 *            {
  "status": "Error",
  "code": 500,
  "message": "Internal Server Error"
}
 */
/**
 * @swagger
 * /anime/nhentai-search:
 *   GET:
 *   tags:
 *    - Anime
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: q of the image or video frame
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 *    default:
 *      description: Unexpected error
 *      content:
 *        application/json:
 *          example:
 *            {
  "status": "Error",
  "code": 500,
  "message": "Internal Server Error"
}
 */
/**
 * @swagger
 * /downloader/tiktok:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/facebook:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/xnxx:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/mediafire:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/instagram:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/igstory:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/igstory2:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/igtv:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/gdrive:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/twitter:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/sfile:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/capcut:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/spotify:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/apkmirror:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/dvadownloader:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/terabox:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /downloader/ttslide:
 *   GET:
 *   tags:
 *    - Downloader
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /waifu/sfw:
 *   GET:
 *   tags:
 *    - Random
 *   parameters:
 *    - in: query
 *      name: category
 *      required: true
 *      description: Kategori gambar (SFW)
 *      schema:
 *        type: string
 *        enum: waifu,neko,shinobu,megumin,bully,cuddle,cry,hug,awoo,kiss,lick,pat,smug,bonk,yeet,blush,smile,wave,highfive,handhold,nom,bite,glomp,slap,kill,kick,happy,wink,poke,dance,cringe
 *   responses:
 *    200:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 */
/**
 * @swagger
 * /waifu/nsfw:
 *   GET:
 *   tags:
 *    - Random
 *   parameters:
 *    - in: query
 *      name: category
 *      required: true
 *      description: Kategori gambar (NSFW)
 *      schema:
 *        type: string
 *        enum: waifu,neko,trap,blowjob
 *   responses:
 *    200:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 */
/**
 * @swagger
 * /bokep/{genre}:
 *   GET:
 *   tags:
 *    - Random
 *   parameters:
 *    - in: path
 *      name: genre
 *      required: true
 *      description: genre name
 *      schema:
 *        type: string
 *        enum: office,pantyhose,dp,cock-torture,encasement,maids,high-heels,college-girls,lingerie,dirty-talk,feminization,sexy-legs,russian,mature,stockings,jerkoff-instructions,cfnm,enema,old-and-young,plus-size,glasses,milf,pov,corset,footfetish,uniform,footjob,squirting,anal,nurses,schoolgirls,vintage-retro,zettai-ryouiki,zettai-pantsu,fisting,spandex,crossdressing,leather,butts,big-tits,transformation,strapon,spitting,deep-throat,bisexual,cheerleaders,sex-toys,granny,close-up,homemade,rubber-latex,trampling,boots,rough-sex,lesbian,reality-porn,cuckold,insertions,public-sex,femdom,handjob,babes,shemale,gyno,amateur,sex-machines,group-sex,hardcore,facesitting,panties,medical,teen,pissing,pussy-licking,ass-worship,lezdom,hairy-pussy,whipping,masturbation,blowjob,asian,redhead,interracial,big-cock,wet-messy,ball-busting,tattoos-piercings,ebony,gloryhole,skinny,cumshots,pregnant,softcore,jeans,latin,smothering,upskirt,bdsm,bondage,bbw,humiliation,titjob,spanking,pornstars,nude-sports,indian,smoking,voyeur,cosplay,3d,ass-to-mouth,massage,anime-art
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /sfw/toanime:
 *   GET:
 *   tags:
 *    - Maker
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: Parameter for toanime.
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Berhasil mengambil informasi.
 *      content:
 *        image/*:
 *          example:
 *            "https://example.com/image.jpg"
 */
/**
 * @swagger
 * /misc/runtime:
 *   GET:
 *   tags:
 *    - Misc
 *   responses:
 *    200:
 *      description: Successful operation
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 */
/**
 * @swagger
 * /misc/clock:
 *   GET:
 *   tags:
 *    - Misc
 *   responses:
 *    200:
 *      description: Successful operation
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 */
/**
 * @swagger
 * /myanimelist/search:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Search for anime or manga on MyAnimeList
 *   parameters:
 *    - in: query
 *      name: name
 *      required: true
 *      description: The search query
 *      schema:
 *        type: string
 *    - in: query
 *      name: type
 *      required: false
 *      description: The type of search (anime or manga)
 *      schema:
 *        type: string
 *        enum: anime,manga
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/season:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get anime data by year, season, and type
 *   parameters:
 *    - in: query
 *      name: year
 *      required: true
 *      description: The year
 *      schema:
 *        type: integer
 *    - in: query
 *      name: season
 *      required: true
 *      description: The season
 *      schema:
 *        type: string
 *        enum: spring,summer,fall,winter
 *    - in: query
 *      name: type
 *      required: false
 *      description: The type
 *      schema:
 *        type: string
 *        enum: TV,TVNew,TVCon,ONAs,OVAs,Specials,Movies
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/watchlist:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get user's watchlist
 *   parameters:
 *    - in: query
 *      name: username
 *      required: true
 *      description: Username of the user
 *      schema:
 *        type: string
 *    - in: query
 *      name: after
 *      required: false
 *      description: Start index for pagination
 *      schema:
 *        type: integer
 *        enum: 0,50,100,150,200,250
 *    - in: query
 *      name: type
 *      required: false
 *      description: Type of media (anime or manga)
 *      schema:
 *        type: string
 *        enum: anime,manga
 *    - in: query
 *      name: status
 *      required: false
 *      description: Status in the user's watchlist
 *      schema:
 *        type: integer
 *        enum: 0,1,2,3,4,5,6,7
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/news:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get anime news from MyAnimeList
 *   parameters:
 *    - in: query
 *      name: nbNews
 *      required: false
 *      description: Number of news articles to retrieve
 *      schema:
 *        type: integer
 *        enum: 10,20,30,40,50
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/info-anime:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Mendapatkan informasi anime berdasarkan nama
 *   parameters:
 *    - in: query
 *      name: name
 *      required: true
 *      description: Nama anime yang ingin dicari
 *      schema:
 *        type: string
 *    - in: query
 *      name: getBestMatch
 *      required: true
 *      description: Apakah ingin menggunakan match-sorter untuk menemukan hasil terbaik
 *      schema:
 *        type: boolean
 *        enum: true,false
 *    - in: query
 *      name: type
 *      required: true
 *      description: Tipe, bisa berupa anime atau manga
 *      schema:
 *        type: string
 *        enum: anime,manga
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/anime-info:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get anime information from URL
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: URL of the anime on MyAnimeList.net
 *      schema:
 *        type: string
 *        format: url
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/episodes:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get episodes list by anime name and/or id
 *   parameters:
 *    - in: query
 *      name: animeName
 *      required: true
 *      schema:
 *        type: string
 *        description: The name of the anime
 *    - in: query
 *      name: animeId
 *      required: false
 *      schema:
 *        type: number
 *        description: The unique identifier of the anime
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/reviews:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get list of anime reviews
 *   parameters:
 *    - in: query
 *      name: name
 *      required: true
 *      description: The name of the anime
 *      schema:
 *        type: string
 *    - in: query
 *      name: id
 *      required: undefined
 *      description: The unique identifier of the anime
 *      schema:
 *        type: number
 *    - in: query
 *      name: limit
 *      required: undefined
 *      description: The maximum number of reviews to fetch
 *      schema:
 *        type: number
 *    - in: query
 *      name: skip
 *      required: undefined
 *      description: The number of reviews to skip
 *      schema:
 *        type: number
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/recommendations:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get anime recommendations
 *   parameters:
 *    - in: query
 *      name: name
 *      required: true
 *      description: The name of the anime
 *      schema:
 *        type: string
 *    - in: query
 *      name: id
 *      required: false
 *      description: The unique identifier of the anime
 *      schema:
 *        type: integer
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/stats:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get anime stats
 *   parameters:
 *    - in: query
 *      name: name
 *      required: true
 *      description: The name of the anime
 *      schema:
 *        type: string
 *    - in: query
 *      name: id
 *      required: false
 *      description: The unique identifier of the anime
 *      schema:
 *        type: integer
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/pictures:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get anime picture
 *   parameters:
 *    - in: query
 *      name: name
 *      required: true
 *      description: The name of the anime
 *      schema:
 *        type: string
 *    - in: query
 *      name: id
 *      required: false
 *      description: The unique identifier of the anime
 *      schema:
 *        type: integer
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /myanimelist/user:
 *   GET:
 *   tags:
 *    - MyAnimeList
 *   summary: Get anime picture
 *   parameters:
 *    - in: query
 *      name: username
 *      required: true
 *      description: The name of the anime
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /nsfw/{tag}:
 *   GET:
 *   tags:
 *    - Random
 *   parameters:
 *    - in: path
 *      name: tag
 *      required: true
 *      description: The tag to search for
 *      schema:
 *        type: string
 *        enum: maid,waifu,marin-kitagawa,mori-calliope,raiden-shogun,oppai,selfies,uniform,kamisato-ayaka,ass,hentai,milf,oral,paizuri,ecchi,ero
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        image/*:
 */
/**
 * @swagger
 * /pinterest/getBoard:
 *   GET:
 *   tags:
 *    - Pinterest
 *   description: Retrieve data for a specific board
 *   parameters:
 *    - in: query
 *      name: id
 *      required: true
 *      description: The ID of the board
 *      schema:
 *        type: string
 *    - in: query
 *      name: slashurl
 *      required: true
 *      description: The slash URL of the board
 *      schema:
 *        type: string
 *    - in: query
 *      name: bookmark
 *      required: false
 *      description: Bookmark parameter for pagination
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /pinterest/searchBoards:
 *   GET:
 *   tags:
 *    - Pinterest
 *   description: Search for boards based on query
 *   parameters:
 *    - in: query
 *      name: query
 *      required: true
 *      description: The query string for searching boards
 *      schema:
 *        type: string
 *    - in: query
 *      name: bookmark
 *      required: false
 *      description: Bookmark parameter for pagination
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /pinterest/searchPins:
 *   GET:
 *   tags:
 *    - Pinterest
 *   description: Search for pins based on query
 *   parameters:
 *    - in: query
 *      name: query
 *      required: true
 *      description: The query string for searching pins
 *      schema:
 *        type: string
 *    - in: query
 *      name: bookmark
 *      required: false
 *      description: Bookmark parameter for pagination
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /pinterest/suggestions:
 *   GET:
 *   tags:
 *    - Pinterest
 *   description: Get suggestions for related pins based on pin ID
 *   parameters:
 *    - in: query
 *      name: id
 *      required: true
 *      description: The ID of the pin
 *      schema:
 *        type: string
 *    - in: query
 *      name: bookmark
 *      required: false
 *      description: Bookmark parameter for pagination
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /random/{country}:
 *   GET:
 *   tags:
 *    - Random
 *   parameters:
 *    - in: path
 *      name: country
 *      required: true
 *      description: List name
 *      schema:
 *        type: string
 *        enum: china,indonesia,japan,korean,vietnam,random,thailand,malaysia,potatogodzilla,nude,naughty,jkt48,saizneko,belledelphine,xiaopangju
 *   responses:
 *    200:
 *      content:
 *        image/*:
 */
/**
 * @swagger
 * /search/youtube:
 *   GET:
 *   tags:
 *    - Search
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: query for downloaded YouTube content
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /search/xnxx:
 *   GET:
 *   tags:
 *    - Search
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: query for response for Xnxx
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /search/wikipedia:
 *   GET:
 *   tags:
 *    - Search
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: query for response for Wikipedia
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /search/dvasearch:
 *   GET:
 *   tags:
 *    - Search
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: query for response for apk
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /search/komikcast:
 *   GET:
 *   tags:
 *    - Search
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: query for response for komik
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /search/bukalapak:
 *   GET:
 *   tags:
 *    - Search
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: query for response for bukalapak
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /search/tiktoks:
 *   GET:
 *   tags:
 *    - Search
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: query for response for tiktoks
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /sfw/{name}:
 *   GET:
 *   tags:
 *    - Random
 *   parameters:
 *    - in: path
 *      name: name
 *      required: true
 *      description: char name
 *      schema:
 *        type: string
 *        enum: akira,elaina,miku,shota,anna,ikuyo,neko,takina,asuna,kaela,rias,waifu,sakura,kaguya,ayanokouji,yotsuba,ayuzawa,kaori,sasuke,yumeko,bocchi,kobo,chisato,kotori,shinka,cosplay,loli,shizuka
 *   responses:
 *    200:
 *      content:
 *        image/*:
 */
/**
 * @swagger
 * /shortUrl/{service}:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: path
 *      name: service
 *      required: true
 *      description: The URL shortening service to use
 *      schema:
 *        type: string
 *        enum: tiny,vurl,vgd,shrt
 *        default: isgd
 *    - in: query
 *      name: url
 *      required: true
 *      description: The URL to be shortened
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/translate:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: lang
 *      required: true
 *      description: Target language code
 *      schema:
 *        type: string
 *    - in: query
 *      name: text
 *      required: true
 *      description: Text to be translated
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/cuaca:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: kota
 *      required: true
 *      description: Text to be search
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/saucenao:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: anime image URL to find the source 
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/removebg:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: remove background
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/apkmsearch:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: query
 *      required: true
 *      description: Text to be search
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/sinonim:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: kata
 *      required: true
 *      description: Text to be sinonim
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/githubstalk:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: username
 *      required: true
 *      description: Text to be search
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/langList:
 *   GET:
 *   tags:
 *    - Tools
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/userAgents:
 *   GET:
 *   tags:
 *    - Tools
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/nekopoi-letest:
 *   GET:
 *   tags:
 *    - Tools
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/anti-porn:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: URL of the image to be checked
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /tools/ssweb:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: url
 *      required: true
 *      description: URL of the web to be checked
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      content:
 *        image/*:
 */
/**
 * @swagger
 * /tools/styletext:
 *   GET:
 *   tags:
 *    - Tools
 *   parameters:
 *    - in: query
 *      name: q
 *      required: true
 *      description: style text
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          $ref: #/components/schemas/SuccessResponse
 */
/**
 * @swagger
 * /upload/cdn:
 *   POST:
 *   tags:
 *    - Uploader
 *   responses:
 *    200:
 *      description: File successfully uploaded.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 */
/**
 * @swagger
 * /auth/register:
 *   GET:
 *   tags:
 *    - User
 *   parameters:
 *    - in: query
 *      name: email
 *      required: true
 *      schema:
 *        type: string
 *    - in: query
 *      name: password
 *      required: true
 *      schema:
 *        type: string
 *    - in: query
 *      name: username
 *      required: true
 *      schema:
 *        type: string
 *    - in: query
 *      name: apiKey
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: User registered successfully
 *    400:
 *      description: Bad Request
 *    500:
 *      description: Internal Server Error
 */
/**
 * @swagger
 * /auth/profile:
 *   GET:
 *   tags:
 *    - User
 *   parameters:
 *    - in: query
 *      name: email
 *      required: true
 *      schema:
 *        type: string
 *    - in: query
 *      name: password
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: User profile returned
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 *    400:
 *      description: Bad Request
 *    500:
 *      description: Internal Server Error
 */
/**
 * @swagger
 * /cekey:
 *   GET:
 *   tags:
 *    - User
 *   parameters:
 *    - in: query
 *      name: key
 *      required: true
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: API key checked
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: [object Object]
 *    400:
 *      description: Bad Request
 *    500:
 *      description: Internal Server Error
 */
/**
 * @swagger
 * /search/xvideos:
 *   GET:
 *   tags:
 *    - Search
 *   summary: Get videos from XVideos based on criteria
 *   parameters:
 *    - in: query
 *      name: query
 *      required: true
 *      description: Search query
 *      schema:
 *        type: string
 *    - in: query
 *      name: short
 *      required: undefined
 *      description: Sorting criteria
 *      schema:
 *        type: string
 *        enum: Relevance,Upload date,Rating,Length,Views,Random
 *        default: Relevance
 *    - in: query
 *      name: date
 *      required: undefined
 *      description: Date filter
 *      schema:
 *        type: string
 *        enum: Anytime,Last 3 days,This week,This month,Last 3 months,Last 6 months
 *        default: Anytime
 *    - in: query
 *      name: duration
 *      required: undefined
 *      description: Video duration filter
 *      schema:
 *        type: string
 *        enum: All,Short videos (1-3min),Medium videos (3-10min),Long videos (+10min),Long videos (10-20min),Long videos (+20min)
 *        default: All
 *    - in: query
 *      name: quality
 *      required: undefined
 *      description: Video quality filter
 *      schema:
 *        type: string
 *        enum: All,720P +,1080P
 *        default: All
 *    - in: query
 *      name: page
 *      required: undefined
 *      description: Page number
 *      schema:
 *        type: integer
 *        default: 1
 *   responses:
 *    200:
 *      description: Successful response
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items: [object Object]
 */