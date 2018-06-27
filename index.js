$(document).ready(function () {

    var text = $('.commentaire-textarea');
    var newcomme = $('.new-comm');
    var article = $('.card');
    var hidden = $('.cacher');
    var code;
    
    hidden.hide();

    $('.btn').click(function(event){
        var test = $(event.target).parent();
        test.find('.cacher').toggle("slow");
    })

    text.focusout()

    text.click(function() {
         text.keypress(function(e){
            
            if(e.keyCode==13){
                e.preventDefault();
                console.log(e.target.value);
                if(e.target.value.trim()){

                    //il faut juste récuperer e.target.value.trim() et le stoquer en ajoutant l'id de 'article et de l'user

                    //ce qui sui est purement lié à l'affichage en direct en local (il faudra passer par ajax pour un affichage ailleur)
                    code = '';
                    code += '<div class="card bg-light m-3 cacher">';
                    code += '<div class="card-header">';
                    code += 'SuperUser'; //nom d'utilisateur
                    code += '</div>';
                    code += '<div class="card-body">';
                    code +='<p class="card-text">';
                    code += e.target.value.trim();
                    code += '</div></div>';

                    e.target.value ='';

                    //là je cherche la zone des commentaire et j'injecte celui ecrit

                    $(e.target).parent().parent().find(newcomme).append(code);
                }
            }
        });
    })
});