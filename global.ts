const isProduction:boolean = true
const gitPath = "/devPortfolio"

export const getPath = () : string => {
    if(isProduction){
        return gitPath
    }
    return ""
}