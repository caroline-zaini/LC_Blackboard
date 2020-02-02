var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://caroline:tititoto@cluster0-ufvkw.mongodb.net/blackboard?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }
)

module.exports = mongoose

// mongodb+srv://lacapsule:EXIrgUdaFEllfNSH@cluster0-9xbpy.mongodb.net/blackboard?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true