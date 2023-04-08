var wms_layers = [];


        var lyr_GE_0 = new ol.layer.Tile({
            'title': 'GE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_GreennessIndexMarch22_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Greenness Index March-22",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GreennessIndexMarch22_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11350760.000000, 3959614.394864, -11349820.000000, 3960573.612226]
                            })
                        });
var lyr_GreennessIndexApril01_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Greenness Index April-01",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GreennessIndexApril01_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11350760.000000, 3959614.394864, -11349820.000000, 3960573.612226]
                            })
                        });
var lyr_GreennessIndexApril07_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Greenness Index April-07",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GreennessIndexApril07_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11350760.000000, 3959614.394864, -11349820.000000, 3960573.612226]
                            })
                        });

lyr_GE_0.setVisible(true);lyr_GreennessIndexMarch22_1.setVisible(false);lyr_GreennessIndexApril01_2.setVisible(false);lyr_GreennessIndexApril07_3.setVisible(true);
var layersList = [lyr_GE_0,lyr_GreennessIndexMarch22_1,lyr_GreennessIndexApril01_2,lyr_GreennessIndexApril07_3];
