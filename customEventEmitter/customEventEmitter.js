var eventEmitter = {

		// this lists store all the current active events (name and callback)
                list : {},

                on : function( event, callback ){
                    eventEmitter.list[event] = { event:event, callback: callback };
                },

                trigger : function ( event, args ) {
                    var event = eventEmitter.list[ event ];
                    console.log(event.callback);
                    event.callback(args);
                },

                off : function( event ){
                    delete eventEmitter.list[ event ];
                }

            };


$(document).ready(function(){
	
	// set a custom event 
	eventEmitter.on('CUSTOM:EVENT', function( arg  ){
		alert(arg);
	});

	// trigger custom event
	eventEmitter.trigger('CUSTOM:EVENT', 'event');

});
