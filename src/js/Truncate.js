
export const truncate = (text)=>{

    if(text.length >= 51){
        const descriptionCut = text.slice(0,51);
        return(descriptionCut +" ...")
    }
    else{
        return(text);
    }

}