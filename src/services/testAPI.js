export default {
  "apiIn": `$m.obj({
    data: $m.arr(1,30,"{name: $m.arr(1,30,'cstr',1)}")
  })`,
  "apiIn2": `$m.obj({
    data: $m.arr(1,30,{name: "tom")})
  })`,
  "apiIn3": `$m.obj({
    data: [{
      delegateName: $m.cstr(1,10),
      delegatelist_child: [{
        delegateID: $m.rint(1,1000),
        delegateName: $m.str(1,30),
      },{
        delegateID: $m.rint(1,1000),
        delegateName: $m.str(1,30),
      }]
    }]
  })`,
  "apiIn4": `$m.obj({
    data:$m.arr(1,30,'str_low',1)
  })`,
}


