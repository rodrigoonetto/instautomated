import React, { useState, useRef, useEffect } from 'react';
import api from '../services/api'

import { Badge, Alert, Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';



export default function Tools() {

  const [generated, setGenerated] = useState(false)
  const CodeArea = useRef(null);
  const [usersLimit, setUsersLimit] = useState('')
  const [delayInSeconds, setDelayInSeconds] = useState('')
  const [startingFrom, setStartingFrom] = useState('')
  const [option, setOption] = useState('')
  const [error, setError] = useState(false)
  const [message, setMessage] =useState('')
  const [unfollowex, setUnfollowex] = useState([])
  let unfollowArray=[]

  useEffect(() => {
    getUserData()

}, []);

  const getUserData = async () => {
    try {
      
        const userResponse = await api.get(`/user/${localStorage.getItem('user_id')}`)
        
        let unfollowArray=[]
        setUsersLimit(userResponse.data.usersLimit)
        setDelayInSeconds(userResponse.data.delay)
        setStartingFrom(userResponse.data.startingFrom)
        for(let i=0; i<userResponse.data.unfollowExceptions.length; i++){
            unfollowArray.push(userResponse.data.unfollowExceptions[i].user)
        }
        setUnfollowex(unfollowArray)
        console.log(unfollowArray)
        console.dir(unfollowex)


        
    } catch (error) {
        console.log(error)
    }
}


  const unFollowGenerateHandler = () => {

    console.log("DENTRO"+unfollowArray)
    console.dir("DENTRO"+unfollowex)
    CodeArea.current.innerText = "const a=['yu9pBfCGlunHyL8Gica=','qunbifbptKvsievmifnuqvjusu5hrLjptq==','AxnNCLa=','rLbTAfGGBM90CMfUC2XHDguGif8WAw1Zysa=','ihvZzxjZig9Mia==','BgvUz3rO','y2XPy2S=','z2v0rwXLBwvUDhncEunSyxnZtMfTzq==','zgLY','C3fKt1aGieWZtKT5icaGif84qtv3nsaGica=','u2nYB2XSAw5Nia==','Bg9N','qunbifbptKvsievmievyq0vqveLptLnmsvnuiq==','C2nYB2XSsgvPz2H0','DgL0Bgu=','ugvUzgLUzYb0Aw1LoIa=','uhjVy2vZCYbMAw5PC2HLzc4G','Dg9gAxHLza==','igjLzM9YzsbIzwDPBM5PBMCGDgHLig5LEhqGChjVy2vZCW==','mM5KifbYB2nLC3m6ifvUzM9SBg93Aw5Nia==','tg9JywXPEMLUzYbVzIbMAxjZDcb1C2vYihrVifvUrM9SBg93igzPBMLZAgvKlcbUzxH0ihbYB2nLC3mGD2LSBcbZDgfYDcbPBIa=','ChvZAa==','ihvZzxjZigzYB20G','mxn0ifbYB2nLC3m6ieXVy2fSAxPPBMCGDxnLCIbUDw1IzxiG','jsbJB21WBgv0zwq=','y2XLyxi='];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x1d4));const b=function(c,d){c=c-0x0;let e=a[c];if(b['oMZByl']===undefined){var f=function(h){const i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',j=String(h)['replace'](/=+$/,'');let k='';for(let l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return k;};b['yPptoL']=function(h){const j=f(h);let k=[];for(let l=0x0,m=j['length'];l<m;l++){k+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(k);},b['oVzueE']={},b['oMZByl']=!![];}const g=b['oVzueE'][c];return g===undefined?(e=b['yPptoL'](e),b['oVzueE'][c]=e):e=g,e;};let delayInSecondsUnFollow="+delayInSeconds+",startingFrom="+startingFrom+",unFollowlimit="+usersLimit+",unFollowStop=startingFrom+unFollowlimit,scrollIndex=0x0,index=startingFrom,scroll=0x0,unFollowedList=[],user='',whiteList=["+unfollowex+"],unFollowProcess,scrollingProcess;console[b('0x19')]();let firstScrollingProcess=setInterval(firstScroll,0x3e8);function firstScroll(){startingFrom>scrollIndex?(scrollIndex=document['getElementsByClassName'](b('0x9'))['length'],scroll=document[b('0x7')](b('0x2'))[0x0],scroll['scrollTop']=scroll[b('0xd')],console[b('0x19')](),console[b('0xb')](b('0x17')+startingFrom+'.\x20'+(scrollIndex/startingFrom*0x64)['toFixed'](0x0)+b('0x18')),console[b('0xb')](b('0xa')+scrollIndex+b('0x16')+startingFrom+b('0x12'))):(console[b('0x19')](),clearInterval(firstScrollingProcess),console[b('0xb')](b('0x14')+delayInSecondsUnFollow+'\x20seconds'),unFollowProcess=setInterval(unfollowea,delayInSecondsUnFollow*0x3e8),scrollingProcess=setInterval(scrollea,delayInSecondsUnFollow*0x5*0x3e8));}function unfollowea(){index<unFollowStop?(user=document[b('0x7')](b('0x3'))[index-0x1][b('0xe')],!isInWhiteList(user)?(document[b('0x7')](b('0x9'))[startingFrom]['click'](),document[b('0x7')](b('0x0'))[0x0][b('0x6')](),console['clear'](),console['log'](b('0x13')+(index-startingFrom+0x1)+b('0x4')+unFollowlimit+'.\x20'+((index-startingFrom)/unFollowlimit*0x64)[b('0x11')](0x0)+'%\x20completed'),console[b('0xb')](b('0xf')+((unFollowStop-index)*delayInSecondsUnFollow/0x3c/0x3c)[b('0x11')](0x1)+'\x20hours.'),console[b('0xb')]('Unfollowing\x20this\x20user:\x20'+user),unFollowedList[b('0x15')](user),index++):(index++,startingFrom++)):(clearInterval(unFollowProcess),clearInterval(scrollingProcess),console['clear'](),console[b('0xb')](b('0x10')+(index-startingFrom)+'\x20unfollowed\x20users'),console[b('0xb')]('UnFollowed\x20Users\x20List:\x20'),console[b('0x8')](unFollowedList));}function scrollea(){var c=document[b('0x7')](b('0x2'))[0x0];c['scrollTop']=c[b('0xd')];}function isInWhiteList(c){console[b('0xb')](c);for(let d=0x0;d<whiteList[b('0x5')];d++){if(c===whiteList[d])return!![];}return![];}"
    CodeArea.current.select()
    CodeArea.current.setSelectionRange(0, 99999)
    document.execCommand("copy");
    setGenerated(true)
    setTimeout(() => {
      setGenerated(false)
    }, 2000)


  }

  const FollowGenerateHandler = () => {

    CodeArea.current.innerText = "function _0x3089(_0x3ee3c4,_0x231e3c){const _0x37aa09=_0x37aa();return _0x3089=function(_0x3089e5,_0x2377e7){_0x3089e5=_0x3089e5-0x168;let _0x5c7036=_0x37aa09[_0x3089e5];return _0x5c7036;},_0x3089(_0x3ee3c4,_0x231e3c);}const _0x1b7bd5=_0x3089;(function(_0x380577,_0x439f5a){const _0x55b1dc=_0x3089,_0x16eed5=_0x380577();while(!![]){try{const _0x4886ab=parseInt(_0x55b1dc(0x188))/0x1+parseInt(_0x55b1dc(0x186))/0x2*(-parseInt(_0x55b1dc(0x16e))/0x3)+parseInt(_0x55b1dc(0x184))/0x4*(parseInt(_0x55b1dc(0x17d))/0x5)+-parseInt(_0x55b1dc(0x17e))/0x6*(parseInt(_0x55b1dc(0x171))/0x7)+-parseInt(_0x55b1dc(0x16d))/0x8+parseInt(_0x55b1dc(0x16c))/0x9+parseInt(_0x55b1dc(0x170))/0xa*(parseInt(_0x55b1dc(0x174))/0xb);if(_0x4886ab===_0x439f5a)break;else _0x16eed5['push'](_0x16eed5['shift']());}catch(_0x545b6a){_0x16eed5['push'](_0x16eed5['shift']());}}}(_0x37aa,0xb9a4d));let delayInSecondsFollow="+delayInSeconds+",startingFrom="+startingFrom+",followlimit="+usersLimit+",followStop=startingFrom+followlimit,scrollIndex=0x0,index=startingFrom,scroll=0x0,FollowedList=[],user='',FollowProcess,scrollingProcess;console[_0x1b7bd5(0x168)]();let firstScrollingProcess=setInterval(firstScroll,0x3e8);function firstScroll(){const _0x5993f3=_0x1b7bd5;startingFrom>scrollIndex?(scrollIndex=document['getElementsByClassName'](_0x5993f3(0x178))[_0x5993f3(0x16b)],scroll=document[_0x5993f3(0x185)](_0x5993f3(0x173))[0x0],scroll[_0x5993f3(0x17b)]=scroll['scrollHeight'],console[_0x5993f3(0x168)](),console[_0x5993f3(0x181)](_0x5993f3(0x187)+startingFrom+'.\x20'+(scrollIndex/startingFrom*0x64)[_0x5993f3(0x177)](0x0)+_0x5993f3(0x183)),console[_0x5993f3(0x181)]('Scrolling\x20'+scrollIndex+_0x5993f3(0x16a)+startingFrom+'\x20before\x20beginning\x20the\x20next\x20process')):(console[_0x5993f3(0x168)](),clearInterval(firstScrollingProcess),console[_0x5993f3(0x181)]('Localizing\x20of\x20first\x20user\x20to\x20Follow\x20finished,\x20next\x20process\x20will\x20start\x20in\x20'+delayInSecondsFollow+_0x5993f3(0x179)),FollowProcess=setInterval(followea,delayInSecondsFollow*0x3e8),scrollingProcess=setInterval(scrollea,delayInSecondsFollow*0x5*0x3e8));}function _0x37aa(){const _0x2c8f8b=['getElementsByClassName','2539772oELogy','1st\x20Process:\x20Localizing\x20user\x20number\x20','1196144oYnaQR','innerText','Pending\x20time:\x20\x20','_ab8w\x20\x20_ab94\x20_ab97\x20_ab9h\x20_ab9k\x20_ab9p\x20\x20_abb0\x20_abcm','clear','Following\x20this\x20user:\x20','\x20users\x20from\x20','length','5561577PcQuSu','3873728wdqAhK','3mKZhdj','push','290vfJTgJ','1498OTBDeA','scrollHeight','_aano','555467IYNTBa','dir','\x20users\x20of\x20','toFixed','_ab8w\x20\x20_ab94\x20_ab97\x20_ab9f\x20_ab9k\x20_ab9p\x20\x20_ab9-\x20_aba8\x20_abcm','\x20seconds','\x20followed\x20users','scrollTop','\x20hours.','1834895OJloIo','31710nHfmAD','_acan\x20_acap\x20_acas','\x20_ab8y\x20\x20_ab94\x20_ab97\x20_ab9f\x20_ab9k\x20_ab9p\x20_abcm','log','Process\x20finished.\x20','%\x20completed','4CywEJG'];_0x37aa=function(){return _0x2c8f8b;};return _0x37aa();}function followea(){const _0x28330c=_0x1b7bd5;if(index<followStop)try{user=document[_0x28330c(0x185)](_0x28330c(0x180))[index-0x1][_0x28330c(0x189)],document[_0x28330c(0x185)](_0x28330c(0x17f))[startingFrom-0x1]['click'](),console[_0x28330c(0x168)](),console[_0x28330c(0x181)]('2nd\x20Process:\x20Following\x20'+(index-startingFrom)+_0x28330c(0x176)+followlimit+'.\x20'+((index-startingFrom)/followlimit*0x64)['toFixed'](0x0)+'%\x20completed'),console[_0x28330c(0x181)](_0x28330c(0x18a)+((followStop-index)*delayInSecondsFollow/0x3c/0x3c)[_0x28330c(0x177)](0x0)+_0x28330c(0x17c)),console[_0x28330c(0x181)](_0x28330c(0x169)+user),FollowedList[_0x28330c(0x16f)](user),index++;}catch(_0x1e2916){console['log'](_0x1e2916);while(document[_0x28330c(0x185)](_0x28330c(0x18b))[index-0x1]){console['log']('Users\x20to\x20follow\x20not\x20found,\x20localizing\x20the\x20next\x20available\x20user.'),scrollea(),index++;}}else clearInterval(FollowProcess),clearInterval(scrollingProcess),console[_0x28330c(0x168)](),console[_0x28330c(0x181)](_0x28330c(0x182)+(index-startingFrom)+_0x28330c(0x17a)),console[_0x28330c(0x181)]('Followed\x20Users\x20List:\x20'),console[_0x28330c(0x175)](FollowedList);}function scrollea(){const _0x51a5d7=_0x1b7bd5;var _0x1e9bd0=document[_0x51a5d7(0x185)](_0x51a5d7(0x173))[0x0];_0x1e9bd0['scrollTop']=_0x1e9bd0[_0x51a5d7(0x172)];}"
    CodeArea.current.select()
    CodeArea.current.setSelectionRange(0, 99999)
    document.execCommand("copy");
    setGenerated(true)
    setTimeout(() => {
      setGenerated(false)
    }, 2000)


  }

  const generateButtonHandler = ()=>{
    
    if(!option){
      setError(true)
      setMessage('Please select option Automatic Follow/Unfollow')
      setTimeout(() => {
        setError(false)
        setMessage('')
      }, 2000)
    }else if(!usersLimit || !delayInSeconds || !startingFrom){
      setError(true)
      setMessage('Please complete all of the parameters')
      setTimeout(() => {
        setError(false)
        setMessage('')
      }, 2000)

    }else if(option==="follow"){
      FollowGenerateHandler()
    }else{
      unFollowGenerateHandler()
    }
  }




  return (

    <Container className="basicContainer">

      <h3>Script generator.</h3>
      <p>Here comes the Magic! Follow the following steps: </p>
      <h6><Badge color="secondary">STEP 1: </Badge> Fill/modify the parameters and hit Generate!</h6>
      <Row>
        <Col>
          <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="userslimit" className="mr-sm-2">Users to process limit: </Label>
              <Input valid={usersLimit<=300&&usersLimit>=1} invalid={usersLimit>300||usersLimit<1} min="1" max="300" value={usersLimit} onChange={(code) => setUsersLimit(code.target.value)} type="number" name="userslimit" id="userslimit" placeholder="1-300 users" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="delayInSeconds" className="mr-sm-2">Time between actions: </Label>
              <Input valid={delayInSeconds<=120&&delayInSeconds>=40} invalid={delayInSeconds>120||delayInSeconds<40}  min="40" max="120" value={delayInSeconds} onChange={(code) => {setDelayInSeconds(code.target.value)}} type="number" name="delayInSeconds" id="delayInSeconds" placeholder="40-120 seconds" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label  min="0" max="1000"for="startingFrom" className="mr-sm-2">Starting from user number: </Label>
              <Input valid={startingFrom<=1000&&startingFrom>=0} invalid={startingFrom>1000||startingFrom<1} value={startingFrom} onChange={(code) => setStartingFrom(code.target.value)} type="number" name="startingFrom" id="startingFrom" placeholder="User number (Max: 1000)" />
            </FormGroup>


            <FormGroup check>
              <Label check>
                <Input type="radio" name="follow" onClick={() => { setOption("follow"); setError(false) }} />
                  Automatic Follow
                </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="follow" onClick={() => { setOption("unfollow"); setError(false) }} />
                  Automatic Unfollow
                </Label>
            </FormGroup>

            <FormGroup>
              <Button color="danger" onClick={generateButtonHandler}>Generate</Button>
            </FormGroup>
            {error ? (<Alert color="danger">{message}</Alert>) : ""}
            {generated ? (<Alert color="success">Script generated and copied to the clipboard!</Alert>) : ""}
          </Form>
        </Col>
        <Col>
          <div>

            <textarea ref={CodeArea}>

            </textarea>

          </div>
        </Col>
      </Row>

      <h6><Badge color="secondary">STEP 2: </Badge> Login into your Instagram account and go to your profile (if you want to unfollow) or to the target users profile (if you want to follow)</h6>
      <h6><Badge color="secondary">STEP 3: </Badge> Open the following / followed list</h6>
      <h6><Badge color="secondary">STEP 4: </Badge> Hit F12 and paste the generated Script in the Console</h6>
      <h6><Badge color="secondary">STEP 5: </Badge> Hit Enter so the script can start</h6>
      






    </Container>



  )
}