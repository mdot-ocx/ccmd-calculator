(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        11: function(e, t, a) {
            e.exports = a(21)
        },
        16: function(e, t, a) {},
        17: function(e, t, a) {},
        21: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                o = a.n(n),
                l = a(8),
                s = a.n(l),
                r = (a(16), a(1)),
                c = a(2),
                i = a(3),
                m = a(5),
                d = a(4),
                u = a(6),
                g = (a(17), a(9)),
                h = a.n(g),
                p = a(10),
                v = a.n(p),
                E = (a(20), function(e) {
                    function t() {
                        return Object(c.a)(this, t), Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.mode,
                                a = e.currMode,
                                n = e.dataSet,
                                l = e.text,
                                s = e.src,
                                r = e.click;
                            return n && console.log(n[t]), o.a.createElement("button", {
                                className: "btn ".concat(t == a && "selected"),
                                disabled: 0 === Object.entries(n).length || !n || !n[t] || Object.values(n[t]).some(function(e) {
                                    return "/" === e || void 0 == e
                                }),
                                onClick: r
                            }, o.a.createElement("img", {
                                className: "svg",
                                src: s
                            }), " ", o.a.createElement("span", null, l))
                        }
                    }]), t
                }(n.Component)),
                f = window.google,
                y = function(e) {
                    function t() {
                        var e, a;
                        Object(c.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (a = Object(m.a)(this, (e = Object(d.a)(t)).call.apply(e, [this].concat(l)))).chart1 = o.a.createRef(), a.chart2 = o.a.createRef(), a.chart3 = o.a.createRef(), a.chart4 = o.a.createRef(), a.state = {
                            carType: "Passenger Car",
                            homeToWorkHour: 8,
                            homeToWorkMinute: 0,
                            workToHomeHour: 17,
                            workToHomeMinute: 0,
                            homeLocation: null,
                            workLocation: null,
                            searchingHomeAddress: !1,
                            searchingWorkAddress: !1,
                            result: null,
                            commuteDays: 5,
                            carAge: 5,
                            vehicleFuel: "gasoline",
                            pending: !1,
                            dataSet: {},
                            mode: "Carpooling"
                        }, a.handleChange = function(e) {
                            var t = e.target,
                                n = t.value,
                                o = t.name;
                            a.setState(Object(r.a)({}, o, n))
                        }, a.handleSubmit = function() {
                            if (!document.getElementById("homeAddress").classList.contains("is-invalid") && !document.getElementById("workAddress").classList.contains("is-invalid"))
                                if (a.state.homeLocation && a.state.workLocation) {
                                    a.setState({
                                        pending: !0,
                                        result: null
                                    });
                                    var e = {
                                        API_KEY: "CO4jnjOMGIba_K-tKSqysw",
                                        vehicle_age: parseInt(a.state.carAge),
                                        vehicle_type: a.state.carType,
                                        vehicle_fuel: a.state.vehicleFuel,
                                        origin_lat: a.state.homeLocation.lat,
                                        origin_long: a.state.homeLocation.lng,
                                        destination_lat: a.state.workLocation.lat,
                                        destination_long: a.state.workLocation.lng,
                                        DTI_am: "".concat(a.state.homeToWorkHour, ":").concat(a.state.homeToWorkMinute),
                                        DTI_pm: "".concat(a.state.workToHomeHour, ":").concat(a.state.workToHomeMinute),
                                        commute_days: parseInt(a.state.commuteDays)
                                    };
                                    fetch("http://ec2-34-230-160-124.compute-1.amazonaws.com:5070/emission_calculation", {
                                        method: "post",
                                        headers: {
                                            "Access-Control-Request-Method": "POST",
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(e)
                                    }).then(function(e) {
                                        return a.setState({
                                            pending: !1
                                        }), e.json()
                                    }).then(function(e) {
                                        a.setState({
                                            result: e.options_details
                                        })
                                    }).catch(function(e) {
                                        return console.error(e)
                                    }), console.log("submitted Json", e)
                                } else a.state.homeLocation ? document.getElementById("homeAddress").classList.remove("is-invalid") : document.getElementById("homeAddress").classList.add("is-invalid"), a.state.workLocation ? document.getElementById("workAddress").classList.remove("is-invalid") : document.getElementById("workAddress").classList.add("is-invalid")
                        }, a.handlePlaceSelect = function(e, t) {
                            console.log(e), console.log(e.getPlace().formatted_address), e.getPlace().geometry && a.setState(Object(r.a)({}, t, {
                                lat: e.getPlace().geometry.location.lat(),
                                lng: e.getPlace().geometry.location.lng()
                            }))
                        }, a
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidUpdate",
                        value: function(e, t, a) {
                            var n;
                            if (console.log(this.state.result), this.state.result && t.result !== this.state.result) {
                                var o = this.state.result.filter(function(e) {
                                        return "succeed" === e.option_status
                                    }),
                                    l = function(e) {
                                        return isNaN(e) ? e : e.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                    };
                                n = o.filter(function(e) {
                                    return "Driving" !== e.option_result[0].option_name
                                }).reduce(function(e, t) {
                                    return e[t.option_result[0].option_name.split(" ").pop()] = {
                                        fuel_reduction: l(t.option_result[0]["fuel_reduction (gallon)"]),
                                        calories_burned: l(t.option_result[0]["calories_burned (cal)"]),
                                        fuel_cost_reduction: l(t.option_result[0]["fuel_cost_reduction ($)"]),
                                        system_congestion_reduction: l(t.option_result[0]["system_congestion_reduction ($)"]),
                                        emission_pollution_reduction: l(t.option_result[0]["emission_pollution_reduction ($)"]),
                                        GHG_emission_reduction: l(t.option_result[0]["GHG_emission_reduction ($)"]),
                                        accident_reduction: l(t.option_result[0]["accident_reduction ($)"]),
                                        travel_time_per_day: l(t.option_result[0]["travel_time_per_day (min)"]),
                                        travel_time_change: l(t.option_result[0]["travel_time_change (h)"]),
                                        parking_cost_reduction: l(t.option_result[0]["parking_cost_reduction ($)"]),
                                        total_benefits: l(t.option_result[0]["total_benefits ($)"]),
                                        total_saving_cost: l(t.option_result[0]["total saving cost ($)"]),
                                        total_travel_time: l(t.option_result[0]["total travel time (h)"]),
                                        maintainence_cost_reduction: l(t.option_result[0]["maintainence_cost_reduction ($)"])
                                    }, e
                                }, {}), this.setState({
                                    dataSet: n
                                })
                            } else n = this.state.dataSet;
                            if (t.mode !== this.state.mode || "Carpooling" === t.mode && this.state.result) {
                                var s = this.state.mode,
                                    r = function(e, t, a) {
                                        var n = a.split(" "),
                                            o = n[0],
                                            l = ["Carpooling", "Biking", "Walking", "Multimodal", "transit", "hours", "week"];
                                        console.log(t);
                                        var r, c = (l = l.filter(function(e) {
                                            return t[e] && !Object.values(t[e]).some(function(e) {
                                                return "/" === e || void 0 == e
                                            })
                                        })).map(function(e) {
                                            return parseFloat(t[e][o].replace(/,/g, ""))
                                        });
                                        console.log(l), new v.a(e, {
                                            type: "bar",
                                            data: {
                                                labels: l.map(function(e) {
                                                    return e[0] != e[0].toLocaleLowerCase() ? e[0] : "transit" == e ? "T" : "hours" == e ? "O" : "R"
                                                }),
                                                datasets: [{
                                                    label: (r = o.split("_").join(" "), r.replace(/\w\S*/g, function(e) {
                                                        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                                                    }) + " " + n[1]).replace("Total Saving Cost", "Total Cost-saving"),
                                                    data: c,
                                                    backgroundColor: l.map(function(e) {
                                                        return e === s ? "lightblue" : "grey"
                                                    })
                                                }]
                                            },
                                            options: {
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                            beginAtZero: !0,
                                                            maxTicksLimit: 5
                                                        }
                                                    }]
                                                }
                                            }
                                        })
                                    },
                                    c = this.chart1.current.getContext("2d");
                                r(c, n, "calories_burned (cal)"), r(c = this.chart2.current.getContext("2d"), n, "total_benefits ($)"), r(c = this.chart3.current.getContext("2d"), n, "total_travel_time (h)"), r(c = this.chart4.current.getContext("2d"), n, "total_saving_cost ($)")
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            ["homeAddress", "workAddress"].forEach(function(t) {
                                document.getElementById(t).addEventListener("focus", function(e) {
                                    console.log(t), document.getElementById(t).classList.remove("is-invalid")
                                }), document.getElementById(t).addEventListener("focusout", function(a) {
                                    e.setState(Object(r.a)({}, "searching" + t.charAt(0).toUpperCase() + t.slice(1), !0));
                                    var n = new f.maps.Geocoder,
                                        o = document.getElementById(t).value;
                                    n.geocode({
                                        address: o
                                    }, function(n, o) {
                                        if (e.setState(Object(r.a)({}, "searching" + t.charAt(0).toUpperCase() + t.slice(1), !1)), "OK" === o) {
                                            console.log(n), console.log(n[0].geometry.location);
                                            var l = n[0].geometry.location;
                                            a.target.value = n[0].formatted_address, e.setState(Object(r.a)({}, t.substring(0, 4) + "Location", {
                                                lat: l.lat(),
                                                lng: l.lng()
                                            })), document.getElementById(t).classList.remove("is-invalid")
                                        } else document.getElementById(t).classList.add("is-invalid")
                                    })
                                })
                            });
                            var t = new f.maps.places.Autocomplete(document.getElementById("homeAddress")),
                                a = new f.maps.places.Autocomplete(document.getElementById("workAddress"));
                            t.addListener("place_changed", function() {
                                return e.handlePlaceSelect(t, "homeLocation")
                            }), a.addListener("place_changed", function() {
                                return e.handlePlaceSelect(a, "workLocation")
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.result,
                                n = t.mode,
                                l = t.dataSet;
                            console.log(l);
                            var s = function() {
                                    for (var e = [], t = 0; t <= 23; t++) e.push(o.a.createElement("option", {
                                        value: t,
                                        key: t
                                    }, t));
                                    return e
                                },
                                c = "By changing mode to ".concat(this.state.mode.toLocaleLowerCase().replace("hours", "commuting off-peak"));
                            return "week" == this.state.mode && (c = "By reducing one commute day"), "hours" == this.state.mode && (c = "By commuting off-peak"), o.a.createElement("div", {
                                style: {
                                    fontSize: "large"
                                }
                            }, "Address ", o.a.createElement("i", {
                                className: "fas fa-map-marked-alt"
                            }))), o.a.createElement("div", {
                                className: "row border rounded mb-2 pt-2"
                            }, o.a.createElement("div", {
                                className: "col-md-12 text-secondary"
                            }, o.a.createElement("small", null, "Note: You may add exact address, nearby intersection, landmark or zip code.")), o.a.createElement("div", {
                                className: "col-md-6"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("label", {
                                htmlFor: "homeAddress"
                            }, "Home"), this.state.searchingHomeAddress ? o.a.createElement("i", {
                                className: "fas fa-spinner fa-spin"
                            }) : null, o.a.createElement("input", {
                                id: "homeAddress",
                                name: "homeAddress",
                                className: "form-control",
                                autoComplete: "false"
                            }), o.a.createElement("div", {
                                className: "invalid-feedback"
                            }, "Invalid Address"))), o.a.createElement("div", {
                                className: "col-md-6"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("label", {
                                htmlFor: "workAddress"
                            }, "Work"), this.state.searchingWorkAddress ? o.a.createElement("i", {
                                className: "fas fa-spinner fa-spin"
                            }) : null, o.a.createElement("input", {
                                id: "workAddress",
                                name: "workAddress",
                                className: "form-control",
                                autoComplete: "false"
                            }), o.a.createElement("div", {
                                className: "invalid-feedback"
                            }, "Invalid Address")))), o.a.createElement("div", {
                                className: "text-primary",
                                style: {
                                    marginBottom: -10
                                }
                            }, o.a.createElement("span", {
                                style: {
                                    backgroundColor: "white"
                                }
                            }, "Preferred Departure Time ", o.a.createElement("i", {
                                className: "far fa-clock"
                            }))), o.a.createElement("div", {
                                className: "row border mb-2 pt-2 rounded"
                            }, o.a.createElement("div", {
                                className: "col-md-6"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("label", {
                                htmlFor: "homeToWork"
                            }, "Home To Work"), o.a.createElement("div", {
                                className: "form-inline",
                                id: "homeToWork"
                            }, o.a.createElement("select", {
                                onChange: this.handleChange,
                                value: this.state.homeToWorkHour,
                                name: "homeToWorkHour",
                                id: "homeToWorkHour",
                                className: "custom-select custom-select-sm"
                            }, s()), o.a.createElement("span", {
                                className: "mx-2 font-weight-bold"
                            }, ":"), o.a.createElement("select", {
                                onChange: this.handleChange,
                                value: this.state.homeToWorkMinute,
                                name: "homeToWorkMinute",
                                id: "homeToWorkMinute",
                                className: "custom-select custom-select-sm"
                            }, o.a.createElement("option", {
                                value: 0
                            }, "00"), o.a.createElement("option", {
                                value: 15
                            }, "15"), o.a.createElement("option", {
                                value: 30
                            }, "30"), o.a.createElement("option", {
                                value: 45
                            }, "45"))))), o.a.createElement("div", {
                                className: "col-md-6"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("label", {
                                htmlFor: "workToHome"
                            }, "Work To Home"), o.a.createElement("div", {
                                className: "form-inline",
                                id: "workToHome"
                            }, o.a.createElement("select", {
                                onChange: this.handleChange,
                                value: this.state.workToHomeHour,
                                id: "workToHomeHour",
                                name: "workToHomeHour",
                                className: "custom-select custom-select-sm"
                            }, s()), o.a.createElement("span", {
                                className: "mx-2 font-weight-bold"
                            }, ":"), o.a.createElement("select", {
                                onChange: this.handleChange,
                                id: "workToHomeMinute",
                                name: "workToHomeMinute",
                                className: "custom-select custom-select-sm"
                            }, o.a.createElement("option", {
                                value: 0
                            }, "00"), o.a.createElement("option", {
                                value: 15
                            }, "15"), o.a.createElement("option", {
                                value: 30
                            }, "30"), o.a.createElement("option", {
                                value: 45
                            }, "45")))))), o.a.createElement("div", {
                                className: "text-primary",
                                style: {
                                    marginBottom: -10
                                }
                            }, o.a.createElement("span", {
                                style: {
                                    backgroundColor: "white"
                                }
                            }, "Number of Days You Commute to Work Location Every Week", " ", o.a.createElement("i", {
                                className: "fas fa-calendar-day"
                            }))), o.a.createElement("div", {
                                className: "row border mb-2 pt-3 rounded"
                            }, o.a.createElement("div", {
                                className: "col"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("select", {
                                onChange: this.handleChange,
                                value: this.state.commuteDays,
                                id: "commuteDays",
                                name: "commuteDays",
                                className: "custom-select"
                            }, o.a.createElement("option", {
                                value: 5
                            }, "5"), o.a.createElement("option", {
                                value: 4
                            }, "4"), o.a.createElement("option", {
                                value: 3
                            }, "3"), o.a.createElement("option", {
                                value: 2
                            }, "2"), o.a.createElement("option", {
                                value: 1
                            }, "1"))))), o.a.createElement("form", {
                                action: "#",
                                onSubmit: this.handleSubmit,
                                autoComplete: "off"
                            }, o.a.createElement("div", {
                                className: "text-primary",
                                style: {
                                    marginBottom: -10
                                }
                            }, o.a.createElement("span", {
                                style: {
                                    backgroundColor: "white"
                                }
                            }, "Vehicle Information ", o.a.createElement("i", {
                                className: "fas fa-car-side"
                            }))), o.a.createElement("div", {
                                className: "row border mb-2 pt-3 rounded"
                            }, o.a.createElement("div", {
                                className: "col-md-4"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("label", {
                                htmlFor: "carType"
                            }, "Vehicle Type"), o.a.createElement("select", {
                                onChange: this.handleChange,
                                value: this.state.carType,
                                id: "carType",
                                name: "carType",
                                className: "custom-select"
                            }, o.a.createElement("option", {
                                value: "car"
                            }, "Car"), o.a.createElement("option", {
                                value: "small SUV"
                            }, "Small SUV"), o.a.createElement("option", {
                                value: "Large SUV"
                            }, "Large SUV"), o.a.createElement("option", {
                                value: "Minivan"
                            }, "Minivan"), o.a.createElement("option", {
                                value: "Pickup"
                            }, "Pickup")))), o.a.createElement("div", {
                                className: "col-md-4"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("label", {
                                htmlFor: "carType"
                            }, "Vehicle Age"), o.a.createElement("select", {
                                onChange: this.handleChange,
                                value: this.state.carAge,
                                id: "carAge",
                                name: "carAge",
                                className: "custom-select"
                            }, function() {
                                for (var e = [], t = 1; t <= 20; t++) e.push(o.a.createElement("option", {
                                    value: t,
                                    key: t
                                }, t));
                                return e
                            }()))), o.a.createElement("div", {
                                className: "col-md-4"
                            }, o.a.createElement("div", {
                                className: "form-group"
                            }, o.a.createElement("label", {
                                htmlFor: "carType"
                            }, "Vehicle Fuel"), o.a.createElement("select", {
                                onChange: this.handleChange,
                                value: this.state.vehicleFuel,
                                id: "vehicleFuel",
                                name: "vehicleFuel",
                                className: "custom-select"
                            }, o.a.createElement("option", {
                                value: "gasoline"
                            }, "gasoline"), o.a.createElement("option", {
                                value: "diesel"
                            }, "diesel"), o.a.createElement("option", {
                                value: "electricity"
                            }, "electricity"), o.a.createElement("option", {
                                value: "hybrid"
                            }, "hybrid"))))), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("button", {
                                disabled: this.state.pending,
                                className: "btn ".concat(this.state.pending ? "btn-secondary" : "btn-primary"),
                                onClick: this.handleSubmit,
                                type: "button"
                            }, this.state.pending ? "Loading..." : "Submit")))), this.state.pending ? o.a.createElement("div", {
                                className: "d-flex justify-content-center"
                            }, o.a.createElement("div", {
                                className: "spinner-border",
                                role: "status"
                            }, o.a.createElement("span", {
                                className: "sr-only"
                            }, "Loading..."))) : o.a.createElement("div", {
                                className: "container mb-3"
                            }, o.a.createElement("div", {
                                className: "buttons"
                            }, o.a.createElement(E, {
                                src: "./carpool.svg",
                                currMode: n,
                                mode: "Carpooling",
                                dataSet: l,
                                click: function() {
                                    return e.setState({
                                        mode: "Carpooling"
                                    })
                                },
                                text: "Carpool"
                            }), o.a.createElement(E, {
                                src: "./bike.svg",
                                currMode: n,
                                mode: "Biking",
                                dataSet: l,
                                click: function() {
                                    return e.setState({
                                        mode: "Biking"
                                    })
                                },
                                text: "Biking"
                            }), o.a.createElement(E, {
                                src: "./walking.svg",
                                currMode: n,
                                mode: "Walking",
                                dataSet: l,
                                click: function() {
                                    return e.setState({
                                        mode: "Walking"
                                    })
                                },
                                text: "Walking"
                            }), o.a.createElement(E, {
                                src: "./modal.svg",
                                currMode: n,
                                mode: "Multimodal",
                                dataSet: l,
                                click: function() {
                                    return e.setState({
                                        mode: "Multimodal"
                                    })
                                },
                                text: "Multimodal"
                            }), o.a.createElement(E, {
                                src: "./transit.svg",
                                currMode: n,
                                mode: "transit",
                                dataSet: l,
                                click: function() {
                                    return e.setState({
                                        mode: "transit"
                                    })
                                },
                                text: "Transit"
                            }), o.a.createElement(E, {
                                src: "./traffic-light.svg",
                                currMode: n,
                                mode: "hours",
                                dataSet: l,
                                click: function() {
                                    return e.setState({
                                        mode: "hours"
                                    })
                                },
                                text: "Commute Off-Peak"
                            }), o.a.createElement(E, {
                                src: "./reduce.svg",
                                currMode: n,
                                mode: "week",
                                dataSet: l,
                                click: function() {
                                    return e.setState({
                                        mode: "week"
                                    })
                                },
                                text: "Telework"
                            })), o.a.createElement("div", {
                                id: "bottom",
                                style: {
                                    display: a ? "flex" : "none"
                                }
                            }, o.a.createElement("div", {
                                className: "left",
                                style: {}
                            }, o.a.createElement("div", null, this.state.result ? o.a.createElement("div", null, o.a.createElement("div", null, o.a.createElement("strong", null, c, " you could save monthly:")), o.a.createElement("div", {
                                className: "text-left"
                            }, o.a.createElement("img", {
                                className: "small",
                                src: "./gas.png"
                            }), o.a.createElement("span", null, " $".concat(l[n] && l[n].fuel_cost_reduction, " in fuel cost"))), o.a.createElement("div", {
                                className: "text-left"
                            }, o.a.createElement("img", {
                                className: "small",
                                src: "./wrench.png"
                            }), o.a.createElement("span", null, " $".concat(l[n] && l[n].maintainence_cost_reduction, " in vehicle maintainence cost"))), o.a.createElement("div", {
                                className: "text-left"
                            }, o.a.createElement("img", {
                                className: "small",
                                src: "./p.png"
                            }), o.a.createElement("span", null, " $".concat(l[n] && l[n].parking_cost_reduction, " in parking cost"))), o.a.createElement("div", {
                                className: "text-left"
                            }, o.a.createElement("strong", null, "You could create annually environmental benefits:", " ")), o.a.createElement("div", {
                                className: "text-left"
                            }, o.a.createElement("img", {
                                className: "small",
                                src: "./factory.png"
                            }), o.a.createElement("span", null, " $".concat(l[n] && l[n].emission_pollution_reduction, " in emissions pollution reduction"))), o.a.createElement("div", {
                                className: "text-left"
                            }, o.a.createElement("img", {
                                className: "small",
                                src: "./factory.png"
                            }), o.a.createElement("span", null, "  $".concat(l[n] && l[n].GHG_emission_reduction, " in GHG emissions reduction"))), o.a.createElement("div", {
                                className: "text-left"
                            }, l[n] && l[n].calories_burned && l[n].calories_burned > 0 && o.a.createElement("strong", null, o.a.createElement("img", {
                                className: "small",
                                src: "./cake.png"
                            }), o.a.createElement("span", null, "You could burn", " ", l[n] && l[n].calories_burned, " ", "additional calories daily"))), o.a.createElement("div", {
                                className: "text-left"
                            }, l[n] && l[n].travel_time_change && l[n].travel_time_change > 5 && o.a.createElement("strong", null, o.a.createElement("img", {
                                className: "small",
                                src: "./clock.png"
                            }), o.a.createElement("span", null, " ", "You could save", " ", l[n] && l[n].travel_time_change, " ", "minutes monthly")))) : null)), o.a.createElement("div", {
                                className: "right",
                                style: {
                                    display: "none"
                                }
                            }, o.a.createElement("div", {
                                className: ""
                            }, o.a.createElement("div", null, o.a.createElement("canvas", {
                                ref: this.chart1,
                                style: {
                                    display: this.state.result ? "" : "none"
                                }
                            }))), o.a.createElement("div", {
                                className: ""
                            }, o.a.createElement("div", null, o.a.createElement("canvas", {
                                ref: this.chart2,
                                style: {
                                    display: this.state.result ? "" : "none"
                                }
                            }))), o.a.createElement("div", {
                                className: ""
                            }, o.a.createElement("div", null, o.a.createElement("canvas", {
                                ref: this.chart3,
                                style: {
                                    display: this.state.result ? "" : "none"
                                }
                            }))), o.a.createElement("div", {
                                className: ""
                            }, o.a.createElement("div", null, o.a.createElement("canvas", {
                                ref: this.chart4,
                                style: {
                                    display: this.state.result ? "" : "none"
                                }
                            })))))))
                        }
                    }]), t
                }(o.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            s.a.render(o.a.createElement(y, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
                e.unregister()
            })
        },
        9: function(e, t, a) {
            e.exports = a.p + "static/media/ccc.af44ff3a.png"
        }
    },
    [
        [11, 1, 2]
    ]
]);
//# sourceMappingURL=main.95fdef90.chunk.js.map