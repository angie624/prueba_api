let url = 'https://images-api.nasa.gov/search?q=apollo%2011';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
             console.log(data.collection.items)
           
           let body = ""
           for(let i = 0; i < 10; i++){
            body+=`<tr><td>${data.collection.items[i].data[0].title}</td><td>${data.collection.items[i].data[0].description}</td><td><img src='${data.collection.items[i].links[0].href}'/></td></tr>`
                console.log(data.collection.items[i].data[0].title);
            }
            document.getElementById('data').innerHTML = body
        }