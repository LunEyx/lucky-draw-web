export const get_app_url = () => {
  let app_url = 'http://localhost:3000'
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    app_url = `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL!}`
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    app_url = `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL!}`
  }

  return app_url
}
