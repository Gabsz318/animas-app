(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{P8Cf:function(e,t,i){"use strict";i.r(t),i.d(t,"ClientFormPageModule",function(){return C});var n=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),l=i("tyNb");const s=[{fieldName:"name",label:"Nombre",required:!0,type:"text"},{fieldName:"telphone",label:"Tel\xe9fono",required:!0,type:"text"},{fieldName:"address",label:"Direcci\xf3n",required:!0,type:"text"},{fieldName:"email",label:"Correo",required:!0,type:"email"}];var r=i("fXoL"),a=i("I/3d"),b=i("UbJi");function d(e,t){if(1&e){const e=r.Sb();r.Rb(0,"ion-fab",8),r.Zb("click",function(){return r.hc(e),r.bc().delete()}),r.Rb(1,"ion-fab-button",9),r.Nb(2,"ion-icon",10),r.Qb(),r.Qb()}}function u(e,t){if(1&e&&(r.Rb(0,"p"),r.mc(1),r.Qb()),2&e){const e=t.$implicit;r.Cb(1),r.oc(" ",e," ")}}function h(e,t){if(1&e&&(r.Rb(0,"ion-item"),r.Rb(1,"ion-badge",11),r.mc(2," Tienes campos sin completar: "),r.lc(3,u,2,1,"p",7),r.Qb(),r.Qb()),2&e){const e=r.bc();r.Cb(3),r.ec("ngForOf",e.missingFields)}}function m(e,t){if(1&e){const e=r.Sb();r.Rb(0,"ion-item"),r.Rb(1,"ion-label"),r.mc(2),r.Qb(),r.Rb(3,"ion-input",12),r.Zb("ngModelChange",function(i){r.hc(e);const n=t.$implicit;return r.bc().client[n.fieldName]=i}),r.Qb(),r.Qb()}if(2&e){const e=t.$implicit,i=r.bc();r.Cb(2),r.nc(e.label),r.Cb(1),r.ec("disabled","cabin_name"===e.fieldName)("type",e.type)("ngModel",i.client[e.fieldName])}}let f=(()=>{class e{constructor(e,t,i,n){this.ngFirestore=e,this.angularFireAuth=t,this.route=i,this.router=n,this.clientFields=s,this.client={name:"",telphone:"",address:"",email:""}}ngOnInit(){this.angularFireAuth.authState.subscribe(e=>this.isBookingUser=e.email.endsWith("@captura.com")),this.clientId=this.route.snapshot.params.clientId,this.clientId&&this.ngFirestore.collection("clients").doc(this.clientId).valueChanges().subscribe(e=>this.client=e)}save(){this.clientId?this.ngFirestore.collection("clients").doc(this.clientId).update(this.client).then(()=>{this.router.navigate(["clients"])}).catch(e=>console.log(e)):(this.ngFirestore.collection("clients").add(this.client),this.router.navigate(["clients"]))}delete(){this.ngFirestore.doc("clients/"+this.clientId).delete(),this.router.navigate(["clients"])}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(a.a),r.Mb(b.a),r.Mb(l.a),r.Mb(l.g))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-client-form"]],decls:14,vars:5,consts:[[1,"custom-background"],["slot","start"],["vertical","bottom","horizontal","start","slot","fixed",3,"click",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","checkmark-done-outline",1,"white"],[4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","start","slot","fixed",3,"click"],["color","danger"],["name","trash",1,"danger"],["color","danger",2,"width","100%"],[3,"disabled","type","ngModel","ngModelChange"]],template:function(e,t){1&e&&(r.Rb(0,"ion-header"),r.Rb(1,"ion-toolbar",0),r.Rb(2,"ion-buttons",1),r.Nb(3,"ion-back-button"),r.Qb(),r.Rb(4,"ion-title"),r.mc(5),r.Qb(),r.Qb(),r.Qb(),r.Rb(6,"ion-content"),r.lc(7,d,3,0,"ion-fab",2),r.Rb(8,"ion-fab",3),r.Zb("click",function(){return t.save()}),r.Rb(9,"ion-fab-button",4),r.Nb(10,"ion-icon",5),r.Qb(),r.Qb(),r.Rb(11,"ion-list"),r.lc(12,h,4,1,"ion-item",6),r.lc(13,m,4,4,"ion-item",7),r.Qb(),r.Qb()),2&e&&(r.Cb(5),r.pc("",t.clientId?"Editar ":"Crear ","Cliente ",null==t.client?null:t.client.name,""),r.Cb(2),r.ec("ngIf",t.clientId&&!t.isBookingUser),r.Cb(5),r.ec("ngIf",t.missingFields),r.Cb(1),r.ec("ngForOf",t.clientFields))},directives:[c.r,c.I,c.f,c.b,c.c,c.H,c.m,n.j,c.o,c.p,c.s,c.x,n.i,c.v,c.d,c.w,c.u,c.N,o.d,o.e],styles:[""]}),e})();const p=[{path:"",component:f},{path:":clientId",component:f}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({imports:[[l.i.forChild(p)],l.i]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({imports:[[n.c,o.a,c.J,g]]}),e})()}}]);