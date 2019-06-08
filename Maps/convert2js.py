#!/usr/bin/python2

import os
import sys
print sys.argv

item = 0;
print "var mapdata = new Array();"
for i in range(2, len(sys.argv)):
	output=""	
	f = open(sys.argv[i])
	lines = f.readlines();
	f.close();

	for line in lines:
		output = output + line.replace("\r", "").replace("\n","").strip().replace("\\","\\\\") + "\\n"

	output = "mapdata["+str(item)+"] = \"" + output + "\";"
	print output
	item+=1
	
