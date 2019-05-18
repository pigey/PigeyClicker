/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

    },



    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};
document.getElementById("b1").addEventListener("click",b1);
//document.getElementById("b1").addEventListener("click", b2);
document.getElementById("pc").addEventListener("click",pigeyClick);
document.getElementById("mpc").addEventListener("click",massPigeyClick);
document.getElementById("spc").addEventListener("click",superPigeyClick);
document.getElementById("gpc").addEventListener("click",giggaPigeyClick);
document.getElementById("tpc").addEventListener("click",terraPigeyClick);
document.addEventListener("deviceready", update, false);






var dps = 0;
var pigeycount = 0;
var clicknumber = 1;
           function b1(){
           pigeycount= pigeycount + clicknumber;
           document.getElementById("text").value = pigeycount.toFixed(0) + " piggies";


           }

           function gold(){
            clicknumber = 10;


            document.getElementById("pic").src = "pigeyClickerGold.png";
            clearInterval(startGold)
            setTimeout (normal, 10000);
           }
           function normal(){
           clicknumber = 1;
           document.getElementById("pic").src = "pigeyClicker.png";
            clearInterval(bckNor);
            setTimeout(gold, 100000);
           }
var startGold = setInterval(gold,10000);
var bckNor = setInterval (normal,20000);


function update(){
pigeycount += dps;
refresh();
document.getElementById("text").value = pigeycount.toFixed(0) + " piggies";
document.getElementById("text2").value = "Auto PPS is "+ (dps*10).toFixed(0) +"/s";

}

setInterval(update,100);
function refresh(){
            document.getElementById("pcInfo1").innerHTML = "PigClicker <br> Price " + pcAmount + " Piggies <br> Gives 1 piggi per second";
            document.getElementById("pcInfo").value = "You currently have " + totalPc;


            document.getElementById("mpcInfo1").innerHTML = "MassPigClicker <br> Price " + mpcAmount + " Piggies <br> Gives 2 piggies per second";
            document.getElementById("mpcInfo").value = "You currently have " + totalMpc;

            document.getElementById("spcInfo1").innerHTML = "SuperPigClicker<br> Price " + spcAmount + " Piggies <br> Gives 5 piggies per second";
            document.getElementById("spcInfo").value = "You currently have " + totalSpc;

            document.getElementById("gpcInfo1").innerHTML = "GiggaPigClicker <br> Price " + gpcAmount + " Piggies <br> Gives 10 piggies per second";
            document.getElementById("gpcInfo").value = "You currently have " + totalGpc;

            document.getElementById("tpcInfo1").innerHTML = "TerraPigClicker <br> Price " + tpcAmount + " Piggies <br> Gives 30 piggies per second";
            document.getElementById("tpcInfo").value = "You currently have " + totalTpc;


}


var totalPc = 0;
var pcAmount1 = 100;
var pcAmount = 100;
        function pigeyClick(){

         if(pigeycount >= pcAmount1){
            pigeycount = pigeycount - pcAmount1;
            totalPc +=1;
            dps += 0.1;
            pcAmount1 = 100 * 1.15**totalPc;
            pcAmount = pcAmount1.toFixed(0);
         }
        }

var totalMpc = 0;
var mpcAmount1 = 600;
var mpcAmount = 600;
    function massPigeyClick(){

             if(pigeycount >= mpcAmount1){
                pigeycount = pigeycount - mpcAmount1;
                totalMpc +=1;
                dps += 0.2;
                mpcAmount1 = 600 * 1.2**totalMpc;
                mpcAmount = mpcAmount1.toFixed(0);
             }
    }

var totalSpc = 0;
var spcAmount1 = 4000;
var spcAmount = 4000;
    function superPigeyClick(){

             if(pigeycount >= spcAmount1){
                pigeycount = pigeycount - spcAmount1;
                totalSpc +=1;
                dps += 0.5;
                spcAmount1 = 4000 * 1.2**totalSpc;
                spcAmount = spcAmount1.toFixed(0);
             }
    }

    var totalGpc = 0;
    var gpcAmount1 = 18000;
    var gpcAmount = 18000;
        function giggaPigeyClick(){

                 if(pigeycount >= gpcAmount1){
                    pigeycount = pigeycount - gpcAmount1;
                    totalGpc +=1;
                    dps += 1;
                    gpcAmount1 = 18000 * 1.2**totalGpc;
                    gpcAmount = gpcAmount1.toFixed(0);
                 }
        }

        var totalTpc = 0;
        var tpcAmount1 = 100000;
        var tpcAmount = 100000;
            function terraPigeyClick(){

                     if(pigeycount >= tpcAmount1){
                        pigeycount = pigeycount - tpcAmount1;
                        totalTpc +=1;
                        dps += 3;
                        tpcAmount1 = 100000 * 1.2**totalTpc;
                        tpcAmount = tpcAmount1.toFixed(0);
                     }
            }




app.initialize();