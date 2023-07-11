<template>
  <div id="app">
    <h1 v-text="greet"></h1>
    <p v-html="hack"></p>
    <h1>{{ name }}</h1>
    <img :src="img" />
    <a v-bind:id="hid" :href="link">click here</a>
    <p v-if="num > 10">greatere than 10</p>
    <p v-else-if="num < 10">less than 10</p>
    <p v-else>it's 10</p>
    <h1 v-bind:title="hid">how are you</h1>
    <button :disabled="true">bind</button>
    <div :class="ispromoted ? 'success' : dangerclss">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cumque.
    </div>
    <div :class="ispromoted && dangerclss" class="success">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cumque.
    </div>
    <button :disabled="btn">bind 2</button>
    <h1 :class="['success', 'arry']">Array classs binding</h1>
    <h1 :class="[ispromoted && dangerclss, cond ? dangerclss : 'arry']">
      Array classs binding
    </h1>
    <h2
      :class="{
        dangerclss: cond,
        success: ispromoted,
        arry: !ispromoted,
      }"
    >
      Object class binding
    </h2>

    <div
      :style="{
        color: 'blue',
        fontSize: header + 'px',
      }"
    >
      inline style using object
    </div>
    <p :style="CSstyle">direct inline object style</p>
    <p :style="[CSstyle, CSstyle1]">direct inline array style</p>
    <p v-show="cond">v-show</p>
    <p v-if="cond">v-if</p>
    <h1 v-for="(char, index) in names" :key="char">{{ index }} {{ char }}</h1>

    <!-- conditional list rendering -->
    <template v-for="char in names">
      <h1 :key="char" v-if="char === 'a'">{{ char }}</h1>
    </template>

    <h1 v-for="num in info" :key="num">{{ num.one }}{{ num.two }}</h1>
    <div v-for="(value, key, index) in myinfo" :key="value">
      <h1>{{ index }} {{ key }} {{ value }}</h1>
    </div>

    <!-- methods -->
    <h1>Add method-{{ add(2, 3) }}</h1>
    <h1>Add method-{{ mul() }}</h1>

    <div>
      <h1>{{ count }}</h1>
      <button v-on:click="increment">increment</button>
      <button @click="count -= 1">Decrement</button>
    </div>

    <!-- forrms -->
    <div>
      {{ formData.name }}
      {{ formData }}
    </div>

    <form action="" @submit.prevent="Submitform">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formData.name" /> <br />
      <label for="country">Country</label>
      <select id="country" v-model="formData.country">
        <option value="">Select country</option>
        <option value="india">India</option>
        <option value="china">China</option>
      </select>
      <br />
      <label for="location">Location</label>
      <select id="location" multiple v-model="formData.jobLocation">
        <option value="india">India</option>
        <option value="china">China</option>
      </select>
      <br />
      <input type="checkbox" id="remote" v-model="formData.checkValue" />
      <label for="remote">ready to relocate?</label>
      <div>
        <br />
        <input
          type="checkbox"
          id="skill"
          value="java"
          v-model="formData.skills"
        />
        <label for="skill">java</label>
        <input
          type="checkbox"
          id="skill"
          value="CSS"
          v-model="formData.skills"
        />
        <label for="skill">CSS</label>
        <input
          type="checkbox"
          id="skill"
          value="HTML"
          v-model="formData.skills"
        />
        <label for="skill">HTML</label>
        <br />
        <button>Submit</button>
      </div>
    </form>

    <Greet />
    <!-- props  -->
    <Greet msg="I'm Fine" msg1="Thank you" />
    <Greet :wish="morn" />
    <Article title="Title" :likes="50" :pub="true" />
    <Article :likes="50" :pub="true" />

    <!-- custom component events -->
    <button @click="showPop = true">open</button>
    <Pop v-show="showPop" @close="showPOP" />

    <!-- slots -->
    <SlotData>
      <template v-slot:head ="sprop">
        <h1>{{ sprop.header }}</h1>
      </template>
      <template v-slot:default>
        <h1> slotttttt</h1>
      </template>
    </SlotData>
  </div>
</template>

<script>
import GreetComponent from "./components/Greet.vue";
import ArticleComp from "./components/Article.vue";
import PopComp from "./components/Pop.vue";
import SlotDataComp from "./components/SlotData.vue";

export default {
  name: "App",
  data() {
    return {
      name: "manoj",
      greet: "hi",
      img: "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&f   crop=1",
      link: "https://www.google.com/",
      num: 10,
      hack: `<a href="#" onclick="alert('hi there')">win a prize</a>`,
      hid: "head",
      btn: false,
      dangerclss: "danger",
      ispromoted: true,
      cond: false,
      header: 50,
      morn: "Good Morning",
      CSstyle: {
        color: "yellow",
        textDecoration: "underline",
      },
      CSstyle1: {
        padding: "3rem",
        border: "2px solid #2c3e50",
      },
      names: ["a", "b", "c"],
      info: [
        { one: "1", two: "2" },
        { one: "11", two: "21" },
        { one: "12", two: "22" },
      ],
      myinfo: {
        Name: "manoj",
        course: "vue",
      },
      mulValue: 3,
      count: 0,
      showPop: false,

      // form validation
      formData: {
        name: "",
        country: "",
        jobLocation: [],
        checkValue: false,
        skills: [],
      },
    };
  },
  methods: {
    add(a, b) {
      return a + b;
    },
    mul() {
      return this.mulValue * this.mulValue;
    },
    increment() {
      this.count += 1;
    },
    Submitform() {
      console.log("Form Data", this.formData); //Form Data is obj name
    },
    showPOP(msg) {
      this.showPop = false;
      console.log("Msg", msg);
    },
  },
  components: {
    Greet: GreetComponent,
    Article: ArticleComp,
    Pop: PopComp,
    SlotData: SlotDataComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.success {
  color: green;
}

.arry {
  font-size: 5rem;
  text-decoration: underline;
}

.danger {
  color: red;
  border: #2c3e50;
}

/* Styles for the <h1> element */
h1 {
  font-size: 24px;
  color: #333;
}

/* Styles for the <p> element */
p {
  font-size: 16px;
  color: #555;
}

/* Styles for the <img> element */
img {
  max-width: 100%;
  height: auto;
}

/* Styles for the <a> element */
a {
  color: blue;
  text-decoration: none;
}

/* Styles for the success class */
.success {
  color: green;
  font-weight: bold;
}

/* Styles for the dangerclss class */
.dangerclss {
  color: red;
  font-weight: bold;
}

/* Styles for the disabled button */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Styles for the v-show and v-if elements */
[v-show],
[v-if] {
  display: none;
}

/* Styles for the v-for elements */
[v-for] {
  margin-bottom: 10px;
}

/* Styles for the form elements */
form {
  margin-top: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
select,
button {
  margin-top: 5px;
}

input[type="checkbox"] {
  margin-right: 5px;
}

button {
  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>

