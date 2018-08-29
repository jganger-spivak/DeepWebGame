function Host() {
	this.init = function() {
		createTrackerVar("count", 0);
		createTrackerVar("color", '["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]');
	}
	
	this.tick = function() {
		count++
		color.pop();
		
	}
	
}
