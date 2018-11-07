/**
 * Extend the prototype for a base class to a sub class
 * change the 'rootNS' to your corresponding root namespace.
 * @param base The class to extend from
 * @param sub  The class to extend to
 */
rootNS.inherit = function (base, sub) {
  sub.prototype = Object.create(base.prototype);
  sub.prototype.constructor = base;
};


/*This extends extension method is an attempt to mimics the Java 'extends' keyword by creating and assigning unique
 * root object each time inherit method is been called. Subsequent to the prototype assignment and child object creation
 * 'inherit' method will be restored on the child prototype for the subsequent object creation.
 *
 * USAGE: Step 1. <DerivedClass>.extends(<BaseClass>)
 *        Step 2. Copy the below code to begining of the <DerivedClass>,
 *                  //Check if inheritance needed
                    if(this.inherit){
                      var newInst = this.inherit.call(this.inherit);
                      return newInst;
                     }
 *                 */

Function.prototype.extends = function (parent) {
  var child = this;
  child.prototype.inherit = function () {
    var parentProto = parent;
    var childProto = child;
    var parentObj =  new parentProto();
    childProto.prototype = parentObj;
    childProto.prototype.$super = parentObj;
    var newObj;
    if(child.arguments.length >0) newObj = new childProto(child.arguments[0]);
    else  newObj = new childProto();

    /*Restore the inherit function back in type prototype so that subsequent
     creation of unique objects are possible*/
    if(typeof this == "function") childProto.prototype.inherit = this;
    return newObj;
  };
} ;
