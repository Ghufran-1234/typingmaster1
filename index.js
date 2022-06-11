function typing()
    {
        var name=document.getElementById("#cN").value;
        var input=document.getElementById("#t").value;
        var arr=[]=input;
        var temp="",tempArr=[];
        var tempCheck="";
        var checkSt="Trying to make a wise, good choice when thinking about what kinds of careers might be best for you is a hard thing to do. Your future may very well depend on the ways you go about finding the best job openings for you in the world of work. Some people will feel that there is one and only one job in the world for them. Hard thinking and a lot of hard work will help them find the one job that is best for them. Jobs are there for those with skills and a good work ethic. Many new young artists in the upper New England states are famous around the world as leaders in new American art. These fine artists are very good in their chosen fields and are willing to share their many talents by teaching others. The students have had the chance to learn and use skills in oil painting, sketching with chalk, sculpting, and weaving. Learning to typewrite is a skill that will help all of us in our work today. The development of the computer will open doors for people with the keyboarding skills and will make typing a necessity. Managers, as well as secretaries, will need skill at the keyboard to input data and process words. Therefore, good keyboarding skills may be important to you."
        var check=[]=checkSt;
        var tempCheckArr=[];
        var c=0,w=0;
        for(var i=0; i<input.length+1; i++)
        {
            if(arr[i]==" " || arr[i]== undefined)
            {
                tempArr.push(temp);
                temp="";
            }else{
                temp+=arr[i];
            }
            
        }

        for(var i=0; i<checkSt.length+1; i++)
        {
            if(check[i]==" " || check[i]== undefined)
            {
                tempCheckArr.push(tempCheck);
                tempCheck="";
            }else{
                tempCheck+=arr[i];
            }
            
        }

        for ( var i=0; i<tempCheckArr.length; i++)
        {
            if(tempCheckArr[i] == tempArr[i])
            {
                c++;
            }
            else
            {
                w++;
            }
        }
        var ac=Math.round((c/tempArr.length)*100);
        ac+="%";
        
        console.log(ac);
        document.getElementById("#ac").innerHTML="Accuracy:- " + ac;
    }

    function invisible()
    {
        document.getElementById("#in").classList.toggle("invisible");
    }