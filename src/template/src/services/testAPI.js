export default {
  "apiIn": `$m.obj({
    name: $m.cstr(2,4),
    age: $m.rint(10,30),
    scores: $m.arr(2,2,"{
      course: 'str(3,10)',
      score: 'rint(1,100)' 
    }")
  })`,
  "apiIn2": `$m.obj({
    data: [{
      delegateName: $m.cstr(1,10),
    }]
  })`,
  "apiIn3": `$m.obj({
    data:$m.arr(1,30,'str_low',1)
  })`,
}


