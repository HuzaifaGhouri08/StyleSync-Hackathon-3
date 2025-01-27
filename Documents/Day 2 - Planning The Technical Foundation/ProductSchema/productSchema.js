export default {
    name: 'product',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },

        {
            name: 'stock',
            type: 'number',
            title: 'Stock Level'
        },
        { 
            name: 'image',
             type: 'image',
              title: 'Product Image'
             },

             {
                name:'description',
                type: string,
                title: 'Product Description'
             },
             {
                name: 'sizes',
                type: 'array',
                title: 'Available Sizes',
                of: [{ type: 'string' }]
            }
             
    ]
};