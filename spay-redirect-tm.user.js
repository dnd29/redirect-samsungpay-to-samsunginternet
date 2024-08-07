// ==UserScript==
// @name         Samsung wallet redirection
// @namespace    http://tampermonkey.net/
// @version      2024-08-08
// @description  redirect samsung pay request to samsung internet
// @author       dnd29
// @match        https://*.mpay.samsung.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        window.close
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    if (!window.location.href.startsWith("https://kr.mpay.samsung.com/onlinepay/pc_mpi/payRequestSms.do")) {
        location.replace('samsunginternet://open?url='+window.location.href);
        setTimeout(()=> {
            window.close();
        },5000);
    }
})();