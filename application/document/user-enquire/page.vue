<template>
  <div class="who-we-are">

    <!-- introduction -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.userEnquire.data.attributes.section.enquire.heading }}</span>
        <span slot="h2">{{ $store.state.userEnquire.data.attributes.section.enquire.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.userEnquire.data.attributes.section.enquire.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.userEnquire.data.attributes.section.enquire.links.length" :links="$store.state.userEnquire.data.attributes.section.enquire.links" />
    </section>

    <!-- contact by phone -->
    <section class="section-content-padding" id="byPhone">
      <section-heading>
        <span slot="h1">{{ $store.state.userEnquire.data.attributes.section.enquireByPhone.heading }}</span>
        <span slot="h2">{{ $store.state.userEnquire.data.attributes.section.enquireByPhone.subheading }}</span>
      </section-heading>
      <div class="call-to-action-container">
        <span class="sub">Call Us On</span>
        <span class="main">{{ $decode($store.state.userEnquire.data.attributes.section.enquireByPhone.callToAction.text) }}</span>
      </div>
      <section-paragraph v-for="(content, index) in $store.state.userEnquire.data.attributes.section.enquireByPhone.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
    </section>

    <!-- contact by email d -->
    <section class="section-content-padding" id="byEmail">
      <section-heading>
        <span slot="h1">{{ $store.state.userEnquire.data.attributes.section.enquireByEmail.heading }}</span>
        <span slot="h2">{{ $store.state.userEnquire.data.attributes.section.enquireByEmail.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.userEnquire.data.attributes.section.enquireByEmail.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <div class="form-container">
        <form autocomplete="off" method="post" name="enquire" novalidate :action="form.action" @submit.prevent="handleEnquiryFormSubmit">
          <fieldset>
            <legend>
              <span class="main">{{ $store.state.userEnquire.data.attributes.section.enquireByEmail.form.fieldset.personalDetails.legend.main }}</span>
              <span class="sub">{{ $store.state.userEnquire.data.attributes.section.enquireByEmail.form.fieldset.personalDetails.legend.sub }}</span>
            </legend>
            <form-input delay="500" label="First Name" name="firstname" type="text" v-model="form.data.firstname" :validation="form.validation.firstname" />
            <form-input delay="500" label="Last Name" name="lastname" type="text" v-model="form.data.lastname" :validation="form.validation.lastname" />
            <form-input delay="500" label="Email Address" name="email" type="email" v-model="form.data.email" :validation="form.validation.email" />
            <form-input delay="500" label="Telephone Number" name="telephone" type="text" v-model="form.data.telephone" :validation="form.validation.telephone" />
          </fieldset>
          <fieldset>
            <legend>
              <span class="main">{{ $store.state.userEnquire.data.attributes.section.enquireByEmail.form.fieldset.enquiry.legend.main }}</span>
              <span class="sub">{{ $store.state.userEnquire.data.attributes.section.enquireByEmail.form.fieldset.enquiry.legend.sub }}</span>
            </legend>
            <form-textarea delay="500" label="Message" name="message" v-model="form.data.message" :validation="form.validation.message" />
          </fieldset>
          <form-submit :submitDisabled="submitDisabled" @submit.prevent="handleEnquiryFormSubmit">
            <span>Send Enquiry</span>
          </form-submit>
          <div class="submission-failed" v-if="form.submission.failed">
            Something went wrong when attempting to submit your enquiry, please try again later.
          </div>
          <div class="submission-success" v-if="form.submission.success">
            Your enquiry has been successfully submitted.
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import FormInput from '@application/component/form-input'
  import FormSubmit from '@application/component/form-submit'
  import FormTextarea from '@application/component/form-textarea'
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', { breadcrumbs: this.$store.state.userEnquire.data.attributes.meta.breadcrumbs, type: 'main' })
    },

    components: {
      FormInput,
      FormSubmit,
      FormTextarea,
      SectionHeading,
      SectionLinkBar,
      SectionParagraph
    },

    computed: {
      submitDisabled () {
        // @todo: make better
        return !! ( this.$errors.items.length || Object.keys(this.form.data).filter(key => ! this.form.data[key].length).length )
      }
    },

    data () {
      return {
        form: {
          action: '/mailer',
          data: {
            firstname: '',
            lastname: '',
            email: '',
            telephone: '',
            message: ''
          },
          submission: {
            failed: false,
            success: false
          },
          validation: {
            email: {
              email: true,
              required: true
            },
            firstname: {
              required: true,
              alpha: true
            },
            lastname: {
              required: true,
              alpha: true
            },
            message: {
              required: true
            },
            telephone: {
              required: true,
              regex: /[0-9\s]+/
            }
          }
        }
      }
    },

    // @todo: make meta better
    metaDescription () {
      return this.$store.state.userEnquire.data.attributes.meta.description
    },

    metaKeywords () {
      return this.$store.state.userEnquire.data.attributes.meta.keywords
    },

    metaTitle () {
      return this.$store.state.userEnquire.data.attributes.meta.title
    },

    methods: {
      async handleEnquiryFormSubmit () {
        try {
          this.form.submission.failed = false
          this.form.submission.success = false

          const response = await this.$store.dispatch('userEnquire/submit', this.form.data)

          this.form.data.firstname = ''
          this.form.data.lastname = ''
          this.form.data.email = ''
          this.form.data.telephone = ''
          this.form.data.message = ''

          this.form.submission.success = true
        }
        catch (error) {
          this.form.submission.failed = true
        }
      }
    },

    name: 'DocumentUserEnquire'
  }
</script>
