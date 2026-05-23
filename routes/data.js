const router = require("express").Router();
const apiData = require("./dataProcess");

router.get("/", (req, res) => {
  res.status(200).json({ message: "REST APIs is working" });
});

router.post("/getModbusTemp", async (req, res)=>{
  let temp = await apiData.funcTable("func_getmodbustemp", `('${req.body.sn}')`);
  if(temp.status){
    res.status(200).json({
      status: true,
      data: temp.data
    });
  }
  else{
    res.status(200).json({
      status: false,
      mess: "DB Err"
    });
  }
});

module.exports = router;