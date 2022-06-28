import{a as c,R as t}from"./vendor0.a8275b36.js";import{j as p,a,A as L,I as S,b as Y,c as C,d as j,e as k,N as Z,L as s}from"./vendor1.bfdb3b07.js";import{d as y,R as h,r as K}from"./vendor2.1a9bb498.js";const D=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};D();var b={},W=c.exports;b.createRoot=W.createRoot,b.hydrateRoot=W.hydrateRoot;var G="/site/assets/avatar.9881a0d1.svg",q={"header-content":"header-content__6NGTb"};const M=()=>p("div",{className:q["header-content"],children:[a(L,{alt:"avatar",src:G,style:{margin:"0 8px"}}),a("span",{children:"\u6728\u5B50\u51E1\u7684\u5C0F\u7AD9"})]}),O=t.createContext({}),A=l=>{const{initState:i,children:r}=l,[n,e]=t.useState(i||{}),o=m=>{e(typeof m=="function"?u=>({...u,...m(u)}):u=>({...u,...m}))};return a(O.Provider,{value:{globalInfo:n,updateGlobalInfo:o},children:r})};var J={};const f=()=>{const{updateGlobalInfo:l}=t.useContext(O),i=t.useMemo(()=>[{itemKey:"basic",text:"\u57FA\u7840\u7BC7",icon:a(S,{}),items:["\u6D4F\u89C8\u5668","\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5","HTML","CSS","JavaScript"]},{itemKey:"framework",text:"\u6846\u67B6\u7BC7",icon:a(Y,{}),items:["Vue","React"]},{itemKey:"engineering",text:"\u5DE5\u7A0B\u7BC7",icon:a(C,{}),items:["Git","Webpack"]},{itemKey:"code",text:"\u624B\u6495\u4EE3\u7801",icon:a(j,{}),items:["\u9762\u8BD5\u9AD8\u9891\u624B\u6495\u4EE3\u7801\u9898","\u5251\u6307 offer","LeetCode \u7B97\u6CD5\u601D\u8DEF","\u4F01\u4E1A\u7B14\u8BD5\u9898","\u667A\u529B\u9898"]},{itemKey:"combat",text:"\u5B9E\u6218\u7BC7",icon:a(k,{}),items:["VScode Plugin","Chrome Plugin","Mac \u4F7F\u7528\u5C0F\u6280\u5DE7"]}],[]),r=t.useMemo(()=>[i[0].itemKey],[]),n=u=>{i.find(({itemKey:g})=>g===(u==null?void 0:u.itemKey))||l({navKey:u==null?void 0:u.itemKey})},[e,o]=t.useState(!1),m=u=>{o(u)};return t.useEffect(()=>{const u=()=>{o(Boolean(window.innerWidth<1440))};return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[]),a(Z,{items:i,isCollapsed:e,onCollapseChange:m,limitIndent:!1,defaultOpenKeys:r,onClick:n,className:J["sider-nav"],footer:{collapseButton:!0}})};var B="/site/assets/\u6D4F\u89C8\u5668.a42ae0f4.md",X="/site/assets/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5.7c5d5dbe.md",w="/site/assets/HTML.fc407847.md",N="/site/assets/CSS.e156be2f.md",z="/site/assets/JavaScript.955a80f7.md",T="/site/assets/Vue.6116fc6c.md",H="/site/assets/React.f28388b2.md",E="data:text/markdown;base64,IyMg5LiL6L295a6J6KOFCgrku45naXTlrpjnvZHkuIvovb3lronoo4XljIXvvIzlronoo4Xlrozmr5XlkI7lsLHlj6/ku6Xkvb/nlKjlkb3ku6TooYznmoQgZ2l0IOW3peWFt++8jOWcqOW8gOWni+iPnOWNlemHjOaJvuWIsCJHaXQiLT4iR2l0IEJhc2gi77yM5Lya5by55Ye6IEdpdCDlkb3ku6Tnqpflj6PvvIzkvaDlj6/ku6XlnKjor6Xnqpflj6Pov5vooYwgR2l0IOebuOWFs+WRveS7pOihjOeahOaTjeS9nOOAggoKYGBgZ2l0CuWFt+S9k+WPr+WPguiAg2h0dHBzOi8vd3d3LnJ1bm9vYi5jb20vZ2l0L2dpdC1pbnN0YWxsLXNldHVwLmh0bWwKYGBgCgojIyDlhajlsYDphY3nva7njq/looMKCumFjee9ruS4quS6uueUqOaIt+WQjeWSjOeUteWtkOmCrueusQoKYGBgZ2l0CmdpdCBjb25maWcg4oCTZ2xvYmxlIHVzZXIubmFtZSDigJxydW5vb2LigJ0KZ2l0IGNvbmZpZyDigJNnbG9ibGUgdXNlci5lbWFpbCB0ZXh0QHJ1bm9vYi5jb20KYGBgCgrphY3nva7lrozmr5XlkI7vvIzlj6/ku6XpgJrov4ckIGdpdCBjb25maWcg4oCTbGlzdOWRveS7pOafpeeci+aJgOacieeahOmFjee9ruS/oeaBr+OAggrkuZ/lj6/nm7TmjqXmn6Xor6Lmn5DkuKrnjq/looPlj5jph4/nmoTkv6Hmga/jgIIKCmBgYGdpdApnaXQgY29uZmlnIHVzZXIubmFtZQpnaXQgY29uZmlnIHVzZXIuZW1haWwKYGBgCgojIyDmn6XnnIvlt6XkvZzljLrnirbmgIEKCmBgYGdpdApnaXQgc3RhdHVzCmBgYAoKLSDnirbmgIHkuIDvvJrkv67mlLnkuobmsqHmnInmt7vliqDliLDnvJPlrZjljLrvvIjnuqLoibLvvInvvIzmraTml7blj6/ku6XpgJrov4dnaXQgZGlmZiDmn6XnnIvkv67mlLnkuobnmoTlhoXlrrnvvIzigJwt4oCd5Y+35piv5L+u5pS55YmN77yM4oCcK+KAneWPt+aYr+S/ruaUueWQju+8jOesrOS4gOS4quWKoOWPt+WQjuS/ruaUueeahOWJjeS4gOihjOOAguesrOS6jOS4quWKoOWPt+aYr+S/ruaUueeahOWGheWuueOAggotIOeKtuaAgeS6jO+8muS/ruaUueS6hua3u+WKoOWIsOe8k+WtmOWMuu+8iOe7v+iJsu+8iQotIOeKtuaAgeS4ie+8mk9uIGJyYW5jaCBtYXN0ZXIgbm90aGluZyB0byBjb21taXQsIHdvcmsgdHJlZSBjbGVhbiDooajmmI7ml6Dkv67mlLnlhoXlrrkKCiMjIOa3u+WKoOaWh+S7tuWIsGdpdOS7k+W6kwoK5YiG5Lik5q2l77yaCuaKiuS/ruaUueeahOS/ruaUuea3u+WKoOWIsOeJiOacrOW6k+mHjOeahOaaguWtmOWMuu+8jOWPr+S7peWNleeLrOa3u+WKoOafkOS4quaWh+S7tu+8jOWPr+WkmuasoeS9v+eUqAoKYGBgZ2l0CmdpdCBhZGQgPGZpbGU+CmBgYAoK5oqK5pqC5a2Y5Yy655qE5omA5pyJ5YaF5a655o+Q5Lqk5Yiw5b2T5YmN5YiG5pSv77yM5o+Q5Lqk55qE6K+05piO5LiA5a6a6KaB5YaZ77yI5a2X56ym5Liy5Yqg5Y+M5byV5Y+377yJCgpgYGBnaXQKZ2l0IGNvbW1pdCAtbSA8bWVzc2FnZT4KYGBgCgrlpoLmnpwgY29tbWl0IOeahOazqOmHiuWGmemUmeS6hu+8jOaDs+imgeS/ruaUueazqOmHigoKYGBgZ2l0CmdpdCBjb21taXQgLS1hbWVuZApgYGAKCiMjIOacrOWcsOWQjOatpeabtOaWsOi/nOeoi+WIhuaUrwoKYGBgZ2l0CmdpdCBwdWxsCmBgYAoK5aaC5p6c6aG555uu5piv5aSa5Lq65ZCI5L2c55qE77yM6YKj5LmI5bCx6ZyA6KaB5Zyo5ouJ5Y675Yir5Lq65pu05paw55qE5Luj56CB5ZCI5bm25Yiw5pys5Zyw44CCR2l05Lya6Ieq5Yqo5ZCI5bm25pys5Zyw5Luj56CB44CCCgojIyDmiornvJPlrZjkuK3nmoTku6PnoIHmjqjpgIHliLDov5znqIvliIbmlK8KCmBgYGdpdApnaXQgcHVzaApgYGAKCiMjIOaSpOmUgOS/ruaUuQoKLSDlnLrmma/kuIDvvJrkv67mlLnkuobmlofku7bkvYbmmK/mnKrooqthZGQKCmBgYGdpdApnaXQgY2hlY2tvdXQgLS0gPGZpbGU+CmBgYAoKLSDlnLrmma/kuozvvJrkv67mlLnkuoblt6XkvZzljLrlhoXlrrnvvIzov5jmt7vliqDliLDkuobmmoLlrZjljLrml7bvvIzmg7PkuKLlvIPkv67mlLnvvIzliIbkuKTmraUKCmBgYGdpdApnaXQgcmVzZXQgSEVBRCA8ZmlsZT4g5bCx5Zue5Yiw5LqG5Zy65pmv5LiACmdpdCBjaGVja291dCAtLSA8ZmlsZT4KYGBgCgotIOWcuuaZr+S4ie+8muS/ruaUueaWh+S7tuW3suiiq2NvbW1pdCzkvYbmmK/msqHmnInmjqjpgIHliLDov5znqIvlupPvvIzmg7PopoHmkqTplIDmnKzmrKHmj5DkuqTvvIzlj6rog73liIfmjaLniYjmnKwKCmBgYGdpdApnaXQgcmVzZXQgLS1oYXJkIEhFQUReCmBgYAoKIyMg5LuO6L+c56iL5YiG5pSv5ouJ5Y+W6aG555uuCgpgYGBnaXQKZ2l0IGNsb25lIFNTSC9IVFRQU+WcsOWdgCAtYiA85YiG5pSv5ZCNPgpgYGAKCiMjIOWIhuaUr+euoeeQhgoK5b2T5YmN5YiG5pSv5L2c5Lia5pe2CgpgYGBnaXQKMSnmn6XnnIvliIbmlK/vvJpnaXQgYnJhbmNoCjIp5Yib5bu65YiG5pSv77yaZ2l0IGJyYW5jaCA8bmFtZT4KMynliIfmjaLliIbmlK/vvJpnaXQgY2hlY2tvdXQgPG5hbWU+CjQp5Yib5bu6K+WIh+aNouWIhuaUr++8mmdpdCBjaGVja291dCAtYiA8bmFtZT4KNSnlkIjlubbmn5DliIbmlK/liLDlvZPliY3liIbmlK/vvJpnaXQgbWVyZ2UgPG5hbWU+CjYp5Yig6Zmk5YiG5pSvZ2l0IGJyYW5jaCAtZCA8bmFtZT4KYGBgCgrkuLTml7bliIfmjaLliIbmlK/kvZzkuJrml7YKCmBgYGdpdAoxKeaaguWtmOWIhuaUr+W3peS9nOeKtuaAge+8miBnaXQgc3Rhc2gKMinmn6XnnIvliIbmlK/lrZjlgqjnmoTlt6XkvZznirbmgIHvvJogZ2l0IHN0YXNoIGxpc3QKMynmgaLlpI3liIbmlK/lt6XkvZznirbmgIHvvJogZ2l0IHN0YXNoIGFwcGx5CjQp5Yig6Zmk5YiG5pSv5a2Y5YKo55qE5bel5L2c54q25oCB77yaZ2l0IHN0YXNoIGRyb3AKNSnmgaLlpI3lubbliKDpmaTliIbmlK/lrZjlgqjlt6XkvZznirbmgIHvvJpnaXQgc3Rhc2ggcG9wCmBgYAoK5YiH5o2i6L+c56iL5YiG5pSvCu+8muW9k+WJjeWIhuaUr2JyYW5jaDHlt6XkvZzvvIznjrDlnKjpnIDopoHlnKjliIbmlK9icmFuY2gy5LiK5bel5L2c77yM5YiZ6ZyA6KaB5YiH5o2iCgpgYGBnaXQKZ2l0IGZldGNoIG9yaWdpbiBicmFuY2gyKOWIhuaUr+WQjSkKZ2l0IGNoZWNrb3V0IGJyYW5jaDIKYGBgCg==",F="/site/assets/Webpack.dce7515a.md",Q="/site/assets/\u9762\u8BD5\u9AD8\u9891\u624B\u6495\u4EE3\u7801\u9898.ac8c54ae.md",R="/site/assets/\u5251\u6307 offer.d91cf62e.md",U="/site/assets/LeetCode\u7B97\u6CD5\u601D\u8DEF.66bd9177.md",V="/site/assets/\u4F01\u4E1A\u7B14\u8BD5\u9898.812a4405.md",P="data:text/markdown;base64,IyDmmbrlipvpopgKCiMjIOS4pOagueS4jeWdh+WMgOeahOe7s+WtkO+8jOavj+agueWFqOmDqOeDp+WujOmDvemcgOimgeS4gOS4quWwj+aXtu+8jOWmguS9lemdoOi/meS4pOaguee7s+WtkOehruWumuS4gOS4qiAxNW1pbgoKQSDku47kuKTlpLTng6fvvIxCIOS7juS4gOWktOeDp+OAguW9kyBBIOeDp+WujOaXtu+8jOWwhiBCIOeGhOeBreOAguWGjeWwhiBCIOS7juS4pOWktOeDp++8jOW8gOWni+iuoeaXtu+8jOeDp+WujOeUqCAxNSDliIbpkp/jgIIKCiMjIOacieS4pOS4quWuueWZqO+8jOS4gOS4quacgOWkp+WuuemHjyA2MEzvvIzkuIDkuKrmnIDlpKflrrnph48gNTBM77yM5aaC5L2V6Z2g6L+Z5Lik5Liq5a655Zmo5b6X5YiwIDMwTCDmurbmtrIKCjEuIOWuueWZqCBBIOaYryA2MEzvvIzlrrnlmaggQiDmmK8gNTBM77yMQSDoo4Xmu6HlgJLlhaUgQu+8jEEg6L+Y5YmpIDEwTO+8jEIg5YCS56m677yM5bCGIDEwTCDlgJLlhaUgQgoyLiBBIOWAkua7oe+8jOWAkuWFpSBC77yMQSDov5jliankuIsgMjBM77yMQiDlgJLnqbrvvIzlsIYgMjBMIOWAkuWFpSBCCjMuIEEg5YCS5ruh77yM5YCS5YWlIELvvIxBIOi/mOWJqeS4iyAzMEzvvIzlrozmiJAKCiMjIOS4gOWkqSAyNCDlsI/ml7bvvIzml7bpkojlkozliIbpkojkvJrph43lkIjlpJrlsJHmrKEKCjIyIOasoQoKIyMgMSDlhYPpkrHllp0gMSDnk7blj6/kuZDvvIwyIOepuueTtuWFkeaNoiAxIOeTtu+8jOaIkeaciSAyMCDlhYPpkrHvvIzor7fpl67mnIDlpJrlj6/ku6Xllp3lpJrlsJHnk7blj6/kuZAKCjEuIOatpemqpOS4gO+8mjIwIOWFg+mSseaNoiAyMCDnk7bvvJvvvIgyMCDnk7bvvIkKMi4g5q2l6aqk5LqM77yaMjAg56m655O25o2iIDEwIOeTtu+8m++8iDEwIOeTtu+8iQozLiDmraXpqqTkuInvvJoxMCDnqbrnk7bmjaIgNSDnk7bvvJsg77yINSDnk7bvvIkKNC4g5q2l6aqk5Zub77yaNSDnqbrnk7bmjaIgMiDnk7bvvIzov5jkvZkgMSDnqbrnk7bvvJvvvIgyIOeTtisgMSDnqbrnk7Yg77yJCjUuIOatpemqpOS6lO+8mjIg56m655O25o2iIDEg55O277yM6L+Y5L2ZIDEg56m655O277yb77yIMSDnk7YrIDEg56m655O2IO+8iQo2LiDmraXpqqTlha3vvJoxIOepuueTtivkvZnnmoQgMSDnqbrnk7bmjaIgMSDnk7bvvJvvvIgxIOeTtu+8iQo3LiDmraXpqqTkuIPvvJoxIOepuueTtuaNoiAxIOeTtu+8jOasoOiAgeadvyAxIOepuueTtu+8m+WWneWujOWPiOaciSAxIOepuueTtu+8jOS6pOe7meiAgeadv++8jOWFseaYryAyIOepuiDnk7bvvJvliLDmraTkuI3kvZnnqbrnk7Yg77ybIO+8iDEg55O277yJCjguIOatpemqpOWFq++8mjIwIOeTtisxMCDnk7YrNSDnk7YrMiDnk7YrMSDnk7YrMSDnk7YrMSDnk7Y9NDAg55O2CgojIyAxMDAw55O25rC077yM5YW25Lit5LiA55O25pyJ5q+S77yM6ICM5LiU5q+S5oCn5peg5pWM77yM56iA6YeK5LiA5Lq/5YCN5q+S5oCn6YO95LiN5YeP77yM5q+S5oCn55qE5Y+R5L2c5pe26Ze05pyA6ZW/5Li6MeWwj+aXtu+8jOivt+mXruaAjuagt+WPr+S7peWcqOS4pOS4quWwj+aXtuS5i+WGheaJvuWHuuWTqueTtuawtOacieavkgoKYGBgdHh0CuWPr+S7pee7mTEwMDDnk7bmsLTmjInkuIrov7Dmlrnms5XmiZPkuIrlpoLkuIvnmoTkuozov5vliLbmoIfnrb7vvIgxMOS9jemVv+W6pu+8jDJeMTAgPSAxMDI0IO+8ie+8mgowMDAwMDAwMDAxIO+8iOesrDHnk7bvvIkKMDAwMDAwMDAxMCDvvIjnrKwy55O277yJCjAwMDAwMDAwMTEg77yI56ysM+eTtu+8iQrigKYKMTExMTEwMTAwMCDvvIjnrKwxMDAw55O2KQoK5LuO57yW5Y+35pyA5ZCOMeS9jeaYrzHnmoTmiYDmnInnmoTnk7blrZDph4zpnaLlj5blh7ox5ru05re35Zyo5LiA6LW377yI5q+U5aaC5LuO56ys5LiA55O277yM56ys5LiJ55O277yM4oCm6YeM5YiG5Yir5Y+W5Ye65LiA5ru05re35Zyo5LiA6LW377yJ5bm25qCH5LiK6K6w5Y+35Li6MeOAggrku6XmraTnsbvmjqjvvIzku47nvJblj7fnrKzkuIDkvY3mmK8x55qE5omA5pyJ55qE55O25a2Q6YeM6Z2i5Y+W5Ye6Mea7tOa3t+WcqOS4gOi1t+W5tuagh+S4iuiusOWPt+S4ujEw44CCCueOsOWcqOW+l+WIsOaciTEw5Liq57yW5Y+355qE5re35ZCI5ray77yM5bCP55m96byg5o6S5o6S56uZ77yM5YiG5Yir5qCH5LiKMTDvvIw577yM4oCmMeWPt++8jOW5tuWIhuWIq+e7meWug+S7rOeBjOS4iuWvueW6lOWPt+eggeeahOa3t+WQiOa2suOAgjHkuKrlsI/ml7bov4fljrvkuobvvIznnIvnnIvogIHpvKDnmoTmrbvkuqHmg4XlhrXvvJoK5LuO5bem5Yiw5Y+z77yM5q275LqG55qE5bCP55m96byg6LS05LiK5qCH562+Me+8jOayoeatu+eahOi0tOS4ijDvvIzmnIDlkI7lvpfliLDkuIDkuKrluo/lj7fvvIzmiorov5nkuKrluo/lj7fmjaLmiJAxMOi/m+WItueahOaVsOWtl++8jOWwseaYr+acieavkueahOmCo+eTtuawtOeahOe8luWPt+OAggpgYGAK",x="/site/assets/VScodePlugin.885e127e.md",$="data:text/markdown;base64,YGBgdGV4dArnnIvliLDkuIDkuKrlvIDmupDpobnnm67nu7TmiqTkuoYgQ2hyb21lIOaPkuS7tuiLsembhOamnO+8jOW8lea1geaOqOiNkOS4gOazogpodHRwczovL2dpdGh1Yi5jb20vemhhb29sZWUvQ2hyb21lQXBwSGVyb2VzCmBgYAoKIyMg5b2V5bGPIExvb20g8J+Mn/CfjJ/wn4yf8J+MnwoKW+WuieijhV0oaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbG9vbS0lRTIlODAlOTMtZnJlZS1zY3JlZW4tYW5kLWNhL2xpZWNiZGRta2lpaWhuZWRvYm1sbWlsbGhvZGprZG1iP2hsPWVuKQoKPiDov5nmmK/kuIDmrL7mlK/mjIHlvZXlsY/nmoTmj5Lku7bvvIzlvZXlpb3nmoTlsY/kvJrnlJ/miJDkuIDkuKrpk77mjqXvvIzlj6/ku6Xoh6rnlLHnmoTliIbkuqvvvIzpnZ7luLjmlrnkvr/jgIIKPgo+IOi/meaYr+aIkeW9leWItueahOS4gOS4quinhumikemTvuaOpTogaHR0cHM6Ly93d3cubG9vbS5jb20vc2hhcmUvNzVjNmY2ZjlkNDBiNGM5OWE1ZTEzYWVjOWYxNzQ2MDEKCiFbTG9vbV0oLi4vLi4vc2l0ZS9pbWFnZXMvbG9vbS5wbmcpCgojIyBBZEJsb2NrZXIg5o+S5Lu2IPCfjJ/wn4yf8J+Mn/CfjJ8KCui/meexu+aPkuS7tueahOmcgOaxguWkp+WutuS5n+mDveeQhuino++8jOWvueS6juafkOS6m+e9kemhteS4iueahOW5v+WRiuWunuWcqOaYr+W/jeaXoOWPr+W/je+8jOi/memHjOaIkeaOqOiNkOS4pOS4qgoKLSBbQWRHdWFyZCBBZEJsb2NrZXJdKGh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2FkZ3VhcmQtYWRibG9ja2VyL2JnbmtoaG5uYW1pY21wZWVuYWVsbmpmaGlrZ2JrbGxnP2hsPWVuKQotIFtBZEJsb2NrXShodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9hZGJsb2NrLSVFMiU4MCU5NC1iZXN0LWFkLWJsb2NrZXIvZ2lnaG1tcGlvYmtsZmVwam9jbmFtZ2trYmlnbGlkb20/aGw9ZW4pCgrmlYjmnpzmi78gQ1NETiDpppbpobXmnaXor7QKCnwgIVvmnKrlvIDlkK9BZEJsb2NrZXJdKC4uLy4uL3NpdGUvaW1hZ2VzL3dpdGhvdXRBZGJsb2NrZXIucG5nKSB8ICFb5bey5byA5ZCvQWRCbG9ja2VyXSguLi8uLi9zaXRlL2ltYWdlcy93aXRoQWRibG9ja2VyLnBuZykgfAp8IDotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS06IHwgOi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTogfAoK5b2T54S25aSn5a626KaB55CG6Kej572R6aG15LiK55qE5bm/5ZGK6KGM5Li677yM57u05oqk5LiA5Liq572R56uZ55qE5byA6ZSA6L+Y5piv5LiN5bCP55qE77yM5L2c5Li6572R56uZ55qE566h55CG5ZGY5o6l5LiA5Lqb5bm/5ZGK5p2l5aKe6L+b5pS25YWl5Lmf5b6I5ZCI55CG44CCCgojIyBPY3RvdHJlZSAtIEdpdEh1YiBjb2RlIHRyZWUg8J+Mn/CfjJ/wn4yfCgpb5a6J6KOFXShodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9vY3RvdHJlZS1naXRodWItY29kZS10cmVlL2JraGFhZ2phaGZtamxqYWxvcGpub2VhbG5mbmRuYWdjKQoK5a+55LqO57uP5bi45rS76LeD5ZyoIEdpdEh1YiDkuIrnmoTnlKjmiLfmjqjojZDlj6/ku6Xlronoo4XkuIDkuIvov5nkuKrmj5Lku7bvvIzlt6bkvqfkvJrlpJrlh7rkuIDkuKrnm67lvZXnu5PmnoTvvIzkvr/kuo7kvaDlv6vpgJ/nmoTmn6XnnIvlvZPliY3pobnnm67nmoTnu5PmnoQKCiFbT2N0b3RyZWVdKC4uLy4uL3NpdGUvaW1hZ2VzL09jdG90cmVlLnBuZykKCiMjIEZFSGVscGVy77yI5YmN56uv5Yqp5omL77yJ8J+Mn/CfjJ/wn4yf8J+MnwoKW+WuieijhV0oaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvZmVoZWxwZXIlRTUlODklOEQlRTclQUIlQUYlRTUlOEElQTklRTYlODklOEIvcGtnY2NwZWpubWFsbWRpbm1oa2tmYWZlZmFnaWlpYWQ/aGw9ZW4pCgrpu5jorqTlj6rmnIkgSlNPTiDnvo7ljJblt6XlhbfvvIzlhbbkvZnlip/og73pnIDopoHoh6rooYzlronoo4XvvIzlpoLkuIvlm77vvJoKCiFbRkVIZWxwZXJdKC4uLy4uL3NpdGUvaW1hZ2VzL0ZFSGVscGVyLnBuZykKCiMjIE9tbmkg8J+Mn/CfjJ/wn4yfCgpb5a6J6KOFXShodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9vbW5pLWJvb2ttYXJrLWhpc3RvcnktdGFiL21hcGpnZWFjaGlsbWNiYm9ra2djYmdwYmFrYWFlZWhpKQoK566A5Y2V6K+06L+Z5piv5LiA5Liq566h55CG5rWP6KeI5ZmoIHRhYu+8jGJvb2ttYXJrc++8jGhpc3Rvcnkg55qE5Yqf6IO977yM6YCC55So5LqO57uP5bi455So5rWP6KeI5Zmo5omT5byA5b6I5aSa6aG16Z2i77yM5oOz6KaB5b+r6YCf5om+5Yiw5omA6ZyA55qE6aG16Z2i55qE5Lq644CCCgpPbW5pIOaPkOS+m+eahOW/q+aNt+aMh+S7pAotIC90YWJzOiBTZWFyY2ggeW91ciB0YWJzCi0gL2Jvb2ttYXJrczogU2VhcmNoIHlvdXIgYm9va21hcmtzCi0gL2hpc3Rvcnk6IFNlYXJjaCB5b3VyIGJyb3dzZXIgaGlzdG9yeQotIC9hY3Rpb25zOiBTZWFyY2ggYWxsIGF2YWlsYWJsZSBhY3Rpb25zCi0gL3JlbW92ZTogUmVtb3ZlIGEgYm9va21hcmsgb3IgY2xvc2UgYSB0YWIKCuaEn+WFtOi2o+eahOWPr+S7peeci+eci+atpOaPkuS7tueahOS9v+eUqO+8mmh0dHBzOi8vZ2l0aHViLmNvbS9hbHlzc2F4dXUvb21uaQoK5oiW6ICF5Y+v5Lul55yL55yLIGNocm9tZSDllYbln47ph4znmoTop4bpopHku4vnu43vvJpodHRwczovL3lvdXR1LmJlL2RfNWV6VXNEOEMwCgojIyDnqIDlnJ/mjpjph5Eg8J+Mn/CfjJ/wn4yfCgpb5a6J6KOFXShodHRwczovL2p1ZWppbi5jbi9leHRlbnNpb24/dXRtX3NvdXJjZT1qal9uYXYpCgrmlK/mjIHnmoTlip/og73vvJoKLSDorrDnrJTorrDvvIzpl6rlv7XnrJTorrAKLSB0YWIg6ZSu6ZqP5pe25pCc57SiCi0g5paw5byA5qCH562+5Li76aG1Ci0gLi4uCgrmoIfnrb7pobXnmoTmlYjmnpwKIVvnqIDlnJ/mjpjph5FdKC4uLy4uL3NpdGUvaW1hZ2VzL2p1ZWppbi5qcGcpCgpUT0RP77ya5b6F6KGl5YWFCg==",_="data:text/markdown;base64,IyBNYWMg5L2/55So5bCP5oqA5benCgojIyDmiKrlm74KCiMjIyBNYWMg6Ieq5bim55qE5oiq5Zu+5pa55byP5pyJ5ZOq5Lqb77yfCgoxLiBDb21tYW5kICsgU2hpZnQgKyAzOiDmiKrlhajlsY/vvIzlpoLmnpzmnInmianlsZXlsY/vvIzmianlsZXlsY/kuZ/kvJrmiKrlm74KMi4gQ29tbWFuZCArIFNoaWZ0ICsgNDog6Ieq5a6a5LmJ5oiq5Zu+77yM5YWJ5qCH5Lya5Y+Y5oiQ5Y2B5a2X5qCH5b+XCjMuIENvbW1hbmQgKyBTaGlmdCArIDU6IOiHquWumuS5ieaIquWbvu+8jOS8muacieS4gOS4quiZmue6v+ahhu+8jOWPr+S7peiHqueUsemAieaLqeaIquWbvuiMg+WbtAoKIyMjIOWmguS9leS/ruaUuSBNYWMg5oiq5Zu+5L+d5a2Y55qE5L2N572u77yfCgo+IE1hYyDmiKrlm77pu5jorqTmmK/kv53lrZjlnKjmoYzpnaLkuIrnmoTvvIzlpoLmnpzmiKrlm77lvojlpJrvvIzmoYzpnaLkvJrlvojmnYLvvIzmjqjojZDlnKjmoYzpnaLlu7rkuIDkuKogU2NyZWVuU2hvdHMg55qE5paH5Lu277yM5L+u5pS55oiq5Zu+6buY6K6k5L+d5a2Y55qE5paH5Lu244CCCgpgYGBiYXNoCi8vIOesrOS4gOatpe+8muS/ruaUuem7mOiupOi3r+W+hAp3cml0ZSBjb20uYXBwbGUuc2NyZWVuY2FwdHVyZSBsb2NhdGlvbiB+L0Rlc2t0b3AvU2NyZWVuU2hvdHMKCi8vIOesrOS6jOatpe+8muehruS/neabtOaUueeUn+aViApraWxsYWxsIFN5c3RlbVVJU2VydmVyCmBgYAoKIyMgU3BvdGxpZ2h0IOW/q+mAn+aQnOe0ogoKY29tbWFuZCArIHNwYWNlIOW/q+mAn+aQnOe0oueUteiEkeWGheeahOaWh+aho+OAgUFwcOOAgemCruS7tuetieetieOAggoKLSDmiZPlvIDmn5DkuKogQXBwCiAgIVtzcG90bGlnaHRdKC4uLy4uL3NpdGUvaW1hZ2VzL3Nwb3RsaWdodC5wbmcpCgotIOW9k+iuoeeul+WZqOS9v+eUqAogICFbc3BvdGxpZ2h0LWNhbGN1bGF0ZV0oLi4vLi4vc2l0ZS9pbWFnZXMvc3BvdGxpZ2h0LWNhbGN1bGF0ZS5wbmcpCgpUT0RPOiDlvoXmm7TmlrAK";const ee={\u6D4F\u89C8\u5668:B,\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5:X,HTML:w,CSS:N,JavaScript:z,Vue:T,React:H,Git:E,Webpack:F,\u9762\u8BD5\u9AD8\u9891\u624B\u6495\u4EE3\u7801\u9898:Q,"\u5251\u6307 offer":R,"LeetCode \u7B97\u6CD5\u601D\u8DEF":U,\u4F01\u4E1A\u7B14\u8BD5\u9898:V,\u667A\u529B\u9898:P,"VScode Plugin":x,"Chrome Plugin":$,"Mac \u4F7F\u7528\u5C0F\u6280\u5DE7":_},ae=()=>{const{globalInfo:l}=t.useContext(O),[i,r]=t.useState("");return t.useEffect(()=>{fetch(ee[l.navKey]).then(n=>n.text()).then(n=>{r(n)}).catch(()=>{console.log("\u52A0\u8F7D\u5931\u8D25")})},[l.navKey]),{md:i}};var d={"md-content":"md-content__cxhdH","md-toc":"md-toc__2-cEA"};const oe=()=>{const{md:l}=ae(),i=t.useRef(null),r=(n,e)=>{var m,u;const o=((m=i.current)==null?void 0:m.childNodes)||[];for(let g=0;g<o.length;g++){const v=o[g];if(((u=v==null?void 0:v.dataset)==null?void 0:u.id)===n){v==null||v.scrollIntoView();return}}};return p("div",{className:d["md-content"],ref:i,children:[a(y,{className:d["md-toc"],source:l,ordered:!0,onHashChange:r}),a(h,{children:l,remarkPlugins:[K]})]})},ue="page__Dt2Ur";var I={page:ue,"page-header":"page-header__GJ261","page-body":"page-body__wUw9J","page-sider":"page-sider__z-B0u"};const ie=()=>{const[l,i]=t.useState(()=>({navKey:"\u6D4F\u89C8\u5668"})),{Header:r,Sider:n,Content:e}=s;return a(A,{initState:l,children:p(s,{className:I.page,children:[a(r,{className:I["page-header"],children:a(M,{})}),p(s,{className:I["page-body"],children:[a(n,{className:I["page-sider"],children:a(f,{})}),a(e,{children:a(oe,{})})]})]})})};b.createRoot(document.getElementById("root")).render(a(t.StrictMode,{children:a(ie,{})}));
