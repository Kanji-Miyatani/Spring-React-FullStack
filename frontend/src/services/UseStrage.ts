
function useStrage(key:StrageKey) {
    const getItem = ():string | null=>{
        return localStorage.getItem(key,);
    }
  
    const setItem = (value:string)=>{
        localStorage.setItem(key,value);
    }
    const isExist = (): boolean=>{
        const value = localStorage.getItem(key);
        return value !== null && value !== undefined;
    }
    return {getItem,setItem,isExist};

}


const StrageKey ={
    JWT : "jwt",
    //ANY    
} as const;

   
type StrageKey = (typeof StrageKey)[keyof typeof StrageKey];
export {StrageKey,useStrage}

