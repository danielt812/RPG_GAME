$(document).ready(function() {
    // FUNCTION GLOSSARY
    //===================================================================
    //--main()
    //--playerChoose()
    //--playerAbilities()
    //--ghostAttacks()
    //--hydraliskAttacks()
    //--darkTemplarAttacks()
    //--chooseEnemy()
    //--checkWinLoss()
    //===================================================================


    // GLOBAL VARIABLES
    // ==================================================================
    var objUnit = 
    {
        name: ['Ghost', 'Dark Templar', 'Hydralisk'],
        image: ['ghost', 'darkTemplar', 'hydralisk'],
        hp: [100, 120, 80],
        //shield: [null, 40, null],
        attack: [10, 8, 12],
        energy: [5, 5, 5],
    }
    var specialAttackClick = 0;
    //Counter for how many times attack button pressed
    var attackClick = -1;
    //Flag to check if enemy character has been selected
    var enemySelected = false;
    //Set variable to keep track of total enemies available
    var totalEnemies = objUnit.name.length - 1;
    //FUNCTIONS
    //==================================================================
    function main()
    {
        var audio = $("objSound");
        var audioElement = document.createElement("audio");
        //Link sound file to element
        audioElement.src = "assets/sound/backgroundMusic.mp3";
        //Set autoplay to true
        audioElement.autoplay = true;
        //Append variable to html
        audio.append(audioElement);
        //Make changes to html text
        $("#statBoard").text("StarCraft Arena");
        $(".statBoard1").text("Welcome to StarCraft Arena!");
        $(".statBoard2").text("Select your character.");
        $("#enemyBox").text("");
        $("#enemyBox").css({"border": "none"});
        $("#graveYardBox").text("");
        $("#graveYardBox").css({"border": "none"});
        $("#defender").text("");
        $("#defender").css({"border": "none"})
        //Create a div to add all units to select character section
        var div = $("<div>");
        div.addClass("characters");
        //Append div to html
        $(".selectChar").append(div);
            //Create for-loop to create all characters
        for (var i = 0; i < objUnit.name.length; i++)
        {
            //Create div that has all character info
            var unit = $("<div>");
            unit.addClass("units");
            unit.attr("name", objUnit.name[i]);
            unit.attr("hp", objUnit.hp[i]);
            unit.attr("max-hp", objUnit.hp[i]);
            unit.attr("attack", objUnit.attack[i]);
            unit.attr("energy", objUnit.energy[i]);
            unit.attr("max-energy"), objUnit.energy[i];
            unit.append('<img src="assets/images/' + objUnit.image[i] + '.gif">');
            //Name unit
            var unitName = $("<div>");
            unitName.addClass("unitName");
            unitName.text(objUnit.name[i]);
            unit.append(unitName);        
            //Create healthbars
            var unitHealthPoints = $("<div>");
            unitHealthPoints.addClass("health");
            unitHealthPoints.text("HP: " + objUnit.hp[i] + " / " + objUnit.hp[i]);
            unit.append(unitHealthPoints);
             //Create healthbars
            var unitEnergyPoints = $("<div>");
            unitEnergyPoints.addClass("energy");
            unitEnergyPoints.text("Energy: " + objUnit.energy[i] + " / " + objUnit.energy[i]);
            unit.append(unitEnergyPoints);
            // if(objUnit.name[i] === "Dark Templar")
            // {
            // //Create shield bars
            // var unitShieldPoints = $("<div>");
            // unitShieldPoints.addClass("shield");
            // unitShieldPoints.text("Shield: " + objUnit.shield[i] + " / " + objUnit.shield[i]);
            // unit.append(unitShieldPoints);
            // }
            // else
            // {
                
            // }
            $(".characters").append(unit);
        }
        playerChoose();
    }

    function playerChoose()
    {
        $("body").one("click", ".units", function()
        {
            //Remove chosen character(element) from char select
            $("#charSelect").text("ATTACKER");
            //Move other characters to enemies
            $(".enemyChar").append($(".characters"));
            //Keep selected character in same div
            $(".selectChar").append(this);
            //Give selected character a id
            $(this).attr("id","player");
            //Grab reference to character choosen
            var selectedChar = $(".selectChar").children().attr("name");
            //Changes to HTML here
            $("#statBoard").text("ABILITIES");
            $("#enemyBox").text("ENEMIES");
            $("#enemyBox").css({"border": "solid"})
            $("#enemyBox").css({"width": "100%"})
            //Change statBoard
            if(selectedChar === "Ghost")
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/ghostSelect.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
                $(".statBoard0").text("");
                $(".statBoard1").text("Character Selected: " + selectedChar)
                $(".statBoard2").text("Basic Attack: Do base damage. Gain 1 energy.")
                $(".statBoard3").text("Stimpack: Take self-inflicted damage. Deal bonus damage. Lose 2 energy.")
                $(".statBoard4").text("Explosive Charge: After three charges set, deal massive damage. Lose 1 energy.")
                $(".statBoard5").text("Cloak: Prevent damage this turn. Lose 2 energy.")
                $(".statBoard6").text("Choose an enemy.")
            }
            else if(selectedChar === "Hydralisk")
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/hydraliskSelect.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
                $(".statBoard0").text("");
                $(".statBoard1").text("Character Selected: " + selectedChar)
                $(".statBoard2").text("Basic Attack: Do base damage. Gain 1 energy.")
                $(".statBoard3").text("Spine Flurry: Does 1-3 times base damage. Double damage received. Lose 2 energy.")
                $(".statBoard4").text("Augmented Carapace: Damage reduced. Damage received reduced. Lose 1 energy.")
                $(".statBoard5").text("Regenerate: Heal for random amount. Deal no damage. Lose 3 energy.")
                $(".statBoard6").text("Choose an enemy.")
            }
            else if(selectedChar === "Dark Templar")
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/darkTemplarSelect.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
                $(".statBoard0").text("");
                $(".statBoard1").text("Character Selected: " + selectedChar)
                $(".statBoard2").text("Basic Attack: Do base damage. Gain 1 energy.")
                $(".statBoard3").text("Shadow Fury: Do random number of attacks with random damage value. Lose 2 energy.")
                $(".statBoard4").text("Void Surge: Increment damage output after each time used. Lose 1 energy.")
                $(".statBoard5").text("Evasion: Take no damage. Deal no damage. Gain 15 life. Lose 2 energy.")
                $(".statBoard6").text("Choose an enemy.")
            }
            //Prompt user to choose enemy for defender div
            $("#defender").text("SELECT DEFENDER")
            $("#defender").css({"border": "solid"})
            //Change color of selected character to green
            $(".selectChar").children().css({"border-color": "blue"});
            //Change color of enemies to red
            $(".characters").children().css({"border-color": "red"});
            playerAbilities();
            chooseEnemy();
        });
    }
    //Create 2 unique abilities, 1 heal ability, 1 basic attack
    function playerAbilities()
    {   
        //Create abilities for ghost
        if($(".selectChar").children().attr("name") === "Ghost")
        {
            //Basic Attack Button
            var btn1 = $("<button>");
            btn1.attr("id", "ghostBasicAttack");
            $("#player").append(btn1);
            //Special Attack 1
            var btn2 = $("<button>");
            btn2.attr("id", "ghostSpecial1");
            $("#player").append(btn2);
            //Special Attack 2
            var btn3 = $("<button>");
            btn3.attr("id", "ghostSpecial2");
            $("#player").append(btn3);
            //Heal
            var btn4 = $("<button>");
            btn4.attr("id", "ghostHeal");
            $("#player").append(btn4);
        }
        else if($(".selectChar").children().attr("name") === "Dark Templar")
        {
            //Basic Attack Button
            var btn1 = $("<button>");
            btn1.attr("id", "darkTemplarBasicAttack");
            $("#player").append(btn1);
            //Special Attack 1
            var btn2 = $("<button>");
            btn2.attr("id", "darkTemplarSpecial1");
            $("#player").append(btn2);
            //Special Attack 2
            var btn3 = $("<button>");
            btn3.attr("id", "darkTemplarSpecial2");
            $("#player").append(btn3);
            //Heal
            var btn4 = $("<button>");
            btn4.attr("id", "darkTemplarHeal");
            $("#player").append(btn4);
        }
        else if($(".selectChar").children().attr("name") === "Hydralisk")
        {
            //Basic Attack Button
            var btn1 = $("<button>");
            btn1.attr("id", "hydraliskBasicAttack");
            $("#player").append(btn1);
            //Special Attack 1
            var btn2 = $("<button>");
            btn2.attr("id", "hydraliskSpecial1");
            $("#player").append(btn2);
            //Special Attack 2
            var btn3 = $("<button>");
            btn3.attr("id", "hydraliskSpecial2");
            $("#player").append(btn3);
            //Heal
            var btn4 = $("<button>");
            btn4.attr("id", "hydraliskHeal");
            $("#player").append(btn4);
        }
        //Run attack functions after buttons are created.
        ghostAttacks();
        darkTemplarAttacks();
        hydraliskAttacks();
    }

    function ghostAttacks()
    {
        $("#ghostBasicAttack").on("click", function()
        {
            //BASIC ATTACK
            if(enemySelected === true)
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/ghostBasicAttack.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //THIS ATTACK ONLY DOES BASE DAMAGE
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Player Energy cant be greater than max energy value
            if (playerEnergy < 5)
            {
                playerEnergy++;
            }
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - enemyCharAtk;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("energy", playerEnergy);
            $("#player").attr("hp", dmgTaken);
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + playerEnergy + " /  " + playerMaxEnergy)
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Damage defender takes
            var enemyDmgTaken = enemyHp - heroCharAtk;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
            $(".statBoard2").text("Total Damage Dealt: " + heroCharAtk);
            $(".statBoard3").text("Energy replenished: 1");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            //Check win/loss condition
            checkWinLoss();
            }
        })
        
        $("#ghostSpecial1").on("click", function()
        {
            //STIMPACK
            if(enemySelected === true)
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/ghostSpecial1.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //THIS ATTACK DOES STATIC DAMAGE TO SELF. GIVES MULTIPLIER TO DAMAGE OUTPUT
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Subtract energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 2;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 2)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/ghostEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            else
            {
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Add 10 static damage to enemyCharAtk
            var stimpackDamageTaken = enemyCharAtk + 10;
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - stimpackDamageTaken;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("hp", dmgTaken);
            $("#player").attr("energy", updatePlayerEnergy);
            //Use jquery to show new hp/energy on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Give stimpack random multiplier
            var stimpackRandNum = Math.floor(6 + Math.random() * 11);
            //Special attack 1 total damage
            var stimpackDmgDealt = parseInt(heroCharAtk) + stimpackRandNum;
            //Damage defender takes
            var enemyDmgTaken = enemyHp - stimpackDmgDealt;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            //Update HTML
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + stimpackDamageTaken);
            $(".statBoard2").text("Total Damage Dealt: " + stimpackDmgDealt);
            $(".statBoard3").text("Damage Received: " + enemyCharAtk);
            $(".statBoard4").text("Self-Inflicted Damage: 10");
            $(".statBoard5").text("Damage Dealt: " + heroCharAtk);
            $(".statBoard6").text("Bonus Damage: " + stimpackRandNum);
            }
            //Check win/loss condition
            checkWinLoss();
            }
        })
        
        $("#ghostSpecial2").on("click", function()
        {
            //EXPLOSIVE CHARGE
            if(enemySelected === true)
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/ghostSpecial2.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
                specialAttackClick++
                //THIS ATTACK DOES RANDOM LARGE AMOUNT OF DAMAGE AFTER SETTING COUNTER 2 TIMES
                //======================================================================
                //YOUR CHARACTER
                //Your character's health point values
                var playerHp = ($("#player").attr("hp"));
                var playerMaxHp = ($("#player").attr("max-hp"));
                //Your character's energy point values
                var playerEnergy = ($("#player").attr("energy"))
                var playerMaxEnergy = 5;
                //Subtract energy for ability
                var updatePlayerEnergy = parseInt(playerEnergy) - 1;
                //Check if player has enough energy to use ability
                if (parseInt(playerEnergy) < 1)
                {
                    //Not enough energy sound file here
                    var audio = $("objSound");
                    var audioElement = document.createElement("audio");
                    //Link sound file to element
                    audioElement.src = "assets/sound/ghostEnergy.mp3";
                    //Set autoplay to true
                    audioElement.autoplay = true;
                    //Append variable to html
                    audio.append(audioElement);
                    //No Damage for either player
                    enemyDmgTaken = enemyHp - 0;
                    dmgTaken = playerHp - 0;
                    //Update stat board
                    $(".statBoard0").text("");
                    $(".statBoard1").text("You need more energy to perform this ability.");
                    $(".statBoard2").text("Select a different ability.");
                    $(".statBoard3").text("");
                    $(".statBoard4").text("");
                    $(".statBoard5").text("");
                    $(".statBoard6").text("");
                }
                else
                {
                    //Enemies attack value
                    var enemyCharAtk = Math.floor(6 + Math.random() * 11);
                    //Subtract HP from enemy attack value
                    var dmgTaken = playerHp - enemyCharAtk;
                    //Use jquery to update Char Hp/Energy after each attack
                    $("#player").attr("hp", dmgTaken);
                    $("#player").attr("energy", updatePlayerEnergy)
                    //Use jquery to show new hp/energy on html
                    var playerDiv = $("#player").children();
                    $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
                    $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
                    //ENEMY CHARACTER
                    //======================================================================
                    //Enemy health values
                    var enemyMaxHp = $("#enemy").attr("max-hp");
                    var enemyHp = ($("#enemy").attr("hp"));
                    //Player attack value
                    var heroCharAtk = $("#player").attr("attack");
                    var chargesNeeded = 3 - specialAttackClick;
                    //Special attack random number
                    var explosiveChargeRandNum = Math.floor(20 + Math.random() * 51)
                    var explosiveChargeDamage = explosiveChargeRandNum;
                    if(specialAttackClick === 3)
                    {
                        //Damage defender takes
                        var enemyDmgTaken = enemyHp - explosiveChargeDamage;
                        $("#enemy").attr("hp", enemyDmgTaken);
                        var enemyDiv = $("#enemy").children();
                        $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
                        $(".statBoard0").text("");
                        $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
                        $(".statBoard2").text("Total Damage Dealt: " + explosiveChargeDamage);
                        $(".statBoard3").text("Charges: " + specialAttackClick);
                        $(".statBoard4").text("Explosive Charge Damage: " + explosiveChargeRandNum);
                        $(".statBoard5").text("");
                        $(".statBoard6").text("");
                        console.log("Charges: " + specialAttackClick);
                        console.log("Damage Dealt: " + explosiveChargeDamage);
                        console.log("Damage Received: " + enemyCharAtk);
                        //Check win/loss condition
                        checkWinLoss();
                        specialAttackClick = 0
                    }
                    else
                    {
                        //Damage defender takes
                        var enemyDmgTaken = enemyHp;
                        $("#enemy").attr("hp", enemyDmgTaken);
                        var enemyDiv = $("#enemy").children();
                        $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
                        }
                        $(".statBoard0").text("");
                        $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
                        $(".statBoard2").text("Total Damage Dealt: " + 0);
                        $(".statBoard3").text("Charges: " + specialAttackClick);
                        $(".statBoard4").text("Charges Needed: " + chargesNeeded);
                        $(".statBoard5").text("");
                        $(".statBoard6").text("");
                        //Check win/loss condition
                        checkWinLoss();
                }
            }

        })

        $("#ghostHeal").on("click", function()
        {
            //CLOAK
            if(enemySelected === true)
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/ghostHeal.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //THIS ABILITY PREVENTS DAMAGE FOR TURN AND HITS FOR BASE DAMAGE
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"))
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"))
            var playerMaxEnergy = 5
            //Subtract energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 2;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 2)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/ghostEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            else
            {
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - 0;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("energy", updatePlayerEnergy)
            $("#player").attr("hp", dmgTaken)
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " /  " + playerMaxEnergy)
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Damage defender takes
            var enemyDmgTaken = enemyHp - heroCharAtk;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + 0);
            $(".statBoard2").text("Total Damage Dealt: " + heroCharAtk);
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            //Check win/loss condition
            checkWinLoss();
            }

        }) 
    }

    function hydraliskAttacks()
    {
        $("#hydraliskBasicAttack").on("click", function()
        {
            //BASIC ATTACK
            if(enemySelected === true)
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/hydraliskBasicAttack.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
            //THIS ATTACK ONLY DOES BASE DAMAGE
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"))
            var playerMaxEnergy = 5
            //Player Energy cant be greater than max energy value
            if (playerEnergy < 5)
            {
                playerEnergy++;
            }
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - enemyCharAtk;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("energy", playerEnergy)
            $("#player").attr("hp", dmgTaken);
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + playerEnergy + " / " + playerMaxEnergy)
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Increment hero attack here
            var heroCharAtkIncrement = parseInt(heroCharAtk) + attackClick * 8;
            //Damage defender takes
            var enemyDmgTaken = enemyHp - heroCharAtk;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
            $(".statBoard2").text("Total Damage Dealt: " + heroCharAtk);
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            //Check win/loss condition
            checkWinLoss();
            }

        })

        $("#hydraliskSpecial1").on("click", function()
        {
            //SPINE FLURRY
            if(enemySelected === true)
            {
            //THIS ATTACK DOES 1-3X BASE DAMAGE, DAMAGE RECEIVED DOUBLED.
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"))
            var playerMaxEnergy = 5
            //Subtract Energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 2;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 2)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/hydraliskEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            else
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/hydraliskSpecial1.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);  
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - enemyCharAtk * 2;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("hp", dmgTaken);
            $("#player").attr("energy", updatePlayerEnergy)
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Random number generator from 1-3
            var spineFlurryRandNum = Math.floor(Math.random() * 3 + 1);
            var spineFlurryDmg = parseInt(heroCharAtk) * spineFlurryRandNum;
            //Damage defender takes
            var enemyDmgTaken = enemyHp - spineFlurryDmg;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
            $(".statBoard2").text("Total Damage Dealt: " + spineFlurryDmg);
            $(".statBoard3").text("Spines Generated: " + spineFlurryRandNum);
            $(".statBoard4").text("Damage Per Spine: " + heroCharAtk);
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            //Check win/loss condition
            checkWinLoss();
            }

        })

        $("#hydraliskSpecial2").on("click", function()
        {
            //Augmented Carapace
            if(enemySelected === true)
            {
            //THIS ATTACK DOES LESS DAMAGE, DAMAGE TAKEN REDUCED
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Subtract energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 1;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 1)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/hydraliskEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");    
            }
            else
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/hydraliskSpecial2.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            var reducedDmg = enemyCharAtk / 2;
            var reducedDmgStat = enemyCharAtk - reducedDmg
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - reducedDmg;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("hp", dmgTaken);
            $("#player").attr("energy", updatePlayerEnergy)
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Increment hero attack here
            var augmentedCarapace = parseInt(heroCharAtk) / 2;
            //Damage defender takes
            var enemyDmgTaken = enemyHp - augmentedCarapace;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + reducedDmg);
            $(".statBoard2").text("Total Damage Dealt: " + augmentedCarapace);
            $(".statBoard3").text("Original Dmg Received: " + enemyCharAtk);
            $(".statBoard4").text("Reduced Dmg Received: " + reducedDmgStat);
            $(".statBoard5").text("Original Dmg Dealt: " + heroCharAtk);
            $(".statBoard6").text("Reduced Dmg Dealt: " + augmentedCarapace);
            }
            //Check win/loss condition
            checkWinLoss();
            }

        })

        $("#hydraliskHeal").on("click", function()
        {
            //REGENERATE
            if(enemySelected === true)
            {
            //THIS ABILITY HEALS FOR A RANDOM AMOUNT. NO DAMAGE THIS TURN.
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Subtract energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 3;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 3)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/hydraliskEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            else
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/hydraliskHeal.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - enemyCharAtk;
            //Generate random number to heal
            var regenerate = Math.floor(10 + Math.random() * 21);
            //Add regenerate value and playerHp
            var regenerateHeal = parseInt(playerHp) + regenerate;
            var dmgTaken = regenerateHeal;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("hp", dmgTaken);
            $("#player").attr("energy", updatePlayerEnergy);
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Damage defender takes
            var enemyDmgTaken = enemyHp;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
            $(".statBoard2").text("Total Damage Dealt: " + 0);
            $(".statBoard3").text("Healing Received: " + regenerate);
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            //Check win/loss condition
            checkWinLoss();
            }

        })
    }

    function darkTemplarAttacks()
    {
        $("#darkTemplarBasicAttack").on("click", function()
        {
            if(enemySelected === true)
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarBasicAttack.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //THIS ATTACK ONLY DOES BASE DAMAGE
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Player Energy can't be greater than max energy value
            if (playerEnergy < 5)
            {
                playerEnergy++;
            }
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - enemyCharAtk;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("energy", playerEnergy);
            $("#player").attr("hp", dmgTaken);
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + playerEnergy + " /  " + playerMaxEnergy)
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Damage defender takes
            var enemyDmgTaken = enemyHp - heroCharAtk;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
            $(".statBoard2").text("Total Damage Dealt: " + heroCharAtk);
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            //Check win/loss condition
            checkWinLoss();
            }

        })

        $("#darkTemplarSpecial1").on("click", function()
        {
            //SHADOW FURY
            if(enemySelected === true)
            {
            //THIS ATTACK GETS TWO RANDOM VALUES FOR DAMAGE DEALT AND TIMES TO ATTACK
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Subtract energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 2;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 2)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            else
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarSpecial1.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - enemyCharAtk;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("hp", dmgTaken);
            $("#player").attr("energy", updatePlayerEnergy);
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Generate random number from 3-5 on how many strikes you get
            var shadowFuryStrikes = Math.floor(2 + Math.random() * 3 + 1)
            //Generate random damage value from 1-5 on how much damage you can get
            var shadowFuryStrikeDmg = Math.floor(2 + Math.random() * 3 + 1);
            //Generate total damage from shadow fury
            var shadowFuryTotalDmg = shadowFuryStrikes * shadowFuryStrikeDmg
            //Damage defender takes
            var enemyDmgTaken = enemyHp - shadowFuryTotalDmg;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
            $(".statBoard2").text("Total Damage Dealt: " + shadowFuryTotalDmg);
            $(".statBoard3").text("Shadow Fury Strikes: " + shadowFuryStrikes);
            $(".statBoard4").text("Damage Per Strike: " + shadowFuryStrikeDmg);
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            //Check win/loss condition
            checkWinLoss();
            }
        })

        $("#darkTemplarSpecial2").on("click", function()
        {
            //VOID SURGE
            if(enemySelected === true)
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarSpecial2.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            attackClick++
            //THIS ATTACK INCREMENTS DAMAGE EACH TIME USED.
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = ($("#player").attr("max-hp"));
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Subtract energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 1;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 1)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            else
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarSpecial1.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Subtracting HP from enemy attack value
            var dmgTaken = playerHp - enemyCharAtk;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("hp", dmgTaken);
            $("#player").attr("energy", updatePlayerEnergy);
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
            $(playerDiv[2]).text("HP: " + dmgTaken + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Get stat value of attack increment
            var heroCharAtkIncrementStat = attackClick * 2;
            //Increment hero attack here
            var heroCharAtkIncrement = parseInt(heroCharAtk) + attackClick * 2;
            //Damage defender takes
            var enemyDmgTaken = enemyHp - heroCharAtkIncrement;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + enemyCharAtk);
            $(".statBoard2").text("Total Damage Dealt: " + heroCharAtkIncrement);
            $(".statBoard3").text("Damage Dealt: " + heroCharAtk);
            $(".statBoard4").text("Charges: " + attackClick);
            $(".statBoard5").text("Incremented Damage: " + heroCharAtkIncrementStat);
            $(".statBoard6").text("");
            }
            //Check win/loss condition
            checkWinLoss();
            }
        })

        $("#darkTemplarHeal").on("click", function()
        {
            //EVASION
            if(enemySelected === true)
            {
            //TAKE NO DAMAGE, GAIN 15 LIFE, DEAL NO DAMAGE
            //======================================================================
            //YOUR CHARACTER
            //Your character's health point values
            var playerHp = ($("#player").attr("hp"));
            var playerMaxHp = 120;
            //Your character's energy point values
            var playerEnergy = ($("#player").attr("energy"));
            var playerMaxEnergy = 5;
            //Subtract energy for ability
            var updatePlayerEnergy = parseInt(playerEnergy) - 2;
            //Check if player has enough energy to use ability
            if (parseInt(playerEnergy) < 2)
            {
            //Not enough energy sound file here
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarEnergy.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //No Damage for either player
            enemyDmgTaken = enemyHp - 0;
            dmgTaken = playerHp - 0;
            //Update stat board
            $(".statBoard0").text("");
            $(".statBoard1").text("You need more energy to perform this ability.");
            $(".statBoard2").text("Select a different ability.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            else
            {
            var audio = $("objSound");
            var audioElement = document.createElement("audio");
            //Link sound file to element
            audioElement.src = "assets/sound/darkTemplarHeal.mp3";
            //Set autoplay to true
            audioElement.autoplay = true;
            //Append variable to html
            audio.append(audioElement);
            //Make sure life total doesn't exceed max hp

            //Enemies attack value
            var enemyCharAtk = Math.floor(6 + Math.random() * 11);
            //Add 15 life to playerHp
            var evasion = parseInt(playerHp) + 15;
            //Use jquery to update Char Hp/Energy after each attack
            $("#player").attr("hp", evasion);
            $("#player").attr("energy", updatePlayerEnergy);
            //Use jquery to show new hp on html
            var playerDiv = $("#player").children();
            $(playerDiv[3]).text("Energy: " + updatePlayerEnergy + " / " + playerMaxEnergy);
            $(playerDiv[2]).text("HP: " + evasion + " / " + playerMaxHp);
            //ENEMY CHARACTER
            //======================================================================
            //Enemy health values
            var enemyMaxHp = $("#enemy").attr("max-hp");
            var enemyHp = ($("#enemy").attr("hp"));
            //Player attack value
            var heroCharAtk = $("#player").attr("attack");
            //Damage defender takes
            var enemyDmgTaken = enemyHp;
            $("#enemy").attr("hp", enemyDmgTaken);
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).text("HP: " + enemyDmgTaken + " / " + enemyMaxHp);
            $(".statBoard0").text("");
            $(".statBoard1").text("Total Damage Received: " + 0);
            $(".statBoard2").text("Total Damage Dealt: " + 0);
            $(".statBoard3").text("Healing Received: " + 15);
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
            //Check win/loss condition
            checkWinLoss();
            }
        })
    }


    //Create click event to select enemy
    //=========================================================================
    function chooseEnemy()
    {
        $(".enemyChar").on("click", ".units", function()
        {
            //Create flag so you can only choose one opponent at a time
            if(enemySelected === false)
            {
                //Append enemy to defender div
                $(".defender").append(this);
                //Give enemy clicked an id to reference later
                $(this).attr("id","enemy");          
                //Change text to defender
                $("#defender").text("DEFENDER");
                //Change instructions
                $("#statBoard").text("STAT BOARD")
                $(".statBoard0").text("");
                $(".statBoard1").text("Stats will be tracked here.");
                $(".statBoard2").text("Select an ability.");
                $(".statBoard3").text("");
                $(".statBoard4").text("");
                $(".statBoard5").text("");
                $(".statBoard6").text("");
                if(totalEnemies === 1)
                {
                    //Remove enemyBox div when last enemy is chosen
                    $("#enemyBox").text("");
                    $("#enemyBox").css({"border": "none"});
                }
            }
            enemySelected = true
        })
    }

    function checkWinLoss()
    {
        var playerHp = ($("#player").attr("hp"));
        var enemyHp = ($("#enemy").attr("hp"));
        //Lose condition
        if(parseInt(playerHp) <= 0)
        {
            var selectedChar = $(".selectChar").children().attr("name");
            if(selectedChar === "Ghost")
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/ghostDeath.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
            }
            else if(selectedChar === "Hydralisk")
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/hydraliskDeath.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
            }
            else if(selectedChar === "Dark Templar")
            {
                var audio = $("objSound");
                var audioElement = document.createElement("audio");
                //Link sound file to element
                audioElement.src = "assets/sound/darkTemplarDeath.mp3";
                //Set autoplay to true
                audioElement.autoplay = true;
                //Append variable to html
                audio.append(audioElement);
            }
            var reset = $("<button>")
            reset.attr("id", "resetButton")
            reset.text("YES")
            var playerDiv = $("#player").children()
            $(playerDiv[2]).css({"color": "red"});
            $(playerDiv[2]).text("Killed In Action");
            $(playerDiv[3]).css({"color": "black"});
            var enemyDiv = $("#enemy").children();
            $(enemyDiv[2]).css({"color": "red"});
            $(enemyDiv[2]).text("Killed In Action");
            $(enemyDiv[3]).css({"color": "black"});
            $("#graveYardBox").text("GRAVEYARD");
            $("#graveYardBox").css({"border": "solid"});
            $("#graveYardBox").css({"width": "100%"})
            $(".defeated").append($("#enemy"));

            $("#statBoard").text("GAME OVER");
            $(".statBoard0").text("");
            $(".statBoard1").text("YOU HAVE BEEN DEFEATED!");
            $(".statBoard2").text("WOULD YOU LIKE TO PLAY AGAIN?");
            $(".statBoard3").text("")
            $(".statBoard3").append(reset);
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            $(reset).on("click", function(){
                window.location.reload();
            })
        }
        //Win condition
        else if(parseInt(enemyHp) <= 0)
        {
            var playerDiv = $("#enemy").children();
            $(playerDiv[2]).css({"color": "red"});
            $(playerDiv[2]).text("Killed In Action");
            $(playerDiv[3]).css({"color": "black"});
            $("#graveYardBox").text("GRAVEYARD");
            $("#graveYardBox").css({"border": "solid"});
            $("#graveYardBox").css({"width": "100%"})
            $(".defeated").append($("#enemy"));
            enemySelected = false;
            totalEnemies--;
            //Update statboard
            if(totalEnemies === 0)
            {
                var reset = $("<button>")
                reset.attr("id", "resetButton")
                reset.text("YES")
                $("#statBoard").text("GAME OVER");
                $(".statBoard0").text("");
                $(".statBoard1").text("YOU ARE VICTORIOUS!");
                $(".statBoard2").text("WOULD YOU LIKE TO PLAY AGAIN?");
                $(".statBoard3").append(reset);
                $(".statBoard4").text("");
                $(".statBoard5").text("");
                $(".statBoard6").text("");
                $(reset).on("click", function(){
                    window.location.reload();
                })
            }
            else
            {
            $(".statBoard0").text("");
            $(".statBoard1").text("Enemy defeated.");
            $(".statBoard2").text("Select a new enemy.");
            $(".statBoard3").text("");
            $(".statBoard4").text("");
            $(".statBoard5").text("");
            $(".statBoard6").text("");
            }
        }
    }

//INITIATE START GAME
//=============================================================================
    main()
})


// var isBodyClicked = false;
// function myFunction() {
//   if(isBodyClicked === false){
//     window.open("http://www.w3schools.com");
//     document.body.removeEventListener('click', myFunction);
//   }
//   isBodyClicked = true;
// }