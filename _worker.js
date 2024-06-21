addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
// @ts-ignore
const KV = oai_global_variables;
const logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0zNy41MzI0IDE2Ljg3MDdDMzcuOTgwOCAxNS41MjQxIDM4LjEzNjMgMTQuMDk3NCAzNy45ODg2IDEyLjY4NTlDMzcuODQwOSAxMS4yNzQ0IDM3LjM5MzQgOS45MTA3NiAzNi42NzYgOC42ODYyMkMzNS42MTI2IDYuODM0MDQgMzMuOTg4MiA1LjM2NzYgMzIuMDM3MyA0LjQ5ODVDMzAuMDg2NCAzLjYyOTQxIDI3LjkwOTggMy40MDI1OSAyNS44MjE1IDMuODUwNzhDMjQuODc5NiAyLjc4OTMgMjMuNzIxOSAxLjk0MTI1IDIyLjQyNTcgMS4zNjM0MUMyMS4xMjk1IDAuNzg1NTc1IDE5LjcyNDkgMC40OTEyNjkgMTguMzA1OCAwLjUwMDE5N0MxNi4xNzA4IDAuNDk1MDQ0IDE0LjA4OTMgMS4xNjgwMyAxMi4zNjE0IDIuNDIyMTRDMTAuNjMzNSAzLjY3NjI0IDkuMzQ4NTMgNS40NDY2NiA4LjY5MTcgNy40NzgxNUM3LjMwMDg1IDcuNzYyODYgNS45ODY4NiA4LjM0MTQgNC44Mzc3IDkuMTc1MDVDMy42ODg1NCAxMC4wMDg3IDIuNzMwNzMgMTEuMDc4MiAyLjAyODM5IDEyLjMxMkMwLjk1NjQ2NCAxNC4xNTkxIDAuNDk4OTA1IDE2LjI5ODggMC43MjE2OTggMTguNDIyOEMwLjk0NDQ5MiAyMC41NDY3IDEuODM2MTIgMjIuNTQ0OSAzLjI2OCAyNC4xMjkzQzIuODE5NjYgMjUuNDc1OSAyLjY2NDEzIDI2LjkwMjYgMi44MTE4MiAyOC4zMTQxQzIuOTU5NTEgMjkuNzI1NiAzLjQwNzAxIDMxLjA4OTIgNC4xMjQzNyAzMi4zMTM4QzUuMTg3OTEgMzQuMTY1OSA2LjgxMjMgMzUuNjMyMiA4Ljc2MzIxIDM2LjUwMTNDMTAuNzE0MSAzNy4zNzA0IDEyLjg5MDcgMzcuNTk3MyAxNC45Nzg5IDM3LjE0OTJDMTUuOTIwOCAzOC4yMTA3IDE3LjA3ODYgMzkuMDU4NyAxOC4zNzQ3IDM5LjYzNjZDMTkuNjcwOSA0MC4yMTQ0IDIxLjA3NTUgNDAuNTA4NyAyMi40OTQ2IDQwLjQ5OThDMjQuNjMwNyA0MC41MDU0IDI2LjcxMzMgMzkuODMyMSAyOC40NDE4IDM4LjU3NzJDMzAuMTcwNCAzNy4zMjIzIDMxLjQ1NTYgMzUuNTUwNiAzMi4xMTE5IDMzLjUxNzlDMzMuNTAyNyAzMy4yMzMyIDM0LjgxNjcgMzIuNjU0NyAzNS45NjU5IDMxLjgyMUMzNy4xMTUgMzAuOTg3NCAzOC4wNzI4IDI5LjkxNzggMzguNzc1MiAyOC42ODRDMzkuODQ1OCAyNi44MzcxIDQwLjMwMjMgMjQuNjk3OSA0MC4wNzg5IDIyLjU3NDhDMzkuODU1NiAyMC40NTE3IDM4Ljk2MzkgMTguNDU0NCAzNy41MzI0IDE2Ljg3MDdaTTIyLjQ5NzggMzcuODg0OUMyMC43NDQzIDM3Ljg4NzQgMTkuMDQ1OSAzNy4yNzMzIDE3LjY5OTQgMzYuMTUwMUMxNy43NjAxIDM2LjExNyAxNy44NjY2IDM2LjA1ODYgMTcuOTM2IDM2LjAxNjFMMjUuOTAwNCAzMS40MTU2QzI2LjEwMDMgMzEuMzAxOSAyNi4yNjYzIDMxLjEzNyAyNi4zODEzIDMwLjkzNzhDMjYuNDk2NCAzMC43Mzg2IDI2LjU1NjMgMzAuNTEyNCAyNi41NTQ5IDMwLjI4MjVWMTkuMDU0MkwyOS45MjEzIDIwLjk5OEMyOS45Mzg5IDIxLjAwNjggMjkuOTU0MSAyMS4wMTk4IDI5Ljk2NTYgMjEuMDM1OUMyOS45NzcgMjEuMDUyIDI5Ljk4NDIgMjEuMDcwNyAyOS45ODY3IDIxLjA5MDJWMzAuMzg4OUMyOS45ODQyIDMyLjM3NSAyOS4xOTQ2IDM0LjI3OTEgMjcuNzkwOSAzNS42ODQxQzI2LjM4NzIgMzcuMDg5MiAyNC40ODM4IDM3Ljg4MDYgMjIuNDk3OCAzNy44ODQ5Wk02LjM5MjI3IDMxLjAwNjRDNS41MTM5NyAyOS40ODg4IDUuMTk3NDIgMjcuNzEwNyA1LjQ5ODA0IDI1Ljk4MzJDNS41NTcxOCAyNi4wMTg3IDUuNjYwNDggMjYuMDgxOCA1LjczNDYxIDI2LjEyNDRMMTMuNjk5IDMwLjcyNDhDMTMuODk3NSAzMC44NDA4IDE0LjEyMzMgMzAuOTAyIDE0LjM1MzIgMzAuOTAyQzE0LjU4MyAzMC45MDIgMTQuODA4OCAzMC44NDA4IDE1LjAwNzMgMzAuNzI0OEwyNC43MzEgMjUuMTEwM1YyOC45OTc5QzI0LjczMjEgMjkuMDE3NyAyNC43MjgzIDI5LjAzNzYgMjQuNzE5OSAyOS4wNTU2QzI0LjcxMTUgMjkuMDczNiAyNC42OTg4IDI5LjA4OTMgMjQuNjgyOSAyOS4xMDEyTDE2LjYzMTcgMzMuNzQ5N0MxNC45MDk2IDM0Ljc0MTYgMTIuODY0MyAzNS4wMDk3IDEwLjk0NDcgMzQuNDk1NEM5LjAyNTA2IDMzLjk4MTEgNy4zODc4NSAzMi43MjYzIDYuMzkyMjcgMzEuMDA2NFpNNC4yOTcwNyAxMy42MTk0QzUuMTcxNTYgMTIuMDk5OCA2LjU1Mjc5IDEwLjkzNjQgOC4xOTg4NSAxMC4zMzI3QzguMTk4ODUgMTAuNDAxMyA4LjE5NDkxIDEwLjUyMjggOC4xOTQ5MSAxMC42MDcxVjE5LjgwOEM4LjE5MzUxIDIwLjAzNzggOC4yNTMzNCAyMC4yNjM4IDguMzY4MjMgMjAuNDYyOUM4LjQ4MzEyIDIwLjY2MTkgOC42NDg5MyAyMC44MjY3IDguODQ4NjMgMjAuOTQwNEwxOC41NzIzIDI2LjU1NDJMMTUuMjA2IDI4LjQ5NzlDMTUuMTg5NCAyOC41MDg5IDE1LjE3MDMgMjguNTE1NSAxNS4xNTA1IDI4LjUxNzNDMTUuMTMwNyAyOC41MTkxIDE1LjExMDcgMjguNTE2IDE1LjA5MjQgMjguNTA4Mkw3LjA0MDQ2IDIzLjg1NTdDNS4zMjEzNSAyMi44NjAxIDQuMDY3MTYgMjEuMjIzNSAzLjU1Mjg5IDE5LjMwNDZDMy4wMzg2MiAxNy4zODU4IDMuMzA2MjQgMTUuMzQxMyA0LjI5NzA3IDEzLjYxOTRaTTMxLjk1NSAyMC4wNTU2TDIyLjIzMTIgMTQuNDQxMUwyNS41OTc2IDEyLjQ5ODFDMjUuNjE0MiAxMi40ODcyIDI1LjYzMzMgMTIuNDgwNSAyNS42NTMxIDEyLjQ3ODdDMjUuNjcyOSAxMi40NzY5IDI1LjY5MjggMTIuNDgwMSAyNS43MTExIDEyLjQ4NzlMMzMuNzYzMSAxNy4xMzY0QzM0Ljk5NjcgMTcuODQ5IDM2LjAwMTcgMTguODk4MiAzNi42NjA2IDIwLjE2MTNDMzcuMzE5NCAyMS40MjQ0IDM3LjYwNDcgMjIuODQ5IDM3LjQ4MzIgMjQuMjY4NEMzNy4zNjE3IDI1LjY4NzggMzYuODM4MiAyNy4wNDMyIDM1Ljk3NDMgMjguMTc1OUMzNS4xMTAzIDI5LjMwODYgMzMuOTQxNSAzMC4xNzE3IDMyLjYwNDcgMzAuNjY0MUMzMi42MDQ3IDMwLjU5NDcgMzIuNjA0NyAzMC40NzMzIDMyLjYwNDcgMzAuMzg4OVYyMS4xODhDMzIuNjA2NiAyMC45NTg2IDMyLjU0NzQgMjAuNzMyOCAzMi40MzMyIDIwLjUzMzhDMzIuMzE5IDIwLjMzNDggMzIuMTU0IDIwLjE2OTggMzEuOTU1IDIwLjA1NTZaTTM1LjMwNTUgMTUuMDEyOEMzNS4yNDY0IDE0Ljk3NjUgMzUuMTQzMSAxNC45MTQyIDM1LjA2OSAxNC44NzE3TDI3LjEwNDUgMTAuMjcxMkMyNi45MDYgMTAuMTU1NCAyNi42ODAzIDEwLjA5NDMgMjYuNDUwNCAxMC4wOTQzQzI2LjIyMDYgMTAuMDk0MyAyNS45OTQ4IDEwLjE1NTQgMjUuNzk2MyAxMC4yNzEyTDE2LjA3MjYgMTUuODg1OFYxMS45OTgyQzE2LjA3MTUgMTEuOTc4MyAxNi4wNzUzIDExLjk1ODUgMTYuMDgzNyAxMS45NDA1QzE2LjA5MjEgMTEuOTIyNSAxNi4xMDQ4IDExLjkwNjggMTYuMTIwNyAxMS44OTQ5TDI0LjE3MTkgNy4yNTAyNUMyNS40MDUzIDYuNTM5MDMgMjYuODE1OCA2LjE5Mzc2IDI4LjIzODMgNi4yNTQ4MkMyOS42NjA4IDYuMzE1ODkgMzEuMDM2NCA2Ljc4MDc3IDMyLjIwNDQgNy41OTUwOEMzMy4zNzIzIDguNDA5MzkgMzQuMjg0MiA5LjUzOTQ1IDM0LjgzMzQgMTAuODUzMUMzNS4zODI2IDEyLjE2NjcgMzUuNTQ2NCAxMy42MDk1IDM1LjMwNTUgMTUuMDEyOFpNMTQuMjQyNCAyMS45NDE5TDEwLjg3NTIgMTkuOTk4MUMxMC44NTc2IDE5Ljk4OTMgMTAuODQyMyAxOS45NzYzIDEwLjgzMDkgMTkuOTYwMkMxMC44MTk1IDE5Ljk0NDEgMTAuODEyMiAxOS45MjU0IDEwLjgwOTggMTkuOTA1OFYxMC42MDcxQzEwLjgxMDcgOS4xODI5NSAxMS4yMTczIDcuNzg4NDggMTEuOTgxOSA2LjU4Njk2QzEyLjc0NjYgNS4zODU0NCAxMy44Mzc3IDQuNDI2NTkgMTUuMTI3NSAzLjgyMjY0QzE2LjQxNzMgMy4yMTg2OSAxNy44NTI0IDIuOTk0NjQgMTkuMjY0OSAzLjE3NjdDMjAuNjc3NSAzLjM1ODc2IDIyLjAwODkgMy45Mzk0MSAyMy4xMDM0IDQuODUwNjdDMjMuMDQyNyA0Ljg4Mzc5IDIyLjkzNyA0Ljk0MjE1IDIyLjg2NjggNC45ODQ3M0wxNC45MDI0IDkuNTg1MTdDMTQuNzAyNSA5LjY5ODc4IDE0LjUzNjYgOS44NjM1NiAxNC40MjE1IDEwLjA2MjZDMTQuMzA2NSAxMC4yNjE2IDE0LjI0NjYgMTAuNDg3NyAxNC4yNDc5IDEwLjcxNzVMMTQuMjQyNCAyMS45NDE5Wk0xNi4wNzEgMTcuOTk5MUwyMC40MDE4IDE1LjQ5NzhMMjQuNzMyNSAxNy45OTc1VjIyLjk5ODVMMjAuNDAxOCAyNS40OTgzTDE2LjA3MSAyMi45OTg1VjE3Ljk5OTFaIgogICAgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=';

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
async function refreshAT(tochecktoken, an) {
  // 检查 token 是否存在，如果不存在或为空字符串，直接返回 true  
  const accessTokenKey = `at_${an}`;
  const token = tochecktoken || await KV.get(accessTokenKey) || '';
  if (token && token !== "Bad_RT" && token !== "Old_AT") {
    const payload = parseJwt(token);
    const currentTime = Math.floor(Date.now() / 1000);// 获取当前时间戳（秒）
    if (payload.exp > currentTime) {
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
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
  if (removeTurnstile) { return 'true' }
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
  const typeUsers = await KV.get(usertype) || '';
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


  if (!admin) {
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

  if (url.pathname.startsWith('/export')) {
    if (request.method === 'GET') {
      return handleExportGetRequest(request);
    } else if (request.method === 'POST') {
      return handleExportPostRequest(request);
    } else {
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

  if (url.pathname.startsWith('/usage')) {
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
          await deletelog(UserName, aian, 'Message');

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
  if (voiceURL) {
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
  return response;
}


//初始化信息填入功能
async function handleInitialRequest(request) {
  const admin = await KV.get('Admin');
  if (!admin) {
    if (request.method === 'GET') {
      return handleInitialGetRequest();
    } else if (request.method === 'POST') {
      return handleInitialPostRequest(request);
    } else {
      return new Response('Method not allowed', { status: 405 });
    }
  }
  else {
    return new Response('Already Have Admin', { status: 405 });
  }
}

async function handleInitialPostRequest(request) {
  const formData = await request.formData();
  const fields = [
    'TurnstileKeys', 'TurnstileSiteKey', 'Users', 'VIPUsers', 'FreeUsers',
    'Admin', 'ForceAN', 'SetAN', 'PlusMode', 'FreeMode', 'WebName',
    'WorkerURL', 'VoiceURL', 'LogoURL', 'CDKEY', 'AutoDeleteCDK', 'FKDomain', 'Status',
    'PlusAliveAccounts', 'FreeAliveAccounts', 'rt_1', 'rt_2', 'at_1', 'at_2', 'FreeURL', 'ChatUserName', 'ChatMail', 'ChatLogoURL', 'RemoveTurnstile', 'ModerationApiKey'
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
    { name: 'Admin', label: '【必填】管理员 (用于管理面板的验证使用，且可看所有聊天记录)', isrequired: 'required' },
    { name: 'TurnstileKeys', label: '【必填】Turnstile密钥', isrequired: 'required' },
    { name: 'TurnstileSiteKey', label: '【必填】Turnstile站点密钥', isrequired: 'required' },
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
      jsonRefreshToken = tokenData.refresh_token || '';
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
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
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
  else {
    return new Response('Unauthorized access', { status: 403 });
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

    if (operationType == 'txt') {
      // 验证 tokenType 和 accountType 是否有效
      const validTokenTypes = ['rt', 'at'];
      const validAccountTypes = ['Free', 'Plus'];
      if (!validTokenTypes.includes(tokenType) || !validAccountTypes.includes(accountType)) {
        return new Response('Invalid token or account type', { status: 400 });
      }

      // 调用 exportToken 函数并返回结果
      return await exportToken(tokenType, accountType);
    }
    else {
      const WorkerURL = await KV.get('WorkerURL');
      return new Response(`https://${WorkerURL}/export?admin=${adminPassword}&type=${accountType}&token=${tokenType}`, { status: 200 });
    }
  }

  else {
    return new Response('Unauthorized access', { status: 403 });
  }
}


async function getExportHTML() {
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
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
  const WorkerURL = await KV.get('WorkerURL');
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
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
  const defaultusers = await KV.get("Users") || '';
  const vipusers = await KV.get("VIPUsers") || '';
  const freeusers = await KV.get("FreeUsers") || '';
  const admin = await KV.get("Admin") || '';
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

    const accountNumber = await getToCheckAccountNumber(fullUserName, 'Plus');
    const accessToken = await KV.get(`at_${accountNumber}`) || '1';
    const shareToken = await getToCheckShareToken(fullUserName, accessToken);
    const queryLimit = await handleQueryRequest(accessToken, shareToken);
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
    const WorkerURL = await KV.get('WorkerURL');
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

  const accountNumber = await getToCheckAccountNumber(userName, 'Plus');
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

async function getToCheckShareToken(userName, accessToken) {
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
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
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
              padding: 40px 40px 24px;
              box-sizing: content-box;
              text-align: center;
          }
  
          .title {
              font: 'Söhne';
              margin: 0;
              color: #2d333a;
              width: 320px;
              margin: 24px 0 0;
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

      .oai-footer {
          text-align: center;
          padding: 12px 0 24px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6e6e80;
          flex: 0 0 auto
      }
      .separator:before {
          content: " | ";
          margin: 0 8px
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
      <footer class="oai-footer"><a href="https://openai.com/policies/terms-of-use">Terms of Use</a><span class="separator"></span><a href="https://openai.com/policies/privacy-policy">Privacy Policy</a></footer>
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
        const shareToken = await getToCheckShareToken(adminUsername, accessToken);
        const queryLimit = await handleQueryRequest(accessToken, shareToken);
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
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
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
  if (!token || token === "Bad_RT" || token === "Bad_AT") {
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
async function getShareToken(userName, accessToken, accountNumber) {
  const url = 'https://chat.oaifree.com/token/register';
  // const tokenPrefix = await KV.get('TokenPrefix');
  //const baseUserName = tokenPrefix + userName.replace(/_\d+$/, ''); // 移除用户名后的编号

  const isAdmin = await usermatch(userName, 'Admin') || userName == 'atdirect';
  const isVIP = await usermatch(userName, 'VIPUsers') || await usermatch(userName, 'Admin');
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
  if ((GPTState == 'major_performance') && (!status)) {
    await loginlog(userName, 'Bad_OAIStatus', 'Error');
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
  const defaultusers = await KV.get("Users") || '';
  const vipusers = await KV.get("VIPUsers") || '';
  const freeusers = await KV.get("FreeUsers") || '';
  const admin = await KV.get("Admin") || '';
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
    await loginlog(userName, 'Bad_PW', 'Error');
    return generateLoginResponse('Unauthorized access.');
  }


  //用户权限判断，仅在users库内的用户可使用所有车(前置已判断，不过也不用删)
  if (!users.split(",").includes(fullUserName)) {
    await loginlog(userName, 'Bad_PW', 'Error');
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
    accountNumber = await getAccountNumber(fullUserName, suffix, antype, 'Check', anissues);
  } else {
    if (setan == 'True') {
      const plusmode = await KV.get('PlusMode'); //Random/Order
      const freemode = await KV.get('FreeMode'); //Plus/Random/Order
      antype = 'Plus';
      mode = plusmode;
      if (freemode !== 'Plus') {
        if (freeusers.split(",").includes(fullUserName)) {
          antype = 'Free';
          mode = freemode;
        }
      }

      accountNumber = await getAccountNumber(fullUserName, initialaccountNumber, antype, mode, anissues);
    }
    else if (setan) {
      accountNumber = await getAccountNumber(fullUserName, setan, antype, 'Check', anissues);
    }
    else {
      accountNumber = await getAccountNumber(fullUserName, initialaccountNumber, antype, 'Check', anissues);
    }
  }


  const refreshTokenKey = `rt_${accountNumber}`;
  const accessTokenKey = `at_${accountNumber}`;
  const accessToken = await KV.get(accessTokenKey);

  //使用佬友的sharetoken
  if (accessToken) {
    if (accessToken.startsWith('fk-')) {
      const fkDomain = await KV.get('FKDomain') || proxiedDomain;
      //return Response.redirect(await getOAuthLink(accessToken, fkDomain), 302);
      return Response.redirect(`https://${fkDomain}/auth/login_share?token=${accessToken}`)
    }
  }

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
        await loginlog(fullUserName, `Bad RT_${accountNumber}`, 'Error');
        return generateLoginResponse('Error fetching access token.');
      }
    }
    else {
      return generateLoginResponse('The current access token has not been updated.');
    }
  }
  const finalaccessToken = await KV.get(accessTokenKey);
  const shareToken = await getShareToken(fullUserName, finalaccessToken, accountNumber);


  if (shareToken === 'Can not get share token.') {
    //await KV.put(accessTokenKey, "Bad_AT");
    await loginlog(fullUserName, `Bad AT_${accountNumber}`, 'Error');
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

async function deletelog(userName, accountNumber, antype) {
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
          await deletelog(userName, accountNumber, antype);
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

async function getGPTStatus() {
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
  else { return 'operational'; }
}


async function getLoginHTML(setan) {
  const WorkerURL = await KV.get('WorkerURL');
  const turnstileSiteKey = await KV.get('TurnstileSiteKey');
  const websiteName = await KV.get('WebName') || 'Haibara AI';
  const logourl = await KV.get('LogoURL') || logo;
  const removeTurnstile = await KV.get('RemoveTurnstile') || '';
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
                padding: 40px 40px 24px;
                box-sizing: content-box;
                text-align: center;
            }

            .title {
                font: 'Söhne';
                margin: 0;
                color: #2d333a;
                width: 320px;
                margin: 24px 0 0;
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
                 .oai-footer {
                      text-align: center;
                      padding: 12px 0 24px;
                      font-size: 14px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: #6e6e80;
                      flex: 0 0 auto
                  }

                  .separator:before {
                      content: " | ";
                      margin: 0 8px
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
                                 <input type="hidden" id="cf-turnstile-response" name="cf-turnstile-response" required>
                            </form>
                            <div class="divider-wrapper"><span class="divider">Or</span></div>
                            <p class="other-page">Don't have an account? <a class="other-page-link" href="https://${WorkerURL}/register">Sign Up</a></p>
                            <div class="cf-turnstile" data-sitekey="${turnstileSiteKey}" data-callback="onTurnstileCallback"></div>
                          </div>
                    </section>
                </main>
            </div>
        </div>
        <footer class="oai-footer"><a href="https://openai.com/policies/terms-of-use">Terms of Use</a><span class="separator"></span><a href="https://openai.com/policies/privacy-policy">Privacy Policy</a></footer>
           
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
