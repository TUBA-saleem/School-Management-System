const moment=require("moment")


const getSession=()=>{

    const currentYear=moment().year()
    const nextYear=moment().add(1,"year").year()
    const session=`${currentYear}-${nextYear.toString().slice(2)}`

    return session;

}

module.exports= {getSession}