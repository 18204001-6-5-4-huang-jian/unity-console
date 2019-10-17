//用于验证手机号
const checkPhone = (rule, value, callback) => {
  if (value && !(/^1[34578]\d{9}$/.test(value))) {
    callback(new Error('请输入11位手机号'))
  }else {
    callback();
  }
};

// 5-20个汉字的校验
const checkFont = (rule, value, callback) => {
  if (value && !(/^[\u4e00-\u9fa5]{2,20}$/.test(value))) {
    callback(new Error('请输入2-20个汉字'))
  }else {
    callback();
  }
};

//不超过两百个字符
const length200 = (rule, value, callback) => {
    if (value && !(value.length<200)){
        callback(new Error('最大可输入200个字符'))
    }else {
        callback();
    }
};
// 纯汉字
const checkFontH = (rule, value, callback) => {
    if (value && !(/^[\u4e00-\u9fa5]+$/.test(value))) {
        callback(new Error('请输入汉字'))
      }else {
        callback();
      }
  };

// 身份证号的校验
const idCard = (rule, value, callback) => {
  if (value && !(/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(value))) {
    callback(new Error('身份证号格式不对'))
  }else {
    callback();
  }
}
// 5位数字包含1位小数
const count5 = (rule, value, callback) => {
    if (value && !(/^([1-9]\d{0,2}|0)(\.\d{1}){0,1}$/.test(value))) {
        callback(new Error('请输入0-999，小数点后一位'))
    }else if(value>=1000){
        callback(new Error('请输入0-999，小数点后一位'))
    }else {
        callback();
    }
};
// 最多5位数字
const countLength5 = (rule, value, callback) => {
    if (value && !(/^[0-9]{1,5}$/.test(value))) {
        callback(new Error('请输入不超过5位的数字'))
    }else {
        callback();
    }
};
// 数字
const count = (rule, value, callback) => {
    if (value && !(/^[0-9]$/.test(value))) {
        callback(new Error('请输入正整数'))
    }else {
        callback();
    }
};
// 纯整数数字
const countZS = (rule, value, callback) => {
    if (value && !(/^[0-9]{1,}$/.test(value))) {
        callback(new Error('请输入正整数'))
    }else {
        callback();
    }
};
// 大于0的整数
const countB0 = (rule, value, callback) => {
    if (value && !(/^[0-9]{1,}$/.test(value))) {
        callback(new Error('大于0的整数'))
    }else if(value == 0) {
        callback(new Error('大于0的整数'))
    }else{
        callback();
    }
};
// 数字50以内
const count50 = (rule, value, callback) => {
    if (value && !(/^[0-9]{1,2}$/.test(value))) {
        callback(new Error('请输入1-50的整数'))
    }else if (value<1||value>50 ) {
        callback(new Error('请输入1-50的整数'))
    }else {
        callback();
    }
};
// 数字40以内
const count40 = (rule, value, callback) => {
    if (value && !(/^[0-9]{1,2}$/.test(value))) {
        callback(new Error('请输入1-40的整数'))
    } else if (value < 1 || value > 40) {
        callback(new Error('请输入1-40的整数'))
    } else {
        callback();
    }
};
// 数字60以内
const count60 = (rule, value, callback) => {
    if (value && !(/^[0-9]{1,2}$/.test(value))) {
        callback(new Error('请输入1-60的整数'))
    } else if (value < 1 || value > 60) {
        callback(new Error('请输入1-60的整数'))
    } else {
        callback();
    }
};
// 1-50之内的数字，保留小数点后两位
const countFloat50 = (rule, value, callback) => {
    if (value && !(/^(([1-4]\d|[1-9])(\.\d{1,2})|([1-4]\d|[1-9]|50))$/.test(value))) {
        callback(new Error('请输入1-50之内的数字，小数点后两位'))
    }else if(value < 1 || value > 50){
        callback(new Error('请输入1-50之内的数字，小数点后两位'))
    }else{
        callback();
    }
};
// 1-100之内的数字，小数点后两位
const countFloat100 = (rule, value, callback) => {
    if (value && !(/^(([1-9]\d|[1-9])(\.\d{1,2})|([1-9]\d|[1-9]|100))$/.test(value))) {
        callback(new Error('请输入1-100之内的数字，小数点后两位'))
    }else if(value < 1 || value >100){
        callback(new Error('请输入1-100之内的数字，小数点后两位'))
    }else{
        callback();
    }
};
// 0-100之内的数字，小数点后两位
const countFloat0100 = (rule, value, callback) => {
    if (value && !(/^(([1-9]\d|[0-9])(\.\d{1,2})|([1-9]\d|[0-9]|100))$/.test(value))) {
        callback(new Error('0-100之内的数字，小数点后两位'))
    }else if(value >100){
        callback(new Error('0-100之内的数字，小数点后两位'))
    }else{
        callback();
    }
};
// 1-100之内的整数
const countInit100 = (rule, value, callback) => {
    if (value && !(/^([1-9]\d|[1-9]|100)$/.test(value))) {
        callback(new Error('请输入1-100的整数'))
    }else if(value < 1 || value >100){
        callback(new Error('请输入1-100的整数'))
    }else{
        callback();
    }
};
// 0-100之内的整数
const countInit0100 = (rule, value, callback) => {
    if (value && !(/^([1-9]\d|[1-9]|100|0)$/.test(value))) {
        callback(new Error('请输入0-100的整数'))
    }else if(value >100){
        callback(new Error('请输入0-100的整数'))
    }else{
        callback();
    }
};
// 1-10的整数
const countInit10 = (rule, value, callback) => {
    if (value && !(/^([1-9]|10)$/.test(value))) {
        callback(new Error('请输入1-10的整数'))
    }else if(value < 1 || value >10){
        callback(new Error('请输入1-10的整数'))
    }else{
        callback();
    }
};
// 1-12的整数
const countInit12 = (rule, value, callback) => {
    if (value && !(/^([1-9]|10|11|12)$/.test(value))) {
        callback(new Error('请输入1-12的整数'))
    }else if(value < 1 || value >12){
        callback(new Error('请输入1-12的整数'))
    }else{
        callback();
    }
};
// 0-12的整数
const countInit012 = (rule, value, callback) => {
    if (value && !(/^([1-9]|10|11|12|0)$/.test(value))) {
        callback(new Error('请输入0-12的整数'))
    }else if(value >12){
        callback(new Error('请输入0-12的整数'))
    }else{
        callback();
    }
};
// 20以内的整数
const countInit20 = (rule, value, callback) => {
    if (value && !(/^([1-9]|[1]\d|20)$/.test(value))) {
        callback(new Error('请按照取材部位填写顺序号，如：1，2，3…20'))
    }else if(value < 1 || value >20){
        callback(new Error('请按照取材部位填写顺序号，如：1，2，3…20'))
    }else{
        callback();
    }
};
// 身高100-300
const countSG = (rule, value, callback) => {
    if (value && !(/^([1-2]\d{2}|300)$/.test(value))) {
        callback(new Error('请输入100-300之间的整数'))
    }else if(value < 100 || value >300){
        callback(new Error('请输入100-300之间的整数'))
    }else{
        callback();
    }
};
// 体重20-300
const checkTZ = (rule, value, callback) => {
    if (value && !(/^([2-9]\d{1}|[1-2]\d{2}|300|([2-9]\d{1}|[1-2]\d{2}|300)(\.\d{1}))$/.test(value))) {
        callback(new Error('请输入20-300之间的数字，小数点后一位'))
    }else if(value < 20 ||  value>300){
        callback(new Error('请输入20-300之间的数字，小数点后一位'))
    }else {
        callback();
    }
};
// 腰围40-300
const checkYW = (rule, value, callback) => {
    if (value && !(/^([4-9]\d{1}|[1-2]\d{2}|300)$/.test(value))) {
        callback(new Error('请输入40-300之间的整数'))
    }else if(value < 40 || value >300){
        callback(new Error('请输入40-300之间的整数'))
    }else{
        callback();
    }
};
// 12-99
const checkY = (rule, value, callback) => {
    if (value && !(/^([2-9]\d{1}|[1][2-9]{1})$/.test(value))) {
        callback(new Error('请输入12-99之间的整数'))
    }else if(value < 12 || value >99){
        callback(new Error('请输入12-99之间的整数'))
    }else{
        callback();
    }
};
// 1-999
const count999 = (rule, value, callback) => {
    if (value && !(/^([1-9]\d{0,2})$/.test(value))) {
        callback(new Error('请输入1-999之间的整数'))
    }else if(value < 1 || value >999){
        callback(new Error('请输入1-999之间的整数'))
    }else{
        callback();
    }
};
// 1-99
const count99 = (rule, value, callback) => {
    if (value && !(/^([1-9]\d{0,1})$/.test(value))) {
        callback(new Error('请输入1-99之间的整数'))
    }else if(value < 1 || value >99){
        callback(new Error('请输入1-99之间的整数'))
    }else{
        callback();
    }
};
export default {
  checkPhone,
  checkFont,
  checkFontH,
  idCard,
  count5,
  countLength5,
  count,
  count50,
  count40,
  count60,
  countFloat50,
  countFloat100,
  countFloat0100,
  countInit100,
  countInit10,
  countInit12,
  countInit20,
  countInit0100,
  countInit012,
  length200,
  countSG,
  checkTZ,
  checkYW,
  checkY,
  count999,
  count99,
  countZS,
  countB0
  
}




