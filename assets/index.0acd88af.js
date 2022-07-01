import{a as S,R as m}from"./vendor0.a8275b36.js";import{j as b,a as u,A as L,I as k,b as Z,c as K,d as G,e as q,N as D,L as O}from"./vendor1.114e14f2.js";import{d as M,R as f,r as A}from"./vendor2.cc71df6c.js";const J=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?e.credentials="include":a.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(a){if(a.ep)return;a.ep=!0;const e=t(a);fetch(a.href,e)}};J();var p={},d=S.exports;p.createRoot=d.createRoot,p.hydrateRoot=d.hydrateRoot;var B="/site/assets/avatar.9881a0d1.svg",j={"header-content":"header-content__6NGTb","header-avatar":"header-avatar__VLhTi"};const w=()=>b("div",{className:j["header-content"],children:[u(L,{alt:"avatar",src:B,className:j["header-avatar"]}),u("span",{style:{fontSize:"16px"},children:"\u6728\u5B50\u5C0F\u7AD9"})]}),c=m.createContext({}),X=n=>{const{initState:i,children:t}=n,[o,a]=m.useState(i||{}),e=r=>{a(typeof r=="function"?v=>({...v,...r(v)}):v=>({...v,...r}))};return u(c.Provider,{value:{globalInfo:o,updateGlobalInfo:e},children:t})};var N={};const z=()=>{const{updateGlobalInfo:n}=m.useContext(c),i=m.useMemo(()=>[{itemKey:"basic",text:"\u57FA\u7840\u7BC7",icon:u(k,{}),items:["\u6D4F\u89C8\u5668","\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5","HTML","CSS","JavaScript"]},{itemKey:"framework",text:"\u6846\u67B6\u7BC7",icon:u(Z,{}),items:["Vue","React"]},{itemKey:"engineering",text:"\u5DE5\u7A0B\u7BC7",icon:u(K,{}),items:["Git","Webpack"]},{itemKey:"code",text:"\u624B\u6495\u4EE3\u7801",icon:u(G,{}),items:["\u9762\u8BD5\u9AD8\u9891\u624B\u6495\u4EE3\u7801\u9898","\u5251\u6307 offer","LeetCode \u7B97\u6CD5\u601D\u8DEF","\u4F01\u4E1A\u7B14\u8BD5\u9898","\u667A\u529B\u9898"]},{itemKey:"combat",text:"\u5B9E\u6218\u7BC7",icon:u(q,{}),items:["VScode Plugin","Chrome Plugin","Mac \u4F7F\u7528\u5C0F\u6280\u5DE7"]}],[]),t=m.useMemo(()=>[i[0].itemKey],[]),o=l=>{i.find(({itemKey:I})=>I===(l==null?void 0:l.itemKey))||n({navKey:l==null?void 0:l.itemKey})},a=m.useMemo(()=>window.visualViewport.width<600,[]),[e,r]=m.useState(a);return u(D,{items:i,isCollapsed:e,onCollapseChange:l=>{r(l)},limitIndent:!1,defaultOpenKeys:t,onClick:o,className:N["sider-nav"],footer:{collapseButton:!a}})};var H="/site/assets/\u6D4F\u89C8\u5668.a42ae0f4.md",T="/site/assets/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5.7c5d5dbe.md",V="/site/assets/HTML.fc407847.md",E="/site/assets/CSS.e156be2f.md",Q="/site/assets/JavaScript.955a80f7.md",U="/site/assets/Vue.6116fc6c.md",F="/site/assets/React.f28388b2.md",R="data:text/markdown;base64,IyMg5LiL6L295a6J6KOFCgrku45naXTlrpjnvZHkuIvovb3lronoo4XljIXvvIzlronoo4Xlrozmr5XlkI7lsLHlj6/ku6Xkvb/nlKjlkb3ku6TooYznmoQgZ2l0IOW3peWFt++8jOWcqOW8gOWni+iPnOWNlemHjOaJvuWIsCJHaXQiLT4iR2l0IEJhc2gi77yM5Lya5by55Ye6IEdpdCDlkb3ku6Tnqpflj6PvvIzkvaDlj6/ku6XlnKjor6Xnqpflj6Pov5vooYwgR2l0IOebuOWFs+WRveS7pOihjOeahOaTjeS9nOOAggoKYGBgZ2l0CuWFt+S9k+WPr+WPguiAg2h0dHBzOi8vd3d3LnJ1bm9vYi5jb20vZ2l0L2dpdC1pbnN0YWxsLXNldHVwLmh0bWwKYGBgCgojIyDlhajlsYDphY3nva7njq/looMKCumFjee9ruS4quS6uueUqOaIt+WQjeWSjOeUteWtkOmCrueusQoKYGBgZ2l0CmdpdCBjb25maWcg4oCTZ2xvYmxlIHVzZXIubmFtZSDigJxydW5vb2LigJ0KZ2l0IGNvbmZpZyDigJNnbG9ibGUgdXNlci5lbWFpbCB0ZXh0QHJ1bm9vYi5jb20KYGBgCgrphY3nva7lrozmr5XlkI7vvIzlj6/ku6XpgJrov4ckIGdpdCBjb25maWcg4oCTbGlzdOWRveS7pOafpeeci+aJgOacieeahOmFjee9ruS/oeaBr+OAggrkuZ/lj6/nm7TmjqXmn6Xor6Lmn5DkuKrnjq/looPlj5jph4/nmoTkv6Hmga/jgIIKCmBgYGdpdApnaXQgY29uZmlnIHVzZXIubmFtZQpnaXQgY29uZmlnIHVzZXIuZW1haWwKYGBgCgojIyDmn6XnnIvlt6XkvZzljLrnirbmgIEKCmBgYGdpdApnaXQgc3RhdHVzCmBgYAoKLSDnirbmgIHkuIDvvJrkv67mlLnkuobmsqHmnInmt7vliqDliLDnvJPlrZjljLrvvIjnuqLoibLvvInvvIzmraTml7blj6/ku6XpgJrov4dnaXQgZGlmZiDmn6XnnIvkv67mlLnkuobnmoTlhoXlrrnvvIzigJwt4oCd5Y+35piv5L+u5pS55YmN77yM4oCcK+KAneWPt+aYr+S/ruaUueWQju+8jOesrOS4gOS4quWKoOWPt+WQjuS/ruaUueeahOWJjeS4gOihjOOAguesrOS6jOS4quWKoOWPt+aYr+S/ruaUueeahOWGheWuueOAggotIOeKtuaAgeS6jO+8muS/ruaUueS6hua3u+WKoOWIsOe8k+WtmOWMuu+8iOe7v+iJsu+8iQotIOeKtuaAgeS4ie+8mk9uIGJyYW5jaCBtYXN0ZXIgbm90aGluZyB0byBjb21taXQsIHdvcmsgdHJlZSBjbGVhbiDooajmmI7ml6Dkv67mlLnlhoXlrrkKCiMjIOa3u+WKoOaWh+S7tuWIsGdpdOS7k+W6kwoK5YiG5Lik5q2l77yaCuaKiuS/ruaUueeahOS/ruaUuea3u+WKoOWIsOeJiOacrOW6k+mHjOeahOaaguWtmOWMuu+8jOWPr+S7peWNleeLrOa3u+WKoOafkOS4quaWh+S7tu+8jOWPr+WkmuasoeS9v+eUqAoKYGBgZ2l0CmdpdCBhZGQgPGZpbGU+CmBgYAoK5oqK5pqC5a2Y5Yy655qE5omA5pyJ5YaF5a655o+Q5Lqk5Yiw5b2T5YmN5YiG5pSv77yM5o+Q5Lqk55qE6K+05piO5LiA5a6a6KaB5YaZ77yI5a2X56ym5Liy5Yqg5Y+M5byV5Y+377yJCgpgYGBnaXQKZ2l0IGNvbW1pdCAtbSA8bWVzc2FnZT4KYGBgCgrlpoLmnpwgY29tbWl0IOeahOazqOmHiuWGmemUmeS6hu+8jOaDs+imgeS/ruaUueazqOmHigoKYGBgZ2l0CmdpdCBjb21taXQgLS1hbWVuZApgYGAKCiMjIOacrOWcsOWQjOatpeabtOaWsOi/nOeoi+WIhuaUrwoKYGBgZ2l0CmdpdCBwdWxsCmBgYAoK5aaC5p6c6aG555uu5piv5aSa5Lq65ZCI5L2c55qE77yM6YKj5LmI5bCx6ZyA6KaB5Zyo5ouJ5Y675Yir5Lq65pu05paw55qE5Luj56CB5ZCI5bm25Yiw5pys5Zyw44CCR2l05Lya6Ieq5Yqo5ZCI5bm25pys5Zyw5Luj56CB44CCCgojIyDmiornvJPlrZjkuK3nmoTku6PnoIHmjqjpgIHliLDov5znqIvliIbmlK8KCmBgYGdpdApnaXQgcHVzaApgYGAKCiMjIOaSpOmUgOS/ruaUuQoKLSDlnLrmma/kuIDvvJrkv67mlLnkuobmlofku7bkvYbmmK/mnKrooqthZGQKCmBgYGdpdApnaXQgY2hlY2tvdXQgLS0gPGZpbGU+CmBgYAoKLSDlnLrmma/kuozvvJrkv67mlLnkuoblt6XkvZzljLrlhoXlrrnvvIzov5jmt7vliqDliLDkuobmmoLlrZjljLrml7bvvIzmg7PkuKLlvIPkv67mlLnvvIzliIbkuKTmraUKCmBgYGdpdApnaXQgcmVzZXQgSEVBRCA8ZmlsZT4g5bCx5Zue5Yiw5LqG5Zy65pmv5LiACmdpdCBjaGVja291dCAtLSA8ZmlsZT4KYGBgCgotIOWcuuaZr+S4ie+8muS/ruaUueaWh+S7tuW3suiiq2NvbW1pdCzkvYbmmK/msqHmnInmjqjpgIHliLDov5znqIvlupPvvIzmg7PopoHmkqTplIDmnKzmrKHmj5DkuqTvvIzlj6rog73liIfmjaLniYjmnKwKCmBgYGdpdApnaXQgcmVzZXQgLS1oYXJkIEhFQUReCmBgYAoKIyMg5LuO6L+c56iL5YiG5pSv5ouJ5Y+W6aG555uuCgpgYGBnaXQKZ2l0IGNsb25lIFNTSC9IVFRQU+WcsOWdgCAtYiA85YiG5pSv5ZCNPgpgYGAKCiMjIOWIhuaUr+euoeeQhgoK5b2T5YmN5YiG5pSv5L2c5Lia5pe2CgpgYGBnaXQKMSnmn6XnnIvliIbmlK/vvJpnaXQgYnJhbmNoCjIp5Yib5bu65YiG5pSv77yaZ2l0IGJyYW5jaCA8bmFtZT4KMynliIfmjaLliIbmlK/vvJpnaXQgY2hlY2tvdXQgPG5hbWU+CjQp5Yib5bu6K+WIh+aNouWIhuaUr++8mmdpdCBjaGVja291dCAtYiA8bmFtZT4KNSnlkIjlubbmn5DliIbmlK/liLDlvZPliY3liIbmlK/vvJpnaXQgbWVyZ2UgPG5hbWU+CjYp5Yig6Zmk5YiG5pSvZ2l0IGJyYW5jaCAtZCA8bmFtZT4KYGBgCgrkuLTml7bliIfmjaLliIbmlK/kvZzkuJrml7YKCmBgYGdpdAoxKeaaguWtmOWIhuaUr+W3peS9nOeKtuaAge+8miBnaXQgc3Rhc2gKMinmn6XnnIvliIbmlK/lrZjlgqjnmoTlt6XkvZznirbmgIHvvJogZ2l0IHN0YXNoIGxpc3QKMynmgaLlpI3liIbmlK/lt6XkvZznirbmgIHvvJogZ2l0IHN0YXNoIGFwcGx5CjQp5Yig6Zmk5YiG5pSv5a2Y5YKo55qE5bel5L2c54q25oCB77yaZ2l0IHN0YXNoIGRyb3AKNSnmgaLlpI3lubbliKDpmaTliIbmlK/lrZjlgqjlt6XkvZznirbmgIHvvJpnaXQgc3Rhc2ggcG9wCmBgYAoK5YiH5o2i6L+c56iL5YiG5pSvCu+8muW9k+WJjeWIhuaUr2JyYW5jaDHlt6XkvZzvvIznjrDlnKjpnIDopoHlnKjliIbmlK9icmFuY2gy5LiK5bel5L2c77yM5YiZ6ZyA6KaB5YiH5o2iCgpgYGBnaXQKZ2l0IGZldGNoIG9yaWdpbiBicmFuY2gyKOWIhuaUr+WQjSkKZ2l0IGNoZWNrb3V0IGJyYW5jaDIKYGBgCg==",x="/site/assets/Webpack.dce7515a.md",P="/site/assets/\u9762\u8BD5\u9AD8\u9891\u624B\u6495\u4EE3\u7801\u9898.ac8c54ae.md",_="/site/assets/\u5251\u6307 offer.d91cf62e.md",$="/site/assets/LeetCode\u7B97\u6CD5\u601D\u8DEF.66bd9177.md",ee="/site/assets/\u4F01\u4E1A\u7B14\u8BD5\u9898.812a4405.md",ae="data:text/markdown;base64,IyDmmbrlipvpopgKCiMjIOS4pOagueS4jeWdh+WMgOeahOe7s+WtkO+8jOavj+agueWFqOmDqOeDp+WujOmDvemcgOimgeS4gOS4quWwj+aXtu+8jOWmguS9lemdoOi/meS4pOaguee7s+WtkOehruWumuS4gOS4qiAxNW1pbgoKQSDku47kuKTlpLTng6fvvIxCIOS7juS4gOWktOeDp+OAguW9kyBBIOeDp+WujOaXtu+8jOWwhiBCIOeGhOeBreOAguWGjeWwhiBCIOS7juS4pOWktOeDp++8jOW8gOWni+iuoeaXtu+8jOeDp+WujOeUqCAxNSDliIbpkp/jgIIKCiMjIOacieS4pOS4quWuueWZqO+8jOS4gOS4quacgOWkp+WuuemHjyA2MEzvvIzkuIDkuKrmnIDlpKflrrnph48gNTBM77yM5aaC5L2V6Z2g6L+Z5Lik5Liq5a655Zmo5b6X5YiwIDMwTCDmurbmtrIKCjEuIOWuueWZqCBBIOaYryA2MEzvvIzlrrnlmaggQiDmmK8gNTBM77yMQSDoo4Xmu6HlgJLlhaUgQu+8jEEg6L+Y5YmpIDEwTO+8jEIg5YCS56m677yM5bCGIDEwTCDlgJLlhaUgQgoyLiBBIOWAkua7oe+8jOWAkuWFpSBC77yMQSDov5jliankuIsgMjBM77yMQiDlgJLnqbrvvIzlsIYgMjBMIOWAkuWFpSBCCjMuIEEg5YCS5ruh77yM5YCS5YWlIELvvIxBIOi/mOWJqeS4iyAzMEzvvIzlrozmiJAKCiMjIOS4gOWkqSAyNCDlsI/ml7bvvIzml7bpkojlkozliIbpkojkvJrph43lkIjlpJrlsJHmrKEKCjIyIOasoQoKIyMgMSDlhYPpkrHllp0gMSDnk7blj6/kuZDvvIwyIOepuueTtuWFkeaNoiAxIOeTtu+8jOaIkeaciSAyMCDlhYPpkrHvvIzor7fpl67mnIDlpJrlj6/ku6Xllp3lpJrlsJHnk7blj6/kuZAKCjEuIOatpemqpOS4gO+8mjIwIOWFg+mSseaNoiAyMCDnk7bvvJvvvIgyMCDnk7bvvIkKMi4g5q2l6aqk5LqM77yaMjAg56m655O25o2iIDEwIOeTtu+8m++8iDEwIOeTtu+8iQozLiDmraXpqqTkuInvvJoxMCDnqbrnk7bmjaIgNSDnk7bvvJsg77yINSDnk7bvvIkKNC4g5q2l6aqk5Zub77yaNSDnqbrnk7bmjaIgMiDnk7bvvIzov5jkvZkgMSDnqbrnk7bvvJvvvIgyIOeTtisgMSDnqbrnk7Yg77yJCjUuIOatpemqpOS6lO+8mjIg56m655O25o2iIDEg55O277yM6L+Y5L2ZIDEg56m655O277yb77yIMSDnk7YrIDEg56m655O2IO+8iQo2LiDmraXpqqTlha3vvJoxIOepuueTtivkvZnnmoQgMSDnqbrnk7bmjaIgMSDnk7bvvJvvvIgxIOeTtu+8iQo3LiDmraXpqqTkuIPvvJoxIOepuueTtuaNoiAxIOeTtu+8jOasoOiAgeadvyAxIOepuueTtu+8m+WWneWujOWPiOaciSAxIOepuueTtu+8jOS6pOe7meiAgeadv++8jOWFseaYryAyIOepuiDnk7bvvJvliLDmraTkuI3kvZnnqbrnk7Yg77ybIO+8iDEg55O277yJCjguIOatpemqpOWFq++8mjIwIOeTtisxMCDnk7YrNSDnk7YrMiDnk7YrMSDnk7YrMSDnk7YrMSDnk7Y9NDAg55O2CgojIyAxMDAw55O25rC077yM5YW25Lit5LiA55O25pyJ5q+S77yM6ICM5LiU5q+S5oCn5peg5pWM77yM56iA6YeK5LiA5Lq/5YCN5q+S5oCn6YO95LiN5YeP77yM5q+S5oCn55qE5Y+R5L2c5pe26Ze05pyA6ZW/5Li6MeWwj+aXtu+8jOivt+mXruaAjuagt+WPr+S7peWcqOS4pOS4quWwj+aXtuS5i+WGheaJvuWHuuWTqueTtuawtOacieavkgoKYGBgdHh0CuWPr+S7pee7mTEwMDDnk7bmsLTmjInkuIrov7Dmlrnms5XmiZPkuIrlpoLkuIvnmoTkuozov5vliLbmoIfnrb7vvIgxMOS9jemVv+W6pu+8jDJeMTAgPSAxMDI0IO+8ie+8mgowMDAwMDAwMDAxIO+8iOesrDHnk7bvvIkKMDAwMDAwMDAxMCDvvIjnrKwy55O277yJCjAwMDAwMDAwMTEg77yI56ysM+eTtu+8iQrigKYKMTExMTEwMTAwMCDvvIjnrKwxMDAw55O2KQoK5LuO57yW5Y+35pyA5ZCOMeS9jeaYrzHnmoTmiYDmnInnmoTnk7blrZDph4zpnaLlj5blh7ox5ru05re35Zyo5LiA6LW377yI5q+U5aaC5LuO56ys5LiA55O277yM56ys5LiJ55O277yM4oCm6YeM5YiG5Yir5Y+W5Ye65LiA5ru05re35Zyo5LiA6LW377yJ5bm25qCH5LiK6K6w5Y+35Li6MeOAggrku6XmraTnsbvmjqjvvIzku47nvJblj7fnrKzkuIDkvY3mmK8x55qE5omA5pyJ55qE55O25a2Q6YeM6Z2i5Y+W5Ye6Mea7tOa3t+WcqOS4gOi1t+W5tuagh+S4iuiusOWPt+S4ujEw44CCCueOsOWcqOW+l+WIsOaciTEw5Liq57yW5Y+355qE5re35ZCI5ray77yM5bCP55m96byg5o6S5o6S56uZ77yM5YiG5Yir5qCH5LiKMTDvvIw577yM4oCmMeWPt++8jOW5tuWIhuWIq+e7meWug+S7rOeBjOS4iuWvueW6lOWPt+eggeeahOa3t+WQiOa2suOAgjHkuKrlsI/ml7bov4fljrvkuobvvIznnIvnnIvogIHpvKDnmoTmrbvkuqHmg4XlhrXvvJoK5LuO5bem5Yiw5Y+z77yM5q275LqG55qE5bCP55m96byg6LS05LiK5qCH562+Me+8jOayoeatu+eahOi0tOS4ijDvvIzmnIDlkI7lvpfliLDkuIDkuKrluo/lj7fvvIzmiorov5nkuKrluo/lj7fmjaLmiJAxMOi/m+WItueahOaVsOWtl++8jOWwseaYr+acieavkueahOmCo+eTtuawtOeahOe8luWPt+OAggpgYGAK",ie="/site/assets/VScodePlugin.51909e37.md",oe="data:text/markdown;base64,YGBgdGV4dArnnIvliLDkuIDkuKrlvIDmupDpobnnm67nu7TmiqTkuoYgQ2hyb21lIOaPkuS7tuiLsembhOamnO+8jOW8lea1geaOqOiNkOS4gOazogpodHRwczovL2dpdGh1Yi5jb20vemhhb29sZWUvQ2hyb21lQXBwSGVyb2VzCmBgYAoKIyMg5b2V5bGPIExvb20g8J+Mn/CfjJ/wn4yf8J+MnwoKW+WuieijhV0oaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbG9vbS0lRTIlODAlOTMtZnJlZS1zY3JlZW4tYW5kLWNhL2xpZWNiZGRta2lpaWhuZWRvYm1sbWlsbGhvZGprZG1iP2hsPWVuKQoKPiDov5nmmK/kuIDmrL7mlK/mjIHlvZXlsY/nmoTmj5Lku7bvvIzlvZXlpb3nmoTlsY/kvJrnlJ/miJDkuIDkuKrpk77mjqXvvIzlj6/ku6Xoh6rnlLHnmoTliIbkuqvvvIzpnZ7luLjmlrnkvr/jgIIKPgo+IOi/meaYr+aIkeW9leWItueahOS4gOS4quinhumikemTvuaOpTogaHR0cHM6Ly93d3cubG9vbS5jb20vc2hhcmUvNzVjNmY2ZjlkNDBiNGM5OWE1ZTEzYWVjOWYxNzQ2MDEKCiFbTG9vbV0oLi4vLi4vc2l0ZS9pbWFnZXMvbG9vbS5wbmcpCgojIyBBZEJsb2NrZXIg5o+S5Lu2IPCfjJ/wn4yf8J+Mn/CfjJ8KCui/meexu+aPkuS7tueahOmcgOaxguWkp+WutuS5n+mDveeQhuino++8jOWvueS6juafkOS6m+e9kemhteS4iueahOW5v+WRiuWunuWcqOaYr+W/jeaXoOWPr+W/je+8jOi/memHjOaIkeaOqOiNkOS4pOS4qgoKLSBbQWRHdWFyZCBBZEJsb2NrZXJdKGh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2FkZ3VhcmQtYWRibG9ja2VyL2JnbmtoaG5uYW1pY21wZWVuYWVsbmpmaGlrZ2JrbGxnP2hsPWVuKQotIFtBZEJsb2NrXShodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9hZGJsb2NrLSVFMiU4MCU5NC1iZXN0LWFkLWJsb2NrZXIvZ2lnaG1tcGlvYmtsZmVwam9jbmFtZ2trYmlnbGlkb20/aGw9ZW4pCgrmlYjmnpzmi78gQ1NETiDpppbpobXmnaXor7QKCi0g5pyq5byA5ZCvQWRCbG9ja2VyCiFb5pyq5byA5ZCvQWRCbG9ja2VyXSguLi8uLi9zaXRlL2ltYWdlcy93aXRob3V0QWRibG9ja2VyLnBuZykKCi0g5bey5byA5ZCvQWRCbG9ja2VyCiFb5bey5byA5ZCvQWRCbG9ja2VyXSguLi8uLi9zaXRlL2ltYWdlcy93aXRoQWRibG9ja2VyLnBuZykKCuW9k+eEtuWkp+WutuimgeeQhuino+e9kemhteS4iueahOW5v+WRiuihjOS4uu+8jOe7tOaKpOS4gOS4que9keermeeahOW8gOmUgOi/mOaYr+S4jeWwj+eahO+8jOS9nOS4uue9keermeeahOeuoeeQhuWRmOaOpeS4gOS6m+W5v+WRiuadpeWinui/m+aUtuWFpeS5n+W+iOWQiOeQhuOAggoKIyMgT2N0b3RyZWUgLSBHaXRIdWIgY29kZSB0cmVlIPCfjJ/wn4yf8J+MnwoKW+WuieijhV0oaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvb2N0b3RyZWUtZ2l0aHViLWNvZGUtdHJlZS9ia2hhYWdqYWhmbWpsamFsb3Bqbm9lYWxuZm5kbmFnYykKCuWvueS6jue7j+W4uOa0u+i3g+WcqCBHaXRIdWIg5LiK55qE55So5oi35o6o6I2Q5Y+v5Lul5a6J6KOF5LiA5LiL6L+Z5Liq5o+S5Lu277yM5bem5L6n5Lya5aSa5Ye65LiA5Liq55uu5b2V57uT5p6E77yM5L6/5LqO5L2g5b+r6YCf55qE5p+l55yL5b2T5YmN6aG555uu55qE57uT5p6ECgohW09jdG90cmVlXSguLi8uLi9zaXRlL2ltYWdlcy9PY3RvdHJlZS5wbmcpCgojIyBGRUhlbHBlcu+8iOWJjeerr+WKqeaJi++8ifCfjJ/wn4yf8J+Mn/CfjJ8KClvlronoo4VdKGh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2ZlaGVscGVyJUU1JTg5JThEJUU3JUFCJUFGJUU1JThBJUE5JUU2JTg5JThCL3BrZ2NjcGVqbm1hbG1kaW5taGtrZmFmZWZhZ2lpaWFkP2hsPWVuKQoK6buY6K6k5Y+q5pyJIEpTT04g576O5YyW5bel5YW377yM5YW25L2Z5Yqf6IO96ZyA6KaB6Ieq6KGM5a6J6KOF77yM5aaC5LiL5Zu+77yaCgohW0ZFSGVscGVyXSguLi8uLi9zaXRlL2ltYWdlcy9GRUhlbHBlci5wbmcpCgojIyBPbW5pIPCfjJ/wn4yf8J+MnwoKW+WuieijhV0oaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvb21uaS1ib29rbWFyay1oaXN0b3J5LXRhYi9tYXBqZ2VhY2hpbG1jYmJva2tnY2JncGJha2FhZWVoaSkKCueugOWNleivtOi/meaYr+S4gOS4queuoeeQhua1j+iniOWZqCB0YWLvvIxib29rbWFya3PvvIxoaXN0b3J5IOeahOWKn+iDve+8jOmAgueUqOS6jue7j+W4uOeUqOa1j+iniOWZqOaJk+W8gOW+iOWkmumhtemdou+8jOaDs+imgeW/q+mAn+aJvuWIsOaJgOmcgOeahOmhtemdoueahOS6uuOAggoKT21uaSDmj5DkvpvnmoTlv6vmjbfmjIfku6QKLSAvdGFiczogU2VhcmNoIHlvdXIgdGFicwotIC9ib29rbWFya3M6IFNlYXJjaCB5b3VyIGJvb2ttYXJrcwotIC9oaXN0b3J5OiBTZWFyY2ggeW91ciBicm93c2VyIGhpc3RvcnkKLSAvYWN0aW9uczogU2VhcmNoIGFsbCBhdmFpbGFibGUgYWN0aW9ucwotIC9yZW1vdmU6IFJlbW92ZSBhIGJvb2ttYXJrIG9yIGNsb3NlIGEgdGFiCgrmhJ/lhbTotqPnmoTlj6/ku6XnnIvnnIvmraTmj5Lku7bnmoTkvb/nlKjvvJpodHRwczovL2dpdGh1Yi5jb20vYWx5c3NheHV1L29tbmkKCuaIluiAheWPr+S7peeci+eciyBjaHJvbWUg5ZWG5Z+O6YeM55qE6KeG6aKR5LuL57uN77yaaHR0cHM6Ly95b3V0dS5iZS9kXzVlelVzRDhDMAoKIyMg56iA5Zyf5o6Y6YeRIPCfjJ/wn4yf8J+MnwoKW+WuieijhV0oaHR0cHM6Ly9qdWVqaW4uY24vZXh0ZW5zaW9uP3V0bV9zb3VyY2U9ampfbmF2KQoK5pSv5oyB55qE5Yqf6IO977yaCi0g6K6w56yU6K6w77yM6Zeq5b+156yU6K6wCi0gdGFiIOmUrumaj+aXtuaQnOe0ogotIOaWsOW8gOagh+etvuS4u+mhtQotIC4uLgoK5qCH562+6aG155qE5pWI5p6cCiFb56iA5Zyf5o6Y6YeRXSguLi8uLi9zaXRlL2ltYWdlcy9qdWVqaW4uanBnKQoKIyMgVE9ET++8muW+heihpeWFhQo=",ue="data:text/markdown;base64,IyBNYWMg5L2/55So5bCP5oqA5benCgojIyDmiKrlm74KCiMjIyBNYWMg6Ieq5bim55qE5oiq5Zu+5pa55byP5pyJ5ZOq5Lqb77yfCgoxLiBDb21tYW5kICsgU2hpZnQgKyAzOiDmiKrlhajlsY/vvIzlpoLmnpzmnInmianlsZXlsY/vvIzmianlsZXlsY/kuZ/kvJrmiKrlm74KMi4gQ29tbWFuZCArIFNoaWZ0ICsgNDog6Ieq5a6a5LmJ5oiq5Zu+77yM5YWJ5qCH5Lya5Y+Y5oiQ5Y2B5a2X5qCH5b+XCjMuIENvbW1hbmQgKyBTaGlmdCArIDU6IOiHquWumuS5ieaIquWbvu+8jOS8muacieS4gOS4quiZmue6v+ahhu+8jOWPr+S7peiHqueUsemAieaLqeaIquWbvuiMg+WbtAoKIyMjIOWmguS9leS/ruaUuSBNYWMg5oiq5Zu+5L+d5a2Y55qE5L2N572u77yfCgo+IE1hYyDmiKrlm77pu5jorqTmmK/kv53lrZjlnKjmoYzpnaLkuIrnmoTvvIzlpoLmnpzmiKrlm77lvojlpJrvvIzmoYzpnaLkvJrlvojmnYLvvIzmjqjojZDlnKjmoYzpnaLlu7rkuIDkuKogU2NyZWVuU2hvdHMg55qE5paH5Lu277yM5L+u5pS55oiq5Zu+6buY6K6k5L+d5a2Y55qE5paH5Lu244CCCgpgYGBiYXNoCi8vIOesrOS4gOatpe+8muS/ruaUuem7mOiupOi3r+W+hAp3cml0ZSBjb20uYXBwbGUuc2NyZWVuY2FwdHVyZSBsb2NhdGlvbiB+L0Rlc2t0b3AvU2NyZWVuU2hvdHMKCi8vIOesrOS6jOatpe+8muehruS/neabtOaUueeUn+aViApraWxsYWxsIFN5c3RlbVVJU2VydmVyCmBgYAoKIyMgU3BvdGxpZ2h0IOW/q+mAn+aQnOe0ogoKY29tbWFuZCArIHNwYWNlIOW/q+mAn+aQnOe0oueUteiEkeWGheeahOaWh+aho+OAgUFwcOOAgemCruS7tuetieetieOAggoKLSDmiZPlvIDmn5DkuKogQXBwCiAgIVtzcG90bGlnaHRdKC4uLy4uL3NpdGUvaW1hZ2VzL3Nwb3RsaWdodC5wbmcpCgotIOW9k+iuoeeul+WZqOS9v+eUqAogICFbc3BvdGxpZ2h0LWNhbGN1bGF0ZV0oLi4vLi4vc2l0ZS9pbWFnZXMvc3BvdGxpZ2h0LWNhbGN1bGF0ZS5wbmcpCgojIyBUT0RPOiDlvoXmm7TmlrAK";const ne={\u6D4F\u89C8\u5668:H,\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5:T,HTML:V,CSS:E,JavaScript:Q,Vue:U,React:F,Git:R,Webpack:x,\u9762\u8BD5\u9AD8\u9891\u624B\u6495\u4EE3\u7801\u9898:P,"\u5251\u6307 offer":_,"LeetCode \u7B97\u6CD5\u601D\u8DEF":$,\u4F01\u4E1A\u7B14\u8BD5\u9898:ee,\u667A\u529B\u9898:ae,"VScode Plugin":ie,"Chrome Plugin":oe,"Mac \u4F7F\u7528\u5C0F\u6280\u5DE7":ue},te=()=>{const{globalInfo:n}=m.useContext(c),[i,t]=m.useState("");return m.useEffect(()=>{fetch(ne[n.navKey]).then(o=>o.text()).then(o=>{t(o)}).catch(()=>{console.log("\u52A0\u8F7D\u5931\u8D25")})},[n.navKey]),{md:i}},y=n=>{const{width:i}=window.visualViewport;console.log("width",i),i<600&&n(!1)};var h={"md-content":"md-content__cxhdH","md-toc":"md-toc__2-cEA"};const le=()=>{const{md:n}=te(),i=m.useRef(null),t=(e,r)=>{var l,I;const v=((l=i.current)==null?void 0:l.childNodes)||[];for(let W=0;W<v.length;W++){const g=v[W];if(((I=g==null?void 0:g.dataset)==null?void 0:I.id)===e){g==null||g.scrollIntoView();return}}},[o,a]=m.useState(!1);return m.useEffect(()=>{y(a);const e=()=>{y(a)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),b("div",{className:h["md-content"],ref:i,children:[o&&u(M,{className:h["md-toc"],source:n,ordered:!0,onHashChange:t}),u(f,{children:n,remarkPlugins:[A]})]})};var Y={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(n){(function(){var i={}.hasOwnProperty;function t(){for(var o=[],a=0;a<arguments.length;a++){var e=arguments[a];if(!!e){var r=typeof e;if(r==="string"||r==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var v=t.apply(null,e);v&&o.push(v)}}else if(r==="object")if(e.toString===Object.prototype.toString)for(var l in e)i.call(e,l)&&e[l]&&o.push(l);else o.push(e.toString())}}return o.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(Y);var C=Y.exports;const me=window.visualViewport.width<600,re="page__Dt2Ur";var s={page:re,"page-header":"page-header__GJ261","page-header__ignore":"page-header__ignore__dKVOw","page-body__ignore":"page-body__ignore__kxMrJ","page-sider":"page-sider__z-B0u","page-mobile":"page-mobile__eqwZg"};const ve=()=>{const[n,i]=m.useState(()=>({navKey:"\u6D4F\u89C8\u5668"})),{Header:t,Sider:o,Content:a}=O;return u(X,{initState:n,children:b(O,{className:C(s.page,me&&s["page-mobile"]),children:[u(t,{className:C([s["page-header"],s["page-header__ignore"]]),children:u(w,{})}),b(O,{className:s["page-body__ignore"],children:[u(o,{className:s["page-sider"],children:u(z,{})}),u(a,{children:u(le,{})})]})]})})};p.createRoot(document.getElementById("root")).render(u(m.StrictMode,{children:u(ve,{})}));
