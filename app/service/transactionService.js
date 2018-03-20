"use strict";

(function () {


    function TransactionService ($http,dal) {

         this.getImage=function(id) {
           var imageOnshow=false;
           $http({
                   method: "get",
                   url: "http://localhost:5000/getimage?id="+id,
                   headers: {
                     "Accept": "application/json, text/plain, ",
                     "Content-Type": "text/plain"
                   },
                   data:""
                 }).then(function (result){
            //   console.log("successful");
            // 	console.log(result.data);

               if(result.data!="not found")
               {
                 imageOnshow=true;
                 var output = "<img src='data:image/png;base64,"+result.data+"' >";
                 document.getElementById('imageresult').innerHTML = output;
               }

             });
             return imageOnshow;
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
              if(result.data)
              {imageOnshow=false;}
              }
              });
              return imageOnshow;
            }


              this.getReceiptItems= function (id) {
                      var output= dal.http.GET("http://localhost:5000/getitems?id="+id);
                    
                  return output;
              };




    }

    angular.module("receiptBookApp").service("transactionService", ["$http","dal",TransactionService]);

}());
