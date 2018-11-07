# JSExtendsMimic
This pattern is a mimic of Java 'Extends' keyword.

This extends extension method is an attempt to mimics the Java 'extends' keyword by creating and assigning unique root object each time inherit method is been called. Subsequent to the prototype assignment and child object creation 'inherit' method will be restored on the child prototype for the subsequent object creation.

 <b>USAGE:</b><br>
 Step 1. [DerivedClass].extends([BaseClass]).	<br>
 Step 2. Copy the below code to begining of the [DerivedClass],<BR>
``` JavaScript
	
//Check if inheritance needed 
	if(this.inherit){
	  var newInst = this.inherit.call(this.inherit);
	  return newInst;
	}	
	
	
 

