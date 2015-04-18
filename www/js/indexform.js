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
        this.bindEvents();
        jQuery(document).on("pagecreate", jQuery.proxy(this.headerAndFooter, this));
        jQuery(document).on("submit", "#purchase", jQuery.proxy(this.purchase, this));
    },
   headerAndFooter: function (event) {
        var sId = event.target.id;
        jQuery("#" + sId).append('<footer><p>&copy;&nbsp;Copyright ' + new Date().getFullYear() + '&nbsp;Rich Hildred.</p></footer>');
    },
    purchase: function(){
        jQuery.mobile.changePage("#two", {
            transition: 'none',
            changeHash: true
        });
        jQuery("#confirmamount").html(jQuery("#amount").val());
        return false;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', jQuery.proxy(this.onDeviceReady, this), false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        try{
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }catch(exception){
            console.log(exception);
        }
    }
}.initialize();
