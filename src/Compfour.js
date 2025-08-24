function Compfour(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    function handleDelete(deleteid){
        var temparr=activityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(temparr)
    }
return(
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <p>{props.index+1}.{props.activity}</p>
    <button style={{height:"20px", backgroundColor:"violet",border:"none",color:"red"}} onClick={()=>handleDelete(props.id)}> Delete</button>
    </div>
   
)
}
export default Compfour