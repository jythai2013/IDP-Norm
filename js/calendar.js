

	$(document).ready(function() {

    // page is now ready, initialize the calendar...
		ahk();
		jQuery.noConflict();
    blop();

});
	
	function blop(){
		console.log("A");
		makeCalendar();
		makeQTip();
	}
	
	function makeQTip() {
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		tooltip = $('<div/>').qtip({
			id: 'fullcalendar',
			prerender: true,
			content: {
				text: ' ',
				title: {
					button: true
				}
			},
			position: {
				my: 'bottom center',
				at: 'top center',
				target: 'mouse',
				viewport: $('#fullCalendarDiv'),
				adjust: {
					mouse: false,
					scroll: false
				}
			},
			show: false,
			hide: false,
			style: 'qtip-light'
		}).qtip('api');
	}
	
	function makeCalendar(){
		// alert("B");
		var node = $("#fullCalendarDiv")[0];
		console.log(node);
		$("#fullCalendarDiv").fullCalendar({
			id:"fullcalendar",
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			events: [
				{
						title  : 'Workplace Literacy and Numeracy Fundamentals',
						start  : '2015-11-04T09:00:00',
						end		 : '2015-11-04T12:00:00',
						allDay : false
				},
				{
						title  : 'Workplace Health and Safety',
						start  : '2015-11-04T13:00:00',
						end		 : '2015-11-04T17:00:00',
						allDay : false 
				},
				{
						title  : 'Strategic Business Planning for Training Organizations (SBPTO)',
						start  : '2015-11-04T13:00:00',
						end		 : '2015-11-04T17:00:00',
						allDay : false
				},
				{
						title  : 'Workplace Trainer Programme ',
						start  : '2015-11-05T09:00:00',
						end		 : '2015-11-05T12:00:00',
						allDay : false 
				},						
				{
						title  : 'Managing Operations in Training Organisations',
						start  : '2015-11-05T09:00:00',
						end		 : '2015-11-05T12:00:00',
						allDay : false 
				},
				{
						title  : 'Strategic Business Planning for Training Organizations ',
						start  : '2015-11-06T13:00:00',
						end		 : '2015-11-06T17:00:00',
						allDay : false 
				}

			],
			eventMouseover: function(data, event, view) {
				// console.log(data);
				// console.log(event);
				// console.log(view);
				var content = '<h3>'+data.title+'</h3>' + 
					'<p><b>Start:</b> '+data.start.toLocaleString()+'<br />' + 
					(data.end.toLocaleString() && '<p><b>End:</b> '+data.end.toLocaleString()+'</p>' || '');

				tooltip.set({
					'content.text': content
				})
				.reposition(event).show(event);
				// console.log(tooltip);
			},
			eventMouseout: function() {
				console.log("eventMouseOut");
				tooltip.hide();
			},
			eventClick: function(data, event, view) {
				console.log(data);
				Modal.show('exampleModal')
			},
			dayClick: function() { tooltip.hide(); },
			eventResizeStart: function() { tooltip.hide(); },
			eventDragStart: function() { tooltip.hide(); },
			viewDisplay: function() { tooltip.hide(); },
			});
	}

	
	
	
	
	