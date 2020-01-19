global.it = function(name,c){var s = 
'pass'; try{c()}catch(err){s = 'fail'; console.log(err)}; console.log(name.concat(':',s))}