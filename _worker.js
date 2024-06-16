addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
 // @ts-ignore
 const KV =oai_global_variables;
 const logo = 'data:image/png;base64,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';
  
 
 //通用函数


 function parseJwt(token) {
  const base64Url = token.split('.')[1];// 获取载荷部分
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);// 返回载荷解析后的 JSON 对象
}

//刷新AT
async function refreshAT(tochecktoken,an) {
  // 检查 token 是否存在，如果不存在或为空字符串，直接返回 true  
  const accessTokenKey = `at_${an}`;
const token = tochecktoken || await KV.get(accessTokenKey) ||'';
if (token && token !== "Bad_RT" && token !== "Old_AT")
{
 const payload = parseJwt(token);
const currentTime = Math.floor(Date.now() / 1000);// 获取当前时间戳（秒）
if (payload.exp > currentTime ){
  return token
}
}
  const refreshTokenKey = `rt_${an}`;
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
     return newAccessToken;
     } else {
     await KV.put(accessTokenKey, "Bad_RT");
     return '';
      }
} 
else {
  await KV.put(accessTokenKey, "Old_AT");
  return '';
}
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
  // 截取前15位作为密码
  //const passwd = hashStr.substring(0, 15);
  //console.log(`userName: ${token}, Password: ${passwd},`);
  return hashStr.substring(0, 15)
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
async function usermatch(userName, usertype) {
  const typeUsers = await KV.get(usertype)  || '';
  const typeUsersArray = typeUsers.split(","); // 将返回的用户类型字符串分割成数组
  return typeUsersArray.includes(userName); // 检查用户名是否在类型用户数组中
}

// 使用 OpenAI 的道德审核接口检查内容
async function checkContentForModeration(messages, apiKey) {
  const response = await fetch("https://api.oaipro.com/v1/moderations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ input: messages }),
  });
  // 检查 HTTP 响应是否成功
  if (response.ok) {
    // response.ok 是一个便捷属性，当状态码在 200-299 范围内时为 true
    const data = await response.json();
    return {
      shouldBlock: data.results.some((result) => result.flagged),
    };
  } else {
    console.error("Moderation API returned an error:", response.status);
    return { shouldBlock: false }; // 如果 API 调用失败，假定内容是安全的
  }
}


