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
                text: 'Programme'
              }
            ],
            description: 'Find out about who South Manchester Helen O\'Grady Drama Academy are and what South Manchester Helen O\'Grady Drama Academy do',
            keywords: 'drama classes, manchester, south manchester, speech, drama',
            title: 'Learn About Speech & Drama At South Manchester Helen O\'Grady Drama Academy'
          },
          section: {
            lowerPrimary: {
              heading: 'Lower Primary',
              subheading: 'For Children Aged 4 To 8 Years',
              content: [
                'Our Lower Primary classes are aimed at children aged 4 to 8 years and are tailored to promote language and listening, sharing, teamwork and expression of thoughts and feelings through mime and much more. We aim to develop the skills that bring out the best in our students at a young age.'
              ],
              links: [
                { location: { name: 'user.enquire' }, text: 'Enquire Now' }
              ]
            },
            upperPrimary: {
              heading: 'Upper Primary',
              subheading: 'For Children Aged 9 To 11 Years',
              content: [
                'Our Upper Primary classes are for children aged 9 to 11 years and have been tailored to build upon the Lower Primary language and listening skills, as well as sharing, teamwork and expression of thoughts and feelings. This stage continues focus on the same goals though at a more mature level.',
                'The level of Upper Primary works as a great stepping stone to the Youth Theatre where new skills are taught, children in this programme are taught the concepts behind the actions and activites and in doing so gain a more confident understanding to bring them into their teenage years.'
              ],
              links: [
                { location: { name: 'user.enquire' }, text: 'Enquire Now' }
              ]
            },
            youthTheatre: {
              heading: 'Youth Theatre',
              subheading: 'For Preteen & Teenagers Aged 12 To 17 Years',
              content: [
                'Our Youth Theatre classes are for pre-teen and teenagers aged 12 to 17 years, they are focused on lifelong skills such as communication. Further building upon previous years, our students take their performance to the next level giving them the knowledge to move through further education and the workplace with ease.',
                'Self-esteem and confidence are among the qualities that our Youth Theatre students gain from our classes. Learning in a friendly and inclusive environment our students improve through our curriculum gaining the courage to communicate clearly and effectively and become pro-active responsible adults.'
              ],
              links: [
                { location: { name: 'user.enquire' }, text: 'Enquire Now' }
              ]
            }
          }
        }
      }
    }
  }
}
