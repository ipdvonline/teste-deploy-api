module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    'script: './service-worker/'',
    'watch: ['./service-worker']''
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '52.45.30.30',
      ref  : 'origin/master',
      repo : 'https://github.com/ipdvonline/teste-deploy-api.git',
      path : '/var/www',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
