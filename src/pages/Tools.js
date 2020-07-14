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

  useEffect(() => {
    getUserData()

}, []);

  const getUserData = async () => {
    try {
        const userResponse = await api.get(`/user/${localStorage.getItem('user_id')}`)
        setUsersLimit(userResponse.data.usersLimit)
        setDelayInSeconds(userResponse.data.delay)
        setStartingFrom(userResponse.data.startingFrom)
    } catch (error) {
        console.log(error)
    }
}


  const unFollowGenerateHandler = () => {

    CodeArea.current.innerText = "const a=['Dg9gAxHLza==','ihvZDwfYAw9Z','ChvZAa==','mCkWifbYB2nLC286ieXVy2fSAxPHBMrVihvZDwfYAw8GBNvTzxjVia==','z2v0rwXLBwvUDhncEunSyxnZtMfTzq==','ihvZDwfYAw9ZlIa=','jsbJB21WBgv0ywrV','C2nYB2XSsgvPz2H0','mSkWifbYB2nLC286ifvUzM9SBg93zwfUzg8G','C3fKt1aGieWZtKT5icaGif84qtv3nsaGica=','igHVCMfZlG==','rMLUywXPEMfKysbSysbSB2nHBgL6ywnPB24GzgvSihbYAw1LCIb1C3vHCMLVigeGDw5MB2XSB3DLyxiSignVBwLLBNPHihbYB2nLC28=','vgLLBxbVihjLC3rHBNrLoIa=','AxnNCLa=','y2XLyxi=','DgL0Bgu=','Bg9N','vw5MB2XSB3DLyw5KBYb1C3vHCMLVia==','C2nYB2XSvg9W','y2XPy2S=','igfUDgvZigrLignVBwvUEMfYihnPz3vPzw50zsbWCM9JzxnV','yu9pBfCGlunHyL8Gica=','ihvZDwfYAw9ZigrLia=='];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x9d));const b=function(c,d){c=c-0x0;let e=a[c];if(b['EvTSRa']===undefined){var f=function(h){const i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',j=String(h)['replace'](/=+$/,'');let k='';for(let l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return k;};b['dXazzp']=function(h){const j=f(h);let k=[];for(let l=0x0,m=j['length'];l<m;l++){k+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(k);},b['gFtxCl']={},b['EvTSRa']=!![];}const g=b['gFtxCl'][c];g===undefined?(e=b['dXazzp'](e),b['gFtxCl'][c]=e):e=g;return e;};let delayInSeconds="+delayInSeconds+",startingFrom="+startingFrom+",unFollowlimit="+usersLimit+",unFollowStop=startingFrom+unFollowlimit,scrollIndex=0x0,index=startingFrom,scroll=0x0,unFollowedList=[],user='',whiteList=[],unFollowProcess,scrollingProcess;console[b('0x12')]();let firstScrollingProcess=setInterval(firstScroll,0x3e8);function firstScroll(){startingFrom>scrollIndex?(scrollIndex=document[b('0x8')](b('0xd'))['length'],scroll=document[b('0x8')](b('0x11'))[0x0],scroll[b('0x16')]=scroll[b('0xb')],console[b('0x12')](),console[b('0x14')](b('0x7')+startingFrom+'.\x20'+(scrollIndex/startingFrom*0x64)[b('0x4')](0x0)+'%\x20completado'),console['log']('Abriendo\x20'+scrollIndex+b('0x3')+startingFrom+b('0x1'))):(console[b('0x12')](),clearInterval(firstScrollingProcess),console[b('0x14')](b('0xf')),unFollowProcess=setInterval(unfollowea,delayInSeconds*0x3e8),scrollingProcess=setInterval(scrollea,delayInSeconds*0x5*0x3e8));}function unfollowea(){index<unFollowStop?(user=document[b('0x8')]('FPmhX\x20notranslate\x20\x20_0imsa\x20')[index-0x1][b('0x13')],!isInWhiteList(user)?(document[b('0x8')](b('0xd'))[startingFrom][b('0x0')](),document[b('0x8')](b('0x2'))[0x0][b('0x0')](),console['clear'](),console[b('0x14')](b('0xc')+(index-startingFrom+0x1)+b('0x9')+((index-startingFrom)/unFollowlimit*0x64)[b('0x4')](0x0)+b('0xa')),console['log'](b('0x10')+(unFollowStop-index*delayInSeconds/0x3c/0x3c)[b('0x4')](0x0)+b('0xe')),console[b('0x14')](b('0x15')+user),unFollowedList[b('0x6')](user),index++):(index++,startingFrom++)):(clearInterval(unFollowProcess),clearInterval(scrollingProcess),console[b('0x14')]('Proceso\x20terminado.\x20Se\x20han\x20unfolloweado\x20'+(index-startingFrom)+b('0x5')),console[b('0x14')](unFollowedList));}function scrollea(){var c=document[b('0x8')]('isgrP')[0x0];c[b('0x16')]=c[b('0xb')];}function isInWhiteList(c){console[b('0x14')](c);for(let d=0x0;d<whiteList['length'];d++){console['log'](c);console[b('0x14')](whiteList[d]);if(c===whiteList[d])return console[b('0x14')](c),console['log'](whiteList[d]),!![];}return![];}"
    CodeArea.current.select()
    CodeArea.current.setSelectionRange(0, 99999)
    document.execCommand("copy");
    setGenerated(true)
    setTimeout(() => {
      setGenerated(false)
    }, 2000)


  }

  const FollowGenerateHandler = () => {

    CodeArea.current.innerText = "const a=['C3fKt1aGieWZtKT5icaGEtn6s0yGicaGia==','uhjVy2vZBYb0zxjTAw5Hzg8UifnLigHHBIbMB2XSB3DLywrVia==','DgL0Bgu=','ihvZDwfYAw9Z','ChvZAa==','AxnNCLa=','mCkWifbYB2nLC286ieXVy2fSAxPHBMrVihvZDwfYAw8GBNvTzxjVia==','Bg9N','C2nYB2XSvg9W','jsbJB21WBgv0ywrV','ihvZDwfYAw9ZigrLia==','y2XPy2S=','rMLUywXPEMfKysbSysbSB2nHBgL6ywnPB24GzgvSihbYAw1LCIb1C3vHCMLVigeGzM9SBg93zwfYlcbJB21Pzw56ysbWCM9JzxnV','Dg9gAxHLza==','rLbTAfGGBM90CMfUC2XHDguGif8WAw1Zysa=','rM9SBg93zwfUzg8GDxn1yxjPBYa=','y2XLyxi=','vgLLBxbVihjLC3rHBNrLoIa=','igHVCMfZCY4=','z2v0rwXLBwvUDhncEunSyxnZtMfTzq==','qwjYAwvUzg8G','ihvZDwfYAw9ZlIa=','C2nYB2XSsgvPz2H0'];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x1c5));const b=function(c,d){c=c-0x0;let e=a[c];if(b['ltSBPK']===undefined){var f=function(h){const i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',j=String(h)['replace'](/=+$/,'');let k='';for(let l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return k;};b['jXakRo']=function(h){const j=f(h);let k=[];for(let l=0x0,m=j['length'];l<m;l++){k+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(k);},b['vQSooB']={},b['ltSBPK']=!![];}const g=b['vQSooB'][c];g===undefined?(e=b['jXakRo'](e),b['vQSooB'][c]=e):e=g;return e;};let delayInSeconds="+delayInSeconds+",startingFrom="+startingFrom+",followlimit="+usersLimit+",followStop=startingFrom+followlimit,scrollIndex=0x0,index=startingFrom,scroll=0x0,FollowedList=[],user='',whiteList=[],FollowProcess,scrollingProcess;console[b('0x0')]();let firstScrollingProcess=setInterval(firstScroll,0x3e8);function firstScroll(){startingFrom>scrollIndex?(scrollIndex=document[b('0x3')](b('0x7'))['length'],scroll=document[b('0x3')](b('0xc'))[0x0],scroll[b('0xf')]=scroll[b('0x6')],console[b('0x0')](),console[b('0xe')](b('0xd')+startingFrom+'.\x20'+(scrollIndex/startingFrom*0x64)[b('0x14')](0x0)+b('0x10')),console[b('0xe')](b('0x4')+scrollIndex+b('0x11')+startingFrom+'\x20antes\x20de\x20comenzar\x20siguiente\x20proceso')):(console[b('0x0')](),clearInterval(firstScrollingProcess),console[b('0xe')](b('0x13')),FollowProcess=setInterval(followea,delayInSeconds*0x3e8),scrollingProcess=setInterval(scrollea,delayInSeconds*0x5*0x3e8));}function followea(){if(index<followStop)try{document[b('0x3')](b('0x7'))[startingFrom-0x1][b('0x12')]();user=document[b('0x3')](b('0x15'))[index-0x1][b('0x9')];console[b('0x0')]();console['log']('2°\x20Proceso:\x20Followeando\x20'+(index-startingFrom)+b('0x5')+((index-startingFrom)/followlimit*0x64)[b('0x14')](0x0)+b('0x10'));console[b('0xe')](b('0x1')+(followStop-index*delayInSeconds/0x3c/0x3c)['toFixed'](0x0)+b('0x2'));console[b('0xe')](b('0x16')+user);FollowedList[b('0xb')](user);index++;}catch(c){while(document[b('0x3')]('sqdOP\x20\x20L3NKy\x20\x20\x20\x20_8A5w5\x20\x20\x20\x20')[index-0x1]){console['log']('Usuarios\x20para\x20followear\x20no\x20encontrados,\x20ubicando\x20proximo\x20usuario.');scrollea();index++;}}else clearInterval(FollowProcess),clearInterval(scrollingProcess),console['log'](b('0x8')+(index-startingFrom)+b('0xa')),console['log'](FollowedList);}function scrollea(){var c=document[b('0x3')](b('0xc'))[0x0];c[b('0xf')]=c[b('0x6')];}"
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