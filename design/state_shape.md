### State Shape

### Notes:
- sched requests use station abbrevations such as 12TH, 24TH
- trips can contain up to three legs
- sched info doesn't include all, still have to query the route
- color and route details must be pinged after schedule inquiry made

##### Stations
{
   "?xml":{
      "@version":"1.0",
      "@encoding":"utf-8"
   },
   "root":{
      "uri":{
         "#cdata-section":"http://api.bart.gov/api/stn.aspx?cmd=stns&json=y"
      },
      "stations":{
         "station":[
            {
               "name":"12th St. Oakland City Center",
               "abbr":"12TH",
               "gtfs_latitude":"37.803768",
               "gtfs_longitude":"-122.271450",
               "address":"1245 Broadway",
               "city":"Oakland",
               "county":"alameda",
               "state":"CA",
               "zipcode":"94612"
            },
            {
               "name":"Warm Springs / South Fremont",
               "abbr":"WARM",
               "gtfs_latitude":"37.502171",
               "gtfs_longitude":"-121.939313",
               "address":"45193 Warm Springs Blvd",
               "city":"Fremont",
               "county":"alameda",
               "state":"CA",
               "zipcode":"94539"
            }
         ]
      },
      "message":""
   }
}

##### Route Query

{  
   "?xml":{  
      "@version":"1.0",
      "@encoding":"utf-8"
   },
   "root":{  
      "@id":"1",
      "uri":{  
         "#cdata-section":"http://api.bart.gov/api/sched.aspx?cmd=depart&orig=ASHB&dest=CIVC&date=now&b=2&a=2&l=1&json=y"
      },
      "origin":"ASHB",
      "destination":"CIVC",
      "sched_num":"45",
      "schedule":{  
         "date":"Jan 2, 2018",
         "time":"10:10 AM",
         "before":"2",
         "after":"2",
         "request":{  
            "trip":[  
               {  
                  "@origin":"ASHB",
                  "@destination":"CIVC",
                  "@fare":"4.45",
                  "@origTimeMin":"9:57 AM",
                  "@origTimeDate":"01/02/2018 ",
                  "@destTimeMin":"10:22 AM",
                  "@destTimeDate":"01/02/2018",
                  "@clipper":"1.45",
                  "@tripTime":"25",
                  "@co2":"8.62",
                  "fares":{  
                     "@level":"normal",
                     "fare":[  
                        {  
                           "@amount":"3.95",
                           "@class":"clipper",
                           "@name":"Clipper"
                        },
                        {  
                           "@amount":"4.45",
                           "@class":"cash",
                           "@name":"BART Blue Ticket"
                        },
                        {  
                           "@amount":"1.45",
                           "@class":"rtcclipper",
                           "@name":"Senior/Disabled Clipper"
                        },
                        {  
                           "@amount":"1.95",
                           "@class":"student",
                           "@name":"Youth Clipper"
                        }
                     ]
                  },
                  "leg":[  
                     {  
                        "@order":"1",
                        "@transfercode":"",
                        "@origin":"ASHB",
                        "@destination":"CIVC",
                        "@origTimeMin":"9:57 AM",
                        "@origTimeDate":"01/02/2018",
                        "@destTimeMin":"10:22 AM",
                        "@destTimeDate":"01/02/2018",
                        "@line":"ROUTE 7",
                        "@bikeflag":"1",
                        "@trainHeadStation":"MLBR",
                        "@load":"1",
                        "@trainId":"4430942",
                        "@trainIdx":"23"
                     }
                  ]
               },
               {  
                  "@origin":"ASHB",
                  "@destination":"CIVC",
                  "@fare":"4.45",
                  "@origTimeMin":"10:05 AM",
                  "@origTimeDate":"01/02/2018 ",
                  "@destTimeMin":"10:29 AM",
                  "@destTimeDate":"01/02/2018",
                  "@clipper":"1.45",
                  "@tripTime":"24",
                  "@co2":"8.62",
                  "fares":{  
                     "@level":"normal",
                     "fare":[  
                        {  
                           "@amount":"3.95",
                           "@class":"clipper",
                           "@name":"Clipper"
                        },
                        {  
                           "@amount":"4.45",
                           "@class":"cash",
                           "@name":"BART Blue Ticket"
                        },
                        {  
                           "@amount":"1.45",
                           "@class":"rtcclipper",
                           "@name":"Senior/Disabled Clipper"
                        },
                        {  
                           "@amount":"1.95",
                           "@class":"student",
                           "@name":"Youth Clipper"
                        }
                     ]
                  },
                  "leg":[  
                     {  
                        "@order":"1",
                        "@transfercode":"S",
                        "@origin":"ASHB",
                        "@destination":"MCAR",
                        "@origTimeMin":"10:05 AM",
                        "@origTimeDate":"01/02/2018",
                        "@destTimeMin":"10:08 AM",
                        "@destTimeDate":"01/02/2018",
                        "@line":"ROUTE 4",
                        "@bikeflag":"1",
                        "@trainHeadStation":"FRMT",
                        "@load":"2",
                        "@trainId":"2250950",
                        "@trainIdx":"23"
                     },
                     {  
                        "@order":"2",
                        "@transfercode":"",
                        "@origin":"MCAR",
                        "@destination":"CIVC",
                        "@origTimeMin":"10:08 AM",
                        "@origTimeDate":"01/02/2018",
                        "@destTimeMin":"10:29 AM",
                        "@destTimeDate":"01/02/2018",
                        "@line":"ROUTE 1",
                        "@bikeflag":"1",
                        "@trainHeadStation":"SFIA",
                        "@load":"2",
                        "@trainId":"3790932",
                        "@trainIdx":"37"
                     }
                  ]
               },
               {  
                  "@origin":"ASHB",
                  "@destination":"CIVC",
                  "@fare":"4.45",
                  "@origTimeMin":"10:12 AM",
                  "@origTimeDate":"01/02/2018 ",
                  "@destTimeMin":"10:37 AM",
                  "@destTimeDate":"01/02/2018",
                  "@clipper":"1.45",
                  "@tripTime":"25",
                  "@co2":"8.62",
                  "fares":{  
                     "@level":"normal",
                     "fare":[  
                        {  
                           "@amount":"3.95",
                           "@class":"clipper",
                           "@name":"Clipper"
                        },
                        {  
                           "@amount":"4.45",
                           "@class":"cash",
                           "@name":"BART Blue Ticket"
                        },
                        {  
                           "@amount":"1.45",
                           "@class":"rtcclipper",
                           "@name":"Senior/Disabled Clipper"
                        },
                        {  
                           "@amount":"1.95",
                           "@class":"student",
                           "@name":"Youth Clipper"
                        }
                     ]
                  },
                  "leg":[  
                     {  
                        "@order":"1",
                        "@transfercode":"",
                        "@origin":"ASHB",
                        "@destination":"CIVC",
                        "@origTimeMin":"10:12 AM",
                        "@origTimeDate":"01/02/2018",
                        "@destTimeMin":"10:37 AM",
                        "@destTimeDate":"01/02/2018",
                        "@line":"ROUTE 7",
                        "@bikeflag":"1",
                        "@trainHeadStation":"MLBR",
                        "@load":"1",
                        "@trainId":"4450957",
                        "@trainIdx":"24"
                     }
                  ]
               },
               {  
                  "@origin":"ASHB",
                  "@destination":"CIVC",
                  "@fare":"4.45",
                  "@origTimeMin":"10:20 AM",
                  "@origTimeDate":"01/02/2018 ",
                  "@destTimeMin":"10:44 AM",
                  "@destTimeDate":"01/02/2018",
                  "@clipper":"1.45",
                  "@tripTime":"24",
                  "@co2":"8.62",
                  "fares":{  
                     "@level":"normal",
                     "fare":[  
                        {  
                           "@amount":"3.95",
                           "@class":"clipper",
                           "@name":"Clipper"
                        },
                        {  
                           "@amount":"4.45",
                           "@class":"cash",
                           "@name":"BART Blue Ticket"
                        },
                        {  
                           "@amount":"1.45",
                           "@class":"rtcclipper",
                           "@name":"Senior/Disabled Clipper"
                        },
                        {  
                           "@amount":"1.95",
                           "@class":"student",
                           "@name":"Youth Clipper"
                        }
                     ]
                  },
                  "leg":[  
                     {  
                        "@order":"1",
                        "@transfercode":"S",
                        "@origin":"ASHB",
                        "@destination":"MCAR",
                        "@origTimeMin":"10:20 AM",
                        "@origTimeDate":"01/02/2018",
                        "@destTimeMin":"10:23 AM",
                        "@destTimeDate":"01/02/2018",
                        "@line":"ROUTE 4",
                        "@bikeflag":"1",
                        "@trainHeadStation":"FRMT",
                        "@load":"2",
                        "@trainId":"2271005",
                        "@trainIdx":"24"
                     },
                     {  
                        "@order":"2",
                        "@transfercode":"",
                        "@origin":"MCAR",
                        "@destination":"CIVC",
                        "@origTimeMin":"10:23 AM",
                        "@origTimeDate":"01/02/2018",
                        "@destTimeMin":"10:44 AM",
                        "@destTimeDate":"01/02/2018",
                        "@line":"ROUTE 1",
                        "@bikeflag":"1",
                        "@trainHeadStation":"SFIA",
                        "@load":"2",
                        "@trainId":"3810947",
                        "@trainIdx":"38"
                     }
                  ]
               }
            ]
         }
      },
      "message":{  
         "co2_emissions":{  
            "#cdata-section":"
CO2 emissions saved by this BART trip: 8.6 pounds. Read more

"
         },
         "legend":"bikeflag: 1 = bikes allowed. 0 = no bikes allowed. transfercode: blank = no transfer, N = normal transfer, T = timed transfer, connecting trains will wait up to five minutes for transferring passengers. S = scheduled transfer, connecting trains will not wait for transferring passengers if there is a delay."
      }
   }
}
