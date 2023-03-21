<template>
    <q-page>
        <div  class="column items-center q-pa-xl">
        <div class="q-pa-md" style="width: 50%">
            <div style="width: 100%; max-width: 400px">
                <q-chat-message
                    :text="['hey, how are you?']"
                    sent
                />
                <q-chat-message
                    :text="['doing fine, how r you?']"
                />
            </div>
        </div>
        <div style="width: 60%">
            <q-input v-model="msg" type="text" placeholder="Message...">
                <template v-slot:after>
                    <q-btn round dense flat text-color="black" icon="send" @click="sendMsg"/>
                </template>
            </q-input>
        </div>
        </div>
    </q-page>
</template>

<script>

import { defineComponent, ref} from 'vue'
import {Stomp} from "@stomp/stompjs"

export default defineComponent({
    setup() {
        const ws = "ws://localhost:15674/ws" 
        const client = Stomp.client(ws)

        const msg = ref("")

       

        function onConnect() {
            console.log("connect")    
        }

        const sendMsg = function (){
            client.send('/queue/web-stomp-test', { "content-type": "text/plain" }, msg.value);
            msg.value = ""
        }

        const onError = function (e) {
            console.log("error", e);
        }

        client.connect("guest", "guest", onConnect, onError);
        
        return{
            msg, sendMsg, ws, client
        }
    },
})
</script>
