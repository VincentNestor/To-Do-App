(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/lightbulb.db3bc4d3.jpg"},function(e,t,a){e.exports=a.p+"static/media/bubble.47afcf6b.jpg"},function(e,t,a){e.exports=a.p+"static/media/bubblesSoap.c53df244.jpg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm.3f83c751.jpg"},function(e,t,a){e.exports=a.p+"static/media/Bridge.c82b34b9.jpg"},function(e,t,a){e.exports=a.p+"static/media/sky.1aacd0d3.jpg"},,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),o=(a(21),a(1)),c=a(4),s=a(5),d=a(13),u=a(6),p=a(14),m=(a(22),a(23),function(e){var t=e.task,a=t.work,n=t.id,r=t.important,i=t.done;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{style:i?{opacity:".6"}:r?{backgroundColor:"rgb(243, 239, 190)"}:null},l.a.createElement("div",{className:"icons"},l.a.createElement("i",{style:r?{color:"yellow"}:null,onClick:function(){return e.important(n)},className:"far fa-star"}),l.a.createElement("i",{style:i?{color:"green"}:null,onClick:function(){return e.done(n)},className:"far fa-check-circle"}),l.a.createElement("p",{className:"work"},a),l.a.createElement("button",{className:"remove",onClick:function(){return e.delete(n)}},"X"))))}),k=a(7),g=a.n(k),b=a(8),f=a.n(b),h=a(9),v=a.n(h),E=a(10),y=a.n(E),w=a(11),C=a.n(w),z=a(12),j=a.n(z),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={activeSelecting:!1,name:"",work:"",tasks:[]},a.integration={counterId:3,name:"",motivCounter:0,tasksKillCounter:0,tasksKillMotiv:["","Pi\u0119kny pocz\u0105tek","Niesamowite, tak trzymaj","Tripple-kill","Sukces","Pi\u0119\u0107 zada\u0144 za tob\u0105, rz\u0105dzisz","Masz nadprzyrodzone si\u0142y"],tasksKill:["","Jedno zadanie, \u015bwietnie","Dwa zadania, to pestka","Trzy zadania, do dzie\u0142a","Cztery, nic strasznego","Troch\u0119 jest do zrobienia"]},a.delete=function(e){var t=Object(o.a)(a.state.tasks);t=t.filter(function(t){return t.id!==e}),a.integration.tasksKillCounter--,a.setState({tasks:t})},a.addWork=function(e){a.setState({work:e.target.value})},a.addImportant=function(e){var t=Object(o.a)(a.state.tasks);t.forEach(function(t){t.id===e&&(t.important=!t.important)}),a.setState({tasks:t})},a.doneTask=function(e){var t=Object(o.a)(a.state.tasks);t.forEach(function(t){t.id===e&&(t.done?(t.done=!t.done,a.integration.motivCounter--,a.integration.tasksKillCounter++):(t.done=!t.done,a.integration.tasksKillCounter--,a.integration.motivCounter++))}),a.setState({tasks:t})},a.counter=2,a.addTaskKeyPress=function(e){if("Enter"===e.key&&a.state.work){var t={id:a.integration.counterId,work:a.state.work,important:!1,done:!1};a.integration.tasksKillCounter++,a.setState(function(e){return{tasks:[].concat(Object(o.a)(e.tasks),[t]),work:""}}),a.integration.counterId++}},a.handleChangeName=function(e){a.setState({name:e.target.value})},a.addNameKeyPress=function(e){"Enter"===e.key&&(a.integration.name=a.state.name,a.setState({}))},a.resetTasks=function(){var e=Object(o.a)(a.state.tasks);e=e.filter(function(e){return!0!==e.done}),a.integration.motivCounter=0,a.setState({tasks:e})},a.changeWallpaper=function(e){var t=e.target.getAttribute("data-wallpaper"),a=document.querySelector(".App");console.log(t),"bridge"===t?a.style.backgroundImage="url(".concat(C.a,")"):"sky"===t?a.style.backgroundImage="url(".concat(j.a,")"):"bubble"===t?a.style.backgroundImage="url(".concat(f.a,")"):"bubbleSoap"===t?a.style.backgroundImage="url(".concat(v.a,")"):"lightbulb"===t?a.style.backgroundImage="url(".concat(g.a,")"):"butterfly"===t&&(a.style.backgroundImage="url(".concat(y.a,")"))},a.addActive=function(){a.setState({activeSelecting:!a.state.activeSelecting})},a.componentWillMount=function(){window.addEventListener("keypress",a.addTaskKeyPress),a.integration.name||window.addEventListener("keypress",a.addNameKeyPress)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.integration,a=t.tasksKill,n=t.name,r=t.tasksKillCounter,i=t.tasksKillMotiv,o=t.motivCounter,c=this.state,s=c.tasks,d=c.work,u=c.activeSelecting,p=s.map(function(t){return l.a.createElement(m,{key:t.id,delete:e.delete,important:e.addImportant,done:e.doneTask,task:t})});return console.log(r),this.integration.name?l.a.createElement("div",{className:"App"},l.a.createElement("div",{onClick:this.addActive,style:u?{zIndex:10}:null,className:"wallpapers"},l.a.createElement("div",{"data-wallpaper":"bridge",onClick:this.changeWallpaper}),l.a.createElement("div",{"data-wallpaper":"sky",onClick:this.changeWallpaper}),l.a.createElement("div",{"data-wallpaper":"bubble",onClick:this.changeWallpaper}),l.a.createElement("div",{"data-wallpaper":"bubbleSoap",onClick:this.changeWallpaper}),l.a.createElement("div",{"data-wallpaper":"lightbulb",onClick:this.changeWallpaper}),l.a.createElement("div",{"data-wallpaper":"butterfly",onClick:this.changeWallpaper})),n?l.a.createElement("h3",{className:"welcome"},"Mi\u0142o ci\u0119 widzie\u0107, ",n):null,l.a.createElement("label",{className:d?"active":"",htmlFor:""},l.a.createElement("input",{type:"text",placeholder:"W porz\u0105dku, jakie plany na dzisiaj?",value:this.state.work,onChange:this.addWork}),l.a.createElement("section",null,l.a.createElement("i",{className:"far fa-edit"}))),l.a.createElement("div",{className:"cont"},l.a.createElement("h4",null,s.length<=4?a[r]:a[a.length-1]),s.length?l.a.createElement("span",{className:"reset"},l.a.createElement("p",null,o?i[o]:null),l.a.createElement("span",{onClick:this.resetTasks},o?l.a.createElement("p",null,"Reset"):null)):null),l.a.createElement("ul",null,p),l.a.createElement("div",{className:"selectingWallpaper"},l.a.createElement("p",{onClick:this.addActive},"Select background")," ",l.a.createElement("p",null,"Inspired by ",l.a.createElement("a",{target:"blank",href:"https://inspiringtodoapp.com/"},"inspiringtodoapp.com/")))):l.a.createElement("div",{className:"App"},l.a.createElement("h3",{className:"selectName"},"Cze\u015b\u0107, podaj imi\u0119 :)"),l.a.createElement("label",{htmlFor:""},l.a.createElement("input",{type:"text",onChange:this.handleChangeName})))}}]),t}(n.Component);i.a.render(l.a.createElement(N,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.8ea6b9cc.chunk.js.map