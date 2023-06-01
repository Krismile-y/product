<template>
  <view class="newsListDetails">
	  
	     <view>
	     	<airel-floatball  />
	     </view>
	     <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	     <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
	     <!-- <view class="details-title" v-html="dataObj.title"></view>
	     <view class="warpHtml" v-html="dataObj.content"></view> -->
	     <view class="head-name">
	       {{info.author}}
	     </view>
	     <view v-html="info.content"> 
	     	
	     </view>
	     <!-- <view class="childItem" v-for="(item,index) in dataObj.child" :key="index">
	       <view class="child-head">
	         {{item.head}}
	       </view>
	       <view class="child-content" v-for="(item1,index1) in item.children" :key="index1">
	         <text class="sortSpan">{{item1.sortSpan}}</text>
	         {{item1.contentText}}
	       </view>
	     </view> -->
	   
   
  </view>
</template>

<script>
  export default {
    data() {
      return {
		info:{},  
        indexNum: 0,
        dataObj: {},
        dataList: [
          {
            title: '​国家林业和草原局关于印发《国家储备林建设管理办法（试行）》的通知',
            content: '<view class="cText">各有关省、自治区、直辖市、新疆生产建设兵团林业和草原主管部门，大兴安岭林业集团：</view><view class="cText">为进一步规范国家储备林建设，推动国家储备林高质量发展，我局制定了《国家储备林建设管理办法（试行）》。现印发给你们，请遵照执行。特此通知。</view><view class="cText">附件：国家储备林建设管理办法（试行）</view>',
            headName: '国家储备林建设管理办法（试行）',
            child: [
              {
                head: '第一章 总  则',
                children: [
                  {
                    sortSpan: '第一条',
                    contentText: '为规范国家储备林建设，保障木材安全，改善生态环境，根据《中华人民共和国森林法》《国务院办公厅关于鼓励和支持社会资本参与生态保护修复的意见》《国务院办公厅关于科学绿化的指导意见》等法律法规和相关规定，制定本办法。'
                  },
                  {
                    sortSpan: '第二条',
                    contentText: '纳入全国国家储备林规划或实施方案建设范围，依托专项投资或专项金融贷款等，并按照国家储备林建设相关政策和技术规定开展的营造林活动，以及配套的多种经营活动，适用本办法。'
                  },
                  {
                    sortSpan: '第三条',
                    contentText: '国家储备林建设应当坚持“统筹规划、突出重点，政府引导、市场运作，因地制宜、科学培育”的原则。'
                  },
                  {
                    sortSpan: '第四条',
                    contentText: '国家储备林建设应在严格保护耕地等前提下，开展集约人工林栽培、现有林改培、中幼林抚育和相关配套活动，根据实际情况优先考虑集约人工林栽培，统筹发展中短周期工业原料林和长周期大径级用材林。不得在国家级公益林范围内开展国家储备林建设。'
                  },
                  {
                    sortSpan: '第五条',
                    contentText: '国家林业和草原局负责全国国家储备林建设管理工作。地方各级林业和草原主管部门负责本行政区域国家储备林建设管理工作。各地林业和草原主管部门应商发展改革、财政等部门及金融机构建立联合工作机制，共同加强对国家储备林建设的管理。'
                  },
                  {
                    sortSpan: '第六条',
                    contentText: '国家储备林建设具体实施工作由相关建设主体负责。国家储备林建设主体是指承担国家储备林建设任务、具有独立法人资格的企事业单位或其他合作经济组织、林业专业户等。'
                  },
                ]
              },
              {
                head: '第二章 规划与投资',
                children: [
                  {
                    sortSpan: '第七条',
                    contentText: '全国国家储备林建设规划和实施方案由国家林业和草原局商国家发展改革委等部门编制。省级林业和草原主管部门结合实际工作情况，依据全国国家储备林建设规划和实施方案，编制本行政区域国家储备林建设规划或实施方案。'
                  },
                  {
                    sortSpan: '第八条',
                    contentText: `国家储备林建设主体依据省级国家储备林建设规划或实施方案，编制国家储备林项目建设方案，明确具体建设范围、内容、目标、任务、技术路线、投资及资金筹措、风险控制、环境影响评估、效益分析、保障措施等内容。科学确定国家储备林营造林活动和配套的多种经营活动的投资比例。建设方案应按程序报省级林业和草原主管部门组织专家论证。其中，总投资额20亿元以上（含20亿元）,以及在全国国家储备林规划和实施方案建设范围之外、但因国家重大战略等需要开展的国家储备林建设项目，建设方案经省级林业和草原主管部门预审后，报国家林业和草原局组织专家论证。建设方案未按程序组织专家论证的，不得纳入国家储备林建设范围。采用政府和社会资本合作（PPP）模式实施的国家储备林建设项目，已按照有关要求纳入全国PPP综合信息平台项目库的，无需另行组织专家论证。`
                  },
                  {
                    sortSpan: '第九条',
                    contentText: '国家储备林建设中央预算内投资计划按相关规定申报和下达。国家储备林建设可将对应计划任务的中央预算内投资作为项目资本金。'
                  },
                  {
                    sortSpan: '第十条',
                    contentText: '利用金融贷款建设国家储备林的，国家储备林建设主体依照金融机构相关规定，办理项目贷款手续，并将贷款结果及时按程序报省级林业和草原主管部门，省级林业和草原主管部门及时将结果报国家林业和草原局。'
                  },
                ]
              }
            ]
          }
        ]
      }
    },
    onLoad(option) {
      this.indexNum = option.index
      this.dataObj = this.dataList[this.indexNum]
	  
	  this.$fn.request('introduction','GET',{'tid':"25"}).then(res=>{
	  	console.log(res.data.data)
		this.info=res.data.data
	  })
    }
  }
</script>

<style lang="less" scoped>
.newsListDetails {
  box-sizing: border-box;
  width: 100%;
  padding: 0 20upx;
  .details-title {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 15upx 0 40upx;
  }
  .warpHtml {
    /deep/ .cText {
      font-size: 14px;
      text-indent: 2em;
    }
  }
  .head-name {
    width: 100%;
    margin: 40upx 0;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
  .childItem {
    .child-head {
      font-size: 16px;
      width: 100%;
      text-align: center;
    }
    .child-content {
      font-size: 14px;
      text-indent: 2em;
      text-align: justify;
      .sortSpan {
        font-weight: 600;
        margin-right: .5em;
      }
    }
  }
}
</style>