//各种路径的功能
async function handleRequest(request) {
  const url = new URL(request.url);
  const voiceURL = await KV.get('VoiceURL');
  const admin = await KV.get('Admin');
  const chatlogourl = await KV.get('ChatLogoURL') || await KV.get('LogoURL') || logo;
  const chatusername = await KV.get('ChatUserName') || 'ChatGPT';
  const chatmail = await KV.get('ChatMail') || 'chatgpt@openai.com';
  const apiKey = await KV.get('ModerationApiKey');
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
  
  //处理直链登陆形式
  const params = new URLSearchParams(url.search);
  //const userName = params.get('usertoken');
  //if (userName) {
  //    const accountNumber = params.get('an-custom') || params.get('an') || '1';
  //    return await handleLogin(userName, accountNumber, 'do not need Turnstle','');
  //}
  

  if (!admin){
      return handleInitialRequest(request);
  }

  if (url.pathname.startsWith('/admin')) {
    if (request.method === 'GET') {
      return handleAdminGetRequest();
    } else if (request.method === 'POST') {
      return handleAdminPostRequest(request);
    } else {
      return new Response('Method not allowed', { status: 405 });
    }
  }

  if (url.pathname.startsWith('/token')) {
    if (request.method === 'GET') {
      return handlePlusGetRequest();
    } else if (request.method === 'POST') {
      return handlePlusPostRequest(request);
    } else {
      return new Response('Method not allowed', { status: 405 });
    }
  }

  if(url.pathname.startsWith('/export')){
    if (request.method === 'GET') {
      return handleExportGetRequest(request);
    }  else if (request.method === 'POST') {
      return handleExportPostRequest(request);
    }else {
      return new Response('Method not allowed', { status: 405 });
    }
   }
  if (url.pathname.startsWith('/user')) {
    if (request.method === 'GET') {
      return handleUserGetRequest();
    } else if (request.method === 'POST') {
      return handleUserPostRequest(request);
    } else {
      return new Response('Method not allowed', { status: 405 });
    }
  }

  if (url.pathname.startsWith('/register')) {
    if (request.method === 'GET') {
      return new Response(await getRegisterHTML(), {
        headers: { 'content-type': 'text/html' },
      });
    } else if (request.method === 'POST') {
      return handleRegisterPostRequest(request);
    } else {
      return new Response('Method not allowed', { status: 405 });
    }
  }

 if(url.pathname.startsWith('/usage')){
  return handleUsageRequest(request)
 }

 
  // for oaifree
  if (url.pathname === '/auth/login_auth0') {
    if (request.method === 'GET') {
      return handleLoginGetRequest(request);
    } else if (request.method === 'POST') {
      return handleLoginPostRequest(request);
    } else {
      return new Response('Method not allowed', { status: 200 });
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

  if (apiKey) {
    if (url.pathname === "/backend-api/conversation") {
        const requestBody = await request.json();
        const userMessages = requestBody.messages
            .filter(
                (msg) =>
                    msg.author.role === "user" && msg.content.content_type === "text"
            )
            .map((msg) => msg.content.parts.join(" "));

        if (userMessages.length > 0) {
            const moderationResult = await checkContentForModeration(
                userMessages,
                apiKey
            );
            if (moderationResult.shouldBlock) {
              const UserName = userMessages;
              await deletelog(UserName,aian,'Message');
              
                return new Response(
                    JSON.stringify({ detail: "此内容可能违反了我们的使用政策" }),
                    {
                        status: 451,
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }
        }
        
        url.host = "new.oaifree.com";
        const newnewRequest = new Request(url, {
            body: JSON.stringify(requestBody),
            method: request.method,
            headers: request.headers,
        });
        return fetch(newnewRequest);
    }
}
  
  //Voice地址和其他
 url.host = 'new.oaifree.com';
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


//初始化信息填入功能
async function handleInitialRequest(request) {
  const admin = await KV.get('Admin');
if (!admin){
  if (request.method === 'GET') {
    return handleInitialGetRequest();
  } else if (request.method === 'POST') {
    return handleInitialPostRequest(request);
  } else {
    return new Response('Method not allowed', { status: 405 });
  }
}
else {return new Response('Already Have Admin', { status: 405 });
}
}

async function handleInitialPostRequest(request) {
  const formData = await request.formData();
  const fields = [
    'TurnstileKeys', 'TurnstileSiteKey', 'Users', 'VIPUsers', 'FreeUsers', 
    'Admin', 'ForceAN', 'SetAN', 'PlusMode', 'FreeMode', 'WebName', 
    'WorkerURL','VoiceURL', 'LogoURL', 'CDKEY', 'AutoDeleteCDK', 'FKDomain', 'Status',
    'PlusAliveAccounts', 'FreeAliveAccounts', 'rt_1', 'rt_2', 'at_1', 'at_2', 'FreeURL', 'ChatUserName', 'ChatMail', 'ChatLogoURL', 'RemoveTurnstile','ModerationApiKey'
  ];

  for (const field of fields) {
        let value = formData.get(field);
        if (value) { // 确保字段有值再保存
            if (field === 'WorkerURL' && !value) {
                value = (new URL(request.url)).hostname;
            }
            if (field === 'VoiceURL' && !value) {
                let hostname = (new URL(request.url)).hostname;
                let parts = hostname.split('.');
                parts[0] = 'voice';
                value = parts.join('.');
            }
            if (field === 'FreeURL' && !value) {
                let hostname = (new URL(request.url)).hostname;
                let parts = hostname.split('.');
                parts[0] = 'free';
                value = parts.join('.');
            }
            await KV.put(field, value); // 保存到KV存储
        }
    }

  return new Response('Parameters updated successfully', { status: 200 });
}

async function handleInitialGetRequest() {
  const html = await getInitialHTML();
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}

async function getInitialHTML() {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Variable Shortcut Entry</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f2f2f5;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        margin: 0;
        overflow: hidden;
      }
      .container {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        width: 100%;
        height: 90vh;
        overflow-y: auto;
        box-sizing: border-box;
      }
      .container h1 {
        margin-bottom: 24px;
        font-size: 28px;
        color: #333;
        font-weight: 600;
      }
      .container label {
        display: block;
        font-size: 16px;
        margin-bottom: 8px;
        color: #555;
        text-align: left;
      }
      .container input {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 20px;
      }
      .container button {
        background-color: #007aff;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s;
        padding: 12px;
        border-radius: 8px;
        width: 100%;
      }
      .container button:hover {
        background-color: #005fcb;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Variable Shortcut Entry</h1>
      <form id="variableEntryForm" action="/" method="POST">
        ${getInitialFieldsHTML()}
        <button type="submit">Submit</button>
      </form>
    </div>
  </body>
  </html>
`;
}

function getInitialFieldsHTML() {
  const fields = [
    { name: 'Admin', label: '【必填】管理员 (用于管理面板的验证使用，且可看所有聊天记录)' ,isrequired: 'required'},
    { name: 'TurnstileKeys', label: '【必填】Turnstile密钥' ,isrequired: 'required'},
    { name: 'TurnstileSiteKey', label: '【必填】Turnstile站点密钥' ,isrequired: 'required'},
    { name: 'Remove Turnstile', label: '【选填】有值则禁用Turnstile验证，以上两个参数随意' },
    { name: 'ModerationApiKey', label: '【选填】如需启用道德审查，则填入始皇oaipro的apikey' },
    { name: 'WorkerURL', label: '站点域名 (无需https://【选填，不填则自动储存worker的域名】' },
    { name: 'VoiceURL', label: 'voice服务域名 (无需https://【选填，不填则自动储存worker的域名】' },
    { name: 'FreeURL', label: 'Free选车面板域名 (无需https://【选填，不填则自动储存worker的域名】' },
    { name: 'WebName', label: '站点名称' },
    { name: 'LogoURL', label: 'Logo图片地址 (需https://)' },
    { name: 'ChatLogoURL', label: 'chat界面用户头像地址(需https://)' },
    { name: 'ChatUserName', label: 'chat界面用户名 (需https://)' },
    { name: 'ChatMail', label: 'chat界面用户邮箱 (需https://)' },
    { name: 'Users', label: '默认用户 (以aaa,bbb,ccc形式填写)' },
    { name: 'VIPUsers', label: 'VIP用户 (即私车用户，无速率和时间限制)' },
    { name: 'FreeUsers', label: '免费用户 (有速率和时间限制)' },
    { name: 'ForceAN', label: '强制上车 (若设置为1，用户名为xxx_n的私车用户用登陆强制进入n号车，忽略登陆所选车号)' },
    { name: 'SetAN', label: '选车模式：(如只有一辆车则填1。登陆页手动选车则留空。如开启随机或顺序轮询，填True，并用下面两个变量控制)' },
    { name: 'PlusMode', label: 'Plus号随机的轮询方式 (Order或者Random)' },
    { name: 'FreeMode', label: '普号随机的轮询方式 (Order/Random。如填Plus则使用Plus号池)' },
    { name: 'CDKEY', label: '注册可用的激活码 (以aaa,bbb,ccc格式)' },
    { name: 'AutoDeleteCDK', label: '设置为1激活码只可用一次' },
    { name: 'FKDomain', label: '把sharetoken当at用时，指定反代域名' },
    { name: 'Status', label: '服务状态 (若为非空，无视openai官方故障通告，始终允许登陆)' },
    { name: 'PlusAliveAccounts', label: 'plus号池存活序号 (以1,2,3格式)【可不填，录入账号后自动填】' },
    { name: 'FreeAliveAccounts', label: '普号存活序号 (以1,2,3格式)【可不填，录入账号后自动填】' },
    { name: 'rt_1', label: 'rt_1【可不填，录入账号后自动填】' },
    { name: 'at_1', label: 'at_1 (若已有rt，at可不填)【可不填，录入账号后自动填】' },
  ];

  return fields.map(field => `
    <label for="${field.name}">${field.label}</label>
    <input type="text" id="${field.name}" name="${field.name}" ${field.isrequired}>
  `).join('');
}



//Token管理功能
async function handlePlusPostRequest(request) {
  const formData = await request.formData();
  const adminuserName = formData.get('adminusername');
  const refreshToken = formData.get('refresh_token');
  const accountNumber = formData.get('account_number');
  const accountUsers = formData.get('account_users'); 
  const turnstileResponse = formData.get('cf-turnstile-response');

  // 验证 Turnstile 响应
  if (!turnstileResponse || !await verifyTurnstile(turnstileResponse)) {
    return generatePlusResponse('Turnstile verification failed', adminuserName);
  }

  // 检查参数是否存在
  if (!adminuserName || !refreshToken || !accountNumber) {
    return generatePlusResponse(`Missing parameters: ${!adminuserName ? 'adminusername ' : ''}${!refreshToken ? 'refresh_token ' : ''}${!accountNumber ? 'account_number ' : ''}`, adminuserName);
  }

  // 获取 adminusers 列表
  const adminusers = await KV.get('Admin');
  if (!adminusers) {
    return new Response('Done', { status: 200 });
  }

  // 检查用户名是否存在于 adminusers 列表中
  if (!adminusers.split(',').includes(adminuserName)) {
    return generatePlusResponse('Unauthorized access.', adminuserName);
  }


  // 更新跟车 users
  if (accountUsers) {
    // 获取当前 users 数据并更新
    const currentUsers = await KV.get('VIPUsers');
    const newUsers = accountUsers.split(',').map(vipuser => `${vipuser}_${accountNumber}`).join(',');
    const updatedUsers = `${currentUsers},${newUsers}`;
    await KV.put('VIPUsers', updatedUsers);
  }

  // 处理 JSON 格式的 refreshToken
  let jsonAccessToken, jsonRefreshToken;
  try {
    const tokenData = JSON.parse(refreshToken);
    const rtKey = `rt_${accountNumber}`;
    const atKey = `at_${accountNumber}`;
    if (tokenData.access_token) {
      jsonAccessToken = tokenData.access_token;
      jsonRefreshToken = tokenData.refresh_token ||'';
      await KV.put(atKey, jsonAccessToken);
      await KV.put(rtKey, jsonRefreshToken);
      await addToAliveAccountList(jsonAccessToken, accountNumber);
      return generatePlusResponse(`account_number:\n${accountNumber}\n\nrefresh_token:\n${jsonRefreshToken}\n\naccess_token:\n${jsonAccessToken}`, adminuserName);
    } else if (tokenData.accessToken) {
      jsonAccessToken = tokenData.accessToken;
      jsonRefreshToken = '';
      await KV.put(atKey, jsonAccessToken);
      await KV.put(rtKey, jsonRefreshToken);
      await addToAliveAccountList(jsonAccessToken, accountNumber);
      return generatePlusResponse(`account_number:\n${accountNumber}\n\nrefresh_token:\n${jsonRefreshToken}\n\naccess_token:\n${jsonAccessToken}`, adminuserName);
    }
 //   const result = await processToken(refreshToken, accountNumber, adminuserName);
 // return result;

  } catch (e) {
    // 输入不是 JSON 格式
  }

  

  // 批量处理非 JSON 格式的 token
  if (!jsonAccessToken && refreshToken.includes(',')) {
    const tokens = refreshToken.split(',');
    let currentAccountNumber = parseInt(accountNumber);

    for (const token of tokens) {
      const result = await processToken(token.trim(), currentAccountNumber, adminuserName);
      currentAccountNumber++;
    }

    return generatePlusResponse('Batch processing completed.', adminuserName);
  }

  // 单个 token 处理
  const result = await processToken(refreshToken, accountNumber, adminuserName);
  return result;
}

async function processToken(token, accountNumber, adminuserName) {
  // 更新 KV 库
  const rtKey = `rt_${accountNumber}`;
  const atKey = `at_${accountNumber}`;

  // 使用st
  if (token.startsWith('fk-')) {
    await KV.put(atKey, token);
    await addToAliveAccountList('', accountNumber);

    return generatePlusResponse(`Share token stored directly`, adminuserName);
  }

  // rt 长度检查,如果大于 50,则视为 at 则不请求新的 access token
  if (token.length > 50) {
    await KV.put(atKey, token);
    await addToAliveAccountList(token, accountNumber);

    return generatePlusResponse(`Access token stored directly`, adminuserName);
  }

  const url = 'https://token.oaifree.com/api/auth/refresh';

  // 发送 POST 请求
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: `refresh_token=${token}`
  });

  // 检查响应状态
  if (response.ok) {
    const data = await response.json();
    const newAccessToken = data.access_token;

    // 更新两个 token
    await KV.put(atKey, newAccessToken);
    await KV.put(rtKey, token);
    await addToAliveAccountList(newAccessToken, accountNumber);

    return generatePlusResponse(`account_number:\n${accountNumber}\n\nrefresh_token:\n${token}\n\naccess_token:\n${newAccessToken}`, adminuserName);
  } else {
    return generatePlusResponse('Error fetching access token, Bad refresh token.', adminuserName);
  }
}

async function handlePlusGetRequest() {
  const html = await getPlusHTML();
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}

async function checkAccountType(access_token) {
  // 构建 API 请求
  const apiRequest = new Request('https://api.oaifree.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        { "role": "user", "content": "hi" }
      ],
      "max_tokens": 1
    })
  });

  try {
    // 发送 API 请求并获取响应
    const apiResponse = await fetch(apiRequest);
    // 记录响应状态
    if (apiResponse.status === 401) { // 普号 / sharetoken / 失效账号
      return 'Free';
    } else {
      return 'Plus'; // 正常返回的 plus 号
    }
  } catch (error) {
    // 错误处理
  }
}

async function addToAliveAccountList(accessToken, accountNumber) {
  // 获取当前的 aliveaccount 并更新
  const accountType = await checkAccountType(accessToken);
  const aliveAccountsKey = `${accountType}AliveAccounts`;

  let aliveAccount = await KV.get(aliveAccountsKey);
  let aliveAccountList = aliveAccount ? aliveAccount.split(',') : [];
  if (!aliveAccountList.includes(accountNumber)) {
    aliveAccountList.push(accountNumber);
    await KV.put(aliveAccountsKey, aliveAccountList.join(','));
  }
}

async function generatePlusResponse(message, adminuserName) {
  const errorHtml = `
    <div class="ulp-field ulp-error">
      <div class="ulp-error-info">
        <span class="ulp-input-error-icon" role="img" aria-label="Error"></span>
        ${message}
      </div>
    </div>
  `;

  const replacements = [
    { target: '<button type="submit">Submit</button>', replacement: errorHtml + '<button class="continue-btn" type="submit">Continue</button>' },
    { target: '<input type="password" id="adminsername" name="adminusername" required>', replacement: `<input type="password" id="adminsername" name="adminusername" value="${adminuserName}" required>` },
  ];

  const html = await getPlusHTML();

  let responseHtml = html;
  for (const { target, replacement } of replacements) {
    responseHtml = responseHtml.replace(target, replacement);
  }

  return new Response(responseHtml, { headers: { 'Content-Type': 'text/html' } });
}

async function getPlusHTML() {
  const WorkerURL = await KV.get('WorkerURL');
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  const removeTurnstile = await KV.get('RemoveTurnstile')||'';
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Token Management</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f2f2f5;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      margin: 0;
    }
    .login-container {
      background-color: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
      text-align: center;
    }
    .login-container h1 {
      margin-bottom: 24px;
      font-size: 28px;
      color: #333;
      font-weight: 600;
    }
    .login-container label {
      display: block;
      font-size: 16px;
      margin-bottom: 8px;
      color: #555;
      text-align: left;
    }
    .login-container input {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 20px;
    }
    .login-container .button-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .login-container .button-container .row {
      display: flex;
      gap: 10px;
    }
    .login-container button {
      padding: 12px;
      background-color: #007aff;
      border: none;
      border-radius: 8px;
      color: white;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;
      flex: 1;
    }
    .login-container button:hover {
      background-color: #005fcb;
    }
    .ulp-field.ulp-error .ulp-error-info {
      margin-top: 4px;
      margin-bottom: 4px;
      display: flex;
      font-size: 10px;
      line-height: 1;
      text-align: left;
      color: #d00e17;
    }
    .ulp-input-error-icon {
      margin-right: 4px;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <h1>Token Management</h1>
    <form id="managePlus" action="/token" method="POST">
      <label for="adminusername">Admin Username:</label>
      <input type="password" id="adminsername" name="adminusername" required>
      <label for="refresh_token">RT/AT:</label>
      <input type="text" id="refresh_token" name="refresh_token" required>
      <label for="account_number">Account Number:</label>
      <input type="number" id="account_number" name="account_number" required>
      <label for="account_users">Account Users:</label>
      <input type="text" id="account_users" name="account_users">
      <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
      <div class="button-container">
        <button type="submit">Submit</button>
        <div class="row">
          <button type="button" onclick="window.location.href='https://token.oaifree.com/auth'">Get Token</button>
          <button type="button" onclick="window.location.href='https://${WorkerURL}'">Go Login</button>
        </div>
      </div>
      <div style="height: 20px;"></div>
      <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
    </form>
  </div>
  <script>
  if ('${removeTurnstile}') {
       document.getElementById('cf-turnstile-response').value= "111";
      }

  function onTurnstileCallback(token) {
    document.getElementById('cf-turnstile-response').value = token;
  }

  document.getElementById('managePlus').addEventListener('submit', function(event) {
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


//token export功能
async function handleExportGetRequest(request) {
  const url = new URL(request.url);
  const adminUserName = url.searchParams.get('admin');
  const tokenType = url.searchParams.get('token');
  const accountType = url.searchParams.get('type');
  if (!adminUserName || !tokenType || !accountType) {
    const html = await getExportHTML();
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }
  const adminusers = await KV.get('Admin') || '';
  if (adminusers.split(',').includes(adminUserName)) {
  const validTokenTypes = ['rt', 'at'];
  const validAccountTypes = ['Free', 'Plus'];
  if (!validTokenTypes.includes(tokenType) || !validAccountTypes.includes(accountType)) {
    return new Response('Invalid token or account type', { status: 400 });
  }
  return await exportToken(tokenType, accountType);
}
else{return new Response('Unauthorized access', { status: 403 });
}
}

async function exportToken(tokenType, accountType) {
  const accountTypeKey = `${accountType}AliveAccounts`;

  // 获取对应类型的账户列表
  let aliveAccount = await KV.get(accountTypeKey);
  if (!aliveAccount) {
    return new Response('No accounts found', { status: 404 });
  }

  let accountNumbers = aliveAccount.split(',');
  let tokens = [];

  // 分批次处理账户，假设每批次处理 10 个账户
  const batchSize = 10;
  for (let i = 0; i < accountNumbers.length; i += batchSize) {
    const batch = accountNumbers.slice(i, i + batchSize);

    // 使用 Promise.all 并行处理
    const batchTokens = await Promise.all(batch.map(async (accountNumber) => {
      if (tokenType == 'at') {
        return await refreshAT('', accountNumber);
      } else {
        let rtKey = `${tokenType}_${accountNumber}`;
        return await KV.get(rtKey);
      }
    }));

    tokens.push(...batchTokens);
  }

  // 创建 txt 文件
  let fileContent = tokens.join('\n');
  let fileName = `${tokenType}.txt`;

  // 创建文件响应
  return new Response(fileContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': `attachment; filename=${fileName}`
    }
  });
}
async function handleExportPostRequest(request) {
  const formData = await request.formData();
  const adminPassword = formData.get('adminpassword');
  const tokenType = formData.get('token_type');
  const accountType = formData.get('account_type');
  const operationType = formData.get('operation_type');
  const turnstileResponse = formData.get('cf-turnstile-response');

  // 验证 Turnstile 响应
  if (!turnstileResponse || !await verifyTurnstile(turnstileResponse)) {
    return new Response('Turnstile verification failed', { status: 403 });
  }

  // 获取 adminusers 列表
  const adminusers = await KV.get('Admin');
  if (!adminusers) {
    return new Response('Admin list is empty', { status: 500 });
  }

  // 检查管理员密码是否正确
  if (adminusers.split(',').includes(adminPassword)) {
   
  if (operationType=='txt'){
  // 验证 tokenType 和 accountType 是否有效
  const validTokenTypes = ['rt', 'at'];
  const validAccountTypes = ['Free', 'Plus'];
  if (!validTokenTypes.includes(tokenType) || !validAccountTypes.includes(accountType)) {
    return new Response('Invalid token or account type', { status: 400 });
  }

  // 调用 exportToken 函数并返回结果
  return await exportToken(tokenType, accountType);}
  else{
    const WorkerURL=await KV.get('WorkerURL');
    return new Response(`https://${WorkerURL}/export?admin=${adminPassword}&type=${accountType}&token=${tokenType}`, { status: 200 });
  }
}

else {return new Response('Unauthorized access', { status: 403 });
}
}


async function getExportHTML() {
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  const removeTurnstile = await KV.get('RemoveTurnstile')||'';
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Export Tokens</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f2f2f5;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        margin: 0;
      }
      .export-container {
        background-color: #ffffff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
        text-align: center;
      }
      .export-container h1 {
        margin-bottom: 24px;
        font-size: 28px;
        color: #333;
        font-weight: 600;
      }
      .export-container label {
        display: block;
        font-size: 16px;
        margin-bottom: 8px;
        color: #555;
        text-align: left;
      }
      .export-container input, .export-container select {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 20px;
        height: 48px;
      }
      .export-container button {
        padding: 12px;
        background-color: #007aff;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .export-container button:hover {
        background-color: #005fcb;
      }
    </style>
  </head>
  <body>
    <div class="export-container">
      <h1>Export Tokens</h1>
      <form id="exportTokens" action="/export" method="POST">
        <label for="adminpassword">Admin Password:</label>
        <input type="password" id="adminpassword" name="adminpassword" required>
        <label for="token_type">Token Type:</label>
        <select id="token_type" name="token_type" required>
          <option value="rt">Refresh Token</option>
          <option value="at">Access Token</option>
        </select>
        <label for="account_type">Account Type:</label>
        <select id="account_type" name="account_type" required>
          <option value="Free">Free</option>
          <option value="Plus">Plus</option>
        </select>
        <label for="operation_type">Operation Type:</label>
        <select id="operation_type" name="operation_type" required>
          <option value="txt">Download TXT</option>
          <option value="link">Generate Link</option>
        </select>
        <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
        <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
        <button type="submit">Export</button>
      </form>
    </div>
    <script>
    if ('${removeTurnstile}') {
       document.getElementById('cf-turnstile-response').value= "111";
      }
      function onTurnstileCallback(token) {
        document.getElementById('cf-turnstile-response').value = token;
      }
  
      document.getElementById('exportTokens').addEventListener('submit', function(event) {
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





//admin页面
async function handleAdminPostRequest(request) {
  const formData = await request.formData();
  const adminuserName = formData.get('adminusername');
  const chooseAccount = formData.get('choose_account');
  const forceCar = formData.get('force_car');
  const temporaryAccount = formData.get('temporary_account');
  const turnstileResponse = formData.get('cf-turnstile-response');

  // Verify Turnstile response
  if (!turnstileResponse || !await verifyTurnstile(turnstileResponse)) {
    return generateAdminResponse('Turnstile verification failed');
  }

  // Check if admin username is present
  if (!adminuserName) {
    return generateAdminResponse('Missing adminusername parameter');
  }

  // Get adminusers list
  const adminusers = await KV.get('Admin') || '';
  if (!adminusers || !adminusers.split(',').includes(adminuserName)) {
    return generateAdminResponse('Unauthorized');
  }

  // Handle choose account
  if (chooseAccount) {
    if (chooseAccount.toLowerCase() === 'true') {
      await KV.put('SetAN', 'True');
    } else if (chooseAccount.toLowerCase() === 'no') {
      await KV.put('SetAN', '');
    } else if (!isNaN(chooseAccount)) {
      await KV.put('SetAN', chooseAccount);
    }
  }
  if (forceCar) {
    const forceCarValue = forceCar.toLowerCase() === 'yes' ? '1' : '0';
    await KV.put('ForceAN', forceCarValue);
  }
  if (temporaryAccount) {   
    await KV.put('TemporaryAN', temporaryAccount);
  }
  return generateAdminResponse('Operation completed successfully');
}

async function handleAdminGetRequest() {
  const html = await getAdminHTML();
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}

async function generateAdminResponse(message) {
 const errorHtml = `
 <div class="ulp-field ulp-error">
   <div class="ulp-error-info">
     <span class="ulp-input-error-icon" role="img" aria-label="Error"></span>
     ${message}
   </div>
 </div>
 `;
 const html = await getAdminHTML();
 const responseHtml = html.replace(
   '<button type="submit">Submit</button>',
   errorHtml + '<button type="submit">Submit</button>'
 );
 return new Response(responseHtml, { headers: { 'Content-Type': 'text/html' } });
}

async function getAdminHTML() {
  const WorkerURL=await KV.get('WorkerURL');
  const turnstileSiteKey=await KV.get('TurnstileSiteKey');
  const removeTurnstile = await KV.get('RemoveTurnstile')||'';
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>System Manager</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f2f2f5;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      margin: 0;
    }
    .login-container {
      background-color: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
      text-align: center;
    }
    .login-container h1 {
      margin-bottom: 24px;
      font-size: 28px;
      color: #333;
      font-weight: 600;
    }
    .login-container label {
      display: block;
      font-size: 16px;
      margin-bottom: 8px;
      color: #555;
      text-align: left;
    }
    .login-container input, .login-container select, .login-container button {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 20px;
    }
    .login-container select {
      height: 48px;
    }
    .login-container button {
      background-color: #007aff;
      border: none;
      color: white;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .login-container button:hover {
      background-color: #005fcb;
    }
    .tokenmanagement-buttons, .usagemanagement-buttons {
      display: flex;
      justify-content: space-between;
    }
    .tokenmanagement-buttons a, .usage-link, .return-button {
      display: block;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      box-sizing: border-box;
      width: 48%;
      background-color: #007aff;
      color: white;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.3s;
      margin-top: 10px;
    }
    .tokenmanagement-buttons a:hover, .usage-link:hover, .return-button:hover {
      background-color: #005fcb;
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
  </style>
</head>
<body>
  <div class="login-container">
    <h1>System Manager</h1>
    <form id="manageAccountForm" action="/admin" method="POST">
      <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
      <label for="adminusername">Admin Username:</label>
      <input type="password" id="adminusername" name="adminusername" required>
      <label for="choose_account">Choose Account:</label>
      <input type="text" id="choose_account" name="choose_account" placeholder="True, No, or Number">
      <label for="force_car">Force Car:</label>
      <select id="force_car" name="force_car">
        <option value="">Choose...</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label for="temporary_account">Temporary Account:</label>
      <input type="text" id="temporary_account" name="temporary_account">
      <button type="submit">Submit</button>
    </form>
    <div class="tokenmanagement-buttons">
      <a href="https://${WorkerURL}/token">Token Management</a>
      <a href="https://${WorkerURL}/export">Export Tokens</a>
    </div>
    <div class="usagemanagement-buttons">
    <a href="https://${WorkerURL}/user" class="return-button">User Management</a>
      <a href="https://${WorkerURL}/usage" class="usage-link">Query User Usage</a>
    </div>
    <div style="height: 20px;"></div>
    <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
  </div>
  <script>
  if ('${removeTurnstile}') {
       document.getElementById('cf-turnstile-response').value= "111";
      }
  function onTurnstileCallback(token) {
    document.getElementById('cf-turnstile-response').value = token;
  }

  document.getElementById('manageAccountForm').addEventListener('submit', function(event) {
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





//user功能

async function handleUserGetRequest() {
  const html = await getUserHTML();
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}

async function handleUserPostRequest(request) {
  const formData = await request.formData();
  const adminuserName = formData.get('adminusername');
  const newUsers = formData.get('newusers');
  const userType = formData.get('user_type');
  const turnstileResponse = formData.get('cf-turnstile-response');

  const userRegex = new RegExp(`^${newUsers}_(\\d+)$`);
    let fullUserName = newUsers; 
     const defaultusers = await KV.get("Users")|| '';
     const vipusers = await KV.get("VIPUsers")|| '';
     const freeusers = await KV.get("FreeUsers")|| '';
     const admin = await KV.get("Admin")|| '';
     // 合并所有用户
     const users = `${defaultusers},${vipusers},${freeusers},${admin}`;
    // 自动查找匹配的用户名格式abc_xxx，并添加后缀
    users.split(",").forEach(user => {
      const match = user.match(userRegex);
          if (match) {
              fullUserName = user; // 更新为完整的用户名
          }
      });

  // Verify Turnstile response
  if (!turnstileResponse || !await verifyTurnstile(turnstileResponse)) {
    return generateUserResponse('Turnstile verification failed');
  }

  if (newUsers && userType === 'query-limits') {
    
    const accountNumber = await getToCheckAccountNumber(fullUserName,'Plus');
    const accessToken = await KV.get(`at_${accountNumber}`) || '1';
    const shareToken = await getToCheckShareToken(fullUserName,accessToken);
    const queryLimit = await handleQueryRequest(accessToken,shareToken);
    return generateUserResponse(`User: ${fullUserName}, AN: ${accountNumber}, ${queryLimit}`);
    }

  // Check if parameters are present
  if (!adminuserName || !newUsers || !userType) {
    return generateUserResponse(`Missing parameters: ${!adminuserName ? 'adminusername ' : ''}${!newUsers ? 'newusers ' : ''}${!userType ? 'user_type ' : ''}`);
  }

  // Get adminusers list
  const adminusers = await KV.get('Admin') || '';
  if (!adminusers || !adminusers.split(',').includes(adminuserName)) {
    return generateUserResponse('Unauthorized');
  }

  // Handle user addition or deletion
  if (userType === 'delete') {
   await deleteUsers(fullUserName);
  const users = await KV.get('Users') || '';
  const freeUsers = await KV.get('FreeUsers') || '';
  const vipUsers = await KV.get('VIPUsers') || '';
  return generateUserResponse(`User deleted successfully.\n\nusers:\n${users}\n\nfreeusers:\n${freeUsers}\n\nvipusers:\n${vipUsers}`);
  } 
  else {
    await addUsers(newUsers, userType);
  
  const users = await KV.get('Users') || '';
  const freeUsers = await KV.get('FreeUsers') || '';
  const vipUsers = await KV.get('VIPUsers') || '';
  const WorkerURL=await KV.get('WorkerURL');
  return generateUserResponse(`User Added successfully\n\nLogin link:\nhttps://${WorkerURL}/?user=${newUsers}\n\nusers:\n${users}\n\nfreeusers:\n${freeUsers}\n\nvipusers:\n${vipUsers}`);
  }
}

async function addUsers(newUsers, userType) {
  // Get current user list for the selected user type
  const currentUsers = await KV.get(userType) || '';

  // Append new users
  const updatedUsers = `${currentUsers},${newUsers}`.replace(/^,/, '');
  // Update KV store
  await KV.put(userType, updatedUsers);
}

async function deleteUsers(usersToDelete) {
  const userTypes = ['Users', 'FreeUsers', 'VIPUsers'];

  //删除用户
  for (const userType of userTypes) {
    const currentUsers = await KV.get(userType) || '';
    const updatedUsers = currentUsers.split(',').filter(user => !usersToDelete.split(',').includes(user)).join(',');

    // Update KV store
    await KV.put(userType, updatedUsers);
  }
  //删除用户的历史sharetoken
  return await deleteShareToken(usersToDelete);
}
    
async function deleteShareToken(userName) {
  const url = 'https://chat.oaifree.com/token/register';
  const passed = generatePassword(userName)
  
  const accountNumber = await getToCheckAccountNumber(userName,'Plus');
  const accessToken = await KV.get(`at_${accountNumber}`) || '1';
 /*  
   const tokenPrefix = await KV.get('TokenPrefix');
  const baseUserName = tokenPrefix + userName.replace(/_\d+$/, ''); // 移除用户名后的编号 */

  //console.log(`getShareToken - userName: ${userName}, accountNumber: ${accountNumber}, showConversations: ${isAdmin}, isTemporary: ${isTemporary}`);
  const body = new URLSearchParams({
      access_token: accessToken,  // 使用从全局变量中获取的 accessToken
      unique_name: passed, //前缀+无后缀用户名
     // site_limit: '', // 限制的网站
      expires_in: '-1', // token有效期（单位为秒），填 0 则永久有效
     // gpt35_limit: '0', // gpt3.5 对话限制
     // gpt4_limit: '0', // gpt4 对话限制，-1为不限制
     // show_conversations: 'false', // 是否显示所有人的会话
     // temporary_chat: 'false', //默认启用临时聊天
     // show_userinfo: 'false', // 是否显示用户信息
     // reset_limit: 'false' // 是否重置对话限制
  }).toString();
  await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
  });
  return 'Delete ST suceed.';
}

async function getToCheckShareToken(userName,accessToken) {
  const url = 'https://chat.oaifree.com/token/register';
  const passed = generatePassword(userName)
 /*  
   const tokenPrefix = await KV.get('TokenPrefix');
  const baseUserName = tokenPrefix + userName.replace(/_\d+$/, ''); // 移除用户名后的编号 */
  //console.log(`getShareToken - userName: ${userName}, accountNumber: ${accountNumber}, showConversations: ${isAdmin}, isTemporary: ${isTemporary}`);
  const body = new URLSearchParams({
      access_token: accessToken,  // 使用从全局变量中获取的 accessToken
      unique_name: passed, //前缀+无后缀用户名
      //site_limit: '', // 限制的网站
      //expires_in: '0', // token有效期（单位为秒），填 0 则永久有效
      //gpt35_limit: '-1', // gpt3.5 对话限制
      //gpt4_limit: '-1', // gpt4 对话限制，-1为不限制
      //show_conversations: 'false', // 是否显示所有人的会话
      //temporary_chat: 'false', //默认启用临时聊天
      //show_userinfo: 'false', // 是否显示用户信息
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

async function generateUserResponse(message) {

 const errorHtml = `
 <div class="ulp-field ulp-error">
   <div class="ulp-error-info">
     <span class="ulp-input-error-icon" role="img" aria-label="Error"></span>
     ${message}
   </div>
 </div>
 `;
 const html = await getUserHTML();
 const responseHtml = html.replace(
   '<button type="submit">Submit</button>',
   errorHtml + '<button type="submit">Submit</button>'
 );
 return new Response(responseHtml, { headers: { 'Content-Type': 'text/html' } });
}

async function getToCheckAccountNumber(userName, antype) {
  // Retrieve the last login logs
  const lastLoginLogs = await KV.get(`${antype}LoginLogs`);
  if (lastLoginLogs) {
    const logArray = JSON.parse(lastLoginLogs);
    const userLogs = logArray.filter(log => log.user === userName);
    if (userLogs.length > 0) {
      const lastAccount = userLogs[userLogs.length - 1].accountNumber;
      return lastAccount;
    }
  }
  return 1;  // 返回 1 表示没有找到符合条件的账户
}
async function handleQueryRequest(accessToken, shareToken) {
  const limits = await queryLimits(accessToken, shareToken);

  return `Usage: GPT-4: ${limits.gpt4Limit}, GPT-3.5: ${limits.gpt35Limit}`;
}



async function queryLimits(accessToken, shareToken) {
  const CACHE_TTL = 60; // 缓存时间，单位为秒
  const MAX_RETRIES = 3; // 最大重试次数
  const cacheKey = `limits_${shareToken}`;
  const cachedData = await KV.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const url = `https://chat.oaifree.com/token/info/${shareToken}`;
  let attempt = 0;

  while (attempt < MAX_RETRIES) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch limits (status: ${response.status})`);
      }

      const result = await response.json();
      const data = {
        gpt4Limit: result.gpt4_limit,
        gpt35Limit: result.gpt35_limit
      };

      await KV.put(cacheKey, JSON.stringify(data), { expirationTtl: CACHE_TTL }); // 缓存数据
      return data;

    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error);
      attempt += 1;

      if (attempt >= MAX_RETRIES) {
        throw new Error('Failed to fetch limits after multiple attempts');
      }

      // 可选：在重试前等待一段时间
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}


async function getUserHTML() {
  const turnstileSiteKey=await KV.get('TurnstileSiteKey');
  const removeTurnstile = await KV.get('RemoveTurnstile')||'';
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Manage Account</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f2f2f5;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      margin: 0;
    }
    .login-container {
      background-color: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
      text-align: center;
    }
    .login-container h1 {
      margin-bottom: 24px;
      font-size: 28px;
      color: #333;
      font-weight: 600;
    }
    .login-container label {
      display: block;
      font-size: 16px;
      margin-bottom: 8px;
      color: #555;
      text-align: left;
    }
    .login-container input, .login-container select, .login-container button {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 20px;
    }
    .login-container select {
      height: 48px;
    }
    .login-container button {
      background-color: #007aff;
      border: none;
      color: white;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .login-container button:hover {
      background-color: #005fcb;
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
  </style>
</head>
<body>
  <div class="login-container">
    <h1>Manage Account</h1>
    <form id="manageAccountForm" action="/user" method="POST">
    <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
      <label for="adminusername">Admin Username:</label>
      <input type="password" id="adminusername" name="adminusername">
      <label for="newusers">User Name:</label>
      <input type="text" id="newusers" name="newusers" required>
      <label for="user_type">Operation Type:</label>
      <select id="user_type" name="user_type" required>
        <option value="query-limits">Query Usage</option>
        <option value="Users">Add Users</option>
        <option value="FreeUsers">Add Free Users</option>
        <option value="VIPUsers">Add VIP Users</option>
        <option value="delete">Delete Users</option>
       
      </select>
      <button type="submit">Submit</button>
      <div style="height: 20px;"></div>
      <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
    </form>
  </div>
  <script>
if ('${removeTurnstile}') {
       document.getElementById('cf-turnstile-response').value= "111";
      }
  function onTurnstileCallback(token) {
    document.getElementById('cf-turnstile-response').value = token;
  }

  document.getElementById('manageAccountForm').addEventListener('submit', function(event) {
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



async function verifyPassword(inputPassword, storedHash) {
    const inputHash = await hashPassword(inputPassword);
    return inputHash === storedHash;
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

//Register功能
async function handleRegisterPostRequest(request) {
  const formData = await request.formData();
  const cdkey = formData.get('cdkey');
  const username = formData.get('username');
  const password = formData.get('password');
  const turnstileResponse = formData.get('cf-turnstile-response');

  if (!await verifyTurnstile(turnstileResponse)) {
    return generateRegisterResponse('Turnstile verification failed');
  }

  const autoDeleteCDK = await KV.get('AutoDeleteCDK');
  const cdkeyStore = await KV.get('CDKEY') || '';
  const cdkeyList = cdkeyStore ? cdkeyStore.split(',') : [];

  if (!cdkeyList.includes(cdkey)) {
    return generateRegisterResponse('Invalid CDKEY');
  }
  await registerlog(username, cdkey);
  if (autoDeleteCDK) {
    // Remove used CDKEY and update store
    const updatedCdkeyList = cdkeyList.filter(key => key !== cdkey);
    await KV.put('CDKEY', updatedCdkeyList.join(','));
  }

  // Add new user to freeusers
  const freeUsers = await KV.get('FreeUsers');
  const freeUsersList = freeUsers ? freeUsers.split(',') : [];
  if (freeUsersList.includes(username)) {
    return generateRegisterResponse('Username already exists.');
  }
  freeUsersList.push(username);
  await KV.put('FreeUsers', freeUsersList.join(','));

  // Hash the password and store user credentials
  const hashedPassword = await hashPassword(password);
  const userCredentials = await KV.get('UserCredentials') || '{}';
  const credentialsObj = JSON.parse(userCredentials);
  credentialsObj[username] = hashedPassword;
  await KV.put('UserCredentials', JSON.stringify(credentialsObj));

  return generateRegisterResponse('Registration successful')
}

async function registerlog(userName, cdkey) {
  const currentTime = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  const logEntry = {
      user: userName,
      time: currentTime,
      cdkey: cdkey
  };
  // Retrieve the existing log array or create a new one if it doesn't exist
  const lastDeleteLogs = await KV.get(`RegisterLogs`);
  let logArray = [];
  if (lastDeleteLogs) {
      logArray = JSON.parse(lastDeleteLogs);
  }
  logArray.push(logEntry);
  await KV.put(`RegisterLogs`, JSON.stringify(logArray));
}

async function generateRegisterResponse(message) {
   const errorHtml = `
   <div class="ulp-field ulp-error">
     <div class="ulp-error-info">
       <span class="ulp-input-error-icon" role="img" aria-label="Error"></span>
       ${message}
     </div>
   </div>
   `;
   const html = await getRegisterHTML();
   const responseHtml = html.replace(
     '<button class="continue-btn" type="button" id="continueBtn">Continue</button>',
     errorHtml + '<button class="continue-btn" type="button" id="continueBtn">Continue</button>'
   );
   return new Response(responseHtml, { headers: { 'Content-Type': 'text/html' } });
}

async function getRegisterHTML() {
  const WorkerURL = await KV.get('WorkerURL');
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  const websiteName = await KV.get('WebName') || 'ChatGPT';
  const logourl = await KV.get('LogoURL') || logo;
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <link rel="apple-touch-icon" sizes="180x180" href="https://cdn1.oaifree.com/_next/static/media/apple-touch-icon.82af6fe1.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="https://cdn4.oaifree.com/_next/static/media/favicon-32x32.630a2b99.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="https://cdn4.oaifree.com/_next/static/media/favicon-16x16.a052137e.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sign Up - ${websiteName}</title>
            <style>
          @charset "UTF-8";
          .oai-header img {
              height: auto;
              width: 32px;
              margin-top: 32px;
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
              font: 'Söhne';
              margin: 0;
              color: #2d333a;
              width: 320px;
          }
  
          .input-wrapper {
              position: relative;
              margin-bottom: 25px;
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
              margin: 24px 0 0;
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

        .footer {
          text-align: center;
          font-size: 12px;
          padding: 10px;
      }

      .footer a {
          color: black;
          text-decoration: none;
      }

      .footer a:hover {
          text-decoration: none;
          color: black;
      }

          </style>
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
                      <div class="title-wrapper"><h1 class="title">Create your account</h1></div>
                      <div class="login-container">
                          <form id="manageAccountForm0" action="/register" method="POST">
                              <div class="input-wrapper" id="cdkeyWrapper">
                                  <input
                                      class="email-input"
                                      inputmode="text"
                                      type="text"
                                      id="cdkey"
                                      name="cdkey"
                                      autocomplete="off"
                                      autocapitalize="none"
                                      spellcheck="false"
                                      required
                                      placeholder=" "
                                  />
                                  <label class="email-label" for="cdkey">CDKEY</label>
                              </div>
                              <div class="input-wrapper" id="usernameWrapper" style="display: none;">
                              <input
                                  class="email-input"
                                  inputmode="text"
                                  type="text"
                                  id="username"
                                  name="username"
                                  autocomplete="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  placeholder=" "
                                  required
                              />
                              <label class="email-label" for="username">Your Username</label>
                            </div>
                            <div class="input-wrapper" id="passwordWrapper" style="display: none;">
                              <input
                                  class="email-input"
                                  inputmode="text"
                                  type="password"
                                  id="password"
                                  name="password"
                                  autocomplete="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  placeholder=" "
                                  required
                              />
                              <label class="email-label" for="password">Your Password</label>
                            </div>
                              <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
                              <button class="continue-btn" type="button" id="continueBtn">Continue</button>
                          </form>
  
                          <div class="divider-wrapper"><span class="divider">Or</span></div>
                          <p class="other-page">Already have an account? <a class="other-page-link" href="https://${WorkerURL}">Login</a></p>
                              <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
                      </div>
                  </section>
              </main>
          </div>
      </div>
      <footer class="footer">
        <p>&copy; All rights reserved. | Powered by <a href="https://openai.com" target="_blank">OpenAI</a></p>
    </footer>
      <script>
      if ('${removeTurnstile}') {
       document.getElementById('cf-turnstile-response').value= "111";
      }
        document.addEventListener('DOMContentLoaded', function() {
            const cdkeyInput = document.getElementById('cdkey');
            const usernameWrapper = document.getElementById('usernameWrapper');
            const passwordWrapper = document.getElementById('passwordWrapper');
            const continueBtn = document.getElementById('continueBtn');
            const manageAccountForm = document.getElementById('manageAccountForm0');

            continueBtn.addEventListener('click', function() {
                if (cdkeyInput.value.trim() && usernameWrapper.style.display === 'none') {
                    usernameWrapper.style.display = 'block';
                    passwordWrapper.style.display = 'block';
                } else if (cdkeyInput.value.trim() && usernameWrapper.style.display === 'block') {
                    const usernameInput = document.getElementById('username');
                    const passwordInput = document.getElementById('password');
                    if (usernameInput.value.trim() && passwordInput.value.trim() && document.getElementById('cf-turnstile-response').value) {
                        manageAccountForm.submit();
                    } else if (!document.getElementById('cf-turnstile-response').value) {
                        alert('Please complete the verification.');
                    } else if (!usernameInput.value.trim()) {
                        alert('Please enter your username.');
                    } else if (!passwordInput.value.trim()) {
                        alert('Please enter your password.');
                    }
                }
            });

            manageAccountForm.addEventListener('submit', function(event) {
                if (!document.getElementById('cf-turnstile-response').value) {
                    alert('Please complete the verification.');
                    event.preventDefault();
                }
            });
        });

                  function onTurnstileCallback(token) {
                      document.getElementById('cf-turnstile-response').value = token;
                  }
              </script>
              <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
          </body>
          </html>
  `;
}






//Usage查询功能
const MAX_USERS_PER_BATCH = 5;
async function handleUsageRequest(request) {
  if (request.method === 'POST') {
    const url = new URL(request.url);
    if (url.pathname === '/usage/save') {
      const usersData = await request.json();
      await saveUsageLogs(usersData);
      return new Response('Data saved successfully.', { status: 200 });
    } else {
      const formData = await request.formData();
      const adminUsername = formData.get('adminusername');
      const queryType = formData.get('queryType');
      const turnstileResponse = formData.get('cf-turnstile-response')
      const adminUsers = await KV.get('Admin');
      if (!await verifyTurnstile(turnstileResponse)) {
        return generateUsageResponse('Turnstile verification failed')
      }
      if (adminUsers.split(',').includes(adminUsername)) {
        const logs = queryType === 'plus' ? ['PlusLoginLogs'] : ['FreeLoginLogs'];
        let usersData = [];
        let uniqueUsers = new Set();

        for (const log of logs) {
          const loginLogs = await KV.get(log);
          if (loginLogs) {
            const logArray = JSON.parse(loginLogs);
            const chinaTimeZone = 'Asia/Shanghai';
            const today = new Date().toLocaleDateString('en-US', { timeZone: chinaTimeZone });
            const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('en-US', { timeZone: chinaTimeZone });

            const recentLogs = logArray.filter(log => {
              const logDate = new Date(log.timestamp).toLocaleDateString('en-US', { timeZone: chinaTimeZone });
              return logDate === today || logDate === yesterday;
            });

            recentLogs.forEach(logEntry => uniqueUsers.add(logEntry.user));
          }
        }

        const usersArray = Array.from(uniqueUsers);
        for (let i = 0; i < usersArray.length; i += MAX_USERS_PER_BATCH) {
          const batchUsers = usersArray.slice(i, i + MAX_USERS_PER_BATCH);
          const batchUsersData = await processBatchUsers(batchUsers, queryType);
          usersData = usersData.concat(batchUsersData);
        }

        const htmlResponse = await generateTableHTML(usersData, queryType);
        return new Response(htmlResponse, { headers: { 'Content-Type': 'text/html' } });
      } else {
        const accountNumber = await getTableToCheckAccountNumber(adminUsername, queryType);
        const accessToken = await KV.get(`at_${accountNumber}`) || '1';
        const shareToken = await getToCheckShareToken(adminUsername,accessToken);
        const queryLimit = await handleQueryRequest(accessToken,shareToken);
        return generateUsageResponse(`User: ${adminUsername}, AN: ${accountNumber}, ${queryLimit}`);
      }
    }
  } else {
    return new Response(await getTableUserHTML(), { headers: { 'Content-Type': 'text/html' } });
  }
}

async function processBatchUsers(users, queryType) {
  const usersData = await Promise.all(users.map(user => processSingleUser(user, queryType).catch(error => {
    console.error(`Error processing user ${user}:`, error);
    return {
      user,
      accountNumber: 'Unknown',
      queryType,
      gpt4: 'Error',
      gpt35: 'Error'
    };
  })));
  return usersData;
}

async function processSingleUser(user, queryType) {
  const accountNumber = await getTableToCheckAccountNumber(user, queryType);
  const accessToken = await KV.get(`at_${accountNumber}`) || '1';
  const shareToken = await getToCheckShareToken(user, accessToken);
  const usage = await queryLimits(accessToken, shareToken);

  return {
    user,
    accountNumber,
    queryType,
    ...parseUsage(usage)
  };
}



function parseUsage(usage) {
  return {
    gpt4: usage.gpt4Limit !== undefined ? usage.gpt4Limit : 'N/A',
    gpt35: usage.gpt35Limit !== undefined ? usage.gpt35Limit : 'N/A'
  };
}

async function getTableToCheckAccountNumber(userName, queryType) {
  const logs = queryType === 'plus' ? ['PlusLoginLogs'] : ['FreeLoginLogs'];
    const lastLoginLogs = await KV.get(logs);
    if (lastLoginLogs) {
      const logArray = JSON.parse(lastLoginLogs);
      const userLogs = logArray.filter(log => log.user === userName);
      if (userLogs.length > 0) {
        const lastAccount = userLogs[userLogs.length - 1].accountNumber;
        return lastAccount;
      }
    }
  return 'Unknown';
}

async function saveUsageLogs(usersData) {
  const queryType = usersData[0].queryType;
  const logType = queryType === 'plus' ? 'PlusUsageLogs' : 'FreeUsageLogs';
  const currentLogs = await KV.get(logType);
  const logs = currentLogs ? JSON.parse(currentLogs) : [];
  const chinaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });
  logs.push({ timestamp: chinaTime, usersData });
  await KV.put(logType, JSON.stringify(logs));
}


async function getTableUserHTML() {
  const removeTurnstile = await KV.get('RemoveTurnstile')||'';
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Query User Usage</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f2f2f5;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        margin: 0;
      }
      .login-container {
        background-color: #ffffff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
        text-align: center;
      }
      .login-container h1 {
        margin-bottom: 24px;
        font-size: 28px;
        color: #333;
        font-weight: 600;
      }
      .login-container label {
        display: block;
        font-size: 16px;
        margin-bottom: 8px;
        color: #555;
        text-align: left;
      }
      .login-container input, .login-container select, .login-container button {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 20px;
      }
      .login-container select {
        height: 48px;
      }
      .login-container .button-group {
        display: flex;
        justify-content: space-between;
      }
      .login-container .button-group button {
        width: 48%;
      }
      .login-container button {
        background-color: #007aff;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .login-container button:hover {
        background-color: #005fcb;
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
    </style>
  </head>
  <body>
    <div class="login-container">
      <h1>Query User Usage</h1>
      <form id="queryUsageForm" action="/usage" method="POST">
        <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
        <label for="adminusername">Admin Username:</label>
        <input type="password" id="adminusername" name="adminusername">
        <div class="button-group">
          <button type="submit" name="queryType" value="plus">Plus Usage</button>
          <button type="submit" name="queryType" value="free">Free Usage</button>
        </div>
        <div style="height: 20px;"></div>
        <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
      </form>
    </div>
    <script>
    if ('${removeTurnstile}') {
       document.getElementById('cf-turnstile-response').value= "111";
      }
    function onTurnstileCallback(token) {
      document.getElementById('cf-turnstile-response').value = token;
    }
  
    document.getElementById('queryUsageForm').addEventListener('submit', function(event) {
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
async function generateUsageResponse(message) {
  const errorHtml = `
    <div class="ulp-field ulp-error">
      <div class="ulp-error-info">
        <span class="ulp-input-error-icon" role="img" aria-label="Error"></span>
        ${message}
      </div>
    </div>
  `;

  const html = await getTableUserHTML();
  const responseHtml = html.replace(
    '<div class="button-group">',
    errorHtml + '<div class="button-group">'
  );
  return new Response(responseHtml, { headers: { 'Content-Type': 'text/html' } });
}

async function generateTableHTML(usersData, queryType) {
  const logourl = await KV.get('LogoURL') || logo;
  const pageTitle = "Usage Chart";
  const historyData = await getHistoryData(queryType);

  let combinedData = combineData(usersData, historyData);
  let headerRow = generateHeaderRow(historyData);
  let timestampRow = generateTimestampRow(historyData);
  let rows = combinedData.map(user => `
  <tr class="user-row">
    <td class="user-sticky user-name">${user.user}</td>
    ${user.historyUsage.map(usage => `<td>${usage.gpt4}</td><td>${usage.gpt35}</td>`).join('')}
    <td>${user.realTimeUsage.gpt4}</td>
    <td>${user.realTimeUsage.gpt35}</td>
  </tr>`).join('');

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>User Usage</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f2f2f5;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .header {
        display: flex;
        align-items: center;
        margin: 20px;
        width: 80%;
      }
      .logo {
        height: 50px;
        margin-right: 20px;
      }
      .title {
        font-size: 24px;
        font-weight: bold;
      }
      .table-container {
        width: 80%;
        overflow-x: auto;
        margin: 20px 0;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: 18px;
        text-align: left;
        position: relative;
        min-width: 800px;
      }
      th, td {
        padding: 12px;
        border: 1px solid #ddd;
      }
      th {
        background-color: #007aff;
        color: white;
      }
      .button-group {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .button {
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #007aff;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 14px;
        border-radius: 5px;
      }
      .user-name.masked {
        filter: blur(5px);
      }
      th.user-sticky, td.user-sticky {
        position: sticky;
        left: 0;
        color: white;
        background-color: #007aff;
        z-index: 100;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="${logourl}" alt="Logo" class="logo">
      <div class="title">${pageTitle}</div>
    </div>
    <div class="button-group">
      <button class="button" onclick="toggleMask()">Mask/Unmask</button>
      <button class="button" onclick="saveData()">Save</button>
    </div>
    <div class="table-container">
      <table>
      <tr>
      <th class="user-sticky">User</th>
      ${timestampRow}
      <th colspan="2">Real-Time Usage</th>
    </tr>
    <tr>
      <th class="user-sticky"></th>
      ${headerRow}
      <th>GPT-4</th>
      <th>GPT-3.5</th>
    </tr>
        ${rows}
      </table>
    </div>
    <script>
      let isMasked = false;
  
      function toggleMask() {
        isMasked = !isMasked;
        const userNames = document.querySelectorAll('.user-name');
        userNames.forEach(userName => {
          if (isMasked) {
            userName.classList.add('masked');
          } else {
            userName.classList.remove('masked');
          }
        });
      }
  
      function saveData() {
        fetch('/usage/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(${JSON.stringify(usersData)})
        })
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.error('Error:', error));
      }
  
      document.querySelectorAll('.user-row').forEach(row => {
        row.addEventListener('mouseover', function() {
          if (isMasked) {
            this.querySelector('.user-name').classList.remove('masked');
          }
        });
        row.addEventListener('mouseout', function() {
          if (isMasked) {
            this.querySelector('.user-name').classList.add('masked');
          }
        });
      });
    </script>
  </body>
  </html>
  
  `;
}

function combineData(usersData, historyData) {
  let combinedData = [];
  let allUsers = new Set(usersData.map(u => u.user).concat(historyData.flatMap(h => h.usersData.map(u => u.user))));

  allUsers.forEach(user => {
    let historyUsage = historyData.map(h => {
      let userUsage = h.usersData.find(u => u.user === user);
      return userUsage ? { gpt4: userUsage.gpt4, gpt35: userUsage.gpt35 } : { gpt4: '', gpt35: '' };
    });
    let realTimeUsage = usersData.find(u => u.user === user);
    combinedData.push({
      user,
      historyUsage,
      realTimeUsage: realTimeUsage ? { gpt4: realTimeUsage.gpt4, gpt35: realTimeUsage.gpt35 } : { gpt4: '', gpt35: '' }
    });
  });

  return combinedData;
}

function generateHeaderRow(historyData) {
  return historyData.map(h => `<th>GPT-4</th><th>GPT-3.5</th>`).join('');
}

function generateTimestampRow(historyData) {
  return historyData.map(h => `<th colspan="2">${h.timestamp}</th>`).join('');
}

async function getHistoryData(queryType) {
  const logType = queryType === 'plus' ? 'PlusUsageLogs' : 'FreeUsageLogs';
  const historyLogs = await KV.get(logType);
  return historyLogs ? JSON.parse(historyLogs) : [];
}


function combineData(usersData, historyData) {
  let combinedData = [];
  let allUsers = new Set(usersData.map(u => u.user).concat(historyData.flatMap(h => h.usersData.map(u => u.user))));

  allUsers.forEach(user => {
    let historyUsage = historyData.map(h => {
      let userUsage = h.usersData.find(u => u.user === user);
      return userUsage ? { gpt4: userUsage.gpt4, gpt35: userUsage.gpt35 } : { gpt4: '', gpt35: '' };
    });
    let realTimeUsage = usersData.find(u => u.user === user);
    combinedData.push({
      user,
      historyUsage,
      realTimeUsage: realTimeUsage ? { gpt4: realTimeUsage.gpt4, gpt35: realTimeUsage.gpt35 } : { gpt4: '', gpt35: '' }
    });
  });

  return combinedData;
}

function generateHeaderRow(historyData) {
  return historyData.map(h => `<th>GPT-4</th><th>GPT-3.5</th>`).join('');
}

function generateTimestampRow(historyData) {
  return historyData.map(h => `<th colspan="2">${h.timestamp}</th>`).join('');
}

async function getHistoryData(queryType) {
  const logType = queryType === 'plus' ? 'PlusUsageLogs' : 'FreeUsageLogs';
  const historyLogs = await KV.get(logType);
  return historyLogs ? JSON.parse(historyLogs) : [];
}












//login功能
async function handleLoginGetRequest(request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const userName = params.get('un');
  const setan = await KV.get('SetAN');
  const accountNumber = params.get('an-custom') || params.get('an') || '1';

  if (userName) {
      return await handleLogin(userName, '', accountNumber, 'do not need Turnstile', '');
  } else {
    const html = await getLoginHTML(setan);
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }
}


async function handleLoginPostRequest(request) {
    const formData = await request.formData();
    const userName = formData.get('un');
    const password = formData.get('pw');  // 获取密码
    const anissues = formData.get('anissues') === 'on';
    const accountNumber = formData.get('an-custom') || formData.get('an') || '1';
    const turnstileResponse = formData.get('cf-turnstile-response');
    return await handleLogin(userName, password, accountNumber, turnstileResponse, anissues);
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
  // const url = `https://${proxiedDomain}/api/auth/oauth_token`;
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
async function getShareToken(userName, accessToken,accountNumber) {
  const url = 'https://chat.oaifree.com/token/register';
 // const tokenPrefix = await KV.get('TokenPrefix');
 //const baseUserName = tokenPrefix + userName.replace(/_\d+$/, ''); // 移除用户名后的编号

 const isAdmin = await usermatch(userName, 'Admin') || userName=='atdirect';
 const isVIP = await usermatch(userName, 'VIPUsers') || await usermatch(userName, 'Admin') ;
  const isFreeUsers = await usermatch(userName, 'FreeUsers');
  const isTemporary = await usermatch(accountNumber, 'TemporaryAN') && !isAdmin;

  const passwd = await generatePassword(userName);

 //console.log(`getShareToken - userName: ${userName}, accountNumber: ${accountNumber}, showConversations: ${isAdmin}, isVIP: ${isVIP}, isTemporary: ${isTemporary}, accessToken: ${accessToken}, passwd: ${passwd}`);
  const body = new URLSearchParams({
     access_token: accessToken,  // 使用从全局变量中获取的 accessToken
     unique_name: passwd, //前缀+无后缀用户名
     site_limit: '', // 限制的网站
     expires_in: isVIP ? '0' : '86400', // token有效期（单位为秒），填 0 则永久有效
     gpt35_limit: '-1', // gpt3.5 对话限制
     gpt4_limit: isFreeUsers ? '30' : '-1', // gpt4 对话限制，-1为不限制
     show_conversations: isAdmin ? 'true' : 'false', // 是否显示所有人的会话
     temporary_chat: isTemporary ? 'true' : 'false', //默认启用临时聊天
     show_userinfo: isAdmin ? 'true' : 'false',  // 是否显示用户信息
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


async function handleLogin(userName, password, initialaccountNumber, turnstileResponse, anissues) {
    // Turnsile认证
    if (turnstileResponse !== 'do not need Turnstile' && (!turnstileResponse || !await verifyTurnstile(turnstileResponse))) {
        return generateLoginResponse('Turnstile verification failed');
    }

    // 初始化 credentials 变量
    const credentials = await KV.get('UserCredentials');
    const credentialsList = credentials ? JSON.parse(credentials) : {};
    const hashedPassword = credentialsList[userName];

    if (!hashedPassword || !(await verifyPassword(password, hashedPassword))) {
        await loginlog(userName, 'Bad_PW', 'Error');
        return generateLoginResponse('Invalid username or password.');
    }

    const proxiedDomain = await KV.get('WorkerURL');
    const status = await KV.get('Status');
    const GPTState = await getGPTStatus();
if ((GPTState == 'major_performance')&&(!status)){
  await loginlog(userName, 'Bad_OAIStatus','Error');
        return generateLoginResponse(`OpenAI service is under maintenance.<br>Official status: ${GPTState} <br>More details: https://status.openai.com`);
    }

 //先尝试json
  try {
    const tokenData = JSON.parse(userName);
    if (tokenData.accessToken) {
      const jsonAccessToken = tokenData.accessToken;
      const shareToken = await getShareToken('atdirect', jsonAccessToken, '0');
      if (shareToken === 'Can not get share token.') {
        return generateLoginResponse('Error fetching share token.');
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
      return generateLoginResponse('Error fetching share token.');
    }

    return Response.redirect(await getOAuthLink(shareToken, proxiedDomain), 302);
  }


// 如果输入用户名fk开头，直接视作sharetoken
  if (userName.startsWith('fk-')) {
    const shareToken = userName;
    return Response.redirect(await getOAuthLink(shareToken, proxiedDomain), 302);
  }

  const userRegex = new RegExp(`^${userName}_(\\d+)$`);
  let fullUserName = userName;
  let foundSuffix = false;
  let suffix = '';
  const forcean = await KV.get("ForceAN");
  const defaultusers = await KV.get("Users")|| '';
  const vipusers = await KV.get("VIPUsers")|| '';
  const freeusers = await KV.get("FreeUsers")|| '';
  const admin = await KV.get("Admin")|| '';
  // 合并所有用户
  const users = `${defaultusers},${vipusers},${freeusers},${admin}`;


 // 自动查找匹配的用户名格式abc_xxx，并添加后缀
  users.split(",").forEach(user => {
    const match = user.match(userRegex);
    if (match) {
      foundSuffix = true;
           suffix = match[1];  // 更新后缀为实际的账号编号
           fullUserName = user; // 更新为完整的用户名
    }
  });

  if (!foundSuffix && !users.split(",").includes(userName)) {
   await loginlog(userName, 'Bad_PW','Error');
    return generateLoginResponse('Unauthorized access.');
  }

  
 //用户权限判断，仅在users库内的用户可使用所有车(前置已判断，不过也不用删)
  if (!users.split(",").includes(fullUserName)) {
     await loginlog(userName, 'Bad_PW','Error');
    return generateLoginResponse('Unauthorized access.');
  }
 //禁止免费用户使用序号大于99的vip私享车
// if (freeusers.split(",").includes(fullUserName) && accountNumber > 99) {
//     return new Response('Unauthorized access, you are vip users.', { status: 200 });
// }
 //禁止付费用户使用序号小于99的免费车
 //if (vipusers.split(",").includes(fullUserName) && accountNumber < 100) {
 //    return new Response('Unauthorized access, please switch accounts.', { status: 200 });
 //}


 //此处决定an
  const setan = await KV.get('SetAN');
  let antype = 'Plus';
  let mode = '';
  let accountNumber = '';

   // 如果 forcean 为 1，忽略用户输入的 accountNumber，使用后缀作为 accountNumber
  if (foundSuffix && forcean === '1') {
 accountNumber = await getAccountNumber(fullUserName,suffix, antype, 'Check',anissues);
  } else {
    if (setan == 'True') {
  const plusmode = await KV.get('PlusMode'); //Random/Order
  const freemode = await KV.get('FreeMode'); //Plus/Random/Order
      antype = 'Plus';
      mode = plusmode;
 if (freemode !=='Plus'){
    if (freeusers.split(",").includes(fullUserName) ){
          antype = 'Free';
          mode = freemode;
        }
      }
 
accountNumber = await getAccountNumber(fullUserName,initialaccountNumber, antype, mode,anissues);
}
else if (setan)  {
 accountNumber = await getAccountNumber(fullUserName,setan, antype, 'Check',anissues);
}
else {
accountNumber = await getAccountNumber(fullUserName,initialaccountNumber, antype, 'Check',anissues);
    }
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
 }}

  if (isTokenExpired(accessToken)) {
      // 给没有refresh token的萌新用（比如我），取消下面这行注释即可享用
     // return generateLoginResponse('The current access token has not been updated.', false);
      
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
         await loginlog(fullUserName, `Bad RT_${accountNumber}`,'Error');
        return generateLoginResponse('Error fetching access token.');
      }
 } 
 else {
      return generateLoginResponse('The current access token has not been updated.');
    }
  }
  const finalaccessToken = await KV.get(accessTokenKey);
 const shareToken = await getShareToken(fullUserName, finalaccessToken,accountNumber);


    if (shareToken === 'Can not get share token.') {
     //await KV.put(accessTokenKey, "Bad_AT");
     await loginlog(fullUserName, `Bad AT_${accountNumber}`,'Error');
        return generateLoginResponse('Error fetching share token.');
    }


    // Log the successful login
  await loginlog(fullUserName, accountNumber, antype);

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



async function generateLoginResponse(message) {
  const setan = await KV.get('SetAN');
  const errorHtml = `
    <div class="ulp-field ulp-error">
      <div class="ulp-error-info">
        <span class="ulp-input-error-icon" role="img" aria-label="Error"></span>
        ${message}
      </div>
    </div>
  `;
  const html = await getLoginHTML(setan);
  const responseHtml = html.replace(
    '<button class="continue-btn" type="submit">Continue</button>',
    errorHtml + '<button class="continue-btn" type="submit">Continue</button>'
  );
  return new Response(responseHtml, { headers: { 'Content-Type': 'text/html' } });
}

async function getAliveAccountOptions() {
  const plusAliveAccountString = await KV.get('PlusAliveAccounts') || '';
  const freeAliveAccountString = await KV.get('FreeAliveAccounts') || '';
  const aliveAccountString = `${plusAliveAccountString},${freeAliveAccountString}`.replace(/^,|,$/g, '');
  const aliveAccounts = aliveAccountString
    .split(',')
    .map(num => parseInt(num, 10))
    .filter(num => !isNaN(num));

  return aliveAccounts.map(num => `<option value="${num}">${num}</option>`).join('');
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


async function getLoginHTML(setan) {
  const WorkerURL=await KV.get('WorkerURL');
  const turnstileSiteKey=await KV.get('TurnstileSiteKey');
  const websiteName = await KV.get('WebName') || 'Haibara AI';
  const logourl = await KV.get('LogoURL') || logo;
  const removeTurnstile = await KV.get('RemoveTurnstile')||'';
  const commonHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn1.oaifree.com/_next/static/media/apple-touch-icon.82af6fe1.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn4.oaifree.com/_next/static/media/favicon-32x32.630a2b99.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn4.oaifree.com/_next/static/media/favicon-16x16.a052137e.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login - ${websiteName}</title>
        <style>
            @charset "UTF-8";
            .oai-header img {
                height: auto;
                width: 32px;
                margin-top: 32px;
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
                    .footer {
                     text-align: center;
                     font-size: 12px;
                     padding: 10px;
                 }
         
                 .footer a {
                     color: black;
                     text-decoration: none;
                 }
         
                 .footer a:hover {
                     text-decoration: none;
                     color: black;
                 }
     
            
        </style>
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
                        <div class="title-wrapper"><h1 class="title">Welcome to ChatGPT</h1></div>
                        <div class="login-container">
                            <form id="manageAccountForm0" action="/auth/login_auth0" method="POST">
                                <div class="input-wrapper">
                                    <input
                                        class="email-input"
                                        inputmode="email"
                                        type="text"
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
                                <div class="input-wrapper">
                                    <input
                                        class="email-input"
                                        inputmode="text"
                                        type="password"
                                        id="pw"
                                        name="pw"
                                        autocomplete="current-password"
                                        autocapitalize="none"
                                        spellcheck="false"
                                        required
                                        placeholder=" "
                                    />
                                    <label class="email-label" for="pw">Password</label>
                                </div>`;

  const aliveAccountOptions = await getAliveAccountOptions();

  const accountNumberHTML = `
                                <div class="input-wrapper">
                                    <label for="an">
                                        <a class="username-label" href="https://${WorkerURL}/token">Account Number:</a>
                                        <span class="help-icon">?</span>
                                    </label>
                                    <div class="field-container">
                                        <select id="an" name="an" class="email-input">
                                            ${aliveAccountOptions}
                                        </select>
                                        <input type="number" id="an-custom" name="an-custom" class="email-input" placeholder="Enter number">
                                    </div>
                                </div>`;

  const commonHTML2 = `
                                <div class="checkbox-wrapper">
                                    <input type="checkbox" id="an-issues" name="anissues" />
                                    <label class="checkbox-label" for="an-issues">Report Account Issues</label>
                                </div>
                                <button class="continue-btn" type="submit">Continue</button>
                            </form>
                            <div class="divider-wrapper"><span class="divider">Or</span></div>
                            <p class="other-page">Don't have an account? <a class="other-page-link" href="https://${WorkerURL}/register">Sign Up</a></p>
                                <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
                                <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
        <footer class="footer">
               <p>&copy; All rights reserved. | Powered by <a href="https://chatgpt.com" target="_blank">OpenAI</a></p>
           </footer>
           
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
    </html>`;

  return setan ? commonHTML + commonHTML2 : commonHTML + accountNumberHTML + commonHTML2;
}
