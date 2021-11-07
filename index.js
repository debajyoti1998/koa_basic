const Koa=require("koa");
const json = require("koa-json")
const KoaRouter = require("koa-router");
const render = require("koa-ejs")
const path = require("path")
const app=new Koa();
app.use(json())

const router = new KoaRouter()
// const countries = ['India','New Zealand']

// setting the router middleware
render(app,{
    root:path.join(__dirname,"views"),
    layout:"layout",
    viewExt:"html",
    cache:false,
    debug:false
})

app.use(router.routes()).use(router.allowedMethods())
router.get('/',async ctx=>{
    await ctx.render('index')
})


// router.get('/test',async ctx => ctx.body={'msg':"hello Hyper"})
// router.get('/',async ctx=>{
//     await ctx.render('index',{
//         title:'country i love',
//         countries:countries
//     })
// })

// app.use(async ctx=>ctx.body={msg:'hello world'})

router.get("/pk/:id",ctx=>{
    ctx.body={
        name:ctx.params
    }
});

router.post("/pk",ctx=>{
    ctx.body=ctx.request.req;
    return (ctx.status=200)
});



app.listen(5000,()=>{
    console.log(`server started`)
})