const fs = require("fs");

function generateRoute(name){

const content = `
const express = require("express");
const router = express.Router();

router.get("/",()=>{});
router.get("/:id",()=>{});
router.post("/",()=>{});
router.put("/:id",()=>{});
router.delete("/:id",()=>{});

module.exports = router;
`;

fs.writeFileSync(`${name}.route.js`,content);

console.log("Route Created");
}

module.exports = generateRoute;