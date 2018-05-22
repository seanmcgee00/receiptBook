"use strict";

(function () {


    function TransactionService ($http,dal) {



         this.getImage=function(id) {
                var output= dal.http.GET("http://localhost:5000/getimage?id="+id);
                return output;

            }

            this.deleteReceipt=function(id){
              var imageOnshow=true;
              console.log('inside the delete function');
              $http({
                method: "get",
                url: "http://localhost:5000/deleteimage?id="+id,
                headers: {
                "Accept": "application/json, text/plain, ",
                "Content-Type": "text/plain"
                },
                data:""
                }).then(function (result){
            console.log(result);
            console.log(result.data);
              if(result.data=="successful delete"){
              document.getElementById('imageresult').innerHTML = "Receipt Removed";

              }
              });

            }


              this.getReceiptItems= function (id) {
                      var output= dal.http.GET("http://localhost:5000/getitems?id="+id);

                  return output;
              };




    }

    angular.module("receiptBookApp").service("transactionService", ["$http","dal",TransactionService]);

}());
