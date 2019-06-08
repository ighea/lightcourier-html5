#!/usr/bin/python2

import os
import sys
print sys.argv

variable = "dialog"

item = 0;
print "var "+variable+" = new Array();"
for i in range(1, len(sys.argv)):
	output=""	
	f = open(sys.argv[i])
	lines = f.readlines();
	f.close();

	for line in lines:
		#output = output + line + "\n"
		#output = variable+"["+str(item)+"] = \"" + output + "\";"
		output = variable+"["+str(item)+"] = \"" + line.strip().replace('"',"\"") + "\";"
		print output
		item+=1
	
