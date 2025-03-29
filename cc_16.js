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

fetchProductsAsync()

// TASK 4: DISPLAY THE PRODUCTS
function displayProducts(products) {
    const container = document.querySelector("#product-container")

    products.slice(0,5).forEach(product => {
        const productDiv = document.createElement('div');

        productDiv.innerHTML = `
            <h3>${product.fields.name}</h3>
            <p>$${product.fields.price}</p>
            <br>
            <img src="${product.fields.image[0].url}"</img>`;

        container.appendChild(productDiv)
    })
}

// TASK 5: REUSABLE ERROR HANDLER
function handleError(error) {
    console.log(`An error has occurred: ${error}`);   
}