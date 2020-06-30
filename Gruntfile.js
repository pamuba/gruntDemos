//Load the plugins 
//register tasks

module.exports = function(grunt){
    //Configuration
    grunt.initConfig({
        concat:{
            js:{
                // src:['js/JQuery.js', 'js/script.js','js/rslides.js']
                src:['js/jquery.js', 'js/*.js'],
                // src:['js/*.js'],
                dest:'build/scripts.js'
            },
            css:{
                src:['css/*.css'],
                dest:'build/styles.css'
            }
        }
    })

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat')

    //Register Tasks
    grunt.registerTask('concat-js', ['concat:js']);

    grunt.registerTask('concat-css', ['concat:css']);

}