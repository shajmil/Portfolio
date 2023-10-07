import{s as me,f as C,a as P,l as le,g as E,h as D,c as M,d,m as se,j as k,i as q,I as p,p as he,K as de,n as Z,e as ae,W as _e}from"../chunks/scheduler.bdaa4df1.js";import{S as ue,i as pe,b as I,d as V,m as y,a as _,t as w,e as L,g as re,c as ne}from"../chunks/index.49b0a900.js";import{e as J,U as W,u as ve,o as we}from"../chunks/UIcon.62d4f51d.js";import{c as xe,d as oe,g as O,E as be}from"../chunks/params.80c3dfff.js";import{C as ke}from"../chunks/Card.7cbbd1c7.js";import{C as Ce}from"../chunks/CardLogo.4aa36c7b.js";import{C as Ee,a as G}from"../chunks/ChipIcon.a7b9c6a5.js";import{b as Q}from"../chunks/paths.77e5b8c7.js";import{S as De}from"../chunks/SearchPage.1ff1cad3.js";import{i as Ie}from"../chunks/index.97b3c5e0.js";function ie(a,t,r){const e=a.slice();return e[5]=t[r],e}function Ve(a){let t,r;return t=new W({props:{icon:"i-carbon-building"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ye(a){let t,r;return t=new W({props:{icon:"i-carbon-location"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Le(a){let t,r;return t=new W({props:{icon:"i-carbon-hourglass"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ce(a){let t,r;return t=new G({props:{logo:O(a[5].logo),name:a[5].name,href:`${Q}/skills/${a[5].slug}`}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,n){const o={};n&1&&(o.logo=O(e[5].logo)),n&1&&(o.name=e[5].name),n&1&&(o.href=`${Q}/skills/${e[5].slug}`),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Se(a){let t,r,e,n,o,c,$,s,l,f,h,B,g,b,S,F,ee,R,A=a[0].shortDescription+"",X,te,N,H;r=new Ce({props:{src:O(a[0].logo),alt:a[0].company,size:75}}),c=new Ee({props:{title:a[0].name}}),l=new G({props:{name:`Company: ${a[0].company}`,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),h=new G({props:{name:`Location: ${a[0].location}`,$$slots:{default:[ye]},$$scope:{ctx:a}}}),g=new G({props:{name:`Contract: ${a[0].contract}`,$$slots:{default:[Le]},$$scope:{ctx:a}}});let U=J(a[0].skills),u=[];for(let i=0;i<U.length;i+=1)u[i]=ce(ie(a,U,i));const ge=i=>w(u[i],1,1,()=>{u[i]=null});return{c(){t=C("div"),I(r.$$.fragment),e=P(),n=C("div"),o=C("h3"),I(c.$$.fragment),$=P(),s=C("div"),I(l.$$.fragment),f=P(),I(h.$$.fragment),B=P(),I(g.$$.fragment),b=P(),S=C("div"),F=le(a[1]),ee=P(),R=C("div"),X=le(A),te=P(),N=C("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var m=D(t);V(r.$$.fragment,m),e=M(m),n=E(m,"DIV",{class:!0});var v=D(n);o=E(v,"H3",{class:!0});var K=D(o);V(c.$$.fragment,K),K.forEach(d),$=M(v),s=E(v,"DIV",{class:!0});var j=D(s);V(l.$$.fragment,j),f=M(j),V(h.$$.fragment,j),B=M(j),V(g.$$.fragment,j),j.forEach(d),b=M(v),S=E(v,"DIV",{class:!0});var T=D(S);F=se(T,a[1]),T.forEach(d),ee=M(v),R=E(v,"DIV",{class:!0});var Y=D(R);X=se(Y,A),Y.forEach(d),te=M(v),N=E(v,"DIV",{class:!0});var x=D(N);for(let z=0;z<u.length;z+=1)u[z].l(x);x.forEach(d),v.forEach(d),m.forEach(d),this.h()},h(){k(o,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(s,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(S,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(R,"class","experience-description"),k(N,"class","flex flex-row flex-wrap mt-5"),k(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,m){q(i,t,m),y(r,t,null),p(t,e),p(t,n),p(n,o),y(c,o,null),p(n,$),p(n,s),y(l,s,null),p(s,f),y(h,s,null),p(s,B),y(g,s,null),p(n,b),p(n,S),p(S,F),p(n,ee),p(n,R),p(R,X),p(n,te),p(n,N);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(N,null);H=!0},p(i,m){const v={};m&1&&(v.src=O(i[0].logo)),m&1&&(v.alt=i[0].company),r.$set(v);const K={};m&1&&(K.title=i[0].name),c.$set(K);const j={};m&1&&(j.name=`Company: ${i[0].company}`),m&256&&(j.$$scope={dirty:m,ctx:i}),l.$set(j);const T={};m&1&&(T.name=`Location: ${i[0].location}`),m&256&&(T.$$scope={dirty:m,ctx:i}),h.$set(T);const Y={};if(m&1&&(Y.name=`Contract: ${i[0].contract}`),m&256&&(Y.$$scope={dirty:m,ctx:i}),g.$set(Y),(!H||m&1)&&A!==(A=i[0].shortDescription+"")&&he(X,A),m&1){U=J(i[0].skills);let x;for(x=0;x<U.length;x+=1){const z=ie(i,U,x);u[x]?(u[x].p(z,m),_(u[x],1)):(u[x]=ce(z),u[x].c(),_(u[x],1),u[x].m(N,null))}for(re(),x=U.length;x<u.length;x+=1)ge(x);ne()}},i(i){if(!H){_(r.$$.fragment,i),_(c.$$.fragment,i),_(l.$$.fragment,i),_(h.$$.fragment,i),_(g.$$.fragment,i);for(let m=0;m<U.length;m+=1)_(u[m]);H=!0}},o(i){w(r.$$.fragment,i),w(c.$$.fragment,i),w(l.$$.fragment,i),w(h.$$.fragment,i),w(g.$$.fragment,i),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)w(u[m]);H=!1},d(i){i&&d(t),L(r),L(c),L(l),L(h),L(g),de(u,i)}}}function Pe(a){let t,r;return t=new ke({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${Q}/experience/${a[0].slug}`,$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const o={};n&1&&(o.href=`${Q}/experience/${e[0].slug}`),n&257&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Me(a,t,r){let{experience:e}=t;const n=xe(e.period.from,e.period.to),o=`${oe(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,c=e.period.to?`${oe(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",$=`${o} - ${c} · ${n}`;return a.$$set=s=>{"experience"in s&&r(0,e=s.experience)},[e,$]}class je extends ue{constructor(t){super(),pe(this,t,Me,Pe,me,{experience:0})}}function fe(a,t,r){const e=a.slice();return e[4]=t[r],e[6]=r,e}function Be(a){let t,r,e=[],n=new Map,o,c,$=J(a[0]);const s=l=>l[4].slug;for(let l=0;l<$.length;l+=1){let f=fe(a,$,l),h=s(f);n.set(h,e[l]=$e(h,f))}return{c(){t=C("div"),r=P();for(let l=0;l<e.length;l+=1)e[l].c();o=ae(),this.h()},l(l){t=E(l,"DIV",{class:!0}),D(t).forEach(d),r=M(l);for(let f=0;f<e.length;f+=1)e[f].l(l);o=ae(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,f){q(l,t,f),q(l,r,f);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(l,f);q(l,o,f),c=!0},p(l,f){f&1&&($=J(l[0]),re(),e=ve(e,f,s,1,l,$,n,o.parentNode,we,$e,o,fe),ne())},i(l){if(!c){for(let f=0;f<$.length;f+=1)_(e[f]);c=!0}},o(l){for(let f=0;f<e.length;f+=1)w(e[f]);c=!1},d(l){l&&(d(t),d(r),d(o));for(let f=0;f<e.length;f+=1)e[f].d(l)}}}function Ne(a){let t,r,e,n,o="Could not find anything...",c;return r=new W({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),I(r.$$.fragment),e=P(),n=C("p"),n.textContent=o,this.h()},l($){t=E($,"DIV",{class:!0});var s=D(t);V(r.$$.fragment,s),e=M(s),n=E(s,"P",{class:!0,["data-svelte-h"]:!0}),_e(n)!=="svelte-1jyyf6v"&&(n.textContent=o),s.forEach(d),this.h()},h(){k(n,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,s){q($,t,s),y(r,t,null),p(t,e),p(t,n),c=!0},p:Z,i($){c||(_(r.$$.fragment,$),c=!0)},o($){w(r.$$.fragment,$),c=!1},d($){$&&d(t),L(r)}}}function $e(a,t){let r,e,n,o,c,$,s,l,f,h,B;return c=new W({props:{icon:"i-carbon-condition-point",classes:""}}),l=new je({props:{experience:t[4]}}),{key:a,first:null,c(){r=C("div"),e=C("div"),n=P(),o=C("div"),I(c.$$.fragment),$=P(),s=C("div"),I(l.$$.fragment),f=P(),this.h()},l(g){r=E(g,"DIV",{class:!0});var b=D(r);e=E(b,"DIV",{class:!0}),D(e).forEach(d),n=M(b),o=E(b,"DIV",{class:!0});var S=D(o);V(c.$$.fragment,S),S.forEach(d),$=M(b),s=E(b,"DIV",{class:!0});var F=D(s);V(l.$$.fragment,F),F.forEach(d),f=M(b),b.forEach(d),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(o,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(s,"class","flex-1 col items-stretch"),k(r,"class",h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,b){q(g,r,b),p(r,e),p(r,n),p(r,o),y(c,o,null),p(r,$),p(r,s),y(l,s,null),p(r,f),B=!0},p(g,b){t=g;const S={};b&1&&(S.experience=t[4]),l.$set(S),(!B||b&1&&h!==(h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",h)},i(g){B||(_(c.$$.fragment,g),_(l.$$.fragment,g),B=!0)},o(g){w(c.$$.fragment,g),w(l.$$.fragment,g),B=!1},d(g){g&&d(r),L(c),L(l)}}}function Ue(a){let t,r,e,n;const o=[Ne,Be],c=[];function $(s,l){return s[0].length===0?0:1}return r=$(a),e=c[r]=o[r](a),{c(){t=C("div"),e.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var l=D(t);e.l(l),l.forEach(d),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(s,l){q(s,t,l),c[r].m(t,null),n=!0},p(s,l){let f=r;r=$(s),r===f?c[r].p(s,l):(re(),w(c[f],1,1,()=>{c[f]=null}),ne(),e=c[r],e?e.p(s,l):(e=c[r]=o[r](s),e.c()),_(e,1),e.m(t,null))},i(s){n||(_(e),n=!0)},o(s){w(e),n=!1},d(s){s&&d(t),c[r].d()}}}function qe(a){let t,r;return t=new De({props:{title:a[1],$$slots:{default:[Ue]},$$scope:{ctx:a}}}),t.$on("search",a[2]),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const o={};n&129&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Fe(a,t,r){const{items:e,title:n}=be;let o=[...e];return[o,n,$=>{const s=$.detail.search;Ie(s)&&r(0,o=e),r(0,o=e.filter(l=>l.name.toLowerCase().includes(s)||l.company.toLowerCase().includes(s)||l.description.toLowerCase().includes(s)))}]}class Je extends ue{constructor(t){super(),pe(this,t,Fe,qe,me,{})}}export{Je as component};