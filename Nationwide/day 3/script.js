let multiply = (x) => {
    return (y) => {
      return x * y;
    };
    }
    
    let multi2 = multiply(2);
    console.log(multi2(20));
    let multi5 = multiply(5);
    console.log(multi5(5));


    let person = () => {
        let name = "Billy";
        return {
          getName: function () {
            return name;
          },
          setName: function (newName) {
            name = newName;
          },
        };
      }
      let personA = person();
      console.log(personA.getName());
      personA.setName("Bob Joe");
      console.log(personA.getName());