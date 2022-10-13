const Mobile = require("../model/Mobile");

const getAllMobiles = async(req,res,next)=>{
    let mobiles;
    try
    {
      mobiles=await Mobile.find();
    }
    catch(err)
    {
      console.log(err);
    }
  
    if(!mobiles)
    {
         return res.status(404).json({message:"Not found mobile"});
    }
    else
    {
      return res.status(200).json({mobiles});
    }
}


const getById = async(req,res,next)=>{
  const id = req.params.id;
  let mobile;
  try{
    mobile = await Mobile.findById(id);
  }
  catch(err)
  {
    console.log(err)
  }
  if(!mobile)
    {
         return res.status(404).json({message:"Not found mobile"});
    }
    else
    {
      return res.status(200).json({mobile});
    }
  
}


const addMobile = async(req,res,next)=>
{
  const {brand,model,description,price,available,image} = req.body;
  let mobile;
  try{
    mobile= new Mobile({
      brand,
      model,
      description,
      price,
      available,
      image
    });
    await mobile.save();
  }
  catch(err)
  {
    console.log(err);
  }

  if(!mobile)
  {
    return res.status(500).json({message:"unable to create"});
  }
  else{
    return res.status(201).json({mobile});
  }
}


const updateMobile = async(req,res,next)=>{
  const id = req.params.id;
  const {brand,model,description,price,available,image} = req.body;
  let mobile;
  try
  {
    mobile = await Mobile.findByIdAndUpdate(id,{
      brand,
      model,
      description,
      price,
      available,
      image
    })

    await mobile.save();
  }
  catch(err)
  {
    console.log(err);
  }
  if(!mobile)
  {
    return res.status(404).json({message:"unable to update by this id"});
  }
  else{
    return res.status(200).json({mobile});
  }
}


const deleteMobile = async(req,res,next)=>{
  const id = req.params.id;
  let mobile;
  try
  {
    mobile = await Mobile.findByIdAndRemove(id);
  }
  catch(err)
  {
    console.log(err);
  }
  if(!mobile)
  {
    return res.status(404).json({message:"unable to delete by this id"});
  }
  else{
    return res.status(200).json({message:"product deleted"});
  }

}


exports.getAllMobiles=getAllMobiles;
exports.addMobile=addMobile;
exports.getById=getById;
exports.updateMobile=updateMobile;
exports.deleteMobile=deleteMobile;