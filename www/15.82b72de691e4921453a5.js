(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9iw0":function(n,i,o){"use strict";o.r(i),o.d(i,"ClientsPageModule",function(){return f});var t=o("ofXK"),e=o("3Pt+"),b=o("TEn/"),c=o("tyNb"),a=o("mrSG"),r=o("fXoL"),l=o("I/3d"),s=o("UbJi");function u(n,i){if(1&n){const n=r.Sb();r.Rb(0,"ion-col",18),r.Rb(1,"ion-card",16),r.Zb("click",function(){r.hc(n);const o=i.$implicit;return r.bc().editCabin(o.id)}),r.Rb(2,"ion-card-header"),r.Nb(3,"ion-icon",19),r.Rb(4,"ion-card-title",20),r.mc(5),r.Qb(),r.Qb(),r.Rb(6,"ion-card-content",21),r.mc(7," Correo:"),r.Nb(8,"br"),r.mc(9),r.Qb(),r.Qb(),r.Qb()}if(2&n){const n=i.$implicit;r.Cb(5),r.oc(" ",n.name,""),r.Cb(4),r.oc(" ",n.email," ")}}const m=[{path:"",component:(()=>{class n{constructor(n,i,o){this.ngFirestore=n,this.angularFireAuth=i,this.router=o}ngOnInit(){this.ngFirestore.collection("clients").snapshotChanges().subscribe(n=>this.clients=n.map(n=>Object.assign({id:n.payload.doc.id},n.payload.doc.data())))}createCabin(){this.router.navigate(["clients/client-form"])}editCabin(n){this.router.navigate([`clients/client-form/${n}`])}logout(){return Object(a.b)(this,void 0,void 0,function*(){yield this.angularFireAuth.signOut(),this.router.navigate(["login"])})}}return n.\u0275fac=function(i){return new(i||n)(r.Mb(l.a),r.Mb(s.a),r.Mb(c.g))},n.\u0275cmp=r.Gb({type:n,selectors:[["app-clients"]],decls:36,vars:1,consts:[[1,"custom-background"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","add"],["size","6",4,"ngFor","ngForOf"],["slot","bottom"],["href","home-admin"],["name","home-outline"],["href","cabins"],["name","cabin"],["href","bookings"],["name","ticket-outline"],["href","clients"],["name","people-outline"],["href","disccounts"],["name","disccount"],[3,"click"],["name","log-out-outline"],["size","6"],["name","person-outline"],[1,"flex-center"],[1,"flex","ion-align-items-center","ion-justify-content-center"]],template:function(n,i){1&n&&(r.Rb(0,"ion-header"),r.Rb(1,"ion-toolbar",0),r.Rb(2,"ion-title"),r.mc(3,"Clientes"),r.Qb(),r.Qb(),r.Qb(),r.Rb(4,"ion-content"),r.Rb(5,"ion-fab",1),r.Zb("click",function(){return i.createCabin()}),r.Rb(6,"ion-fab-button",2),r.Nb(7,"ion-icon",3),r.Qb(),r.Qb(),r.Rb(8,"ion-grid"),r.Rb(9,"ion-row"),r.lc(10,u,10,2,"ion-col",4),r.Qb(),r.Qb(),r.Qb(),r.Rb(11,"ion-tab-bar",5),r.Rb(12,"ion-tab-button",6),r.Rb(13,"ion-label"),r.mc(14,"Inicio"),r.Qb(),r.Nb(15,"ion-icon",7),r.Qb(),r.Rb(16,"ion-tab-button",8),r.Rb(17,"ion-label"),r.mc(18,"Caba\xf1as"),r.Qb(),r.Nb(19,"ion-icon",9),r.Qb(),r.Rb(20,"ion-tab-button",10),r.Rb(21,"ion-label"),r.mc(22,"Reservas"),r.Qb(),r.Nb(23,"ion-icon",11),r.Qb(),r.Rb(24,"ion-tab-button",12),r.Rb(25,"ion-label"),r.mc(26,"Clientes"),r.Qb(),r.Nb(27,"ion-icon",13),r.Qb(),r.Rb(28,"ion-tab-button",14),r.Rb(29,"ion-label"),r.mc(30,"Promos"),r.Qb(),r.Nb(31,"ion-icon",15),r.Qb(),r.Rb(32,"ion-tab-button",16),r.Zb("click",function(){return i.logout()}),r.Rb(33,"ion-label"),r.mc(34,"Salir"),r.Qb(),r.Nb(35,"ion-icon",17),r.Qb(),r.Qb()),2&n&&(r.Cb(10),r.ec("ngForOf",i.clients))},directives:[b.r,b.I,b.H,b.m,b.o,b.p,b.s,b.q,b.A,t.i,b.D,b.E,b.w,b.l,b.g,b.i,b.k,b.h],styles:[""]}),n})()},{path:"client-form",loadChildren:()=>o.e(14).then(o.bind(null,"P8Cf")).then(n=>n.ClientFormPageModule)}];let d=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=r.Kb({type:n}),n.\u0275inj=r.Jb({imports:[[c.i.forChild(m)],c.i]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=r.Kb({type:n}),n.\u0275inj=r.Jb({imports:[[t.c,e.a,b.J,d]]}),n})()}}]);