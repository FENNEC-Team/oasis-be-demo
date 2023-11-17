const config = require("./config.js")

module.exports ={
    listLocs: (req, res) => {
        if (req.headers["authorization"] == config.correctToken) {
            if (req.params["cmpId"] == "democompany") {
                res.status(200)
                res.send({
                    success: true,
                    data: {
                        locations: [
                            {
                                name: "Office 1",
                                location: "124 5th Ave",
                                id: "demooffice1"
                            },
                            {
                                name: "Office 2",
                                location: "193 10th St",
                                id: "demooffice2"
                            }
                        ]
                    }
                })
            } else {
                res.status(404)
                res.send({
                    success: false,
                    error: "Not found"
                })
            }
        } else {
            res.status(403)
            res.send({
                success: false,
                error: "Unauthorized"
            })
        }
    },
    locInfo: (req, res) => {
        if (req.headers["authorization"] == config.correctToken) {
            if (req.params["cmpId"] == "democompany") {
                if (req.params["locId"] == "demooffice1") {
                    res.status(200)
                    res.send({
                        success: true,
                        data: {
                            storyMaps: [
                                `<svg class="wrapper" _ngcontent-qir-c274="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="-20 -20 618.88 407.99">
        <defs _ngcontent-qir-c274="">
          <filter _ngcontent-qir-c274="" id="f2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur _ngcontent-qir-c274="" result="blurOut" in="StrokePaint" stdDeviation="3"></feGaussianBlur>
          </filter>
          <pattern _ngcontent-qir-c274="" id="New_Pattern_Swatch_1" data-name="New Pattern Swatch 1" width="60" height="60" patternUnits="userSpaceOnUse" viewBox="0 0 60 60">
            <line _ngcontent-qir-c274="" x1="-113.26" y1="123.26" x2="3.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="133.26" x2="13.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="143.26" x2="23.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="153.26" x2="33.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="163.26" x2="43.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="173.26" x2="53.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="123.26" x2="63.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="133.26" x2="73.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="143.26" x2="83.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="153.26" x2="93.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="163.26" x2="103.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="173.26" x2="113.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="123.26" x2="123.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="133.26" x2="133.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="143.26" x2="143.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="153.26" x2="153.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="163.26" x2="163.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="173.26" x2="173.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-113.26" y1="63.26" x2="3.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="73.26" x2="13.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="83.26" x2="23.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="93.26" x2="33.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="103.26" x2="43.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="113.26" x2="53.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="63.26" x2="63.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="73.26" x2="73.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="83.26" x2="83.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="93.26" x2="93.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="103.26" x2="103.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="113.26" x2="113.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="63.26" x2="123.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="73.26" x2="133.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="83.26" x2="143.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="93.26" x2="153.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="103.26" x2="163.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="113.26" x2="173.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-113.26" y1="3.26" x2="3.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="13.26" x2="13.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="23.26" x2="23.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="33.26" x2="33.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="43.26" x2="43.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="53.26" x2="53.26" y2="-63.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="3.26" x2="63.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="13.26" x2="73.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="23.26" x2="83.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="33.26" x2="93.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="43.26" x2="103.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="53.26" x2="113.26" y2="-63.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="3.26" x2="123.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="13.26" x2="133.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="23.26" x2="143.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="33.26" x2="153.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="43.26" x2="163.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="53.26" x2="173.26" y2="-63.26" class="stroke-pattern"></line>
          </pattern>
        </defs>
        <g _ngcontent-qir-c274="">
          <path _ngcontent-qir-c274="" class="room-border ng-star-inserted" d="M186.21,130.05H216.37V160H186.21Z"></path>
          <!---->
        </g>
        <g _ngcontent-qir-c274="">
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z"></path>
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z"></path>
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M216.37,49.82H358.8V92.5H216.37Z"></path>
          <!---->
        </g>
        
        
        <g _ngcontent-qir-c274="" id="demoroom01" class="ng-star-inserted">
          <path _ngcontent-qir-c274="" class="room-bg" d="M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="320" y="273">
            Room 1
          </text>
        </g>
        <g _ngcontent-qir-c274="" class="ng-star-inserted" id="demoroom02">
          <path _ngcontent-qir-c274="" class="room-bg" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="468" y="134">
            Room 2
          </text>
        </g>
        <!---->
      <g _ngcontent-qir-c274="" id="demoroom03" class="ng-star-inserted">
          <path _ngcontent-qir-c274="" class="room-bg" d="M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="142" y="240.8">
            Room 3
          </text>
        </svg>`,
        `<svg class="wrapper" _ngcontent-qir-c274="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="-20 -20 618.88 407.99">
        <defs _ngcontent-qir-c274="">
          <filter _ngcontent-qir-c274="" id="f2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur _ngcontent-qir-c274="" result="blurOut" in="StrokePaint" stdDeviation="3"></feGaussianBlur>
          </filter>
          <pattern _ngcontent-qir-c274="" id="New_Pattern_Swatch_1" data-name="New Pattern Swatch 1" width="60" height="60" patternUnits="userSpaceOnUse" viewBox="0 0 60 60">
            <line _ngcontent-qir-c274="" x1="-113.26" y1="123.26" x2="3.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="133.26" x2="13.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="143.26" x2="23.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="153.26" x2="33.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="163.26" x2="43.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="173.26" x2="53.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="123.26" x2="63.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="133.26" x2="73.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="143.26" x2="83.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="153.26" x2="93.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="163.26" x2="103.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="173.26" x2="113.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="123.26" x2="123.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="133.26" x2="133.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="143.26" x2="143.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="153.26" x2="153.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="163.26" x2="163.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="173.26" x2="173.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-113.26" y1="63.26" x2="3.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="73.26" x2="13.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="83.26" x2="23.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="93.26" x2="33.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="103.26" x2="43.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="113.26" x2="53.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="63.26" x2="63.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="73.26" x2="73.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="83.26" x2="83.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="93.26" x2="93.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="103.26" x2="103.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="113.26" x2="113.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="63.26" x2="123.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="73.26" x2="133.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="83.26" x2="143.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="93.26" x2="153.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="103.26" x2="163.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="113.26" x2="173.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-113.26" y1="3.26" x2="3.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="13.26" x2="13.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="23.26" x2="23.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="33.26" x2="33.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="43.26" x2="43.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="53.26" x2="53.26" y2="-63.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="3.26" x2="63.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="13.26" x2="73.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="23.26" x2="83.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="33.26" x2="93.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="43.26" x2="103.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="53.26" x2="113.26" y2="-63.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="3.26" x2="123.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="13.26" x2="133.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="23.26" x2="143.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="33.26" x2="153.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="43.26" x2="163.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="53.26" x2="173.26" y2="-63.26" class="stroke-pattern"></line>
          </pattern>
        </defs>
        <g _ngcontent-qir-c274="">
          <path _ngcontent-qir-c274="" class="room-border ng-star-inserted" d="M186.21,130.05H216.37V160H186.21Z"></path>
          <!---->
        </g>
        <g _ngcontent-qir-c274="">
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z"></path>
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z"></path>
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M216.37,49.82H358.8V92.5H216.37Z"></path>
          <!---->
        </g>
        
        
        <g _ngcontent-qir-c274="" id="demoroom04" class="ng-star-inserted">
          <path _ngcontent-qir-c274="" class="room-bg" d="M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="320" y="273">
            Room 11
          </text>
        </g>
        <g _ngcontent-qir-c274="" class="ng-star-inserted" id="demoroom05">
          <path _ngcontent-qir-c274="" class="room-bg" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="468" y="134">
            Room 12
          </text>
        </g>
        <!---->
      <g _ngcontent-qir-c274="" id="demoroom06" class="ng-star-inserted">
          <path _ngcontent-qir-c274="" class="room-bg" d="M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="142" y="240.8">
            Room 13
          </text>
        </svg>`,
        `<svg class="wrapper" _ngcontent-qir-c274="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="-20 -20 618.88 407.99">
        <defs _ngcontent-qir-c274="">
          <filter _ngcontent-qir-c274="" id="f2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur _ngcontent-qir-c274="" result="blurOut" in="StrokePaint" stdDeviation="3"></feGaussianBlur>
          </filter>
          <pattern _ngcontent-qir-c274="" id="New_Pattern_Swatch_1" data-name="New Pattern Swatch 1" width="60" height="60" patternUnits="userSpaceOnUse" viewBox="0 0 60 60">
            <line _ngcontent-qir-c274="" x1="-113.26" y1="123.26" x2="3.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="133.26" x2="13.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="143.26" x2="23.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="153.26" x2="33.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="163.26" x2="43.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="173.26" x2="53.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="123.26" x2="63.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="133.26" x2="73.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="143.26" x2="83.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="153.26" x2="93.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="163.26" x2="103.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="173.26" x2="113.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="123.26" x2="123.26" y2="6.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="133.26" x2="133.26" y2="16.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="143.26" x2="143.26" y2="26.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="153.26" x2="153.26" y2="36.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="163.26" x2="163.26" y2="46.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="173.26" x2="173.26" y2="56.74" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-113.26" y1="63.26" x2="3.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="73.26" x2="13.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="83.26" x2="23.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="93.26" x2="33.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="103.26" x2="43.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="113.26" x2="53.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="63.26" x2="63.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="73.26" x2="73.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="83.26" x2="83.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="93.26" x2="93.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="103.26" x2="103.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="113.26" x2="113.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="63.26" x2="123.26" y2="-53.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="73.26" x2="133.26" y2="-43.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="83.26" x2="143.26" y2="-33.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="93.26" x2="153.26" y2="-23.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="103.26" x2="163.26" y2="-13.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="113.26" x2="173.26" y2="-3.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-113.26" y1="3.26" x2="3.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-103.26" y1="13.26" x2="13.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-93.26" y1="23.26" x2="23.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-83.26" y1="33.26" x2="33.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-73.26" y1="43.26" x2="43.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-63.26" y1="53.26" x2="53.26" y2="-63.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-53.26" y1="3.26" x2="63.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-43.26" y1="13.26" x2="73.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-33.26" y1="23.26" x2="83.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-23.26" y1="33.26" x2="93.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-13.26" y1="43.26" x2="103.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="-3.26" y1="53.26" x2="113.26" y2="-63.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="6.74" y1="3.26" x2="123.26" y2="-113.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="16.74" y1="13.26" x2="133.26" y2="-103.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="26.74" y1="23.26" x2="143.26" y2="-93.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="36.74" y1="33.26" x2="153.26" y2="-83.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="46.74" y1="43.26" x2="163.26" y2="-73.26" class="stroke-pattern"></line>
            <line _ngcontent-qir-c274="" x1="56.74" y1="53.26" x2="173.26" y2="-63.26" class="stroke-pattern"></line>
          </pattern>
        </defs>
        <g _ngcontent-qir-c274="">
          <path _ngcontent-qir-c274="" class="room-border ng-star-inserted" d="M186.21,130.05H216.37V160H186.21Z"></path>
          <!---->
        </g>
        <g _ngcontent-qir-c274="">
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z"></path>
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z"></path>
          <path _ngcontent-qir-c274="" class="stroked-element ng-star-inserted" fill="url(/StartUo/#New_Pattern_Swatch_1)" d="M216.37,49.82H358.8V92.5H216.37Z"></path>
          <!---->
        </g>
        
        
        <g _ngcontent-qir-c274="" id="demoroom07" class="ng-star-inserted">
          <path _ngcontent-qir-c274="" class="room-bg" d="M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,6.09,0,0,1,-6.09,6.09H272.71V356"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="320" y="273">
            Room 31
          </text>
        </g>
        <g _ngcontent-qir-c274="" class="ng-star-inserted" id="demoroom08">
          <path _ngcontent-qir-c274="" class="room-bg" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09,6.09,0,0,1-6.09,6.09h-212"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="468" y="134">
            Room 32
          </text>
        </g>
        <!---->
      <g _ngcontent-qir-c274="" id="demoroom09" class="ng-star-inserted">
          <path _ngcontent-qir-c274="" class="room-bg" d="M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z"></path>
          <path _ngcontent-qir-c274="" class="room-border" d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"></path>
          <path _ngcontent-qir-c274="" class="room-border room-border-glow" d="M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,130H186.21V160H218.5"></path>
          <text _ngcontent-qir-c274="" text-anchor="middle" class="room-text" x="142" y="240.8">
            Room 33
          </text>
        </svg>`
                            ],
                            rooms: [
                                {
                                    name: "Room 1",
                                    id: "demoroom01",
                                    booked: false,
                                    storyOffset: 0
                                },
                                {
                                    name: "Room 2",
                                    id: "demoroom02",
                                    booked: false,
                                    storyOffset: 0
                                },
                                {
                                    name: "Room 3",
                                    id: "demoroom03",
                                    booked: true,
                                    storyOffset: 0
                                },
                                {
                                    name: "Room 11",
                                    id: "demoroom04",
                                    booked: false,
                                    storyOffset: 1
                                },
                                {
                                    name: "Room 12",
                                    id: "demoroom05",
                                    booked: true,
                                    storyOffset: 1
                                },
                                {
                                    name: "Room 13",
                                    id: "demoroom06",
                                    booked: true,
                                    storyOffset: 1
                                },
                                {
                                    name: "Room 21",
                                    id: "demoroom07",
                                    booked: true,
                                    storyOffset: 2
                                },
                                {
                                    name: "Room 22",
                                    id: "demoroom08",
                                    booked: true,
                                    storyOffset: 2
                                }
                            ]
                        }
                    })
                }
            } else if (req.params["locId"] == "demooffice1") {

            } else {
                res.status(404)
                res.send({
                    success: false,
                    error: "Not found"
                })
            }
        } else {
            res.status(403)
            res.send({
                success: false,
                error: "Unauthorized"
            })
        }
    }
} 