

function getNewKbUrl(filterCount) {
    // rid 19990503
    const start = 19990503;
    let str = '';
    for (let i = 0; i < filterCount; i++) {
        str += getOneRidFilter(i + start);
    }
    const i = 307;
    const from = `http://0.0.0.0:5603/qmd/app/kibana#/dashboard/24c0d0a0-32f2-11e7-93a7-a394dcb1440d?_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'host-threat*',key:rid,negate:!t,params:(query:11000004,type:phrase),type:phrase,value:'11,000,004'),query:(match:(rid:(query:11000004,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'host-threat*',key:rid,negate:!t,params:(query:'19990503',type:phrase),type:phrase,value:'19,990,503'),query:(match:(rid:(query:'19990503',type:phrase))))),fullScreenMode:!f,options:(darkTheme:!f),panels:!((gridData:(h:20,i:'1',w:12,x:0,y:35),id:'16a9e6b0-32f1-11e7-a58c-111087c70159',panelIndex:'1',type:visualization,version:'6.6.1'),(gridData:(h:15,i:'2',w:12,x:0,y:0),id:a2c68060-32ef-11e7-a58c-111087c70159,panelIndex:'2',type:visualization,version:'6.6.1'),(gridData:(h:15,i:'3',w:36,x:12,y:0),id:cf2bdba0-32ef-11e7-a58c-111087c70159,panelIndex:'3',type:visualization,version:'6.6.1'),(gridData:(h:20,i:'4',w:24,x:24,y:35),id:'097127c0-32f0-11e7-a58c-111087c70159',panelIndex:'4',type:visualization,version:'6.6.1'),(gridData:(h:20,i:'6',w:12,x:0,y:15),id:'7f5aa1d0-32f2-11e7-93a7-a394dcb1440d',panelIndex:'6',type:visualization,version:'6.6.1'),(gridData:(h:20,i:'7',w:12,x:12,y:35),id:c0d1f870-32f2-11e7-93a7-a394dcb1440d,panelIndex:'7',type:visualization,version:'6.6.1'),(gridData:(h:20,i:'8',w:12,x:12,y:15),id:'8fafff80-32f2-11e7-93a7-a394dcb1440d',panelIndex:'8',type:visualization,version:'6.6.1'),(gridData:(h:20,i:'11',w:12,x:24,y:15),id:a3772b60-32f2-11e7-93a7-a394dcb1440d,panelIndex:'11',type:visualization,version:'6.6.1'),(gridData:(h:20,i:'12',w:12,x:36,y:15),id:e334b470-33ec-11e7-a7d9-3d88306c85bd,panelIndex:'12',type:visualization,version:'6.6.1'),(embeddableConfig:(columns:!(timestamp,src_ip,dst_ip,dst_port,classtype,category,target,rid),sort:!(timestamp,desc)),gridData:(h:40,i:'13',w:48,x:0,y:55),id:a81a1c00-32f1-11e7-a58c-111087c70159,panelIndex:'13',type:search,version:'6.6.1')),query:(query_string:(analyze_wildcard:!t,query:'*')),timeRestore:!f,title:host-threat-dashboard,viewMode:view)&_g=(refreshInterval:(pause:!t,value:0),time:(from:now%2FM,mode:quick,to:now%2FM))`;
    return from.slice(0, i) + str + from.slice(i);
}

function getOneRidFilter(rid) {
    return `type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'host-threat*',key:rid,negate:!t,params:(query:'${rid}',type:phrase),type:phrase,value:'${rid.toLocaleString()}'),query:(match:(rid:(query:'${rid}',`;
}

console.log(getNewKbUrl(200));