module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: "AKIAYP5XFFTSPE26ODQN",
          secretAccessKey: "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",
          region: "eu-west-2",
          params: {
            Bucket: "strapi-orbitfin",
          },
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
      },
    },
  },
});
