itemlist
  h3 { this.title }

  ul
    li(each="{ items }") { title }


  script.
    this.title = "ITEM LIST";
    this.items = [
     {title: "apple"},
     {title: "orange"},
    ]
