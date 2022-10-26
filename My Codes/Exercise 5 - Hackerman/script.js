const dispFunc=async()=>{
    const l1=async()=>{
            setTimeout(()=>{
            document.getElementById("line1").innerHTML = " root@kali:- python instahack.py [ENTER]";
        }, 3000);
    }

    const l2=async()=>{
            setTimeout(()=>{
            document.getElementById("line2").innerHTML = "--> Initializing hack Program...";
        }, 6000);
    }
    const l3 =async()=>{
            setTimeout(()=>{
            document.getElementById("line3").innerHTML = "--> Hacking user: xxxxxxxx...";
        }, 9000);
    }
    const l4 =async()=>{
            setTimeout(()=>{
            document.getElementById("line4").innerHTML = "--> Password Cracked successfully";
        }, 12000);
    }
    const l5 =async()=>{
            setTimeout(()=>{
            document.getElementById("line5").innerHTML = "--> Connecting to Instagram Account...";
        }, 15000);
    }
    const l6 =async()=>{
            setTimeout(()=>{
            document.getElementById("line6").innerHTML = "--> Hack Successful";
        }, 18000);
    }
    await l1();
    await l2();
    await l3();
    await l4();
    await l5();
    await l6();
}
dispFunc();