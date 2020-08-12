<template>
  <div ref="ChinaMap"></div>
</template>
<script>
import "echarts/map/js/china"
export default {
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var echarts = this.$echarts.init(this.$refs.ChinaMap);
      var option = {
        backgroundColor:'rgba(52,129,234,1)',    //整个图表的背景颜色
        visualMap:{     //视觉映射组件 根据不同值显示不同的颜色
          show:false,      //是否显示组件
          min:0,      //最小值
          max:10,     //最大值
          color:['red','skyblue'],    //最小值与最大值对应的颜色
          seriesIndex:[0]
        },
        geo: {
          map: "china",
          roam:true,
          center:[105.97, 34.71],     //当前视角的中心点，值为经纬度  比如[115.97,0.71]将会看到海南岛那一部分
          // aspectScale:0.75,   //拉伸地图 值为0-1
          label:{     //标签组件（地图名）
            normal:{  //默认状态
              show:false,    //默认是true 因为后面我们要画省会所以就直接设为false
            },
            emphasis:{    //高亮下的状态
              show:false,
            }
          },
          itemStyle:{    //区域边形样式
            normal:{  //默认
              areaColor:'#fff',  //省份块的 颜色
              borderColor:'skyblue',   //省份描边的颜色
              bowderWidth:3   //描边的宽度
            },
            emphasis:{
              areaColor:'yellow'
            }
          }
        },
        
        series: [
          {
            type:'effectScatter',     //系列为涟漪类
            coordinateSystem:'geo',
            showEffectOn:'render',  //涟漪特效的触发的方式 'render'直接显示  'emphasis'hover的时候显示
            symbolSize:10,    //标记的大小
            rippleEffect:{    //涟漪的相关配置
              brushType:'fill',   //涟漪的类型 stroke 线圈效果 stroke水波效果 
              scale:5,   //波纹的最大的缩放比例
              period:4,   //涟漪的扩散周期
            },
            label:{   //标签的配置  
              normal:{
                formatter:'{b}',
                show:true,
                position:'bottom',
                color:'blue', 
                offset:[0,10]   //文字偏移 [上，下]
              }
            },
            itemStyle:{ //每个点的配置
              normal:{
                shadowBlur:5,
              }
            },
            data:[{
              name:'上海',
              value:[121.3359985,31.1979007,10]   //经纬度与值
            },{
              name:'拉萨',
              value:[90.9169986,29.29850075,0]
            }]
          },
          {
            type: 'lines',  //系类别为路径图
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 10, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 2, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3, //尾迹线条曲直度
                    color:'orange',
                }
            },
            lable:{
              show:true,
            },
            data:[{
              coords:[
                [90.9169986,29.29850075,0],   //起点经纬度
                [121.3359985,31.1979007,10] //重点经纬度
              ]
            }]
        }
        ],
      };
      echarts.setOption(option);
    },
  },
};
</script>