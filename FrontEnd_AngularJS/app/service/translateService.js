"use strict";

(function () {


    function TranslateService () {

       this.googleTranslateElementInit=function() {
               new google.translate.TranslateElement({
               pageLanguage: 'auto',
               autoDisplay: true,
               layout: google.translate.TranslateElement.InlineLayout.SIMPLE
               }, 'google_translate_element');
                }
              }

    angular.module("receiptBookApp").service("translateService", ["loginDal",TranslateService]);

}());
