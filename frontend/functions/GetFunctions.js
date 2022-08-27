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