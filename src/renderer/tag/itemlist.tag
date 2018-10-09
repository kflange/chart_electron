itemlist
  h3 { this.title }

  ul
    li(each="{ tasks }" onclick="{ parent.remove }") { title }

  input(onkeyup="{ updateInput }" type="text")
  button(class="btn" onclick="{ add }") add

  input(class="form-input" type="file" id="input-example-16")


  script.
    this.title = "ITEM LIST";
    this.tasks = [
     {title: "apple"},
     {title: "orange"},
    ]

    remove(event) {
      console.log("remove");
      const item = event.item;
      const index = this.tasks.indexOf(item);
      this.tasks.splice(index, 1);
    }

    updateInput(event) {
      this.taskName = event.target.value;
    }

    add(event) {
      this.tasks.push({title: this.taskName });
    }
