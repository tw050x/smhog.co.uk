export default {
  namespaced: true,
  state () {
    return {
      data: {
        attributes: {
          meta: {
            breadcrumbs: [
              {
                text: 'Classes'
              }
            ],
            description: 'Find your local drama class in manchester for children and teenagers aged 4 to 17 years from South Manchester Helen O\'Grady Drama Academy',
            keywords: 'speech, drama, acting, classes, manchester, teenagers, children, curriculum, local',
            title: 'Local Speech & Drama Classes All Across Manchester - South Manchester Helen O\'Grady Drama Academy'
          },
          section: {
            ourClasses: {
              heading: 'Our Classes',
              subheading: 'All over south Manchester',
              content: [
                'Our drama classes are located throughout southern Manchester for a convenient drop-off and pick-up on a day that suits your family life. With Helen O\'Grady Drama Academy we enable you to take advantage of a national, every day of the week timetable, while receiving the unique Helen O\'Grady curriculum.',
                'Helen O\'Grady drama classes has been taught around the world for over 40 years with great success, our weekly drama classes has developed many children into inspired, productive and social individuals. Try out our classes for free with our trial lessons, contact South Manchester Helen O\'Grady Drama Academy now.'
              ],
              links: [
                { location: { hash: '#venuesAcrossSouthManchester' }, text: 'Find A Class' },
                { location: { name: 'user.enquire' }, text: 'Enquire Now' },
                // { location: { name: 'promotion.default' }, text: 'Enrol Now' }
              ]
            },
            venuesAcrossSouthManchester: {
              heading: 'Venues Across South Manchester',
              subheading: 'Including M21, M41, SK7, SK8 and WA14 postcodes',
              content: [
                'With venues all across south manchester, getting to our drama classes has never been so easy, we aim to fit our sessions into a timetable that suits your week. Our after school curriculum works to expand the national school curriculum giving your child those extra skills they can use throughout their life.',
                'Each drama class is conveniently located close to district schools, allowing you to join us with only a short walk. All our class venues allow for parking so alternatively you can drop your child off after a quick car ride. Need directions? Enter your postcode above and we will be more than happy to provide them.'
              ],
              links: [
                { location: { name: 'user.enquire' }, text: 'Enquire Now' },
                // { location: { name: 'promotion.default' }, text: 'Enrol Now' }
              ]
            }
          }
        }
      }
    }
  }
}
