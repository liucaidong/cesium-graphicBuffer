define(["exports","./Check-6c0211bc","./Cartesian2-d1adddcb","./Transforms-ea828842","./OrientedBoundingBox-f904645d"],function(n,t,f,x,B){"use strict";var e={},s=new f.Cartesian3,P=new f.Cartesian3,M=new f.Cartesian3,h=new f.Cartesian3,v=new B.OrientedBoundingBox;function o(n,t,e,r,a){var i=f.Cartesian3.subtract(n,t,s),o=f.Cartesian3.dot(e,i),u=f.Cartesian3.dot(r,i);return f.Cartesian2.fromElements(o,u,a)}e.validOutline=function(n){var t=B.OrientedBoundingBox.fromPoints(n,v).halfAxes,e=x.Matrix3.getColumn(t,0,P),r=x.Matrix3.getColumn(t,1,M),a=x.Matrix3.getColumn(t,2,h),i=f.Cartesian3.magnitude(e),o=f.Cartesian3.magnitude(r),u=f.Cartesian3.magnitude(a);return!(0===i&&(0===o||0===u)||0===o&&0===u)},e.computeProjectTo2DArguments=function(n,t,e,r){var a,i,o=B.OrientedBoundingBox.fromPoints(n,v),u=o.halfAxes,s=x.Matrix3.getColumn(u,0,P),C=x.Matrix3.getColumn(u,1,M),c=x.Matrix3.getColumn(u,2,h),d=f.Cartesian3.magnitude(s),m=f.Cartesian3.magnitude(C),g=f.Cartesian3.magnitude(c),l=Math.min(d,m,g);return(0!==d||0!==m&&0!==g)&&(0!==m||0!==g)&&(l!==m&&l!==g||(a=s),l===d?a=C:l===g&&(i=C),l!==d&&l!==m||(i=c),f.Cartesian3.normalize(a,e),f.Cartesian3.normalize(i,r),f.Cartesian3.clone(o.center,t),!0)},e.createProjectPointsTo2DFunction=function(r,a,i){return function(n){for(var t=new Array(n.length),e=0;e<n.length;e++)t[e]=o(n[e],r,a,i);return t}},e.createProjectPointTo2DFunction=function(e,r,a){return function(n,t){return o(n,e,r,a,t)}},n.CoplanarPolygonGeometryLibrary=e});
