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

router.post("/getAllUser", async (req, res)=>{
  let temp = await apiData.funcTable("func_getuser", `()`);
  if(temp.status){
    res.status(200).json({
      status:true,
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

router.post("/updateUser", async (req, res) => {
  let temp = await apiData.funcJSON(
    "func_updateuser",
    `(
      '${req.body.action}', ${req.body.id || 0}, '${req.body.name || ""}', '${req.body.email || ""}', '${req.body.password || ""}', '${req.body.username || ""}', '${req.body.role || ""}', '${req.body.status || ""}'
    )`
  );

  if (temp.status) {
    res.status(200).json(temp);
  } else {
    res.status(200).json(temp);
  }
});


module.exports = router;