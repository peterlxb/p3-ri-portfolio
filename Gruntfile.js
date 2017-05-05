module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        option: {},
        sizes: [{
          width:320,
          height:240
        },{
          name: 'large',
          width: 640
        },{
          name: 'larger',
          width: 1024,
          suffix: "_2x",
          quality:0.6
        }],
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'images/',
          dest: 'images_src/'
        }]
      }
    },


  })

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
