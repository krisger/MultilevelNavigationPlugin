"use strict";
$.fn.navigation = function( options ) {     

	var settings = $.extend
	(
		{
			elNavigation: this,
			elListItem: "li",
			elList: "ul",
			activeClassName: "active",	
			animate: true,
			showOnlySelected: true,
			animationDuration: 500
		},
		options
	);  
	
	var animationParams = {
		duration : settings.animationDuration,
		isDone: true,
		done: function(){
			animationParams.isDone = true;
		}
	}
			
	$(settings.elNavigation).find(settings.elListItem).click(function(e){	
		e.stopPropagation();
		
		if(animationParams.isDone === true){
			//It's required to not allow switch other menu item before animation ends
			animationParams.isDone = false;
			
			//Will close other not at this moment selected list
			if(settings.showOnlySelected){
				closeExpandedMenus(this);
			}
			
			let childMenu = $(this).find(">" + settings.elList);	
			//End animation because it's not required, because of no child found
			if(childMenu.length == 0){
				animationParams.isDone = true;
			}
			
			if($(this).hasClass(settings.activeClassName)){
				
				$(this).removeClass(settings.activeClassName);
				if(settings.animate){
					childMenu.slideUp(animationParams);		
				}else{
					animationParams.isDone = true;
				}					
			}else{
				
				$(this).addClass(settings.activeClassName);
				if(settings.animate){
					childMenu.slideDown(animationParams);
				}else{
					animationParams.isDone = true;
				}
			}
		}
	});
	
	function closeExpandedMenus(el){
		
		var selector = $(el);
		if(selector.hasClass(settings.activeClassName)){
			if(settings.animate){
				selector.find(settings.elList).slideUp(animationParams)
			}
		}else{
			var sameLevelItems = $(selector).parent().find(settings.elListItem + "." + settings.activeClassName);
			
			$(sameLevelItems).each(function(){
				var childMenu = $(this).find(">" + settings.elList);
				$(this).removeClass(settings.activeClassName);
				
				if(childMenu){
					if(settings.animate){
						childMenu.slideUp(animationParams);	
					}
				}
				else{
					slideParams.isDone = true;
				}
			});
		}
	}		
};
