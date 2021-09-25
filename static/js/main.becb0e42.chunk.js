(this["webpackJsonptoast-app"]=this["webpackJsonptoast-app"]||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var c,o,i,a,r,s,l,A,b,u,d,g,h=n(0),f=n.n(h),p=n(7),j=n.n(p),m=n(6),x=n(4),O=n(3),k=n(2),w=[-45,-20,4,10,15,18,20,24,25,35,45,60,100,260,500],E={colors:{darkOrchid:"#9a40d3",minionYellow:"#f4e048",flamePea:"#e25837",shamrock:"#37e29a",white:"#ffffff",black:"#000000",main:"red"}},R=k.b.div(c||(c=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ","px;\n"])),w[12]),v=k.b.div(o||(o=Object(O.a)(["\n  width: ","%;\n  height: ","px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n"])),w[12],w[14]),B=k.b.label(i||(i=Object(O.a)(["\n  display: flex;\n"]))),y=k.b.p(a||(a=Object(O.a)(["\n  margin: 0;\n"]))),C=k.b.select(r||(r=Object(O.a)(["\n  margin-top: ","px;\n  height: ","px;\n"])),w[3],w[8]),L=n(1),Q=Object(h.createContext)(),Z=function(e){var t=e.children;return Object(L.jsx)(Q.Provider,{value:{theme:E},children:t})},J=k.b.div(s||(s=Object(O.a)(["\n  position: absolute;\n  margin: ","px;\n\n  top: ",";\n\n  bottom: ",";\n\n  left: ",";\n\n  right: ",";\n"])),w[3],(function(e){switch(e.position){case"TopRight":case"TopLeft":return 0;default:return"initial"}}),(function(e){switch(e.position){case"BottomRight":case"BottomLeft":return 0;default:return"initial"}}),(function(e){switch(e.position){case"TopLeft":case"BottomRigth":return 0;default:return"initial"}}),(function(e){switch(e.position){case"BottomLeft":case"TopRight":return 0;default:return"initial"}})),I=k.b.div(l||(l=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ","px;\n  height: ","px;\n  width: ","px;\n  border-radius: ","px;\n  margin: ","px;\n"])),w[4],w[11],w[13],w[4],w[2]),P=k.b.p(A||(A=Object(O.a)(["\n  font-size: ","px;\n  text-align: left;\n  height: ","px;\n  margin: 0px;\n  margin-left: ","px;\n"])),w[5],w[6],w[4]),F=k.b.div(b||(b=Object(O.a)(["\n  display: flex;\n  width: ","%;\n  height: ","%;\n  align-items: center;\n"])),w[12],w[12]),T=k.b.div(u||(u=Object(O.a)(["\n  cursor: pointer;\n  position: relative;\n  right: ","px;\n  top: ",'px;\n\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    width: ',"px;\n    height: ","px;\n    background-color: ",";\n  }\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"])),w[6],w[1],w[7],w[2],(function(e){return e.isBlack?"black":"white"})),U=k.b.img(d||(d=Object(O.a)(["\n  width: ","px;\n  height: ",";\n"])),w[9],w[9]),V=function(e){var t=e.toastList,n=e.position,c=e.checkValue,o=Object(h.useState)(t),i=Object(x.a)(o,2),a=i[0],r=i[1];Object(h.useEffect)((function(){r(Object(m.a)(t))}),[t]),Object(h.useEffect)((function(){var e=setInterval((function(){c&&t.length&&a.length&&s(t[0].id)}),2e3);return function(){clearInterval(e)}}),[t,c,a]);var s=function(e){var n=a.findIndex((function(t){return t.id===e})),c=t.findIndex((function(t){return t.id===e}));a.splice(n,1),t.splice(c,1),r(Object(m.a)(a))};return Object(L.jsx)(J,{position:n,children:a.map((function(e,t){return Object(L.jsxs)(I,{style:{backgroundColor:e.backgroundColor},children:[Object(L.jsxs)(F,{children:[Object(L.jsx)(U,{src:e.icon}),Object(L.jsx)(P,{style:{color:e.color},children:e.description})]}),Object(L.jsx)(T,{isBlack:e.description.includes("Warning"),onClick:function(){return s(e.id)}})]},t)}))})},G=function(e){var t=e.toastList,n=e.position,c=e.checkValue,o=e.isWarning,i=Object(h.useState)(!1),a=Object(x.a)(i,2),r=a[0],s=a[1],l=Object(h.useState)("".concat(Date.now())),A=Object(x.a)(l,1)[0];return Object(h.useEffect)((function(){var e=document.createElement("div");return e.id=A,document.getElementsByTagName("body")[0].prepend(e),s(!0),function(){return document.getElementsByTagName("body")[0].removeChild(e)}}),[A]),r?j.a.createPortal(Object(L.jsx)("div",{children:Object(L.jsx)(V,{toastList:t,position:n,checkValue:c,isWarning:o})}),document.getElementById(A)):null},D=k.b.button(g||(g=Object(O.a)(["\n  cursor: pointer;\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  background-color: ",";\n  border: none;\n  &:hover {\n    background-color: ",";\n  }\n"])),w[12],w[8],w[3],E.colors.white,(function(e){switch(e.label){case"Success":return"".concat(E.colors.shamrock);case"Error":return"".concat(E.colors.flamePea);case"Info":return"".concat(E.colors.darkOrchid);case"Warning":return"".concat(E.colors.minionYellow);default:return"".concat(E.colors.white)}})),S=function(e){var t=e.label,n=e.className,c=e.handleClick;return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(D,{label:t,style:{className:n},onClick:c,children:t})})},z=[{id:1,type:"success",label:"Success"},{id:2,type:"error",label:"Error"},{id:3,type:"info",label:"Info"},{id:4,type:"warning",label:"Warning"}],N=function(){var e=Object(h.useContext)(Q).theme,t=Object(h.useState)(!1),n=Object(x.a)(t,2),c=n[0],o=n[1],i=Object(h.useState)([]),a=Object(x.a)(i,2),r=a[0],s=a[1],l=Object(h.useState)("TopRight"),A=Object(x.a)(l,2),b=A[0],u=A[1],d=null;return Object(L.jsxs)(k.a,{theme:e,children:[Object(L.jsx)(v,{children:Object(L.jsxs)(R,{children:[Object(L.jsx)("div",{children:z.map((function(t){return Object(L.jsx)(S,{label:t.label,handleClick:function(){return function(t){var n=Date.now();switch(t){case"success":d={id:n,description:"Success toast example",backgroundColor:"".concat(e.colors.shamrock),color:"".concat(e.colors.white),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACQElEQVRoge3ZP2gUQRiG8b0kkqiISkACSlCwkTQpTCFiBAWLgJIqrSlNIwpWFkGw0dIUAdFK0lhYaBMhFloIoiBaiAgWIkEF8Q8hosQkP4s78ZzbM5nzcqOwT7nMfN/zsjPL7myWFRQUFBQUNE4ptcBKoJRl2cEsy7qyLJsplUpLiZUaA5N+cS21T0PgqN9ZRFtqryiwGbNBkIepvaLB1Zy7MZDaKwocwnIQ5GJqryiwAS+DEC+wPrVbFJgIQizhQGqvKLCvsheqmUjtFQU68SwI8QqbUrtFgQtBiGUcSe0VBfqxEAS5ktorCnTgcRDiDbamdosC42oZTu0VBfbgaxBiKrVXFGjD/SDEe2xL7RYFzuQsqZHUXlFgF+aDELdSe0VRWVL3ghCfsX2tGg5iBtfR28S6YzlLarRZ9cNmnfhY1egt9jahbi/mghDTzXCu17Bb7ffAPI79Zd3poOZcM+92vaaTalnEyQbrHc+pN9Zs77zGJZzLaQ6X0RFRqwcfghp3lY96WgNG1b7QwW2rfMXGjWDuF+xea/c8kcP4lBPmKXasMHckZ97pVrnnCfUpf+iEzKK/zpxuvAvGP0B7q/1DsR48ygkzh6Gc8VPBuG/oS+FeAzbiZk6Y7zhRNW4oZ8zZlO41oB2XckRVrm/B6+D6E6xL7Z4LTikf14SER50L6uyjfwYMKz9O/8T51J6rAgNqn04/eY6u1I6rBjvVnkstYX9qt2gqm/xOVZDx1E4No/yONuh/+wVQUFBQ0FJ+AMrBgcy5jxXMAAAAAElFTkSuQmCC"};break;case"error":d={id:n,description:"Error toast example",backgroundColor:"".concat(e.colors.flamePea),color:"".concat(e.colors.white),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACoUlEQVRoge2Zz0tVQRTHP+pDC4TCFkEkrVpp1C5QK9e1ahEuokU//4F2QboR1Fb9AUW2kFZRRNBvEF8SLWxTrZI28VzZQk2FRJ+LObeZN2/um6tw7xtjPjC865lzzj1fZ97c+2YgEolEIoHQDkwAC0A1sFYBxqVGL+MBFOxrY1mEVMS5L4tzwQygR8ZLohpgFih7rovGrO8frZ6gLSMo7TpYnIoDwllfyROwZ/BNrT1DoxFpKayKneGcKf/NiEQhoRGFhEYUEhpRSGhEIaERhYRGFJIzt1DbUQvAzd0mafZP3RPAplHHJtBr9N8B/mZJ1CwhbcAQaofG3sealb428b2UJWHeQj4DnyzbAeAj7s04s82Iry8fkL+QJcnfadgei20FtdPZBxyR1i+2FfF5ZMR1im3JdaO8hXyT/Cfl71ZgVWznGsQNis8f9CJ1Smxfm7FqvZXP6/LZAnTI9c8GcUnfPrSQG1bOGvIekePAGmq3cgI4iprnVWAauAj0AIel9YhtWny+S8w9ybEmOesoYtW6Amzg/3L72gZwOe0mRS2/p4HnwLrc7z7wEJgHlo06loEfwAPxqaKeI88kRyrJscJALuXXMy/367bsJeo3ELvF93eWxGPkczhzCPXF/pLSb59CuZ4PHSmxcy4h7SKmkhK029YlQuZS+u0RcU3xYzsRUjRvUMXYrx0uIUNie1dAXZk5AzwBFlHFvbD6XUJeoheAp8DZnGv0MoI+9arK9Ra1T3ZbyKAVk8TdLaBeJxekiHVgGDXvb4ttEf3KbgrpRY/ciMQMo5fu8wXVXsMHuflVw1YCXot9FRhFCxlFv4u9onZJvib297lX7SD5z9qv4/uBSdJXvUnxMTmIHsnCKaN+V6TRD0wBv6RN0fjMvwzMbANfq2qPqkV5AgAAAABJRU5ErkJggg=="};break;case"info":d={id:n,description:"Info toast example",backgroundColor:"".concat(e.colors.darkOrchid),color:"".concat(e.colors.white),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADuklEQVRoge2ZXYhUdRjGn/9+6O7GGskG2UVRbaErWQihEkRmQVQWlRGbN0GUEkVCJV55L11E5YUXSlYXgjfRhwlFUZlgRl2sibJUENOXX1sprsrK/Lw4z2H+4ex6zu6cOZPMA8M778P5v+/zzv/7TFADAXRIWiLpfknLJV0r6RpJXZL+ljQi6QdJH4QQ9jUyd0MAdAJPAQfJjh+B1UAoW78kCbgR2B8J/A3YDDwEDAJXAL1+bhXwJnA8ev4r4Kayi3gE+CcqYA0wK0O72cBa4ITbHgPubIbmemIeBSYsZBcwYH6Wh9kO4GfgtD8HgO3Ag0Cnnx0APnWMM8CyZhdxq8UBvJ2Oc2AY+DXD/DgM3Oc2XcA75v8Crm9WEQHY68QfWkgnsC0SOgI8D8wH+oB+4A7gVWDUz1SBjY7XDXxmfnezChmOxvVV5jabGyeZJ5OuRC58PbVhudH8ALU5s7LoIjpIxj3AWnNP2D8H3Jsj1sMuppq2cy8CfF1UDWnye5zoiH/ZHuAXcy9NI94Gtz3k4dnjXqkCg0XUkCZ+zYm32H/c/kGgaxrxuoGfHOMBc2/ZX5cnVkfO3EttP7Z9zHZbCOF8zlgKIUxI2mp3lW06rG7PGy8zSJZHgCH7h+wvnEHMJY4xYn/Q/neN0l0v6TknmWP/pP3+GcQccIwT9ufaH80TJ+/QOmr7L4CkfkmVEMKpnHFiYNttW7XtyRMkbyHPSapEfsXcTHCD7Z+282yP5QmSa6UJIeyWdF2eNhmwwvZ72/m2lTrPToq8PdJQeMl+1u5Htummurf5iqaJaEP8neTUPDtaGReVrS8TgJXUzlvD5p62v79sfZcEyXnt5aiIreavBP4w92TZOqcEsBjYRw3bfUwJwE5zn9Mq9/h6ANZFvTAGPOMCArUz3HHKvr9PBWBT1AvvAleb77MPcBa4q2ytkwJ4wUKrwIsRv4LayXcMuLtMnVMCWEjyUgHgFXN9wHtRD+0Bbilb65QAPrHYXZ4LvcCX5k6T3Ahbd2JLEnCbBU+kvzi1S1MFWFC2xkyIJvj79oeA8yQvKBaXrS8zgG9dyGr7r9t/o2xtmeH5cNbCbzZ3wP5Q2foyA5gTrUq95sZJbpi5X1JkQVHH+L70SwjhjL/2ShqbzkuKLCj1PtJItAtpNbQLaTUUVciYpHFJStdg87nejLQESP5+OxLtJ6PA0ku3bKONNv5XAL7gYuwpKl9h18xoyf1vwhAKyVn4hhiMovNcNjt7IZecGJMNsUajyB75pg5X2GS/AEDd6YVIDQa3AAAAAElFTkSuQmCC"};break;case"warning":d={id:n,description:"Warning toast example",backgroundColor:"".concat(e.colors.minionYellow),color:"".concat(e.colors.black),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADaUlEQVRoge2ZbWiNYRjHfzuzYd6JJsy8x0gUEUuT4oOXD3wYipoo3yjt05bXiXnZlkXEV6IoIkkpxActPmCLKMa8NMzbMGPHh+s6Pac55zzPfe+c5zHtV3d7uu/ruu//fa7nuV+uQRddpIR0H8ZYBeQBD3wYK2VMB35rmRmwFmvSgJtAWMttret0rEYm8EZLWOs6FVnAc0R8EbBOn18CvQLUZcxORPhdIKTljtbtCFCXESOAZkR0flT9bKAN+AbkBqDLmDPIJE7GaDulbad9VWTBHJxffWSM9uHAV2Qy83zUZUQIqEFEbk1gt01t7uHPhmzMBkTgCxKvTD2BZ2q73gddRvQFXiPiCj3Yr1Tbt0D/FOoy5gDmu/cN9dmfKlGmjAV+IOepGQZ+09TnJzAhBbqMuYT8ssctfE+o78WkKrJgkQr5BGTHaM8EBmjJjNGerb5h7SsQMoA6FVEcx6YU5/RbGsemWNvrtE/f2awCngDd49hE9oywPsciE3ikNpuSrNGVgcB7HXxpAjsvEwFYpjZNwGAbQSEbJ2A3MplrwAXLPqI5D1xB9hTfTsd5QCvwC5jiYus1IgCTkKX4FzDVVJRNRKqBbsBh4L6FfzxqgaPI+auaFF+LVyC/7gdgkAd7k4iALNONar/cRJhJRHoA5fpcinzsyaYJ2K7PB5ErsydMJrIFGIW8AscM/Ew5gryyOcgSn1SGAV+QkC808DN9tSLMV59mZEKueI3IHqA3zjKZaiLLehawK1mdzkKury3AeENf24gAjEFO1W3AXDdjt4ikAVX6twJ4bCimIzyNGrsS+80bgLU42cJ+Fv4diQhAH+CV+q+x8Afkm2jAyRbaUIIzkRLLPorUv0E1GVOmHdRgH9YMnPuI7RE9OjtTZuo8GviOfGj5LrZ+EMlStgDjTBzPET9bGBSRLOVZrw4FGG5GCdiL842Uu9i6kYOTUy5o39j+3U9Hljp04PoODh59T+/oNbYe2KfPh5ATeFw2IjOux+DAloAKnIhUJKG/LERbGNEak+gjtJdsoRdygQVaYiW1bShENDYimv+iSg1u8e//r+86orWyfcNE5Jppmi0MikiWshWYHN1wGftsYVBEspRXIxVLtOIzMDQgUTYMAT4i2henAQ+RDEZnpjZEau7efvMuaAFd/Lf8AZnN3XplrOEyAAAAAElFTkSuQmCC"};break;default:s([])}s([].concat(Object(m.a)(r),[d]))}(t.type)}},t.id)}))}),Object(L.jsxs)(B,{children:[Object(L.jsx)("input",{type:"checkbox",value:c,onChange:function(){o(c=!c)}}),Object(L.jsx)(y,{children:"Auto close"})]}),Object(L.jsxs)(C,{value:b,onChange:function(e){u(e.target.value)},children:[Object(L.jsx)("option",{value:"TopRight",children:"Top Rigth"}),Object(L.jsx)("option",{value:"TopLeft",children:"Top Left"}),Object(L.jsx)("option",{value:"BottomLeft",children:"Bottom Rigth"}),Object(L.jsx)("option",{value:"BottomRight",children:"Bottom Left"})]})]})}),Object(L.jsx)(G,{toastList:r,position:b,checkValue:c,label:z.label})]})};j.a.render(Object(L.jsx)(f.a.StrictMode,{children:Object(L.jsx)(Z,{children:Object(L.jsx)(N,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.becb0e42.chunk.js.map