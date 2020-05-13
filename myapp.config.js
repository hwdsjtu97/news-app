module.exports = {
    apps: [{
            name: "myapp-server",
            script: "./server/server.js",
            watch: true,
            env: {
                "NODE_ENV": "development",
            },
            env_production: {
                "NODE_ENV": "production"
            }
        },
        {
            name: "myapp-client",
            script: "./client/server.js",
            watch: true,
            env: {
                "NODE_ENV": "development",
            },
            env_production: {
                "NODE_ENV": "production"
            }
        }
    ]
}