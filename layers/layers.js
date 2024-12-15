var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RBI25K_ADMINISTRASI_AR_1 = new ol.format.GeoJSON();
var features_RBI25K_ADMINISTRASI_AR_1 = format_RBI25K_ADMINISTRASI_AR_1.readFeatures(json_RBI25K_ADMINISTRASI_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_ADMINISTRASI_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_ADMINISTRASI_AR_1.addFeatures(features_RBI25K_ADMINISTRASI_AR_1);
var lyr_RBI25K_ADMINISTRASI_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_ADMINISTRASI_AR_1, 
                style: style_RBI25K_ADMINISTRASI_AR_1,
                popuplayertitle: 'RBI25K_ADMINISTRASI_AR',
                interactive: true,
                title: '<img src="styles/legend/RBI25K_ADMINISTRASI_AR_1.png" /> RBI25K_ADMINISTRASI_AR'
            });
var format_RBI25K_ADMINISTRASI_AR_2 = new ol.format.GeoJSON();
var features_RBI25K_ADMINISTRASI_AR_2 = format_RBI25K_ADMINISTRASI_AR_2.readFeatures(json_RBI25K_ADMINISTRASI_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_ADMINISTRASI_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_ADMINISTRASI_AR_2.addFeatures(features_RBI25K_ADMINISTRASI_AR_2);
var lyr_RBI25K_ADMINISTRASI_AR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_ADMINISTRASI_AR_2, 
                style: style_RBI25K_ADMINISTRASI_AR_2,
                popuplayertitle: 'RBI25K_ADMINISTRASI_AR',
                interactive: true,
                title: '<img src="styles/legend/RBI25K_ADMINISTRASI_AR_2.png" /> RBI25K_ADMINISTRASI_AR'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RBI25K_ADMINISTRASI_AR_1.setVisible(true);lyr_RBI25K_ADMINISTRASI_AR_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RBI25K_ADMINISTRASI_AR_1,lyr_RBI25K_ADMINISTRASI_AR_2];
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_ADMINISTRASI_AR_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_RBI25K_ADMINISTRASI_AR_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_ADMINISTRASI_AR_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_ADMINISTRASI_AR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});