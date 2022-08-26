export const createUser = async(payload)=>{
    try{
        const res = await fetch(`http://localhost:5500/api/v1/createuser`,
        {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(payload)
        })
        const data = res.json();
        return data;
        
    }
    catch(err){
        console.log(err)
    }
}

export const login = async (payload) => {
    try{
        const res = await fetch(`http://localhost:5500/api/v1/login`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })
        const data = await res.json();
        console.log(data);
        return data
        
    }
    catch(err){
        console.log(err)
    }
}