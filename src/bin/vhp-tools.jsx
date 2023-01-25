export function MergeObject(obj={},start=false,mobj={},insert=false,copied=false){
  let tobj;
  if(!copied){tobj=JSON.parse(JSON.stringify(obj));}
  else{tobj=obj}

  for(let o in tobj){
    if(start){
      if(o===start){start=false}
      tobj[o]=tobj[o].constructor== Object?MergeObject(tobj[o],start,mobj,insert,true):tobj[o];
    }else{
      if(tobj[o]!==undefined){
        if(mobj[o]!=undefined){
          tobj[o] = mobj[o].constructor !== Object?mobj[o]:MergeObject(tobj[o],start,mobj[o],insert,true);
        }
      }
    }
  }
  return tobj
}
