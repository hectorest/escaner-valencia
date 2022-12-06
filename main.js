const objectes = [
    {
        id: 0,
        categoria: 0,
        nom: "Ratolí",
        img: "img/estoig.jpg"
    },
    {
        id: 1,
        categoria: 0,
        nom: "Teclat",
        img: "img/estoig.jpg"
    },
    {
        id: 2,
        categoria: 0,
        nom: "Altaveu",
        img: "img/estoig.jpg"
    },
    {
        id: 3,
        categoria: 0,
        nom: "Cable USB",
        img: "img/estoig.jpg"
    },
    {
        id: 4,
        categoria: 0,
        nom: "Mòbil",
        img: "img/estoig.jpg"
    },
]

var count = 0;

$( document ).ready(function() {
    $('#modalEscaner').on('shown.bs.modal', function(){
        setTimeout(()=>{
            $('#modalEscaner').modal('toggle');
            setTimeout(()=>{
                $('#modalObjecte').modal('toggle');
                mostrarObjeto();
            }, 500);
        }, 3000);
    });

    $( document ).on("click", "#btn-intercanvi", function() {
        $('#modalObjecte').modal('toggle');
        setTimeout(()=>{
            $('#section-btn-escaner').addClass('d-none');
            $('#section-categories').removeClass('d-none');
        }, 500);
    });

    $( document ).on("click", "#btn-tornar", function() {
        $('#modalObjecte').modal('toggle');
        setTimeout(()=>{
            $('#modalEscaner').modal('toggle');
            count++;
        }, 500);
    });

    $( document ).on("click", ".categoria", function() {
        mostrarObjetosCategoria($(this).attr("cat-id"));
    });

    $( document ).on("click", ".objecte" ,function() {
        $('#modalObjectes').modal('toggle');
        setTimeout(()=>{   
            $('#modalIntercanvi').modal('toggle');         
            setTimeout(()=>{
                $('#modalIntercanvi').modal('toggle');
                setTimeout(()=>{
                    $('#modalFinal').modal('toggle');
                }, 500);
            }, 3000);
        }, 500);
    });

    $( document ).on("click", "#btn-tornar-inici" ,function() {
        $('#modalFinal').modal('toggle');
        $('#section-btn-escaner').removeClass('d-none');
        $('#section-categories').addClass('d-none');
        count++;
    });

});

function mostrarObjeto() {  
    $( "#modal-objecte" ).html("");
    objectes.filter((o)=>o.id==count).forEach((obj)=>{        
        $( "#modal-objecte" ).append(`  
            <div class="modal-content modal-loading text-center p-3">
                <div class="modal-body d-flex justify-content-center align-items-center">
                    <img class="img-objecte" src="${obj.img}">
                </div>
                <div class="text-center">
                    <h2>${obj.nom}</h2>
                    <div class="d-flex justify-content-center">
                        <button id="btn-intercanvi" type="button" class="btn-intercanviar m-2" data-toggle="modal">Intercanviar</button>
                        <button id="btn-tornar" type="button" class="btn-tornar m-2" data-toggle="modal">Tornar a escanejar</button>
                    </div>
                </div>
            </div>
        `);
    });
}

function mostrarObjetosCategoria(cat) {
    $( "#div-objectes" ).html("");
    $('#modalObjectes').modal('toggle');    
    objectes.filter((o)=>o.categoria==cat).forEach((obj)=>{
        $( "#div-objectes" ).append(`  
            <div class="objecte" obj-id="${obj.id}">
                <div class="d-flex justify-content-center align-items-center">
                    <img class="img-categoria" src="${obj.img}">
                </div>
                <h2>${obj.nom}</h2>
            </div> 
        `);
    });
}
