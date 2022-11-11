import axios from 'axios'

export default {
  actions: {
    async submit (context, payload) {
      return axios.post('/api/v1/user/enquire', {
        data: {
          attributes: {
            firstname: payload.firstname,
            lastname: payload.lastname,
            email: payload.email,
            telephone: payload.telephone,
            message: payload.message
          },
          type: 'enquire'
        }
      },
      {
        headers: {
          Accept: 'application/vnd.api+json'
        }
      })
    }
  },
  namespaced: true,
  state () {
    return {
      data: {
        attributes: {
          meta: {
            breadcrumbs: [
              {
                text: 'Make An Enquiry'
              }
            ],
            description: 'Make an enquiry to South Manchester Helen O\'Grady Drama Academy. We are always happy to answer any questions you may have regarding our services.',
            keywords: 'enquire, drama classes, manchester, south manchester, speech, drama',
            title: 'Make An Enquiry with South Manchester Helen O\'Grady Drama Academy'
          },
          section: {
            enquire: {
              heading: 'Make An Enquiry',
              subheading: 'Have A Question? Get In touch',
              content: [
                'If you have a question regarding our services please don\'t hesitate to get in touch and let us know how we can help, choose a method below and we can answer any questions you may have.'
              ],
              links: [
                { location: { hash: '#byPhone' }, text: 'Get In Touch By Phone' },
                { location: { hash: '#byEmail' }, text: 'Get In Touch By Email' }
              ]
            },
            enquireByPhone: {
              heading: 'By Phone',
              subheading: 'Give us a call and we can discuss your enquiry',
              content: [
                'A conversation over the phone is by far the quickest way to get your questions answered, and you can ask any follow up questions that you may have there and then. We\'re not here to give you the hard sell, instead we impart all the relevant information and let you decide for yourself if you think this is for you or your child.',
                'We take a very hands on approach, meaning we sometimes are out of the office attending some of our classes. If we are not able to answer the phone then please do leave a message with your phone number and an appropriate time to call back and we will call you back at the next available opportunity.'
              ],
              callToAction: {
                text: 'MDE2MSA3NDkgODc0Ng=='
              }
            },
            enquireByEmail: {
              heading: 'By Email',
              subheading: 'Send us an email and we will respond as soon as we can',
              content: [
                'If you\'d prefer contacting us by email then all you need do is fill in the form above. Enter your personal details so we can respond and enter your enquiry message and we will return your enquiry as soon as possible.'
              ],
              form: {
                fieldset: {
                  personalDetails: {
                    legend: {
                      main: 'Personal Details',
                      sub: 'Please enter your personal details to allow us to return your enquiry promptly.'
                    }
                  },
                  availability: {
                    legend: {
                      main: 'Availability',
                      sub: 'Please tell us when is best to get in touch (optional).'
                    }
                  },
                  enquiry: {
                    legend: {
                      main: 'Enquiry',
                      sub: 'Please fill out your enquiry.'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
