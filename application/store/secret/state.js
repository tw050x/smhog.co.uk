export default function state () {
  return {
    google: {
      map: {
        api: {
          key: process.env.GOOGLE_ANALYTICS_TRACKING_ID
        }
      }
    }
  }
}
