(function(){

"use strict";

angular.module("checkOffShoppingList",[])

.controller("toBuyController",toBuyController)
.controller("alreadyBoughtController",alreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService)

toBuyController.$inject = ['ShoppingListCheckOffService'];
function toBuyController(ShoppingListCheckOffService){
    var list1 = this;


    list1.buyItemList = ShoppingListCheckOffService.getBuyItemList();


    
    
    list1.removeItem = function(itemIndex){
    	ShoppingListCheckOffService.removeItem(itemIndex);
    	
    }


}

alreadyBoughtController.$inject = ['ShoppingListCheckOffService']

function alreadyBoughtController(ShoppingListCheckOffService){
	var list2 = this;

	list2.boughtItemList = ShoppingListCheckOffService.getBoughtItemList()

}



function ShoppingListCheckOffService(){
	var service = this;

	var buyItemList = [{name:"cookie", quantity:5}, {name:"apple", quantity:3}, {name:"orange", quantity:3},
				{name:"guava", quantity:3},{name:"chocolate", quantity:3}]

	var boughtItemList = [];

	var buyListStatus = false;

	service.removeItem = function(itemIndex){
		var toberemoved = buyItemList[itemIndex]
		console.log("toberemoved: ",toberemoved)
		boughtItemList.push(toberemoved)
		console.log("boughtItemList",boughtItemList)
		buyItemList.splice(itemIndex,1)
		
		service.getBuyItemListStatus = function(){
		if(buyItemList.length==0){
			buyListStatus = true;
		}
		console.log("buyListStatus",buyListStatus)
		return buyListStatus; 
		}
		
	}

	

	service.getBuyItemList = function(){
		console.log(buyItemList)
		return buyItemList;
	}

	service.getBoughtItemList = function(){
		console.log("boughtItemList: ",boughtItemList)
		return boughtItemList;
	}


}



})()
