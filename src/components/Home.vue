<template>
  <div>

    <p>TODO load Hexo Bloag</p>


    <div class="top" @keydown="onGroupKeyDown">
      <div tabindex="1" aria-activedescendant="g1i1" class="group">

        <div id="g1i1" tabindex="0" class="item">
          item 1
        </div>

        <div tabindex="0" class="item">
          item 2
        </div>

        <div tabindex="0" class="item">
          item 3
        </div>

        <div tabindex="0" class="item">
          item 4
        </div>

        <div tabindex="0" class="item">
          item 5
        </div>
      </div>


      <div tabindex="1" class="group">
        <div  tabindex="0" class="item">
          item 1
        </div>

        <div tabindex="0" class="item">
          item 2
        </div>

        <div tabindex="0" class="item">
          item 3
        </div>

        <div tabindex="0" class="item">
          item 4
        </div>

        <div tabindex="0" class="item">
          item 5
        </div>
      </div>


    </div>


  </div>
</template>

<script>
  export default {
    name: "home",


    methods: {
      onGroupKeyDown(ev) {

        // if (ev.key === "ArrowDown") {
        //   console.log('down')
        //
        //   document.activeElement.nextElementSibling.focus()
        //
        // }

        const element = document.activeElement;
        const isGroup = element.className === "group";


        const next = element.nextElementSibling;
        const prev = element.previousElementSibling;

        switch (ev.key) {

          case "ArrowDown": {
            const p = element.parentElement;

            p.nextElementSibling.children[0].focus();


          }
            break;
          case "ArrowUp": {
            const p = element.parentElement;
            p.previousElementSibling.children[0].focus();


          }
            break;
          case "ArrowLeft": {

            if (isGroup) {
              debugger

              return;
            }
            prev.focus();
          }
            break;
          case "ArrowRight": {

            if (isGroup) {
              debugger

              return;
            }

            next.focus();
          }
            break;
          default:
            return;
        }
        ev.cancelBubble = true;
        ev.preventDefault();
      }
    }


  }
</script>

<style lang="scss" scoped>


  .top {
    border: 1px black solid;

    &:focus {
      /*border: 10px red solid;*/

      border-color: red;
    }

    > div {
      /*border: 1px green solid;*/
      display: flex;

      > div {

        margin: 2px;
      }

    }
    /*&:active{*/
    /*border: 1px blue solid;*/
    /*}*/

  }

  .group {

    &:focus{
      border: 1px yellow solid;
    }
  }

  .item {

    &:focus{
      border: 1px cornflowerblue solid;
    }
  }

</style>
