function dateFormater(date){
  date=new Date(date);
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return year + seperator1 + month + seperator1 + strDate;
}
function timeFormater(date){
  date=new Date(date);
  var seperator1 = ".";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var strHours = date.getHours();
  var strMinutes = date.getMinutes();
  var strSeconds = date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return year + seperator1 + month + seperator1 + strDate +' ' + strHours + ':' + strMinutes + ':' + strSeconds;
}
function monthFormater(date){
  date=new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  return  month + '月' + strDate +'日';
}

function checkProject(value) {
  if (value === 'ct') {
    return '低剂量CT'
  } else if (value === 'cj') {
    return '结直肠镜'
  } else if (value === 'gcs') {
    return '肝癌三项'
  } else if (value === 'rxcs') {
    return '乳腺超声'
  } else if (value === 'rxxx') {
    return '乳腺X线'
  } else if (value === 'sxhdnj') {
    return '上消内镜'
  } else {
    return '--'
  }
}
export default {
  dateFormater,
  timeFormater,
  monthFormater,
  checkProject
  }