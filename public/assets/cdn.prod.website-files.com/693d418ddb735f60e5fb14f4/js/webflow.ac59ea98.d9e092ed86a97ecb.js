(() => {
    var e = {
            26670: function() {
                function e() {
                    let e = Webflow.require("ix3");
                    e.ready().then(() => {
                        let a = e.getInstance();
                        a && (a.register([{
                            id: "i-3afd962b",
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top 90%",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["section-title-block"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-e4b7e91e"],
                            deleted: !1
                        }, {
                            id: "i-1fd46204",
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top 85%",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["section-description-block"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-74b097ab"],
                            deleted: !1
                        }, {
                            id: "i-12233a6b",
                            triggers: [
                                ["wf:load", {
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-bb5bc3df"],
                            deleted: !1
                        }, {
                            id: "i-5ff323c0",
                            triggers: [
                                ["wf:load", {
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-38cb241d"],
                            deleted: !1
                        }, {
                            id: "i-0edfeab0",
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top 80%",
                                            end: "top top",
                                            scrub: 1,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["about-text-content-block"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-c5a19385"],
                            deleted: !1
                        }], [{
                            id: "t-e4b7e91e",
                            deleted: !1,
                            actions: [{
                                id: "ta-6461bcbf",
                                targets: [
                                    ["wf:trigger-only", "", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    stagger: {
                                        each: .2
                                    },
                                    ease: 29
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        yPercent: [100, null]
                                    }
                                },
                                splitText: {
                                    type: "lines",
                                    mask: "lines"
                                }
                            }]
                        }, {
                            id: "t-74b097ab",
                            deleted: !1,
                            actions: [{
                                id: "ta-ed118150",
                                targets: [
                                    ["wf:trigger-only", "", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    stagger: {
                                        each: .2
                                    },
                                    ease: 29
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", null],
                                        yPercent: [100, null]
                                    }
                                },
                                splitText: {
                                    type: "lines",
                                    mask: "lines"
                                }
                            }]
                        }, {
                            id: "t-bb5bc3df",
                            deleted: !1,
                            actions: [{
                                id: "ta-94f6bd60",
                                targets: [
                                    ["wf:class", ["hero-title-animation"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    stagger: {
                                        each: .2
                                    },
                                    ease: 29
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", null],
                                        yPercent: [100, null]
                                    }
                                },
                                splitText: {
                                    type: "lines",
                                    mask: "lines"
                                }
                            }]
                        }, {
                            id: "t-38cb241d",
                            deleted: !1,
                            actions: [{
                                id: "ta-81e1460c",
                                targets: [
                                    ["wf:class", ["hero-description-animaiton"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: .1,
                                    stagger: {
                                        each: .03
                                    },
                                    ease: 29
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", null],
                                        yPercent: [100, null]
                                    }
                                },
                                splitText: {
                                    type: "lines",
                                    mask: "lines"
                                }
                            }]
                        }, {
                            id: "t-c5a19385",
                            deleted: !1,
                            actions: [{
                                id: "ta-93a6dabb",
                                targets: [
                                    ["wf:class", ["about-title-block"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    stagger: {
                                        each: .05
                                    },
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {},
                                    "wf:style": {
                                        color: ["#575757", "black"]
                                    }
                                },
                                splitText: {
                                    type: "chars"
                                }
                            }]
                        }]), window.dispatchEvent(new CustomEvent("__wf_ix3_ready")), document.documentElement.classList.add("w-mod-ix3"))
                    })
                }
                Webflow.require("ix2").init({
                    events: {
                        "e-3": {
                            id: "e-3",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-2"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d49575fc8e103b8ec5db0|1ac93d5a-0924-6c6f-4028-6609804dec1e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d49575fc8e103b8ec5db0|1ac93d5a-0924-6c6f-4028-6609804dec1e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x193eee63b2a
                        },
                        "e-4": {
                            id: "e-4",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d49575fc8e103b8ec5db0|1ac93d5a-0924-6c6f-4028-6609804dec15",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d49575fc8e103b8ec5db0|1ac93d5a-0924-6c6f-4028-6609804dec15",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x193eee3b2f5
                        },
                        "e-5": {
                            id: "e-5",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-45"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".templates-content-block",
                                originalId: "6753e402797c1ebfbb680efa|0834e041-b31e-51c9-c861-0d48c68a178b",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".templates-content-block",
                                originalId: "6753e402797c1ebfbb680efa|0834e041-b31e-51c9-c861-0d48c68a178b",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x193eee63b2a
                        },
                        "e-7": {
                            id: "e-7",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-18"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                selector: ".button-primary",
                                originalId: "6911ce71a89874232cbde506|ba4ea439-4148-7951-6074-ae789237f5d0",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".button-primary",
                                originalId: "6911ce71a89874232cbde506|ba4ea439-4148-7951-6074-ae789237f5d0",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19a711294e5
                        },
                        "e-8": {
                            id: "e-8",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-2",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-17"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                selector: ".button-primary",
                                originalId: "6911ce71a89874232cbde506|ba4ea439-4148-7951-6074-ae789237f5d0",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".button-primary",
                                originalId: "6911ce71a89874232cbde506|ba4ea439-4148-7951-6074-ae789237f5d0",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19a711294e6
                        },
                        "e-11": {
                            id: "e-11",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "PAGE_FINISH",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-3",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-20"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d418fdb735f60e5fb1514",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d418fdb735f60e5fb1514",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b17b0f871
                        },
                        "e-12": {
                            id: "e-12",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-4",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-13"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".why-card",
                                originalId: "693d418fdb735f60e5fb1514|d13a332b-cced-5e47-9645-c237c91d6722",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".why-card",
                                originalId: "693d418fdb735f60e5fb1514|d13a332b-cced-5e47-9645-c237c91d6722",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b1af3800f
                        },
                        "e-13": {
                            id: "e-13",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-5",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-12"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".why-card",
                                originalId: "693d418fdb735f60e5fb1514|d13a332b-cced-5e47-9645-c237c91d6722",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".why-card",
                                originalId: "693d418fdb735f60e5fb1514|d13a332b-cced-5e47-9645-c237c91d6722",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b1af3800f
                        },
                        "e-15": {
                            id: "e-15",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-7",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-16"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".review-card",
                                originalId: "693d418fdb735f60e5fb1514|10b55b74-8096-03b3-8288-459d144dcfb1",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".review-card",
                                originalId: "693d418fdb735f60e5fb1514|10b55b74-8096-03b3-8288-459d144dcfb1",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b1b8a4a11
                        },
                        "e-16": {
                            id: "e-16",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-8",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-15"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".review-card",
                                originalId: "693d418fdb735f60e5fb1514|10b55b74-8096-03b3-8288-459d144dcfb1",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".review-card",
                                originalId: "693d418fdb735f60e5fb1514|10b55b74-8096-03b3-8288-459d144dcfb1",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b1b8a4a12
                        },
                        "e-17": {
                            id: "e-17",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "DROPDOWN_OPEN",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-9",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-18"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".faq-item",
                                originalId: "77560764-9abc-8dc8-2463-aa77814c3df0",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".faq-item",
                                originalId: "77560764-9abc-8dc8-2463-aa77814c3df0",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x198273c9ac6
                        },
                        "e-18": {
                            id: "e-18",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "DROPDOWN_CLOSE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-10",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-289"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".faq-item",
                                originalId: "77560764-9abc-8dc8-2463-aa77814c3df0",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".faq-item",
                                originalId: "77560764-9abc-8dc8-2463-aa77814c3df0",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x198273c9ac8
                        },
                        "e-19": {
                            id: "e-19",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-20"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "f5adfd93-b2fe-fc34-851a-0b1998b2e057",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "f5adfd93-b2fe-fc34-851a-0b1998b2e057",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19aa0088233
                        },
                        "e-21": {
                            id: "e-21",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                id: "693d418fdb735f60e5fb1514|91962c4c-8ab5-7dee-4ad6-1fa8a830950f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d418fdb735f60e5fb1514|91962c4c-8ab5-7dee-4ad6-1fa8a830950f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-28-p",
                                smoothing: 90,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19b1cb72855
                        },
                        "e-36": {
                            id: "e-36",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-14",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-37"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".course-module.first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".course-module.first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b218b2c56
                        },
                        "e-37": {
                            id: "e-37",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_SECOND_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-15",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-36"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".course-module.first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".course-module.first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b218b2c57
                        },
                        "e-38": {
                            id: "e-38",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-12",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-39"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".course-module",
                                originalId: "693f82c830f120f7780ddc87|08a9f6e8-b7d4-2791-977b-ae54fcb2b28b",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".course-module",
                                originalId: "693f82c830f120f7780ddc87|08a9f6e8-b7d4-2791-977b-ae54fcb2b28b",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b218dada6
                        },
                        "e-39": {
                            id: "e-39",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_SECOND_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-13",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-38"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".course-module",
                                originalId: "693f82c830f120f7780ddc87|08a9f6e8-b7d4-2791-977b-ae54fcb2b28b",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".course-module",
                                originalId: "693f82c830f120f7780ddc87|08a9f6e8-b7d4-2791-977b-ae54fcb2b28b",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b218dada6
                        },
                        "e-40": {
                            id: "e-40",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-14",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-41"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".course-first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".course-first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b218e6b76
                        },
                        "e-41": {
                            id: "e-41",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_SECOND_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-15",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-40"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".course-first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".course-first-module",
                                originalId: "693f82c830f120f7780ddc87|3b134b36-a882-f084-6c5a-b781ceb20329",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b218e6b77
                        },
                        "e-42": {
                            id: "e-42",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-43"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b054d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b054d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19aa0a31b47
                        },
                        "e-44": {
                            id: "e-44",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-16",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                selector: ".blog-details-main-content-block",
                                originalId: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b0560",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".blog-details-main-content-block",
                                originalId: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b0560",
                                appliesTo: "CLASS"
                            }],
                            config: [{
                                continuousParameterGroupId: "a-16-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19a76dbe462
                        },
                        "e-51": {
                            id: "e-51",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-23",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-52"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                selector: ".nav-link",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f53c",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".nav-link",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f53c",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b3f51264f
                        },
                        "e-52": {
                            id: "e-52",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-24",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-51"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                selector: ".nav-link",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f53c",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".nav-link",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f53c",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b3f51264f
                        },
                        "e-53": {
                            id: "e-53",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-25",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-54"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                selector: ".footer-nav-link",
                                originalId: "f5adfd93-b2fe-fc34-851a-0b1998b2e062",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".footer-nav-link",
                                originalId: "f5adfd93-b2fe-fc34-851a-0b1998b2e062",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b3fb53e74
                        },
                        "e-54": {
                            id: "e-54",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-26",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-53"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                selector: ".footer-nav-link",
                                originalId: "f5adfd93-b2fe-fc34-851a-0b1998b2e062",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".footer-nav-link",
                                originalId: "f5adfd93-b2fe-fc34-851a-0b1998b2e062",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b3fb53e75
                        },
                        "e-55": {
                            id: "e-55",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-27",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-56"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|1e926a8a-1a83-7fb3-6e74-5d1c4053dbc5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|1e926a8a-1a83-7fb3-6e74-5d1c4053dbc5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b3fcd6685
                        },
                        "e-57": {
                            id: "e-57",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "NAVBAR_OPEN",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-58"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                selector: ".navbar",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f534",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".navbar",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f534",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b447fd352
                        },
                        "e-58": {
                            id: "e-58",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "NAVBAR_CLOSE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-30",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-57"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                selector: ".navbar",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f534",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".navbar",
                                originalId: "f012d22a-04f6-e51b-3b4e-888a41c1f534",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b447fd353
                        },
                        "e-59": {
                            id: "e-59",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GROW_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "growIn",
                                    autoStopEventId: "e-60"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".why-card",
                                originalId: "693d418fdb735f60e5fb1514|d13a332b-cced-5e47-9645-c237c91d6722",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".why-card",
                                originalId: "693d418fdb735f60e5fb1514|d13a332b-cced-5e47-9645-c237c91d6722",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 100,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19b44974a15
                        },
                        "e-70": {
                            id: "e-70",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "PAGE_FINISH",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-35",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-69"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d418fdb735f60e5fb1514",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d418fdb735f60e5fb1514",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b49416f48
                        },
                        "e-71": {
                            id: "e-71",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-36",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-72"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".blog-card",
                                originalId: "694672ae25f8ba83b5e8316d|7c5725d7-ebde-c06f-cb9f-8683da62c633",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".blog-card",
                                originalId: "694672ae25f8ba83b5e8316d|7c5725d7-ebde-c06f-cb9f-8683da62c633",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b497a54d5
                        },
                        "e-72": {
                            id: "e-72",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-37",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-71"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".blog-card",
                                originalId: "694672ae25f8ba83b5e8316d|7c5725d7-ebde-c06f-cb9f-8683da62c633",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".blog-card",
                                originalId: "694672ae25f8ba83b5e8316d|7c5725d7-ebde-c06f-cb9f-8683da62c633",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b497a54d6
                        },
                        "e-73": {
                            id: "e-73",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-74"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694690079414a8ec1d6a03e2|9465ea79-5b99-db43-cb65-05823907fe95",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694690079414a8ec1d6a03e2|9465ea79-5b99-db43-cb65-05823907fe95",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4a8ff22e
                        },
                        "e-87": {
                            id: "e-87",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-88"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|d4ab623d-b008-e568-3113-8673cc1d3e65",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|d4ab623d-b008-e568-3113-8673cc1d3e65",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4a9181d3
                        },
                        "e-89": {
                            id: "e-89",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-90"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".values-card",
                                originalId: "694611d58a34ed259451763f|e55ab699-9a96-fad2-f88f-9a6f01cc2b82",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".values-card",
                                originalId: "694611d58a34ed259451763f|e55ab699-9a96-fad2-f88f-9a6f01cc2b82",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ad0af34
                        },
                        "e-91": {
                            id: "e-91",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-92"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|69967362-a7e8-692b-2ef9-dccdbc958e1d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|69967362-a7e8-692b-2ef9-dccdbc958e1d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ad1eedc
                        },
                        "e-93": {
                            id: "e-93",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-94"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|8dc7d2fc-8456-a958-7ada-d805e9aa0b1a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|8dc7d2fc-8456-a958-7ada-d805e9aa0b1a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ad36487
                        },
                        "e-95": {
                            id: "e-95",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-96"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|ac9286aa-68b4-a956-52ed-4c0110951d52",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|ac9286aa-68b4-a956-52ed-4c0110951d52",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ad3a051
                        },
                        "e-97": {
                            id: "e-97",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-98"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694672ae25f8ba83b5e8316d|2afca37c-5971-ae86-e131-8d3f578e5924",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694672ae25f8ba83b5e8316d|2afca37c-5971-ae86-e131-8d3f578e5924",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4adb337a
                        },
                        "e-99": {
                            id: "e-99",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-100"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6946302cd76b126d9f37d9ef|48151300-a082-dce3-e816-2a5bd69e53da",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6946302cd76b126d9f37d9ef|48151300-a082-dce3-e816-2a5bd69e53da",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4adbd5cf
                        },
                        "e-101": {
                            id: "e-101",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-102"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693f82c830f120f7780ddc87|ee1f2d36-5559-4a13-b6e4-471e49c31236",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693f82c830f120f7780ddc87|ee1f2d36-5559-4a13-b6e4-471e49c31236",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4adff5d1
                        },
                        "e-103": {
                            id: "e-103",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-104"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693f82c830f120f7780ddc87|7d3bee20-fa0a-e052-625c-126e3e7a6c28",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693f82c830f120f7780ddc87|7d3bee20-fa0a-e052-625c-126e3e7a6c28",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ae05040
                        },
                        "e-105": {
                            id: "e-105",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-106"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693febc81e97360516fbb686|7e4f2134-aee5-1fc9-3fed-1958b1ebe156",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693febc81e97360516fbb686|7e4f2134-aee5-1fc9-3fed-1958b1ebe156",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ae0ab99
                        },
                        "e-107": {
                            id: "e-107",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-108"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b0560",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b0560",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ae17ff7
                        },
                        "e-111": {
                            id: "e-111",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-112"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d418fdb735f60e5fb1514|cf776a74-97f0-93ec-c82b-e48b53554a91",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d418fdb735f60e5fb1514|cf776a74-97f0-93ec-c82b-e48b53554a91",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4eab5e56
                        },
                        "e-113": {
                            id: "e-113",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-114"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".faq-item",
                                originalId: "693d418fdb735f60e5fb1514|23f169cb-ff3d-a3aa-87ae-dacbe3a982fc",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".faq-item",
                                originalId: "693d418fdb735f60e5fb1514|23f169cb-ff3d-a3aa-87ae-dacbe3a982fc",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4eac5e83
                        },
                        "e-115": {
                            id: "e-115",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-116"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d418fdb735f60e5fb1514|9ac1d191-47d5-ce6e-004f-919f90a46175",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d418fdb735f60e5fb1514|9ac1d191-47d5-ce6e-004f-919f90a46175",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4eae1ee1
                        },
                        "e-117": {
                            id: "e-117",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-118"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d418fdb735f60e5fb1514|d2ff86e2-ae1f-9c66-d908-009bcf70e1b5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d418fdb735f60e5fb1514|d2ff86e2-ae1f-9c66-d908-009bcf70e1b5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ed11612
                        },
                        "e-124": {
                            id: "e-124",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-125"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693f82c830f120f7780ddc87|12345c69-f555-f7b2-7dc3-f58088730374",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693f82c830f120f7780ddc87|12345c69-f555-f7b2-7dc3-f58088730374",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4ee69cc5
                        },
                        "e-126": {
                            id: "e-126",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-127"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693febc81e97360516fbb686|31ed1cf4-1c12-e8bd-511b-28390501e55a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693febc81e97360516fbb686|31ed1cf4-1c12-e8bd-511b-28390501e55a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b4f710c4a
                        },
                        "e-129": {
                            id: "e-129",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "PAGE_FINISH",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-35",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-128"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b4f9244d9
                        },
                        "e-134": {
                            id: "e-134",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-135"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6946406cd5baa87147b9a561|af17f542-c066-4b22-79c4-388c3302ed37",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6946406cd5baa87147b9a561|af17f542-c066-4b22-79c4-388c3302ed37",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b500df2d1
                        },
                        "e-136": {
                            id: "e-136",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-137"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694cae46d77b7f47bb9b4692|cc8c9852-fcab-02b7-be3a-daffb6bec809",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694cae46d77b7f47bb9b4692|cc8c9852-fcab-02b7-be3a-daffb6bec809",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b53b8d62a
                        },
                        "e-140": {
                            id: "e-140",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-45"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".templates-content-block-2",
                                originalId: "6753e402797c1ebfbb680efa|0834e041-b31e-51c9-c861-0d48c68a178b",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".templates-content-block-2",
                                originalId: "6753e402797c1ebfbb680efa|0834e041-b31e-51c9-c861-0d48c68a178b",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x193eee63b2a
                        },
                        "e-142": {
                            id: "e-142",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-143"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694cae46d77b7f47bb9b4692|263bbc2e-0073-e44d-929d-1f767076ebdd",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694cae46d77b7f47bb9b4692|263bbc2e-0073-e44d-929d-1f767076ebdd",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x193ee46dc8d
                        },
                        "e-144": {
                            id: "e-144",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-145"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694cae46d77b7f47bb9b4692|17352073-f77d-d6a6-48fc-d4923b3bd52e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694cae46d77b7f47bb9b4692|17352073-f77d-d6a6-48fc-d4923b3bd52e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x193ee46b204
                        },
                        "e-146": {
                            id: "e-146",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-147"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694cbc987d967a9aa8ab6eb0|2b330ad7-9bb3-b5f8-2ed3-f658acb78c71",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694cbc987d967a9aa8ab6eb0|2b330ad7-9bb3-b5f8-2ed3-f658acb78c71",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b53c102e1
                        },
                        "e-148": {
                            id: "e-148",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-149"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694cbc987d967a9aa8ab6eb0|d14242f5-22b6-1174-80a5-6530bb2a7881",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694cbc987d967a9aa8ab6eb0|d14242f5-22b6-1174-80a5-6530bb2a7881",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x193ede6e911
                        },
                        "e-156": {
                            id: "e-156",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-38",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-157"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".exprience-counter-box",
                                originalId: "694611d58a34ed259451763f|a7c44767-0ca5-4d5a-76d5-7666afbbcdd7",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".exprience-counter-box",
                                originalId: "694611d58a34ed259451763f|a7c44767-0ca5-4d5a-76d5-7666afbbcdd7",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x197e2fcb668
                        },
                        "e-158": {
                            id: "e-158",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-39",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-159"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693f82c830f120f7780ddc87|ee4470fe-77d0-e8ea-b057-4f1d8efd3087",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693f82c830f120f7780ddc87|ee4470fe-77d0-e8ea-b057-4f1d8efd3087",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b53f144f7
                        },
                        "e-163": {
                            id: "e-163",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "PAGE_FINISH",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-35",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-162"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6946302cd76b126d9f37d9ef",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6946302cd76b126d9f37d9ef",
                                appliesTo: "PAGE",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b540715e1
                        },
                        "e-164": {
                            id: "e-164",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-6",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".process",
                                originalId: "694611d58a34ed259451763f|2274a9b1-946d-5518-5a50-86a5605bdd3f",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".process",
                                originalId: "694611d58a34ed259451763f|2274a9b1-946d-5518-5a50-86a5605bdd3f",
                                appliesTo: "CLASS"
                            }],
                            config: [{
                                continuousParameterGroupId: "a-6-p",
                                smoothing: 90,
                                startsEntering: !1,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19b6a1d4e0f
                        },
                        "e-167": {
                            id: "e-167",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-168"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693d418fdb735f60e5fb1514|235c0e66-41e1-7411-e458-84abe88cf0d0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693d418fdb735f60e5fb1514|235c0e66-41e1-7411-e458-84abe88cf0d0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa149a96
                        },
                        "e-169": {
                            id: "e-169",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-170"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|5e1c2732-6994-c9a5-af8f-4ff3239ae105",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|5e1c2732-6994-c9a5-af8f-4ff3239ae105",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 5,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa1547c1
                        },
                        "e-171": {
                            id: "e-171",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-172"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|3f5ff3e0-28cc-d020-4448-958f77c808b8",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|3f5ff3e0-28cc-d020-4448-958f77c808b8",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa157c97
                        },
                        "e-173": {
                            id: "e-173",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-174"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|8dc7d2fc-8456-a958-7ada-d805e9aa0b19",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|8dc7d2fc-8456-a958-7ada-d805e9aa0b19",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa15ab1f
                        },
                        "e-175": {
                            id: "e-175",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-176"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694646deb5577db69effd95a|61f9b0f4-6c99-c072-3617-88c52e1d93e6",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694646deb5577db69effd95a|61f9b0f4-6c99-c072-3617-88c52e1d93e6",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa164302
                        },
                        "e-177": {
                            id: "e-177",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-178"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "69466319038420ec0c117510|ecb2e844-731e-ec27-6b50-13a101b895d4",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "69466319038420ec0c117510|ecb2e844-731e-ec27-6b50-13a101b895d4",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa167667
                        },
                        "e-179": {
                            id: "e-179",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-180"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693febc81e97360516fbb686|ec59ea52-777c-0bca-c6ab-cf789bd6bb90",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693febc81e97360516fbb686|ec59ea52-777c-0bca-c6ab-cf789bd6bb90",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa16b45f
                        },
                        "e-181": {
                            id: "e-181",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-182"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b055f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693e94266cc7b0f654c605ac|0d2f3317-b07d-1594-f9f9-0424d53b055f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa180ca0
                        },
                        "e-183": {
                            id: "e-183",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SHRINK_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "shrinkIn",
                                    autoStopEventId: "e-184"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693f82c830f120f7780ddc87|ed9e980a-e4a1-950e-ff3b-5957ee3f697e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693f82c830f120f7780ddc87|ed9e980a-e4a1-950e-ff3b-5957ee3f697e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19bfa18644e
                        },
                        "e-185": {
                            id: "e-185",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-186"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "c3a88603-633a-d55a-3ff3-c8553cdc3b70",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "c3a88603-633a-d55a-3ff3-c8553cdc3b70",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19bfef2f0b1
                        },
                        "e-186": {
                            id: "e-186",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-2",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-185"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "c3a88603-633a-d55a-3ff3-c8553cdc3b70",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "c3a88603-633a-d55a-3ff3-c8553cdc3b70",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19bfef2f0b3
                        },
                        "e-187": {
                            id: "e-187",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-188"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693f82c830f120f7780ddc7d|f4f4707b-2e34-0c83-50dc-c3281109e694",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693f82c830f120f7780ddc7d|f4f4707b-2e34-0c83-50dc-c3281109e694",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c02df78b7
                        },
                        "e-188": {
                            id: "e-188",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-2",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-187"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "693f82c830f120f7780ddc7d|f4f4707b-2e34-0c83-50dc-c3281109e694",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "693f82c830f120f7780ddc7d|f4f4707b-2e34-0c83-50dc-c3281109e694",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c02df78b7
                        },
                        "e-191": {
                            id: "e-191",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-192"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "694611d58a34ed259451763f|2564a668-ca0e-1d79-54b3-6536031e3d64",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "694611d58a34ed259451763f|2564a668-ca0e-1d79-54b3-6536031e3d64",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c0359f734
                        }
                    },
                    actionLists: {
                        a: {
                            id: "a",
                            title: "Button hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-primary-text-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38ec"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-n-2",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-bg-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38f6"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-bg-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38f6"]
                                        },
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-icon",
                                            selectorGuids: ["edf2c2f3-b896-6db1-3493-f4274f6560b1"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-primary-text-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38ec"]
                                        },
                                        globalSwatchId: "--bg-color--black",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-bg-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38f6"]
                                        },
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-icon",
                                            selectorGuids: ["edf2c2f3-b896-6db1-3493-f4274f6560b1"]
                                        },
                                        xValue: 100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 100,
                                        easing: "easeInOut",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-bg-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38f6"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19a7112b9e1
                        },
                        "a-2": {
                            id: "a-2",
                            title: "Button hover out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-2-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-primary-text-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38ec"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-2-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-bg-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38f6"]
                                        },
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-2-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-icon",
                                            selectorGuids: ["edf2c2f3-b896-6db1-3493-f4274f6560b1"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-2-n-2",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 200,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-bg-block",
                                            selectorGuids: ["14d5baf1-e155-a4a6-3784-c32d21dc38f6"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19a7112b9e1
                        },
                        "a-3": {
                            id: "a-3",
                            title: "Company marquee",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-3-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 25e3,
                                        target: {
                                            selector: ".partners-marquee-inner",
                                            selectorGuids: ["2af6a860-6cce-c178-d21a-db68bbe601ca"]
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-3-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            selector: ".partners-marquee-inner",
                                            selectorGuids: ["2af6a860-6cce-c178-d21a-db68bbe601ca"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b17b10da8
                        },
                        "a-4": {
                            id: "a-4",
                            title: "Why card hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-4-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card",
                                            selectorGuids: ["4307e3fb-9bde-8a1a-1572-7e53c9749505"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-title-block",
                                            selectorGuids: ["61942878-d037-04e0-686a-350f2bd4d22a"]
                                        },
                                        globalSwatchId: "--bg-color--black",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-description-block",
                                            selectorGuids: ["2540df92-78f4-7fa5-a951-4c7778a1f53b"]
                                        },
                                        globalSwatchId: "--text-color--text-color-01",
                                        rValue: 29,
                                        bValue: 29,
                                        gValue: 29,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-7",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon-block",
                                            selectorGuids: ["ce857d5c-9d2e-904d-18e2-86192104cdc7"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-9",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon-block",
                                            selectorGuids: ["ce857d5c-9d2e-904d-18e2-86192104cdc7"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-11",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon",
                                            selectorGuids: ["97ab2594-16b6-da4a-ce1f-7487af4c7152"]
                                        },
                                        value: "block"
                                    }
                                }, {
                                    id: "a-4-n-12",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-hover-icon",
                                            selectorGuids: ["fcb9f1b0-5822-5fb4-65dc-3cf567db2a91"]
                                        },
                                        value: "none"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-4-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card",
                                            selectorGuids: ["4307e3fb-9bde-8a1a-1572-7e53c9749505"]
                                        },
                                        globalSwatchId: "--bg-color--black",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-title-block",
                                            selectorGuids: ["61942878-d037-04e0-686a-350f2bd4d22a"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-6",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-description-block",
                                            selectorGuids: ["2540df92-78f4-7fa5-a951-4c7778a1f53b"]
                                        },
                                        globalSwatchId: "--text-color--text-color-02",
                                        rValue: 184,
                                        bValue: 183,
                                        gValue: 183,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-8",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon-block",
                                            selectorGuids: ["ce857d5c-9d2e-904d-18e2-86192104cdc7"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-02",
                                        rValue: 19,
                                        bValue: 19,
                                        gValue: 19,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-10",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon-block",
                                            selectorGuids: ["ce857d5c-9d2e-904d-18e2-86192104cdc7"]
                                        },
                                        globalSwatchId: "--border-color--border-color-01",
                                        rValue: 36,
                                        bValue: 36,
                                        gValue: 36,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-4-n-13",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon",
                                            selectorGuids: ["97ab2594-16b6-da4a-ce1f-7487af4c7152"]
                                        },
                                        value: "none"
                                    }
                                }, {
                                    id: "a-4-n-14",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-hover-icon",
                                            selectorGuids: ["fcb9f1b0-5822-5fb4-65dc-3cf567db2a91"]
                                        },
                                        value: "block"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b1af3957b
                        },
                        "a-5": {
                            id: "a-5",
                            title: "Why card hover out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-5-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card",
                                            selectorGuids: ["4307e3fb-9bde-8a1a-1572-7e53c9749505"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-title-block",
                                            selectorGuids: ["61942878-d037-04e0-686a-350f2bd4d22a"]
                                        },
                                        globalSwatchId: "--bg-color--black",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-description-block",
                                            selectorGuids: ["2540df92-78f4-7fa5-a951-4c7778a1f53b"]
                                        },
                                        globalSwatchId: "--text-color--text-color-01",
                                        rValue: 29,
                                        bValue: 29,
                                        gValue: 29,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-4",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon-block",
                                            selectorGuids: ["ce857d5c-9d2e-904d-18e2-86192104cdc7"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-5",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon-block",
                                            selectorGuids: ["ce857d5c-9d2e-904d-18e2-86192104cdc7"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-6",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-icon",
                                            selectorGuids: ["97ab2594-16b6-da4a-ce1f-7487af4c7152"]
                                        },
                                        value: "block"
                                    }
                                }, {
                                    id: "a-5-n-7",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".why-card-hover-icon",
                                            selectorGuids: ["fcb9f1b0-5822-5fb4-65dc-3cf567db2a91"]
                                        },
                                        value: "none"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b1af3957b
                        },
                        "a-7": {
                            id: "a-7",
                            title: "Review card hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-7-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-card-content-block",
                                            selectorGuids: ["fde01d4e-3885-e96e-a1fe-8bf009cb2970"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-button-block",
                                            selectorGuids: ["20bebc77-cfa8-cf9e-170b-a4f204714907"]
                                        },
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-7-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-card-content-block",
                                            selectorGuids: ["fde01d4e-3885-e96e-a1fe-8bf009cb2970"]
                                        },
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-button-block",
                                            selectorGuids: ["20bebc77-cfa8-cf9e-170b-a4f204714907"]
                                        },
                                        yValue: -100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b1b8a5ce8
                        },
                        "a-8": {
                            id: "a-8",
                            title: "Review card hover out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-8-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-card-content-block",
                                            selectorGuids: ["fde01d4e-3885-e96e-a1fe-8bf009cb2970"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".review-button-block",
                                            selectorGuids: ["20bebc77-cfa8-cf9e-170b-a4f204714907"]
                                        },
                                        yValue: 200,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b1b8a5ce8
                        },
                        "a-9": {
                            id: "a-9",
                            title: "FAQ items open",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-9-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-answer-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af32"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-9-n-7",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon",
                                            selectorGuids: ["5276b61a-ee18-b005-3e51-73a4509c08be"]
                                        },
                                        globalSwatchId: "--bg-color--black",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-5",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af2f"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af2f"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-9-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-answer-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af32"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-9-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af2f"]
                                        },
                                        zValue: 45,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-9-n-6",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af2f"]
                                        },
                                        globalSwatchId: "--bg-color--black",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-8",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon",
                                            selectorGuids: ["5276b61a-ee18-b005-3e51-73a4509c08be"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x198274425f6
                        },
                        "a-10": {
                            id: "a-10",
                            title: "FAQ items close",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-10-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-answer-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af32"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-10-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon",
                                            selectorGuids: ["5276b61a-ee18-b005-3e51-73a4509c08be"]
                                        },
                                        globalSwatchId: "--bg-color--black",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-10-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af2f"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-10-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-icon-block",
                                            selectorGuids: ["1cc28e61-1b29-8cf8-67a0-f7e68819af2f"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x198274425f6
                        },
                        "a-28": {
                            id: "a-28",
                            title: "Hero Video card grow animation",
                            continuousParameterGroups: [{
                                id: "a-28-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [{
                                    keyframe: 25,
                                    actionItems: [{
                                        id: "a-28-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outSine",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-video-card",
                                                selectorGuids: ["3ee89791-9ddc-ca5a-03e3-bf62108179d7"]
                                            },
                                            yValue: -75,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX"
                                        }
                                    }]
                                }, {
                                    keyframe: 30,
                                    actionItems: [{
                                        id: "a-28-n-10",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-video-card",
                                                selectorGuids: ["3ee89791-9ddc-ca5a-03e3-bf62108179d7"]
                                            },
                                            xValue: .5,
                                            yValue: .5,
                                            locked: !1
                                        }
                                    }, {
                                        id: "a-28-n-12",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-video-card",
                                                selectorGuids: ["3ee89791-9ddc-ca5a-03e3-bf62108179d7"]
                                            },
                                            heightValue: 900,
                                            widthUnit: "PX",
                                            heightUnit: "px",
                                            locked: !1
                                        }
                                    }, {
                                        id: "a-28-n-6",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-card-text-block.video-card",
                                                selectorGuids: ["99b76287-761c-98c6-e639-7c3eb43ea368", "45411e3e-1cb0-0603-93b5-8dbe554a0659"]
                                            },
                                            xValue: 2,
                                            yValue: 2,
                                            locked: !0
                                        }
                                    }, {
                                        id: "a-28-n-8",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-card-text-block.video-card",
                                                selectorGuids: ["99b76287-761c-98c6-e639-7c3eb43ea368", "45411e3e-1cb0-0603-93b5-8dbe554a0659"]
                                            },
                                            xValue: 50,
                                            yValue: -50,
                                            xUnit: "%",
                                            yUnit: "px",
                                            zUnit: "PX"
                                        }
                                    }]
                                }, {
                                    keyframe: 55,
                                    actionItems: [{
                                        id: "a-28-n-5",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outSine",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-video-card",
                                                selectorGuids: ["3ee89791-9ddc-ca5a-03e3-bf62108179d7"]
                                            },
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX"
                                        }
                                    }, {
                                        id: "a-28-n-7",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-card-text-block.video-card",
                                                selectorGuids: ["99b76287-761c-98c6-e639-7c3eb43ea368", "45411e3e-1cb0-0603-93b5-8dbe554a0659"]
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0
                                        }
                                    }, {
                                        id: "a-28-n-9",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-card-text-block.video-card",
                                                selectorGuids: ["99b76287-761c-98c6-e639-7c3eb43ea368", "45411e3e-1cb0-0603-93b5-8dbe554a0659"]
                                            },
                                            xValue: 0,
                                            yValue: 0,
                                            xUnit: "%",
                                            yUnit: "px",
                                            zUnit: "PX"
                                        }
                                    }, {
                                        id: "a-28-n-11",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-video-card",
                                                selectorGuids: ["3ee89791-9ddc-ca5a-03e3-bf62108179d7"]
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0
                                        }
                                    }, {
                                        id: "a-28-n-13",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".hero-video-card",
                                                selectorGuids: ["3ee89791-9ddc-ca5a-03e3-bf62108179d7"]
                                            },
                                            heightValue: 800,
                                            widthUnit: "PX",
                                            heightUnit: "px",
                                            locked: !1
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19b1cb73f79
                        },
                        "a-14": {
                            id: "a-14",
                            title: "Course first module close",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-14-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-lists-block",
                                            selectorGuids: ["20073a53-e108-fc4f-4424-33611a57a736"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-14-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-icon-wrapper",
                                            selectorGuids: ["5c0d7d6e-6f83-8c0b-61aa-437d97a6dd0f"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-14-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-first-module",
                                            selectorGuids: ["0aedd577-2902-b7a9-53e9-1a9f9c11bcd0"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-14-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-lists-block",
                                            selectorGuids: ["20073a53-e108-fc4f-4424-33611a57a736"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-14-n-4",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-first-module",
                                            selectorGuids: ["0aedd577-2902-b7a9-53e9-1a9f9c11bcd0"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-14-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-icon-wrapper",
                                            selectorGuids: ["5c0d7d6e-6f83-8c0b-61aa-437d97a6dd0f"]
                                        },
                                        zValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b218b7d76
                        },
                        "a-15": {
                            id: "a-15",
                            title: "Course first module open",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-15-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-lists-block",
                                            selectorGuids: ["20073a53-e108-fc4f-4424-33611a57a736"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-15-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-icon-wrapper",
                                            selectorGuids: ["5c0d7d6e-6f83-8c0b-61aa-437d97a6dd0f"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-15-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            selector: ".course-first-module",
                                            selectorGuids: ["0aedd577-2902-b7a9-53e9-1a9f9c11bcd0"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b218b7d76
                        },
                        "a-12": {
                            id: "a-12",
                            title: "Course module open",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-12-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-lists-block",
                                            selectorGuids: ["20073a53-e108-fc4f-4424-33611a57a736"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-12-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-icon-wrapper",
                                            selectorGuids: ["5c0d7d6e-6f83-8c0b-61aa-437d97a6dd0f"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-12-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module",
                                            selectorGuids: ["b4febce9-e391-39bd-00c3-d7609f37617d"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-12-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-lists-block",
                                            selectorGuids: ["20073a53-e108-fc4f-4424-33611a57a736"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-12-n-4",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module",
                                            selectorGuids: ["b4febce9-e391-39bd-00c3-d7609f37617d"]
                                        },
                                        globalSwatchId: "--bg-color--bg-color-01",
                                        rValue: 244,
                                        bValue: 244,
                                        gValue: 244,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-12-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-icon-wrapper",
                                            selectorGuids: ["5c0d7d6e-6f83-8c0b-61aa-437d97a6dd0f"]
                                        },
                                        zValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b21753467
                        },
                        "a-13": {
                            id: "a-13",
                            title: "Course module Close",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-13-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-lists-block",
                                            selectorGuids: ["20073a53-e108-fc4f-4424-33611a57a736"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-13-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module-icon-wrapper",
                                            selectorGuids: ["5c0d7d6e-6f83-8c0b-61aa-437d97a6dd0f"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-13-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".course-module",
                                            selectorGuids: ["b4febce9-e391-39bd-00c3-d7609f37617d"]
                                        },
                                        globalSwatchId: "--bg-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b21753467
                        },
                        "a-16": {
                            id: "a-16",
                            title: "Blog details  main content scrolling in view",
                            continuousParameterGroups: [{
                                id: "a-16-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [{
                                    keyframe: 0,
                                    actionItems: [{
                                        id: "a-16-n",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-2",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-3",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }]
                                }, {
                                    keyframe: 40,
                                    actionItems: [{
                                        id: "a-16-n-4",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-5",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-6",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--text-color--text-color-01",
                                            rValue: 29,
                                            bValue: 29,
                                            gValue: 29,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-7",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-8",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }]
                                }, {
                                    keyframe: 60,
                                    actionItems: [{
                                        id: "a-16-n-9",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-10",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-11",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--text-color--text-color-01",
                                            rValue: 29,
                                            bValue: 29,
                                            gValue: 29,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-12",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-13",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }]
                                }, {
                                    keyframe: 75,
                                    actionItems: [{
                                        id: "a-16-n-14",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-15",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-16",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--text-color--text-color-01",
                                            rValue: 29,
                                            bValue: 29,
                                            gValue: 29,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-17",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-18",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }]
                                }, {
                                    keyframe: 78,
                                    actionItems: [{
                                        id: "a-16-n-19",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-20",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-21",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--text-color--text-color-01",
                                            rValue: 29,
                                            bValue: 29,
                                            gValue: 29,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-22",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-23",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }]
                                }, {
                                    keyframe: 85,
                                    actionItems: [{
                                        id: "a-16-n-24",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-25",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-26",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--text-color--text-color-01",
                                            rValue: 29,
                                            bValue: 29,
                                            gValue: 29,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-27",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-28",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }]
                                }, {
                                    keyframe: 90,
                                    actionItems: [{
                                        id: "a-16-n-29",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--white",
                                            rValue: 255,
                                            bValue: 255,
                                            gValue: 255,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-30",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-31",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--text-color--text-color-01",
                                            rValue: 29,
                                            bValue: 29,
                                            gValue: 29,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-32",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }]
                                }, {
                                    keyframe: 100,
                                    actionItems: [{
                                        id: "a-16-n-33",
                                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--bg-color-01",
                                            rValue: 244,
                                            bValue: 244,
                                            gValue: 244,
                                            aValue: 1
                                        }
                                    }, {
                                        id: "a-16-n-34",
                                        actionTypeId: "STYLE_TEXT_COLOR",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {},
                                            globalSwatchId: "--bg-color--black",
                                            rValue: 0,
                                            bValue: 0,
                                            gValue: 0,
                                            aValue: 1
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19a910c1ad0
                        },
                        "a-23": {
                            id: "a-23",
                            title: "Nav link hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-23-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".nav-link-title",
                                            selectorGuids: ["640e22d3-d9ad-d555-6684-0b200fd70274"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-23-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutQuart",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".nav-link-title",
                                            selectorGuids: ["640e22d3-d9ad-d555-6684-0b200fd70274"]
                                        },
                                        yValue: -100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b3f5136ec
                        },
                        "a-24": {
                            id: "a-24",
                            title: "Nav link hover out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-24-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutQuart",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".nav-link-title",
                                            selectorGuids: ["640e22d3-d9ad-d555-6684-0b200fd70274"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b3f5136ec
                        },
                        "a-25": {
                            id: "a-25",
                            title: "Footer nav link hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-25-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".footer-nav-link-text",
                                            selectorGuids: ["2acc01ef-e926-54fe-ea81-60c855c6bdb2"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-25-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutQuart",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".footer-nav-link-text",
                                            selectorGuids: ["2acc01ef-e926-54fe-ea81-60c855c6bdb2"]
                                        },
                                        yValue: -100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b3fb572d6
                        },
                        "a-26": {
                            id: "a-26",
                            title: "Footer nav link hover out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-26-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutQuart",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".footer-nav-link-text",
                                            selectorGuids: ["2acc01ef-e926-54fe-ea81-60c855c6bdb2"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b3fb572d6
                        },
                        "a-27": {
                            id: "a-27",
                            title: "About hero animation",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-27-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 5e3,
                                        target: {},
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-27-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 2e4,
                                        target: {},
                                        yValue: -100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-27-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {},
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b3fcd79ca
                        },
                        "a-29": {
                            id: "a-29",
                            title: "Navbar open",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-29-n",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".nav-open-icon",
                                            selectorGuids: ["c5e2efff-3322-8f3c-8129-9c4b1aa152e8"]
                                        },
                                        value: "none"
                                    }
                                }, {
                                    id: "a-29-n-2",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".nav-close-icon",
                                            selectorGuids: ["4be520b7-3989-741d-0403-80392284834d"]
                                        },
                                        value: "block"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b447ff06a
                        },
                        "a-30": {
                            id: "a-30",
                            title: "Navbar close",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-30-n",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".nav-open-icon",
                                            selectorGuids: ["c5e2efff-3322-8f3c-8129-9c4b1aa152e8"]
                                        },
                                        value: "block"
                                    }
                                }, {
                                    id: "a-30-n-2",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".nav-close-icon",
                                            selectorGuids: ["4be520b7-3989-741d-0403-80392284834d"]
                                        },
                                        value: "none"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b447ff06a
                        },
                        "a-35": {
                            id: "a-35",
                            title: "Upgrade card marquee",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-35-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 25e3,
                                        target: {
                                            selector: ".cta-cards-wrapper",
                                            selectorGuids: ["c8afc91b-de5d-8d02-2332-e67e176ba883"]
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-35-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            selector: ".cta-cards-wrapper",
                                            selectorGuids: ["c8afc91b-de5d-8d02-2332-e67e176ba883"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b17b10da8
                        },
                        "a-36": {
                            id: "a-36",
                            title: "Blog card hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-36-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".blog-card-image",
                                            selectorGuids: ["1c84515d-c0ac-9ef2-699b-3a548279dae7"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-36-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".blog-card-image",
                                            selectorGuids: ["1c84515d-c0ac-9ef2-699b-3a548279dae7"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b497a637b
                        },
                        "a-37": {
                            id: "a-37",
                            title: "Blog card hover out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-37-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".blog-card-image",
                                            selectorGuids: ["1c84515d-c0ac-9ef2-699b-3a548279dae7"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b497a637b
                        },
                        "a-38": {
                            id: "a-38",
                            title: "Exprience counter box into view reverse",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-38-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-number-block",
                                            selectorGuids: ["8e307fde-0f9b-fa34-7eca-cc7649822c42"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-38-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-number-reverse-block",
                                            selectorGuids: ["8e307fde-0f9b-fa34-7eca-cc7649822c44"]
                                        },
                                        yValue: -1e3,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-38-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.795, .287, .205, .977],
                                        duration: 2e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-number-block",
                                            selectorGuids: ["8e307fde-0f9b-fa34-7eca-cc7649822c42"]
                                        },
                                        yValue: -1e3,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-38-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.795, .287, .205, .977],
                                        duration: 2e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-number-reverse-block",
                                            selectorGuids: ["8e307fde-0f9b-fa34-7eca-cc7649822c44"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x197e2e677a9
                        },
                        "a-39": {
                            id: "a-39",
                            title: "Load more button click",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-39-n",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            selector: ".course-review-card.show-on-load-more-click",
                                            selectorGuids: ["855784fe-7552-229b-445f-930f9e9b381b", "7e5d274d-d351-38c7-2022-e7816580a1f5"]
                                        },
                                        value: "flex"
                                    }
                                }, {
                                    id: "a-39-n-2",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            selector: ".load-more-button",
                                            selectorGuids: ["6de5acb2-85ae-f2a7-78c2-88f7f6a255e3"]
                                        },
                                        value: "none"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b53f152a1
                        },
                        "a-6": {
                            id: "a-6",
                            title: "Process section image growing animation",
                            continuousParameterGroups: [{
                                id: "a-6-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [{
                                    keyframe: 2,
                                    actionItems: [{
                                        id: "a-6-n-5",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".process-image-circle-block",
                                                selectorGuids: ["20a7de95-221f-949a-f401-52257356ce33"]
                                            },
                                            value: 1,
                                            unit: ""
                                        }
                                    }, {
                                        id: "a-6-n",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".process-image-transparent-animation-block",
                                                selectorGuids: ["3b779014-1da9-9478-91ed-8ea33949747b"]
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0
                                        }
                                    }]
                                }, {
                                    keyframe: 4,
                                    actionItems: [{
                                        id: "a-6-n-6",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".process-image-circle-block",
                                                selectorGuids: ["20a7de95-221f-949a-f401-52257356ce33"]
                                            },
                                            value: 0,
                                            unit: ""
                                        }
                                    }]
                                }, {
                                    keyframe: 30,
                                    actionItems: [{
                                        id: "a-6-n-2",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".process-image-transparent-animation-block",
                                                selectorGuids: ["3b779014-1da9-9478-91ed-8ea33949747b"]
                                            },
                                            xValue: 17,
                                            yValue: 17,
                                            locked: !0
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19b1b2ab23c
                        },
                        slideInBottom: {
                            id: "slideInBottom",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }]
                            }]
                        },
                        growIn: {
                            id: "growIn",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: .7500000000000001,
                                        yValue: .7500000000000001
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 1,
                                        yValue: 1
                                    }
                                }, {
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }]
                            }]
                        },
                        shrinkIn: {
                            id: "shrinkIn",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 1.25,
                                        yValue: 1.25
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 1,
                                        yValue: 1
                                    }
                                }, {
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }]
                            }]
                        }
                    },
                    site: {
                        mediaQueries: [{
                            key: "main",
                            min: 992,
                            max: 1e4
                        }, {
                            key: "medium",
                            min: 768,
                            max: 991
                        }, {
                            key: "small",
                            min: 480,
                            max: 767
                        }, {
                            key: "tiny",
                            min: 0,
                            max: 479
                        }]
                    }
                }), Webflow.require("commerce") && Webflow.require("commerce").init({
                    siteId: "693d418ddb735f60e5fb14f4",
                    apiUrl: "https://render.webflow.com"
                }), "complete" === document.readyState ? e() : document.addEventListener("readystatechange", () => {
                    "complete" === document.readyState && e()
                })
            },
            15968: function(e, a, t) {
                t(9461), t(27624), t(30286), t(8334), t(12338), t(93695), t(60322), t(40941), t(65134), t(41655), t(64054), t(27527), t(23973), t(84345), t(59904), t(91724), t(26670)
            }
        },
        a = {};

    function t(i) {
        var n = a[i];
        if (void 0 !== n) return n.exports;
        var o = a[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    t.m = e, t.d = (e, a) => {
        for (var i in a) t.o(a, i) && !t.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: a[i]
        })
    }, t.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), t.g = (() => {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    })(), t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e = [];
        t.O = (a, i, n, o) => {
            if (i) {
                o = o || 0;
                for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
                e[d] = [i, n, o];
                return
            }
            for (var l = 1 / 0, d = 0; d < e.length; d++) {
                for (var [i, n, o] = e[d], c = !0, s = 0; s < i.length; s++)(!1 & o || l >= o) && Object.keys(t.O).every(e => t.O[e](i[s])) ? i.splice(s--, 1) : (c = !1, o < l && (l = o));
                if (c) {
                    e.splice(d--, 1);
                    var r = n();
                    void 0 !== r && (a = r)
                }
            }
            return a
        }
    })(), t.rv = () => "1.3.9", (() => {
        var e = {
            94: 0
        };
        t.O.j = a => 0 === e[a];
        var a = (a, i) => {
                var n, o, [d, l, c] = i,
                    s = 0;
                if (d.some(a => 0 !== e[a])) {
                    for (n in l) t.o(l, n) && (t.m[n] = l[n]);
                    if (c) var r = c(t)
                }
                for (a && a(i); s < d.length; s++) o = d[s], t.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                return t.O(r)
            },
            i = self.webpackChunk = self.webpackChunk || [];
        i.forEach(a.bind(null, 0)), i.push = a.bind(null, i.push.bind(i))
    })(), t.ruid = "bundler=rspack@1.3.9";
    var i = t.O(void 0, ["751", "716", "735"], function() {
        return t(15968)
    });
    i = t.O(i)
})();