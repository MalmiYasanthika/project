const Inquiry = require ('../model/Inquryschema');

//for create inquiry
exports.createInquiry = async function(req,res){
    var newInquiry = new Inquiry(req.body);

    console.log(req.body)
    try{
        newInquiry.save(function(err,inquiry){
            if(err){
                res.status(400).json({
                    status:false,
                    data:'Unable to create a inquiry form'

                });
            }res.status(200).json({
                
                status:true,
                data:inquiry

            });

        })
    }
    catch(err){
        res.status(404).json({
            status:false,
            message:err.message
        })
    }
    
}

//for delete inquiry
exports.deleteAInquiry = function(req, res) {
    
    try{
        Inquiry.findByIdAndDelete({_id: req.params.inquiryId}, function(err, inquiry) {
           if(err) {
               res.status(400).json({
                   status: false, 
                   data: 'Unable to delete!'
               });
           }
           return res.status(200).json({
               status: true, 
               data: 'Task removed successfully!'
           });
       })
    }catch(err){
       res.status(404).json({
           status: false,
           message: err.message
       })
   }

   };

   //for find a single inquiry
   exports.findAInquiry =async function(req,res){
    try{   
        Inquiry.findById(req.params.inquiryId, function(err, inquiry) {
    
            if(err) {
                res.status(400).json({
                    status: false, 
                    data: 'Invalid event!'
                });
            }
            res.status(200).json({
                status: true, 
                data: inquiry
            });
        })
    }catch(err){
        res.status(404).json({
            status: false,
            message: err.message
        })
    }
};

//to update a inquiry
exports.updateAInquiry =async function(req, res) {
    try{

        console.log(req.body);
        
        Inquiry.findByIdAndUpdate({_id: req.params.inquiryId}, req.body, {new: true}, function(err, inquiry) {
         if(err) {
             res.status(400).json({
                 status: false, 
                 data: 'Unable to update!'
             });
         }
        return res.status(200).json({
             status: true, 
             data: inquiry
         });
     })

    }catch(err){
     res.status(404).json({
         status: false,
         message: err.message
     })
 }
 
 };

 //to get all inquiries
 exports.getAllInquiry = async function(req,res){
    try{
        await Inquiry.find({ },function(err, inquiry) {
          
        //**********if do you want to paginate un comment this*************
        //   const page = parseInt(req.query.page)||1;
        //   const limit = parseInt(req.query.limit)||10;
        //   const startIndex = (page-1)*limit
        //   const endIndex = page * limit
        //   const result = {};
        //   if(endIndex< inquiry.length){
        //       result.next = {
        //           page: page + 1,
        //           limit: limit
        //       }
        //   }
        //       if (startIndex > 0){
        //           result.previous = {
        //               page: page - 1,
        //               limit: limit
        //           }
        //       }
        //   result.results = inquiry.slice(startIndex,endIndex);
          if(err) {
              res.status(400).json({
                  status: false, 
                  data: 'Invalid Request !'
              });
          }
          res.status(200).json({
              status: true,
              data: inquiry
              //data: result   //**********if do you want to paginate uncomment this && comment above line*************
              
          });   
      })
  }catch(err){
      res.status(404).json({
          status: false,
          message: err.message
      })
  }
   
}
