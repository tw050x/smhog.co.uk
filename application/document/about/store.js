export default {
  namespaced: true,
  state () {
    return {
      data: {
        attributes: {
          meta: {
            breadcrumbs: [
              {
                text: 'About'
              }
            ],
            description: 'Find out about who South Manchester Helen O\'Grady Drama Academy are and what South Manchester Helen O\'Grady Drama Academy do',
            keywords: 'drama classes, manchester, south manchester, speech, drama',
            title: 'Learn About Speech & Drama At South Manchester Helen O\'Grady Drama Academy'
          },
          section: {
            whoWeAre: {
              heading: 'Who We Are',
              subheading: 'A Family Organisation For Drama',
              content: [
                'South Manchester Helen O\'Grady Drama Academy brings the international drama and speech curriculum to Greater Manchester, as a part of the international Helen O\'Grady organisation we operate 13 speech & drama classes over 7 locations throughout southern Manchester allowing you to fit us into your weekly schedule.',
                'We are a family owned and operated organisation, having spent many years in dramatic theatre we have brought that experience and tenacity into the Helen O\'Grady drama scene throughout southern Manchester and we believe that through drama, children and teenagers can grow into aspiring adults.'
              ],
              links: [
                { location: { name: 'about.who-we-are' }, text: 'Learn More' }
              ]
            },
            whatWeDo: {
              heading: 'What We Do',
              subheading: 'Speech & Drama Classes For Our Youth',
              content: [
                'Helen O\'Grady Drama Academy is a global organisation bringing a curriculum based drama programme for children and teenagers through weekly extracurricular classes. Our speech & drama classes promote confidence, self-esteem and social skills, with our students gaining more than acting and stagecraft.',
                'Our drama classes are tailored to the age and level of students and follows the national curriculum building upon the knowledge from their schooling. Each class is unique and provides roles for everyone involved and our teachers have over 20 years combined experience acting and teaching drama.'
              ],
              links: [
                { location: { name: 'about.what-we-do' }, text: 'Learn More' },
                { location: { name: 'class' }, text: 'Find A Class' }
              ]
            },
            curriculum: {
              heading: 'The Curriculum',
              subheading: 'An International Drama Curriculum',
              content: [
                'The Helen O\'Grady drama curriculum is taught around the world to hundreds of thousands of children and teenagers. Our curriculum has been designed to instill positive and useful qualities to help assist students grow into mature and proactive adults that succeed both academically and socially',
                'With our planned lessons you can be certain that students will not repeat a lesson during the 10 plus years that are available to them. And for those that join a little later in life, Our curriculum continually builds upon previous lessons allowing those students to catch up quickly.'
              ],
              links: [
                { location: { name: 'about.curriculum' }, text: 'Learn More' }
              ]
            },
            programme: {
              heading: 'Our Academy Programmes',
              subheading: 'Lower Primary, Upper Primary And Youth Theatre',
              content: [
                'Helen O\'Grady Drama Academy operates 3 distinct programmes within the academy, each tailord for age and level. Children will learn in a safe environment with other students their own age. New Friendships will blossom and students grow together, promoting teamwork and social skills.',
                'Lower Primary, Upper Primary and Youth Theatre are designed to build upon the previous programmes teachings allowing our late starters to gain the full advantage of our curriculum. Students are taught age appropriate content and subjects that are relevant what they are taught in schools.'
              ],
              links: [
                { location: { name: 'about.programme' }, text: 'Learn More' }
              ]
            }
          }
        }
      }
    }
  }
}
