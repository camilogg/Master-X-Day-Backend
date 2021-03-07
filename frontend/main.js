$(document).ready(init);



    
            async function init(){

                test();
                
                const url1 = "http://159.89.32.176/api/flights"
                const response1 = await fetch(url1);
                const data = await response1.json();

                setlist(data.results);

                const url2 = "http://159.89.32.176/api/flight-statuses"
                const response2 = await fetch(url2);
                const data_status = await response2.json();
                setDataStatus(data_status.results);

                const url3 = "http://159.89.32.176/api/cities"
                const response3 = await fetch(url3);
                const data_cities = await response3.json();
                setDataOrigin(data_cities.results);
                setDataDestination(data_cities.results);
            }


            function setlist(data){
                $.each(data,createListItem);
                setFlightsList(data);
            }

            function setFlightsList(data){
                elemento = `
                    <label for="exampleInputEmail1" class="form-label">id</label>
                    <select name="id" id="id" class="form-control">
                    <option selected value="0" disabled> Select </option>`
                ;
                
                for (let index = 0; index < data.length; index++) {
                    elemento = elemento + `<option value="`+data[index].id+`"> `+data[index].id+ ` </option>`;
                }
                elemento = elemento+`</select>`;
                $('#idvuelos').append(elemento);
            }

            function test(){
                console.log('ok')
                $.get('http://159.89.32.176/api/flights',function(data){
                    console.log('prueba flights',data)
                });
            }

            function setDataStatus(data){
                elemento = `
                    <label for="status" class="form-label">Status</label>
                    <select name="status" id="status" class="form-control">
                    <option selected value="0" disabled> Select </option>`
                ;
                for (let index = 0; index < data.length; index++) {
                    elemento = elemento + `<option value="`+data[index].id+`"> `+data[index].name+ ` </option>`;
                }
                elemento = elemento+`</select>`;
                $('#datastatus').append(elemento);
            }

            function setDataDestination(data){
                elemento = `
                <label for="destination_id" class="form-label">Destination</label>
                    <select name="id_destination" id="id" class="form-control">
                    <option selected value="0" disabled> Select </option>`
                ;
                for (let index = 0; index < data.length; index++) {
                    elemento = elemento + `<option value="`+data[index].id+`"> `+data[index].name+ ` </option>`;
                }
                elemento = elemento+`</select>`;
                $('#destination').append(elemento);
            }

            function setDataOrigin(data){
                elemento = `
                <label for="origin_id" class="form-label">Origin</label>
                    <select name="origin_id" id="id" class="form-control">
                    <option selected value="0" disabled> Select </option>`
                ;
                for (let index = 0; index < data.length; index++) {
                    elemento = elemento + `<option value="`+data[index].id+`"> `+data[index].name+ ` </option>`;
                }
                elemento = elemento+`</select>`;
                $('#origin').append(elemento);
            }

            // https://private-b99dcc-platzimaster.apiary-mock.com/questions
            function createListItem(i,item){
                var e = `
                <div class="row" >
                    <div class="col-1 themed-grid-col"><div>`+item.id+`</div></div>
                    <div class="col-2 themed-grid-col"><div>`+item.origin.name+`</div></div>
                    <div class="col-2 themed-grid-col"><div>`+item.destination.name+`</div></div>
                    <div class="col-2 themed-grid-col"><div>`+item.departure_date+`</div></div>
                    <div class="col-2 themed-grid-col"><div>`+item.departure_time+`</div></div>
                    <div class="col-1 themed-grid-col"><div>`+item.passengers_limit+`</div></div>
                    <div class="col-1 themed-grid-col"><div>`+item.status.name+`</div></div>
                    <div class="col-1 themed-grid-col"><div><a href="/delete?id=`+item.id+`">delete</a></div></div>
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