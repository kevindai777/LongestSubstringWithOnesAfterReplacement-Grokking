//Java Solution

class Solution {
    public int longestOnes(int[] A, int K) {
        int left = 0;
        int right = 0;
        int ans = 0;
        int numOfOnes = 0;
        
        while (right < A.length) {
            if (A[right] == 1) {
                numOfOnes++;
            }
            
            if (right - left + 1 - numOfOnes > K) {
                if (A[left] == 1) {
                    numOfOnes--;
                }
                left++;
            }
            
            ans = Math.max(ans, right - left + 1);
            right++;
        }
        
        return ans;
    }
}