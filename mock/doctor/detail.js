module.exports = {
  code: '0000',
  msg: '',
  data: {
    doctorId: '@guid',
    doctorPhone: /1[358]\d{9}/,
    doctorName: '@cname',
    institutionId: '@guid',
    institutionName: '@ctitle(5,20)机构',
    institutionDepartment: '科室',
    technicalTitle: '@pick([\"主任医生\",\"外科专家\",\"主任\"])',
    workingYear: '@integer(2,20)',
    expertiseIntro: '擅长护理@ctitle(10,30)项目',
    doctorIntro: '简介@cparagraph',
    doctorIcon: '@image(200x200,@color,#fff,H)',
    doctorPic: '@image(200x200,@color,#fff,H)',
    serviceType: '服务类型：‘，’逗号隔开',
    serviceNum: '服务次数',
    doctorPrice: '@float(0, 100, 2, 2)',
    expertPrice: '@float(0, 100, 2, 2)',
    examineStatus: '@pick([1,2,3])',
    examineStatus_: '审核状态：1-通过 2-审核中 3-不通过',
    addressProvince: '@province',
    addressCity: '@city',
    addressArea: '@county',
    addressStreet: '@region()街道',
    addressDetail: '@ctitle(2,12)路',
    addressLng: '地址经度',
    addressLat: '地址纬度'
  }
}