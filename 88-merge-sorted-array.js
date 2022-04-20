// 88. 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
// 双指针去解决该问题
/**
 * 	输入:
	nums1 = [1,2,3,0,0,0], m = 3
	nums2 = [2,5,6],       n = 3

	输出: [1,2,2,3,5,6]
*/
// 由于数组nums1与nums2都是有序数组，所以不难想要，如果num2中的一个元素比nums1的最后一个元素大，那么一定比nums1的其它元素都大，这样相比正序比较，倒序遍历耗时会大大减少。
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
	// p初始指向nums1最后一位
	let p = m + n + 1,
		p1 = m - 1,
		p2 = n - 1;

	//如果其中有小于0，说明直接是空数组，不用比较直接裁剪
	if(p1 < 0 || p2 < 0){
		nums1.splice(0, n, ...nums2)
	}

	while(p2 >= 0){
		// 如果p1比p2大
		if(nums1[p1] > nums2 [p2]){
			 nums1[p] = nums1[p1];
            // p与p1都左移
            p--;
            p1--
		}else{
			// 反之把p2的值丢到p位置
            nums1[p] = nums2[p2];
            // p和p2左移
            p--;
            p2--
		}
	}
};

// 这段代码其实有些极限，比如当例子是[2,0],1,[1],1时，由于第一次比较2>1所以经过修改nums1变成了[2,2]，紧接着p与p1递减。由于条件p2还是0满足条件，所以继续了第二次比较，而此时p1变成了负一，nums[-1]>nums2[p2]比较肯定失败，这才走了else分支，于是将nums2的1复制到了p位置，sums1变成了[1,2]。
 
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};

