import express from 'express';
import AliranKungfuController from './tokoController.js';

let route = express.Router();

class trc extends AliranKungfuController(
    route.get('/alirankungfu',function(req,res){
        AliranKungfuController.getAliranKungfu(function(err,respon){
            if (err) {
                throw err;
            }
            res.json(respon);
        });
    ///
    }),
    route.post('/alirankungfu',function(req,res){
        let alirankungfu = req.body;
        tr.addAliranKungfu(alirankungfu,function(err,respon){
            if (err) {
                throw err;
            }
            res.json(respon);
        });

    })
)  
 
    
    
    
    
    
    
    
    



