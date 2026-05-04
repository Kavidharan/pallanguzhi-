import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './style/game.css';
import zero from './images/pallanguzhi0.png';
import one from './images/pallanguzhi1.png';
import two from './images/pallanguzhi2.png';
import three from './images/pallanguzhi3.png';
import four from './images/pallanguzhi4.png';
import five from './images/pallanguzhi5.png';
import six from './images/pallanguzhi6.png';

const game = () => {
    const [playerTotel,setPlayerTotel] = useState ({red:30,blue:30})
    const im = [zero,one,two,three,four,five,six];
    const [acctive,setAcctive] = useState(false);
    const [colorCondition,setColorCondition] = useState("red");
    const moment = [6,5,4,3,2,1,7,8,9,10,11,12];
    const [moves, setMoves] = useState({id:{
        1:{
            value:5,
            img:five
        },
        2:{
            value:5,
            img:five
        },
        3:{
            value:5,
            img:five
        },
        4:{
            value:5,
            img:five
        },
        5:{
            value:5,
            img:five
        },
        6:{
            value:5,
            img:five
        },
        7:{
            value:5,
            img:five
        },
        8:{
            value:5,
            img:five
        },
        9:{
            value:5,
            img:five
        },
        10:{
            value:5,
            img:five
        },
        11:{
            value:5,
            img:five
        },
        12:{
            value:5,
            img:five
        }
    }});
    let perviousid = 0;
    useEffect(()=>{
        let redPlayers = [1,2,3,4,5,6];
        let bluePlayers = [7,8,9,10,11,12];
        let parent = document.querySelector(".gameOver");
        let redPlayer = 0;
        let bluePlayer = 0; 
        redPlayers.map((r) => {
            redPlayer = redPlayer + moves.id[r].value;
        });

        bluePlayers.map((b) =>{
            bluePlayer = bluePlayer + moves.id[b].value;  
        });

        setPlayerTotel((perv) => ({...perv,blue : bluePlayer}));
        setPlayerTotel((perv) => ({...perv,red : redPlayer}));

        if (playerTotel.red == 0){
            parent.firstChild.style.display = "block";
            parent.firstChild.style.backgroundColor = "rgba(0, 0, 255, 0.753)";
        }
        if(playerTotel.blue == 0){
            parent.firstChild.style.display = "block";
            parent.firstChild.style.backgroundColor = "rgba(255, 0, 0, 0.644)";
        }
       
    },[moves]);
    function Move(e){
        let parent = document.querySelector('.condiniue'); 
        let siblings = [e.currentTarget.parentElement.children];
        if (!acctive) {
            if (perviousid != 0 && perviousid != e.currentTarget.children[1].name) {
                for (let i = 0 ; i < siblings[0].length; i++) {
                    if (siblings[0][i].children[1].name == perviousid) {
                        siblings[0][i].firstChild.textContent = moves.id[perviousid].value;
                    }
                }
            }
            if(e.currentTarget.className.includes(colorCondition)){
                if (e.currentTarget.firstChild.textContent == "0") {
                    e.currentTarget.firstChild.textContent = "0";
                }else if(e.currentTarget.firstChild.textContent != "play"){
                    e.currentTarget.firstChild.textContent = "play";
                }
                else if (e.currentTarget.firstChild.textContent == "play"){
                    let id = e.currentTarget.children[1].name ;
                    Moves(id,parent);
                    
                }
                perviousid = e.currentTarget.children[1].name;
            }
        }
    }
    const setimage = (mov,prev) =>{
        if (prev.id[mov].value <= 6){
            return im[prev.id[mov].value];
        } else{
            return im[6];
        }
    }

    function Moves(ids,parent){ 
        ids = parseInt(ids);
        let last;
        let i = 0;
        while (true){
            if (moment[(moment.indexOf(ids) + moves.id[ids].value + 1) - i] != undefined){
                last = moment[(moment.indexOf(ids) + moves.id[ids].value + 1) - i];
                break;
            }
            i = i + 12;  
        }
        let lastLocation = document.getElementsByName(last)[0];

        setMoves(prev =>({...prev,id:{...prev.id,[ids]:{...prev.id[ids],value : 0}}}));
        setMoves(prev =>({...prev,id:{...prev.id,[ids]:{...prev.id[ids],img : im[prev.id[ids].value <= 6 ? prev.id[ids].value : 6]}}}));
        for (let i = 0; i < moves.id[ids].value; i++) {
            let j = 0;
            let mov; 
            movbreak:while (true){
                if (moment[moment.indexOf(ids) + (i+1) - j]  != undefined){
                    mov = moment[moment.indexOf(ids) + (i+1) - j];
                    break movbreak;
                }
                j = j + 12;
            }

            console.log(mov)
            setMoves(prev =>({...prev,id:{...prev.id,[mov]:{...prev.id[mov],value : prev.id[mov].value + 1}}}));
            setMoves(prev =>({...prev,id:{...prev.id,[mov]:{...prev.id[mov],img : setimage(mov,prev) }}}));    
        }
        if (moves.id[last].value != 0) {
            parent.firstChild.style.display = "block";
            setAcctive(true)
            if(colorCondition == "red"){
                parent.firstChild.style.backgroundColor = "rgba(255, 0, 0, 0.644)";
                parent.classList.add(last)
            }else{
                parent.firstChild.style.backgroundColor = "rgba(0, 0, 255, 0.753)";}
                parent.classList.add(last)
        }else{
            parent.firstChild.style.display = "none";
            setAcctive(false)
            setColorCondition(prev => prev == "red" ? "blue" : "red");
        }

    }

    return (
    <div className='gameContainer'>
        <div className="gameOver">
            <button><Link to={document.baseURI} onClick={(e) => e.currentTarget.parentElement.style.display = "none"}>You Win !!</Link></button>
        </div>
        <div className="player-Red">
            <h3>Player Red
                <br />
                {playerTotel.red}
            </h3>
        </div>
        <div className="game">
            <div className="move">
                <ul>
                    <li className='red move1' onClick={(e) => Move(e)}><label htmlFor="1">{moves.id[1].value}</label><button name='1'><img src={moves.id[1].img}/></button></li>
                    <li className='red move2' onClick={(e) => Move(e)}><label htmlFor="2">{moves.id[2].value}</label><button name='2'><img src={moves.id[2].img}/></button></li>
                    <li className='red move3' onClick={(e) => Move(e)}><label htmlFor="3">{moves.id[3].value}</label><button name='3'><img src={moves.id[3].img}/></button></li>
                    <li className='red move4' onClick={(e) => Move(e)}><label htmlFor="4">{moves.id[4].value}</label><button name='4'><img src={moves.id[4].img}/></button></li>
                    <li className='red move5' onClick={(e) => Move(e)}><label htmlFor="5">{moves.id[5].value}</label><button name='5'><img src={moves.id[5].img}/></button></li>
                    <li className='red move6' onClick={(e) => Move(e)}><label htmlFor="6">{moves.id[6].value}</label><button name='6'><img src={moves.id[6].img}/></button></li>
                    <li className='blue move1' onClick={(e) => Move(e)}><label htmlFor="7">{moves.id[7].value}</label><button name='7'><img src={moves.id[7].img}/></button></li>
                    <li className='blue move2' onClick={(e) => Move(e)}><label htmlFor="8">{moves.id[8].value}</label><button name='8'><img src={moves.id[8].img}/></button></li>
                    <li className='blue move3' onClick={(e) => Move(e)}><label htmlFor="9">{moves.id[9].value}</label><button name='9'><img src={moves.id[9].img}/></button></li>
                    <li className='blue move4' onClick={(e) => Move(e)}><label htmlFor="10">{moves.id[10].value}</label><button name='10'><img src={moves.id[10].img}/></button></li>
                    <li className='blue move5' onClick={(e) => Move(e)}><label htmlFor="11">{moves.id[11].value}</label><button name='11'><img src={moves.id[11].img}/></button></li>
                    <li className='blue move6' onClick={(e) => Move(e)}><label htmlFor="12">{moves.id[12].value}</label><button name='12'><img src={moves.id[12].img}/></button></li>
                </ul>
            </div>
        </div>
        <div className="player-Blue">
            <h3>{playerTotel.blue}
                <br />
                Player Blue</h3>
        </div>
        <div className="condiniue">
            <button onClick={(e) => {
                e.currentTarget.style.display = "none";
                let id = e.currentTarget.parentElement.classList[1];
                let parent = e.currentTarget.parentElement;
                e.currentTarget.parentElement.classList.remove(id)
                Moves(id,parent);
            }}>
                condiniue</button>
        </div>
    </div>
  )
}

export default game