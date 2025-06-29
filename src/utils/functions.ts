
/**
 * 
 * @param {string} txt - the input text to be sliced 
 * @param {number} [max=50] - the maximum length before trunction 
 * @returns the sliced text, with an ellipses (...) appended if truncated
 */
export function txtSlicer(txt:string,max:number=50){
    if(txt.length>=max){
        return `${txt.slice(0,max)} ...`
    }
    return txt
}