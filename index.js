const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => 
        {

        const value = button.innerText;

        // Clear
        if (value === "C") 
        {
            display.value = "";
        }
            // Single delete
        else if (value === "⌫")
                  {
             display.value = display.value.slice(0, -1);
                }

        // Equal
        else if (value === "=")
         {
            try 
            {
                display.value = eval(display.value);
            } 
            catch 
            {
                display.value = "Error";
            }
        }

        // Numbers & Operators
        else
             {
            display.value += value;
        }

    });

});