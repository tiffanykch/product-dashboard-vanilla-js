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

// TASK 3: FETCH PRODCUTS WITH async/wait
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products')

        if(!response.ok) {
            throw new Error('Sorry! Network response not ok.')
        }

        const products = await response.json()

        // Calling helper function
        displayProducts(products)
        
    } catch (error) {
        handleError(error); 
    }  
}