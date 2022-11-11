// request url: /v1/document/<route>?include=images,testimonials
export default {
  namespaced: true,
  // getters: {
  //   sections (state) {
  //     let sections = []

  //     // todo
  //     // organise prototype sections into sections with content

  //     const { data, included } = state



  //     return sections
  //   }
  // },
  state () {
    return {
      data: {
        attributes: {
          meta: {
            breadcrumbs: [
              {
                text: 'Home'
              }
            ],
            description: 'Weekly speech & drama classes in Manchester for children and teenagers aged 4 to 17 from South Manchester Helen O\'Grady drama Academy',
            keywords: 'speech, drama, acting, classes, manchester, teenagers, children, curriculum',
            title: 'Speech & Drama Classes Manchester - South Manchester Helen O\'Grady Drama Academy'
          },
          // 'section.prototype': [
          //   {
          //     component: [
          //       {
          //         content: {},
          //         id: 1,
          //         type: 'seaction-heading'
          //       },
          //       {
          //         content: {},
          //         id: 2,
          //         type: 'section-paragraph'
          //       },
          //       {
          //         content: {},
          //         id: 2,
          //         type: 'section-call-to-action'
          //       }
          //     ],
          //     id: 1,
          //     type: 'section'
          //   }
          // ],
          section: {
            introduction: {
              heading: 'Welcome',
              subheading: 'To Our Drama Academy',
              content: [
                'Enrol your child in one of our drama classes, with a drama curriculum for children and teenagers ranging from 5 to 18. Tailored to build confidence and self esteem, each drama class can bring out the best in your child, assisting them in gaining skills in communication, responsibility and tenacity through dramatic improvisations.'
              ],
              links: [
                { location: { name: 'user.enquire' }, text: 'Enquire Now' }
              ]
            },
            ourDramaClasses: {
              heading: 'Our Drama Classes',
              subheading: 'Bringing The Worldwide Helen O\'Grady Curriculum',
              content: [
                'With after school activities and drama classes all over South Manchester, your child will enjoy learning in a safe and secure environment weekly. From the very first lesson we begin teaching our students to develop the social and communication skills that will enrich their lives both personally and professionally',
                'From our fun and engaging drama classes, our students learn from teachers with several decades combined of dramatic teaching and experience. Children are able to develop at their own pace, and enjoy an environment that promotes development of those important life long skills.'
              ],
              links: [
                { location: { name: 'user.enquire' }, text: 'Enquire Now' },
                { location: { hash: '#venuesAcrossSouthManchester', name: 'class' }, text: 'Find A Class' },
                { location: { name: 'class' }, text: 'Learn More' }
              ]
            },
            ourDramaClassVenues: {
              heading: 'Our Drama Class Venues',
              subheading: 'Convenient Class Venues Throughout South Manchester',
              content: [
                'With drama classes every day of the week, throughout south Manchester, you wont have any trouble finding a drama class that slots into your timetable. At 8 venues, over 5 days of the week, you can find an accessible venue with nearby parking and public transport links.',
                'We utilise venues such as community centre function rooms and church halls, in turn allowing us to put back into each community by keeping it\'s social centre\'s alive. These community centre\'s offer a safe environment for our students to learn and perform each and every week.'
              ],
              links: [
                // { location: { hash: '#venuesAcrossSouthManchester', name: 'class' }, text: 'Find A Venue' },
                // { location: { name: 'class' }, text: 'Learn More About Our Venues' }
              ]
            },
            ourDramaProgrammes: {
              heading: 'Our Drama Programmes',
              subheading: 'Programmes Suited To Our Students Age And Level',
              content: [
                'Helen O\'Grady Drama Academy operates 3 main programmes - Lower Primary for 4 to 8 years olds, Upper Primary for 9 to 11 year olds and Youth Theatre for 12 to 17 year olds. Each of our main programmes runs at a variety of locations throughout southern Manchester',
                'Our drama classes are run each week and conincide with the school year. Each class is taught by on of our trained Helen O\'Grady teachers, with over a decade in experience our students learn from experienced people, combining with the Helen O\'Grady Drama Academy curriculum.'
              ],
              links: [
                { location: { name: 'about.programme' }, text: 'Learn More' }
              ]
            }
          }
        },
        id: undefined,
        relationships: {
          images: [
            { id: 1, type: 'image' },
            { id: 2, type: 'image' },
            { id: 3, type: 'image' },
            { id: 4, type: 'image' },
            { id: 5, type: 'image' },
            { id: 6, type: 'image' },
            { id: 7, type: 'image' },
            { id: 8, type: 'image' },
            { id: 9, type: 'image' },
            { id: 10, type: 'image' },
            { id: 11, type: 'image' },
            { id: 12, type: 'image' },
            { id: 13, type: 'image' },
            { id: 14, type: 'image' },
            { id: 15, type: 'image' },
            { id: 16, type: 'image' },
            { id: 17, type: 'image' },
            { id: 18, type: 'image' },
            { id: 19, type: 'image' },
            { id: 20, type: 'image' },
            { id: 21, type: 'image' },
            { id: 22, type: 'image' },
            { id: 23, type: 'image' },
            { id: 24, type: 'image' },
            { id: 25, type: 'image' },
            { id: 26, type: 'image' },
            { id: 27, type: 'image' },
            { id: 28, type: 'image' },
            { id: 29, type: 'image' },
            { id: 30, type: 'image' },
            { id: 31, type: 'image' },
            { id: 32, type: 'image' },
            { id: 33, type: 'image' }
          ],
          testimonials: [
            { id: 1, type: 'testimonial' },
            { id: 2, type: 'testimonial' },
            { id: 3, type: 'testimonial' }
          ]
        },
        type: 'document'
      },
      included: [
        {
          source: '/asset/image/gallery/classes/bramhall/youth-theatre/3381.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/bramhall/youth-theatre/3388.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/bramhall/youth-theatre/3437.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/cheadle-hulme/composite/3598.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/cheadle-hulme/composite/3629.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/cheadle-hulme/composite/3667.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/cheadle-hulme/composite/3694.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/cheadle-hulme/composite/3987.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/cheadle-hulme/composite/4406.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/cheadle-hulme/composite/9960.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/gatley/composite/4656.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/gatley/composite/4667.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/gatley/composite/4675.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/gatley/composite/4697.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/gatley/composite/4706.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/gatley/composite/4852.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/0268.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/0350.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/0491.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/1300.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/2042.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/3189.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4129.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4150.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4170.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4195.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4214.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4221.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4358.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/composite/4367.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/youth-theatre/0623.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/youth-theatre/3154.jpg',
          type: 'image'
        },
        {
          source: '/asset/image/gallery/classes/urmston/youth-theatre/5768.jpg',
          type: 'image'
        },
        {
          attributes: {
            author: 'Maria (Helen O\'Grady Student)',
            role: 'student',
            text: 'I like drama. I like it a lot. It\'s more fun than anything else I do. We do lots and lots of exciting things. It teaches me how to speak and act and it\'s fun, fun, fun. I like it like that!'
          },
          id: 1,
          type: 'testimonial'
        },
        {
          attributes: {
            author: 'Emma (Helen O\'Grady Student)',
            role: 'student',
            text: 'I go to drama where I can pretend to be anything, as I walk through the door, my teacher is waiting to welcome me into the hall/ I can be a bat, a cat or a rat an no-one cares. Love being a different character each week, It\'s made me feel more confident. So thank you for making it fun. I would recommend drama to everyone!'
          },
          id: 2,
          type: 'testimonial'
        },
        {
          attributes: {
            author: 'Amy (Helen O\'Grady Student)',
            role: 'student',
            text: 'Drama is good, it\'s very, very good, because we act and play. We act and play at many things like lions and kings and dancer on strings.'
          },
          id: 3,
          type: 'testimonial'
        }
      ]
    }
  }
}
