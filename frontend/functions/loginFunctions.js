export const createUser = async(payload)=>{
    try{
        console.log(payload);
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