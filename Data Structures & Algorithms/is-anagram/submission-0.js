class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!== t.length){
            return false
        }
      
            let count =new Map();
            for(let i=0;i<s.length;i++){
count.set(s[i],(count.get(s[i])|| 0)+1);
count.set(t[i],(count.get(t[i])||0)-1);
            }

            for(const  value  of count.values()){
                if(value!==0){
                    return false
                }
            }
            return true;
        
       //check if both array lengths are the same if not return false 
       //traverse through the length of s (since we know both strings are equal now)
       // access each char of s and t and compare by converting to number? ascii value?
       //do we implement set as datastructure?
    }
}
