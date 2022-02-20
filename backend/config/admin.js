module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77b895dd8f82b2e9edb5d97f480bbe48'),
  },
});
