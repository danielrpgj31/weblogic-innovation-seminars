/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.Se=function(f,a,d,c){b.l.em(f,null);b.l.em(a,null);this.hpa=c;this.So=f;this.uE=a;this.Pf=d};o_("JsonNodeSet",b.Se,b);b.Se.prototype.getParent=function(){return this.hpa};b.b.g("JsonNodeSet.prototype.getParent",{getParent:b.Se.prototype.getParent});b.Se.prototype.ta=function(){return this.So};b.b.g("JsonNodeSet.prototype.getStart",{ta:b.Se.prototype.ta});b.Se.prototype.R=function(){return Math.max(0,this.uE-this.So)};b.b.g("JsonNodeSet.prototype.getCount",
{R:b.Se.prototype.R});b.Se.prototype.getData=function(f){b.l.assert(f<=this.uE&&f>=this.So);f-=this.So;return this.Pf[f]?this.Pf[f].attr:null};b.b.g("JsonNodeSet.prototype.getData",{getData:b.Se.prototype.getData});b.Se.prototype.getMetadata=function(f){var a=[];b.l.assert(f<=this.uE&&f>=this.So);f-=this.So;a.key=this.Pf[f].id?this.Pf[f].id:this.Pf[f].attr.id;a.leaf=this.Pf[f].kO;a.depth=this.Pf[f].depth;null==a.leaf&&(a.leaf=this.Pf[f].children&&0<this.Pf[f].children.length?!1:!0);return a};b.b.g("JsonNodeSet.prototype.getMetadata",
{getMetadata:b.Se.prototype.getMetadata});b.Se.prototype.dm=function(b,a){var d;a++;b.depth=a;if(b.children&&0!=b.children.length)for(d=0;d<b.children.length;d++)this.dm(b.children[d],a)};b.Se.prototype.Kf=function(f){var a,d,c;b.l.assert(f<=this.uE&&f>=this.So);f-=this.So;d=this.Pf[f].depth;a=this.Pf[f].children;if(0==a.length)return null;f=this.Pf[f].id?this.Pf[f].id:this.Pf[f].attr.id;for(c=0;c<a.length;c++)this.dm(a[c],d);return new b.Se(0,a.length,a,f)};b.b.g("JsonNodeSet.prototype.getChildNodeSet",
{Kf:b.Se.prototype.Kf});b.qs=function(){this.id=null;this.depth=0;this.parent=null;this.children=[];this.kO=this.attr=this.title=null};b.qs.prototype.A$=function(b){return function(a,d){return a.attr&&d.attr&&a.attr[b]&&d.attr[b]?a.attr[b]<d.attr[b]?-1:a.attr[b]===d.attr[b]?0:1:a[b]<d[b]?-1:a[b]===d[b]?0:1}};b.qs.prototype.Qba=function(b){return function(a,d){return a.attr&&d.attr&&a.attr[b]&&d.attr[b]?a.attr[b]<d.attr[b]?1:a.attr[b]===d.attr[b]?0:-1:a[b]<d[b]?1:a[b]===d[b]?0:-1}};b.qs.prototype.F0=
function(b){var a=b.key;"ascending"===b.direction?this.children.sort(this.A$(a)):"descending"===b.direction&&this.children.sort(this.Qba(a));for(var a=0,d=this.children.length;a<d;a++)this.children[a].F0(b)};b.gc=function(f){var a;a=new b.qs;f.id||(a.id="root");this.data=this.wU({count:0},a,f);b.gc.q.constructor.call(this,a)};o_("JsonTreeDataSource",b.gc,b);b.b.ga(b.gc,b.tp,"oj.JsonTreeDataSource");b.gc.prototype.Init=function(){b.gc.q.Init.call(this)};b.b.g("JsonTreeDataSource.prototype.Init",{Init:b.gc.prototype.Init});
b.gc.prototype.wU=function(f,a,d,c){var e,g,h,k,l,m,n;c||(c=0);for(k in d)if("children"==k||0==c&&d instanceof Array)for(e=0==c&&d instanceof Array?d:d[k],c++,n=0;n<e.length;n++){h=e[n];g=new b.qs;h.id||(f.count++,h.attr?h.attr.id||(h.attr.id="rid_"+f.count):g.id="rid_"+f.count);for(l in h)for(m in g)l==m&&"children"!=l&&(g[m]=h[l]),"depth"==m&&(g[m]=c);a.children.push(g);for(m in h)"children"==m&&this.wU(f,a.children[n],h,c)}return a};b.gc.prototype.af=function(b){b||(b=this.data.id);b=this.mo(this.data,
b);return b.children?b.children.length:0};b.b.g("JsonTreeDataSource.prototype.getChildCount",{af:b.gc.prototype.af});b.gc.prototype.Hf=function(f,a,d){var c,e,g,h,k;g=[];f||(f=this.data.id);h=this.mo(this.data,f);a||(a=[],a.start=0,a.count=h.children.length);a.count||(a.count=h.children.length);a.start||(a.start=0);c=a.start;e=Math.min(h.children.length,c+a.count);for(a=c;a<e;a+=1)k=new b.qs,h.children[a].attr&&(k.attr=h.children[a].attr),h.children[a].id&&(k.id=h.children[a].id),h.children[a].depth&&
(k.depth=h.children[a].depth),h.children[a].title&&(k.title=h.children[a].title),h.children[a].parent&&(k.parent=h.children[a].parent),k.kO=0<h.children[a].children.length?!1:!0,g.push(k);f=new b.Se(c,e,g,f);null!=d&&null!=d.success&&d.success.call(null,f)};b.b.g("JsonTreeDataSource.prototype.fetchChildren",{Hf:b.gc.prototype.Hf});b.gc.prototype.yu=function(f,a){var d,c,e,g;e=[];f||(f=this.data.id);g=this.mo(this.data,f);d=[];d.start=0;d.count=g.children.length;c=d.start;for(d=Math.min(g.children.length,
c+d.count);c<d;c+=1)g.children[c].kO=0<g.children[c].children.length?!1:!0,e.push(g.children[c]);e=new b.Se(0,e.length,e,f);null!=a&&null!=a.success&&a.success.call(null,e)};b.b.g("JsonTreeDataSource.prototype.fetchDescendants",{yu:b.gc.prototype.yu});b.gc.prototype.od=function(){return"valid"};b.b.g("JsonTreeDataSource.prototype.moveOK",{od:b.gc.prototype.od});b.gc.prototype.move=function(f,a,d,c){var e;e=a;if(!e||e==this.data.id){if("inside"!=d){b.r.log("Error: root can not be the reference node if position equals to "+
d);return}e||(e=this.data.id)}f=this.mo(null,f);this.mo(f,e)?b.r.log("Error: the node to move contains the reference node as its sub-tree."):(a=this.mo(null,e),e=this.rJ(e),this.Fja(f),"inside"==d?(this.dm(f,f.depth-(a.depth+1)),a.children.push(f)):"before"==d?(this.dm(f,f.depth-a.depth),d=e.children.indexOf(a),-1<d&&(0!=d?e.children.splice(d-1,0,f):e.children.unshift(f))):"after"==d?(this.dm(f,f.depth-a.depth),d=e.children.indexOf(a),-1<d&&e.children.splice(d,0,f)):"first"==d?(this.dm(f,f.depth-
a.depth),e.children.unshift(f)):"last"==d&&(this.dm(f,f.depth-a.depth),e.children.push(f)),null!=c&&null!=c.success&&c.success.call(null,this.data))};b.b.g("JsonTreeDataSource.prototype.move",{move:b.gc.prototype.move});b.gc.prototype.sort=function(b,a){var d;d=this.mo(this.data,this.data.id);d.F0(b);null!=a&&null!=a.success&&a.success.call(null,d)};b.b.g("JsonTreeDataSource.prototype.sort",{sort:b.gc.prototype.sort});b.gc.prototype.rm=function(){return{key:null,direction:"none"}};b.b.g("JsonTreeDataSource.prototype.getSortCriteria",
{rm:b.gc.prototype.rm});b.gc.prototype.rJ=function(b,a){var d,c=null;if(b==this.data.id)return null;a||(a=this.data);if(a.children&&0<a.children.length){for(d=0;d<a.children.length;d++)if(a.children[d].id&&a.children[d].id==b||a.children[d].attr&&a.children[d].attr.id==b)return a;for(d=0;d<a.children.length&&!(c=this.rJ(b,a.children[d]));d++);}return c};b.gc.prototype.mo=function(b,a){var d,c=null;b||(b=this.data);if(b.id&&b.id==a||b.attr&&b.attr.id==a)return b;if(null!=b.children)for(d=0;d<b.children.length&&
!c;d++)c=b.children[d].id&&b.children[d].id==a||b.children[d].attr&&b.children[d].attr.id==a?b.children[d]:this.mo(b.children[d],a);return c};b.gc.prototype.dm=function(b,a){var d;b.depth-=a;if(b.children&&0!=b.children.length)for(d=0;d<b.children.length;d++)this.dm(b.children[d],a)};b.gc.prototype.Fja=function(b){var a;b.id?a=b.id:b.attr&&(a=b.attr.id);(a=this.rJ(a))||(a=this.data);b=a.children.indexOf(b);-1<b&&a.children.splice(b,1)};b.gc.prototype.getCapability=function(b){return"fetchDescendants"===
b?"enable":"sort"===b?"default":"batchFetch"===b?"disable":"move"===b?"full":null};b.b.g("JsonTreeDataSource.prototype.getCapability",{getCapability:b.gc.prototype.getCapability})});