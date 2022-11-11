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
                text: 'Who We Are'
              }
            ],
            description: 'Find out about who South Manchester Helen O\'Grady Drama Academy are, our beliefs and motivations',
            keywords: 'drama classes, manchester, south manchester, speech, drama',
            title: 'Learn About Our Motivations & Beliefs At South Manchester Helen O\'Grady Drama Academy'
          },
          section: {
            ourFranchise: {
              heading: 'Our Helen O\'Grady Franchise',
              subheading: 'Your Family Drama Academy',
              content: [
                'South Manchester Helen O\'Grady Drama Academy is the southern manchester franchise of Helen O\'Grady Drama Academy, an international drama academy with origins in Australia 1979. Our franchise is owned and operated by Jane Kielty who has brought a new breath of life to drama at Helen O\'Grady.',
                'Our academy principal is Andrew Kielty, the son of Jane Kielty. Andrew has been responsible for much of the teaching at our academy, with 20 years experience in acting and drama and 10 years teaching drama, he is revered by many students who want to come back each week for his next lesson.'
              ],
              links: [
                // { location: {}, text: '' }
              ]
            },
            helenOGradyInternational: {
              heading: 'Helen O\'Grady Drama Academy',
              subheading: 'A Global Drama Academy',
              content: [
                'Helen O\'Grady Drama Academy is a global organisation with academies throughout the world. Teaching the Helen O\'Grady drama curriculum to children and teenagers has provided inspiration, imagination and success to students throughout their lives for the last 50 years.',
                'Helen O\'Grady operates throughout the UK with franchises in every city each with an assortment of classes and locations running throughout the week. The Helen O\'Grady style is not only popular but our results have impressed parents throughout the country.'
              ],
              links: [
                // { location: {}, text: '' }
              ]
            }
          }
        }
      }
    }
  }
}
