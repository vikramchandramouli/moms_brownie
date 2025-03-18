export const addToCart=(data)=>{
    return {
        type:"AddtoCart",
        payload: data
    }
}

export const removeFromCart=(data)=>{
    return{
        type:"RemovefromCart",
        payload:data
    }
}

export const addCartId=(data)=>{
    return{
        type:"AddCartId",
        payload:data
    }
}

export const removeCartId=(data)=>{
    return{
        type:"RemoveCartId",
        payload:data
    }       
}

export const orderedList=(data)=>{
    return{
        type:"OrderedList",
        payload:data
    }       
}

export const customerDetails=(data)=>{
    return{
        type:"CustomerDetails",
        payload:data
    }       
}