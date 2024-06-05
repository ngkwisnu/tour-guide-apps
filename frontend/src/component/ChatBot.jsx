import { useEffect } from 'react';
const ChatBot = () => {
  useEffect(() => {
    // Paste the Intelliticks script here
    window.watsonAssistantChatOptions = {
      integrationID: 'cbfc454d-c4e9-446f-a88a-1916f23299c5', // The ID of this integration.
      region: 'us-south', // The region your integration is hosted in.
      serviceInstanceID: '3831093b-4caa-40b1-967f-910ce3e972c8', // The ID of your service instance.
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const script = document.createElement('script');
    script.src = 'https://web-chat.global.assistant.watson.appdomain.cloud/versions/' + (window.watsonAssistantChatOptions.clientVersion || 'latest') + '/WatsonAssistantChatEntry.js';
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);
  return null;
};

export default ChatBot;









/*
import { useEffect } from 'react';
const ChatBot = () => {
  useEffect(() => {
    // Paste the Intelliticks script here
    (function (I, L, T, i, c, k, s) {
      if (I.iticks) return;
      I.iticks = { host: c, settings: s, clientId: k, cdn: L, queue: [] };
      var h = T.head || T.documentElement;
      var e = T.createElement(i);
      var l = I.location;
      e.async = true;
      e.src = (L || c) + '/client/inject-v2.min.js';
      h.insertBefore(e, h.firstChild);
      I.iticks.call = function (a, b) {
        I.iticks.queue.push([a, b]);
      };
    })(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'L4vuhpu86EC6cJipZ_c', {});
  }, []);
  return null;
};

export default ChatBot;



*/
