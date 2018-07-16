
            var map = new BMap.Map("container");                 //创建地图实例
            var point = new BMap.Point(113.59079,27.216203);    //创建中心点
            map.centerAndZoom(point,15);                         //初始化地图实例，并创建地图中心点和地图层级
            var marker = new BMap.Marker(point);                 //创建点标注
            map.addOverlay(marker);                              //将标注点添加到地图上
            map.enableScrollWheelZoom(true);   //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
            map.enablePinchToZoom();        //启用双指操作缩放，默认启用
            map.enableInertialDragging(true)    //启用地图惯性拖拽，默认禁用

