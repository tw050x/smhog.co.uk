export default {
  namespaced: true,
  state () {
    return {
      data: {
        attributes: {
          meta: {
            breadcrumbs: [
              {
                location: { name: 'about' },
                text: 'About'
              },
              {
                text: 'What We Do'
              }
            ],
            description: 'Find out about what South Manchester Helen O\'Grady Drama Academy do and how we instill life skills into our students',
            keywords: 'drama classes, manchester, south manchester, speech, drama',
            title: 'Learn About Our Drama Curriculum And The Skills It Promotes At South Manchester Helen O\'Grady Drama Academy'
          },
          section: {
            speechAndDramaClasses: {
              heading: 'Speech & Drama Classes',
              subheading: 'Promoting Confidence, Self-Esteem And Social Skills',
              content: [
                'The Helen O\'Grady speech & drama classes are designed to assist in the growth of confidence, self-esteem and social skills among other positive qualities. After several weeks with our academy many parents remark on the changes they see in their children both socially and academically.',
                'Our classes are separated into 3 main programmes - Lower Primary for students aged 4 to 8 years, Upper Primary for students aged 9 to 11 years and Youth Theatre for students aged 12 to 17 years. Programmes aim to teach and develop different skills and qualities at appropriate levels.'
              ],
              links: [
                // { location: { name: 'programmes.index' }, text: 'Our Class Programmes' }
              ]
            },
            speechAndDramaCurriculum: {
              heading: 'Speech & Drama Curriculum',
              subheading: 'Over A Decade Of Lessons',
              content: [
                'Helen O\'Grady provides speech & drama classes for students aged 4 to 17 years, with a curriculum tailored to fit with the national school curriculum. Students can attend over 10 years of classes and never repeat a lesson, with a curriculum that promotes growth, confidence and self-esteem.'
              ],
              links: [
                // { location: { name: 'about.curriculum' }, text: 'Our Drama Curriculum' }
              ]
            }
          }
        }
      }
    }
  }
}
