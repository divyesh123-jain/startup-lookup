const url = `http://localhost:5500`

export const getStartUps =async () => {
    try{
        const res = await fetch(`${url}/api/v1/startup`,{
            method:"GET",
            headers:{
                token:localStorage.getItem('authToken')
            }
        })
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export const getStartUpByName = async (name) => {
    try{
        const res = await fetch(`${url}/api/v1/startup/getdata/${name}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })

        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err)
    }
}
export const getCategory = async (name) => {
    try{
        const res = await fetch(`${url}/api/v1/startup/category/${name}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })

        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err)
    }
}


export const getAllInvesters = async () => {
    try{
        const res = await fetch(`${url}/api/v1/getallinvesters`)
        const data =await res.json()
        return data
    }
    catch(err){
        console.log(err);
    }
}

export const getAllUsers = async () => {
    try{
        const res = await fetch(`${url}/api/v1/getallusers`)
        const data =await res.json()
        return data
    }
    catch(err){
        console.log(err);
    }
}