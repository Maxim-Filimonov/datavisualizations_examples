
var w = 600;
var h = 600;

var dataset = 
[
    [
        "Dom Pérignon (2003)",
        [
            {
                "order_item": {
                    "amount": "495.0",
                    "created_at": "2013-06-28T11:58:12Z",
                    "id": 248,
                    "menu_item_id": 17,
                    "name": "Dom Pérignon (2003)",
                    "order_for": "2013-06-28T11:58:12Z",
                    "order_id": 135,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:03:31Z"
                }
            }
        ]
    ],
    [
        "Ciroc",
        [
            {
                "order_item": {
                    "amount": "450.0",
                    "created_at": "2013-06-28T11:58:12Z",
                    "id": 249,
                    "menu_item_id": 10,
                    "name": "Ciroc",
                    "order_for": "2013-06-28T11:58:12Z",
                    "order_id": 135,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:03:31Z"
                }
            }
        ]
    ],
    [
        "Dom Pérignon Rosé (1998)",
        [
            {
                "order_item": {
                    "amount": "1450.0",
                    "created_at": "2013-06-28T12:06:27Z",
                    "id": 250,
                    "menu_item_id": 36,
                    "name": "Dom Pérignon Rosé (1998)",
                    "order_for": "2013-06-28T12:06:27Z",
                    "order_id": 136,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:09:33Z"
                }
            },
            {
                "order_item": {
                    "amount": "1450.0",
                    "created_at": "2013-06-28T12:06:27Z",
                    "id": 251,
                    "menu_item_id": 36,
                    "name": "Dom Pérignon Rosé (1998)",
                    "order_for": "2013-06-28T12:06:27Z",
                    "order_id": 136,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:09:33Z"
                }
            }
        ]
    ],
    [
        "Jack Daniels",
        [
            {
                "order_item": {
                    "amount": "385.0",
                    "created_at": "2013-06-28T12:09:49Z",
                    "id": 252,
                    "menu_item_id": 60,
                    "name": "Jack Daniels",
                    "order_for": "2013-06-28T12:09:49Z",
                    "order_id": 137,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:16:29Z"
                }
            }
        ]
    ],
    [
        "Belvedere",
        [
            {
                "order_item": {
                    "amount": "400.0",
                    "created_at": "2013-06-28T12:10:20Z",
                    "id": 253,
                    "menu_item_id": 3,
                    "name": "Belvedere",
                    "order_for": "2013-06-28T12:10:20Z",
                    "order_id": 138,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:16:30Z"
                }
            },
            {
                "order_item": {
                    "amount": "400.0",
                    "created_at": "2013-06-28T12:36:08Z",
                    "id": 257,
                    "menu_item_id": 3,
                    "name": "Belvedere",
                    "order_for": "2013-06-28T12:36:08Z",
                    "order_id": 141,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:36:20Z"
                }
            },
            {
                "order_item": {
                    "amount": "400.0",
                    "created_at": "2013-06-28T13:03:43Z",
                    "id": 260,
                    "menu_item_id": 3,
                    "name": "Belvedere",
                    "order_for": "2013-06-28T13:03:43Z",
                    "order_id": 143,
                    "quantity": 2,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T13:10:42Z"
                }
            },
            {
                "order_item": {
                    "amount": "400.0",
                    "created_at": "2013-06-29T01:05:21Z",
                    "id": 261,
                    "menu_item_id": 3,
                    "name": "Belvedere",
                    "order_for": "2013-06-29T01:05:21Z",
                    "order_id": 144,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "0",
                    "terminal_id": null,
                    "updated_at": "2013-06-29T01:05:21Z"
                }
            }
        ]
    ],
    [
        "Belvedere Magnum (1.75L)",
        [
            {
                "order_item": {
                    "amount": "975.0",
                    "created_at": "2013-06-28T12:22:47Z",
                    "id": 254,
                    "menu_item_id": 68,
                    "name": "Belvedere Magnum (1.75L)",
                    "order_for": "2013-06-28T12:22:47Z",
                    "order_id": 139,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:26:05Z"
                }
            },
            {
                "order_item": {
                    "amount": "975.0",
                    "created_at": "2013-06-28T12:29:06Z",
                    "id": 255,
                    "menu_item_id": 68,
                    "name": "Belvedere Magnum (1.75L)",
                    "order_for": "2013-06-28T12:29:06Z",
                    "order_id": 140,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:31:50Z"
                }
            },
            {
                "order_item": {
                    "amount": "975.0",
                    "created_at": "2013-06-28T12:49:36Z",
                    "id": 259,
                    "menu_item_id": 68,
                    "name": "Belvedere Magnum (1.75L)",
                    "order_for": "2013-06-28T12:49:36Z",
                    "order_id": 142,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:50:53Z"
                }
            }
        ]
    ],
    [
        "Wet Pussy Premix",
        [
            {
                "order_item": {
                    "amount": "350.0",
                    "created_at": "2013-06-28T12:29:06Z",
                    "id": 256,
                    "menu_item_id": 33,
                    "name": "Wet Pussy Premix",
                    "order_for": "2013-06-28T12:29:06Z",
                    "order_id": 140,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:31:52Z"
                }
            }
        ]
    ],
    [
        "Chivas 12 Year",
        [
            {
                "order_item": {
                    "amount": "450.0",
                    "created_at": "2013-06-28T12:49:36Z",
                    "id": 258,
                    "menu_item_id": 57,
                    "name": "Chivas 12 Year",
                    "order_for": "2013-06-28T12:49:36Z",
                    "order_id": 142,
                    "quantity": 1,
                    "refund_number_reference": null,
                    "state": "2",
                    "terminal_id": 2,
                    "updated_at": "2013-06-28T12:50:51Z"
                }
            }
        ]
    ]
]
var svg = d3.select('svg')
.attr('width', w)
.attr('height', h);

var pie = d3.layout.pie()
  .value(function(d) {
    return d3.sum(d[1].map(function(item) { 
      return item.order_item.amount; 
    }));
  });
var color = d3.scale.category10(); 
var outerRadius = w / 2;
var innerRadius = 0;

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);


var arcs = svg
  .selectAll("g.arc")
  .data(pie(dataset))
  .enter()
  .append("g")
  .attr("class", "arc")
  .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    return color(i);
  })
  .attr("d", arc);

var tooltip = d3.select("svg").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

$('svg g.arc').tipsy({
  gravity: 'w',
  html: true,
  title: function() {
    var d = this.__data__;
    return d.data[0] + ":" + d.value + "$";
  }
});
arcs
 .append("text")
 .attr("transform", function(d) {
    return "translate(" + arc.centroid(d) + ")";
  })
  .attr("text-anchor", "middle")
  .text(function(d) {
    if(d.endAngle - d.startAngle > 1.0){
      return d.data[0] + ":" + d.value + "$";
    }
    else {
      return d.value + "$";
    }
  });
