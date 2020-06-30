//Load the plugins 
//register tasks

module.exports = function(grunt){
    //Configuration
    grunt.initConfig({
        concat:{
            js:{
                // src:['js/JQuery.js', 'js/script.js','js/rslides.js']
                src:['js/*.js'],
                dest:'build/scripts.js'
            }
        }
    })

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat')

    //Register Tasks
    grunt.registerTask('run', function(){
        console.log("Task is running")
    })

}