/**
 * Created by sunwd on 2018/10/1.
 */
import dateFormater from '@/filters/index'
const FILTER_DATA = {
  // 质控状态
  checkStatusFilter(value) {
    if (value === 1) {
      return '待审核'
    } else if (value === 2) {
      return '审核通过'
    } else if (value === 3) {
      return '审核不通过'
    }
  },
  // 评估状态
  evaluateStatusFilter(value) {
    if (value === 1) {
      return '未提交(草稿)'
    } else if (value === 2) {
      return '未评估'
    } else if (value === 3) {
      return '评估失败'
    } else if (value === 4) {
      return '已评估'
    }
  },
  // 性别
  sexFilter(value) {
    if (value == 1) {
      return '男'
    } else if (value == 2) {
      return '女'
    }
  },
  // 录入状态
  resultStatusFilter(value) {
    if (value === 1) {
      return '已录入'
    } else if (value === 2) {
      return '未录入'
    }
  },
  // 录入结果
  resultFilter(value) {
    if (value === 1) {
      return '阴性'
    } else if (value === 2) {
      return '阳性'
    } else if (value === 3) {
      return '未知/无效'
    }
  },

  // 高危
  cancerRiskFilter(value) {
    if (value == 1) {
      return '高危'
    } else if (value == 2) {
      return '非高危'
    } else {
      return '--'
    }
  },

  //签到状态
  signStatusFilter(value) {
    if (value == 1) {
      return '已签到'
    } else if (value == 2) {
      return '未签到'
    }
  },

  // 时间格式化
  dateFilter(value) {
    if (value) {
      return dateFormater.dateFormater(value)
    }
  },
  // 时间格式化-只保留月日
  monthFilter(value) {
    if (value) {
      return dateFormater.monthFormater(value)
    }
  },

  // 小写转大写
  weekInfoFilter(value) {
    if (value === '1') {
      return '一'
    } else if (value === '2') {
      return '二'
    } else if (value === '3') {
      return '三'
    } else if (value === '4') {
      return '四'
    } else if (value === '5') {
      return '五'
    } else if (value === '6') {
      return '六'
    } else if (value === '7') {
      return '日'
    }
  },

  // 项目状态
  personStatusFilter(value) {
    if (value === 1) {
      return '正常'
    } else if (value === 2) {
      return '死亡'
    } else if (value === 3) {
      return '退出'
    }
  },

  // 样本类型
  sampleTypeFilter(value) {
    if (value === 'S') {
      return '血清'
    } else if (value === 'C') {
      return '血细胞'
    } else if (value === 'B') {
      return '病理标本'
    } else if (value === 'P') {
      return '血浆'
    } else if (value === 'W') {
      return '白细胞'
    } else {
      return ''
    }
  },

  // 快递状态
  courierStatusFilter(value) {
    if (value === 1) {
      return '已接收'
    } else if (value === 2) {
      return '未寄出'
    } else if (value === 3) {
      return '已寄出'
    }
  },
  // 癌种
  cancerTypeFilter(value) {
    if (value === 'fa') {
      return '肺癌'
    } else if (value === 'ca') {
      return '肠癌'
    } else if (value === 'rxa') {
      return '乳腺癌'
    } else if (value === 'ga') {
      return '肝癌'
    } else if (value === 'sxhda') {
      return '上消化道癌'
    } else {
      return '全部'
    }
  },

  // 任务类型
  taskTypeFilter(value) {
    if (value === 'zmrw') {
      return '招募任务'
    } else if (value === 'scrw') {
      return '筛查任务'
    }
  },

  // 检查项目
  checkProjectFilter(value) {
    return dateFormater.checkProject(value)
  },

  // 机构类型
  deptTypeFilter(value) {
    if (value === 'zmd') {
      return '招募点'
    } else if (value === 'scjg') {
      return '筛查机构'
    } else if (value === 'gjjg') {
      return '管理机构'
    } else if (value === 'gj') {
      return '国家癌症中心'
    }
  },
  // 结果录入状态
  inputCancerFilter(value) {
    if (value === 1) {
      return '已录入'
    } else if (value === 2) {
      return '未录入'
    } else if (value === 3) {
      return '待提交'
    } else {
      return ''
    }
  },
  // 筛查状态
  resultCancerFilter(value) {
    if (value === 1) {
      return 'AFP阳性'
    } else if (value === 2) {
      return '肝硬化'
    } else if (value === 3) {
      return '肝占位性病变'
    } else if (value === 4) {
      return '疑似肝癌'
    } else if (value === 5) {
      return '阴性'
    }
  },
  // 筛查结果-胃
  screeningResultWFilter(value) {
    if (value === 1) {
      return '胃癌癌前病变'
    } else if (value === 2) {
      return '胃癌'
    } else if (value === 3) {
      return '胃癌阴性'
    }
  },
  // 筛查状态-食管
  rscreeningResultSGFilter(value) {
    if (value === 1) {
      return '食管癌前病变'
    } else if (value === 2) {
      return '食管癌'
    } else if (value === 3) {
      return '食管癌阴性'
    }
  },
  //筛查结果--肠癌
  colorectaResultSGFilter(value) {
    if (value === 2) {
      return '肠癌前病变'
    } else if (value === 3) {
      return '肠癌'
    } else if (value === 1) {
      return '肠癌阴性'
    }
  },
  //筛查结果--肺癌
  lungResultFilter(value) {
    if (value === 1) {
      return '阴性'
    } else if (value === 2) {
      return '阳性结节'
    } else if (value === 3) {
      return '疑似肺癌'
    } else if (value === 4) {
      return '气道病变'
    }
  },
  // 高危评估结果
  riskResultFilter(value) {
    if (value) {
      return value
    } else {
      return '非高危'
    }
  },
  // 数组转字符串
  deptNameChangeFilter(value) {
    if (value) {
      return value.join('')
    } else {
      return ''
    }
  },
  // 筛查状态
  mammaryResultFilter(value) {
    if (value === 1) {
      return '阴性'
    } else if (value === 2) {
      return '可疑阳性'
    } else if (value === 3) {
      return '阳性'
    }
  },
  // 通知状态
  noticeStatusFilter(value) {
    if (value === 1) {
      return '已通知'
    } else if (value === 2) {
      return '未通知'
    }
  },
  // 装载情况
  loadingStatusFilter(value) {
    if (value) {
      return `${value}/${100}`
    }
  },
  // 上传状态
  uploadInformedFilter(value) {
    if (value === 1) {
      return '已上传'
    } else {
      return '未上传'
    }
  },

  //民族
  flokFilter(value) {
    if (value === 1) {
      return '汉族'
    } else if (value === 2) {
      return '蒙古族'
    } else if (value === 3) {
      return '回族'
    } else if (value === 4) {
      return '满族'
    } else if (value === 5) {
      return '壮族'
    } else if (value === 6) {
      return '维吾尔族'
    } else if (value === 7) {
      return '哈萨克族'
    } else if (value === 8) {
      return '其他'
    }
  }
}

export default FILTER_DATA