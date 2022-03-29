const {ObjectId} = require("mongodb");
module.exports = function (app, commentsRepository){
    app.post('/comments/:song_id', function (req, res){

        if(req.session.user == null){
            res.send("Usuario no identificado, comentario no añadido.");
            return;
        }
       let comment = {
           author: req.body.author,
           text: req.body.text,
           song_id: ObjectId(req.params.song_id)
       }
        console.log(comment);
       commentsRepository.insertComment(comment, function (commentId){
          if(commentId == null){
              res.send("Error al insertar canción");
          } else{
              res.send("Agregado el comentario ID: " + commentId);
          }
       });
    });
}