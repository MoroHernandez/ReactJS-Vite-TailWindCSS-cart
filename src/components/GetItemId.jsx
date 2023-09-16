const PedirDatosId = (id) => {
    
    const productos = [
        
        { id: 1, categoria:"A", name: "Chocolate", descripcion:"El chocolate más puro", aromatizado:"Aromatizado", price: 500 , stock: 100},
        { id: 2, categoria:"A", name: "Vainilla", descripcion: "Dulce cápsula de vainilla", aromatizado:"Aromatizado", price: 500, stock: 100},
        { id: 3, categoria:"A", name: "Caramelo", descripcion: "Hecha con ramas ultra finas", aromatizado:"Aromatizado", price: 450, stock: 100},
        { id: 4, categoria:"B", name: "Canela", descripcion:"Artesanal preparacion", aromatizado:"Aromatizado", price: 500 , stock: 100},
        { id: 5, categoria:"B", name: "Almendra", descripcion: "Frutos secos del sur", aromatizado:"Aromatizado", price: 500, stock: 100},
        { id: 6, categoria:"B", name: "Frutilla", descripcion: "Las mejores frutras rojas", aromatizado:"Aromatizado", price: 450, stock: 100}
        
        
      ]


    return new Promise((resolve, reject) => {
        const item = productos.find((el) => el.id === Number(id));

        if(item) {
            setTimeout(() => {
                resolve(item)
            }, 500)
        } else {
            reject({
                error: 'No se encuentra el producto'
            })
        }

    })

}

export default PedirDatosId

