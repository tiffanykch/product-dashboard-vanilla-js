// TASK 2: FETCH PRODUCTS WITH .then()

function fetchProductsThen() {
    
    // Send request to product API
    fetch('https://www.course-api.com/javascript-store-products')
        
        .then(response => {
            if(!response.ok) {
                throw new Error('Sorry! Network response not ok.')
            }
            return response.json();
        })

        .then(products => {
            products.forEach(product => {
                console.log(`Product Name: ${product.fields.name}`)
            });
        })

        .catch(error => {
            console.log(`Error: ${error}`);
        })
}

fetchProductsThen()