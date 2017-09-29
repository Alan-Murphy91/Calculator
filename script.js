$(document).ready(function(){
    var counter = 0;
    var string = '0';
    var n;
    
    var zadd = false;
    var zminus = false;
    var zmultiply = false;
    var zdivide = false;
    
    var equals = false;
    var tempStore = 0;
    $('#compiler').html('0');
    
    
//   ---------------- FEEDBACK FOR NUMBER CLICKED ----------------
    
    $('.one').click(function(){
        if(string == '0'){
            equals = false;
            string = '1';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '1';
            $('#compiler').text(string);
        }
    });
    
    $('.two').click(function(){
        if(string == '0'){
            equals = false;
            string = '2';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '2';
            $('#compiler').text(string);
        }
    });
    
    $('.three').click(function(){
        if(string == '0'){
            equals = false;
            string = '3';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '3';
            $('#compiler').text(string);
        }
    });
    
    $('.four').click(function(){
        if(string == '0'){
            equals = false;
            string = '4';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '4';
            $('#compiler').text(string);
        }
    });
    
    $('.five').click(function(){
        if(string == '0'){
            equals = false;
            string = '5';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '5';
            $('#compiler').text(string);
        }
    });
    
    $('.six').click(function(){
        if(string == '0'){
            equals = false;
            string = '6';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '6';
            $('#compiler').text(string);
        }
    });
    
    $('.seven').click(function(){
        if(string == '0'){
            equals = false;
            string = '7';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '7';
            $('#compiler').text(string);
        }
    });
    
    $('.eight').click(function(){
        if(string == '0'){
            equals = false;
            string = '8';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '8';
            $('#compiler').text(string);
        }
    });
    
    $('.nine').click(function(){
        if(string == '0'){
            equals = false;
            string = '9';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '9';
            $('#compiler').text(string);
        }
    });
    
    $('.zero').click(function(){
        if(string == '0'){
            equals = false;
            string = '0';
            $('#compiler').text(string);
        } else {
            equals = false;
            string = string + '0';
            $('#compiler').text(string);
        }
    });
    
    //   ---------------- FEEDBACK FOR NUMBER CLICKED ----------------
    
//    ------------------------------PLUS------------------------------
    $('.plus').click(function(){
        
        if(equals === true){
            $('#compiler').text('0');
            counter = tempStore;
            tempStore = 0;
            $('#compiler1').text(counter.toString());
            equals = false;
            string = '0';
            
            zadd = true;
            zminus = false;
            zmultiply = false;
            zdivide = false;
        }
        
        if(counter === 0 && zminus === true) {
            counter = 0 - parseFloat(string);
            $('#compiler1').text('-' + string);
            $('#compiler').text('0');
            string = '0';
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;
        }
        
        if (counter === 0){
            counter = parseFloat(string);
            $('#compiler1').text(string);
            $('#compiler').text('0');
            string = '0';  
            
            zadd = true;
            zminus = false;
            zmultiply = false;
            zdivide = false;
        } 
        
        if(counter !== 0 && zadd === true){
            $('#compiler').text('0');
            n = counter + parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = true;
            zminus = false;
            zmultiply = false;
            zdivide = false;
        }
        
        if(counter !== 0 && zminus === true){
            $('#compiler').text('0');
            n = counter - parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = true;
            zminus = false;
            zmultiply = false;
            zdivide = false;   
        }
        
        if(counter !== 0 && zmultiply === true){
            $('#compiler').text('0');
            n = counter * parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = true;
            zminus = false;
            zmultiply = false;
            zdivide = false;   
        }
        
        if(counter !== 0 && zdivide === true){
            $('#compiler').text('0');
            n = counter / parseFloat(string);
            counter = n
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = true;
            zminus = false;
            zmultiply = false;
            zdivide = false;   
        }   
    });
//    ------------------------END OF PLUS --------------------------
    
//    ------------------------------MINUS------------------------------
    $('.minus').click(function(){
        
        if(equals === true){
            $('#compiler').text('0');
            counter = tempStore;
            tempStore = 0;
            $('#compiler1').text(counter.toString());
            equals = false;
            string = '0';
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;
        }
        
        else if(counter === 0 && zminus === true) {
            counter = 0 - parseFloat(string);
            $('#compiler1').text('-' + string);
            $('#compiler').text('0');
            string = '0';
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;
        }
        
        else if(counter === 0) {
            counter = parseFloat(string);
            $('#compiler1').text(string);
            $('#compiler').text('0');
            string = '0';
            console.log('yes');
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;
        }
        
        else if(counter !== 0 && zadd === true){
            $('#compiler').text('0');
            n = counter + parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;
        }
        
        else if(counter !== 0 && zminus === true){
            $('#compiler').text('0');
            n = counter - parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;   
        }
        
        else if(counter !== 0 && zmultiply === true){
            $('#compiler').text('0');
            n = counter * parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;   
        }
        
        else if(counter !== 0 && zdivide === true){
            $('#compiler').text('0');
            n = counter / parseFloat(string);
            counter = n
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = true;
            zmultiply = false;
            zdivide = false;   
        }  
    });
//    ------------------------END OF MINUS --------------------------

//    ------------------------------MULTIPLY------------------------------
    $('.multiply').click(function(){
                
        if(equals === true){
            $('#compiler').text('0');
            counter = tempStore;
            tempStore = 0;
            $('#compiler1').text(counter.toString());
            equals = false;
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = true;
            zdivide = false;
            console.log('check');
        }
        
        else if(counter === 0) {
            counter = parseFloat(string);
            $('#compiler1').text(string);
            $('#compiler').text('0');
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = true;
            zdivide = false;
            console.log('check');
        }
        
        else if(counter !== 0 && zmultiply === true){
            $('#compiler').text('0');
            n = counter * parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = true;
            zdivide = false;
            console.log('check');
        }
        
        else if(counter === 0 && zminus === true) {
            counter = 0 - parseFloat(string);
            $('#compiler1').text('-' + string);
            $('#compiler').text('0');
            string = '0';
            console.log('yes');
            zadd = false;
            zminus = false;
            zmultiply = true;
            zdivide = false;
            console.log('check');
        }
        
        else if(counter !== 0 && zadd === true){
            $('#compiler').text('0');
            n = counter + parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = true;
            zdivide = false;
            console.log('check');
        }
        
        else if(counter !== 0 && zminus === true){
            $('#compiler').text('0');
            n = counter - parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = true;
            zdivide = false;
            console.log('check');
        }
        
        else if(counter !== 0 && zdivide === true){
            $('#compiler').text('0');
            n = counter / parseFloat(string);
            counter = n
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            console.log('yes');
            zadd = false;
            zminus = false;
            zmultiply = true;
            zdivide = false;
            console.log('check');
        }
    
    });
//    ------------------------END OF MULTIPLY --------------------------
    
    //    ------------------------------DIVIDE------------------------------
    $('.divide').click(function(){
        
        if(equals === true){
            $('#compiler').text('0');
            counter = tempStore;
            tempStore = 0;
            $('#compiler1').text(counter.toString());
            equals = false;
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = true;
        }
        
        else if(counter !== 0 && zdivide === true){
            $('#compiler').text('0');
            n = counter / parseFloat(string);
            counter = n
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            console.log('yes');
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = true;   
        } 
        
        else if(counter !== 0 && zmultiply === true){
            $('#compiler').text('0');
            n = counter * parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = true;   
        }
        
        else if(counter === 0 && zminus === true) {
            counter = 0 - parseFloat(string);
            $('#compiler1').text('-' + string);
            $('#compiler').text('0');
            string = '0';
            console.log('yes');
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = true;
        }
        
        else if(counter === 0) {
            counter = parseFloat(string);
            $('#compiler1').text(string);
            $('#compiler').text('0');
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = true;
        }
        
        else if(counter !== 0 && zadd === true){
            $('#compiler').text('0');
            n = counter + parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = true;
        }
        
        else if(counter !== 0 && zminus === true){
            $('#compiler').text('0');
            n = counter - parseFloat(string);
            counter = n;
            n = n.toString();
            $('#compiler1').text(n);
            string = '0';
            
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = true;   
        }
         
    });
//    ------------------------END OF DIVIDE --------------------------
    
    
//    ------------------------TOP ROW BUTTONS------------------------
    
    $('.ceee').click(function(){
        if(string !== '0'){
            if(string.length == 1){
                string = '0';
                $('#compiler').text(string);
            } else {
                string = string.substring(0,string.length-1);
                $('#compiler').text(string);
            }
        }
    });
    
    $('.cee').click(function(){
        counter = 0;
        string = '0';
        zadd = false;
        zminus = false;
        zmultiply = false;
        zdivide = false; 
        $('#compiler').text('0');
        $('#compiler1').text("");
        
    });
    
    $('.dot').click(function(){
        equals = false;
        if(string.indexOf('.') == -1){
            equals = false;
            string = string + '.';
            $('#compiler').text(string);
        }
    });
    
    $('.plusequals').click(function(){
        if(string.length == 1 && string.charCodeAt(0) == 45){
            string = '0';
            $('#compiler').text(string);
        }
        
        else if(string.length == 1 && string.charCodeAt(0) != 45 && string.charCodeAt(0) != 48){
            string = '-' + string;
            $('#compiler').text(string);
        }
        
        else if(string.charCodeAt(0) == 48 && string.length == 1){
            string = '-';
            $('#compiler').text(string);
        }
        
        else if(string.length > 1 && string.charCodeAt(0) == 45){
            string = string.substring(1,string.length);
            $('#compiler').text(string);
        }
        
        else if(string.length > 1 && string.charCodeAt(0) != 45){
            string = '-' + string;
            $('#compiler').text(string);
        }
    });
    
    $('.pi').click(function(){
        equals = false;
        if(string.indexOf('3.14159265') == -1){
            equals = false;
            string = '3.14159265';
            $('#compiler').text(string);
        }
    });
    
    $('.equals').click(function(){
        if(zadd === true){
            
            if(string.indexOf('.') === -1){
            $('#compiler').text(counter + parseFloat(string));
            $('#compiler1').text("");    
            } else {
            
            $('#compiler').text((counter + parseFloat(string)).toFixed(3));
            $('#compiler1').text("");
            }
            
            tempStore = counter + parseFloat(string);
            counter = 0;
            string = '0';
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = false;
            equals = true;
        }
        
        else if(zminus === true){
            
            if(string.indexOf('.') === -1){
            $('#compiler').text(counter - parseFloat(string));
            $('#compiler1').text("");
            } else {
            $('#compiler').text((counter - parseFloat(string)).toFixed(3));
            $('#compiler1').text("");
            }
            
            tempStore = counter - parseFloat(string);
            counter = 0;
            string = '0';
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = false;
            equals = true;
        }
        
        else if(zmultiply === true){
            
            if(string.indexOf('.') === -1){
            $('#compiler').text(counter * parseFloat(string));
            $('#compiler1').text("");
            } else {
            $('#compiler').text((counter * parseFloat(string)).toFixed(3));
            $('#compiler1').text("");
            }
            
            tempStore = counter * parseFloat(string);
            counter = 0;
            string = '0';
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = false;
            equals = true;
        }
        
        else if(zdivide === true){
                
            if(string.indexOf('.') === -1){
            $('#compiler').text(counter / parseFloat(string));
            $('#compiler1').text("");
            } else {
                console.log(string.indexOf('.'));
            $('#compiler').text((counter / parseFloat(string)).toFixed(3));
            $('#compiler1').text("");
            }
            
            tempStore = counter / parseFloat(string);
            counter = 0;
            string = '0';
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = false;
            equals = true;
        }
        
        else if(string.length == 1 && string.charCodeAt(0) == 45){
            $('#compiler').text('0');
            $('#compiler1').text("");
            counter = 0;
            string = '0';
            zadd = false;
            zminus = false;
            zmultiply = false;
            zdivide = false;
        }
    });
    
//    --------------------------END OF TOP ROW BUTTONS--------------
    
});