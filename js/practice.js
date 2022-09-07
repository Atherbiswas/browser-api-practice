//১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 
console.log('One');
console.log('two');
function lateDisplay() {
    console.log('three');
}
console.log('four')
setTimeout(() => {console.log('three')}, 3500);
console.log('fifth');
