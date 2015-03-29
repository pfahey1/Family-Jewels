var fj = angular.module('myApp.fj', []);

fj.controller('fjCtrl', function($scope,$window){
    
    $scope.isBuy = false;
    $scope.isSell = false;
    $scope.isAction = true;
    
    $scope.currentDay = 1;
    $scope.playerCash = 80;
    
    $scope.inventoryGarnet = 0;
    $scope.inventorySapphire = 0;
    $scope.inventoryEmerald = 0;
    $scope.inventoryRuby = 0;
    $scope.inventoryDiamond = 0;
    
    $scope.priceGarnet = 10;
    $scope.priceSapphire = 25;
    $scope.priceEmerald = 50;
    $scope.priceRuby = 80;
    $scope.priceDiamond = 100;
    
    $scope.items = [
                    {ID: 'garnet', Title: 'Garnet'},
                    {ID: 'sapphire', Title: 'Sapphire'},
                    {ID: 'emerald', Title: 'Emerald'},
                    {ID: 'ruby', Title: 'Ruby'},
                    {ID: 'diamond', Title: 'Diamond'}
                 ];
    
    $scope.jewel = $scope.items[0];
    
    $scope.submit = function(){
        if(!$scope.myForm.$error.required){
          count++;
          $scope.data.subTotal = $scope.data.price * (1 +$scope.data.tax / 100);
          $scope.data.tipCalc = $scope.data.subTotal * ($scope.data.tip / 100);
          $scope.data.totalCalc = $scope.data.subTotal + $scope.data.tipCalc;

          $scope.data.tipTotal += $scope.data.tipCalc;
          $scope.data.mealCount = count;
          $scope.data.avgTip = $scope.data.tipTotal / $scope.data.mealCount;
        }
      }
    
    $scope.buyOption = function(){

    	$scope.isBuy = true;
    	$scope.isAction = false
    	$scope.isSell = false;
      	console.log("buy option selected");
      }
    
    $scope.buyJewel = function(){
    	
	  if(!$scope.myForm.$error.required){
		  
		  switch($scope.data.jewel){
		  
		  case "garnet":
			  if($scope.playerCash < $scope.data.quantity *  $scope.priceGarnet)
		  		{
	  			$window.alert("Not enough Cash!");
	  			return false;
		  		}
		  	else{
				$scope.playerCash -= $scope.data.quantity *  $scope.priceGarnet;
				 $scope.inventoryGarnet += $scope.data.quantity;
				break;
		  	}
		  case "sapphire":
			  if($scope.playerCash < $scope.data.quantity *  $scope.priceSapphire)
		  		{
	  			$window.alert("Not enough Cash!");
	  			return false;
		  		}
		  	else{
				$scope.playerCash -= $scope.data.quantity *  $scope.priceSapphire;
				$scope.inventorySapphire += $scope.data.quantity;
				break;
		  	}
		  case "emerald":
			  if($scope.playerCash < $scope.data.quantity *  $scope.priceEmerald)
		  		{
	  			$window.alert("Not enough Cash!");
	  			return false;
		  		}
		  	else{
				$scope.playerCash -= $scope.data.quantity *  $scope.priceEmerald;
				$scope.inventoryEmerald += $scope.data.quantity;
				break;
		  	}
		  case "ruby":
			  if($scope.playerCash < $scope.data.quantity *  $scope.priceRuby)
		  		{
	  			$window.alert("Not enough Cash!");
	  			return false;
		  		}
		  	else{
				$scope.playerCash -= $scope.data.quantity *  $scope.priceRuby;
				$scope.inventoryRuby += $scope.data.quantity;
				break;
		  	}
		  case "diamond":
			  if($scope.playerCash < $scope.data.quantity *  $scope.priceDiamond)
		  		{
	  			$window.alert("Not enough Cash!");
	  			return false;
		  		}
		  	else{
				$scope.playerCash -= $scope.data.quantity *  $scope.priceDiamond;
				$scope.inventoryDiamond += $scope.data.quantity;
				break;
		  	}
		 default:
			 $window.alert("Select an Option!");
		 	 return false;
		 	 break;
		  }
    	$scope.isAction = true;
    	$scope.isBuy = false;
    	$scope.isSell = false;
    	$scope.data.jewel = "";
    	$scope.data.quantity ="";
      	console.log("buy jewel clicked");
	  }
   }
    
    $scope.sellJewel = function(){
    	
    	if(!$scope.myForm.$error.required){
  		  
  		  switch($scope.data.jewel){
  		  
  		  case "garnet":
  			  
  			  	if($scope.data.quantity > $scope.inventoryGarnet)
  			  		{
		  			$window.alert("Insufficient Garnets in Stash!");
		  			return false;
  			  		}
  			  	else{
	  			  	 $scope.playerCash += $scope.data.quantity *  $scope.priceGarnet;
	  				 $scope.inventoryGarnet -= $scope.data.quantity;
	  				 break;
  			  	}		
  		  case "sapphire":
  			  
	  			if($scope.data.quantity > $scope.inventorySapphire)
			  		{
		  			$window.alert("Insufficient Sapphires in Stash!");
		  			return false;
			  		}
	  			else{
	  				$scope.playerCash += $scope.data.quantity *  $scope.priceSapphire;
	  				$scope.inventorySapphire -= $scope.data.quantity;
	  				break;
	  			}
  		  case "emerald":
  			  
	  			if($scope.data.quantity > $scope.inventoryEmerald)
		  		{
		  			$window.alert("Insufficient Emeralds in Stash!");
		  			return false;
		  		}
				else{
	  				$scope.playerCash += $scope.data.quantity *  $scope.priceEmerald;
	  				$scope.inventoryEmerald -= $scope.data.quantity;
	  				break;
				}
  		  case "ruby":
  			  
	  			if($scope.data.quantity > $scope.inventoryRuby)
		  		{
		  			$window.alert("Insufficient Rubies in Stash!");
		  			return false;
		  		}
				else{
	  				$scope.playerCash += $scope.data.quantity *  $scope.priceRuby;
	  				$scope.inventoryRuby -= $scope.data.quantity;
	  				break;
				}
  		  case "diamond":
  			  
	  			if($scope.data.quantity > $scope.inventoryDiamond)
		  		{
		  			$window.alert("Insufficient Diamonds in Stash!");
		  			return false;
		  		}
				else{
	  				$scope.playerCash += $scope.data.quantity *  $scope.priceDiamond;
	  				$scope.inventoryDiamond -= $scope.data.quantity;
	  				break;
				}
  		 default:
			 $window.alert("Select an Option!");
		 	 return false;
		 	 break;
  		  }
  		  
  		  
  		  if($scope.playerCash >= 2000)
  			  {
  			  	$window.alert("You Won!!");
  			  }
       
      	$scope.isAction = true;
      	$scope.isBuy = false;
      	$scope.isSell = false;
      	$scope.data.jewel = "";
      	$scope.data.quantity ="";
        console.log("buy jewel clicked");
  	  	}
      }
    
    $scope.sellOption = function(){

    	$scope.isSell = true;
    	$scope.isAction = false
    	$scope.isBuy = false;
      	console.log("sell option selected");
      }
    
    $scope.newDay = function(){
    	
    	$scope.currentDay += 1;
    	
    	$scope.priceGarnet = Math.floor((Math.random() * 15) + 5);
        $scope.priceSapphire = Math.floor((Math.random() * 37.5) + 12.5);
        $scope.priceEmerald = Math.floor((Math.random() * 75) + 25);
        $scope.priceRuby = Math.floor((Math.random() * 120) + 40);
        $scope.priceDiamond = Math.floor((Math.random() * 150) + 50);
        

      	console.log("New Day option selected");
      }


    $scope.resetGame = function(){
     	
    	$scope.currentDay = 1;
        $scope.playerCash = 80;
        
        $scope.inventoryGarnet = 0;
        $scope.inventorySapphire = 0;
        $scope.inventoryEmerald = 0;
        $scope.inventoryRuby = 0;
        $scope.inventoryDiamond = 0;
        
        $scope.priceGarnet = 10;
        $scope.priceSapphire = 25;
        $scope.priceEmerald = 50;
        $scope.priceRuby = 80;
        $scope.priceDiamond = 100;
        
    	
    	$scope.isAction = true;
    	$scope.isBuy = false;
    	$scope.isSell = false;
    	console.log("reset option selected");
    }
    
    $scope.cancelAction = function(){
    	
    	$scope.isAction = true;
    	$scope.isBuy = false;
    	$scope.isSell = false;
    	console.log("Cancel Action selected");
    	
    }

  });

fj.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/view1', {
	    templateUrl: 'view1/view1.html',
	    controller: 'fjCtrl'
	  });
	}]);
