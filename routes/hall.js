var router = require('koa-router')();

router.get('/getRoomList', async function (ctx, next) {
	console.log('aaaaaaaaaaa');
  let loginbean = ctx.session.loginbean;
  console.log('loginbean:'+loginbean);
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }
  ctx.body=[];
})

router.get('/newroom', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }
  let roompwd = ctx.qurey.roompwd;
})


module.exports = router;