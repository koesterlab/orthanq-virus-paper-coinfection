const heatmap_plot = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "values": []
    },
    "hconcat": [
        
        {
            
            "layer": [
            
            {
                "mark": {
                    "type": "text",
                    "align":"left"
                },
                "encoding": {
                    "x": {
                        "field": "dummy",
                        "axis": {
                            "labelExpr": "'sample'",
                            "labelAngle": -90,
                            "labelOffset": 7,
                            "title": null,
                            "ticks": false,
                            "orient": "top",
                            "domain": false
                        }
                    },
                    "y": {
                        "field": "index",
                        "type": "ordinal",
                        "axis": null,
                    },
                    "text": {
                        "field": "sample",
                        "type": "nominal",
                        "title": "sample",
                        
                    }
                }
            }
            
        ]},
        
        {
            
            "layer": [
            
            {
                "mark": {
                    "type": "text",
                    "align":"left"
                },
                "encoding": {
                    "x": {
                        "field": "dummy",
                        "axis": {
                            "labelExpr": "'prediction'",
                            "labelAngle": -90,
                            "labelOffset": 7,
                            "title": null,
                            "ticks": false,
                            "orient": "top",
                            "domain": false
                        }
                    },
                    "y": {
                        "field": "index",
                        "type": "ordinal",
                        "axis": null,
                    },
                    "text": {
                        "field": "prediction",
                        "type": "nominal",
                        "title": "prediction",
                        
                    }
                }
            }
            
        ]},
        
        {
            
            "layer": [
            
            {
                "mark": {
                    "type": "text",
                    "align":"left"
                },
                "encoding": {
                    "x": {
                        "field": "dummy",
                        "axis": {
                            "labelExpr": "'WHO_name'",
                            "labelAngle": -90,
                            "labelOffset": 7,
                            "title": null,
                            "ticks": false,
                            "orient": "top",
                            "domain": false
                        }
                    },
                    "y": {
                        "field": "index",
                        "type": "ordinal",
                        "axis": null,
                    },
                    "text": {
                        "field": "WHO_name",
                        "type": "nominal",
                        "title": "WHO_name",
                        
                    }
                }
            }
            
        ]},
        
        {
            
            "layer": [
            
            {
                "mark": {
                    "type": "text",
                    "align":"left"
                },
                "encoding": {
                    "x": {
                        "field": "dummy",
                        "axis": {
                            "labelExpr": "'fraction'",
                            "labelAngle": -90,
                            "labelOffset": 7,
                            "title": null,
                            "ticks": false,
                            "orient": "top",
                            "domain": false
                        }
                    },
                    "y": {
                        "field": "index",
                        "type": "ordinal",
                        "axis": null,
                    },
                    "text": {
                        "field": "fraction",
                        "type": "quantitative",
                        "title": "fraction",
                        
                    }
                }
            }
            
        ]},
        
        {
            
            "layer": [
            
            {
                "mark": {
                    "type": "text",
                    "align":"left"
                },
                "encoding": {
                    "x": {
                        "field": "dummy",
                        "axis": {
                            "labelExpr": "'tool'",
                            "labelAngle": -90,
                            "labelOffset": 7,
                            "title": null,
                            "ticks": false,
                            "orient": "top",
                            "domain": false
                        }
                    },
                    "y": {
                        "field": "index",
                        "type": "ordinal",
                        "axis": null,
                    },
                    "text": {
                        "field": "tool",
                        "type": "nominal",
                        "title": "tool",
                        
                    }
                }
            }
            
        ]}
        
    ],
    "config": {
        "style": {"cell": {"stroke": "transparent"}, "guide-label": {"fontWeight": "bold"}},
        "concat": {"spacing": 0},
        "text": {"limit": 135}
    }
}