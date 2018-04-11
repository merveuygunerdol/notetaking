<template>
  <form
    id="main"
    v-cloak>

    <div class="bar">
      <input
        id= "input"
        type="text"
        placeholder="Search Notes"
        v-model="search"
        @input="onChange">
    </div>
    <div
    class="wrapper">
      <ul v-show="isOpen">
        <li
          v-for="(post, index) in noteList"
          :key="index">
          <div
          class="card">
            <header class="card-header">
              <p class="card-header-title is-centered">
                {{ post.title }}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                {{ post.body }}
                <br>
              </div>
            </div>
            <footer class="card-footer">
              <a
                :href="`http://localhost:8080/#/editNote/${post.id}`"
                class="card-footer-item">Edit</a>
              <a
                class="card-footer-item"
                @click="remove(post.id)">Delete</a>
            </footer>
          </div>
          <div
            class="modal"
            :class="{'is-active':isActive}">
            <div class="modal-background "/>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Delete this note?</p>
              </header>
              <section class="modal-card-body">
                <div> You won't be able to revert this! </div>
              </section>
              <footer class="modal-card-foot">
                <button
                  class="button is-danger"
                  @click="removeNote(post.id)">Delete Note</button>
                <button
                class="button">Cancel</button>
              </footer>
            </div>
          </div>
        </li>
      </ul>

    </div>


  </form>
</template>

<script>
import axios from "axios";
import note from "@/components/note.vue";

export default {
    components: {
        note,
    },
    props: {
        id: {
            type: Number,
            default: this.id
        },
    },
    data(){
        return {
            posts:[],
            search:"",
            isOpen: false,
            isActive: false
        };
    },
    computed: {
        noteList() {
            return this.posts.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    created() {
        axios.get("http://localhost:3030/note")
            .then(response => {
                this.posts = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    },
    methods: {
        onChange() {
            this.isOpen = true;
            var input = document.getElementById("input").value;
            if(input === "") {
                this.isOpen = false;
            }
        },
        remove(id){
            this.isActive = true;
            let noteId = id;
            console.log(noteId);
        },
        removeNote(noteId) {
            this.isActive = true;
            console.log(noteId);
            axios.delete("http://localhost:3030/note/" + noteId)
                .then(() => window.location = "http://localhost:8080/")
                .catch(e => {
                    this.errors.push(e);
                });
            this.isActive = false;
            window.location = "http://localhost:8080/";
        },
    }

};

</script>

<style>

/*-------------------------
    The search input
--------------------------*/

.bar{
    background-color:#75d0b2;
    background-image:-webkit-linear-gradient(top, #75d0b2, #75d0b2);
    background-image:-moz-linear-gradient(top, #75d0b2, #75d0b2);
    background-image:linear-gradient(top, #75d0b2, #75d0b2);
    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;

}

.bar input{
    background:#fff no-repeat 13px 13px;
     background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);
    border: none;
    width: 100%;
    line-height: 19px;
    padding: 11px 0;
    border-radius: 2px;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
    outline: none;
    text-indent: 40px;
    margin-bottom: 2px;
}
  .wrapper {
    display: inline;
    max-width: 444px;
    flex-wrap: wrap;
    padding-top: 12px;
  }

</style>


