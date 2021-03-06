$(document).ready(init);

            function init(){
                console.log('get info');

                data_flights = [
                    {
                        "id": 1,
                        "departure_date": "2021-03-06",
                        "departure_time": "16:17:39",
                        "flight_number": 234,
                        "boarding_gate": 123,
                        "passengers_limit": 100,
                        "origin": {
                          "id": 4,
                          "name": "Villavicencio"
                        },
                        "destination": {
                          "id": 2,
                          "name": "Medellín"
                        },
                        "status": {
                          "id": 2,
                          "name": "boarding"
                        }
                      },
                      {
                        "id": 2,
                        "departure_date": "2021-03-06",
                        "departure_time": "16:17:39",
                        "flight_number": 234,
                        "boarding_gate": 123,
                        "passengers_limit": 100,
                        "origin": {
                          "id": 4,
                          "name": "Mexico"
                        },
                        "destination": {
                          "id": 2,
                          "name": "Colombia"
                        },
                        "status": {
                          "id": 2,
                          "name": "boarding"
                        }
                      }
                ]

                data_status = [
                    {
                      "id": 1,
                      "name": "delayed"
                    },
                    {
                      "id": 2,
                      "name": "on-time"
                    }
                ]

                data_cities = [
                    {
                      "id": 1,
                      "name": "Mexico City"
                    },
                    {
                      "id": 2,
                      "name": "Bogotá"
                    }
                ]

                // $.get('URL',function(data){
                //     setlist(data_flights);
                // });

                // $.get('URL',function(data){
                //     setlist(data_status);
                // });

                // $.get('URL',function(data){
                //     setlist(data_cities);
                // });

                setlist(data_flights);
                setDataStatus(data_status);
                setDataOrigin(data_cities);
            }

            function setlist(data){
                $.each(data,createListItem);
                setFlightsList(data);
            }

            function setFlightsList(data){
                elemento = `
                    <label for="exampleInputEmail1" class="form-label">id</label>
                    <select name="id" id="id" class="form-control">
                    <option selected value="0" disabled> Elige una opción </option>`
                ;
                
                for (let index = 0; index < data.length; index++) {
                    elemento = elemento + `<option value="`+data[index].id+`"> `+data[index].id+ ` </option>`;
                }
                elemento = elemento+`</select>`;
                $('#idvuelos').append(elemento);
            }

            function setDataStatus(data){
                elemento = `
                    <label for="exampleInputEmail1" class="form-label">Status</label>
                    <select name="status_id" id="id" class="form-control">
                    <option selected value="0" disabled> Elige una opción </option>`
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
                    <option selected value="0" disabled> Elige una opción </option>`
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
                    <option selected value="0" disabled> Elige una opción </option>`
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
                    <div class="col-md-1"><div>`+item.id+`</div></div>
                    <div class="col-md-1"><div>`+item.origin.name+`</div></div>
                    <div class="col-md-1"><div>`+item.destination.name+`</div></div>
                    <div class="col-md-1"><div>`+item.departure_date+`</div></div>
                    <div class="col-md-1"><div>`+item.departure_time+`</div></div>
                    <div class="col-md-1"><div>`+item.passengers_limit+`</div></div>
                    <div class="col-md-1"><div>`+item.status.name+`</div></div>
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