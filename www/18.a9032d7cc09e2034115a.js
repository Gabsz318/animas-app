(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"9iw0":function(n,i,o){"use strict";o.r(i),o.d(i,"ClientsPageModule",function(){return p});var t=o("ofXK"),e=o("3Pt+"),b=o("TEn/"),c=o("tyNb"),r=o("mrSG"),a=o("LvDl"),s=o("fXoL"),l=o("I/3d"),u=o("UbJi");function m(n,i){if(1&n){const n=s.Sb();s.Rb(0,"ion-col",16),s.Rb(1,"ion-card",14),s.Zb("click",function(){s.hc(n);const o=i.$implicit;return s.bc().editCabin(o.id)}),s.Rb(2,"ion-card-header"),s.Nb(3,"ion-icon",17),s.Rb(4,"ion-card-title",18),s.mc(5),s.Qb(),s.Qb(),s.Rb(6,"ion-card-content",19),s.mc(7," Correo:"),s.Nb(8,"br"),s.mc(9),s.Qb(),s.Qb(),s.Qb()}if(2&n){const n=i.$implicit;s.Cb(5),s.oc(" ",n.name,""),s.Cb(4),s.oc(" ",n.email," ")}}function f(n,i){1&n&&(s.Rb(0,"ion-tab-button",20),s.Rb(1,"ion-label"),s.mc(2,"Caba\xf1as"),s.Qb(),s.Nb(3,"ion-icon",21),s.Qb())}function d(n,i){1&n&&(s.Rb(0,"ion-tab-button",22),s.Rb(1,"ion-label"),s.mc(2,"Promos"),s.Qb(),s.Nb(3,"ion-icon",23),s.Qb())}const h=[{path:"",component:(()=>{class n{constructor(n,i,o){this.ngFirestore=n,this.angularFireAuth=i,this.router=o}ngOnInit(){this.angularFireAuth.authState.subscribe(n=>this.isBookingUser=n.email.endsWith("@captura.com")),this.ngFirestore.collection("clients").snapshotChanges().subscribe(n=>{const i=n.map(n=>Object.assign({id:n.payload.doc.id},n.payload.doc.data()));this.clients=a.orderBy(i,"name","asc")})}createCabin(){this.router.navigate(["clients/client-form"])}editCabin(n){this.router.navigate([`clients/client-form/${n}`])}logout(){return Object(r.b)(this,void 0,void 0,function*(){yield this.angularFireAuth.signOut(),this.router.navigate(["login"])})}}return n.\u0275fac=function(i){return new(i||n)(s.Mb(l.a),s.Mb(u.a),s.Mb(c.g))},n.\u0275cmp=s.Gb({type:n,selectors:[["app-clients"]],decls:30,vars:4,consts:[[1,"custom-background"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","add"],["size","6",4,"ngFor","ngForOf"],["slot","bottom"],[3,"href"],["name","home-outline"],["href","cabins",4,"ngIf"],["href","bookings"],["name","ticket-outline"],["href","clients"],["name","people-outline"],["href","disccounts",4,"ngIf"],[3,"click"],["name","log-out-outline"],["size","6"],["name","person-outline"],[1,"flex-center"],[1,"flex","ion-align-items-center","ion-justify-content-center"],["href","cabins"],["name","cabin"],["href","disccounts"],["name","disccount"]],template:function(n,i){1&n&&(s.Rb(0,"ion-header"),s.Rb(1,"ion-toolbar",0),s.Rb(2,"ion-title"),s.mc(3,"Clientes"),s.Qb(),s.Qb(),s.Qb(),s.Rb(4,"ion-content"),s.Rb(5,"ion-fab",1),s.Zb("click",function(){return i.createCabin()}),s.Rb(6,"ion-fab-button",2),s.Nb(7,"ion-icon",3),s.Qb(),s.Qb(),s.Rb(8,"ion-grid"),s.Rb(9,"ion-row"),s.lc(10,m,10,2,"ion-col",4),s.Qb(),s.Qb(),s.Qb(),s.Rb(11,"ion-tab-bar",5),s.Rb(12,"ion-tab-button",6),s.Rb(13,"ion-label"),s.mc(14,"Inicio"),s.Qb(),s.Nb(15,"ion-icon",7),s.Qb(),s.lc(16,f,4,0,"ion-tab-button",8),s.Rb(17,"ion-tab-button",9),s.Rb(18,"ion-label"),s.mc(19,"Reservas"),s.Qb(),s.Nb(20,"ion-icon",10),s.Qb(),s.Rb(21,"ion-tab-button",11),s.Rb(22,"ion-label"),s.mc(23,"Clientes"),s.Qb(),s.Nb(24,"ion-icon",12),s.Qb(),s.lc(25,d,4,0,"ion-tab-button",13),s.Rb(26,"ion-tab-button",14),s.Zb("click",function(){return i.logout()}),s.Rb(27,"ion-label"),s.mc(28,"Salir"),s.Qb(),s.Nb(29,"ion-icon",15),s.Qb(),s.Qb()),2&n&&(s.Cb(10),s.ec("ngForOf",i.clients),s.Cb(2),s.fc("href",i.isBookingUser?"home-bookings":"home-admin"),s.Cb(4),s.ec("ngIf",!i.isBookingUser),s.Cb(9),s.ec("ngIf",!i.isBookingUser))},directives:[b.r,b.I,b.H,b.m,b.o,b.p,b.s,b.q,b.A,t.i,b.D,b.E,b.w,t.j,b.l,b.g,b.i,b.k,b.h],styles:[""]}),n})()},{path:"client-form",loadChildren:()=>o.e(17).then(o.bind(null,"P8Cf")).then(n=>n.ClientFormPageModule)}];let g=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({imports:[[c.i.forChild(h)],c.i]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({imports:[[t.c,e.a,b.J,g]]}),n})()}}]);