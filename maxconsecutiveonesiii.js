//Objective is to find the longest subarray of 1's by replacing at most k 0's

let A = [1,1,1,0,0,0,1,1,1,1,0], K = 2


//O(n) solution that uses a sliding window approach

let left = 0
let right = 0
let maxOnes = 0
let result = 0

while (right < A.length) {
    if (A[right] == 1) {
        maxOnes++
    }
    
    //If the remaining 0's are greater than K
    if (right - left + 1 - maxOnes > K) {
        if (A[left] == 1) {
            maxOnes--
        }
        left++
    }
    
    
    result = Math.max(result, right - left + 1)
    right++
}

return result