/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery"],function(b,f){b.Yf=function(a,b,c){c=c||{};this.i=b;this.hB=a;this.bt=c.fetchSize;this.bt=0<this.bt?this.bt:25;this.Mt=c.maxCount;this.Mt=0<this.Mt?this.Mt:500;this.UC=0;this.N0=c.success;this.vca=c.error;this.Iq();f(this.hB).on("scroll.domscroller",function(a){var b=f(a.target).scrollTop();a=f(a.target)[0].scrollHeight-f(a.target)[0].clientHeight;0<a&&this.XJ(b,a)}.bind(this))};b.Yf.prototype.destroy=function(){this.Hk();f(this.hB).off("scroll.domscroller")};b.b.g("DomScroller.prototype.destroy",
{destroy:b.Yf.prototype.destroy});b.Yf.prototype.checkViewport=function(){return 0<this.hB[0].clientHeight&&!this.naa()?this.sV():Promise.resolve(null)};b.b.g("DomScroller.prototype.checkViewport",{checkViewport:b.Yf.prototype.checkViewport});b.Yf.prototype.XJ=function(a,b){if(1>=b-a){var c=this;this.sV().then(function(a){null!=c.N0&&c.N0(a)},this.vca)}};b.Yf.prototype.naa=function(){var a=this.hB;return a[0].scrollHeight>a[0].clientHeight+1?!0:!1};b.Yf.prototype.sV=function(){if(this.kB)return this.kB;
var a=this.Mt-this.UC;if(0<a){var b=this.bt,c=this;a<this.bt&&(b=a);var e=this.Fca({pageSize:b});return this.kB=new Promise(function(b){e.then(function(d){c.kB=null;null!=d&&(c.UC=d.data.length+d.startIndex,a<c.bt&&(d.maxCount=c.Mt,d.maxCountLimit=!0));b(d)})})}return Promise.resolve({maxCount:this.Mt,maxCountLimit:!0})};b.Yf.prototype.Fca=function(a){a=a||{};var b=a.pageSize;this.Eh=this.Eh?this.Eh+b:b;if(-1==this.i.totalSize()||this.i.totalSize()>this.Eh){var c=this;return new Promise(function(a,
f){c.i.fetch({startIndex:c.Eh,pageSize:b}).then(function(b){a(b)},function(){f(null)})})}return Promise.resolve()};b.Yf.prototype.Tn=function(){this.Eh=null;this.UC=0};b.Yf.prototype.Xea=function(a){this.Eh=a.startIndex;this.UC=a.data.length+this.Eh};b.Yf.prototype.Iq=function(){var a=this.i;if(null!=a){this.Hk();this.Ua=[];this.Ua.push({eventType:b.T.D.SORT,eventHandler:this.Tn.bind(this)});this.Ua.push({eventType:b.T.D.REFRESH,eventHandler:this.Tn.bind(this)});this.Ua.push({eventType:b.T.D.RESET,
eventHandler:this.Tn.bind(this)});this.Ua.push({eventType:b.T.D.SYNC,eventHandler:this.Xea.bind(this)});var d,c;for(d=0;d<this.Ua.length;d++)(c=a.on(this.Ua[d].eventType,this.Ua[d].eventHandler))&&(this.Ua[d].eventHandler=c)}};b.Yf.prototype.Hk=function(){var a=this.i;if(null!=this.Ua&&null!=a){var b;for(b=0;b<this.Ua.length;b++)a.off(this.Ua[b].eventType,this.Ua[b].eventHandler)}}});