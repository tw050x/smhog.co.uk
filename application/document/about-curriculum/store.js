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
                text: 'Curriculum'
              }
            ],
            description: 'Find out about who South Manchester Helen O\'Grady Drama Academy are, our beliefs and motivations',
            keywords: 'drama classes, manchester, south manchester, speech, drama',
            title: 'Learn About Our Motivations & Beliefs At South Manchester Helen O\'Grady Drama Academy'
          },
          section: {
            ourDramaCurriculum: {
              heading: 'Our Drama Curriculum',
              subheading: 'A Plan For Each And Every Lesson',
              content: [
                'Helen O\'Grady Drama Academy provides a structured and time tested curriculum to each and every student through our weekly drama classes. Each lesson has been carefully planned to promote positive qualities throughout each students life, helping catapult them into success after success.',
                'The curriculum is continaully updated and tailored to stay relevant to the times, as well as to focus on qualities that will be useful to students regardless of the path they take later in life. Students throughout the world have succeeded with the help of the Helen O\'Grady curriculum'
              ],
              links: [
                // { location: {}, text: '' }
              ]
            },
            ourCurriculumProgrammes: {
              heading: 'Our Curriculum Programmes',
              subheading: 'Lessons Suited To The Age And Level Of Students',
              content: [
                'Our drama classes are grouped by age and level, resulting in three distinct programmes from our curriculum to teach at each level. Students are placed into an appropriate class allowing them to develop at a natural pace and socialise with other students of similar ages.',
                'Our students are organised into one of three programmes - Lower Primary, Upper Primary or Youth Theatre. Each with its own goals and activities designed to bring out the best in each student in an inclusive and open environment. Students learn from each programme and continue to use each quality in later lessons.'
              ],
              links: [
                { location: { name: 'about.programme' }, text: 'Learn More About Our Programmes' }
              ]
            }
          }
        }
      }
    }
  }
}
