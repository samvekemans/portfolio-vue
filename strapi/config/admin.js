module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b9161094685952ef3a9a8da41725c7e7"),
  },
});
