function translateElemnts(){
    const allImgs = document.querySelectorAll(".herocontent__leftside--managers--imgs img")
    allImgs.forEach((item,index)=>{
        if(index !==0 ) {
            item.style.transform=(`translateX(${-10*(index)}px)`)
        }
    })
}
translateElemnts()