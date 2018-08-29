class Host {
	init() {
		createTrackerVar("count", 0);
		createTrackerVar("color", '["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]');
	}
	
	tick() {
		count++
		color.pop();
		
	}
	
}
