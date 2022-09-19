<script>
export default {
  components: {},
  data() {
    return {
      SenderInfo: {
        host: "",
        port: "",
        auth: {
          email: "",
          password: "",
        },
      },
      Message: {
        subject: "",
        text: "",
        html: "",
      },
      AddingEmail: "",
      Emails: [],
    };
  },
  methods: {
    AddedEmail() {
      this.Emails.push(this.AddingEmail);
    },
    DeleteEmail(index) {
      this.Emails.splice(index, 1);
    },
  },
};
</script>

<template>
  <header></header>

  <main>
    <div class="">
      <div class="mx-auto gap-3 mt-2 bg-gray-400 p-4 grid grid-cols-[30%_auto]">
        <div>
          <div class="grid grid-cols-[auto_50px]">
            <input
              type="email"
              placeholder="sample@email.com"
              v-model="AddingEmail"
              required
            />
            <button @click="AddedEmail()" class="bg-green-400">add</button>
          </div>
          <div v-for="(Email, index) in Emails" v-bind:key="Email">
            <p>{{ Email }} {{ index }}</p>
            <button class="bg-red-400" @click="DeleteEmail(index)">
              Delete
            </button>
          </div>
        </div>
        <form action=" " class="">
          <div>
            <div class="grid grid-cols-[80px_auto_80px_auto] gap-y-4 gap-1">
              <p>host:</p>
              <input
                type="text"
                placeholder="ex smtp.gmail.com"
                v-model="SenderInfo.host"
                required
              />
              <p>Port</p>
              <input type="text" v-model="SenderInfo.port" required />
              <p>Username:</p>
              <input type="email" v-model="SenderInfo.auth.email" required />
              <p>Password:</p>
              <input
                type="password"
                v-model="SenderInfo.auth.password"
                required
              />
            </div>
            <div>
              <p>Message:</p>
              <div class="grid grid-cols-[80px_auto_50px] gap-y-4">
                <p>Subject:</p>
                <input type="text" v-model="Message.subject" />
                <p></p>
                <p>Message:</p>
                <input type="text" v-model="Message.text" class="h-6" />
                <p></p>
                <p>HTML</p>
                <textarea
                  name=""
                  cols="50"
                  rows="10"
                  v-model="Message.html"
                  class="resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
