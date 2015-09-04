module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      react: {
        files: 'lib/jsx/*.jsx',
        tasks: ['browserify']
      }
    },
    less : {
			dist : {
				files : {
					'lib/css/main.css' : 'lib/css/main.less'
				}
			}
		},
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['lib/jsx/**/*.jsx'],
        dest: 'bundle.js'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('default', [
    'browserify', 'less', 'watch'
  ]);
};
