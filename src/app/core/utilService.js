(function (angular) {
  'use strict';

  function utilServiceConstructor($ionicLoading, $ionicPopup, $ionicActionSheet,$cordovaSocialSharing,$state) {
    var service = this;

    function actionSheet(item)
    {
var showActionSheet = $ionicActionSheet.show({
         buttons: [
           { text: 'Share' },
           { text: 'Alternate Medicine' },
           { text: 'Similar Medicines' },
           { text: 'Popular Usage' },
           { text: 'Side Effect' },
           {text:"Medicine Interactions"}
         ],
			
        
         titleText: 'Option Menu',
         cancelText: 'Cancel',
			
         cancel: function() {
            // add cancel code...
         },
			
         buttonClicked: function(index) {
           if (index === 0) {
             var body = "Medicine name is " + item.name + " and its manufacture is " + item.manufacturer + " and its price is Rs " + item.price + " of size " + item.size;
             $cordovaSocialSharing
               .share(null, null, null, body) // Share via native share sheet
               .then(function (result) {
                 // Success!
               }, function (err) {
                 // An error occured. Show a message to the user
               });
            }
				
            if(index === 1) {
               $state.go("tab.alternateMedicines",{medicineId:item.medicine_id})
            }
            if(index === 2) {
               $state.go("tab.similarMedicines",{medicineId:item.medicine_id})
            }
            if(index === 3) {
               $state.go("tab.popularUsage",{medicineId:item.medicine_id})
            }
            if(index === 4) {
               $state.go("tab.sideEffect",{medicineId:item.medicine_id})
            }
            if(index === 5) {
               $state.go("tab.medicineInteractions",{medicineId:item.medicine_id})
            }
         }
			
         
      });


    }

    function showLoader(template) {
      $ionicLoading.show({
        template: template
      })
    }

    function hideLoader() {
      $ionicLoading.hide();
    }

    function showAlert(title, template) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: template
      });

      alertPopup.then(function (res) {
        console.log(res);
      });
    }

    function showConfirm(title, template) {
      var confirmPopup = $ionicPopup.confirm({
        title: title,
        template: template
      });

      confirmPopup.then(function (res) {
        if (res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    }

    service.showLoader = showLoader;
    service.hideLoader = hideLoader;
    service.showConfirm = showConfirm;
    service.showAlert = showAlert;
    service.actionSheet=actionSheet;


    return service;
  }


  angular.module('app')
    .service('utilService', utilServiceConstructor);

})(angular);
