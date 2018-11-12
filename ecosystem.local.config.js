module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
  
      // First application
      {
        name      : 'local.api.biddler.com',
        script    : 'server.js',
        watch : true,
        ignore_watch : ["node_modules", "logs", "./package-lock.json"],
        watch_options: {
          followSymlinks: false
        },
        env: {
          BIDDLER_LOG: 'true',
          NODE_ENV: "development",
        },
        env_development : {
          NODE_ENV: 'development'
        },
        exec_mode: 'cluster',
        instances: 0
      }
    ],
  
    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy : {
      production : {
        user : 'node',
        host : ['172.23.5.249', '172.23.5.248'],
        ref  : 'origin/master',
        repo : 'https://github.com/razorphish/marasco-biddler-api.git',
        path : '/var/www/api.biddler.com/html',
        'post-deploy' : 'npm install && pm2 reload ecosystem.production.config.js --env production',
        'post-setup': 'ls -la',
        env  : {
          NODE_ENV: 'production'
        }
      },
      development : {
        user : 'node',
        host : '172.23.5.247',
        ref  : 'origin/master',
        repo : 'https://github.com/razorphish/marasco-biddler-api.git',
        path : '/var/www/local.api.biddler.com/html',
        'post-deploy' : 'npm install && pm2 reload ecosystem.local.config.js --env development',
        'post-setup': 'ls -la',
        env  : {
          NODE_ENV: 'development'
        }
      }
    }
  };
  