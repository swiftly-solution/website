---
title: SteamGameServerHTTP
---

```csharp
public static class SteamGameServerHTTP
```

#### Inheritance

#### Inherited Members

## Methods

### CreateCookieContainer(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L193)

```csharp
public static HTTPCookieContainerHandle CreateCookieContainer(bool bAllowResponsesToModify)
```

#### Parameters

- **bAllowResponsesToModify**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [HTTPCookieContainerHandle](/docs/api/shared/steamapi/httpcookiecontainerhandle)

### CreateHTTPRequest(EHTTPMethod, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L12)

```csharp
public static HTTPRequestHandle CreateHTTPRequest(EHTTPMethod eHTTPRequestMethod, string pchAbsoluteURL)
```

#### Parameters

- **eHTTPRequestMethod**: [EHTTPMethod](/docs/api/shared/steamapi/ehttpmethod)
- **pchAbsoluteURL**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)

### DeferHTTPRequest(HTTPRequestHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L88)

```csharp
public static bool DeferHTTPRequest(HTTPRequestHandle hRequest)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHTTPDownloadProgressPct(HTTPRequestHandle, out float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L169)

```csharp
public static bool GetHTTPDownloadProgressPct(HTTPRequestHandle hRequest, out float pflPercentOut)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pflPercentOut**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHTTPRequestWasTimedOut(HTTPRequestHandle, out bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L257)

```csharp
public static bool GetHTTPRequestWasTimedOut(HTTPRequestHandle hRequest, out bool pbWasTimedOut)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pbWasTimedOut**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHTTPResponseBodyData(HTTPRequestHandle, byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L140)

```csharp
public static bool GetHTTPResponseBodyData(HTTPRequestHandle hRequest, byte[] pBodyDataBuffer, uint unBufferSize)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pBodyDataBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **unBufferSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHTTPResponseBodySize(HTTPRequestHandle, out uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L130)

```csharp
public static bool GetHTTPResponseBodySize(HTTPRequestHandle hRequest, out uint unBodySize)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **unBodySize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHTTPResponseHeaderSize(HTTPRequestHandle, string, out uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L107)

```csharp
public static bool GetHTTPResponseHeaderSize(HTTPRequestHandle hRequest, string pchHeaderName, out uint unResponseHeaderSize)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pchHeaderName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **unResponseHeaderSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHTTPResponseHeaderValue(HTTPRequestHandle, string, byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L119)

```csharp
public static bool GetHTTPResponseHeaderValue(HTTPRequestHandle hRequest, string pchHeaderName, byte[] pHeaderValueBuffer, uint unBufferSize)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pchHeaderName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pHeaderValueBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **unBufferSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHTTPStreamingResponseBodyData(HTTPRequestHandle, uint, byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L150)

```csharp
public static bool GetHTTPStreamingResponseBodyData(HTTPRequestHandle hRequest, uint cOffset, byte[] pBodyDataBuffer, uint unBufferSize)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **cOffset**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **pBodyDataBuffer**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **unBufferSize**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PrioritizeHTTPRequest(HTTPRequestHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L97)

```csharp
public static bool PrioritizeHTTPRequest(HTTPRequestHandle hRequest)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReleaseCookieContainer(HTTPCookieContainerHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L201)

```csharp
public static bool ReleaseCookieContainer(HTTPCookieContainerHandle hCookieContainer)
```

#### Parameters

- **hCookieContainer**: [HTTPCookieContainerHandle](/docs/api/shared/steamapi/httpcookiecontainerhandle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReleaseHTTPRequest(HTTPRequestHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L159)

```csharp
public static bool ReleaseHTTPRequest(HTTPRequestHandle hRequest)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendHTTPRequest(HTTPRequestHandle, out SteamAPICall_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L69)

```csharp
public static bool SendHTTPRequest(HTTPRequestHandle hRequest, out SteamAPICall_t pCallHandle)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pCallHandle**: [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SendHTTPRequestAndStreamResponse(HTTPRequestHandle, out SteamAPICall_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L79)

```csharp
public static bool SendHTTPRequestAndStreamResponse(HTTPRequestHandle hRequest, out SteamAPICall_t pCallHandle)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pCallHandle**: [SteamAPICall_t](/docs/api/shared/steamapi/steamapicall_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetCookie(HTTPCookieContainerHandle, string, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L209)

```csharp
public static bool SetCookie(HTTPCookieContainerHandle hCookieContainer, string pchHost, string pchUrl, string pchCookie)
```

#### Parameters

- **hCookieContainer**: [HTTPCookieContainerHandle](/docs/api/shared/steamapi/httpcookiecontainerhandle)
- **pchHost**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchUrl**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchCookie**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestAbsoluteTimeoutMS(HTTPRequestHandle, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L249)

```csharp
public static bool SetHTTPRequestAbsoluteTimeoutMS(HTTPRequestHandle hRequest, uint unMilliseconds)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **unMilliseconds**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestContextValue(HTTPRequestHandle, ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L23)

```csharp
public static bool SetHTTPRequestContextValue(HTTPRequestHandle hRequest, ulong ulContextValue)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **ulContextValue**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestCookieContainer(HTTPRequestHandle, HTTPCookieContainerHandle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L221)

```csharp
public static bool SetHTTPRequestCookieContainer(HTTPRequestHandle hRequest, HTTPCookieContainerHandle hCookieContainer)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **hCookieContainer**: [HTTPCookieContainerHandle](/docs/api/shared/steamapi/httpcookiecontainerhandle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestGetOrPostParameter(HTTPRequestHandle, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L55)

```csharp
public static bool SetHTTPRequestGetOrPostParameter(HTTPRequestHandle hRequest, string pchParamName, string pchParamValue)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pchParamName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchParamValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestHeaderValue(HTTPRequestHandle, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L42)

```csharp
public static bool SetHTTPRequestHeaderValue(HTTPRequestHandle hRequest, string pchHeaderName, string pchHeaderValue)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pchHeaderName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pchHeaderValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestNetworkActivityTimeout(HTTPRequestHandle, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L33)

```csharp
public static bool SetHTTPRequestNetworkActivityTimeout(HTTPRequestHandle hRequest, uint unTimeoutSeconds)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **unTimeoutSeconds**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestRawPostBody(HTTPRequestHandle, string, byte[], uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L179)

```csharp
public static bool SetHTTPRequestRawPostBody(HTTPRequestHandle hRequest, string pchContentType, byte[] pubBody, uint unBodyLen)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pchContentType**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **pubBody**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]
- **unBodyLen**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestRequiresVerifiedCertificate(HTTPRequestHandle, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L240)

```csharp
public static bool SetHTTPRequestRequiresVerifiedCertificate(HTTPRequestHandle hRequest, bool bRequireVerifiedCertificate)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **bRequireVerifiedCertificate**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetHTTPRequestUserAgentInfo(HTTPRequestHandle, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameserverhttp.cs#L229)

```csharp
public static bool SetHTTPRequestUserAgentInfo(HTTPRequestHandle hRequest, string pchUserAgentInfo)
```

#### Parameters

- **hRequest**: [HTTPRequestHandle](/docs/api/shared/steamapi/httprequesthandle)
- **pchUserAgentInfo**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

