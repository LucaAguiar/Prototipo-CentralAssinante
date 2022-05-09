const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            "/v2/api": {
                target: "http://demo.ispfy.com.br",
                changeOrigin: true
            },
        },
    },
});
