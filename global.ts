const isProduction:boolean = false
const gitPath = "/devPortfolio"

export const getPath = () : string => {
    if(isProduction){
        return gitPath
    }
    return ""
}