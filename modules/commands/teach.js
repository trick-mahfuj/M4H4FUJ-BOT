
      const ask = msg[0].trim();

      const ans = msg[1].trim();

      

      const img = `https://shaon-all-api-07mo.onrender.com//sim?type=teach&ask=${ask}&ans=${ans}`

      try {

        const response = await axios.get(img);

        

                api.sendMessage({ 

          body: `📝Your Data Added To Database Successfully\n1️⃣ASK: ${ask}\n2️⃣ANS: ${ans}`

                        }, event.threadID);

                      } catch (error) {

                        console.error(error);

                        api.sendMessage("An error occurred while  teach.", event.threadID);

                      }

                    }

                  };
