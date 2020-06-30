//Load the plugins 
//register tasks
var sass = require('node-sass')

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
                // src:['css/*.css'],
                src:['css/reset.css','css/bootstrap.css','css/style.css'],
                dest:'build/style.css'
            }
        },
        sass:{
            options:{
                implementation:sass,
                // sourceMap:true
            },
            build:{
                files:[{
                    src:'css/sass/styles.scss',
                    dest:'css/style.css'
                }]
            }
        },
        uglify:{
            build:{
                files:[{
                    src:'build/scripts.js',
                    dest:'build/scripts.js'
                }]
            }
        }
    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')


    //Register Tasks
    grunt.registerTask('concat-js', ['concat:js']);

    grunt.registerTask('concat-css', ['concat:css']);

}