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
  const [userExceptions, setUserExceptions] = useState([])

  useEffect(() => {
    getUserData()

}, []);

  const getUserData = async () => {
    try {
        const userResponse = await api.get(`/user/${localStorage.getItem('user_id')}`)
        setUsersLimit(userResponse.data.usersLimit)
        setDelayInSeconds(userResponse.data.delay)
        setStartingFrom(userResponse.data.startingFrom)
        setUserExceptions(userResponse.data.unfollowExceptions)
    } catch (error) {
        console.log(error)
    }
}


  const unFollowGenerateHandler = () => {

    CodeArea.current.innerText = "const a=['yu9pBfCGlunHyL8Gica=','qunbifbptKvsievmifnuqvjusu5hrLjptq==','AxnNCLa=','rLbTAfGGBM90CMfUC2XHDguGif8WAw1Zysa=','ihvZzxjZig9Mia==','BgvUz3rO','y2XPy2S=','z2v0rwXLBwvUDhncEunSyxnZtMfTzq==','zgLY','C3fKt1aGieWZtKT5icaGif84qtv3nsaGica=','u2nYB2XSAw5Nia==','Bg9N','qunbifbptKvsievmievyq0vqveLptLnmsvnuiq==','C2nYB2XSsgvPz2H0','DgL0Bgu=','ugvUzgLUzYb0Aw1LoIa=','uhjVy2vZCYbMAw5PC2HLzc4G','Dg9gAxHLza==','igjLzM9YzsbIzwDPBM5PBMCGDgHLig5LEhqGChjVy2vZCW==','mM5KifbYB2nLC3m6ifvUzM9SBg93Aw5Nia==','tg9JywXPEMLUzYbVzIbMAxjZDcb1C2vYihrVifvUrM9SBg93igzPBMLZAgvKlcbUzxH0ihbYB2nLC3mGD2LSBcbZDgfYDcbPBIa=','ChvZAa==','ihvZzxjZigzYB20G','mxn0ifbYB2nLC3m6ieXVy2fSAxPPBMCGDxnLCIbUDw1IzxiG','jsbJB21WBgv0zwq=','y2XLyxi='];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x1d4));const b=function(c,d){c=c-0x0;let e=a[c];if(b['oMZByl']===undefined){var f=function(h){const i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',j=String(h)['replace'](/=+$/,'');let k='';for(let l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return k;};b['yPptoL']=function(h){const j=f(h);let k=[];for(let l=0x0,m=j['length'];l<m;l++){k+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(k);},b['oVzueE']={},b['oMZByl']=!![];}const g=b['oVzueE'][c];return g===undefined?(e=b['yPptoL'](e),b['oVzueE'][c]=e):e=g,e;};let delayInSecondsUnFollow="+delayInSeconds+",startingFrom="+startingFrom+",unFollowlimit="+usersLimit+",unFollowStop=startingFrom+unFollowlimit,scrollIndex=0x0,index=startingFrom,scroll=0x0,unFollowedList=[],user='',whiteList=b('0xc'),unFollowProcess,scrollingProcess;console[b('0x19')]();let firstScrollingProcess=setInterval(firstScroll,0x3e8);function firstScroll(){startingFrom>scrollIndex?(scrollIndex=document['getElementsByClassName'](b('0x9'))['length'],scroll=document[b('0x7')](b('0x2'))[0x0],scroll['scrollTop']=scroll[b('0xd')],console[b('0x19')](),console[b('0xb')](b('0x17')+startingFrom+'.\x20'+(scrollIndex/startingFrom*0x64)['toFixed'](0x0)+b('0x18')),console[b('0xb')](b('0xa')+scrollIndex+b('0x16')+startingFrom+b('0x12'))):(console[b('0x19')](),clearInterval(firstScrollingProcess),console[b('0xb')](b('0x14')+delayInSecondsUnFollow+'\x20seconds'),unFollowProcess=setInterval(unfollowea,delayInSecondsUnFollow*0x3e8),scrollingProcess=setInterval(scrollea,delayInSecondsUnFollow*0x5*0x3e8));}function unfollowea(){index<unFollowStop?(user=document[b('0x7')](b('0x3'))[index-0x1][b('0xe')],!isInWhiteList(user)?(document[b('0x7')](b('0x9'))[startingFrom]['click'](),document[b('0x7')](b('0x0'))[0x0][b('0x6')](),console['clear'](),console['log'](b('0x13')+(index-startingFrom+0x1)+b('0x4')+unFollowlimit+'.\x20'+((index-startingFrom)/unFollowlimit*0x64)[b('0x11')](0x0)+'%\x20completed'),console[b('0xb')](b('0xf')+((unFollowStop-index)*delayInSecondsUnFollow/0x3c/0x3c)[b('0x11')](0x1)+'\x20hours.'),console[b('0xb')]('Unfollowing\x20this\x20user:\x20'+user),unFollowedList[b('0x15')](user),index++):(index++,startingFrom++)):(clearInterval(unFollowProcess),clearInterval(scrollingProcess),console['clear'](),console[b('0xb')](b('0x10')+(index-startingFrom)+'\x20unfollowed\x20users'),console[b('0xb')]('UnFollowed\x20Users\x20List:\x20'),console[b('0x8')](unFollowedList));}function scrollea(){var c=document[b('0x7')](b('0x2'))[0x0];c['scrollTop']=c[b('0xd')];}function isInWhiteList(c){console[b('0xb')](c);for(let d=0x0;d<whiteList[b('0x5')];d++){if(c===whiteList[d])return!![];}return![];}"
    CodeArea.current.select()
    CodeArea.current.setSelectionRange(0, 99999)
    document.execCommand("copy");
    setGenerated(true)
    setTimeout(() => {
      setGenerated(false)
    }, 2000)


  }

  const FollowGenerateHandler = () => {

    CodeArea.current.innerText = "const a=['Bg9N','y2XPy2S=','C3fKt1aGieWZtKT5icaGif84qtv3nsaGica=','DgL0Bgu=','z2v0rwXLBwvUDhncEunSyxnZtMfTzq==','y2XLyxi=','C3fKt1aGieWZtKT5icaGEtn6s0yGicaGia==','u2nYB2XSAw5Nia==','C2nYB2XSsgvPz2H0','Dg9gAxHLza==','vxnLCNmGDg8GzM9SBg93ig5VDcbMB3vUzcWGBg9JywXPEMLUzYb0AguGBMv4DcbHDMfPBgfIBguGDxnLCI4=','tg9JywXPEMLUzYbVzIbMAxjZDcb1C2vYihrViezVBgXVDYbMAw5PC2HLzcWGBMv4DcbWCM9JzxnZihDPBgWGC3rHCNqGAw4G','rLbTAfGGBM90CMfUC2XHDguGif8WAw1Zysa=','rM9SBg93Aw5NihrOAxmGDxnLCJOG','ugvUzgLUzYb0Aw1LoIaG','rK9mte9xieXjtuLu','AxnNCLa=','u1rbuLrjtKCGrLjptq==','ihnLy29Uzhm=','ihvZzxjZig9Mia==','C2nYB2XSvg9W','zgLY','igjLzM9YzsbIzwDPBM5PBMCGDgHLig5LEhqGChjVy2vZCW==','rM9SBg93zwqGvxnLCNmGtgLZDdOG','ihvZzxjZigzYB20G','jsbJB21WBgv0zwq=','BgvUz3rO'];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x163));const b=function(c,d){c=c-0x0;let e=a[c];if(b['gLUtXS']===undefined){var f=function(h){const i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',j=String(h)['replace'](/=+$/,'');let k='';for(let l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return k;};b['lvxjQb']=function(h){const j=f(h);let k=[];for(let l=0x0,m=j['length'];l<m;l++){k+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(k);},b['ZgFBLX']={},b['gLUtXS']=!![];}const g=b['ZgFBLX'][c];return g===undefined?(e=b['lvxjQb'](e),b['ZgFBLX'][c]=e):e=g,e;};let delayInSecondsFollow="+delayInSeconds+",startingFrom="+startingFrom+",followlimit="+usersLimit+",followStop=startingFrom+followlimit,scrollIndex=0x0,index=startingFrom,scroll=0x0,FollowedList=[],user='',FollowProcess,scrollingProcess;console[b('0x1')]();let firstScrollingProcess=setInterval(firstScroll,0x3e8);function firstScroll(){startingFrom>scrollIndex?(scrollIndex=document[b('0x0')](b('0x2'))[b('0x16')],scroll=document[b('0x0')]('isgrP')[0x0],scroll[b('0x10')]=scroll[b('0x4')],console[b('0x1')](),console[b('0x17')]('1st\x20Process:\x20Localizing\x20user\x20number\x20'+startingFrom+'.\x20'+(scrollIndex/startingFrom*0x64)[b('0x5')](0x0)+'%\x20completed'),console['log'](b('0x3')+scrollIndex+b('0x14')+startingFrom+b('0x12'))):(console[b('0x1')](),clearInterval(firstScrollingProcess),console[b('0x17')](b('0x7')+delayInSecondsFollow+b('0xe')),FollowProcess=setInterval(followea,delayInSecondsFollow*0x3e8),scrollingProcess=setInterval(scrollea,delayInSecondsFollow*0x5*0x3e8));}function followea(){if(index<followStop)try{user=document[b('0x0')](b('0x8'))[index-0x1][b('0x1a')],document[b('0x0')](b('0x2'))[startingFrom-0x1][b('0x18')](),console[b('0x1')](),console[b('0x17')]('2nd\x20Process:\x20Following\x20'+(index-startingFrom)+b('0xf')+followlimit+'.\x20'+((index-startingFrom)/followlimit*0x64)['toFixed'](0x0)+b('0x15')),console[b('0x17')](b('0xa')+((followStop-index)*delayInSecondsFollow/0x3c/0x3c)[b('0x5')](0x0)+'\x20hours.'),console[b('0x17')](b('0x9')+user),FollowedList['push'](user),index++;}catch(c){console[b('0x17')](c);while(document[b('0x0')](b('0x19'))[index-0x1]){console['log'](b('0x6')),scrollea(),index++;}}else clearInterval(FollowProcess),clearInterval(scrollingProcess),console[b('0x1')](),console[b('0x17')]('Process\x20finished.\x20'+(index-startingFrom)+'\x20followed\x20users'),console[b('0x17')](b('0x13')),console[b('0x11')](FollowedList);}function scrollea(){var c=document['getElementsByClassName'](b('0xc'))[0x0];c[b('0x10')]=c[b('0x4')];}"
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