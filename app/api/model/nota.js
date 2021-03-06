var modelNota  =require('./schema/schema');

var Nota = function(){}

Nota.save = function(data, callback) {
	modelNota
		.create(data,function(err,data){
			if(err) throw err;
			callback(data);
		});
}

Nota.find = function(id,callback) {
	modelNota
		.findOne({_id:id})
		.exec(function(err,data){
			if(err) throw err;
			callback(data);
		})
}

Nota.findAll = function(callback){
	modelNota
		.find({})
		.exec(function(err, data){
			if(err) throw err;
			callback(data);
		})
}

Nota.update = function(id,nota,callback) {
	modelNota.findOneAndUpdate(
		{_id:id},
		{
			title: nota.title,
			description:nota.description,
			type:nota.type,
			body:nota.body
		}, 
		function(err,data){
			if(err) throw err;
			callback(data);	
		})
}

Nota.delete  = function(id, callback) {	
	modelNota.remove({_id:id},function(err,data){
		if(err) throw err;
		callback()
	})

}

module.exports = Nota;