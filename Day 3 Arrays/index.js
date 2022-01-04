function getSecondLargest(nums) {
    let lar, sec;
    lar = nums[0];
    sec = nums[0];
    for(let i=1; i<nums.length; i++){
        if (nums[i] > lar) {
            sec = lar;
            lar = nums[i];
        }
        else if (nums[i] > sec && nums[i] < lar){
            sec = nums[i];
        }
    }
    return sec;
}