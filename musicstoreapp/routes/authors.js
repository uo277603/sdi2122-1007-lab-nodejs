module.exports = function(app){

    app.get("/authors", function (req, res) {
        let authors = [{
            "name":"Freddie Mercury",
            "group":"Queen",
            "rol":"cantante"
        },{
            "name":"Brian May",
            "group":"Queen",
            "rol":"guitarrista"
        },{
            "name":"John Deacon",
            "group":"Queen",
            "rol":"bajista"
        }];

        let response = {
            seller:'Autores',
            authors:authors
        };
        res.render("authors/authors.twig", response);
    });

    app.get('/authors/add', function (req, res){
       res.render('authors/add.twig');
    });

    app.post('/authors/add', function (req, res){
        let response = "";
        if(req.body.name == "" || typeof (req.body.name) == "undefined")
            response += "Nombre no envíado en la petición" + "<br>";
        else
            response += "Autor: " + req.body.name + "<br>";

        if(req.body.group == "" || typeof (req.body.group) == "undefined")
            response += "Grupo no envíado en la petición" + "<br>";
        else
            response += "grupo: " + req.body.group + "<br>";

        if(req.body.rol == "" || typeof (req.body.rol) == "undefined")
            response += "Rol no envíado en la petición" + "<br>";
        else
            response += "rol: " + req.body.rol + "<br>";

        res.send(response);
    });

    app.get('/authors/*', function (req, res){
        res.redirect('/authors');
    });
};