<script>
export default {
  components: {},
  data() {
    return {
      SenderInfo: {
        server: "",
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
    };
  },
};
</script>

<template>
  <header></header>

  <main>
    <div class="">
      <div class="mx-auto my-20 bg-gray-400 w-2/3 p-4">
        <form action="">
          <div class="grid grid-cols-[80px_auto_80px_auto] gap-y-4 gap-1">
            <p>Server:</p>
            <input
              type="text"
              placeholder="ex smtp.gmail.com"
              v-model="SenderInfo.server"
            />
            <p>Port</p>
            <input type="text" v-model="SenderInfo.port" />
            <p>Username:</p>
            <input type="email" v-model="SenderInfo.auth.email" />
            <p>Password:</p>
            <input type="password" v-model="SenderInfo.auth.password" />
          </div>
          <div>
            <p>Message:</p>
            <div class="grid grid-cols-[80px_auto_50px] gap-y-4">
              <p>Subject:</p>
              <input type="text" v-model="Message.subject" />
              <p></p>
              <p>Message:</p>
              <input type="text" v-model="Message.text" />
              <p></p>
              <p>HTML</p>
              <input type="text" v-model="Message.html" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
