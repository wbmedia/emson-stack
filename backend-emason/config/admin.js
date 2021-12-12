module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f12de87c7f7bd6d661a95b376a37309'),
  },
});
