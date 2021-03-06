$(document).ready(init);

            function init(){
                console.log('get info');
                // $.get('URL',function(data){
                //     setlist(data);
                // });

                data = [
                    {"id":"1","origen":"mexico","destino":"bogota","fecha":"fecha","tiempo":"8","pasajeros":"100","status":"delayed"},
                    {"id":"2","origen":"colombia","destino":"cancun","fecha":"fecha","tiempo":"8","pasajeros":"100","status":"delayed"},
                    {"id":"3","origen":"colombia","destino":"cancun","fecha":"fecha","tiempo":"8","pasajeros":"100","status":"delayed"},
                ]
                setlist(data)
            }

            function setlist(data){
                $.each(data,createListItem);

                elemento = `
                    <label for="exampleInputEmail1" class="form-label">id</label>
                    <select name="id" id="id" class="form-control">
                           <option selected value="0" disabled> Elige una opción </option>`;
                
                for (let index = 0; index < data.length; index++) {
                    elemento = elemento + `<option value="`+data[index].id+`"> `+data[index].id+ ` </option>`;
                }
                elemento = elemento+`</select>`;
                $('#idvuelos').append(elemento);
                console.log(data)
            }

            function createListItem(i,item){
                var e = `
                <div class="row" >
                    <div class="col-md-1"><div>`+item.id+`</div></div>
                    <div class="col-md-1"><div>`+item.origen+`</div></div>
                    <div class="col-md-1"><div>`+item.destino+`</div></div>
                    <div class="col-md-1"><div>`+item.fecha+`</div></div>
                    <div class="col-md-1"><div>`+item.tiempo+`</div></div>
                    <div class="col-md-1"><div>`+item.pasajeros+`</div></div>
                    <div class="col-md-1"><div>`+item.status+`</div></div>
                    <div class="col-md-1"><div><a href="/delete?id=`+item.id+`">delete</a></div></div>
                    </div>
                `;
                $('#tabla').append(e);
            }



            $( "form" ).on( "submit", function( event ) {
				event.preventDefault();
				form = $( this ).serialize();
                console.log($('form').serialize())

                $.ajax({
                    url:URL,
                    data: $('form').serialize(),
                    type: 'POST',
                    dataType: 'json',
                    success: function(data){
                        console.log('datos actualizados');
                    },
                    error:function(data){
                        console.log('Error, datos no actualizados');
                    }
                })
            })


            $("#delete").click( function(){
                id = $(this).attr('name')
                data_id = {'id':id}
                console.log(this,data_id)

                $.ajax({
                    url:'http://localhost/delete',
                    data: data_id,
                    type: 'POST',
                    dataType: 'json',
                    success : function(data_id){
                        console.log('borrado')
                    },
                    error : function(xhr,status){
                        console.log('error')
                    }
                })

            });