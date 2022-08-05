const fs=require('fs')
const axios=require('axios')
const input=require('readline-sync')

// let x=input.question("enter the number:-")

async function meraki_opearation() {
    if (fs.existsSync("courses.json")) {
        let data= await fs.readFileSync("courses.json",'utf-8')
        let result=JSON.parse(data)
        console.log("Id numbers", "\t Id")
        let number=1
        for (let i of result) {
            console.log(number,"\t\t",i.id)
            number++
        }
        let n=input.questionInt("enter the id number: ")
        console.log(result[n-1])


    }
    else {
        let res=await axios.get('https://api.merakilearn.org/courses')
        fs.writeFileSync("courses.json", JSON.stringify((res.data),null,3))
        console.log("Id numbers", "\t Id")
        let number=1
        for (let i of res.data) {
            console.log(number,"\t\t",i.id)
            number++
        }
        let n=input.questionInt("enter the id number: ")
        console.log(res.data[n-1])
    }
}
meraki_opearation()
