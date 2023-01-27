
export var VAPIhost = 'http://vogel.vhpportal.com/';//'https://localhost:5000/'; //

/* Pack
  collect: '' (group of data)
  store: '' (sub the group)
  db: '' (actual data)
  methd: '' (QUERY | REMOVE | INSERT | UPDATE)
  options: {
    QUERY:{
      query:{id:'itemid'}
    }
    REMOVE:{
      query:{id:'itemid'}
      multi: TRUE | FALSE
    }
    UPDATE:{
      query:{id:'itemid'}
      update:{$set:item}
      options:{}
    }
    INSERT:{
      docs: [items] || {item}
    }
  }

*/
export var vapiPack = (method='',opts={})=>{
  return{
    collect:'apps',
    store:'SUMTRACKER',
    db:'mtracker',
    method:method,
    options:opts
  }
}
export var SENDrequestapi = (pack,{user='',pswrd='',request=''},route='LOGIN',url=VAPIhost+'api/')=>{
  return new Promise((res,rej)=>{
    let options={
      method:'POST',
      headers:{
        'Accept':'application/json'
      },
      body:JSON.stringify({
        access:{
          user:user,
          pswrd:pswrd,
          coid:'01',
          request:request
        },
        pack:pack
      })
    }
    fetch(url+route,options)
    .then(response=>{return response.json()})
    .then(data=>{return res(data);})
    .catch(err=>{return res(false);})
  });
}
