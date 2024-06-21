addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
    // @ts-ignore
    const KV = oai_global_variables;
    const logo = 'data:image/png;base64,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';
  
    
  function parseJwt(token) {
    const base64Url = token.split('.')[1];// 获取载荷部分
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);// 返回载荷解析后的 JSON 对象
  }
  
      // 使用哈希函数加密username
      function generatePassword(token) {
          let hash = 7
          for (let i = 0; i < token.length; i++) {
            const char = token.charCodeAt(i)
            hash = (hash << 5) - hash + char
            hash = hash & hash // Convert to 32bit integer
          }
          // 将哈希值转换为正数，并转换为字符串
          let hashStr = Math.abs(hash).toString()
          // 如果 hashStr 长度不足 10 位，用 '7' 填充
          while (hashStr.length < 15) {
            hashStr = '7' + hashStr
          }
          // 截取前10位作为密码
          return hashStr.substring(0, 15)
        }
  
  function isTokenExpired(token) {
    // 检查 token 是否存在，如果不存在或为空字符串，直接返回 true
    if (!token || token === "Bad_RT" ||token === "Bad_AT" ) {
        return true;
    }
    const payload = parseJwt(token);
    const currentTime = Math.floor(Date.now() / 1000);// 获取当前时间戳（秒）
    return payload.exp < currentTime;// 检查 token 是否过期
  }
  
  async function getOAuthLink(shareToken, proxiedDomain) {
     //const url = `https://${proxiedDomain}/api/auth/oauth_token`;
     // 不知道为什么，好像没法直接通过反代的服务器获取oauth link
   const url = `https://new.oaifree.com/api/auth/oauth_token`;
  
   const response = await fetch(url, {
       method: 'POST',
       headers: {
           'Origin': `https://${proxiedDomain}`,
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           share_token: shareToken
       })
   })
   const data = await response.json();
   return data.login_url;
  }
  
  async function usermatch(userName, usertype) {
    const typeUsers = await KV.get(usertype) ||'';
    const typeUsersArray = typeUsers.split(","); // 将返回的用户类型字符串分割成数组
    return typeUsersArray.includes(userName); // 检查用户名是否在类型用户数组中
  }
  
  async function getShareToken(userName, accessToken,accountNumber) {
    const url = 'https://chat.oaifree.com/token/register';
   /*  
     const tokenPrefix = await KV.get('token_prefix');
    const baseUserName = tokenPrefix + userName.replace(/_\d+$/, ''); // 移除用户名后的编号
    */
    const passwd = await generatePassword(userName);
    const isAdmin = await usermatch(userName, 'Admin') || userName=='atdirect';
    const isVIP = await usermatch(userName, 'VIPUsers') || await usermatch(userName, 'Admin') ;
    const isFreeUsers = await usermatch(userName, 'FreeUsers');
    const isTemporary = await usermatch(accountNumber, 'TemporaryAN') && !isAdmin;
  
    
    //console.log(`getShareToken - userName: ${userName}, accountNumber: ${accountNumber}, showConversations: ${isAdmin}, isVIP: ${isVIP}, isTemporary: ${isTemporary}, accessToken: ${accessToken}`);
    const body = new URLSearchParams({
        access_token: accessToken,  // 使用从全局变量中获取的 accessToken
        unique_name: passwd, //前缀+无后缀用户名
        site_limit: '', // 限制的网站
        expires_in: isVIP ? '0' : '86400', // token有效期（单位为秒），填 0 则永久有效
        gpt35_limit: '-1', // gpt3.5 对话限制
        gpt4_limit: isFreeUsers ? '-1' : '-1', // gpt4 对话限制，-1为不限制
        show_conversations: isAdmin ? 'true' : 'false', // 是否显示所有人的会话
        temporary_chat: isTemporary ? 'true' : 'false', //默认启用临时聊天
        show_userinfo: 'false', // 是否显示用户信息
        reset_limit: 'false' // 是否重置对话限制
    }).toString();
    const apiResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    });
    const responseText = await apiResponse.text();
    const tokenKeyMatch = /"token_key":"([^"]+)"/.exec(responseText);
    const tokenKey = tokenKeyMatch ? tokenKeyMatch[1] : 'Can not get share token.';
    return tokenKey;
  }
  
  
  async function handleRequest(request) {
      const url = new URL(request.url);
      const voiceURL = await KV.get('VoiceURL');
      const chatlogourl = await KV.get('ChatLogoURL') || await KV.get('LogoURL') || logo;
      const chatusername = await KV.get('ChatUserName') || 'ChatGPT';
      const chatmail = await KV.get('ChatMail') || 'Power by Pandora';
       const cookies = request.headers.get('Cookie');
  let aian = '';
if (cookies) {
  const cookiesArray = cookies.split(';');
  for (const cookie of cookiesArray) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'aian') {
      aian = value;
    }
  }
}

    
  // Specific handling for /auth/login_auth0
  if (url.pathname === '/auth/login_auth0') {
      const html = await getHTMLSelectionPage();
      return new Response(html, { headers: { 'Content-Type': 'text/html' } });
      
    }
    if (url.pathname === '/auth/login_auth0/login') {
      const params = new URLSearchParams(url.search);
      const encryptedAN = params.get('an');
      if (request.method === 'GET') {
      if (encryptedAN) {
          if (encryptedAN == 'Random'){
              const accountNumber = 'Random';
              const html = await getHTMLLoginPage(accountNumber);
              return new Response(html, { headers: { 'Content-Type': 'text/html' } });
          }
          else {try {
              const accountNumber = await decrypt(encryptedAN, 'eGJjZWFsZGVuYmVqZGZzY3VhbmZpZGZz'); //必须是32位
              const html = await getHTMLLoginPage(accountNumber);
              return new Response(html, { headers: { 'Content-Type': 'text/html' } });
          } catch (e) {
              return new Response('Invalid account number', { status: 400 });
          }}
      } else {
          const html = await getHTMLSelectionPage();
          return new Response(html, { headers: { 'Content-Type': 'text/html' } });
      }}
      if (request.method === 'POST') {
          return handlePostRequest(request);
      }
  }
  
    if (url.pathname === '/auth/login') {
     /*  const token = url.searchParams.get('token');
     if (!token) {
        if (request.method === 'GET') {
          return handleLoginGetRequest(request);
        } else if (request.method === 'POST') {
          return handleLoginPostRequest(request);
        } else {
          return new Response('Method not allowed', { status: 200 });
        }
      } */
      url.host = 'new.oaifree.com';
      url.protocol = 'https';
      return fetch(new Request(url, request));
    }
   //Voice地址和其他
  url.host = 'new.oaifree.com';
  url.protocol = 'https';
  const modifiedRequest = new Request(url, request);
  if(voiceURL){
  modifiedRequest.headers.set('X-Voice-Base', `https://${voiceURL}`);
  }
  const response = await fetch(modifiedRequest);

  //去掉小锁
  if (url.pathname === '/backend-api/conversations') {
    const data = await response.json();
    data.items = data.items.filter(item => item.title !== "🔒");
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: response.headers
    });
  }
  
  //修改用户信息
  if (url.pathname === '/backend-api/me') {
    const data = await response.json();
    data.picture = `${chatlogourl}`;
    data.email = `${chatmail}`;
    data.name = `${chatusername} [${aian}]`;
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: response.headers
    });
  }
  if (url.pathname === '/backend-api/accounts/check') {
    const data = await response.json();
    for (const accountId in data.accounts) {
      if (data.accounts[accountId].account) {
        data.accounts[accountId].account.name = `${chatusername} [${aian}]`;
      }
    }
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: response.headers
    });
  }
  if (url.pathname === '/backend-api/gizmo_creator_profile') {
    const data = await response.json();
    data.name = `${chatusername} [${aian}]`;
    data.display_name = `${chatusername} [${aian}]`;
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: response.headers
    });
  }
    return response;
}
  
  
  
  async function handlePostRequest(request) {
    const formData = await request.formData();
    const userName = formData.get('un');
    const accountNumber = formData.get('accountNumber');
    const turnstileResponse = formData.get('cf-turnstile-response');
    const anissues = formData.get('anissues') === 'on';
  
    return await handleLogin(userName, accountNumber, turnstileResponse, anissues);
  }
  
  async function handleLogin(userName, initialaccountNumber, turnstileResponse, anissues) {
    //Turnsile认证
    if (turnstileResponse !== 'do not need Turnstle' && (!turnstileResponse || !await verifyTurnstile(turnstileResponse))) {
      return generateErrorResponse('Turnstile verification failed',initialaccountNumber);
    }
    const GPTState = await getGPTStatus();
    const status = await KV.get('Status');
    if ((GPTState == 'major_performance')&&(!status)){
    await loginlog(userName, 'Bad_OAIStatus','Error');
    return generateErrorResponse(`OpenAI service is under maintenance.<br>Official status: ${GPTState} <br>More details: https://status.openai.com`);
  }
  
  
  
      const proxiedDomain = await KV.get('FreeURL') || await KV.get('WorkerURL');//修改为反代new站的地址
     /*
      try {
          const tokenData = JSON.parse(userName);
          if (tokenData.accessToken) {
           const jsonAccessToken = tokenData.accessToken;
           const shareToken = await getShareToken('atdirect', jsonAccessToken, '0');
           if (shareToken === 'Can not get share token.') {
              return generateErrorResponse(`Error fetching share token.`,accountNumber);
          }
        
          return Response.redirect(await getOAuthLink(shareToken, proxiedDomain), 302);
         }
        } catch (e) {
          // 输入不是 JSON 格式
        }
    
   
     // 如果输入用户名长度大于50，直接视作accessToken
     if (userName.length > 50) {
      const shareToken = await getShareToken('atdirect', userName, '0');
    
      if (shareToken === 'Can not get share token.') {
          return generateErrorResponse(`Error fetching share token.`,accountNumber);
      }
    
      return Response.redirect(await getOAuthLink(shareToken, proxiedDomain), 302);
    }
    
    
     // 如果输入用户名fk开头，直接视作sharetoken
    if (userName.startsWith('fk-')) {
      const shareToken = userName;
      return Response.redirect(await getOAuthLink(shareToken, proxiedDomain), 302);
    }
    
    */
    
      const userRegex = new RegExp(`^${userName}_(\\d+)$`);
      let fullUserName = userName;
      let foundSuffix = false;
      let accountNumber = '';
     // let suffix = '';
         
    
      //const freeforcecar = await KV.get("FreeForceAN");
       const defaultusers = await KV.get("Users");
       const vipusers = await KV.get("VIPUsers");
       const freeusers = await KV.get("FreeUsers");
       const admin = await KV.get("Admin");
    
       // 合并所有用户
       const users = `${defaultusers},${vipusers},${freeusers},${admin}`;
    
    
      // 自动查找匹配的用户名格式abc_xxx，并添加后缀
      users.split(",").forEach(user => {
        const match = user.match(userRegex);
            if (match) {
                foundSuffix = true;
               // suffix = match[1];  // 更新后缀为实际的账号编号
                fullUserName = user; // 更新为完整的用户名
            }
        });
    
    
    if (!foundSuffix && !users.split(",").includes(userName)) {
        await loginlog(userName, '404','Error');
        return generateErrorResponse('Unauthorized access.',initialaccountNumber);
    }
  
        //禁止免费用户使用其他车
       const notfreeaccount = !(await usermatch(initialaccountNumber, 'FreeAliveAccounts')) && (await usermatch(fullUserName, 'Freeusers'));
      if (notfreeaccount) {
          return generateErrorResponse('Unauthorized access, please switch accounts.',initialaccountNumber);
      }
      if (initialaccountNumber =='Random'){
           accountNumber = await getAccountNumber(fullUserName,'', 'Free', 'Random',anissues);
      }
      else{
           accountNumber = await getAccountNumber(fullUserName,initialaccountNumber, 'Free', 'Check',anissues);
      }
      const refreshTokenKey = `rt_${accountNumber}`;
      const accessTokenKey = `at_${accountNumber}`;
      const accessToken = await KV.get(accessTokenKey);
  
      //使用佬友的sharetoken
      if (accessToken){
       if (accessToken.startsWith('fk-')) {
          const fkDomain = await KV.get('FKDomain') ||proxiedDomain;
          //return Response.redirect(await getOAuthLink(accessToken, fkDomain), 302);
          return Response.redirect(`https://${fkDomain}/auth/login_share?token=${accessToken}`)
         }
      }
  
      if (isTokenExpired(accessToken)) {
           // 给没有refresh token的萌新用（比如我），取消下面这行注释即可享用
          // return generateErrorResponse('The current access token has not been updated.',accountNumber);
           // 如果 Token 过期，执行获取新 Token 的逻辑
           const url = 'https://token.oaifree.com/api/auth/refresh';
          const refreshToken = await KV.get(refreshTokenKey);
          if (refreshToken) {
    
           // 发送 POST 请求
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
              body: `refresh_token=${refreshToken}`
          });
         
          // 检查响应状态
          if (response.ok) {
              const data = await response.json();
              const newAccessToken = data.access_token;
              await KV.put(accessTokenKey, newAccessToken);
          } else {
              await KV.put(accessTokenKey, "Bad_RT");
              return generateErrorResponse(`Error fetching access token.`,accountNumber);
          }
      } 
      else {
          return generateErrorResponse('The current access token has not been updated.',accountNumber);
      }
      }   
          const finalaccessToken = await KV.get(accessTokenKey);
      const shareToken = await getShareToken(fullUserName, finalaccessToken,accountNumber);
    
      if (shareToken === 'Can not get share token.') {
          //await KV.put(accessTokenKey, "Bad_AT");
          return generateErrorResponse(`Error fetching share token.`,accountNumber);
      }
    
      
       // Log the successful login
       await loginlog(userName, accountNumber,'Free');
       const oauthLink = await getOAuthLink(shareToken, proxiedDomain);
       const headers = new Headers();
     headers.append('Location', oauthLink);
     headers.append('Set-Cookie', `aian=${accountNumber}; Path=/`);
     
     
       const response = new Response(null, {
           status: 302,
           headers: headers
       });
       return response;

    }
  
  
  async function verifyTurnstile(responseToken) {
      const removeTurnstile = await KV.get('RemoveTurnstile')||'';
      if (removeTurnstile){return 'true'}
    const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const secretKey = await KV.get('TurnstileKeys');
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: secretKey,
        response: responseToken
      })
    });
    const data = await response.json();
    return data.success;
  }
  
  
  async function loginlog(userName, accountNumber, antype) {
      const currentTime = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
      const timestamp = Date.now();
      const logEntry = {
          user: userName,
          accountNumber: accountNumber,
          time: currentTime,
          timestamp: timestamp
      };
      // Retrieve the existing log array or create a new one if it doesn't exist
      const lastLoginLogs = await KV.get(`${antype}LoginLogs`);
      let logArray = [];
      if (lastLoginLogs) {
          logArray = JSON.parse(lastLoginLogs);
      }
      logArray.push(logEntry);
      await KV.put(`${antype}LoginLogs`, JSON.stringify(logArray));
    }
    
    async function deletelog(userName, accountNumber,antype) {
      const currentTime = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
      const logEntry = {
          user: userName,
          time: currentTime,
          accountNumber: accountNumber
      };
      // Retrieve the existing log array or create a new one if it doesn't exist
      const lastDeleteLogs = await KV.get(`${antype}DeleteLogs`);
      let logArray = [];
      if (lastDeleteLogs) {
          logArray = JSON.parse(lastDeleteLogs);
      }
      logArray.push(logEntry);
      await KV.put(`${antype}DeleteLogs`, JSON.stringify(logArray));
    }
  
    //AN获取和删除
    async function getAccountNumber(userName, initialaccountNumber, antype, mode, anissues) {
      const currentTime = Date.now()
      const Milliseconds = 3 * 60 * 1000;
      
      const checkAndRemoveIssueAccount = async (accountNumber) => {
        // Retrieve the login logs
        const lastLoginLogs = await KV.get(`${antype}LoginLogs`);
        if (lastLoginLogs) {
          const logArray = JSON.parse(lastLoginLogs);
          const userLogs = logArray.filter(log => log.user === userName && log.accountNumber === accountNumber);
          if (userLogs.length > 0) {
            const recentLogins = userLogs.filter(log => {
              const logTime = log.timestamp;
              return currentTime - logTime <= Milliseconds;
            });
            if (recentLogins.length >= 1 && anissues) {
              // 删除问题账号
              const aliveAccount = await KV.get(`${antype}AliveAccounts`);
              let aliveAccountList = aliveAccount.split(',');
              aliveAccountList = aliveAccountList.filter(acc => acc !== accountNumber.toString());
              await KV.put(`${antype}AliveAccounts`, aliveAccountList.join(','));
              await deletelog(userName, accountNumber,antype);
              return true;
            }
          }
        }
        return false;
      };
    
      // 顺序读取
      if (mode == 'Order') {
        const aliveAccountString = await KV.get(`${antype}AliveAccounts`) || '';
        let aliveAccounts = aliveAccountString
          .split(',')
          .map(num => parseInt(num, 10))
          .filter(num => !isNaN(num));
    
        if (aliveAccounts.length > 0) {
          let minAccount = Math.min(...aliveAccounts);
          if (await checkAndRemoveIssueAccount(minAccount)) {
            aliveAccounts = aliveAccounts.filter(acc => acc !== minAccount);
            minAccount = aliveAccounts.length > 0 ? Math.min(...aliveAccounts) : 1;
          }
          return minAccount;
        }
        return 1;
      }
    
      // 检测和删除问题账号
      if (mode == 'Check') {
        await checkAndRemoveIssueAccount(initialaccountNumber);
        return initialaccountNumber;
      }
    
      // 随机读取
      if (mode == 'Random') {
        // Retrieve the last login logs
        const lastLoginLogs = await KV.get(`${antype}LoginLogs`);
        if (lastLoginLogs) {
          const logArray = JSON.parse(lastLoginLogs);
          const userLogs = logArray.filter(log => log.user === userName);
          const recentLogins = userLogs.filter(log => {
            const logTime = log.timestamp;
            return currentTime - logTime <= Milliseconds;
          });
    
          if (recentLogins.length > 0) {
            const lastAccount = recentLogins[recentLogins.length - 1].accountNumber;
            if (await checkAndRemoveIssueAccount(lastAccount)) {
              const aliveAccountString = await KV.get(`${antype}AliveAccounts`) || '';
              const aliveAccounts = aliveAccountString
                .split(',')
                .map(num => parseInt(num, 10))
                .filter(num => !isNaN(num));
    
              if (aliveAccounts.length > 0) {
                const randomAccount = aliveAccounts[Math.floor(Math.random() * aliveAccounts.length)];
                return randomAccount;
              }
              return 0;
            }
            return lastAccount;
          }
        }
    
  
        const aliveAccountString = await KV.get(`${antype}AliveAccounts`) || '';
        let aliveAccounts = aliveAccountString
          .split(',')
          .map(num => parseInt(num, 10))
          .filter(num => !isNaN(num));
    
        if (aliveAccounts.length > 0) {
          let randomAccount = aliveAccounts[Math.floor(Math.random() * aliveAccounts.length)];
          if (await checkAndRemoveIssueAccount(randomAccount)) {
            aliveAccounts = aliveAccounts.filter(acc => acc !== randomAccount);
            if (aliveAccounts.length > 0) {
              randomAccount = aliveAccounts[Math.floor(Math.random() * aliveAccounts.length)];
              return randomAccount;
            }
            return 0;
          }
          return randomAccount;
        }
        return 0;
      }
    
      return initialaccountNumber;
    }
    
    
  
  async function generateErrorResponse(message,accountNumber) {
  
      const errorHtml = `
      <div class="ulp-field ulp-error">
        <div class="ulp-error-info">
          <span class="ulp-input-error-icon" role="img" aria-label="Error"></span>
          ${message}
        </div>
      </div>
      `;
      const html = await getHTMLLoginPage(accountNumber);
      const responseHtml = html.replace(
        '<button class="continue-btn" type="submit">Continue</button>',
        errorHtml + '<button class="continue-btn" type="submit">Continue</button>'
      );
      return new Response(responseHtml, { headers: { 'Content-Type': 'text/html' } });
    }
   
  
    // 将密钥转换为 CryptoKey 对象
  async function getCryptoKey(secret) {
      return crypto.subtle.importKey(
          'raw',
          new TextEncoder().encode(secret),
          'AES-GCM',
          false,
          ['encrypt', 'decrypt']
      );
  }
  
  // 加密函数
  async function encrypt(text, secret) {
      const iv = crypto.getRandomValues(new Uint8Array(12)); // 初始化向量
      const key = await getCryptoKey(secret);
      const encrypted = await crypto.subtle.encrypt(
          {
              name: 'AES-GCM',
              iv: iv
          },
          key,
          new TextEncoder().encode(text)
      );
  
      // 返回 base64 编码的 iv 和加密结果
      return btoa(String.fromCharCode(...iv)) + ':' + btoa(String.fromCharCode(...new Uint8Array(encrypted)));
  }
  
  // 解密函数
  async function decrypt(encryptedText, secret) {
      const [iv, data] = encryptedText.split(':').map(part => Uint8Array.from(atob(part), c => c.charCodeAt(0)));
      const key = await getCryptoKey(secret);
      const decrypted = await crypto.subtle.decrypt(
          {
              name: 'AES-GCM',
              iv: iv
          },
          key,
          data
      );
  
      return new TextDecoder().decode(decrypted);
  }
  
  async function getGPTStatus(){
      const url = 'https://status.openai.com/api/v2/summary.json';
      
    
       // 发送 POST 请求
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
      });
      // 检查响应状态
      if (response.ok) {
          const data = await response.json();
          const status = data.components.find((component) => component.name === 'ChatGPT');
          //return JSON.stringify(status);
          return status.status;
     }
     else {return 'operational';}
    }
    
    async function getHTMLSelectionPage() {
      const aliveAccounts = await KV.get('FreeAliveAccounts') || '';
      const aliveAccountsArray = aliveAccounts.split(',').map(num => num.trim()).filter(num => num !== '');
      const websiteName = await KV.get('FreeWebName') || await KV.get('WebName') || 'Haibara AI';
      const introContent = await KV.get('FreeWebIntro') || '';
  
      const options = await Promise.all(aliveAccountsArray.map(async (accountNumber) => {
          const encryptedAN = await encrypt(accountNumber, 'eGJjZWFsZGVuYmVqZGZzY3VhbmZpZGZz'); // 必须是32位
          return `
              <form action="/auth/login_auth0/login" method="GET" class="plus-form" id="form-${accountNumber}">
                  <input type="hidden" name="an" value="${encryptedAN}">
                  <button type="submit" class="plus-link">${accountNumber}</button>
              </form>
          `;
      }));
  
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${websiteName}</title>
          <meta name="description" content="GPT4o号池，提供海量GPT资源。">
          <meta name="keywords" content="GPT4, GPT4o, 免费AI">
          <meta name="robots" content="index, follow">
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
      
              body, html {
                  font-family: 'Inter', sans-serif;
                  background-color: #f9f9fb;
                  color: #2d333a;
                  height: 100%;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 900px;
                  margin: 0 auto;
                  padding: 40px 20px;
                  position: relative;
              }
      
              h1 {
                  color: #10a37f;
                  font-size: 36px;
                  margin: 20px 0;
                  position: absolute;
                  top: 20px;
                  left: 20px;
              }
      
              .intro {
                  background: #f0f4f8;
                  border: 1px solid #10a37f;
                  margin: 80px 0 20px 0;
                  padding: 20px;
                  border-radius: 12px;
                  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
              }
      
              .intro p {
                  margin: 10px 0;
                  line-height: 1.6;
              }
      
              .intro p b {
                  color: #10a37f;
              }
      
              a {
                  color: #10a37f;
                  text-decoration: none;
              }
      
              a:hover {
                  text-decoration: underline;
              }
      
              .plus-container {
                  margin: 40px 0;
                  text-align: center;
              }
      
              .account-count {
                  font-size: 24px;
                  color: black;
                  padding: 0 5px;
                  animation: blinker 2s linear infinite;
              }
      
              .account-links {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 10px;
                  justify-content: center;
                  margin-top: 20px;
              }
      
              .plus-form {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: linear-gradient(135deg, #10a37f, #2dd4bf);
                  border: 2px solid #10a37f;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  position: relative;
                  padding: 10px 20px;
                  transition: transform 0.3s, background 0.3s;
              }
      
              .plus-form:hover {
                  transform: translateY(-2px);
                  background: linear-gradient(135deg, #2dd4bf, #10a37f);
              }
      
              .plus-link {
                  display: block;
                  width: 100%;
                  padding: 12px;
                  border: none;
                  background: none;
                  color: white;
                  font-size: 16px;
                  font-weight: 600;
                  text-align: center;
                  cursor: pointer;
              }
      
              .footer {
                  text-align: center;
                  font-size: 12px;
                  padding: 20px;
              }
      
              .footer a {
                  color: black;
                  text-decoration: none;
              }
      
              .footer a:hover {
                  text-decoration: none;
                  color: black;
              }
      
              input[type="number"] {
                  border: 2px solid green;
                  background-color: transparent;
                  border-radius: 4px;
                  padding: 5px;
                  font-size: 16px;
              }
      
              @keyframes blinker {
                  50% {
                      opacity: 0;
                  }
              }
      
              @media (max-width: 768px) {
                  .plus-form {
                      width: 100%;
                  }
      
                  .plus-link {
                      font-size: 14px;
                  }
      
                  h1 {
                      font-size: 28px;
                      top: 10px;
                      left: 10px;
                  }
              }
      
              .draw-button {
                  background-color: #10a37f;
                  color: white;
                  border: none;
                  padding: 10px 20px;
                  font-size: 16px;
                  cursor: pointer;
                  border-radius: 8px;
                  margin-left: 10px;
              }
      
              .draw-button:hover {
                  background-color: #2dd4bf;
              }
          </style>
          <script>
          function drawRandomAccount() {
              const accountForms = document.querySelectorAll('.plus-form');
              const randomForm = accountForms[Math.floor(Math.random() * accountForms.length)];
              randomForm.submit();
          }
      </script>
              <script type="application/ld+json">
                  {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "${websiteName}",
                    "url": "https://free.nboai.com",
                  }
              </script>
          </head>
          
          <body>
              <header>
                  <h1>${websiteName}</h1>
              </header>
              <main class="container">
                  ${introContent ? `
                  <section class="intro">
                      ${introContent}
                  </section>` : ''}
          
                  <section class="plus-container">
                      <label>免费节点数：<span class="account-count">${aliveAccountsArray.length}</span></label>
                      <button class="draw-button" onclick="drawRandomAccount()">一键抽奖</button>
                      <div class="account-links">
                      ${options.join('')}
                      </div>
                  </section>
              </main>
          
              <footer class="footer">
                  <p>&copy; All rights reserved. | Powered by <a href="https://openai.com" target="_blank">OpenAI</a> & <a href="https://linux.do" target="_blank">Pandora</a></p>
              </footer>
          </body>
          </html>
      `;
  }
  
  
  async function getHTMLLoginPage(accountNumber) {
    const logourl = await KV.get('LogoURL') || logo;
    const WorkerURL=await KV.get('WorkerURL');
    const turnstileSiteKey=await KV.get('TurnstileSiteKey');
    const websiteName = await KV.get('FreeWebName') || await KV.get('WebName') || 'Haibara AI';
      const removeTurnstile = await KV.get('RemoveTurnstile')||'';
      return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn1.oaifree.com/_next/static/media/apple-touch-icon.82af6fe1.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn4.oaifree.com/_next/static/media/favicon-32x32.630a2b99.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn4.oaifree.com/_next/static/media/favicon-16x16.a052137e.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Free - ${websiteName}</title>
        <style>
            @charset "UTF-8";
            .oai-header img {
                height: auto;
                width: 128px;
                margin-top: 80px;
            }
    
            a {
                font-weight: 400;
                text-decoration: inherit;
                color: #10a37f;
            }
    
            .main-container {
                flex: 1 0 auto;
                min-height: 0;
                display: grid;
                box-sizing: border-box;
                grid-template-rows: [left-start center-start right-start] 1fr [left-end center-end right-end];
                grid-template-columns: [left-start center-start] 1fr [left-end right-start] 1fr [center-end right-end];
                align-items: center;
                justify-content: center;
                justify-items: center;
                grid-column-gap: 160px;
                column-gap: 160px;
                padding: 80px;
                width: 100%;
            }
    
            .login-container {
                background-color: #fff;
                padding: 0 40px 40px;
                border-radius: 3px;
                box-shadow: none;
                width: 320px;
                box-sizing: content-box;
                flex-shrink: 0;
            }
    
            .title-wrapper {
                padding: 0 40px 24px;
                box-sizing: content-box;
                text-align: center;
            }
    
            .title {
                font-size: 32px;
                font: 'Söhne';
                margin: 0;
                color: #2d333a;
                width: 320px;
            }
    
            .input-wrapper {
                position: relative;
                margin-bottom: 10px;
                width: 320px;
                box-sizing: content-box;
            }
    
            .email-input {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: #fff;
                border: 1px solid #c2c8d0;
                border-radius: 6px;
                box-sizing: border-box;
                color: #2d333a;
                font-family: inherit;
                font-size: 16px;
                height: 52px;
                line-height: 1.1;
                outline: none;
                padding-block: 1px;
                padding-inline: 2px;
                padding: 0 16px;
                transition:
                    box-shadow 0.2s ease-in-out,
                    border-color 0.2s ease-in-out;
                width: 100%;
                text-rendering: auto;
                letter-spacing: normal;
                word-spacing: normal;
                text-transform: none;
                text-indent: 0px;
                text-shadow: none;
                display: inline-block;
                text-align: start;
                margin: 0;
            }
    
            .email-input:focus,
            .email-input:valid {
                border: 1px solid #10a37f;
                outline: none;
            }
    
            .email-input:focus-within {
                box-shadow: 1px #10a37f;
            }
    
            .email-input:focus + .email-label,
            .email-input:valid + .email-label {
                font-size: 14px;
                top: 0;
                left: 10px;
                color: #10a37f;
                background-color: #fff;
            }
    
            .email-label {
                position: absolute;
                top: 26px;
                left: 16px;
                background-color: #fff;
                color: #6f7780;
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 8px;
                max-width: 90%;
                overflow: hidden;
                pointer-events: none;
                padding: 1px 6px;
                text-overflow: ellipsis;
                transform: translateY(-50%);
                transform-origin: 0;
                transition:
                    transform 0.15s ease-in-out,
                    top 0.15s ease-in-out,
                    padding 0.15s ease-in-out;
                white-space: nowrap;
                z-index: 1;
            }
            .continue-btn {
                position: relative;
                height: 52px;
                width: 320px;
                background-color: #10a37f;
                color: #fff;
                margin: 10px 0 0;
                align-items: center;
                justify-content: center;
                display: flex;
                border-radius: 6px;
                padding: 4px 16px;
                font: inherit;
                border-width: 0px;
                cursor: pointer;
            }
    
            .continue-btn:hover {
                box-shadow: inset 0 0 0 150px #0000001a;
            }
    
            :root {
                font-family:
                    Söhne,
                    -apple-system,
                    BlinkMacSystemFont,
                    Helvetica,
                    sans-serif;
                line-height: 1.5;
                font-weight: 400;
                font-synthesis: none;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
    
            .page-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 100%;
            }
    
            .oai-header {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                background-color: #fff;
            }
    
            body {
                background-color: #fff;
                display: block;
                margin: 0;
            }
    
            .content-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: auto;
                white-space: normal;
                border-radius: 5px;
                position: relative;
                grid-area: center;
                box-shadow: none;
                vertical-align: baseline;
                box-sizing: content-box;
            }
    
            .checkbox-wrapper {
                margin: 20px 0;
                display: flex;
                align-items: center;
            }
    
            .checkbox-label {
                margin-left: 8px;
                font-weight: 600;
                color: #6f7780;
                font-size: 14px;
            }
    
            .help-icon {
                display: inline-block;
                margin-left: 5px;
                color: #10a37f;
                cursor: pointer;
                font-weight: bold;
            }
    
            .tooltip {
                visibility: hidden;
                min-width: 140px;
                max-width: 300px;
                line-height: 20px; 
                min-height: 90px; 
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: black;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                
                position: absolute;
                z-index: 1;
                bottom: 150%;
                left: 50%;
                margin-left: -70px; /* Half of the width to center the tooltip */
                opacity: 0;
                transition: opacity 0.3s, visibility 0.3s ease-in-out;
            }
    
            .tooltip::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: black transparent transparent transparent;
            }
    
            .field-container {
                display: flex;
                margin-bottom: 20px;
                width: 320px;
                box-sizing: content-box;
            }
    
            .field-container select {
                flex: 3;
                padding: 12px;
                border: 1px solid #c2c8d0;
                border-radius: 6px 0 0 6px;
                font-size: 16px;
            }
    
            .field-container input[type="number"] {
                flex: 1;
                padding: 12px;
                border: 1px solid #c2c8d0;
                border-radius: 0 6px 6px 0;
                font-size: 16px;
            }
    
            .cf-turnstile {
                display: flex;
                justify-content: center;
                margin-top: 10px;
            }
            .other-page {
                text-align: center;
                margin-top: 14px;
                margin-bottom: 0;
                font-size: 14px;
                width: 320px;
                }
                .divider-wrapper {
                    display: flex;
                    flex-direction: row;
                    text-transform: uppercase;
                    border: none;
                    font-size: 12px;
                    font-weight: 400;
                    margin: 0;
                    padding: 24px 0 0;
                    align-items: center;
                    justify-content: center;
                    width: 320px;
                    vertical-align: baseline;
                    }
                    
                    .divider-wrapper:before {
                        content: "";
                        border-bottom: 1px solid #c2c8d0;
                        flex: 1 0 auto;
                        height: .5em;
                        margin:0
                    }
                     .divider-wrapper:after{
                        content: "";
                        border-bottom: 1px solid #c2c8d0;
                        flex: 1 0 auto;
                        height: .5em;
                        margin:0
                    }
                    .divider {
                        text-align: center;
                        flex: .2 0 auto;
                        margin: 0;
                        height:12px
                    }
                    .checkbox-wrapper {
                        margin: 0px 0;
                        display: flex;
                        align-items: center;
                    }
                    .checkbox-label {
                        margin-left: 8px;
                        font-weight: 400;
                        color: #6f7780;
                        font-size: 14px;
                    }
                    .ulp-field.ulp-error .ulp-error-info {
                      margin-top: 4px;
                      margin-bottom: 4px;
                      display: flex;
                      font-size: 14px;
                      line-height: 1.4;
                      text-align: left;
                      color: #d00e17;
                  }
                  
                  .ulp-input-error-icon {
                      margin-right: 4px;
                  }
                  .ulp-input-error-icon::before {
                      content: "🚫";
                      margin-right: 0px;
                    }
        </style>
    </head>
    </head>
    <body>
        <div id="root">
            <div class="page-wrapper">
                <header class="oai-header">
                <a href="https://${WorkerURL}/admin">
                <img src="${logourl}" alt="Logo">
            </a>
                </header>
                <main class="main-container">
                    <section class="content-wrapper">
                        <div class="title-wrapper"><h1 class="title">${websiteName}</h1></div>
                        <div class="login-container">
                            <form id="manageAccountForm0" action="/auth/login_auth0/login" method="POST">
                                <div class="input-wrapper">
                                    <input
                                        class="email-input"
                                        inputmode="email"
                                        type="password"
                                        id="un"
                                        name="un"
                                        autocomplete="username"
                                        autocapitalize="none"
                                        spellcheck="false"
                                        required
                                        placeholder=" "
                                    />
                                    <label class="email-label" for="un">Username</label>
                                </div>
                                <input type="hidden" name="accountNumber" value="${accountNumber}">
                                <div class="checkbox-wrapper">
                                    <input type="checkbox" id="an-issues" name="anissues" />
                                    <label class="checkbox-label" for="an-issues">Report Account Issues</label>
                                </div>
                                <button class="continue-btn" type="submit">Continue</button>
                                <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
                                <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
                            </form>
                            <div class="divider-wrapper"><span class="divider">Or</span></div>
                            <p class="other-page">Don't have an account? <a class="other-page-link" href="https://${WorkerURL}/signup">Sign Up</a></p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
        <script>
        if ('${removeTurnstile}') {
       document.getElementById('cf-turnstile-response').value= "111";
      }

            document.addEventListener('DOMContentLoaded', function() {
                const helpIcon = document.querySelector('.help-icon');
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = 'Select your account. Chat histories are not shared between accounts. Other users cannot view your chat history.';
                document.body.appendChild(tooltip);
    
                helpIcon.addEventListener('mouseover', function() {
                    tooltip.style.visibility = 'visible';
                    tooltip.style.opacity = '1';
                    const rect = helpIcon.getBoundingClientRect();
                    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
                    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
                });
    
                helpIcon.addEventListener('mouseout', function() {
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = '0';
                });
            });
            function onTurnstileCallback(token) {
                document.getElementById('cf-turnstile-response').value = token;
            }
            document.getElementById('manageAccountForm0').addEventListener('submit', function(event) {
                if (!document.getElementById('cf-turnstile-response').value) {
                    alert('Please complete the verification.');
                    event.preventDefault();
                }
            });
        </script>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
    </body>
    </html>
        `;
    }
  
