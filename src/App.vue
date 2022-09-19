<script>
export default {
  components: {},
  data() {
    return {
      Content: {
        account: {
          host: "smtp.gmail.com",
          port: "465",
          secure: true,
          auth: {
            user: "bjaj09yahoo.com@gmail.com",
            pass: "",
          },
        },
        send: {
          from: "bjaj09yahoo.com@gmail.com",
          to: "",
          subject: "",
          text: "",
          html: "",
        },
      },
      AddingEmail: "",
      Emails: [],
      test1: [],
    };
  },
  methods: {
    AddedEmail() {
      this.Emails.push(this.AddingEmail);
      console.log(this.Content.send.to);
      if (this.Emails.length <= 1) {
        this.Content.send.to = this.AddingEmail;
      } else {
        this.Content.send.to += ", " + this.AddingEmail;
      }
      this.AddingEmail = "";
      console.log(this.Content.send.to);
      // thix.$http.post;
    },
    DeleteEmail(index) {
      this.Emails.splice(index, 1);
    },
    SendEmail() {
      this.$http
        .post("sendmail", {
          account: this.Content.account,
          send: this.Content.send,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.header);
        });
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
        <div class="">
          <div>
            <div class="grid grid-cols-[80px_auto_80px_auto] gap-y-4 gap-1">
              <p>host:</p>
              <input
                type="text"
                placeholder="ex smtp.gmail.com"
                v-model="Content.account.host"
                required
              />
              <p>Port</p>
              <input type="text" v-model="Content.account.port" required />
              <p>Email:</p>
              <input
                type="email"
                v-model="Content.account.auth.user"
                required
              />
              <p>Password:</p>
              <input
                type="password"
                v-model="Content.account.auth.pass"
                required
              />
            </div>
            <div>
              <p>Message:</p>
              <div class="grid grid-cols-[80px_auto_50px] gap-y-4">
                <p>Subject:</p>
                <input type="text" v-model="Content.send.subject" />
                <p></p>
                <p>Message:</p>
                <textarea
                  name=""
                  cols="50"
                  rows="10"
                  v-model="Content.send.text"
                  class="resize-none"
                ></textarea>
              </div>
            </div>
            <button @click="SendEmail()" class="bg-green-400">
              Send email
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
